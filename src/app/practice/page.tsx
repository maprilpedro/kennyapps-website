import Image from "next/image";
import Link from "next/link";
import {
  GuitarIcon,
  ClockIcon,
  SparklesIcon,
  CheckIcon,
  AppleIcon,
  DevicesIcon,
  CloudSyncIcon,
  SlidersIcon,
  ChartIcon,
  PhoneIcon,
} from "@/components/icons";
import ThemeToggle from "@/components/ThemeToggle";
import PhoneCarousel from "@/components/PhoneCarousel";

export default function PracticePage() {
  return (
    <main className="min-h-screen bg-background transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/practice" className="flex items-center gap-2">
            <Image
              src="/icon-light.png"
              alt="Kenny Practice"
              width={32}
              height={32}
              className="rounded-lg dark:hidden"
            />
            <Image
              src="/icon-dark.png"
              alt=""
              width={32}
              height={32}
              className="rounded-lg hidden dark:block"
              aria-hidden="true"
            />
            <span className="text-xl font-semibold text-text-primary">
              Kenny Practice
            </span>
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="#features"
              className="text-text-secondary hover:text-text-primary transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              Features
            </Link>
            <Link
              href="#download"
              className="text-text-secondary hover:text-text-primary transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              Download
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card text-accent text-sm font-medium mb-8">
            <SparklesIcon className="w-4 h-4" />
            Available on Mac and iOS
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-text-primary leading-tight mb-6 text-balance">
            Practice Guitar.
            <br />
            <span className="text-accent">Just Play.</span>
          </h1>

          <p className="text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
            Stop deciding what to practice. Select your time, pick your mood,
            and let Kenny Practice generate the perfect practice session for you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#download"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-accent text-white font-semibold text-lg hover:bg-accent-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              <AppleIcon className="w-5 h-5" />
              Download Free
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-text-secondary text-text-secondary font-semibold text-lg hover:border-accent hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* App Preview Section — Session Preview */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-3xl bg-card p-8 md:p-12 overflow-hidden transition-colors duration-300">
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 dark:bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="relative grid md:grid-cols-2 gap-12 items-center">
              {/* App mockup — 3-screen carousel */}
              <div className="order-2 md:order-1">
                <PhoneCarousel />
              </div>

              {/* Text content */}
              <div className="order-1 md:order-2 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
                  Two Questions.
                  <br />
                  One Perfect Session.
                </h2>
                <p className="text-text-secondary text-lg mb-6">
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
                      className="flex items-center gap-3 text-text-primary"
                    >
                      <CheckIcon className="w-5 h-5 text-accent flex-shrink-0" />
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
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Simply Powerful
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
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
                  "Feeling amazing? Get challenged. Just getting by? Maintenance mode. No judgment — just the right practice.",
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
                className="p-8 rounded-2xl bg-card hover:bg-card-hover transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 dark:bg-accent/20 flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-text-secondary">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timer Section — During Exercise */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
                Just Press Play
              </h2>
              <p className="text-text-secondary text-lg mb-6">
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
                    className="flex items-center gap-3 text-text-primary"
                  >
                    <CheckIcon className="w-5 h-5 text-accent flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Timer phone mockup */}
            <div className="flex justify-center">
              <div className="relative mx-auto w-64 h-[520px] rounded-[3rem] bg-background border-4 border-gray-200 dark:border-text-secondary/30 shadow-2xl overflow-hidden transition-colors duration-300">
                <div className="px-4 pt-4 pb-3 h-full flex flex-col items-center">
                  {/* Progress dots */}
                  <div className="flex gap-1.5 pt-8 mb-6">
                    {[true, true, "current", false, false].map((status, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-full ${
                          status === "current"
                            ? "bg-accent"
                            : status
                              ? "bg-accent"
                              : "bg-text-secondary/30"
                        }`}
                        style={
                          status === "current"
                            ? { boxShadow: "0 0 8px var(--accent)" }
                            : undefined
                        }
                      />
                    ))}
                  </div>

                  {/* Timer ring */}
                  <div className="relative w-40 h-40 mb-4">
                    <svg
                      viewBox="0 0 200 200"
                      className="w-full h-full -rotate-90"
                    >
                      <circle
                        cx="100"
                        cy="100"
                        r="90"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="8"
                        className="text-text-secondary/20"
                      />
                      <circle
                        cx="100"
                        cy="100"
                        r="90"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray="565"
                        strokeDashoffset="170"
                        className="text-accent"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-3xl font-light text-accent tabular-nums tracking-wider">
                        5:58
                      </span>
                    </div>
                  </div>

                  <div className="text-accent text-lg font-semibold">
                    Syncopation Basics
                  </div>
                  <div className="text-text-secondary text-xs mt-1">
                    Rhythm Work
                  </div>

                  <p className="text-text-primary text-[10px] text-center mt-4 px-3 leading-relaxed">
                    {"Accent the 'and' beats instead of the downbeats. Strum on 'and-of-2' and 'and-of-4'. Creates groove."}
                  </p>

                  <div className="mt-auto text-text-secondary text-xs mb-1">
                    Total: 34:28
                  </div>
                  <div className="text-text-secondary/50 text-[9px] mb-4">
                    Tap anywhere to pause
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section id="download" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Practice Anywhere
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Native apps for Mac and iOS with seamless iCloud sync. Start a
              session on your Mac, finish on your iPhone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Mac */}
            <div className="p-8 rounded-2xl bg-card text-center transition-colors duration-300">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-accent/10 dark:bg-accent/20 flex items-center justify-center mb-6">
                <DevicesIcon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold text-text-primary mb-2">
                Mac App
              </h3>
              <p className="text-text-secondary mb-6">
                Native macOS app with keyboard shortcuts and window state
                persistence.
              </p>
              <a
                href="#"
                className="inline-block hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-lg"
              >
                <Image
                  src="/appstore-mac.svg"
                  alt="Download on the Mac App Store"
                  width={157}
                  height={40}
                  className="dark:invert"
                />
              </a>
            </div>

            {/* iOS */}
            <div className="p-8 rounded-2xl bg-card text-center transition-colors duration-300">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-accent/10 dark:bg-accent/20 flex items-center justify-center mb-6">
                <PhoneIcon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold text-text-primary mb-2">
                iPhone & iPad
              </h3>
              <p className="text-text-secondary mb-6">
                Touch-optimized design for iOS with support for all screen
                sizes.
              </p>
              <a
                href="#"
                className="inline-block hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-lg"
              >
                <Image
                  src="/appstore-ios.svg"
                  alt="Download on the App Store"
                  width={120}
                  height={40}
                  className="dark:invert"
                />
              </a>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-text-secondary">
              Requires macOS 13+ or iOS 16+. iCloud account required for sync.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-12 rounded-3xl bg-gradient-to-br from-accent/10 dark:from-accent/20 to-card transition-colors duration-300">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Ready to Practice Consistently?
            </h2>
            <p className="text-xl text-text-secondary mb-8 max-w-xl mx-auto">
              Download Kenny Practice and turn &quot;I should practice&quot; into
              &quot;I just practiced.&quot;
            </p>
            <a
              href="#download"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-accent text-white font-semibold text-lg hover:bg-accent-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              <AppleIcon className="w-5 h-5" />
              Download Free
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <Image
                src="/icon-light.png"
                alt="Kenny Practice"
                width={32}
                height={32}
                className="rounded-lg dark:hidden"
              />
              <Image
                src="/icon-dark.png"
                alt=""
                width={32}
                height={32}
                className="rounded-lg hidden dark:block"
                aria-hidden="true"
              />
              <span className="text-lg font-semibold text-text-primary">
                Kenny Practice
              </span>
            </div>

            <nav
              aria-label="Footer navigation"
              className="flex items-center gap-6 text-text-secondary"
            >
              <Link
                href="/privacy"
                className="hover:text-text-primary transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-text-primary transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="hover:text-text-primary transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                Support
              </Link>
            </nav>

            <p className="text-text-secondary text-sm">
              © {new Date().getFullYear()} Kenny Apps. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
