import React from "react";
import { BlogCard } from "../lib/interface";
import { bagel } from "@/fonts/fonts";
import Image from "next/image";
import { getUrl } from "@/utils";
import Button from "./ui/Button";

type Props = {
  blog: BlogCard;
};

const LastArticle = ({ blog }: Props) => {
  return (
    <div className="space-y-10">
      <h2 className={`${bagel.className} text-3xl md:text-5xl uppercase`}>
        last article
      </h2>

      {blog && (
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-10 justify-start">
          <div className="flex-1">
            <Image
              src={getUrl(blog.image)}
              alt={blog.description}
              width={800}
              height={800}
              className="rounded-lg object-cover"
            />
          </div>
          <div className="flex-1 flex flex-col justify-between">
            <div className="space-y-3">
              <p
                className={`bg-[#D9D9D9] w-fit ${bagel.className} px-2 py-1 rounded-full`}
              >
                {blog.publishedAt.split("T")[0]}
              </p>

              <h1
                className={`text-xl md:text-4xl text-secondary ${bagel.className}`}
              >
                {blog.title}
              </h1>
              <p className="text-sm md:text-base line-clamp-2">
                {blog.description}
              </p>

              <div className="flex gap-2 mt-4">
                {blog.tags.map((tag, index) => (
                  <p
                    key={tag}
                    className={`text-gray-600 text-sm ${bagel.className}`}
                  >
                    {tag}
                    {index !== blog.tags.length - 1 && (
                      <span className="ml-2">|</span>
                    )}
                  </p>
                ))}
              </div>
            </div>

            <div className="w-fit mt-5 md:mt-0">
              <Button backgroundColor="black" padding="10px 50px">
                Read
              </Button>
            </div>
          </div>
        </div>
      )}

      {!blog && (
        <p className="min-h-56 flex items-center justify-center text-xl">
          No blog found
        </p>
      )}
    </div>
  );
};

export default LastArticle;
