import {
  ArrowDown,
  ArrowRight,
  Check,
  CircleDot,
  Compass,
  HeartHandshake,
  Layers3,
  LockKeyhole,
  MoveUpRight,
  Sparkles,
  Zap,
} from "lucide-react";
import { HeroHeadline } from "@/components/hero-headline";
import { Reveal } from "@/components/reveal";

const packages = [
  {
    number: "01",
    icon: Compass,
    name: "Das klare Fundament",
    price: "ab 950 €",
    detail: "Festpreis · einmalig",
    intro:
      "Ein ruhiger, überzeugender Webauftritt, der zeigt, wofür Ihr Unternehmen steht.",
    features: [
      "Bis zu 5 individuell gestaltete Seiten",
      "Sorgfältig für Smartphone und Desktop gestaltet",
      "Klare Texte, gemeinsam mit Ihnen entwickelt",
      "Rechtssichere Struktur und Google-Profil-Anbindung",
    ],
    highlight: false,
  },
  {
    number: "02",
    icon: Layers3,
    name: "Wachstum & Eigenständigkeit",
    price: "ab 1.900 €",
    detail: "Festpreis · einmalig",
    intro:
      "Mehr Raum für Ihre Leistungen – und die Freiheit, Inhalte selbst aktuell zu halten.",
    features: [
      "Alles aus dem klaren Fundament",
      "Einfaches Redaktionssystem für eigene Inhalte",
      "Terminbuchung passend zu Ihrem Arbeitsalltag",
      "Regionale Leistungsseiten für bessere Auffindbarkeit",
    ],
    highlight: true,
  },
  {
    number: "03",
    icon: HeartHandshake,
    name: "Dauerhafte Begleitung",
    price: "49 € / Monat",
    detail: "Monatlich · klar vereinbart",
    intro:
      "Ein verlässliches technisches Zuhause, damit Sie sich auf Ihre Arbeit konzentrieren können.",
    features: [
      "Technische Pflege und regelmäßige Updates",
      "Sicheres Hosting auf moderner Cloud-Infrastruktur",
      "Laufende Sicherheitskontrollen",
      "Kleine Anpassungen, wenn sich etwas verändert",
    ],
    highlight: false,
  },
];

const principles = [
  {
    icon: LockKeyhole,
    number: "01",
    title: "Rechtssicherheit, von Anfang an",
    text: "Datenschutz wird mitgedacht: ohne unnötiges Tracking, mit lokal eingebundenen Schriften und einer klaren, sorgfältig aufgebauten Seitenstruktur.",
    tone: "emerald",
  },
  {
    icon: Zap,
    number: "02",
    title: "Schnell da, wenn es darauf ankommt",
    text: "Eine moderne, schlanke Umsetzung lädt auch unterwegs zügig. So finden Menschen den Weg zu Ihnen – genau dann, wenn sie Ihre Unterstützung suchen.",
    tone: "amber",
  },
  {
    icon: HeartHandshake,
    number: "03",
    title: "Zusammenarbeit auf Augenhöhe",
    text: "Wir sprechen verständlich, entscheiden gemeinsam und halten den Rahmen transparent. Sie wissen, was entsteht – und was es kostet.",
    tone: "indigo",
  },
];

