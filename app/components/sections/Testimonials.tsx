import { TestimonialHeader } from "../TestimonialHeader";
import { TestimonialCard } from "../TestimonialCard";
import { TestimonialsFooter } from "../TestimonialFooter";
import { getFeedbacks } from "@/app/actions";

export default async function Testimonials() {
  const feedbacks = await getFeedbacks();
  return (
    <section className="lg:max-w-[1728px] mx-auto lg:space-y-10">
      <div className="flex flex-col lg:flex-row gap-10 lg:h-[600px] xl:h-[800px]">
        {/* Image */}
        <TestimonialHeader />

        {/* Testimonials cards */}
        <div className="h-[400px] lg:h-full px-1 overflow-hidden lg:w-1/2">
          <div className="min-w-full flex flex-row lg:flex-col justify-start items-start gap-10 animate-testimonials">
            {feedbacks.map((feedback, index) => (
              <TestimonialCard
                testimonial={feedback}
                key={`${feedback._id}-original`}
                index={index}
              />
            ))}

            {feedbacks.map((feedback, index) => (
              <TestimonialCard
                testimonial={feedback}
                key={`${feedback._id}-duplicate`}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
      <TestimonialsFooter />
    </section>
  );
}
