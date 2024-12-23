import { bagel } from "@/fonts/fonts";
import Button from "./components/ui/Button";
import Image from "next/image";

export default function Home() {
  return (
    <section className="max-w-[1728px] px-4 py-2 mx-auto min-h-[95vh] pt-14 space-y-20 flex flex-col">
      <div className="flex flex-col gap-5">
        <h1 className={`${bagel.className} text-4xl leading-tight`}>
          Hi, I’m{" "}
          <span className="text-secondary underline decoration-wavy">
            Youness
          </span>
          . Let’s <br /> build something <br /> amazing today!
        </h1>
        <p className="text-base leading-6 max-w-72 font-medium">
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

      <div className="bg-red-500 -translate-x-4 flex-1">
        {/* Image */}
        <Image
          priority
          src="/image-hero.png"
          alt="My Picture"
          fill
          className="object-cover h-full"
        />
      </div>
    </section>
  );
}
