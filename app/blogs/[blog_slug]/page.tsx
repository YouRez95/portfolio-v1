import { Metadata } from "next";
import { getBlogBySlug } from "@/app/actions";
import BlogContent from "@/app/components/BlogContent";
import KeepReading from "@/app/components/KeepReading";
import ProgressScrollBlog from "@/app/components/ProgressScrollBlog";
import ShareButtons from "@/app/components/ShareButtons";
import { fullBlog } from "@/app/lib/interface";
import { bagel } from "@/fonts/fonts";
import { getUrl } from "@/utils";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import FontAwesomeIconClient from "@/app/components/FontAwesomeIconClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ blog_slug: string }>;
}): Promise<Metadata> {
  const { blog_slug } = await params;
  const [blog]: fullBlog[] = await getBlogBySlug(blog_slug);

  const pageUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/blogs/${blog.slug}`;
  const imageUrl = getUrl(blog.image);

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      url: pageUrl,
      type: "article",
      images: [{ url: imageUrl }],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      images: [imageUrl],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ blog_slug: string }>;
}) {
  const { blog_slug } = await params;
  const [blog]: fullBlog[] = await getBlogBySlug(blog_slug);

  return (
    <>
      <div className="relative flex gap-10 justify-between items-start">
        <div className="w-full lg:w-3/4">
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

        <div className="hidden lg:flex w-1/4 sticky top-10 justify-center">
          <ProgressScrollBlog />
        </div>
      </div>

      <div className="flex items-center gap-3 md:gap-10 relative mt-20">
        <div className="bottom-0 absolute w-full h-[1px] bg-gray-300" />
        <p className={`${bagel.className}`}>
          <span className="hidden md:block text-xl">Share this article</span>
          <FontAwesomeIconClient
            icon={faShareAlt}
            className="w-5 h-5 p-1 md:hidden bg-black text-primary rounded-full"
          />
        </p>
        <ShareButtons
          url={`${process.env.NEXT_PUBLIC_BASE_URL}/blogs/${blog.slug}`}
          title={blog.title}
        />
      </div>

      {/* KEEP READING */}
      <div className="space-y-10 py-10">
        <p className={`${bagel.className} uppercase text-4xl`}>Keep Reading</p>
        <KeepReading tags={blog.tags} slug={blog.slug} />
      </div>
    </>
  );
}
