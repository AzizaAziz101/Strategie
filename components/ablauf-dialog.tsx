"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, ShieldCheck, X } from "lucide-react";
import { BrandMark } from "@/components/brand-mark";
import "./ablauf-dialog.css";

const steps = [
  {
    title: "Kostenloses Gespräch",
    text: "Wir sprechen über Ihr Unternehmen, Ihre Zielgruppe und Ihre Ziele.",
    tag: "Kein Verkaufsgespräch",
  },
  {
    title: "Konzept & Struktur",
    text: "Seiten, Inhalte und das Ziel jeder Seite werden festgelegt. Sie wissen vorher genau, was gebaut wird.",
  },
  {
    title: "Design & Entwicklung",
    text: "Ihre Website wird gestaltet und technisch umgesetzt.",
    tag: "7–14 Tage",
  },
  {
    title: "Feedback & Feinschliff",
    text: "Regelmäßige Updates, Feedback jederzeit möglich. Änderungen werden direkt eingearbeitet.",
  },
  {
    title: "Test & Optimierung",
    text: "Prüfung auf allen Geräten – Ladezeit und Darstellung werden optimiert.",
  },
  {
    title: "Auslieferung & Zahlung",
    text: "Erst wenn Sie überzeugt sind, wird gezahlt.",
    tag: "Keine Vorauszahlung",
  },
];

const CLOSE_DURATION = 650;

type DialogState = "closed" | "open" | "closing";

export function AblaufDialog() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [state, setState] = useState<DialogState>("closed");

  const open = () => {
    const dialog = dialogRef.current;
    if (!dialog || dialog.open) return;
    dialog.showModal();
    dialog.scrollTop = 0;
    requestAnimationFrame(() => requestAnimationFrame(() => setState("open")));
  };

  const close = useCallback(() => {
    setState((current) => (current === "open" ? "closing" : current));
  }, []);

  useEffect(() => {
    if (state !== "closing") return;
    const timer = window.setTimeout(() => {
      dialogRef.current?.close();
      setState("closed");
    }, CLOSE_DURATION);
    return () => window.clearTimeout(timer);
  }, [state]);

  useEffect(() => {
    if (state === "closed") return;
    const root = document.documentElement;
    const previous = root.style.overflow;
    root.style.overflow = "hidden";
    return () => {
      root.style.overflow = previous;
    };
  }, [state]);

  return (
    <>
      <div className="mt-5 flex flex-col gap-5 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 sm:flex-row sm:items-center sm:justify-between sm:px-7 sm:py-6">
        <div>
          <p className="text-base font-medium text-zinc-100">Wie läuft die Zusammenarbeit ab?</p>
          <p className="mt-1 text-sm leading-6 text-zinc-400">Sechs klare Schritte – vom ersten Gespräch bis zur Auslieferung. Gezahlt wird erst am Ende.</p>
        </div>
        <button
          type="button"
          onClick={open}
          aria-haspopup="dialog"
          className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-zinc-100 px-5 py-3 text-sm font-medium text-zinc-950 transition-all duration-500 hover:bg-white hover:shadow-[0_0_36px_-12px_rgba(199,210,254,0.6)]"
        >
          Ablauf ansehen
          <ArrowRight size={16} className="transition-transform duration-500 group-hover:translate-x-1" aria-hidden="true" />
        </button>
      </div>

      <dialog
        ref={dialogRef}
        aria-labelledby="ablauf-title"
        data-state={state}
        className="ablauf-dialog"
        onCancel={(event) => {
          event.preventDefault();
          close();
        }}
      >
        <div className="sticky top-0 z-10 border-b border-white/[0.06] bg-[#060607]/85 backdrop-blur-xl">
          <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-5 sm:px-8">
            <span className="ablauf-fade flex items-center gap-3 text-sm font-medium tracking-wide text-zinc-100">
              <BrandMark />
              Ablauf
            </span>
            <button
              type="button"
              onClick={close}
              className="ablauf-fade group inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] py-2 pl-4 pr-2.5 text-xs font-medium text-zinc-200 transition-colors duration-500 hover:border-white/20 hover:bg-white/[0.08]"
            >
              Schließen
              <span className="grid size-6 place-items-center rounded-full bg-white/[0.06] transition-transform duration-500 group-hover:rotate-90">
                <X size={14} aria-hidden="true" />
              </span>
            </button>
          </div>
        </div>

        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
          <div className="lg:sticky lg:top-36 lg:self-start">
            <p className="ablauf-item mb-5 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500" style={{ "--i": 0 } as React.CSSProperties}>
              <span className="h-px w-7 bg-indigo-300/50" />
              So arbeiten wir zusammen
            </p>
            <h2 id="ablauf-title" className="ablauf-item text-balance text-4xl font-medium leading-[1.05] tracking-[-0.045em] text-zinc-100 sm:text-5xl" style={{ "--i": 1 } as React.CSSProperties}>
              Von der ersten Idee <span className="text-zinc-500">bis zur fertigen Website.</span>
            </h2>
            <p className="ablauf-item mt-6 max-w-md text-pretty text-sm leading-7 text-zinc-400" style={{ "--i": 2 } as React.CSSProperties}>
              Ein klarer Weg in sechs Schritten. Sie wissen jederzeit, woran wir arbeiten – und entscheiden in Ruhe.
            </p>
            <div className="ablauf-item mt-10 flex items-start gap-4 rounded-2xl border border-emerald-200/10 bg-emerald-200/[0.04] p-5" style={{ "--i": 3 } as React.CSSProperties}>
              <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-emerald-200/10 bg-emerald-200/[0.06] text-emerald-200">
                <ShieldCheck size={18} strokeWidth={1.5} aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-medium text-zinc-100">Keine Vorauszahlung, kein Risiko.</p>
                <p className="mt-1 text-sm leading-6 text-zinc-400">Gezahlt wird erst, wenn Sie mit dem Ergebnis überzeugt sind.</p>
              </div>
            </div>
          </div>

          <ol className="flex flex-col">
            {steps.map(({ title, text, tag }, index) => (
              <li
                key={title}
                className="ablauf-item relative grid grid-cols-[3rem_1fr] gap-x-4 py-7 sm:grid-cols-[4.5rem_1fr] sm:py-8"
                style={{ "--i": index + 2 } as React.CSSProperties}
              >
                <span aria-hidden="true" className="ablauf-line absolute inset-x-0 top-0 h-px bg-white/[0.09]" />
                <span className="pt-1.5 font-mono text-xs text-zinc-600">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                    <h3 className="text-2xl font-medium tracking-[-0.03em] text-zinc-100 sm:text-3xl">{title}</h3>
                    {tag && (
                      <span className="rounded-full border border-indigo-200/15 bg-indigo-200/[0.06] px-2.5 py-1 text-[11px] font-medium text-indigo-100/80">
                        {tag}
                      </span>
                    )}
                  </div>
                  <p className="mt-3 max-w-lg text-pretty text-sm leading-7 text-zinc-400">{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </dialog>
    </>
  );
}
