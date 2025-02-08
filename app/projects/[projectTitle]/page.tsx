import { getSingleProject } from "@/app/actions";
import BackButton from "@/app/components/BackButton";
import { bagel } from "@/fonts/fonts";
import { getUrl, getVideoUrl } from "@/utils";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ projectTitle: string }>;
}) {
  const { projectTitle } = await params;
  const project = await getSingleProject(projectTitle);

  if (!project) {
    return notFound();
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:pl-[190px] 2xl:pl-10 lg:pr-10 py-12 flex flex-col gap-20 relative mt-[80px] lg:mt-0">
      <div className="fixed inset-0 h-[80px] lg:h-[100vh] w-screen lg:w-[150px] bg-black flex lg:flex-col items-center justify-between lg:py-10">
        <BackButton />
        <h1
          className={`text-primary ${bagel.className} lg:-rotate-90 lg:mb-28 xl:mb-44 2xl:mb-60 text-2xl p-2 lg:text-5xl xl:text-7xl 2xl:text-8xl tracking-widest uppercase`}
        >
          {project.title}
        </h1>
      </div>

      <div className="flex flex-col items-center justify-center">
        <video
          className="w-auto h-full shadow-lg rounded-2xl min-h-[400px] max-h-[600px]"
          autoPlay
          loop
          muted
        >
          <source src={getVideoUrl(project.video) as string} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="flex gap-4 mt-4 ">
          {project.live && (
            <Link
              href={project.live}
              target="_blank"
              className={`bg-black text-primary text-xl py-1 px-5 rounded-lg ${bagel.className}`}
            >
              Live
            </Link>
          )}
          <Link
            href={project.github}
            target="_blank"
            className={`bg-black text-primary text-xl py-1 px-5 rounded-lg ${bagel.className}`}
          >
            Github
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className={`${bagel.className} text-2xl lg:text-3xl`}>
          Description
        </h2>
        <p className="text-base lg:text-[19px]">{project.description}</p>
      </div>

      {project.keyFeatures && (
        <div className="flex flex-col gap-4">
          <h2 className={`${bagel.className} text-2xl lg:text-3xl`}>
            Key Features
          </h2>
          <div className="flex flex-col gap-4 text-base lg:text-[19px] prose prose-li:marker:text-[#ff5500] prose-strong:text-xl min-w-full">
            <PortableText value={project.keyFeatures} />
          </div>
        </div>
      )}

      <div className="flex flex-col gap-4">
        <h2 className={`${bagel.className} text-2xl lg:text-3xl`}>Role</h2>
        <p className="text-base lg:text-[19px]">{project.role}</p>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className={`${bagel.className} text-2xl lg:text-3xl`}>
          Responsive Design
        </h2>
        <div className="flex flex-col md:flex-row gap-20 items-center justify-center">
          {project.responsive.map((image, index) => (
            <Image
              key={index}
              src={getUrl(image)}
              alt={`responsive design ${index}`}
              width={600}
              height={600}
              className="shadow-lg rounded-2xl"
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className={`${bagel.className} text-2xl lg:text-3xl`}>Stack</h2>
        <div className="flex flex-col gap-4 text-base lg:text-[19px] prose prose-li:marker:text-[#ff5500] prose-strong:text-xl min-w-full">
          <PortableText value={project.stack} />
        </div>
      </div>
    </section>
  );
}