function NetworkArtwork() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-35"
      viewBox="0 0 900 640"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id="network-glow">
          <stop stopColor="#a5b4fc" stopOpacity=".52" />
          <stop offset="1" stopColor="#818cf8" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="network-line" x1="250" y1="180" x2="760" y2="510" gradientUnits="userSpaceOnUse">
          <stop stopColor="#a5b4fc" stopOpacity=".38" />
          <stop offset="1" stopColor="#6ee7b7" stopOpacity=".12" />
        </linearGradient>
      </defs>
      <circle cx="620" cy="300" r="245" fill="url(#network-glow)" opacity=".25" />
      <g stroke="url(#network-line)" strokeWidth="1">
        <path d="M318 164 448 234 574 154 694 226 796 172M318 164 285 309 405 373 448 234M448 234 574 300 694 226 746 374 574 420 405 373M574 154 574 300M285 309 246 464 405 493 574 420 746 374 796 472M405 373 405 493M574 300 574 420" />
        <path d="m694 226 102 140M448 234l-43 139m169-73 120 74" opacity=".6" />
      </g>
      <g fill="#c7d2fe">
        <circle cx="318" cy="164" r="3" /><circle cx="448" cy="234" r="4" />
        <circle cx="574" cy="154" r="3" /><circle cx="694" cy="226" r="3.5" />
        <circle cx="796" cy="172" r="2.5" /><circle cx="285" cy="309" r="3" />
        <circle cx="405" cy="373" r="4" /><circle cx="574" cy="300" r="5" />
        <circle cx="746" cy="374" r="3.5" /><circle cx="246" cy="464" r="2.5" />
        <circle cx="405" cy="493" r="3" /><circle cx="574" cy="420" r="4" />
        <circle cx="796" cy="472" r="2.5" />
      </g>
    </svg>
  );
}

