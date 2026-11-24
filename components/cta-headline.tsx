import type { CSSProperties } from "react";
import "@/components/cta-words.css";

const LEAD = ["Lassen", "Sie", "uns", "gemeinsam", "herausfinden,"];
const ACCENT = ["was", "zu", "Ihnen", "passt."];

function Word({ word, index }: { word: string; index: number }) {
  return (
    <>
      <span className="cta-word" style={{ "--i": index } as CSSProperties}>
        {word}
      </span>{" "}
    </>
  );
}

export function CtaHeadline() {
  return (
    <h2
      aria-label={[...LEAD, ...ACCENT].join(" ")}
      className="text-balance text-3xl font-medium tracking-[-0.04em] text-zinc-100 sm:text-4xl"
    >
      <span aria-hidden="true">
        {LEAD.map((word, i) => (
          <Word key={word} word={word} index={i} />
        ))}
        <span className="text-zinc-500">
          {ACCENT.map((word, i) => (
            <Word key={word} word={word} index={LEAD.length + i} />
          ))}
        </span>
      </span>
    </h2>
  );
}
