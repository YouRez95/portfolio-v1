import React from "react";
import { getBlogsByTags } from "../actions";
import BlogCardView from "./BlogCardView";

type Props = {
  tags: string[];
  slug: string;
};

const KeepReading = async ({ tags, slug }: Props) => {
  const blogs = await getBlogsByTags(tags, slug);

  console.log("blogs related", blogs);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 xl:gap-x-20 gap-y-10">
      {blogs.map((blog) => (
        <BlogCardView key={blog._id} blog={blog} />
      ))}
    </div>
  );
};

export default KeepReading;
