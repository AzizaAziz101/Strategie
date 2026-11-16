"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import {
  Building2,
  Check,
  Clock,
  Compass,
  Copy,
  CornerDownLeft,
  Database,
  Layers,
  ListChecks,
  Mail,
  Minus,
  NotebookPen,
  Plus,
  Repeat,
  Rocket,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Video,
  type LucideIcon,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  localStorage                                                              */
/* -------------------------------------------------------------------------- */

const STORAGE_PREFIX = "agency-os:";
const listeners = new Set<() => void>();

function subscribe(callback: () => void) {
  listeners.add(callback);
  window.addEventListener("storage", callback);
  return () => {
    listeners.delete(callback);
    window.removeEventListener("storage", callback);
  };
}

function readRaw(key: string): string | null {
  try {
    return window.localStorage.getItem(STORAGE_PREFIX + key);
  } catch {
    return null;
  }
}

function parse<T>(raw: string | null, fallback: T): T {
  if (raw === null) return fallback;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

/** `initial` muss eine stabile Referenz sein (Modul-Konstante oder Primitive). */
function useLocalStorage<T>(key: string, initial: T) {
  const raw = useSyncExternalStore(
    subscribe,
    () => readRaw(key),
    () => null,
  );
  const value = useMemo(() => parse(raw, initial), [raw, initial]);

  const setValue = useCallback(
    (update: T | ((previous: T) => T)) => {
      const previous = parse(readRaw(key), initial);
      const next =
        typeof update === "function"
          ? (update as (previous: T) => T)(previous)
          : update;
      try {
        window.localStorage.setItem(STORAGE_PREFIX + key, JSON.stringify(next));
      } catch {
        // Speicher voll oder blockiert – Wert bleibt dann unverändert.
      }
      listeners.forEach((listener) => listener());
    },
    [key, initial],
  );

  return [value, setValue] as const;
}

const noopSubscribe = () => () => {};

/** false beim Server-Rendering und während der Hydration, danach true. */
function useHydrated() {
  return useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false,
  );
}

/* -------------------------------------------------------------------------- */
/*  Inhalte                                                                   */
/* -------------------------------------------------------------------------- */

const NAV = [
  { id: "fokus", label: "Fokus" },
  { id: "stack", label: "Stack" },
  { id: "pakete", label: "Pakete" },
  { id: "akquise", label: "Akquise" },
  { id: "generator", label: "Generator" },
  { id: "fundament", label: "Fundament" },
  { id: "notizen", label: "Notizen" },
];

const DAILY_GOAL = 5;

type WebsiteVisual = {
  src: string;
  alt: string;
};

type StackCard = {
  icon: LucideIcon;
  title: string;
  tag: string;
  accent: "indigo" | "emerald" | "cyan";
  wide?: boolean;
  visual: WebsiteVisual;
  items: { name: string; note: string }[];
};

const STACK: StackCard[] = [
  {
    icon: Layers,
    title: "Core Stack",
    tag: "Bereits bezahlt & aktiv",
    accent: "indigo",
    visual: {
      src: "/website-assets/development-workflow.png",
      alt: "Code-Editor und UI-Komponenten im Entwicklungsworkflow",
    },
    items: [
      { name: "VS Code + Claude", note: "Entwicklung & Texte" },
      { name: "GitHub", note: "Code & Basis-Template" },
      { name: "Vercel Pro", note: "Hosting für alle Kunden" },
    ],
  },
  {
    icon: ShieldCheck,
    title: "DSGVO-Schild",
    tag: "Verkaufsargument",
    accent: "emerald",
    wide: true,
    visual: {
      src: "/website-assets/digital-infrastructure.png",
      alt: "Digitale Infrastruktur als vernetzte, leuchtende UI-Panels",
    },
    items: [
      {
        name: "Lokale Schriften",
        note: "Keine Verbindung zu Google-Fonts-Servern",
      },
      {
        name: "Cloudflare Web Analytics",
        note: "Cookiefrei – kein nerviges Banner nötig",
      },
      { name: "Rechtstexte", note: "Impressum & Datenschutz über Generator" },
    ],
  },
  {
    icon: Database,
    title: "CMS & Verwaltung",
    tag: "Free Tiers",
    accent: "cyan",
    wide: true,
    visual: {
      src: "/website-assets/mobile-booking.png",
      alt: "Mobiles Terminbuchungs-Interface auf einem Smartphone",
    },
    items: [
      { name: "Sanity", note: "Kunden pflegen Inhalte selbst" },
      { name: "Cloudflare Email Routing", note: "Professionelle E-Mail-Adressen" },
      { name: "Cal.com", note: "Terminbuchung" },
      { name: "Loom", note: "Video-Audits für die Akquise" },
    ],
  },
];

type Paket = {
  icon: LucideIcon;
  label: string;
  name: string;
  price: string;
  unit: string;
  effort: string;
  visual: WebsiteVisual;
  features: string[];
  highlight?: boolean;
};

