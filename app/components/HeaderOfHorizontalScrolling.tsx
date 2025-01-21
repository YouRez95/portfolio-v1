import { bagel } from "@/fonts/fonts";
import { PROJECTS_DETAIL } from "../constants/projects";
import { motion } from "framer-motion";

export default function HeaderOfHorizontalScrolling({
  slide,
}: {
  slide: number;
}) {
  const project = PROJECTS_DETAIL.find((pr) => pr.title === "mechflow");
  const section = project?.sections[slide - 1];

  const variants = {
    initial: { opacity: 0, y: -30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 30 },
  };

  return (
    <div className="text-white w-screen flex flex-col lg:flex-row gap-10 items-start justify-between px-4 lg:px-20 fixed top-10">
      <motion.h1
        className={`${bagel.className} text-3xl`}
        key={section?.title}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={variants}
        transition={{ duration: 1 }}
      >
        {section?.title}
      </motion.h1>
      {section?.description && (
        <motion.p
          className="max-w-[500px] font-medium"
          key={section?.description}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={variants}
          transition={{ duration: 1 }}
        >
          {section.description}
        </motion.p>
      )}
    </div>
  );
}
