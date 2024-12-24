import Image from "next/image";
import { useMemo } from "react";

// const imageHero = [
//   {
//     id: 0,
//     image: '/imageHero'
//   }
// ]

const getRandomDelay = () => Math.floor(Math.random() * 500);

export default function ImageHeroGrid() {
  const imageGrid = Array.from({ length: 9 }, (_, i) => i);
  const randomDelays = useMemo(
    () => imageGrid.map(() => getRandomDelay()),
    [imageGrid]
  );

  console.log(randomDelays);

  return (
    // <div className="w-full min-h-[500px] sm:min-h-[700px] bg-primary grid grid-cols-3 grid-rows-3">
    <div className="w-full max-w-full h-auto min-h-[500px] max-h-screen bg-primary grid grid-cols-3 grid-rows-3 aspect-square mx-auto">
      {imageGrid.map((image) => (
        <div
          key={image}
          className="relative bg-secondary delay-150 scale-0 transform origin-center animate-scale"
          style={{
            animationDelay: `${randomDelays[image]}ms`,
          }}
        >
          <Image
            src={`/imageHero/${image}.png`}
            alt="image hero grid"
            fill
            className="object-fill"
          />
        </div>
      ))}
    </div>
  );
}
