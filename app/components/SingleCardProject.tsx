import { bagel } from "@/fonts/fonts";
import { getUrl } from "@/utils";
import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  order: number;
  url: string;
  image: string;
  applicationType: string;
  techs: string[];
  brand: string;
  description: string;
};

export default function SingleCardProject({
  order,
  image,
  applicationType,
  techs,
  brand,
  description,
  url,
}: ProjectCardProps) {
  if (order % 3 === 0) {
    return (
      <div className="min-h-[600px] h-full w-full flex flex-col md:flex-row gap-10 lg:gap-20 col-span-2">
        <div className="w-full order-2 md:w-[60%] lg:w-1/2 flex flex-col px-2 space-y-10 lg:space-y-44">
          <div className="space-y-4">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold">
                {applicationType}
              </h2>
              <div className="w-full h-[2px] bg-black" />
            </div>
            <div className="text-base md:text-xl space-y-1 text-black/70 font-medium">
              {techs.map((tech) => (
                <p key={tech}>{tech}</p>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <h2 className={`${bagel.className} text-3xl md:text-5xl`}>
              {brand}
            </h2>
            <p className="text-base md:text-xl">{description}</p>
            <Link
              href={url}
              className="inline-block text-secondary underline my-2"
            >
              View Detail
            </Link>
          </div>
        </div>

        <div className="w-full md:w-[40%] lg:w-1/2 bg-red-500 relative min-h-96">
          <Image
            src={getUrl(image)}
            alt="yalla job"
            fill
            className="object-cover object-[70%]"
          />
        </div>
      </div>
    );
  }

  return (
    <Link
      href={url}
      className={`h-[300px] md:h-[500px] lg:h-[400px] xl:h-[500px] w-full relative group cursor-pointer`}
    >
      <div className="bg-gradient-1 w-full h-full flex items-center justify-center">
        <Image
          src={getUrl(image)}
          alt="project logo"
          fill
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-black text-white p-10 group-hover:opacity-0 transition-all duration-500 ease-in-out">
        <div className="space-y-3">
          <div>
            <h2 className="text-lg md:text-xl font-semibold">
              {applicationType}
            </h2>
            <div className="w-full h-[2px] bg-white" />
          </div>
          <div className="text-white/70 flex gap-2 text-sm md:flex-col md:text-base lg:flex lg:flex-row xl:flex-col">
            {techs.map((tech) => (
              <p key={tech}>{tech}</p>
            ))}
          </div>

          <div className="text-center space-y-5 md:space-y-10">
            <h2 className={`${bagel.className} text-3xl md:text-5xl`}>
              {brand}
            </h2>
            <p className="text-sm md:text-xl">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
