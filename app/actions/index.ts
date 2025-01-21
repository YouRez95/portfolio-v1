"use server";

import { Resend } from "resend";
import { client } from "../lib/sanity";

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

// GET ALL BLOGS
export const getBlogs = async () => {
  const query = `*[_type == "blog"] | order(publishedAt desc) { 
  _id,
  title,
  "image": coverImage,
  tags,
  "slug": slug.current,
  description,
  publishedAt,
}`;

  console.log("get blogs");
  const data = await client.fetch(query);
  return data;
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
