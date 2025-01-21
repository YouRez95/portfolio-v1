import { bagel } from "@/fonts/fonts";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section
      id="about"
      className="py-2 mx-auto space-y-20 min-h-screen relative overflow-hidden"
    >
      <div className="min-w-[2100px] bg-black py-5">
        <div className="flex items-center gap-5 animate-x text-base text-primary">
          <p className={`${bagel.className} relative`}>
            Don’t be shy—reach out! Not everything valuable has a price.
          </p>
          <p className="">❋ ❋ ❋ ❋</p>
          <p className={` ${bagel.className} relative`}>
            Don’t be shy—reach out! Not everything valuable has a price.
          </p>
          <p className="">❋ ❋ ❋ ❋</p>
          <p className={` ${bagel.className} relative`}>
            Don’t be shy—reach out! Not everything valuable has a price.
          </p>
          <p className="">❋ ❋ ❋ ❋</p>
          <p className={` ${bagel.className} relative`}>
            Don’t be shy—reach out! Not everything valuable has a price.
          </p>
        </div>
      </div>
      <div className="max-w-[1728px] relative space-y-5 mx-auto">
        {/* <div className="px-10 relative h-64 md:h-[500px] flex items-center gap-0 md:gap-10">
          <div className="hidden md:flex">
            <h1
              className={`${bagel.className} text-6xl lg:text-7xl xl:text-8xl text-center tracking-wide`}
            >
              I Build Ideas <br />
              into{" "}
              <span className="underline decoration-wavy text-secondary">
                Reality
              </span>
            </h1>
          </div>
          <div className="flex-1 bg-red-500 relative min-h-full">
            <Image
              src="/projects/image-about.png"
              alt="image about"
              fill
              className="object-cover px-0"
            />
          </div>
        </div> */}

        <div className="w-full h-[500px] lg:h-[700px] relative">
          <h1
            className={`${bagel.className} absolute z-10 top-[50%] left-[10vw] -translate-y-[50%] hidden md:block text-7xl lg:text-8xl xl:text-9xl text-center tracking-wide`}
          >
            I Build Ideas <br />
            into{" "}
            <span className="underline decoration-wavy text-secondary">
              Reality
            </span>
          </h1>
          <div className=" h-full w-[100%] md:w-[60%] ml-auto relative">
            <Image
              src="/projects/image-about.png"
              alt="image about"
              fill
              className="object-cover px-0"
            />
          </div>
        </div>

        <div className="grid gap-10 px-5">
          <h1
            className={`${bagel.className} text-6xl text-center tracking-wide block md:hidden`}
          >
            I Build Ideas <br />
            into{" "}
            <span className="underline decoration-wavy text-secondary">
              Reality
            </span>
          </h1>

          <div className="lg:flex items-end">
            <div
              className={`hidden gap-5 lg:flex flex-col w-fit text-xl ${bagel.className}`}
            >
              <Link
                href="https://www.linkedin.com/in/younesselalouani/"
                target="_blank"
                className="underline cursor-pointer relative group"
              >
                <div className="absolute bg-black p-1 rounded-full transition-all opacity-0 group-hover:opacity-100 top-0 left-5 group-hover:-left-7 group-hover:-top-2">
                  <Image
                    alt="linkedin"
                    src={"/linkedin.svg"}
                    width={20}
                    height={20}
                    className="invert"
                  />
                </div>
                <span className="">Linkedin</span>
              </Link>
              <Link
                target="_blank"
                href="https://github.com/YouRez95"
                className="underline cursor-pointer relative group"
              >
                <div className="absolute bg-black p-1 rounded-full transition-all opacity-0 group-hover:opacity-100 top-0 right-5 group-hover:-right-2 group-hover:-top-2">
                  <Image
                    alt="github"
                    src={"/github.svg"}
                    width={20}
                    height={20}
                    className="invert"
                  />
                </div>
                <span className="">Github</span>
              </Link>
              <Link
                target="_blank"
                href="https://www.facebook.com/youness.alwani.5"
                className="underline cursor-pointer relative group"
              >
                <div className="absolute bg-black p-1 rounded-full transition-all opacity-0 group-hover:opacity-100 top-0 left-5 group-hover:-left-7 group-hover:-top-2">
                  <Image
                    alt="facebook"
                    src={"/facebook.svg"}
                    width={20}
                    height={20}
                    className="invert"
                  />
                </div>
                <span className="">Facebook</span>
              </Link>
              <Link
                href="https://x.com/YouRez369"
                target="_blank"
                className="underline cursor-pointer relative group"
              >
                <div className="absolute bg-black p-1 rounded-full transition-all opacity-0 group-hover:opacity-100 top-0 right-5 group-hover:-right-3 group-hover:-top-2">
                  <Image
                    alt="twitter"
                    src={"/twitter.svg"}
                    width={20}
                    height={20}
                    className="invert"
                  />
                </div>
                <span className="">Twitter</span>
              </Link>
            </div>
            <div className="lg:grid space-y-10 lg:space-y-0 lg:gap-10 grid-cols-2 w-full lg:w-[60%] ml-auto">
              <p className="leading-7">
                In 2017, I earned my degree in Physics, driven by curiosity and
                a love for problem-solving. By 2019, I was sharing that passion
                as a Math teacher, helping others build a solid foundation in
                logic and reasoning.
              </p>
              <p className="leading-7">
                Alongside my teaching work, I began crafting beautiful and
                functional applications for the web and desktop. Every project
                is like solving a unique equation, where creativity meets logic
                to bring ideas to life and deliver real value to people.
              </p>
              <p className="leading-7 col-span-2">
                But in 2020, everything changed: I discovered the fascinating
                world of web development. What began as curiosity quickly grew
                into a passion. I immersed myself in learning—earning
                certifications in React.js and Node.js on Udemy and completing a
                Software Engineering program at ALX.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
