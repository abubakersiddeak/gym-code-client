import BMICalculator from "@/components/BMICalculator";
import ClassesSection from "@/components/ClassesSection";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import FeaturesSection from "@/components/FeaturesSection";
import GallerySection from "@/components/GallerySection";
import HeroSection from "@/components/HeroSection";
import PricingSection from "@/components/PricingSection";
import ScheduleSection from "@/components/ScheduleSection";
import SuccessStories from "@/components/SuccessStories";
import TestimonialsSection from "@/components/TestimonialsSection";
import TrainersSection from "@/components/TrainersSection";

export default function GymPage() {
  return (
    <>
      <div id="home">
        <HeroSection />
      </div>
      <div id="features">
        <FeaturesSection />
      </div>

      <div id="classes">
        <ClassesSection />
      </div>
      <div id="trainers">
        <TrainersSection />
      </div>
      <div id="schedule">
        <ScheduleSection />
      </div>
      <div id="pricing">
        <PricingSection />
      </div>
      <BMICalculator />
      <SuccessStories />
      <div id="testimonials">
        <TestimonialsSection />
      </div>
      <div id="gallery">
        <GallerySection />
      </div>
      <FAQSection />
      <div id="contact">
        <ContactSection />
      </div>
    </>
  );
}
