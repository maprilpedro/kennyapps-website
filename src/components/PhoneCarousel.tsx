"use client";

import { useEffect, useState } from "react";

function SessionPreviewScreen() {
  return (
    <div className="px-4 pt-4 pb-3 h-full flex flex-col">
      <div className="flex items-center justify-between pt-7 mb-3">
        <span className="text-accent text-[11px]">{"‹ Back"}</span>
        <span className="text-text-primary text-[11px] font-semibold">
          Session Preview
        </span>
        <span className="text-text-secondary text-[11px]">{"⚙"}</span>
      </div>

      <div className="flex gap-1.5 mb-1.5">
        {[
          { icon: "⏱", value: "45 min" },
          { icon: "😊", value: "Good" },
          { icon: "≡", value: "5 exercises" },
        ].map((pill) => (
          <div
            key={pill.value}
            className="flex-1 bg-card rounded-lg py-1.5 text-center"
          >
            <div className="text-sm leading-none">{pill.icon}</div>
            <div className="text-text-primary text-[9px] font-semibold mt-1">
              {pill.value}
            </div>
          </div>
        ))}
      </div>
      <p className="text-text-secondary text-[8px] text-center mb-2">
        Created just now
      </p>

      <div className="flex-1 space-y-1.5 overflow-hidden">
        {[
          { num: 1, icon: "🔥", name: "Pentatonic Box 1 Warm-up", cat: "Warm-up", time: "1:30", bg: "bg-[#E67E22]" },
          { num: 2, icon: "🕷️", name: "Inside Picking Spider", cat: "Spider Exercises", time: "1:30", bg: "bg-[#8E44AD]" },
          { num: 3, icon: "🎵", name: "Syncopation Basics", cat: "Rhythm Work", time: "8:30", bg: "bg-[#E74C3C]" },
          { num: 4, icon: "🎤", name: "Pentatonic Exploration", cat: "Improvisation", time: "8:30", bg: "bg-[#F39C12]" },
          { num: 5, icon: "🎸", name: "Moonshine", cat: "Pieces", time: "25 min", bg: "bg-accent" },
        ].map((ex) => (
          <div
            key={ex.num}
            className="flex items-center gap-2 bg-card rounded-lg px-2 py-1.5"
          >
            <div
              className={`w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-bold text-white flex-shrink-0 ${ex.bg}`}
            >
              {ex.num}
            </div>
            <span className="text-[11px] flex-shrink-0">{ex.icon}</span>
            <div className="flex-1 min-w-0">
              <div className="text-accent text-[9px] font-semibold truncate">
                {ex.name}
              </div>
              <div className="text-text-secondary text-[7px]">{ex.cat}</div>
            </div>
            <div className="text-accent text-[9px] font-semibold flex-shrink-0">
              {ex.time}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 space-y-1.5 pb-1">
        <div className="bg-gradient-to-r from-accent to-[#7040B0] rounded-xl py-2 text-center text-white text-[11px] font-semibold shadow-lg shadow-accent/30">
          {"▶ Start Practice"}
        </div>
        <div className="border border-text-secondary/40 rounded-xl py-1.5 text-center text-text-secondary text-[9px]">
          {"↻ Generate New Session"}
        </div>
      </div>
    </div>
  );
}

function SkillLevelScreen() {
  return (
    <div className="px-4 pt-4 pb-3 h-full flex flex-col">
      <div className="flex-1 flex flex-col justify-center">
        <div className="text-center mb-6 pt-4">
          <h2 className="text-text-primary text-lg font-bold leading-tight">
            Welcome to
            <br />
            Kenny Practice
          </h2>
          <p className="text-text-secondary text-[10px] mt-2">
            Before your first session, one quick question:
          </p>
        </div>

        <p className="text-text-primary text-xs font-semibold text-center mb-4">
          How would you describe your guitar playing?
        </p>

        <div className="space-y-2.5 px-1">
          {[
            { icon: "🌿", title: "Beginner", desc: "Learning the basics" },
            { icon: "🔥", title: "Intermediate", desc: "Building skills" },
            { icon: "⭐", title: "Advanced", desc: "Refining technique" },
          ].map((option) => (
            <div
              key={option.title}
              className="flex items-center gap-3 bg-card border border-accent/30 rounded-xl px-3 py-3"
            >
              <span className="text-lg">{option.icon}</span>
              <div className="flex-1">
                <div className="text-text-primary text-xs font-semibold">
                  {option.title}
                </div>
                <div className="text-text-secondary text-[9px]">
                  {option.desc}
                </div>
              </div>
              <span className="text-text-secondary text-sm">{"›"}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FeedbackScreen() {
  return (
    <div className="px-4 pt-4 pb-3 h-full flex flex-col items-center">
      <div className="pt-8 text-center">
        <div className="text-4xl text-green-500 mb-2">✓</div>
        <h2 className="text-text-primary text-lg font-bold">
          Great Practice!
        </h2>
      </div>

      <div className="w-full bg-card rounded-xl p-3 text-center mt-4">
        <div className="flex items-center justify-center gap-2 text-text-primary text-sm font-bold">
          <span className="text-accent">⏱</span>
          45 minutes
        </div>
        <div className="text-green-500 text-[10px] mt-1.5">
          ✓ 5 completed
        </div>
      </div>

      <p className="text-text-primary text-xs font-semibold mt-5">
        How did it feel?
      </p>

      <div className="flex gap-8 mt-3">
        <div className="w-11 h-11 rounded-xl bg-green-500/20 flex items-center justify-center text-2xl">
          👍
        </div>
        <div className="w-11 h-11 rounded-xl flex items-center justify-center text-2xl opacity-50">
          👎
        </div>
      </div>
      <p className="text-text-secondary text-[8px] mt-1">(optional)</p>

      <div className="w-full mt-4">
        <p className="text-text-primary text-[10px] font-semibold mb-1">
          Notes
        </p>
        <div className="w-full bg-card rounded-lg p-2 text-[9px] text-text-primary leading-relaxed h-14">
          Moonshine felt great today, nailed the bridge section
        </div>
        <p className="text-text-secondary text-[8px] text-right mt-0.5">
          49 / 500
        </p>
      </div>

      <div className="mt-auto w-full pb-1">
        <div className="bg-accent rounded-xl py-2.5 text-center text-white text-xs font-bold">
          Save & Finish
        </div>
      </div>
    </div>
  );
}

const screens = [SessionPreviewScreen, SkillLevelScreen, FeedbackScreen];

export default function PhoneCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % screens.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="mx-auto flex flex-col items-center gap-4">
      <div className="relative w-64 h-[520px] rounded-[3rem] bg-background border-4 border-gray-200 dark:border-text-secondary/30 shadow-2xl overflow-hidden transition-colors duration-300">
        {screens.map((Screen, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <Screen />
          </div>
        ))}
      </div>

      {/* Carousel dots — below the phone */}
      <div className="flex justify-center gap-2.5">
        {screens.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? "bg-accent w-6" : "bg-text-secondary/30 w-2"
            }`}
            aria-label={`Show screen ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
