"use client";

import {
  Terminal,
  AnimatedSpan,
  TypingAnimation,
} from "@/components/ui/terminal";

export default function HeroTerminal() {
  return (
    <Terminal
      sequence
      startOnView
      className="
       w-[40rem]
    rounded-2xl
    border border-white/10
    bg-transparent
    backdrop-blur-xl
    shadow-2xl
    "
    >
      <TypingAnimation>anirban@portfolio:~$ help</TypingAnimation>
    </Terminal>
  );
}
