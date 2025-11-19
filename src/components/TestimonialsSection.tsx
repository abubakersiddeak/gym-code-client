
import Image from "next/image";
import { Star, Quote } from "lucide-react";

import ScrollAnimationWrapper from "./ScrollAnimationWrapper";
import { gymData } from "@/data";

export default function TestimonialsSection() {
  const { testimonials } = gymData;

  return (
    <section
      id="testimonials"
      className="py-10 lg:py-14 bg-white dark:bg-darkbg-1 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
        <div className="absolute top-20 left-10 w-72 h-72 bg-mest-blue-6 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-mest-blue-6 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollAnimationWrapper>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-mest-blue-6/10 dark:bg-mest-blue-6/20 text-mest-blue-6 rounded-full text-sm font-semibold mb-4 border border-mest-blue-6/20">
              Testimonials
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-mest-gray-1 dark:text-mest-gray-10">
              What Our Members Say
            </h2>
            <p className="text-lg text-mest-gray-6 dark:text-mest-gray-7 max-w-2xl mx-auto">
              Real results from real people who transformed their lives at
              FitZone
            </p>
          </div>
        </ScrollAnimationWrapper>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <ScrollAnimationWrapper key={index} delay={index * 100}>
              <article
                className={`relative p-8 bg-linear-to-br from-mest-blue-6/5 to-mest-blue-6/10 dark:from-mest-blue-6/10 dark:to-mest-blue-6/5 rounded-2xl border border-mest-blue-6/30 hover:border-mest-blue-6/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2`}
              >
                {/* Subtle background overlay on hover */}
                <div className="absolute inset-0 bg-white/50 dark:bg-mest-gray-1/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />

                <div className="relative z-10">
                  {/* Quote Icon */}
                  <div className="w-12 h-12 bg-mest-blue-6/10 dark:bg-mest-blue-6/20 rounded-full flex items-center justify-center mb-6">
                    <Quote className="w-6 h-6 text-mest-blue-6" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-mest-amber-6 text-mest-amber-6"
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-mest-gray-6 dark:text-mest-gray-7 mb-6 leading-relaxed">
                    {testimonial.content}
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-mest-blue-6/30">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-mest-gray-1 dark:text-mest-gray-10">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-mest-gray-6 dark:text-mest-gray-7">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
