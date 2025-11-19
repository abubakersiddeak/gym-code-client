
"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import Form from "next/form";
import { MapPin, Phone, Mail, Clock, Loader } from "lucide-react";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";
import { submitContactForm, type FormState } from "@/action/actions";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

// Submit Button Component
function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      className="w-full py-4 bg-mest-blue-6 hover:bg-mest-blue-7 text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105"
      disabled={pending}
    >
      {pending ? (
        <>
          <Loader className="mr-2 h-4 w-4 animate-spin" />
          Sending...
        </>
      ) : (
        "Send Message"
      )}
    </Button>
  );
}

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const initialState: FormState = { status: "", message: "" };
  const [state, formAction] = useActionState(submitContactForm, initialState);

  useEffect(() => {
    if (state.message) {
      if (state.status === "success") {
        toast.success(state.message);
        formRef.current?.reset(); // ✅ Reset form on success
      } else if (state.status === "error") {
        toast.error(state.message);
      }
    }
  }, [state]);

  return (
    <section
      id="contact"
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
              Contact Us
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-mest-gray-1 dark:text-mest-gray-10">
              Get In Touch
            </h2>
            <p className="text-lg text-mest-gray-6 dark:text-mest-gray-7 max-w-2xl mx-auto">
              Have questions? We&apos;re here to help you start your fitness
              journey
            </p>
          </div>
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <ScrollAnimationWrapper>
            <div className="space-y-8">
              <h3 className="text-2xl font-bold mb-6 text-mest-gray-1 dark:text-mest-gray-10">
                Visit Our Gym
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-mest-blue-6/10 dark:bg-mest-blue-6/20 rounded-lg flex items-center justify-center shrink-0 border border-mest-blue-6/20">
                    <MapPin className="w-6 h-6 text-mest-blue-6" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1 text-mest-gray-1 dark:text-mest-gray-10">
                      Address
                    </div>
                    <p className="text-mest-gray-6 dark:text-mest-gray-7">
                      123 Fitness Street, Health City, HC 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-mest-blue-6/10 dark:bg-mest-blue-6/20 rounded-lg flex items-center justify-center shrink-0 border border-mest-blue-6/20">
                    <Phone className="w-6 h-6 text-mest-blue-6" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1 text-mest-gray-1 dark:text-mest-gray-10">
                      Phone
                    </div>
                    <p className="text-mest-gray-6 dark:text-mest-gray-7">
                      +1 (555) 123-4567
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-mest-blue-6/10 dark:bg-mest-blue-6/20 rounded-lg flex items-center justify-center shrink-0 border border-mest-blue-6/20">
                    <Mail className="w-6 h-6 text-mest-blue-6" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1 text-mest-gray-1 dark:text-mest-gray-10">
                      Email
                    </div>
                    <p className="text-mest-gray-6 dark:text-mest-gray-7">
                      info@fitzone.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-mest-blue-6/10 dark:bg-mest-blue-6/20 rounded-lg flex items-center justify-center shrink-0 border border-mest-blue-6/20">
                    <Clock className="w-6 h-6 text-mest-blue-6" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1 text-mest-gray-1 dark:text-mest-gray-10">
                      Hours
                    </div>
                    <p className="text-mest-gray-6 dark:text-mest-gray-7">
                      Mon - Fri: 5:00 AM - 11:00 PM
                      <br />
                      Sat - Sun: 6:00 AM - 10:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimationWrapper>

          {/* Contact Form */}
          <ScrollAnimationWrapper delay={200}>
            <Form
              ref={formRef} // ✅ Add ref to the form
              action={formAction}
              className="p-8 bg-linear-to-br from-mest-blue-6/5 to-mest-blue-6/10 dark:from-mest-blue-6/10 dark:to-mest-blue-6/5 rounded-2xl border border-mest-blue-6/30"
            >
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold mb-2 text-mest-gray-1 dark:text-mest-gray-10"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-mest-gray-2 border border-mest-blue-6/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-mest-blue-6 text-mest-gray-1 dark:text-mest-gray-10"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold mb-2 text-mest-gray-1 dark:text-mest-gray-10"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-mest-gray-2 border border-mest-blue-6/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-mest-blue-6 text-mest-gray-1 dark:text-mest-gray-10"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold mb-2 text-mest-gray-1 dark:text-mest-gray-10"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 bg-white dark:bg-mest-gray-2 border border-mest-blue-6/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-mest-blue-6 text-mest-gray-1 dark:text-mest-gray-10"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold mb-2 text-mest-gray-1 dark:text-mest-gray-10"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-mest-gray-2 border border-mest-blue-6/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-mest-blue-6 text-mest-gray-1 dark:text-mest-gray-10 resize-none"
                    placeholder="Tell us about your fitness goals..."
                  />
                </div>

                <SubmitButton />
              </div>
            </Form>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
}
