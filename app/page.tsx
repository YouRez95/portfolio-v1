import { bagel } from "@/fonts/fonts";
import Button from "./components/ui/Button";
import ImageHeroGrid from "./components/ImageHeroGrid";

export default function Home() {
  return (
    <section className="max-w-[1728px] px-4 py-2 mx-auto min-h-[95vh] md:min-h-[70vh] xl:min-h-[700px] xl:max-h-[1000px] pt-14 space-y-20 lg:space-y-0 flex flex-col lg:flex-row">
      <div className="flex flex-col gap-5 xl:gap-10 lg:order-2 xl:w-1/2">
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
          I create impactful software with precision, creativity, and a passion
          for innovation.
        </p>
        <div className="flex gap-10 max-w-80">
          <Button fontSize="14px" backgroundColor="black">
            Download CV
          </Button>
          <Button fontSize="14px">Contact</Button>
        </div>
      </div>

      {/* <div className="bg-red-500 -translate-x-4 lg:-translate-x-10 flex-1 min-h-[500px] sm:min-h-[700px] lg:min-h-min xl:w-1/2 lg:order-1"> */}
      <div className="-translate-x-4 lg:-translate-x-10 flex-1 flex justify-center items-start min-h-[500px] sm:min-h-[600px] lg:min-h-min xl:w-1/2 lg:order-1">
        {/* Image */}
        <ImageHeroGrid />
      </div>
    </section>
  );
}
