"use client";
import { bagel } from "@/fonts/fonts";
import React, { useEffect, useState } from "react";

type Props = {};

const ProgressScrollBlog = (props: Props) => {
  const [headings, setHeadings] = useState<
    { position: number; text: string; type: string }[]
  >([]);
  const [activeHeadings, setActiveHeadings] = useState<string[]>([]);

  useEffect(() => {
    const extractHeadings = Array.from(document.querySelectorAll("h2, h3")).map(
      (heading) => ({
        position: heading.getBoundingClientRect().top + window.scrollY,
        text: heading.textContent!,
        type: heading.nodeName.toLowerCase(),
      })
    );

    setHeadings(extractHeadings);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const newActiveHeadings = [...activeHeadings];

      headings.forEach((heading) => {
        const isInView = currentScroll >= heading.position - 100;
        if (isInView && !newActiveHeadings.includes(heading.text)) {
          newActiveHeadings.push(heading.text);
        }
      });

      setActiveHeadings(newActiveHeadings);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [headings, activeHeadings]);

  return (
    <div className="relative flex flex-col gap-5 w-fit ">
      <div className="absolute -left-5 top-0 bottom-0 bg-gray-600 h-full w-[1px]" />
      <div className="absolute w-7 h-7 -left-[34px] top-0 bg-gray-600 rounded-full" />

      <p className={`${bagel.className} text-3xl relative -mt-1 text-gray-600`}>
        On This Page
      </p>
      <ul className="flex gap-3 flex-col">
        {headings.map((heading) => (
          <li
            key={heading.text}
            className={`text-sm ${heading.type === "h2" ? "ml-0" : "ml-5"} hover:font-medium cursor-pointer ${activeHeadings?.includes(heading.text) ? "text-[#ff5500] font-medium" : "text-black"}`}
            onClick={() =>
              window.scrollTo({
                top: heading.position - 80,
                behavior: "smooth",
              })
            }
          >
            {heading.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProgressScrollBlog;
