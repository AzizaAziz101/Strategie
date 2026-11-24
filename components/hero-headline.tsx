const HEADLINE = "Gute Arbeit verdient es, gesehen zu werden.";
const LEADING_WORDS = ["Gute", "Arbeit", "verdient", "es,"];
const HIGHLIGHT = "gesehen";
const TRAILING_WORDS = ["zu", "werden."];

function Word({ children, index }: { children: string; index: number }) {
  return (
    <span className="hero-word" style={{ animationDelay: `${index * 90}ms` }}>
      {children}
    </span>
  );
}

export function HeroHeadline() {
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
          className="hero-highlight hero-highlight-text"
          style={{ animationDelay: `${highlightIndex * 90}ms` }}
        >
          {HIGHLIGHT}
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
