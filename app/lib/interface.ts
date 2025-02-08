import { PortableTextBlock } from "next-sanity";

export interface ProjectCard {
  order: number;
  url: string;
  image: string;
  applicationType: string;
  techs: string[];
  brand: string;
  description: string;
}

export interface ProjectDetail {
  title: string;
  description: string;
  keyFeatures: PortableTextBlock | null;
  responsive: string[];
  stack: PortableTextBlock;
  applicationType: string;
  github: string;
  live: string | null;
  video: string;
  role: string;
}

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
  LANGUAGE = "programing languages",
  DATABASES = "databases",
  SECURITY = "security",
}
