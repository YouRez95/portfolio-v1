import Link from "next/link";
import React from "react";
import { BlogCard } from "../lib/interface";
import Image from "next/image";
import { getUrl } from "@/utils";
import { bagel } from "@/fonts/fonts";

type Props = {
  blog: BlogCard;
};

const BlogCardView = ({ blog }: Props) => {
  return (
    <Link
      key={blog._id}
      href={`/blogs/${blog.slug}`}
      className="lg:hover:scale-105 transition-all ease-out"
    >
      <article className="flex flex-col gap-2 cursor-pointer">
        <div className="relative min-w-[200px] h-[300px]">
          <Image
            src={getUrl(blog.image)}
            fill
            alt={blog.title}
            className="object-cover rounded-xl"
          />
        </div>
        <div className="flex items-start gap-2 justify-between">
          <p className={`${bagel.className} text-xl`}>{blog.title}</p>
          <span
            className={`whitespace-nowrap mt-1 bg-[#D9D9D9] text-[#565555] px-2 rounded-full text-sm ${bagel.className}`}
          >
            {blog.publishedAt.split("T")[0]}
          </span>
        </div>
        <div>
          {blog.tags.map((tag, index) => (
            <span key={tag} className="text-[#656363] text-sm">
              {tag}
              {index !== blog.tags.length - 1 && (
                <span className="mx-1">|</span>
              )}
            </span>
          ))}
        </div>
        <div className="">
          <p className="line-clamp-2 tracking-wide text-sm text-[#555353]">
            {blog.description}
          </p>
        </div>
      </article>
    </Link>
  );
};

export default BlogCardView;
