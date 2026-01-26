"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

// Icons as simple SVG components
function GuitarIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M19.5 3.5L20.5 4.5M20.5 4.5L21.5 3.5M20.5 4.5L19.5 5.5M20.5 4.5L21.5 5.5" />
      <path d="M17 7L14.5 9.5" />
      <path d="M12.5 11.5C14.5 9.5 16.5 9.5 17 10C17.5 10.5 17.5 12.5 15.5 14.5C13.5 16.5 8 20.5 5.5 18C3 15.5 7 10 9 8C11 6 13 6 13.5 6.5C14 7 14 9 12 11" />
      <circle cx="10" cy="14" r="1.5" />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

function SparklesIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M12 3L13.5 8.5L19 10L13.5 11.5L12 17L10.5 11.5L5 10L10.5 8.5L12 3Z" />
      <path d="M19 15L19.5 17L21.5 17.5L19.5 18L19 20L18.5 18L16.5 17.5L18.5 17L19 15Z" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function DevicesIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <rect x="2" y="4" width="14" height="10" rx="1" />
      <path d="M6 18h6" />
      <path d="M9 14v4" />
      <rect x="16" y="8" width="6" height="10" rx="1" />
      <path d="M19 16v.01" />
    </svg>
  );
}

function CloudSyncIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
      <path d="M12 12v9" />
      <path d="m8 17 4 4 4-4" />
    </svg>
  );
}

function SlidersIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M4 21v-7" />
      <path d="M4 10V3" />
      <path d="M12 21v-9" />
      <path d="M12 8V3" />
      <path d="M20 21v-5" />
      <path d="M20 12V3" />
      <path d="M2 14h4" />
      <path d="M10 8h4" />
      <path d="M18 16h4" />
    </svg>
  );
}

function ChartIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M3 3v18h18" />
      <path d="M18 17V9" />
      <path d="M13 17V5" />
      <path d="M8 17v-3" />
    </svg>
  );
}

function SunIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="5" />
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  );
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export default function PracticePage() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#0C1B2C] transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-[#0C1B2C]/90 backdrop-blur-md border-b border-gray-200 dark:border-[#142636] transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/practice" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#9056A3] flex items-center justify-center">
              <GuitarIcon className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold text-[#0C1B2C] dark:text-white">
              Kenny Practice
            </span>
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="#features"
              className="text-[#3257AD] hover:text-[#0C1B2C] dark:hover:text-white transition-colors"
            >
              Features
            </Link>
            <Link
              href="#download"
              className="text-[#3257AD] hover:text-[#0C1B2C] dark:hover:text-white transition-colors"
            >
              Download
            </Link>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-[#142636] hover:bg-gray-200 dark:hover:bg-[#1a2f42] transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <SunIcon className="w-5 h-5 text-[#9056A3]" />
              ) : (
                <MoonIcon className="w-5 h-5 text-[#9056A3]" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-[#142636] text-[#9056A3] text-sm font-medium mb-8">
            <SparklesIcon className="w-4 h-4" />
            Available on Mac and iOS
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-[#0C1B2C] dark:text-white leading-tight mb-6">
            Practice Guitar.
            <br />
            <span className="text-[#9056A3]">Just Play.</span>
          </h1>

          <p className="text-xl md:text-2xl text-[#3257AD] max-w-2xl mx-auto mb-10 leading-relaxed">
            Stop deciding what to practice. Select your time, pick your mood,
            and let Kenny Practice generate the perfect practice session for you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#download"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#9056A3] text-white font-semibold text-lg hover:bg-[#7a4a8a] dark:hover:bg-[#a066b3] transition-colors"
            >
              <AppleIcon className="w-5 h-5" />
              Download Free
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-[#3257AD] text-[#3257AD] font-semibold text-lg hover:border-[#9056A3] hover:text-[#9056A3] transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* App Preview Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-3xl bg-gray-50 dark:bg-[#142636] p-8 md:p-12 overflow-hidden transition-colors duration-300">
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#9056A3]/10 dark:bg-[#9056A3]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="relative grid md:grid-cols-2 gap-12 items-center">
              {/* App mockup placeholder */}
              <div className="order-2 md:order-1">
                <div className="relative mx-auto w-64 h-[500px] rounded-[3rem] bg-white dark:bg-[#0C1B2C] border-4 border-gray-200 dark:border-[#3257AD]/30 shadow-2xl overflow-hidden transition-colors duration-300">
                  {/* Phone screen content */}
                  <div className="p-6 h-full flex flex-col">
                    <div className="text-center mb-8 pt-8">
                      <p className="text-[#3257AD] text-sm mb-2">
                        How much time do you have?
                      </p>
                      <div className="grid grid-cols-2 gap-3">
                        {["15 min", "30 min", "45 min", "60 min"].map((time) => (
                          <div
                            key={time}
                            className="py-3 rounded-xl bg-gray-100 dark:bg-[#142636] text-[#0C1B2C] dark:text-white text-sm font-medium transition-colors duration-300"
                          >
                            {time}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="text-[#3257AD] text-sm mb-2">
                        How are you feeling?
                      </p>
                      <div className="space-y-2">
                        {[
                          "Amazing",
                          "Motivated",
                          "Good",
                          "A Bit Low",
                          "Just Go Over It",
                        ].map((mood, i) => (
                          <div
                            key={mood}
                            className={`py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${
                              i === 2
                                ? "bg-[#9056A3] text-white"
                                : "bg-gray-100 dark:bg-[#142636] text-[#3257AD]"
                            }`}
                          >
                            {mood}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text content */}
              <div className="order-1 md:order-2 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0C1B2C] dark:text-white mb-6">
                  Two Questions.
                  <br />
                  One Perfect Session.
                </h2>
                <p className="text-[#3257AD] text-lg mb-6">
                  No more standing in front of your guitar wondering what to do.
                  Kenny Practice asks two simple questions and builds a complete
                  practice routine tailored to your time and energy.
                </p>
                <ul className="space-y-3">
                  {[
                    "Time-first approach honors your schedule",
                    "Mood-adaptive exercises match your energy",
                    "130+ exercises across all skill levels",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-[#0C1B2C] dark:text-white"
                    >
                      <CheckIcon className="w-5 h-5 text-[#9056A3] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0C1B2C] dark:text-white mb-4">
              Simply Powerful
            </h2>
            <p className="text-xl text-[#3257AD] max-w-2xl mx-auto">
              Kenny Practice focuses on one thing: getting you to practice
              consistently by removing decision fatigue.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: ClockIcon,
                title: "Time-First Design",
                description:
                  "Select 15, 30, 45, or 60 minutes. Your available time is the constraint — Kenny fills it perfectly.",
              },
              {
                icon: SparklesIcon,
                title: "Mood-Adaptive Sessions",
                description:
                  "Feeling amazing? Get challenged. Just getting by? Maintenance mode. No judgment, just the right practice.",
              },
              {
                icon: GuitarIcon,
                title: "Comprehensive Coverage",
                description:
                  "Warm-ups, spiders, technical work, theory, rhythm, improvisation, and your own pieces — all balanced.",
              },
              {
                icon: CloudSyncIcon,
                title: "Sync Between Devices",
                description:
                  "Seamless iCloud sync keeps your exercises, preferences, and progress in sync across your Mac, iPhone, and iPad.",
              },
              {
                icon: SlidersIcon,
                title: "Configure Your Parts",
                description:
                  "Customize which exercise categories appear in your sessions. Focus on what matters most to your playing journey.",
              },
              {
                icon: ChartIcon,
                title: "Track Your Sessions",
                description:
                  "See your practice history at a glance. Build streaks, track total time, and watch your consistency grow.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="p-8 rounded-2xl bg-gray-50 dark:bg-[#142636] hover:bg-gray-100 dark:hover:bg-[#1a2f42] transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#9056A3]/10 dark:bg-[#9056A3]/20 flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-[#9056A3]" />
                </div>
                <h3 className="text-xl font-semibold text-[#0C1B2C] dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#3257AD]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timer Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0C1B2C] dark:text-white mb-6">
                Just Press Play
              </h2>
              <p className="text-[#3257AD] text-lg mb-6">
                Once your session is generated, the dual timer guides you
                through each exercise. See your total session time and current
                exercise time at a glance.
              </p>
              <ul className="space-y-4">
                {[
                  "Clear exercise names and instructions",
                  "Visual progress indicators",
                  "Pause and resume anytime",
                  "Session completion tracking",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-[#0C1B2C] dark:text-white"
                  >
                    <CheckIcon className="w-5 h-5 text-[#9056A3] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Timer mockup */}
            <div className="relative mx-auto w-72 h-72 rounded-full bg-gray-50 dark:bg-[#142636] flex items-center justify-center transition-colors duration-300">
              <div className="absolute inset-4 rounded-full border-4 border-[#9056A3]/20 dark:border-[#9056A3]/30" />
              <div
                className="absolute inset-4 rounded-full border-4 border-[#9056A3]"
                style={{
                  clipPath:
                    "polygon(50% 50%, 50% 0, 100% 0, 100% 100%, 0 100%, 0 0, 50% 0)",
                }}
              />
              <div className="text-center">
                <p className="text-5xl font-bold text-[#0C1B2C] dark:text-white">
                  18:45
                </p>
                <p className="text-[#3257AD] mt-2">Warm-up</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section id="download" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0C1B2C] dark:text-white mb-4">
              Practice Anywhere
            </h2>
            <p className="text-xl text-[#3257AD] max-w-2xl mx-auto">
              Native apps for Mac and iOS with seamless iCloud sync. Start a
              session on your Mac, finish on your iPhone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Mac */}
            <div className="p-8 rounded-2xl bg-gray-50 dark:bg-[#142636] text-center transition-colors duration-300">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-[#9056A3]/10 dark:bg-[#9056A3]/20 flex items-center justify-center mb-6">
                <DevicesIcon className="w-8 h-8 text-[#9056A3]" />
              </div>
              <h3 className="text-2xl font-semibold text-[#0C1B2C] dark:text-white mb-2">
                Mac App
              </h3>
              <p className="text-[#3257AD] mb-6">
                Native macOS app with keyboard shortcuts and window state
                persistence.
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#0C1B2C] dark:bg-white text-white dark:text-[#0C1B2C] font-semibold hover:bg-[#1a2f42] dark:hover:bg-gray-100 transition-colors"
              >
                <AppleIcon className="w-5 h-5" />
                Mac App Store
              </a>
            </div>

            {/* iOS */}
            <div className="p-8 rounded-2xl bg-gray-50 dark:bg-[#142636] text-center transition-colors duration-300">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-[#9056A3]/10 dark:bg-[#9056A3]/20 flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-[#9056A3]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <rect x="5" y="2" width="14" height="20" rx="2" />
                  <path d="M12 18h.01" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-[#0C1B2C] dark:text-white mb-2">
                iPhone & iPad
              </h3>
              <p className="text-[#3257AD] mb-6">
                Touch-optimized design for iOS with support for all screen
                sizes.
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#0C1B2C] dark:bg-white text-white dark:text-[#0C1B2C] font-semibold hover:bg-[#1a2f42] dark:hover:bg-gray-100 transition-colors"
              >
                <AppleIcon className="w-5 h-5" />
                App Store
              </a>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-[#3257AD]">
              Requires macOS 13+ or iOS 16+. iCloud account required for sync.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-12 rounded-3xl bg-gradient-to-br from-[#9056A3]/10 dark:from-[#9056A3]/20 to-gray-50 dark:to-[#142636] transition-colors duration-300">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0C1B2C] dark:text-white mb-4">
              Ready to Practice Consistently?
            </h2>
            <p className="text-xl text-[#3257AD] mb-8 max-w-xl mx-auto">
              Download Kenny Practice and turn &quot;I should practice&quot; into
              &quot;I just practiced.&quot;
            </p>
            <a
              href="#download"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#9056A3] text-white font-semibold text-lg hover:bg-[#7a4a8a] dark:hover:bg-[#a066b3] transition-colors"
            >
              <AppleIcon className="w-5 h-5" />
              Download Free
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-200 dark:border-[#142636] transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#9056A3] flex items-center justify-center">
                <GuitarIcon className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-semibold text-[#0C1B2C] dark:text-white">
                Kenny Practice
              </span>
            </div>

            <div className="flex items-center gap-6 text-[#3257AD]">
              <Link
                href="/privacy"
                className="hover:text-[#0C1B2C] dark:hover:text-white transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="hover:text-[#0C1B2C] dark:hover:text-white transition-colors"
              >
                Terms
              </Link>
              <Link
                href="#"
                className="hover:text-[#0C1B2C] dark:hover:text-white transition-colors"
              >
                Support
              </Link>
            </div>

            <p className="text-[#3257AD] text-sm">
              © {new Date().getFullYear()} Kenny Apps. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