const PAKETE: Paket[] = [
  {
    icon: Rocket,
    label: "Paket 1",
    name: "Der digitale Neustart",
    price: "950 – 1.450 €",
    unit: "netto, einmalig",
    effort: "Ziel: max. 10 Std.",
    visual: {
      src: "/website-assets/website-homepage.png",
      alt: "Modernes Website-Layout als digitaler Neustart für ein lokales Unternehmen",
    },
    features: [
      "Bis zu 5 Seiten",
      "Mobil-optimiert",
      "100 % DSGVO-konform",
      "Lokale SEO-Basis",
      "Google-Profil-Verknüpfung",
    ],
  },
  {
    icon: TrendingUp,
    label: "Paket 2",
    name: "Sichtbarkeit & Wachstum",
    price: "1.900 – 2.500 €",
    unit: "netto, einmalig",
    effort: "Ziel: max. 18 Std.",
    visual: {
      src: "/website-assets/growth-insights.png",
      alt: "Wachstums-Dashboard mit Funnel und Leistungsdiagrammen",
    },
    features: [
      "Alles aus Paket 1",
      "Sanity CMS für eigene Inhalte",
      "Interaktive Anfrage-Strecke / Terminbuchung",
      "3 lokale Leistungsseiten",
    ],
  },
  {
    icon: Repeat,
    label: "Pflicht-Add-on",
    name: "Sorglos-Paket",
    price: "39 – 59 €",
    unit: "pro Monat",
    effort: "Ziel: MRR aufbauen",
    visual: {
      src: "/website-assets/dashboard-analytics.png",
      alt: "Analytics-Dashboard für laufende Betreuung und Website-Performance",
    },
    highlight: true,
    features: [
      "Hosting über meine Vercel-Pro-Infrastruktur",
      "SSL-Zertifikat",
      "Technische Updates",
      "30 Min. Inhaltsänderungen pro Monat",
    ],
  },
];

type ChecklistItem = {
  id: string;
  title: string;
  detail?: string;
  badge?: string;
};

const AUDIT_STEPS: ChecklistItem[] = [
  {
    id: "maps",
    badge: "3 Min.",
    title: "Google Maps Check",
    detail:
      "4,2+ Sterne, aber veraltete / nicht-mobile Website oder fehlendes SSL.",
  },
  {
    id: "claude",
    badge: "2 Min.",
    title: "Startseiten-Texte in Claude kopieren",
    detail:
      "3 konkrete Verbesserungen für Kundenansprache & SEO generieren lassen.",
  },
  {
    id: "loom",
    badge: "5 Min.",
    title: "2-Minuten-Loom-Video aufnehmen – Kamera an!",
    detail:
      "1. Lob für Bewertungen · 2. Mobil-Check · 3. Fehlende Kundenführung · 4. Technik/Recht · 5. Einladung zu 10-Min.-Call",
  },
  {
    id: "mail",
    badge: "2 Min.",
    title: "Kurze, persönliche E-Mail mit Video-Link senden",
  },
  {
    id: "followup",
    badge: "Follow-up",
    title: "Erinnerung für Telefonat in 2 Tagen setzen",
  },
];

const FOUNDATION_STEPS: ChecklistItem[] = [
  {
    id: "konto",
    title: "Separates Geschäftskonto eingerichtet",
    detail: "z. B. Finom / Kontist / N26 Business",
  },
  {
    id: "buchhaltung",
    title: "Buchhaltungs-Tool aktiv",
    detail: "Lexoffice / SevDesk",
  },
  {
    id: "bewertung",
    title:
      "Ersten bestehenden Kunden um ausführliche 5-Sterne-Bewertung auf Google gebeten",
  },
  {
    id: "fallstudie",
    title:
      "Erste Vorher-Nachher-Fallstudie im Google Unternehmensprofil gepostet",
  },
  {
    id: "template",
    title:
      "Wiederverwendbares Next.js + Tailwind Basis-Template auf GitHub erstellt",
  },
];

const EMPTY_CHECKS: Record<string, boolean> = {};
const EMPTY_COUNTS: Record<string, number> = {};
const EMPTY_NOTES: Note[] = [];
const EMPTY_LEAD = { firma: "", branche: "", ort: "", name: "" };
type Note = { id: string; text: string; createdAt: number };
type Lead = typeof EMPTY_LEAD;

/* -------------------------------------------------------------------------- */
/*  Bausteine                                                                 */
/* -------------------------------------------------------------------------- */

