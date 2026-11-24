const LEAD_WORDS = ["Lassen", "Sie", "uns", "gemeinsam", "herausfinden,"];
const MUTED_WORDS = ["was", "zu", "Ihnen", "passt."];

function Word({ word, index }: { word: string; index: number }) {
  return (
    <span className="hero-word" style={{ animationDelay: `${index * 90}ms` }}>
      {word}
    </span>
  );
}

export function CtaHeadline() {
  return (
    <h2
      aria-label={[...LEAD_WORDS, ...MUTED_WORDS].join(" ")}
      className="text-balance text-3xl font-medium tracking-[-0.04em] text-zinc-100 sm:text-4xl"
    >
      <span aria-hidden="true">
        {LEAD_WORDS.map((word, index) => (
          <span key={word}>
            <Word word={word} index={index} />{" "}
          </span>
        ))}
        <span className="cta-muted-words">
          {MUTED_WORDS.map((word, index) => (
            <span key={word}>
              <Word word={word} index={LEAD_WORDS.length + index} />{" "}
            </span>
          ))}
        </span>
      </span>
    </h2>
  );
}
