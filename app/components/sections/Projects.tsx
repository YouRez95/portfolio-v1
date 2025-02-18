import { bagel } from "@/fonts/fonts";
import {
  faBrain,
  faFileCode,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import SingleCardProject from "../SingleCardProject";
import { getProjects } from "@/app/actions";
import FontAwesomeIconClient from "../FontAwesomeIconClient";

export default async function Projects() {
  const projects = await getProjects();
  return (
    <section
      id="projects"
      className="lg:max-w-[1728px] py-2 mx-auto space-y-20"
    >
      <div className="flex flex-col items-center justify-center gap-10">
        <h1
          className={`${bagel.className} bg-black lg:bg-transparent w-full py-5 lg:py-0 text-primary lg:text-black text-3xl ml:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl`}
        >
          <span className="flex items-center justify-center gap-1 md:gap-3">
            <span className="relative w-12 h-12 lg:w-16 lg:h-16 2xl:w-20 2xl:h-20 flex items-center justify-center scale-75">
              <FontAwesomeIconClient
                icon={faFileCode}
                className="text-secondary w-full h-full"
              />
            </span>
            Code,
            <span className="relative w-9 h-9 lg:w-16 lg:h-16 2xl:w-20 2xl:h-20 flex items-center justify-center">
              <FontAwesomeIconClient
                icon={faBrain}
                className="text-secondary w-full h-full"
              />
            </span>
            Creativity
          </span>
          <span className="flex items-center justify-center gap-1 md:gap-3">
            And
            <span className="relative w-9 h-9 lg:w-16 lg:h-16 2xl:w-20 2xl:h-20 flex items-center justify-center">
              <FontAwesomeIconClient
                icon={faUserGroup}
                className="text-secondary w-full h-full"
              />
            </span>
            Collaboration
          </span>
        </h1>

        <p className="text-sm mm:text-base sm:text-lg leading-6 max-w-64 text-center font-medium">
          I Build Software by Creating Experiences People Love to Use.
        </p>
      </div>
      <div className="flex flex-col gap-20">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-20 items-center justify-center relative">
          {projects.map((project) => (
            <SingleCardProject key={project.order} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
