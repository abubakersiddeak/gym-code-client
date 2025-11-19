
"use client";

import { useState } from "react";
import { Calculator, TrendingUp, TrendingDown, Minus } from "lucide-react";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";

export default function BMICalculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState("");

  const calculateBMI = (e: React.FormEvent) => {
    e.preventDefault();

    const heightInMeters = parseFloat(height) / 100;
    const weightInKg = parseFloat(weight);

    if (heightInMeters > 0 && weightInKg > 0) {
      const bmiValue = weightInKg / (heightInMeters * heightInMeters);
      setBmi(parseFloat(bmiValue.toFixed(1)));

      if (bmiValue < 18.5) {
        setCategory("Underweight");
      } else if (bmiValue >= 18.5 && bmiValue < 25) {
        setCategory("Normal");
      } else if (bmiValue >= 25 && bmiValue < 30) {
        setCategory("Overweight");
      } else {
        setCategory("Obese");
      }
    }
  };

  const getBMIColor = () => {
    if (category === "Underweight") return "text-mest-blue-6";
    if (category === "Normal") return "text-mest-green-6";
    if (category === "Overweight") return "text-mest-amber-6";
    return "text-mest-red-6";
  };

  const renderBMIIcon = () => {
    const iconClass = `w-16 h-16 ${getBMIColor()}`;

    if (category === "Underweight") {
      return <TrendingDown className={iconClass} />;
    }
    if (category === "Normal") {
      return <Minus className={iconClass} />;
    }
    return <TrendingUp className={iconClass} />;
  };

  return (
    <section className="py-10 lg:py-14 bg-white dark:bg-darkbg-1 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
        <div className="absolute top-20 left-10 w-72 h-72 bg-mest-blue-6 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-mest-blue-6 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <ScrollAnimationWrapper>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-mest-blue-6/10 dark:bg-mest-blue-6/20 text-mest-blue-6 rounded-full text-sm font-semibold mb-4 border border-mest-blue-6/20">
                Health Tool
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-mest-gray-1 dark:text-mest-gray-10">
                BMI Calculator
              </h2>
              <p className="text-lg text-mest-gray-6 dark:text-mest-gray-7">
                Calculate your Body Mass Index and track your fitness journey
              </p>
            </div>
          </ScrollAnimationWrapper>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Calculator Form */}
            <ScrollAnimationWrapper>
              <div
                className={`p-8 bg-linear-to-br from-mest-blue-6/5 to-mest-blue-6/10 dark:from-mest-blue-6/10 dark:to-mest-blue-6/5 rounded-2xl border border-mest-blue-6/30`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-mest-blue-6/10 dark:bg-mest-blue-6/20 rounded-lg flex items-center justify-center">
                    <Calculator className="w-6 h-6 text-mest-blue-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-mest-gray-1 dark:text-mest-gray-10">
                    Calculate Your BMI
                  </h3>
                </div>

                <form onSubmit={calculateBMI} className="space-y-6">
                  <div>
                    <label
                      htmlFor="height"
                      className="block text-sm font-semibold mb-2 text-mest-gray-1 dark:text-mest-gray-10"
                    >
                      Height (cm)
                    </label>
                    <input
                      type="number"
                      id="height"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      required
                      min="1"
                      className="w-full px-4 py-3 bg-white dark:bg-mest-gray-2 border border-mest-blue-6/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-mest-blue-6 text-mest-gray-1 dark:text-mest-gray-10 transition-all"
                      placeholder="170"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="weight"
                      className="block text-sm font-semibold mb-2 text-mest-gray-1 dark:text-mest-gray-10"
                    >
                      Weight (kg)
                    </label>
                    <input
                      type="number"
                      id="weight"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      required
                      min="1"
                      step="0.1"
                      className="w-full px-4 py-3 bg-white dark:bg-mest-gray-2 border border-mest-blue-6/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-mest-blue-6 text-mest-gray-1 dark:text-mest-gray-10 transition-all"
                      placeholder="70"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-mest-blue-6 hover:bg-mest-blue-7 text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105"
                  >
                    Calculate BMI
                  </button>
                </form>
              </div>
            </ScrollAnimationWrapper>

            {/* Result */}
            <ScrollAnimationWrapper delay={200}>
              <div
                className={`p-8 bg-linear-to-br from-mest-blue-6/5 to-mest-blue-6/10 dark:from-mest-blue-6/10 dark:to-mest-blue-6/5 rounded-2xl border border-mest-blue-6/30 flex flex-col justify-center h-full`}
              >
                {bmi !== null ? (
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-32 h-32 bg-mest-blue-6/10 dark:bg-mest-blue-6/20 rounded-full mb-6">
                      {renderBMIIcon()}
                    </div>

                    <div className="mb-4">
                      <div className="text-6xl font-bold text-mest-gray-1 dark:text-mest-gray-10 mb-2">
                        {bmi}
                      </div>
                      <div
                        className={`text-2xl font-semibold ${getBMIColor()}`}
                      >
                        {category}
                      </div>
                    </div>

                    <div className="space-y-2 text-left mt-8">
                      <div className="flex items-center justify-between p-3 bg-white dark:bg-mest-gray-2 rounded-lg border border-mest-blue-6/20">
                        <span className="text-mest-gray-6 dark:text-mest-gray-7">
                          Underweight
                        </span>
                        <span className="font-semibold text-mest-gray-1 dark:text-mest-gray-10">
                          &lt; 18.5
                        </span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-white dark:bg-mest-gray-2 rounded-lg border border-mest-blue-6/20">
                        <span className="text-mest-gray-6 dark:text-mest-gray-7">
                          Normal
                        </span>
                        <span className="font-semibold text-mest-gray-1 dark:text-mest-gray-10">
                          18.5 - 24.9
                        </span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-white dark:bg-mest-gray-2 rounded-lg border border-mest-blue-6/20">
                        <span className="text-mest-gray-6 dark:text-mest-gray-7">
                          Overweight
                        </span>
                        <span className="font-semibold text-mest-gray-1 dark:text-mest-gray-10">
                          25 - 29.9
                        </span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-white dark:bg-mest-gray-2 rounded-lg border border-mest-blue-6/20">
                        <span className="text-mest-gray-6 dark:text-mest-gray-7">
                          Obese
                        </span>
                        <span className="font-semibold text-mest-gray-1 dark:text-mest-gray-10">
                          ≥ 30
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-mest-gray-6 dark:text-mest-gray-7">
                    <Calculator className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p className="text-lg">
                      Enter your height and weight to calculate your BMI
                    </p>
                  </div>
                )}
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}
