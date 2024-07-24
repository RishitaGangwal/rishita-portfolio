import React from "react";
import { FlipWords } from "../ui/flip-words";

export function FlipWordsDemo() {
  const words = ["react", "next.js", "tailwindcss"!];

  return (
    <div className="flex justify-center items-center">
      <div className="mt-1ml-[12rem] text-3xl mx-auto font-semibold text-neutral-600 dark:text-neutral-400 opacity-65">
        I love to build using 
        <FlipWords words={words} /> <br />
        {/* websites with Aceternity UI */}
      </div>
    </div>
  );
}