"use server";

import { Resend } from "resend";
import { client } from "../lib/sanity";
import { BlogCard, BlogTags } from "../lib/interface";
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
export const getLastBlog = async ({
  category,
}: {
  category?: BlogTags;
}): Promise<BlogCard> => {
  let query: string;

  if (!category || category === BlogTags.ALL) {
    query = `*[_type == "blog"] | order(publishedAt desc) { 
      _id,
      title,
      "image": coverImage,
      tags,
      "slug": slug.current,
      description,
      publishedAt,
    }[0]`;
  } else {
    query = `*[_type == "blog" && "${category}" in tags] | order(publishedAt desc) { 
      _id,
      title,
      "image": coverImage,
      tags,
      "slug": slug.current,
      description,
      publishedAt,
    }[0]`;
  }

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
