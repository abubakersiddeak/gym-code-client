
import { Dumbbell, Users, Calendar, Heart, Trophy, Clock } from "lucide-react";

import ScrollAnimationWrapper from "./ScrollAnimationWrapper";
import { gymData } from "@/data";

const iconMap: Record<string, React.ElementType> = {
  Dumbbell,
  Users,
  Calendar,
  Heart,
  Trophy,
  Clock,
};

const iconColors = [
  {
    icon: "text-mest-blue-6",
    bg: "bg-mest-blue-6/10 dark:bg-mest-blue-6/20",
    border: "border-mest-blue-6/20",
    hoverBorder: "group-hover:border-mest-blue-6/40",
  },
  {
    icon: "text-mest-purple-6",
    bg: "bg-mest-purple-6/10 dark:bg-mest-purple-6/20",
    border: "border-mest-purple-6/20",
    hoverBorder: "group-hover:border-mest-purple-6/40",
  },
  {
    icon: "text-mest-amber-6",
    bg: "bg-mest-amber-6/10 dark:bg-mest-amber-6/20",
    border: "border-mest-amber-6/20",
    hoverBorder: "group-hover:border-mest-amber-6/40",
  },
  {
    icon: "text-mest-green-6",
    bg: "bg-mest-green-6/10 dark:bg-mest-green-6/20",
    border: "border-mest-green-6/20",
    hoverBorder: "group-hover:border-mest-green-6/40",
  },
  {
    icon: "text-mest-red-6",
    bg: "bg-mest-red-6/10 dark:bg-mest-red-6/20",
    border: "border-mest-red-6/20",
    hoverBorder: "group-hover:border-mest-red-6/40",
  },
  {
    icon: "text-mest-teal-6",
    bg: "bg-mest-teal-6/10 dark:bg-mest-teal-6/20",
    border: "border-mest-teal-6/20",
    hoverBorder: "group-hover:border-mest-teal-6/40",
  },
];

export default function FeaturesSection() {
  const { features } = gymData;

  return (
    <section
      id="features"
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
              Why Choose Us
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-mest-gray-1 dark:text-mest-gray-10">
              Why Choose FitZone
            </h2>
            <p className="text-lg text-mest-gray-6 dark:text-mest-gray-7 max-w-2xl mx-auto">
              Everything you need to achieve your fitness goals in one place
            </p>
          </div>
        </ScrollAnimationWrapper>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            const scheme = iconColors[index % iconColors.length];

            return (
              <ScrollAnimationWrapper key={index} delay={index * 100}>
                <article className="group relative p-8 bg-linear-to-br from-mest-blue-6/5 to-mest-blue-6/10 dark:from-mest-blue-6/10 dark:to-mest-blue-6/5 rounded-2xl border border-mest-blue-6/30 hover:border-mest-blue-6/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden">
                  {/* Subtle background overlay on hover */}
                  <div className="absolute inset-0 bg-white/50 dark:bg-mest-gray-1/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 ${scheme.bg} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 border ${scheme.border} ${scheme.hoverBorder}`}
                    >
                      <Icon className={`w-8 h-8 ${scheme.icon}`} />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-3 text-mest-gray-1 dark:text-mest-gray-10">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-mest-gray-6 dark:text-mest-gray-7 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Decorative corner accent */}
                  <div
                    className={`absolute -bottom-4 -right-4 w-24 h-24 ${scheme.bg} rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                </article>
              </ScrollAnimationWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
