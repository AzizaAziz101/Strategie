import { Reveal } from "@/components/reveal";
import { CountUp } from "@/components/count-up";

const facts = [
  {
    value: (
      <span className="bg-gradient-to-r from-white via-indigo-100 to-indigo-300 bg-clip-text text-transparent">
        <CountUp to={7} />–<CountUp to={14} />
      </span>
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
    <section aria-label="Zahlen und Fakten" className="mt-14 border-t border-white/[0.07] sm:mt-16">
      <div className="grid sm:grid-cols-3">
        {facts.map(({ value, unit, title, text }, index) => (
          <Reveal
            key={title}
            delay={index * 100}
            className="flex flex-col gap-2 border-b border-white/[0.07] py-8 last:border-b-0 sm:border-b-0 sm:border-l sm:px-8 sm:py-10 sm:first:border-l-0 sm:first:pl-0"
          >
            <p className="flex items-baseline gap-1.5 text-5xl font-medium tabular-nums tracking-[-0.05em] text-zinc-100 lg:text-6xl">
              {value}
              <small className="text-base font-normal tracking-normal text-zinc-500">{unit}</small>
            </p>
            <h3 className="mt-3 text-sm font-medium text-zinc-100">{title}</h3>
            <p className="text-sm leading-6 text-zinc-400">{text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
