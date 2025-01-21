import { bagel } from "@/fonts/fonts";
import Image from "next/image";

export const TestimonialHeader = () => (
  <div className="w-full h-[500px] sm:h-[600px] xl:h-[800px] mx-auto relative lg:w-1/2">
    <div className="absolute top-10 min-w-[200px] left-[50%] rounded-3xl -translate-x-[50%] z-10 py-2 bg-white text-center lg:scale-110 xl:scale-150">
      <div className="absolute bg-white min-w-[300px] h-[40px] top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] rounded-3xl" />
      <h1 className={`${bagel.className} text-xl relative`}>
        What <br /> Our Satisfied Clients <br />
        say <span className="text-red-400">♥</span>
      </h1>
    </div>
    <Image
      src="/testimonials.png"
      alt="image testimonials"
      fill
      className="object-cover"
    />
  </div>
);
