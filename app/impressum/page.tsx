import type { Metadata } from "next";
import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";

export const metadata: Metadata = {
  title: "Impressum | hoeft.digital",
  description: "Impressum von hoeft.digital – Antonio Hoeft, Berlin.",
};

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-[#09090b] text-zinc-100">
      <header className="border-b border-white/[0.06] px-5 py-5 sm:px-8">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <Link href="/" className="flex items-center gap-3 text-sm font-medium tracking-wide text-zinc-100">
            <BrandMark size={32} />
            <span>hoeft<span className="text-zinc-500">.digital</span></span>
          </Link>
          <Link href="/" className="text-sm text-zinc-400 transition-colors hover:text-zinc-100">
            Zur Startseite
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
        <p className="mb-4 text-xs uppercase tracking-[0.2em] text-emerald-300">Rechtliches</p>
        <h1 className="text-balance text-4xl font-medium tracking-tight sm:text-5xl">Impressum</h1>

        <section className="mt-12 space-y-5 text-sm leading-7 text-zinc-300">
          <h2 className="text-lg font-medium text-zinc-100">Angaben gemäß § 5 DDG</h2>
          <address className="not-italic">
            <span className="block">hoeft.digital</span>
            <span className="block">Antonio Hoeft</span>
            <span className="block">Greifswalder Straße 216</span>
            <span className="block">10405 Berlin</span>
          </address>
          <p>
            E-Mail: <a className="text-indigo-200 underline decoration-white/20 underline-offset-4 hover:text-white" href="mailto:hoeftantonio@yahoo.com">hoeftantonio@yahoo.com</a>
          </p>
        </section>
      </article>
    </main>
  );
}
