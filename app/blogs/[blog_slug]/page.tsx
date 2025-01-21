import { getBlogBySlug } from "@/app/actions";
import BlogContent from "@/app/components/BlogContent";
import Footer from "@/app/components/Footer";
import { ARTICLES } from "@/app/constants/articles";
import { fullBlog } from "@/app/lib/interface";
import { bagel } from "@/fonts/fonts";
import { getUrl } from "@/utils";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";

export default async function Page({
  params,
}: {
  params: Promise<{ blog_slug: string }>;
}) {
  const { blog_slug } = await params;
  const [blog]: fullBlog[] = await getBlogBySlug(blog_slug);

  return (
    <>
      <div className="max-w-[1728px] mx-auto px-4 space-y-20">
        <div className="w-fit py-2">
          <Link href="/">
            <h1 className={`${bagel.className} text-3xl md:text-5xl`}>
              Y.Alouani
            </h1>
          </Link>
        </div>

        <div className="relative flex gap-10 justify-between items-start">
          <div className="w-full lg:w-3/4 ">
            <div className="space-y-4">
              <h1
                className={`${bagel.className} text-secondary text-3xl md:text-5xl`}
              >
                {blog.title}
              </h1>
              <p className="text-sm text-gray-600">{blog.description}</p>
            </div>

            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[600px] mt-10">
              <Image
                src={getUrl(blog.image)}
                alt={blog.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="mt-10 min-w-full prose prose-h2:text-3xl prose-a:text-[#ff5500] prose-h3:text-2xl prose-li:marker:text-[#ff5500]">
              <BlogContent content={blog.content} />
            </div>
          </div>

          <div className="hidden lg:flex  w-1/4 sticky top-10 justify-center">
            <div className="relative flex flex-col gap-5 w-fit ">
              <div className="absolute -left-5 top-0 bottom-0 bg-gray-400 h-full w-[1px]" />
              <div className="absolute w-7 h-7 -left-[34px] top-0 bg-black rounded-full" />

              <p className={`${bagel.className} text-3xl relative -mt-1`}>
                On This Page
              </p>
              <ul className="flex gap-3 flex-col">
                <li>First Part</li>
                <li>Second Part</li>
                <li>Second Part</li>
                <li>Second Part</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 md:gap-10 relative">
          <div className="bottom-0 absolute w-full h-[1px] bg-gray-300" />
          <h2 className={`${bagel.className}`}>
            <span className="hidden md:block text-xl">Share this article</span>
            <FontAwesomeIcon
              icon={faShareAlt}
              className="w-5 h-5 p-1 md:hidden bg-black text-primary rounded-full"
            />
          </h2>
          <ul className="flex items-center gap-2 md:gap-5 text-sm md:text-base mt-1 md:mt-2">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Linkedin</li>
            <li>Twitter</li>
            <li>Whatsapp</li>
          </ul>
        </div>

        {/* KEEP READING */}
        <div className="space-y-10 pb-10">
          <h2 className={`${bagel.className} uppercase text-4xl`}>
            Keep Reading
          </h2>

          {/* WIP:Create A card Component for blog */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 xl:gap-x-20 gap-y-10">
            {ARTICLES.slice(0, 3).map((article) => (
              <Link
                key={article.id}
                href={`/blogs/${article.slug}`}
                className="hover:scale-110 transition-all ease-out"
              >
                <article className="flex flex-col gap-2 cursor-pointer">
                  <div className="relative min-w-[200px] h-[300px]">
                    <Image
                      src={article.image}
                      fill
                      alt={article.title}
                      className="object-cover rounded-xl"
                    />
                  </div>
                  <div className="flex items-start gap-2 justify-between">
                    <h2 className={`${bagel.className} text-xl`}>
                      {article.title}
                    </h2>
                    <span
                      className={`whitespace-nowrap mt-1 bg-[#D9D9D9] text-[#565555] px-2 rounded-full text-sm ${bagel.className}`}
                    >
                      {article.date}
                    </span>
                  </div>
                  <div>
                    {article.tags.map((tag, index) => (
                      <span key={tag} className="text-[#656363] text-sm">
                        {tag}
                        {index !== article.tags.length - 1 && (
                          <span className="mx-1">|</span>
                        )}
                      </span>
                    ))}
                  </div>
                  <div className="">
                    <p className="line-clamp-2 tracking-wide text-sm text-[#555353]">
                      {article.description}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
