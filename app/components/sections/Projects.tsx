import { bagel } from "@/fonts/fonts";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBrain,
  faFileCode,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import SingleCardProject from "../SingleCardProject";
import { getProjects } from "@/app/actions";

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
          <span className="flex items-center justify-center gap-1 lg:gap-3">
            <span className="relative w-8 h-8 lg:w-16 lg:h-16 2xl:w-20 2xl:h-20 flex items-center justify-center scale-75">
              <FontAwesomeIcon icon={faFileCode} className="text-secondary" />
            </span>
            Code,
            <span className="relative w-8 h-8 lg:w-16 lg:h-16 2xl:w-20 2xl:h-20 flex items-center justify-center">
              <FontAwesomeIcon icon={faBrain} className="text-secondary" />
            </span>
            Creativity
          </span>
          <span className="flex items-center justify-center gap-1 lg:gap-3">
            And
            <span className="relative w-8 h-8 lg:w-16 lg:h-16 2xl:w-20 2xl:h-20 flex items-center justify-center">
              <FontAwesomeIcon icon={faUserGroup} className="text-secondary" />
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
