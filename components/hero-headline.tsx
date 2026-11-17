"use client";

import { useEffect, useState } from "react";

const HEADLINE = "Gute Arbeit verdient es, gesehen zu werden.";
const LEADING_WORDS = ["Gute", "Arbeit", "verdient", "es,"];
const HIGHLIGHT = "gesehen";
const TRAILING_WORDS = ["zu", "werden."];
const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&*+<>/";
const INITIAL_DECODE_DELAY_MS = 650;
// Matches the moment the first CSS light scan (hero-headline-scan) crosses "gesehen".
const FIRST_WAVE_DECODE_DELAY_MS = 1900;
const DECODE_DELAYS_MS = [INITIAL_DECODE_DELAY_MS, FIRST_WAVE_DECODE_DELAY_MS];
const FRAME_MS = 45;
const FRAMES_PER_LETTER = 3;

function useDecodedText(target: string) {
  const [text, setText] = useState(target);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const totalFrames = target.length * FRAMES_PER_LETTER;
    const intervalIds: number[] = [];

    const decode = () => {
      let frame = 0;
      const intervalId = window.setInterval(() => {
        frame += 1;
        const resolved = Math.floor(frame / FRAMES_PER_LETTER);
        setText(
          target
            .split("")
            .map((char, index) => (index < resolved ? char : GLYPHS[Math.floor(Math.random() * GLYPHS.length)].toLowerCase()))
            .join(""),
        );
        if (frame >= totalFrames) {
          window.clearInterval(intervalId);
          setText(target);
        }
      }, FRAME_MS);
      intervalIds.push(intervalId);
    };

    const timeoutIds = DECODE_DELAYS_MS.map((delay) => window.setTimeout(decode, delay));

    return () => {
      timeoutIds.forEach((id) => window.clearTimeout(id));
      intervalIds.forEach((id) => window.clearInterval(id));
    };
  }, [target]);

  return text;
}

function Word({ children, index }: { children: string; index: number }) {
  return (
    <span className="hero-word inline-block" style={{ animationDelay: `${index * 90}ms` }}>
      {children}
    </span>
  );
}

export function HeroHeadline() {
  const decoded = useDecodedText(HIGHLIGHT);
  const highlightIndex = LEADING_WORDS.length;

  return (
    <h1
      aria-label={HEADLINE}
      className="hero-headline relative max-w-3xl text-balance text-5xl font-medium leading-[1.08] tracking-[-0.055em] text-white sm:text-6xl lg:text-[4.6rem]"
    >
      <span aria-hidden="true">
        {LEADING_WORDS.map((word, i) => (
          <span key={word}>
            <Word index={i}>{word}</Word>{" "}
          </span>
        ))}
        <span
          className="hero-highlight relative inline-block whitespace-nowrap"
          style={{ animationDelay: `${highlightIndex * 90}ms` }}
        >
          <span className="invisible">{HIGHLIGHT}</span>
          <span className="hero-highlight-text absolute inset-0" style={{ animationDelay: `${highlightIndex * 90}ms` }}>
            {decoded}
          </span>
        </span>{" "}
        {TRAILING_WORDS.map((word, i) => (
          <span key={word}>
            <Word index={highlightIndex + 1 + i}>{word}</Word>{" "}
          </span>
        ))}
      </span>
    </h1>
  );
}
