
import Image from "next/image";

import ScrollAnimationWrapper from "./ScrollAnimationWrapper";
import { gymData } from "@/data";

export default function GallerySection() {
  const { gallery } = gymData;

  return (
    <section
      id="gallery"
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
              Gallery
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-mest-gray-1 dark:text-mest-gray-10">
              Our Facility
            </h2>
            <p className="text-lg text-mest-gray-6 dark:text-mest-gray-7 max-w-2xl mx-auto">
              Take a virtual tour of our state-of-the-art fitness center
            </p>
          </div>
        </ScrollAnimationWrapper>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {gallery.map((image, index) => (
            <ScrollAnimationWrapper
              key={index}
              delay={index * 50}
              className={`group relative overflow-hidden rounded-xl border border-mest-blue-6/30 hover:border-mest-blue-6/50 transition-all duration-500 hover:shadow-2xl ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div
                className={`relative ${
                  index === 0 ? "aspect-square" : "aspect-square"
                }`}
              >
                <Image
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-linear-to-br from-mest-blue-6/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
