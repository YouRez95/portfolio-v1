import { createRatingStars } from "@/utils";
import { TESTIMONIALS } from "../constants/testimonials";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { bagel } from "@/fonts/fonts";

const getCardStyles = (id: number) => {
  const styles = [
    "bg-black text-[#EEEEE9] stroke-[#EEEEE9]",
    "bg-[#EEEEE9] text-[#014921] stroke-[#014921]",
    "bg-[#014921] text-[#EEEEE9] stroke-[#EEEEE9]",
  ];

  return styles[(id - 1) % 3];
};

export const TestimonialCard = ({
  testimonial,
  className,
}: {
  testimonial: (typeof TESTIMONIALS)[0];
  className?: string;
}) => (
  <div
    className={`min-w-[290px] sm:min-w-[400px] flex flex-col gap-5 p-3 ${getCardStyles(
      testimonial.id
    )} ${className}`}
  >
    {/* Stars */}
    <div className="flex">
      {createRatingStars(testimonial.stars, 5).map((type, index) => (
        <FontAwesomeIcon
          key={index}
          icon={type === "half" ? faStarHalfStroke : faStar}
          className={`w-4 h-4 stroke-inherit stroke-[15px] ${
            type === "full" ? "text-inherit" : ""
          } ${type === "empty" ? "text-transparent" : ""}`}
        />
      ))}
    </div>
    {/* Testimonial Text */}
    <p className="text-sm lg:text-base break-words">{testimonial.text}</p>
    {/* Author Info */}
    <div className="flex items-center justify-start gap-1">
      <div className="w-12 h-12 relative rounded-full flex-shrink-0 overflow-hidden">
        <Image
          src={testimonial.image}
          alt="testimonial image"
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col">
        <span className={`${bagel.className}`}>{testimonial.name}</span>
        <span className="text-sm text-[#A1A1A1]">{testimonial.job}</span>
      </div>
    </div>
  </div>
);
