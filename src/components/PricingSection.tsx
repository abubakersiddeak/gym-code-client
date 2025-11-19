
"use client";

import { useState, useEffect, useRef, useActionState } from "react";
import { useFormStatus } from "react-dom";
import Form from "next/form";
import { Check, Loader } from "lucide-react";

import ScrollAnimationWrapper from "./ScrollAnimationWrapper";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { startMembershipAction, type FormState } from "../action/actions";
import { gymData } from "@/data";

// Define a type for a pricing plan
type PricingPlan = (typeof gymData.pricing)[0];

// Submit Button Component
function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      className="bg-mest-blue-6 hover:bg-mest-blue-7"
      disabled={pending}
    >
      {pending ? (
        <>
          <Loader className="mr-2 h-4 w-4 animate-spin" />
          Processing...
        </>
      ) : (
        "Confirm Membership"
      )}
    </Button>
  );
}

export default function PricingSection() {
  const { pricing } = gymData;
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const initialState: FormState = { status: "", message: "" };
  const [state, formAction] = useActionState(
    startMembershipAction,
    initialState
  );

  useEffect(() => {
    if (state.message) {
      if (state.status === "success") {
        toast.success(state.message);
        formRef.current?.reset();
        setTimeout(() => setIsDialogOpen(false), 500);
      } else if (state.status === "error") {
        toast.error(state.message);
      }
    }
  }, [state]);

  const handleOpenDialog = (plan: PricingPlan) => {
    setSelectedPlan(plan);
    setIsDialogOpen(true);
  };

  return (
    <>
      <section
        id="pricing"
        className="py-10 lg:py-14 bg-white dark:bg-darkbg-1 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
          <div className="absolute top-20 left-10 w-72 h-72 bg-mest-blue-6 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-mest-blue-6 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollAnimationWrapper>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-mest-blue-6/10 dark:bg-mest-blue-6/20 text-mest-blue-6 rounded-full text-sm font-semibold mb-4 border border-mest-blue-6/20">
                Pricing Plans
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-mest-gray-1 dark:text-mest-gray-10">
                Membership Plans
              </h2>
              <p className="text-lg text-mest-gray-6 dark:text-mest-gray-7 max-w-2xl mx-auto">
                Choose the perfect plan to start your fitness journey today
              </p>
            </div>
          </ScrollAnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <ScrollAnimationWrapper key={index} delay={index * 100}>
                <article
                  className={`relative p-8 h-full bg-linear-to-br from-mest-blue-6/5 to-mest-blue-6/10 dark:from-mest-blue-6/10 dark:to-mest-blue-6/5 rounded-2xl border-2 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                    plan.popular
                      ? "border-mest-blue-6 shadow-xl scale-105"
                      : "border-mest-blue-6/30 hover:border-mest-blue-6/50"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="px-4 py-1 bg-mest-blue-6 text-white text-sm font-semibold rounded-full shadow-lg">
                        Most Popular
                      </span>
                    </div>
                  )}
                  {plan.popular && (
                    <div className="absolute inset-0 bg-linear-to-br from-mest-blue-6/10 to-transparent rounded-2xl pointer-events-none" />
                  )}

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold mb-2 text-mest-gray-1 dark:text-mest-gray-10">
                        {plan.name}
                      </h3>
                      <div className="flex items-end justify-center gap-1">
                        <span className="text-5xl font-bold text-mest-blue-6">
                          ${plan.price}
                        </span>
                        <span className="text-mest-gray-6 dark:text-mest-gray-7 mb-2">
                          /{plan.period}
                        </span>
                      </div>
                    </div>
                    <ul className="space-y-4 mb-8 grow">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-5 h-5 bg-mest-blue-6/20 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-mest-blue-6" />
                          </div>
                          <span className="text-mest-gray-6 dark:text-mest-gray-7">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => handleOpenDialog(plan)}
                      className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 ${
                        plan.popular
                          ? "bg-mest-blue-6 hover:bg-mest-blue-7 text-white shadow-lg hover:shadow-xl"
                          : "bg-mest-blue-6/10 dark:bg-mest-blue-6/20 hover:bg-mest-blue-6 text-mest-blue-6 hover:text-white border border-mest-blue-6/20 hover:border-mest-blue-6"
                      }`}
                    >
                      Get Started
                    </button>
                  </div>
                </article>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md bg-white dark:bg-mest-gray-2 border-mest-blue-6/30">
          {selectedPlan && (
            <Form ref={formRef} action={formAction}>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-mest-gray-1 dark:text-white">
                  Join the{" "}
                  <span className="text-mest-blue-6">{selectedPlan.name}</span>{" "}
                  Plan
                </DialogTitle>
                <DialogDescription className="text-mest-gray-6 dark:text-mest-gray-7">
                  Complete your details to start your membership at $
                  {selectedPlan.price}/month.
                </DialogDescription>
              </DialogHeader>

              {/* Hidden inputs */}
              <input type="hidden" name="planName" value={selectedPlan.name} />
              <input
                type="hidden"
                name="planPrice"
                value={selectedPlan.price}
              />

              <div className="py-4 space-y-4">
                {/* Form fields */}
                <div>
                  <label
                    htmlFor="membership_name"
                    className="text-sm font-medium text-mest-gray-1 dark:text-mest-gray-10"
                  >
                    Full Name
                  </label>
                  <input
                    id="membership_name"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="mt-1 w-full px-3 py-2 bg-white dark:bg-mest-gray-3 border border-mest-blue-6/20 rounded-md focus:outline-none focus:ring-2 focus:ring-mest-blue-6"
                  />
                </div>
                <div>
                  <label
                    htmlFor="membership_email"
                    className="text-sm font-medium text-mest-gray-1 dark:text-mest-gray-10"
                  >
                    Email Address
                  </label>
                  <input
                    id="membership_email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="mt-1 w-full px-3 py-2 bg-white dark:bg-mest-gray-3 border border-mest-blue-6/20 rounded-md focus:outline-none focus:ring-2 focus:ring-mest-blue-6"
                  />
                </div>
                <div>
                  <label
                    htmlFor="membership_phone"
                    className="text-sm font-medium text-mest-gray-1 dark:text-mest-gray-10"
                  >
                    Phone Number (Optional)
                  </label>
                  <input
                    id="membership_phone"
                    name="phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    className="mt-1 w-full px-3 py-2 bg-white dark:bg-mest-gray-3 border border-mest-blue-6/20 rounded-md focus:outline-none focus:ring-2 focus:ring-mest-blue-6"
                  />
                </div>
              </div>

              <DialogFooter>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsDialogOpen(false)}
                >
                  Cancel
                </Button>
                <SubmitButton />
              </DialogFooter>
            </Form>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
