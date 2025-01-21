import { TESTIMONIALS } from "@/app/constants/testimonials";
import { TestimonialHeader } from "../TestimonialHeader";
import { TestimonialCard } from "../TestimonialCard";
import { TestimonialsFooter } from "../TestimonialFooter";

export default function Testimonials() {
  return (
    <section className="lg:max-w-[1728px] mx-auto lg:space-y-10">
      <div className="flex flex-col lg:flex-row gap-10 lg:h-[600px] xl:h-[800px]">
        {/* Image */}
        <TestimonialHeader />

        {/* Testimonials cards */}
        <div className="h-[400px] lg:h-full px-1 overflow-hidden lg:w-1/2">
          <div className="min-w-min flex flex-row lg:flex-col justify-start items-start gap-10 animate-testimonials">
            {TESTIMONIALS.map((testimonial, index) => (
              <TestimonialCard testimonial={testimonial} key={testimonial.id} />
            ))}
          </div>
        </div>
      </div>
      <TestimonialsFooter />
    </section>
  );
}
