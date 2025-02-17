import { bagel } from "@/fonts/fonts";
import BlogsTags from "../components/BlogsTags";
import { BlogTags } from "../lib/interface";
import AllBlogs from "../components/AllBlogs";
import LastArticle from "../components/LastArticle";

type Props = {
  searchParams: Promise<{
    cat?: string;
    page?: string;
  }>;
};

export default async function Page({ searchParams }: Props) {
  const params = await searchParams;
  const { cat, page } = params;
  const category: BlogTags = cat ? (cat as BlogTags) : BlogTags.ALL;

  return (
    <>
      <LastArticle />
      <div className="bg-gray-300 w-full h-[1px]" />
      <div className="space-y-10">
        {/* Categories */}
        <div className="flex flex-col gap-5 lg:flex-row items-start lg:items-center justify-between">
          <h2 className={`${bagel.className} text-3xl md:text-5xl uppercase`}>
            all articles
          </h2>

          <div className="w-full overflow-x-scroll scrollbar-hide">
            <div className="flex gap-2 md:gap-5 overflow-auto min-w-[500px]">
              <BlogsTags category={category} />
            </div>
          </div>
        </div>
        <AllBlogs category={category} page={page} />
      </div>
    </>
  );
}
