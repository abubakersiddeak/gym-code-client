// src/app/health/gym/gymComponents/TrainersSection.tsx
import Image from "next/image";
import { Award } from "lucide-react";

import ScrollAnimationWrapper from "./ScrollAnimationWrapper";
import { gymData } from "@/data";

export default function TrainersSection() {
  const { trainers } = gymData;

  return (
    <section
      id="trainers"
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
              Our Team
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-mest-gray-1 dark:text-mest-gray-10">
              Meet Our Trainers
            </h2>
            <p className="text-lg text-mest-gray-6 dark:text-mest-gray-7 max-w-2xl mx-auto">
              Expert coaches dedicated to helping you reach your fitness
              potential
            </p>
          </div>
        </ScrollAnimationWrapper>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, index) => (
            <ScrollAnimationWrapper key={index} delay={index * 100}>
              <article className="group">
                <div className="relative overflow-hidden rounded-2xl mb-4 border border-mest-blue-6/30 hover:border-mest-blue-6/50 transition-all duration-500 hover:shadow-2xl">
                  {/* Image */}
                  <div className="relative aspect-3/4">
                    <Image
                      src={trainer.image}
                      alt={trainer.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                  </div>

                  {/* Overlay Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-4 h-4 text-mest-blue-9" />
                      <span className="text-sm text-mest-blue-9 font-semibold">
                        {trainer.experience} experience
                      </span>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-linear-to-br from-mest-blue-6/20 to-mest-blue-6/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Info */}
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-1 text-mest-gray-1 dark:text-mest-gray-10 group-hover:text-mest-blue-6 transition-colors duration-300">
                    {trainer.name}
                  </h3>
                  <p className="text-mest-gray-6 dark:text-mest-gray-7">
                    {trainer.specialty}
                  </p>
                </div>
              </article>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
