"use client";

import React, { useEffect, useRef, useState } from "react";
import HeaderOfHorizontalScrolling from "./HeaderOfHorizontalScrolling";

export default function HorizontalScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLElement | null>(null);
  const [slide, setSlide] = useState(1);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const handleWheel = (e: WheelEvent) => {
      const target = (e.target as HTMLElement).closest(
        ".scrollable-container"
      ) as Element;
      setSlide(parseInt(target.id));
      if (e.deltaY !== 0) {
        e.preventDefault();
        window.requestAnimationFrame(() => {
          element.scrollLeft += e.deltaY;
        });
      }
    };

    element.addEventListener("wheel", handleWheel);
    return () => element.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <section
      className="flex w-screen h-screen overflow-x-scroll scrollbar-hide bg-gradient-1"
      ref={containerRef}
    >
      <HeaderOfHorizontalScrolling slide={slide} />
      {children}
    </section>
  );
}
