import { PortableTextBlock } from "next-sanity";

export interface BlogCard {
  _id: string;
  title: string;
  slug: string;
  description: string;
  publishedAt: string;
  image: string;
  tags: string[];
}

export interface fullBlog {
  _id: string;
  title: string;
  slug: string;
  description: string;
  publishedAt: string;
  image: string;
  tags: string[];
  content: PortableTextBlock;
}

export enum BlogTags {
  ALL = "all",
  LANGUAGE = "language",
  DATABASES = "Databases",
  SECURITY = "Security",
}
