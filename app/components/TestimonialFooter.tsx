import { bagel } from "@/fonts/fonts";
import Button from "./ui/Button";
import Link from "next/link";

export const TestimonialsFooter = () => (
  <div className="grid grid-cols-6 bg-[#E7EAEB] mx-2 xl:mx-0 items-center">
    <p
      className={`col-span-4 text-base sm:text-xl lg:text-2xl pl-1 lg:pl-2 xl:pl-4 ${bagel.className}`}
    >
      Enjoyed working with me? I'd love to hear your feedback!
    </p>

    <Link
      href="/feedback"
      className="flex items-center text-sm justify-center max-w-[150px] ml-auto col-span-2"
    >
      <Button backgroundColor="#014921">Add Your Feedback</Button>
    </Link>
  </div>
);
