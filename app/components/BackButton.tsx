"use client";
import { bagel } from "@/fonts/fonts";
import Image from "next/image";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className={`text-primary h-full lg:h-10 flex gap-2 items-center lg:items-start justify-center min-w-24 ${bagel.className}`}
    >
      <Image
        src="/arrow-back.svg"
        alt="arrow back"
        width={15}
        height={15}
        className="invert mt-1"
      />
      Back
    </button>
  );
};

export default BackButton;
