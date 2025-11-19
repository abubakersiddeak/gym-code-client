
"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";

const faqs = [
  {
    question: "What are your membership options?",
    answer:
      "We offer three membership tiers: Starter ($29/month), Pro ($59/month), and Elite ($99/month). Each tier includes different levels of access to gym facilities, classes, and personal training sessions. Check our Pricing section for detailed information.",
  },
  {
    question: "Do I need to sign a long-term contract?",
    answer:
      "No! We offer flexible month-to-month memberships with no long-term contracts. You can cancel anytime with 30 days notice. We also offer discounted rates for 6-month and annual commitments.",
  },
  {
    question: "What should I bring for my first visit?",
    answer:
      "Bring comfortable workout clothes, athletic shoes, a water bottle, and a towel. We provide lockers, but you'll need to bring your own lock. First-time visitors get a complimentary fitness assessment and gym tour.",
  },
  {
    question: "Are personal trainers included in membership?",
    answer:
      "Personal training sessions are included in our Pro and Elite memberships (2 and unlimited sessions respectively). Starter members can purchase personal training sessions separately at competitive rates.",
  },
  {
    question: "What are your gym hours?",
    answer:
      "We're open Monday-Friday 5:00 AM - 11:00 PM, and Saturday-Sunday 6:00 AM - 10:00 PM. Elite members get 24/7 access to the facility with their key card.",
  },
  {
    question: "Do you offer group fitness classes?",
    answer:
      "Yes! We offer over 20 group classes weekly including Yoga, CrossFit, HIIT, Spin, Pilates, and more. All classes are led by certified instructors. Class schedules are available in our Schedule section.",
  },
  {
    question: "Is there parking available?",
    answer:
      "Yes, we have a large free parking lot for all members and visitors. We also have bike racks and are accessible by public transportation.",
  },
  {
    question: "Can I pause my membership?",
    answer:
      "Yes, you can pause your membership for up to 3 months per year for medical reasons, travel, or other circumstances. A small administrative fee applies.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faqs"
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
            <div className="inline-flex items-center justify-center w-16 h-16 bg-mest-blue-6/10 dark:bg-mest-blue-6/20 rounded-full mb-6 border border-mest-blue-6/20">
              <HelpCircle className="w-8 h-8 text-mest-blue-6" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-mest-gray-1 dark:text-mest-gray-10">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-mest-gray-6 dark:text-mest-gray-7 max-w-2xl mx-auto">
              Everything you need to know about FitZone membership and
              facilities
            </p>
          </div>
        </ScrollAnimationWrapper>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <ScrollAnimationWrapper key={index} delay={index * 50}>
              <article
                className={`bg-linear-to-br from-mest-blue-6/5 to-mest-blue-6/10 dark:from-mest-blue-6/10 dark:to-mest-blue-6/5 rounded-2xl border overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? "border-mest-blue-6/50 shadow-lg"
                    : "border-mest-blue-6/30"
                }`}
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/30 dark:hover:bg-mest-gray-1/30 transition-colors duration-300"
                >
                  <span className="font-semibold text-lg text-mest-gray-1 dark:text-mest-gray-10 pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-mest-blue-6 shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-6 pb-5 text-mest-gray-6 dark:text-mest-gray-7 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </article>
            </ScrollAnimationWrapper>
          ))}
        </div>

        {/* CTA */}
        <ScrollAnimationWrapper delay={faqs.length * 50}>
          <div className="text-center mt-12">
            <p className="text-mest-gray-6 dark:text-mest-gray-7 mb-4">
              Still have questions?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-mest-blue-6 hover:bg-mest-blue-7 text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Contact Us
            </a>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
