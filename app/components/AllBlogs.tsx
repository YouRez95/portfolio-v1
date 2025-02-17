import React from "react";
import { BlogTags } from "../lib/interface";
import { getBlogCount, getBlogs } from "../actions";
import BlogCardView from "./BlogCardView";
import Pagination from "./Pagination";

type Props = {
  category: BlogTags;
  page?: string;
};

const AllBlogs = async ({ category, page }: Props) => {
  const { data } = await getBlogs({ category, page });
  const totalBlogs = await getBlogCount({ category });

  if (data.length === 0) {
    return (
      <div className="flex justify-center items-center col-span-3 min-h-96">
        <p className="text-2xl">No articles found</p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 xl:gap-x-20 gap-y-10">
        {data.map((blog) => (
          <BlogCardView key={blog._id} blog={blog} />
        ))}
      </div>

      <div className="my-20 mx-auto flex justify-center items-center gap-4">
        <Pagination totalBlogs={totalBlogs} category={category} page={page} />
      </div>
    </>
  );
};

export default AllBlogs;
