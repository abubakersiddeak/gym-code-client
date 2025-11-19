
import Image from "next/image";
import { TrendingDown, Calendar, Award } from "lucide-react";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";

const successStories = [
  {
    name: "John Matthews",
    achievement: "Lost 40 lbs in 6 months",
    duration: "6 months",
    weightLost: "40 lbs",
    before:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=700",
    after:
      "https://plus.unsplash.com/premium_photo-1661589462568-c65fcae707f9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fGd5bXxlbnwwfHwwfHx8MA%3D&auto=format&fit=crop&q=60&w=700",
    quote:
      "FitZone changed my life completely. The trainers are amazing and the support is incredible!",
  },
  {
    name: "Lisa Anderson",
    achievement: "Gained 15 lbs of muscle",
    duration: "8 months",
    muscleGained: "15 lbs",
    before:
      "https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=700",
    after:
      "https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=700",
    quote:
      "I never thought I could be this strong. The strength training program is phenomenal!",
  },
  {
    name: "Michael Torres",
    achievement: "Completed first marathon",
    duration: "10 months",
    achievement2: "Marathon finisher",
    before:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=700",
    after:
      "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=700",
    quote:
      "From couch potato to marathon runner - FitZone made it possible with their cardio programs!",
  },
];

export default function SuccessStories() {
  return (
    <section className="py-10 lg:py-14 bg-white dark:bg-darkbg-1 relative overflow-hidden">
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
              Success Stories
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-mest-gray-1 dark:text-mest-gray-10">
              Transformation Stories
            </h2>
            <p className="text-lg text-mest-gray-6 dark:text-mest-gray-7 max-w-2xl mx-auto">
              See how our members achieved incredible results with dedication
              and our expert guidance
            </p>
          </div>
        </ScrollAnimationWrapper>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {successStories.map((story, index) => (
            <ScrollAnimationWrapper key={index} delay={index * 100}>
              <article className="bg-linear-to-br from-mest-blue-6/5 to-mest-blue-6/10 dark:from-mest-blue-6/10 dark:to-mest-blue-6/5 rounded-2xl overflow-hidden border border-mest-blue-6/30 hover:border-mest-blue-6/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                {/* Before/After Images */}
                <div className="grid grid-cols-2 gap-1 relative h-64">
                  <div className="relative">
                    <Image
                      src={story.before}
                      alt={`${story.name} before`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-3 left-3 px-3 py-1 bg-black/70 text-white text-sm font-semibold rounded-full backdrop-blur-sm">
                      Before
                    </div>
                  </div>
                  <div className="relative">
                    <Image
                      src={story.after}
                      alt={`${story.name} after`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-3 right-3 px-3 py-1 bg-mest-blue-6 text-white text-sm font-semibold rounded-full">
                      After
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-mest-gray-1 dark:text-mest-gray-10">
                    {story.name}
                  </h3>

                  <p className="text-mest-blue-6 font-semibold mb-4">
                    {story.achievement}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="p-3 bg-white dark:bg-mest-gray-2 rounded-lg border border-mest-blue-6/20">
                      <div className="flex items-center gap-2 mb-1">
                        <Calendar className="w-4 h-4 text-mest-blue-6" />
                        <span className="text-xs text-mest-gray-6 dark:text-mest-gray-7">
                          Duration
                        </span>
                      </div>
                      <div className="font-bold text-mest-gray-1 dark:text-mest-gray-10">
                        {story.duration}
                      </div>
                    </div>

                    <div className="p-3 bg-white dark:bg-mest-gray-2 rounded-lg border border-mest-blue-6/20">
                      <div className="flex items-center gap-2 mb-1">
                        {story.weightLost ? (
                          <TrendingDown className="w-4 h-4 text-mest-green-6" />
                        ) : (
                          <Award className="w-4 h-4 text-mest-amber-6" />
                        )}
                        <span className="text-xs text-mest-gray-6 dark:text-mest-gray-7">
                          Result
                        </span>
                      </div>
                      <div className="font-bold text-mest-gray-1 dark:text-mest-gray-10">
                        {story.weightLost ||
                          story.muscleGained ||
                          story.achievement2}
                      </div>
                    </div>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-mest-gray-6 dark:text-mest-gray-7 italic border-l-4 border-mest-blue-6 pl-4">
                    {story.quote}
                  </blockquote>
                </div>
              </article>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
