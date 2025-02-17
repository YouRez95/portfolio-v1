import { bagel } from "@/fonts/fonts";
import Button from "../ui/Button";
import ImageHeroGrid from "../ImageHeroGrid";
import Contact from "../Contact";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="max-w-[1728px] px-4 py-2 mx-auto min-h-[95vh] md:min-h-[70vh] xl:min-h-[700px] xl:max-h-[1000px] pt-14 space-y-20 lg:space-y-0 flex flex-col lg:flex-row">
        <div className="flex flex-col justify-start gap-5 xl:gap-10 lg:order-2 xl:w-1/2">
          <h1
            className={`${bagel.className} capitalize text-2xl mm:text-3xl ml:text-4xl sm:text-6xl md:text-7xl lg:text-5xl xl:text-7xl`}
            style={{ lineHeight: 1.3 }}
          >
            Hi, I’m{" "}
            <span className="text-secondary underline decoration-wavy">
              Youness
            </span>
            . Let’s <br /> build something <br /> amazing today!
          </h1>
          <p className="text-sm mm:text-base sm:text-lg leading-6 max-w-72 font-medium">
            I create impactful software with precision, creativity, and a
            passion for innovation.
          </p>
          <div className="flex gap-10 max-w-80">
            <a
              className="w-full"
              href="/mine/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button fontSize="14px" backgroundColor="black">
                Download CV
              </Button>
            </a>
            <Contact />
          </div>

          {/* <div className="flex-1 flex items-end">
          <div className="h-[200px] w-full flex">
            <div className="w-1/3  text-black flex flex-col items-center justify-center rounded-bl-xl">
              <h3 className="text-7xl font-bold">+2</h3>
              <p className={`${bagel.className} text-xl`}>Years Experience</p>
            </div>
            <div className="w-1/3  text-black flex flex-col items-center justify-center">
              <h3 className="text-7xl font-bold">+20</h3>
              <p className={`${bagel.className} text-xl`}>Projects</p>
            </div>
            <div className="w-1/3 text-black flex flex-col items-center justify-center rounded-tr-xl">
              <h3 className="text-7xl font-bold">+19</h3>
              <p className={`${bagel.className} text-xl`}>Client</p>
            </div>
          </div>
        </div> */}
        </div>

        <div className="-translate-x-4 lg:-translate-x-10 flex-1 flex justify-center items-start lg:min-h-min xl:w-1/2 lg:order-1">
          {/* Image */}
          <Image
            src="/mine/hero-image.jpg"
            alt="image hero grid"
            width={800}
            height={800}
            className="object-cover object-[20%_30%] max-h-[420px] lg:max-h-[600px] md:max-h-[700px]"
          />
        </div>
      </section>
    </>
  );
}
