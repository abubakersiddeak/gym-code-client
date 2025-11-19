
import { Clock } from "lucide-react";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";

const schedule = [
  {
    day: "Monday",
    classes: [
      { time: "06:00 AM", name: "Morning Yoga", trainer: "Sarah Johnson" },
      { time: "09:00 AM", name: "CrossFit", trainer: "Mike Chen" },
      { time: "05:00 PM", name: "HIIT Training", trainer: "Emma Davis" },
      { time: "07:00 PM", name: "Spin Class", trainer: "David Rodriguez" },
    ],
  },
  {
    day: "Tuesday",
    classes: [
      { time: "06:00 AM", name: "Cardio Blast", trainer: "Emma Davis" },
      { time: "10:00 AM", name: "Pilates", trainer: "Sarah Johnson" },
      { time: "06:00 PM", name: "Strength Training", trainer: "Mike Chen" },
      { time: "08:00 PM", name: "Boxing", trainer: "David Rodriguez" },
    ],
  },
  {
    day: "Wednesday",
    classes: [
      { time: "06:00 AM", name: "Morning Yoga", trainer: "Sarah Johnson" },
      { time: "09:00 AM", name: "CrossFit", trainer: "Mike Chen" },
      { time: "05:00 PM", name: "HIIT Training", trainer: "Emma Davis" },
      { time: "07:00 PM", name: "Spin Class", trainer: "David Rodriguez" },
    ],
  },
  {
    day: "Thursday",
    classes: [
      { time: "06:00 AM", name: "Cardio Blast", trainer: "Emma Davis" },
      { time: "10:00 AM", name: "Pilates", trainer: "Sarah Johnson" },
      { time: "06:00 PM", name: "Strength Training", trainer: "Mike Chen" },
      { time: "08:00 PM", name: "Boxing", trainer: "David Rodriguez" },
    ],
  },
  {
    day: "Friday",
    classes: [
      { time: "06:00 AM", name: "Morning Yoga", trainer: "Sarah Johnson" },
      { time: "09:00 AM", name: "CrossFit", trainer: "Mike Chen" },
      { time: "05:00 PM", name: "HIIT Training", trainer: "Emma Davis" },
      { time: "07:00 PM", name: "Zumba", trainer: "Sarah Johnson" },
    ],
  },
  {
    day: "Saturday",
    classes: [
      { time: "08:00 AM", name: "Weekend Warrior", trainer: "Mike Chen" },
      { time: "10:00 AM", name: "Yoga Flow", trainer: "Sarah Johnson" },
      { time: "12:00 PM", name: "Family Fitness", trainer: "Emma Davis" },
    ],
  },
  {
    day: "Sunday",
    classes: [
      { time: "08:00 AM", name: "Meditation", trainer: "Sarah Johnson" },
      { time: "10:00 AM", name: "Light Cardio", trainer: "Emma Davis" },
      { time: "12:00 PM", name: "Stretch & Relax", trainer: "Sarah Johnson" },
    ],
  },
];

export default function ScheduleSection() {
  return (
    <section
      id="schedule"
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
              Weekly Schedule
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-mest-gray-1 dark:text-mest-gray-10">
              Weekly Class Schedule
            </h2>
            <p className="text-lg text-mest-gray-6 dark:text-mest-gray-7 max-w-2xl mx-auto">
              Plan your week with our comprehensive class schedule
            </p>
          </div>
        </ScrollAnimationWrapper>

        {/* Horizontal Table Layout - Fixed */}
        <div className="space-y-3">
          {schedule.map((day, dayIndex) => (
            <ScrollAnimationWrapper key={day.day} delay={dayIndex * 100}>
              <div
                className={`bg-linear-to-br from-mest-blue-6/5 to-mest-blue-6/10 dark:from-mest-blue-6/10 dark:to-mest-blue-6/5 rounded-2xl border border-mest-blue-6/30 hover:border-mest-blue-6/50 transition-all duration-500 hover:shadow-xl overflow-hidden`}
              >
                {/* Day Row */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                  {/* Day Name */}
                  <div className="lg:col-span-1 bg-mest-blue-6/10 dark:bg-mest-blue-6/20 p-4 lg:p-6 flex items-center justify-center lg:justify-start border-b lg:border-b-0 lg:border-r border-mest-blue-6/20">
                    <h3 className="text-lg lg:text-xl font-bold text-mest-gray-1 dark:text-mest-gray-10">
                      {day.day}
                    </h3>
                  </div>

                  {/* Classes */}
                  <div className="lg:col-span-4 p-4 lg:p-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                      {day.classes.map((classItem, classIndex) => (
                        <div
                          key={classIndex}
                          className="group p-4 bg-white dark:bg-mest-gray-2 rounded-lg hover:bg-mest-blue-6/10 dark:hover:bg-mest-blue-6/20 transition-all duration-300 border border-mest-blue-6/10 hover:border-mest-blue-6/30 hover:-translate-y-1"
                        >
                          {/* Time */}
                          <div className="flex items-center gap-2 mb-2">
                            <Clock className="w-4 h-4 text-mest-blue-6" />
                            <span className="text-sm font-semibold text-mest-blue-6">
                              {classItem.time}
                            </span>
                          </div>

                          {/* Class Name */}
                          <div className="font-bold text-mest-gray-1 dark:text-mest-gray-10 mb-1 text-sm">
                            {classItem.name}
                          </div>

                          {/* Trainer */}
                          <div className="text-xs text-mest-gray-6 dark:text-mest-gray-7">
                            {classItem.trainer}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}