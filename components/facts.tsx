import { Reveal } from "@/components/reveal";
import { CountUp } from "@/components/count-up";

const facts = [
  {
    value: (
      <>
        <CountUp to={7} />–<CountUp to={14} />
      </>
    ),
    unit: "Tage",
    title: "Bis zur Auslieferung",
    text: "Vom Briefing zur fertigen Website.",
  },
  {
    value: <>0</>,
    unit: "€",
    title: "Vorauszahlung",
    text: "Bezahlung erst, wenn Sie überzeugt sind.",
  },
  {
    value: <CountUp to={100} />,
    unit: "%",
    title: "Mobiloptimiert",
    text: "Auf jedem Gerät schnell und sauber.",
  },
];

export function Facts() {
  return (
    <Reveal delay={200}>
      <section
        aria-label="Zahlen und Fakten"
        className="mt-5 grid rounded-2xl border border-white/[0.07] bg-white/[0.02] sm:grid-cols-3"
      >
        {facts.map(({ value, unit, title, text }) => (
          <div
            key={title}
            className="flex flex-col gap-2 border-b border-white/[0.06] px-5 py-5 last:border-b-0 sm:border-b-0 sm:border-l sm:px-6 sm:py-6 sm:first:border-l-0 lg:px-7"
          >
            <p className="flex items-baseline gap-1 text-xl font-medium tabular-nums tracking-[-0.03em] text-zinc-200">
              <span>{value}</span>
              <small className="text-[11px] font-normal tracking-normal text-zinc-500">{unit}</small>
            </p>
            <div>
              <h3 className="text-sm text-zinc-300">{title}</h3>
              <p className="mt-0.5 text-xs leading-5 text-zinc-500">{text}</p>
            </div>
          </div>
        ))}
      </section>
    </Reveal>
  );
}