function cx(...classes: (string | false | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

const ACCENTS = {
  indigo: {
    icon: "text-indigo-400 bg-indigo-500/10 ring-indigo-500/20",
    glow: "hover:shadow-[0_0_48px_-16px_rgba(99,102,241,0.5)]",
    dot: "bg-indigo-400",
  },
  emerald: {
    icon: "text-emerald-400 bg-emerald-500/10 ring-emerald-500/20",
    glow: "hover:shadow-[0_0_48px_-16px_rgba(16,185,129,0.5)]",
    dot: "bg-emerald-400",
  },
  cyan: {
    icon: "text-cyan-400 bg-cyan-500/10 ring-cyan-500/20",
    glow: "hover:shadow-[0_0_48px_-16px_rgba(34,211,238,0.5)]",
    dot: "bg-cyan-400",
  },
};

function Card({
  children,
  className,
  glow = ACCENTS.indigo.glow,
}: {
  children: ReactNode;
  className?: string;
  glow?: string;
}) {
  return (
    <div
      className={cx(
        "rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition duration-300 hover:border-zinc-700",
        glow,
        className,
      )}
    >
      {children}
    </div>
  );
}

function CardVisual({ visual }: { visual: WebsiteVisual }) {
  return (
    <figure className="relative mt-5 aspect-[16/9] overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950">
      <Image
        src={visual.src}
        alt={visual.alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        className="object-cover"
      />
    </figure>
  );
}

function SectionHeading({
  icon: Icon,
  eyebrow,
  title,
  description,
  action,
}: {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
      <div>
        <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-zinc-500">
          <Icon className="size-3.5" aria-hidden />
          {eyebrow}
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-50">
          {title}
        </h2>
        {description && (
          <p className="mt-1.5 max-w-2xl text-sm text-zinc-400">
            {description}
          </p>
        )}
      </div>
      {action}
    </div>
  );
}

function GhostButton({
  onClick,
  children,
  disabled,
}: {
  onClick: () => void;
  children: ReactNode;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-zinc-300 transition hover:border-zinc-700 hover:bg-zinc-800 hover:text-zinc-50 active:scale-[0.97] disabled:pointer-events-none disabled:opacity-40"
    >
      {children}
    </button>
  );
}

/* -------------------------------------------------------------------------- */
/*  Navigation                                                                */
/* -------------------------------------------------------------------------- */

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-800/80 bg-[#0A0A0C]/75 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-6 px-4 sm:px-6">
        <a
          href="#top"
          className="flex shrink-0 items-center gap-2 text-sm font-semibold text-zinc-50"
        >
          <span className="grid size-6 place-items-center rounded-md bg-gradient-to-br from-indigo-500 to-cyan-400 text-[#0A0A0C]">
            <Compass className="size-4" aria-hidden />
          </span>
          Agency OS
        </a>
        <nav className="-mx-1 flex items-center gap-1 overflow-x-auto [scrollbar-width:none]">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="whitespace-nowrap rounded-md px-2.5 py-1.5 text-sm text-zinc-400 transition hover:bg-zinc-800/70 hover:text-zinc-50"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

/* -------------------------------------------------------------------------- */
/*  1 · Header, Mantra & Tages-Fokus                                          */
/* -------------------------------------------------------------------------- */

function dateKey(date: Date) {
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${date.getFullYear()}-${month}-${day}`;
}

function lastSevenDays() {
  return Array.from({ length: 7 }, (_, index) => {
    const date = new Date();
    date.setDate(date.getDate() - (6 - index));
    return {
      key: dateKey(date),
      label: date.toLocaleDateString("de-DE", { weekday: "short" }),
    };
  });
}

function FocusTracker() {
  const hydrated = useHydrated();
  const [counts, setCounts] = useLocalStorage("loom-counts", EMPTY_COUNTS);

  const days = hydrated ? lastSevenDays() : [];
  const todayKey = days.at(-1)?.key ?? "";
  const today = counts[todayKey] ?? 0;
  const weekTotal = days.reduce((sum, day) => sum + (counts[day.key] ?? 0), 0);
  const progress = Math.min(today / DAILY_GOAL, 1);
  const goalReached = today >= DAILY_GOAL;

  const change = (delta: number) => {
    if (!todayKey) return;
    setCounts((previous) => ({
      ...previous,
      [todayKey]: Math.max(0, (previous[todayKey] ?? 0) + delta),
    }));
  };

  return (
    <Card className="flex flex-col justify-between gap-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-zinc-500">
            <Target className="size-3.5" aria-hidden />
            Tages-Fokus
          </p>
          <p className="mt-2 text-sm text-zinc-300">
            Heute versendete Loom-Audits
          </p>
        </div>
        <span
          className={cx(
            "rounded-full px-2.5 py-1 text-xs font-medium ring-1 transition",
            goalReached
              ? "bg-emerald-500/10 text-emerald-400 ring-emerald-500/30"
              : "bg-zinc-800/60 text-zinc-400 ring-zinc-700/60",
          )}
        >
          {goalReached ? "Ziel erreicht" : `Ziel: ${DAILY_GOAL}`}
        </span>
      </div>

      <div className="flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => change(-1)}
          disabled={today === 0}
          aria-label="Ein Audit weniger"
          className="grid size-11 place-items-center rounded-xl border border-zinc-800 bg-zinc-900 text-zinc-300 transition hover:border-zinc-700 hover:bg-zinc-800 active:scale-90 disabled:pointer-events-none disabled:opacity-30"
        >
          <Minus className="size-5" aria-hidden />
        </button>
        <output
          aria-live="polite"
          className={cx(
            "font-sans text-6xl font-semibold tabular-nums tracking-tighter transition-colors",
            goalReached ? "text-emerald-400" : "text-zinc-50",
          )}
        >
          {today}
        </output>
        <button
          type="button"
          onClick={() => change(1)}
          aria-label="Ein Audit mehr"
          className="grid size-11 place-items-center rounded-xl bg-indigo-500 text-white shadow-[0_0_24px_-6px_rgba(99,102,241,0.8)] transition hover:bg-indigo-400 active:scale-90"
        >
          <Plus className="size-5" aria-hidden />
        </button>
      </div>

      <div>
        <div className="h-1.5 overflow-hidden rounded-full bg-zinc-800">
          <div
            className={cx(
              "h-full rounded-full transition-all duration-500 ease-out",
              goalReached ? "bg-emerald-400" : "bg-indigo-400",
            )}
            style={{ width: `${progress * 100}%` }}
          />
        </div>
        <div className="mt-5 flex items-end justify-between gap-2">
          <div className="flex h-12 items-end gap-1.5">
            {days.map((day) => {
              const value = counts[day.key] ?? 0;
              const height = Math.max(
                Math.min(value / DAILY_GOAL, 1) * 100,
                value > 0 ? 18 : 8,
              );
              return (
                <div
                  key={day.key}
                  title={`${day.label}: ${value}`}
                  className="flex h-full w-5 flex-col items-center justify-end gap-1"
                >
                  <div
                    className={cx(
                      "w-full rounded-sm transition-all duration-500",
                      value >= DAILY_GOAL
                        ? "bg-emerald-400"
                        : value > 0
                          ? "bg-indigo-400/70"
                          : "bg-zinc-800",
                    )}
                    style={{ height: `${height}%` }}
                  />
                </div>
              );
            })}
          </div>
          <p className="text-right text-xs text-zinc-500">
            Letzte 7 Tage
            <span className="block font-mono text-sm tabular-nums text-zinc-300">
              {weekTotal} Audits
            </span>
          </p>
        </div>
      </div>
    </Card>
  );
}

function Hero() {
  return (
    <section id="fokus" className="grid gap-4 lg:grid-cols-3">
      <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-[#111114] p-8 sm:p-10 lg:col-span-2">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-indigo-500/20 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 left-1/3 size-72 rounded-full bg-cyan-500/10 blur-3xl"
        />
        <div className="relative">
          <p className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/70 px-3 py-1 text-xs text-zinc-400">
            <Sparkles className="size-3.5 text-indigo-400" aria-hidden />
            Agency &amp; Founder Playbook
          </p>
          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
            Agency OS{" "}
            <span className="text-zinc-500">
              – Mein System für planbares Wachstum
            </span>
          </h1>
          <blockquote className="mt-8 border-l-2 border-indigo-400/70 pl-5">
            <p className="text-xs font-medium uppercase tracking-widest text-indigo-400">
              Nordstern
            </p>
            <p className="mt-2 text-lg leading-relaxed text-zinc-200 sm:text-xl">
              Ich verkaufe keine Stunden und keinen Code. Ich verkaufe lokalen
              Unternehmen{" "}
              <span className="text-emerald-400">
                mehr Sichtbarkeit, Rechtssicherheit und neue Kunden
              </span>{" "}
              – schnell, produktisiert und automatisiert.
            </p>
          </blockquote>
        </div>
      </div>
      <FocusTracker />
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  2 · Stack                                                                 */
/* -------------------------------------------------------------------------- */

function StackSection() {
  return (
    <section id="stack">
      <SectionHeading
        icon={Layers}
        eyebrow="Setup"
        title="Mein Tech- & Rechtssicherheits-Stack"
        description="Alles, was ich brauche, läuft bereits – und ist gleichzeitig mein Verkaufsargument."
        action={
          <span className="rounded-full bg-emerald-500/10 px-3 py-1.5 text-sm font-medium text-emerald-400 ring-1 ring-emerald-500/30">
            0 € Zusatzkosten
          </span>
        }
      />
      <div className="grid gap-4 md:grid-cols-5">
        {STACK.map((card, index) => {
          const accent = ACCENTS[card.accent];
          return (
            <Card
              key={card.title}
              glow={accent.glow}
              className={cx(
                index === 0 && "md:col-span-2",
                index === 1 && "md:col-span-3",
                index === 2 && "md:col-span-5",
              )}
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span
                    className={cx(
                      "grid size-9 place-items-center rounded-lg ring-1",
                      accent.icon,
                    )}
                  >
                    <card.icon className="size-4.5" aria-hidden />
                  </span>
                  <h3 className="font-medium text-zinc-50">{card.title}</h3>
                </div>
                <span className="text-xs text-zinc-500">{card.tag}</span>
              </div>
              <CardVisual visual={card.visual} />
              <ul
                className={cx(
                  "mt-5 grid gap-x-6 gap-y-3",
                  index === 2 && "sm:grid-cols-2 lg:grid-cols-4",
                )}
              >
                {card.items.map((item) => (
                  <li key={item.name} className="flex gap-3">
                    <span
                      className={cx(
                        "mt-2 size-1.5 shrink-0 rounded-full",
                        accent.dot,
                      )}
                    />
                    <div>
                      <p className="text-sm text-zinc-200">{item.name}</p>
                      <p className="text-sm text-zinc-500">{item.note}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  3 · Pakete                                                                */
/* -------------------------------------------------------------------------- */

function PaketeSection() {
  return (
    <section id="pakete">
      <SectionHeading
        icon={Building2}
        eyebrow="Sales-Spickzettel"
        title="Meine produktisierten Pakete"
        description="Feste Leistung, fester Preis, fester Zeitrahmen. Kein Paket ohne Sorglos-Paket."
      />
      <div className="grid gap-4 lg:grid-cols-3">
        {PAKETE.map((paket) => (
          <Card
            key={paket.name}
            glow={
              paket.highlight ? ACCENTS.emerald.glow : ACCENTS.indigo.glow
            }
            className={cx(
              "flex flex-col",
              paket.highlight && "border-emerald-500/30 bg-emerald-500/[0.04]",
            )}
          >
            <div className="flex items-center justify-between">
              <span
                className={cx(
                  "rounded-full px-2.5 py-1 text-xs font-medium ring-1",
                  paket.highlight
                    ? "bg-emerald-500/10 text-emerald-400 ring-emerald-500/30"
                    : "bg-zinc-800/60 text-zinc-400 ring-zinc-700/60",
                )}
              >
                {paket.label}
              </span>
              <paket.icon
                className={cx(
                  "size-5",
                  paket.highlight ? "text-emerald-400" : "text-zinc-500",
                )}
                aria-hidden
              />
            </div>
            <h3 className="mt-5 text-lg font-medium text-zinc-50">
              „{paket.name}“
            </h3>
            <CardVisual visual={paket.visual} />
            <p className="mt-3 font-mono text-3xl font-semibold tracking-tight text-zinc-50">
              {paket.price}
            </p>
            <p className="mt-1 text-sm text-zinc-500">{paket.unit}</p>
            <ul className="mt-6 flex-1 space-y-2.5 border-t border-zinc-800 pt-6">
              {paket.features.map((feature) => (
                <li key={feature} className="flex gap-2.5 text-sm text-zinc-300">
                  <Check
                    className="mt-0.5 size-4 shrink-0 text-emerald-400"
                    aria-hidden
                  />
                  {feature}
                </li>
              ))}
            </ul>
            <p className="mt-6 flex items-center gap-2 text-sm text-zinc-400">
              <Clock className="size-4 text-zinc-500" aria-hidden />
              {paket.effort}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  4 + 6 · Checklisten                                                       */
/* -------------------------------------------------------------------------- */

function Checklist({
  storageKey,
  items,
  resetLabel,
  numbered,
}: {
  storageKey: string;
  items: ChecklistItem[];
  resetLabel: string;
  numbered?: boolean;
}) {
  const [checked, setChecked] = useLocalStorage(storageKey, EMPTY_CHECKS);
  const done = items.filter((item) => checked[item.id]).length;
  const complete = done === items.length;

  return (
    <Card glow={ACCENTS.emerald.glow} className="p-0">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-800 px-6 py-4">
        <div className="flex min-w-48 flex-1 items-center gap-4">
          <span
            className={cx(
              "font-mono text-sm tabular-nums",
              complete ? "text-emerald-400" : "text-zinc-400",
            )}
          >
            {done}/{items.length}
          </span>
          <div className="h-1.5 max-w-xs flex-1 overflow-hidden rounded-full bg-zinc-800">
            <div
              className="h-full rounded-full bg-emerald-400 transition-all duration-500 ease-out"
              style={{ width: `${(done / items.length) * 100}%` }}
            />
          </div>
        </div>
        <GhostButton onClick={() => setChecked({})} disabled={done === 0}>
          <RotateCcw className="size-4" aria-hidden />
          {resetLabel}
        </GhostButton>
      </div>
      <ul className="divide-y divide-zinc-800/70">
        {items.map((item, index) => {
          const isChecked = Boolean(checked[item.id]);
          return (
            <li key={item.id}>
              <label className="group flex cursor-pointer items-start gap-4 px-6 py-4 transition hover:bg-zinc-800/30">
                <input
                  type="checkbox"
                  className="peer sr-only"
                  checked={isChecked}
                  onChange={() =>
                    setChecked((previous) => ({
                      ...previous,
                      [item.id]: !previous[item.id],
                    }))
                  }
                />
                <span
                  className={cx(
                    "mt-0.5 grid size-5 shrink-0 place-items-center rounded-md border transition duration-200 peer-focus-visible:ring-2 peer-focus-visible:ring-indigo-400 group-active:scale-90",
                    isChecked
                      ? "border-emerald-400 bg-emerald-400 text-[#0A0A0C]"
                      : "border-zinc-600 bg-zinc-900 group-hover:border-zinc-400",
                  )}
                >
                  <Check
                    className={cx(
                      "size-3.5 transition duration-200",
                      isChecked ? "scale-100 opacity-100" : "scale-50 opacity-0",
                    )}
                    strokeWidth={3}
                    aria-hidden
                  />
                </span>
                <span className="min-w-0 flex-1">
                  <span
                    className={cx(
                      "block text-sm font-medium transition",
                      isChecked ? "text-zinc-500 line-through" : "text-zinc-100",
                    )}
                  >
                    {numbered && (
                      <span className="mr-2 font-mono text-zinc-500">
                        {index + 1}.
                      </span>
                    )}
                    {item.title}
                  </span>
                  {item.detail && (
                    <span className="mt-1 block text-sm text-zinc-500">
                      {item.detail}
                    </span>
                  )}
                </span>
                {item.badge && (
                  <span className="shrink-0 rounded-full bg-zinc-800/70 px-2.5 py-1 font-mono text-xs text-zinc-400">
                    {item.badge}
                  </span>
                )}
              </label>
            </li>
          );
        })}
      </ul>
    </Card>
  );
}

/* -------------------------------------------------------------------------- */
/*  5 · Loom-Skript- & E-Mail-Generator                                       */
/* -------------------------------------------------------------------------- */

function buildTexts(lead: Lead) {
  const firma = lead.firma.trim() || "[Firmenname]";
  const branche = lead.branche.trim() || "[Branche]";
  const ort = lead.ort.trim();
  const name = lead.name.trim() || "[Mein Name]";
  const region = ort ? `in ${ort}` : "in Ihrer Region";

  const script = `LOOM-SKRIPT · ${firma} · ca. 2 Minuten · Kamera an!

1) LOB (0:00 – 0:20)
Hallo, hier ist ${name}. Ich habe mir gerade ${firma} auf Google Maps angesehen – Ihre Bewertungen sind wirklich stark. Man merkt sofort, dass Ihre Kunden zufrieden sind. Genau deshalb ist mir etwas aufgefallen, das ich Ihnen kurz zeigen möchte.

2) MOBIL-CHECK (0:20 – 0:50)
Über 70 % der Menschen, die ${region} nach „${branche}“ suchen, tun das am Handy. So sieht Ihre Seite auf dem Smartphone aus: [Handy-Ansicht zeigen – Schrift, Ladezeit, Menü]. Viele Besucher springen hier wieder ab, bevor sie Sie überhaupt kontaktieren.

3) KUNDENFÜHRUNG (0:50 – 1:20)
Wer auf Ihre Startseite kommt, sieht nicht auf den ersten Blick, was der nächste Schritt ist. [Stelle zeigen] Ein klarer Button wie „Jetzt Termin anfragen“ ganz oben und eine kurze Anfrage-Strecke würden aus Besuchern deutlich mehr Anfragen machen. [1 – 2 Verbesserungen aus Claude nennen]

4) TECHNIK & RECHT (1:20 – 1:40)
Noch ein Punkt: [SSL fehlt / Google Fonts werden extern geladen / Cookie-Banner fehlt oder ist fehlerhaft]. Das ist ein Abmahnrisiko, lässt sich aber sauber lösen – ganz ohne nerviges Cookie-Banner.

5) EINLADUNG (1:40 – 2:00)
Ich baue Websites speziell für lokale Betriebe wie ${firma} – zum Festpreis, mobil-optimiert und DSGVO-konform. Wenn Sie mögen, zeige ich Ihnen in 10 Minuten am Telefon, wie das für Sie aussehen könnte. Den Link zur Terminbuchung finden Sie in meiner E-Mail. Vielen Dank und bis bald!`;

  const email = `Betreff: Kurzes Video zu Ihrer Website – ${firma}

