import { bagel } from "@/fonts/fonts";
import Image from "next/image";
import Link from "next/link";
import { ARTICLES } from "../constants/articles";
import Button from "../components/ui/Button";
import BlogsTags from "../components/BlogsTags";
import Footer from "../components/Footer";
import { getBlogs } from "../actions";
import { BlogCard, BlogTags } from "../lib/interface";
import { getUrl } from "@/utils";
import LastArticle from "../components/LastArticle";
import BlogCardView from "../components/BlogCardView";

type Props = {
  searchParams: { cat?: string };
};

export default async function Page({ searchParams }: Props) {
  const { cat } = searchParams;
  const category = cat as BlogTags;

  const blogs: BlogCard[] = await getBlogs({ category });
  return (
    <>
      <div className="max-w-[1728px] mx-auto px-4">
        <div className="w-fit py-2">
          <Link href="/">
            <h1 className={`${bagel.className} text-3xl md:text-5xl`}>
              Y.Alouani
            </h1>
          </Link>
        </div>

        <div className="mt-20 max-w-[1500px] mx-auto space-y-10">
          {/* Last article */}
          {/* <div className="space-y-10">
            <h2 className={`${bagel.className} text-3xl md:text-5xl uppercase`}>
              last article
            </h2>

            <div className="flex flex-col lg:flex-row gap-5 lg:gap-10 justify-start">
              <div className="flex-1">
                <Image
                  src={getUrl(blogs[0].image)}
                  alt={blogs[0].description}
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
                    {blogs[0].publishedAt.split("T")[0]}
                  </p>

                  <h1
                    className={`text-xl md:text-4xl text-secondary ${bagel.className}`}
                  >
                    {blogs[0].title}
                  </h1>
                  <p className="text-sm md:text-base line-clamp-2">
                    {blogs[0].description}
                  </p>

                  <div className="flex gap-2 mt-4">
                    {blogs[0].tags.map((tag, index) => (
                      <p
                        key={tag}
                        className={`text-gray-600 text-sm ${bagel.className}`}
                      >
                        {tag}
                        {index !== ARTICLES[0].tags.length - 1 && (
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
          </div> */}
          <LastArticle blog={blogs[0]} />

          <div className="bg-gray-300 w-full h-[1px]" />
          {/* Articles */}
          <div className="space-y-10">
            {/* Categories */}
            <div className="flex flex-col gap-5 lg:flex-row items-start lg:items-center justify-between">
              <h2
                className={`${bagel.className} text-3xl md:text-5xl uppercase`}
              >
                all articles
              </h2>

              <div className="flex gap-2 md:gap-5">
                <BlogsTags />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 xl:gap-x-20 gap-y-10">
              {blogs.length === 0 && (
                <div className="flex justify-center items-center col-span-3 min-h-96">
                  <p className="text-2xl">No articles found</p>
                </div>
              )}
              {blogs.length > 0 &&
                blogs.map((blog) => (
                  <BlogCardView key={blog._id} blog={blog} />
                ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-10">
            <span className="bg-secondary w-10 h-10 text-white grid place-content-center pt-1">
              1
            </span>
            <span className="bg-black w-10 h-10 text-white grid place-content-center pt-1">
              2
            </span>
            <span className="bg-black w-10 h-10 text-white grid place-content-center pt-1">
              3
            </span>
          </div>
          <div className="bg-gray-300 w-full h-[1px]" />
        </div>
      </div>

      <Footer />
    </>
  );
}
