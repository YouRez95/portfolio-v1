import { PROJECTS_DETAIL } from "@/app/constants/projects";
import { bagel } from "@/fonts/fonts";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function Page({
  params: { projectTitle },
}: {
  params: { projectTitle: string };
}) {
  //WIP: Find the project by its title from cms
  const project = PROJECTS_DETAIL.find(
    (project) => project.title === projectTitle
  );

  if (!project) {
    return notFound();
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:pl-[190px] 2xl:pl-10 lg:pr-10 py-12 flex flex-col gap-20 relative mt-[80px] lg:mt-0">
      <div className="fixed inset-0 h-[80px] lg:h-[100vh] w-screen lg:w-[150px] bg-black flex lg:flex-col items-center justify-between lg:py-10">
        <Link
          href=".."
          className={`text-primary h-full lg:h-10 flex gap-2 items-center lg:items-start justify-center min-w-24 ${bagel.className}`}
        >
          <Image
            src="/arrow-back.svg"
            alt="arrow back"
            width={15}
            height={15}
            className="invert mt-1"
          />
          Back
        </Link>
        <h1
          className={`text-primary ${bagel.className} lg:-rotate-90 lg:mb-28 xl:mb-44 2xl:mb-60 text-3xl p-2 lg:text-5xl xl:text-7xl 2xl:text-8xl tracking-widest uppercase`}
        >
          {project.title}
        </h1>
      </div>

      <div className="flex flex-col items-center justify-center">
        <Image
          src={project.image}
          alt="project image"
          width={1200}
          height={1200}
          className="shadow-lg rounded-2xl"
        />

        <div className="flex gap-4 mt-4 ">
          <div
            className={`bg-black text-primary text-xl py-1 px-5 rounded-lg ${bagel.className}`}
          >
            Live
          </div>
          <div
            className={`bg-black text-primary text-xl py-1 px-5 rounded-lg ${bagel.className}`}
          >
            Github
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className={`${bagel.className} text-2xl lg:text-3xl`}>
          Description
        </h2>
        <p className="text-base lg:text-[19px]">{project.description}</p>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className={`${bagel.className} text-2xl lg:text-3xl`}>
          Key Features
        </h2>
        <ul className="flex flex-col gap-4 text-base lg:text-[19px]">
          {project.keyFeatures.map((feature) => (
            <li className="" key={feature.id}>
              <p>
                <span className="font-bold underline">{feature.title}: </span>
                {feature.text}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className={`${bagel.className} text-2xl lg:text-3xl`}>Role</h2>
        <p className="text-base lg:text-[19px]">{project.role}</p>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className={`${bagel.className} text-2xl lg:text-3xl`}>
          Responsive Design
        </h2>
        <div className="flex flex-col md:flex-row gap-20 items-center justify-center">
          {project.responsive.map((image) => (
            <Image
              key={image.id}
              src={image.image}
              alt={image.image}
              width={300}
              height={300}
              className="shadow-lg rounded-2xl"
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className={`${bagel.className} text-2xl lg:text-3xl`}>Stack</h2>
        <ul className="flex flex-col gap-4 text-base lg:text-[19px]">
          {project.stack.map((stack) => (
            <li key={stack.id}>
              <p>
                <span className="font-bold underline">{stack.title}: </span>
                {stack.techs.join(", ")}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