function SectionLabel({ children, className = "" }: { children: string; className?: string }) {
  return (
    <p className={`mb-5 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 ${className}`}>
      <span className="h-px w-7 bg-indigo-300/50" />
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <main id="oben" className="min-h-screen overflow-hidden bg-[#09090b] text-zinc-100">
      <header className="sticky top-0 z-30 border-b border-white/[0.06] bg-[#09090b]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#oben" className="group flex items-center gap-3" aria-label="Resonanz web digital – zur Startseite">
            <span className="grid size-9 place-items-center rounded-xl border border-indigo-300/20 bg-indigo-300/[0.08] text-indigo-200 transition-colors duration-500 group-hover:bg-indigo-300/[0.14]">
              <CircleDot size={18} strokeWidth={1.5} aria-hidden="true" />
            </span>
            <span className="text-sm font-medium tracking-wide text-zinc-100">Resonanz<span className="text-zinc-500"> web digital</span></span>
          </a>
          <nav aria-label="Hauptnavigation" className="hidden items-center gap-8 md:flex">
            <a href="#haltung" className="text-sm text-zinc-400 transition-colors duration-500 hover:text-zinc-100">Haltung</a>
            <a href="#vorteile" className="text-sm text-zinc-400 transition-colors duration-500 hover:text-zinc-100">Was Sie erwartet</a>
            <a href="#pakete" className="text-sm text-zinc-400 transition-colors duration-500 hover:text-zinc-100">Zusammenarbeit</a>
          </nav>
          <a href="#kontakt" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-xs font-medium text-zinc-200 transition-all duration-500 hover:border-indigo-300/30 hover:bg-indigo-300/[0.08]">
            Ins Gespräch kommen <ArrowRight size={14} aria-hidden="true" />
          </a>
        </div>
      </header>

      <section className="relative isolate border-b border-white/[0.06]">
        <NetworkArtwork />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_76%_42%,rgba(99,102,241,0.10),transparent_40%),radial-gradient(ellipse_at_16%_90%,rgba(16,185,129,0.06),transparent_32%)]" />
        <div className="relative mx-auto grid min-h-[680px] max-w-7xl items-center gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[1.1fr_.9fr] lg:py-32">
          <div className="max-w-3xl">
            <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/[0.09] bg-[#0f1115]/70 px-3.5 py-2 text-xs text-zinc-300 backdrop-blur-md">
              <span className="relative flex size-2"><span className="absolute inline-flex size-full rounded-full bg-emerald-300/30" /><span className="relative inline-flex size-2 rounded-full bg-emerald-300" /></span>
              Digitale Präsenz für Menschen vor Ort
            </div>
            <HeroHeadline />
            <p className="mt-7 max-w-2xl text-pretty text-base leading-8 text-zinc-400 sm:text-lg">
              Ich begleite lokale Unternehmen und Selbstständige dabei, ihre Werte und Leistungen in eine klare, rechtssichere und moderne digitale Präsenz zu übersetzen – ohne Technik-Stress und auf Augenhöhe.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a href="#kontakt" className="group inline-flex items-center gap-3 rounded-full bg-zinc-100 px-5 py-3.5 text-sm font-medium text-zinc-950 transition-all duration-500 hover:bg-white hover:shadow-[0_0_36px_-12px_rgba(199,210,254,0.6)]">
                Unverbindlich ins Gespräch kommen <ArrowRight size={16} className="transition-transform duration-500 group-hover:translate-x-1" aria-hidden="true" />
              </a>
              <a href="#pakete" className="inline-flex items-center gap-2 px-3 py-3 text-sm text-zinc-400 transition-colors duration-500 hover:text-zinc-100">Pakete entdecken <ArrowDown size={14} aria-hidden="true" /></a>
            </div>
            <div className="mt-14 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-white/[0.08] pt-6 text-xs text-zinc-500">
              <span className="flex items-center gap-2"><Check size={14} className="text-emerald-300" aria-hidden="true" /> Klare Festpreise</span>
              <span className="flex items-center gap-2"><Check size={14} className="text-emerald-300" aria-hidden="true" /> Datenschutz mitgedacht</span>
              <span className="flex items-center gap-2"><Check size={14} className="text-emerald-300" aria-hidden="true" /> Zusammenarbeit auf Augenhöhe</span>
            </div>
          </div>
          <div className="relative hidden min-h-[390px] items-center justify-center lg:flex">
            <div className="absolute size-[26rem] rounded-full border border-white/[0.06]" />
            <div className="absolute size-[19rem] rounded-full border border-white/[0.07]" />
            <div className="absolute size-[12rem] rounded-full border border-white/[0.08]" />
            <div className="relative grid size-28 place-items-center rounded-[2rem] border border-indigo-200/20 bg-[#13151b]/80 text-indigo-100 shadow-[0_0_90px_-28px_rgba(129,140,248,0.42)] backdrop-blur-xl">
              <Sparkles size={34} strokeWidth={1.2} aria-hidden="true" />
            </div>
            <div className="absolute right-2 top-[18%] rounded-2xl border border-white/10 bg-[#111318]/80 px-4 py-3 text-xs text-zinc-300 shadow-xl backdrop-blur-xl"><span className="mr-2 text-emerald-300">●</span>Ihre Arbeit, sichtbar</div>
            <div className="absolute bottom-[16%] left-1 rounded-2xl border border-white/10 bg-[#111318]/80 px-4 py-3 text-xs text-zinc-300 shadow-xl backdrop-blur-xl"><span className="mr-2 text-indigo-200">●</span>Menschen, die zueinander finden</div>
            <span className="absolute left-[18%] top-[24%] size-2 rounded-full bg-indigo-200/80 shadow-[0_0_18px_4px_rgba(165,180,252,0.3)]" />
            <span className="absolute bottom-[28%] right-[17%] size-1.5 rounded-full bg-emerald-200/80 shadow-[0_0_18px_4px_rgba(110,231,183,0.25)]" />
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-indigo-200/20 to-transparent" />
      </section>

      <section id="haltung" className="scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-24">
          <Reveal><SectionLabel>Meine Haltung</SectionLabel><p className="text-sm text-zinc-500">Ein gutes digitales Fundament beginnt nicht mit Technik. Sondern mit Menschen.</p></Reveal>
          <Reveal className="max-w-3xl" delay={120}>
            <h2 className="text-balance text-3xl font-medium leading-tight tracking-[-0.04em] text-zinc-100 sm:text-4xl">Jedes Unternehmen ist ein Teil eines größeren <span className="text-zinc-500">Miteinanders.</span></h2>
            <p className="mt-6 text-pretty text-base leading-8 text-zinc-400">Ein Handwerksbetrieb, eine Praxis oder eine persönliche Beratung verändert den Alltag anderer Menschen – oft leise, aber ganz wesentlich. Wenn gute Arbeit sichtbar wird, entstehen neue Verbindungen und Vertrauen kann wachsen.</p>
            <p className="mt-4 text-pretty text-base leading-8 text-zinc-400">Technologie sollte dabei kein zusätzlicher Lärm sein. Ich nutze sie, um Wege einfacher zu machen und Ihnen den Rücken freizuhalten: für das, was Sie am liebsten tun – Ihre Arbeit mit und für Menschen.</p>
            <div className="mt-9 flex items-center gap-3 text-sm text-zinc-300"><span className="grid size-9 place-items-center rounded-xl border border-emerald-200/10 bg-emerald-200/[0.06] text-emerald-200"><HeartHandshake size={17} strokeWidth={1.5} aria-hidden="true" /></span> Digitale Klarheit. Menschliche Nähe.</div>
          </Reveal>
        </div>
      </section>

      <section id="vorteile" className="scroll-mt-24 border-y border-white/[0.06] bg-[#0d0f13] px-5 py-24 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionLabel>Was Ihre Website auszeichnet</SectionLabel>
            <div className="mb-12 grid gap-5 md:grid-cols-[1fr_.7fr] md:items-end">
              <h2 className="max-w-2xl text-balance text-3xl font-medium tracking-[-0.04em] text-zinc-100 sm:text-4xl">Technik, die sich im Alltag <span className="text-zinc-500">gut anfühlt.</span></h2>
              <p className="max-w-lg text-pretty text-sm leading-7 text-zinc-400">Ein gutes digitales Zuhause ist verlässlich, verständlich und schnell erreichbar – ohne dass Sie sich selbst um jedes Detail kümmern müssen.</p>
            </div>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            {principles.map(({ icon: Icon, number, title, text, tone }, index) => (
              <Reveal key={number} delay={index * 120}>
              <article className="group h-full rounded-2xl border border-white/[0.08] bg-zinc-900/40 p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-white/[0.14] hover:bg-zinc-900/60 sm:p-7">
                <div className="flex items-center justify-between"><span className={`grid size-11 place-items-center rounded-xl border border-white/[0.06] ${tone === "emerald" ? "bg-emerald-300/[0.07] text-emerald-200" : tone === "amber" ? "bg-amber-200/[0.07] text-amber-200" : "bg-indigo-300/[0.07] text-indigo-200"}`}><Icon size={19} strokeWidth={1.5} aria-hidden="true" /></span><span className="font-mono text-xs text-zinc-600">{number}</span></div>
                <h3 className="mt-8 text-lg font-medium text-zinc-100">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-400">{text}</p>
              </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-5 flex flex-col gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 sm:flex-row sm:items-center sm:justify-between sm:px-7" delay={200}>
            <p className="max-w-2xl text-sm leading-7 text-zinc-400">Moderne, schlanke Webtechnik arbeitet im Hintergrund – damit Ihre Seite auf dem Smartphone ebenso klar und schnell ist wie im persönlichen Gespräch.</p>
            <span className="shrink-0 rounded-full border border-emerald-200/10 bg-emerald-200/[0.05] px-3.5 py-2 text-xs text-emerald-100/80">Weniger Ballast. Mehr Verbindung.</span>
          </Reveal>
        </div>
      </section>

      <section id="pakete" className="scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div><SectionLabel>Zusammenarbeit</SectionLabel><h2 className="max-w-2xl text-balance text-3xl font-medium tracking-[-0.04em] text-zinc-100 sm:text-4xl">Ein klarer Rahmen. <span className="text-zinc-500">Keine Überraschungen.</span></h2></div>
            <p className="max-w-md text-sm leading-7 text-zinc-400">Drei faire Wege, die zu Ihrem Bedarf passen. Wir klären den Umfang gemeinsam, bevor wir beginnen – zum vereinbarten Preis.</p>
          </Reveal>
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {packages.map(({ number, icon: Icon, name, price, detail, intro, features, highlight }, index) => (
              <Reveal key={number} delay={index * 120}>
              <article className={`relative flex h-full flex-col rounded-2xl border p-6 backdrop-blur-md transition-all duration-500 sm:p-7 ${highlight ? "border-indigo-200/20 bg-indigo-300/[0.055] shadow-[0_0_60px_-38px_rgba(129,140,248,0.4)]" : "border-white/[0.08] bg-zinc-900/40 hover:border-white/[0.14]"}`}>
                {highlight && <span className="absolute right-6 top-6 rounded-full border border-indigo-200/15 bg-indigo-200/[0.07] px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-indigo-100/80">Mehr Eigenständigkeit</span>}
                <div className="flex items-center gap-3"><span className="grid size-10 place-items-center rounded-xl border border-white/[0.07] bg-white/[0.03] text-zinc-300"><Icon size={18} strokeWidth={1.5} aria-hidden="true" /></span><span className="font-mono text-xs text-zinc-600">{number}</span></div>
                <h3 className="mt-7 text-xl font-medium tracking-tight text-zinc-100">{name}</h3>
                <p className="mt-2 min-h-14 text-sm leading-6 text-zinc-400">{intro}</p>
                <div className="mt-7 border-t border-white/[0.08] pt-5"><p className="text-2xl font-medium tracking-tight text-zinc-100">{price}</p><p className="mt-1 text-xs text-zinc-500">{detail}</p></div>
                <ul className="mt-6 flex-1 space-y-3.5 border-t border-white/[0.08] pt-5">
                  {features.map((feature) => <li key={feature} className="flex gap-3 text-sm leading-6 text-zinc-300"><Check size={15} className="mt-1 shrink-0 text-emerald-200/80" aria-hidden="true" />{feature}</li>)}
                </ul>
                <a href="#kontakt" className="group mt-8 inline-flex items-center justify-between rounded-xl border border-white/[0.09] bg-white/[0.03] px-4 py-3 text-sm text-zinc-200 transition-all duration-500 hover:border-indigo-200/25 hover:bg-indigo-200/[0.06]">Paket besprechen <ArrowRight size={15} className="transition-transform duration-500 group-hover:translate-x-1" aria-hidden="true" /></a>
              </article>
              </Reveal>
            ))}
          </div>
          <p className="mt-5 text-xs leading-6 text-zinc-600">Die genannten Preise sind Richtwerte ab. Den konkreten Umfang und Festpreis vereinbaren wir transparent vor Projektbeginn.</p>
        </div>
      </section>

      <section id="kontakt" className="scroll-mt-24 px-5 pb-24 sm:px-8 sm:pb-32">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-white/[0.09] bg-[#0f1115] px-6 py-16 sm:px-12 sm:py-20">
          <div className="absolute -right-16 -top-40 size-96 rounded-full bg-indigo-400/[0.08] blur-3xl" />
          <div className="absolute -bottom-48 left-1/4 size-96 rounded-full bg-emerald-300/[0.05] blur-3xl" />
          <Reveal className="relative mx-auto max-w-2xl text-center">
            <span className="gentle-float mx-auto mb-8 grid size-12 place-items-center rounded-2xl border border-white/[0.08] bg-white/[0.03] text-indigo-200"><MoveUpRight size={20} strokeWidth={1.5} aria-hidden="true" /></span>
            <SectionLabel className="justify-center">Der erste Schritt</SectionLabel>
            <h2 className="text-balance text-3xl font-medium tracking-[-0.04em] text-zinc-100 sm:text-4xl">Lassen Sie uns gemeinsam herausfinden, <span className="text-zinc-500">was zu Ihnen passt.</span></h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-sm leading-7 text-zinc-400">Ganz ohne Verkaufsdruck: Wir sprechen über Ihre Arbeit, Ihre Wünsche und darüber, wie eine klare digitale Präsenz Ihnen den Alltag erleichtern kann.</p>
            <p className="mt-7 text-xs text-zinc-500">Ein erstes Gespräch ist unverbindlich. Sie entscheiden in Ruhe, ob und wie wir weitergehen.</p>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-white/[0.06] px-5 py-7 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
          <a href="#oben" className="flex items-center gap-2 text-zinc-400 transition-colors duration-500 hover:text-zinc-200"><CircleDot size={14} aria-hidden="true" /> Resonanz web digital</a>
          <p>Digitale Präsenz, die Menschen zusammenbringt.</p>
          <span>Mit Ruhe. Mit Klarheit. Gemeinsam.</span>
          <nav aria-label="Rechtliches" className="flex items-center gap-5 text-zinc-500">
            <a href="/impressum" className="transition-colors hover:text-zinc-200">Impressum</a>
            <a href="/datenschutz" className="transition-colors hover:text-zinc-200">Datenschutz</a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
