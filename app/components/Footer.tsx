import { bagel } from "@/fonts/fonts";
import Button from "./ui/Button";
import Image from "next/image";
import Link from "next/link";
import ContactFooter from "./ContactFooter";

export default function Footer() {
  return (
    <footer className="w-full bg-black overflow-hidden relative">
      <div className="min-h-96 max-w-[1728px] lg:px-4 mt-10 mb-56 xl:mb-72 mx-auto flex flex-col items-center justify-center">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 w-full">
          <div className="text-white space-y-10 lg:space-y-5 lg:w-1/2 lg:max-w-[500px]">
            <p
              className={`${bagel.className} bg-white lg:bg-black text-black lg:text-[#FDF7EC] h-20 lg:h-auto flex items-center justify-center lg:justify-start text-xl relative`}
            >
              Let’s Build the Future Together
              <span className="absolute w-5 h-5 bg-white -top-2.5 rotate-45 lg:hidden" />
            </p>

            <p className="px-4 lg:px-0 text-sm text-[#FFFFFF]">
              I’m always ready for new challenges and exciting projects. Whether
              you have an idea or need expert guidance, let's collaborate and
              turn your vision into reality. Reach out, and let’s make something
              extraordinary!
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-4">
              <Link
                href="https://www.linkedin.com/in/younesselalouani/"
                target="_blank"
                className="bg-white w-10 h-10 flex items-center justify-center hover:bg-[#FDF7EC] hover:scale-110 transition-all cursor-pointer"
              >
                <Image
                  alt="linkedin"
                  src={"/linkedin.svg"}
                  width={20}
                  height={20}
                />
              </Link>
              <Link
                target="_blank"
                href="https://www.facebook.com/youness.alwani.5"
                className="bg-white w-10 h-10 flex items-center justify-center hover:bg-[#FDF7EC] hover:scale-110 transition-all cursor-pointer"
              >
                <Image
                  alt="facebook"
                  src={"/facebook.svg"}
                  width={20}
                  height={20}
                />
              </Link>

              <Link
                target="_blank"
                href="https://github.com/YouRez95"
                className="bg-white w-10 h-10 flex items-center justify-center hover:bg-[#FDF7EC] hover:scale-110 transition-all cursor-pointer"
              >
                <Image
                  alt="github"
                  src={"/github.svg"}
                  width={20}
                  height={20}
                />
              </Link>

              <Link
                href="https://x.com/YouRez369"
                target="_blank"
                className="bg-white w-10 h-10 flex items-center justify-center hover:bg-[#FDF7EC] hover:scale-110 transition-all cursor-pointer"
              >
                <Image
                  alt="twitter"
                  src={"/twitter.svg"}
                  width={20}
                  height={20}
                />
              </Link>
            </div>
          </div>
          <ContactFooter />
        </div>
        <div className="text-[#FDF7EC] flex justify-center absolute -bottom-8 sm:-bottom-12 md:-bottom-16 lg:-bottom-24 xl:-bottom-32">
          <h1
            style={{ fontSize: "clamp(2rem, 19vw, 20rem)" }}
            className={`${bagel.className}`}
          >
            Y.ALOUANI
          </h1>
        </div>
      </div>
    </footer>
  );
}