Guten Tag,

ich bin bei Google Maps auf ${firma} gestoßen – Ihre Bewertungen sind wirklich beeindruckend.

Mir sind dabei auf Ihrer Website drei Dinge aufgefallen, durch die Ihnen als ${branche} ${region} vermutlich Anfragen entgehen. Ich habe Ihnen dazu ein kurzes, persönliches Video (2 Min.) aufgenommen:

[LOOM-LINK]

Kein Verkaufsgespräch, nur konkrete Tipps, die Sie direkt umsetzen können.

Wenn Sie das Thema interessiert, können Sie sich hier unverbindlich 10 Minuten für ein Telefonat eintragen:
[CAL.COM-LINK]

Viele Grüße
${name}`;

  return { script, email };
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (timeout.current) clearTimeout(timeout.current);
    },
    [],
  );

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      return;
    }
    setCopied(true);
    if (timeout.current) clearTimeout(timeout.current);
    timeout.current = setTimeout(() => setCopied(false), 1800);
  };

  return (
    <button
      type="button"
      onClick={copy}
      className={cx(
        "inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-sm transition active:scale-[0.97]",
        copied
          ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-400"
          : "border-zinc-800 bg-zinc-900 text-zinc-300 hover:border-zinc-700 hover:bg-zinc-800 hover:text-zinc-50",
      )}
    >
      {copied ? (
        <Check className="size-4" aria-hidden />
      ) : (
        <Copy className="size-4" aria-hidden />
      )}
      {copied ? "Kopiert" : "Kopieren"}
    </button>
  );
}

function Field({
  label,
  value,
  placeholder,
  onChange,
}: {
  label: string;
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="block">
      <span className="text-xs font-medium text-zinc-400">{label}</span>
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        className="mt-1.5 w-full rounded-lg border border-zinc-800 bg-[#0A0A0C] px-3 py-2 text-sm text-zinc-100 outline-none transition placeholder:text-zinc-600 hover:border-zinc-700 focus:border-indigo-400/70 focus:ring-2 focus:ring-indigo-500/20"
      />
    </label>
  );
}

function OutputPanel({
  icon: Icon,
  title,
  text,
}: {
  icon: LucideIcon;
  title: string;
  text: string;
}) {
  return (
    <Card glow={ACCENTS.cyan.glow} className="flex flex-col p-0">
      <div className="flex items-center justify-between gap-3 border-b border-zinc-800 px-5 py-3">
        <h3 className="flex items-center gap-2 text-sm font-medium text-zinc-100">
          <Icon className="size-4 text-cyan-400" aria-hidden />
          {title}
        </h3>
        <CopyButton text={text} />
      </div>
      <pre className="max-h-[28rem] flex-1 overflow-y-auto whitespace-pre-wrap break-words px-5 py-4 font-sans text-sm leading-relaxed text-zinc-300">
        {text}
      </pre>
    </Card>
  );
}

function GeneratorSection() {
  const [lead, setLead] = useLocalStorage("lead", EMPTY_LEAD);
  const { script, email } = useMemo(() => buildTexts(lead), [lead]);
  const update = (field: keyof Lead) => (value: string) =>
    setLead((previous) => ({ ...previous, [field]: value }));

  return (
    <section id="generator">
      <SectionHeading
        icon={Sparkles}
        eyebrow="Mini-Tool"
        title="Loom-Skript- & E-Mail-Generator"
        description="Lead eintragen – Skript und E-Mail passen sich in Echtzeit an. Platzhalter in [eckigen Klammern] vor dem Senden ersetzen."
        action={
          <GhostButton
            onClick={() =>
              setLead((previous) => ({ ...EMPTY_LEAD, name: previous.name }))
            }
            disabled={!lead.firma && !lead.branche && !lead.ort}
          >
            <RotateCcw className="size-4" aria-hidden />
            Neuer Lead
          </GhostButton>
        }
      />
      <Card className="mb-4">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Field
            label="Firmenname des Leads"
            placeholder="z. B. Dachdeckerei Müller"
            value={lead.firma}
            onChange={update("firma")}
          />
          <Field
            label="Branche"
            placeholder="z. B. Dachdecker, Physio"
            value={lead.branche}
            onChange={update("branche")}
          />
          <Field
            label="Ort (optional)"
            placeholder="z. B. Leipzig"
            value={lead.ort}
            onChange={update("ort")}
          />
          <Field
            label="Mein Name (bleibt gespeichert)"
            placeholder="Vor- und Nachname"
            value={lead.name}
            onChange={update("name")}
          />
        </div>
      </Card>
      <div className="grid gap-4 lg:grid-cols-2">
        <OutputPanel icon={Video} title="2-Minuten-Sprechskript" text={script} />
        <OutputPanel icon={Mail} title="E-Mail-Vorlage" text={email} />
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Notizen                                                                   */
/* -------------------------------------------------------------------------- */

function NotesSection() {
  const [notes, setNotes] = useLocalStorage("notes-list", EMPTY_NOTES);
  const [legacyNotes] = useLocalStorage("notes", "");
  const [draft, setDraft] = useState("");
  const hydrated = useHydrated();

  useEffect(() => {
    if (hydrated && notes.length === 0 && legacyNotes.trim()) {
      setNotes([{ id: crypto.randomUUID(), text: legacyNotes.trim(), createdAt: Date.now() }]);
    }
  }, [hydrated, legacyNotes, notes.length, setNotes]);

  const addNote = () => {
    const text = draft.trim();
    if (!text) return;
    setNotes((previous) => [
      { id: crypto.randomUUID(), text, createdAt: Date.now() },
      ...previous,
    ]);
    setDraft("");
  };

  const removeNote = (id: string) => {
    setNotes((previous) => previous.filter((note) => note.id !== id));
  };

  return (
    <section id="notizen">
      <SectionHeading
        icon={NotebookPen}
        eyebrow="Dein Ideenraum"
        title="Notizen"
        description="Gedanken festhalten, damit du dich auf das Wesentliche konzentrieren kannst."
        action={
          <span className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-400">
            {notes.length} {notes.length === 1 ? "Eintrag" : "Einträge"}
          </span>
        }
      />
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)]">
        <Card className="relative overflow-hidden border-indigo-500/20 bg-gradient-to-br from-indigo-500/[0.08] via-zinc-900/80 to-zinc-900/50 p-5 sm:p-7">
          <div className="mb-5 flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-xl bg-indigo-500/15 text-indigo-300 ring-1 ring-indigo-400/20">
              <NotebookPen className="size-5" aria-hidden />
            </span>
            <div>
              <h3 className="font-medium text-zinc-100">Schnell festhalten</h3>
              <p className="text-sm text-zinc-400">Ein Gedanke genügt.</p>
            </div>
          </div>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              addNote();
            }}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <label className="sr-only" htmlFor="note-draft">Neue Notiz</label>
            <input
              id="note-draft"
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter" && (event.nativeEvent.isComposing || event.keyCode === 229)) {
                  event.preventDefault();
                }
              }}
              placeholder="Idee, Gesprächsnotiz oder nächster Schritt …"
              className="min-w-0 flex-1 rounded-xl border border-zinc-700/80 bg-[#0A0A0C]/70 px-4 py-3 text-sm text-zinc-100 outline-none transition placeholder:text-zinc-500 hover:border-zinc-600 focus:border-indigo-400/70 focus:ring-2 focus:ring-indigo-500/20"
            />
            <button
              type="submit"
              disabled={!draft.trim()}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-indigo-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-indigo-950/30 transition hover:bg-indigo-400 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-40"
            >
              <Plus className="size-4" aria-hidden />
              Hinzufügen
            </button>
          </form>
          <p className="mt-3 flex items-center gap-1.5 text-xs text-zinc-500">
            <CornerDownLeft className="size-3.5" aria-hidden />
            Mit Enter speichern · automatisch in diesem Browser gesichert
          </p>
        </Card>

        <div className="flex flex-col gap-3" aria-live="polite" aria-relevant="additions removals">
          {notes.length === 0 ? (
            <div className="flex min-h-48 flex-col items-center justify-center rounded-2xl border border-dashed border-zinc-800 bg-zinc-900/30 px-6 py-8 text-center">
              <span className="grid size-11 place-items-center rounded-full bg-zinc-800/70 text-zinc-400">
                <NotebookPen className="size-5" aria-hidden />
              </span>
              <p className="mt-3 text-sm font-medium text-zinc-300">Noch keine Notizen</p>
              <p className="mt-1 max-w-xs text-xs leading-relaxed text-zinc-500">Dein erster Eintrag erscheint hier – und das Eingabefeld ist direkt wieder frei.</p>
            </div>
          ) : (
            notes.map((note) => (
              <article key={note.id} className="group rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 transition hover:border-zinc-700 sm:p-5">
                <div className="flex items-start justify-between gap-3">
                  <p className="min-w-0 flex-1 whitespace-pre-wrap break-words text-sm leading-relaxed text-zinc-200">{note.text}</p>
                  <button
                    type="button"
                    onClick={() => removeNote(note.id)}
                    aria-label={`Notiz löschen: ${note.text.slice(0, 48)}`}
                    className="shrink-0 rounded-lg px-2 py-1 text-xs text-zinc-500 opacity-100 transition hover:bg-red-500/10 hover:text-red-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 sm:opacity-0 sm:group-hover:opacity-100"
                  >
                    Löschen
                  </button>
                </div>
                <time className="mt-3 block text-xs text-zinc-500" dateTime={new Date(note.createdAt).toISOString()}>
                  {new Date(note.createdAt).toLocaleString("de-DE", { dateStyle: "medium", timeStyle: "short" })}
                </time>
              </article>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Seite                                                                     */
/* -------------------------------------------------------------------------- */

export default function Page() {
  return (
    <div id="top" className="flex-1">
      <Nav />
      <main className="mx-auto max-w-6xl space-y-24 px-4 pb-24 pt-10 sm:px-6">
        <Hero />
        <StackSection />
        <PaketeSection />

        <section id="akquise">
          <SectionHeading
            icon={ListChecks}
            eyebrow="15 Minuten pro Lead"
            title="Website-Audit Workflow"
            description="Für jeden neuen Lead einmal komplett durchziehen, dann zurücksetzen."
          />
          <Checklist
            storageKey="audit-checklist"
            items={AUDIT_STEPS}
            resetLabel="Neuer Lead"
            numbered
          />
        </section>

        <GeneratorSection />

        <section id="fundament">
          <SectionHeading
            icon={Building2}
            eyebrow="Einmalige Aufgaben"
            title="Gründer-Fundament"
            description="Die Basis-Ordnung, die einmal stehen muss."
          />
          <Checklist
            storageKey="foundation-checklist"
            items={FOUNDATION_STEPS}
            resetLabel="Zurücksetzen"
          />
        </section>

        <NotesSection />
      </main>
      <footer className="border-t border-zinc-800/80 py-8 text-center text-xs text-zinc-600">
        Agency OS · Daten liegen ausschließlich lokal in diesem Browser.
      </footer>
    </div>
  );
}
