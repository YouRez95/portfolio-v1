"use client";

import Image from "next/image";
import { CHARACTERS } from "../constants/characters";
import { useState } from "react";
import dynamic from "next/dynamic";
import { TestimonialCard } from "../components/TestimonialCard";
import Button from "../components/ui/Button";
import { bagel } from "@/fonts/fonts";
import Link from "next/link";
const ReactStars = dynamic(() => import("react-stars"), { ssr: false });

// WIP: Add feedback to the db with the field accepted false until accepted by the admin

export default function Page() {
  const [selectedProfil, setSelectedProfil] = useState<number>(1);
  const [translateX, setTranslateX] = useState(0);
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [owner, setOwner] = useState("");

  const ratingChanged = (newRating: number) => {
    setRating(newRating);
  };

  const handleTranslate = (direction: "left" | "right") => {
    if (translateX <= -50 && direction === "left") {
      setTranslateX(0);
      return;
    }

    if (translateX === 0 && direction === "right") {
      setTranslateX(-50);
      return;
    }

    if (direction === "left") {
      setTranslateX((prev) => prev - 25);
    } else {
      setTranslateX((prev) => prev + 25);
    }
  };

  return (
    <>
      <h1
        className={`${bagel.className} text-3xl md:text-5xl absolute z-10 top-2 left-2`}
      >
        <Link href={"/"}>Y.Alouani</Link>
      </h1>
      <div className="flex max-w-[700px] pt-10 relative lg:max-w-none m-auto lg:m-0 p-10 lg:p-0 flex-col lg:flex-row lg:items-center items-start justify-center h-screen bg-white">
        <div className="w-full lg:w-1/2 h-full flex flex-col items-center justify-center">
          <div className="space-y-5 md:space-y-10">
            <div>
              <h1 className="text-4xl font-bold text-secondary">Feedback</h1>
              <p className="text-lg text-gray-500">
                Help us improve our product by sharing your feedback
              </p>
            </div>

            <div className="flex items-center justify-center">
              <div className="w-[90vw] sm:w-[600px] lg:w-[490px] bg-primary overflow-hidden px-1 py-1 relative rounded-full">
                <div
                  className="absolute w-5 h-5 rounded-full hidden lg:block cursor-pointer rotate-180 bg-white z-10 right-0 top-1/2 transform -translate-y-1/2"
                  onClick={() => handleTranslate("left")}
                >
                  <Image src="/arrow-back.svg" alt="Character" fill />
                </div>

                <div
                  className="absolute w-5 h-5 rounded-full hidden lg:block cursor-pointer  bg-white z-10 left-0 top-1/2 transform -translate-y-1/2"
                  onClick={() => handleTranslate("right")}
                >
                  <Image src="/arrow-back.svg" alt="Character" fill />
                </div>
                <div
                  className="flex justify-start gap-2 overflow-x-auto scrollbar-hide lg:overflow-x-visible"
                  style={{
                    transform: `translateX(${translateX}%)`,
                    transition: "all 0.3s ease",
                  }}
                >
                  {CHARACTERS.map((character) => (
                    <div
                      className={`min-w-16 min-h-16 relative rounded-full cursor-pointer ${
                        selectedProfil === character.id
                          ? "border-[3px] border-[#ff5500] transition-all"
                          : ""
                      }`}
                      key={character.id}
                      onClick={() => setSelectedProfil(character.id)}
                    >
                      <Image
                        src={character.image}
                        alt="Character"
                        fill
                        className="p-[2px]"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="">
              <ReactStars
                value={rating}
                count={5}
                onChange={ratingChanged}
                size={24}
                color2={"#ffd700"}
              />
            </div>

            <div>
              <input
                type="text"
                name="name"
                className="w-full h-10 bg-primary p-2 outline-none rounded-lg resize-none"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                className="w-full h-10 bg-primary p-2 outline-none rounded-lg resize-none"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <input
                type="text"
                name="owner"
                className="w-full h-10 bg-primary p-2 outline-none rounded-lg resize-none"
                placeholder="owner of company or project"
                value={owner}
                onChange={(e) => setOwner(e.target.value)}
              />
            </div>

            <div>
              <textarea
                className="w-full h-32 bg-primary p-2 outline-none rounded-lg resize-none"
                placeholder="Write your feedback here"
                value={feedback}
                maxLength={400}
                onChange={(e) => setFeedback(e.target.value)}
              />
            </div>
            <div>
              <Button borderRadius="8px" backgroundColor="black">
                Add Feedback
              </Button>
            </div>
          </div>
        </div>

        <div className="hidden w-1/2 h-full bg-primary lg:flex items-center justify-center">
          <TestimonialCard
            className="w-[450px] shadow-gray-950 shadow-2xl rounded-lg"
            testimonial={{
              id: 1,
              stars: rating,
              text:
                feedback ||
                "I love this product, it's very useful and easy to use",
              name: name || "John Doe",
              job: owner || "CEO at X",
              image: CHARACTERS[selectedProfil - 1].image,
            }}
          />
        </div>
      </div>
    </>
  );
}
