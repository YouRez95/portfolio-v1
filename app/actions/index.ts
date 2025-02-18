"use server";

import { Resend } from "resend";
import { client } from "../lib/sanity";
import {
  BlogCard,
  BlogTags,
  ProjectCard,
  ProjectDetail,
} from "../lib/interface";
import { groq } from "next-sanity";
import { MAX_ITEMS } from "../constants/blogs";

// SEND EMAIL
export const sendEmail = async ({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) => {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.RECEIVER_EMAIL as string,
      subject: `New message from portfolio`,
      html: `
      <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error: "Failed to send email." };
  }
};

// GET LAST BLOG
export const getLastBlog = async (): Promise<BlogCard> => {
  const query = `*[_type == "blog"] | order(publishedAt desc) { 
      _id,
      title,
      "image": coverImage,
      tags,
      "slug": slug.current,
      description,
      publishedAt,
    }[0]`;

  const data = await client.fetch(query);
  return data;
};

// GET THREE BLOGS

export const getThreeBlogs = async (): Promise<BlogCard[]> => {
  const query = groq`
    *[_type == "blog"] | order(publishedAt desc) { 
      _id,
      title,
      "image": coverImage,
      "slug": slug.current,
    }[0...3]
  `;

  const data = await client.fetch(query);
  return data;
};

export const getBlogCount = async ({
  category,
}: {
  category: string;
}): Promise<number> => {
  const query = `count(*[_type == "blog" ${category && category !== BlogTags.ALL ? `&& "${category}" in tags` : ""}])`;
  const count = await client.fetch(query);
  return count;
};

export const getBlogs = async ({
  category,
  page,
}: {
  category?: string | null;
  page?: string;
}): Promise<{
  data: BlogCard[];
}> => {
  const currentPage = page ? Math.max(1, parseInt(page)) : 1;
  const offset = (currentPage - 1) * MAX_ITEMS;

  const query = groq`
    *[_type == "blog" ${category && category !== BlogTags.ALL ? `&& "${category}" in tags` : ""}] | order(publishedAt desc) { 
      _id,
      title,
      "image": coverImage,
      tags,
      "slug": slug.current,
      description,
      publishedAt,
    }[${offset}...${offset + MAX_ITEMS}]
  `;

  const data = await client.fetch(query);
  return { data };
};

// GET BLOG BY SLUG
export const getBlogBySlug = async (slug: string) => {
  const query = `
  *[_type == "blog" && slug.current == '${slug}'] { 
  _id,
  title,
  "slug": slug.current,
  "image": coverImage,
  description,
  publishedAt,
  tags,
  content
}
  `;
  const data = await client.fetch(query);
  return data;
};

//  GET BLOGS BY TAGS
export const getBlogsByTags = async (
  tags: string[],
  currentSlug: string
): Promise<BlogCard[]> => {
  const query = `
  *[_type == "blog" && count((tags[@ in ${JSON.stringify(tags)}])) > 0 && slug.current != '${currentSlug}'] | order(publishedAt desc) [0...3] { 
    _id,
    title,
    "image": coverImage,
    tags,
    "slug": slug.current,
    description,
    publishedAt,
  }
  `;
  const data = await client.fetch(query);
  return data;
};

// GET PROJECTS
export const getProjects = async (): Promise<ProjectCard[]> => {
  const query = `
  *[_type == "project"] | order(order asc) { 
  order,
  brand,
  url,
  applicationType,
  techs,
  image,
  description,
}
  `;
  const data = await client.fetch(query);
  return data;
};

// GET SINGLE PROJECT
export const getSingleProject = async (
  projectTitle: string
): Promise<ProjectDetail> => {
  const query = `
  *[_type == "projectDetail" && title == "${projectTitle}"] {
  description,
    keyFeatures,
    title,
    github,
    live,
    stack,
    applicationType,
    responsive,
    video,
    role
}
  `;

  const data = await client.fetch(query);
  return data[0];
};

// ADD FEEDBACK

type FeedbackData = {
  name: string;
  email: string;
  message: string;
  projectName: string;
  rating: number;
  avatar: number;
};

export const addFeedback = async ({
  avatar,
  email,
  message,
  name,
  projectName,
  rating,
}: FeedbackData) => {
  if (!name || !email || !message || !projectName || !rating || !avatar) {
    return { success: false, error: "All fields are required." };
  }

  try {
    await client.create({
      _type: "feedback",
      name,
      email,
      message,
      projectName,
      rating,
      avatar,
      createdAt: new Date().toISOString(),
      approved: false,
    });
    return { success: true };
  } catch (error) {
    console.error("Error adding feedback:", error);
    return { success: false, error: "Failed to add feedback." };
  }
};

// GET FEEDBACKS
export type GetFeedbacks = FeedbackData & { _id: string; createdAt: string };

export const getFeedbacks = async (): Promise<GetFeedbacks[]> => {
  const query = `
  *[_type == "feedback" && approved == true] | order(createdAt desc) { 
  _id,
  name,
  email,
  message,
  projectName,
  rating,
  avatar,
  createdAt,
}
  `;

  const data = await client.fetch(query, {}, { next: { revalidate: 0 } });
  // const data = await client.fetch(query, {}, {next: {revalidate: 86400}});
  return data;
};
