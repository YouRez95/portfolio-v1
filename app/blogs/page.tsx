import { bagel } from "@/fonts/fonts";
import Link from "next/link";
import BlogsTags from "../components/BlogsTags";
import Footer from "../components/Footer";
import { BlogTags } from "../lib/interface";
import LastArticle from "../components/LastArticle";
import AllBlogs from "../components/AllBlogs";

type Props = {
  searchParams: Promise<{
    cat?: string;
    page?: string;
  }>;
};

export default async function Page({ searchParams }: Props) {
  const { cat, page } = await searchParams;
  let category: BlogTags = cat ? (cat as BlogTags) : BlogTags.ALL;

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
          <LastArticle category={category} />

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
                <BlogsTags category={category} />
              </div>
            </div>

            <AllBlogs category={category} page={page} />
          </div>
          <div className="bg-gray-300 w-full h-[1px]" />
        </div>
      </div>

      <Footer />
    </>
  );
}
