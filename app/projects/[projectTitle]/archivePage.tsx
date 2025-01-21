"use client";
import HorizontalScroll from "@/app/components/HorizontalScroll";
import { PROJECTS, PROJECTS_DETAIL } from "@/app/constants/projects";
import { bagel } from "@/fonts/fonts";
import Image from "next/image";
import { motion } from "framer-motion";

export default function PageMechflow() {
  const project = PROJECTS_DETAIL.find((pr) => pr.title === "mechflow");
  return (
    <HorizontalScroll>
      {/* SECTION 1 */}
      <div
        className="w-full h-full flex-grow-0 flex-shrink-0 flex-auto flex items-center justify-center scrollable-container"
        id="1"
      >
        <motion.div>
          <Image
            id="1"
            src={project?.sections[0].image as string}
            alt="project logo"
            width={1200}
            height={1200}
            className="rounded-lg"
          />
        </motion.div>
      </div>
      {/* SECTION 2 */}
      <div
        className="w-full h-full flex-grow-0 flex-shrink-0 flex-auto flex items-center justify-center scrollable-container"
        id="2"
      >
        <ul className="grid grid-cols-3 w-full place-items-center gap-10">
          {project?.sections[1].features?.map((feature, index) => (
            <motion.li
              key={feature.title}
              className="text-white max-w-96 space-y-5 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h2 className={`${bagel.className} text-3xl`}>{feature.title}</h2>
              <p className="text-xl">{feature.text}</p>
            </motion.li>
          ))}
        </ul>
      </div>
      {/* Section 3 */}
      <div
        className="w-full h-full flex-grow-0 flex-shrink-0 flex-auto flex items-center justify-center scrollable-container"
        id="3"
      >
        <div className={`flex justify-center items-center gap-20`}>
          {project?.sections[2].images?.map((image, index) => (
            <motion.div
              key={index}
              className="rounded-lg mt-24 shadow-2xl"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.2 }} // Stagger effect
            >
              <Image
                id="1"
                src={image}
                alt="project logo"
                width={300}
                height={300}
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </HorizontalScroll>
  );
}
