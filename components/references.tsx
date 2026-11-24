import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";

const references = [
  {
    name: "Metallbau Meyer",
    sector: "Meisterbetrieb · Eberswalde",
    url: "https://mutnt.vercel.app",
    image: "/images/referenzen/meyer.webp",
    text: "Ein Handwerksbetrieb, der für Präzision steht – und eine Website, die das auf den ersten Blick zeigt. Klare Leistungen, aussagekräftige Bilder und eine Struktur, die Bauherren schnell zum passenden Angebot führt.",
    tags: ["Mobil zuerst", "Aussagekräftige Bilder", "Klare Leistungsübersicht"],
  },
  {
    name: "Sadig Ishar",
    sector: "Rechtsanwältin · Berlin",
    url: "https://sadigishar.com",
    image: "/images/referenzen/sadig-ishar-kanzlei.webp",
    text: "Für Menschen, die sich in einer belastenden Situation schnell orientieren müssen: ruhige Gestaltung, verständliche Sprache und ein direkter Weg zur kostenlosen Ersteinschätzung.",
    tags: ["Vertrauen auf den ersten Blick", "Verständliche Sprache", "Direkter Kontakt"],
  },
];

export function References() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {references.map(({ name, sector, url, image, text, tags }, index) => (
        <Reveal key={name} delay={index * 120}>
          <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-zinc-900/40 backdrop-blur-md transition-colors duration-500 hover:border-white/[0.14]">
            <a href={url} target="_blank" rel="noopener noreferrer" className="block p-2.5 pb-0" tabIndex={-1} aria-hidden="true">
              <div className="overflow-hidden rounded-t-xl border border-b-0 border-white/[0.07] bg-[#111318]">
                <div className="flex items-center gap-3 border-b border-white/[0.06] px-3.5 py-2.5">
                  <span className="flex gap-1.5">
                    <span className="size-2 rounded-full bg-white/10" />
                    <span className="size-2 rounded-full bg-white/10" />
                    <span className="size-2 rounded-full bg-white/10" />
                  </span>
                </div>
                <div className="relative aspect-[16/10] overflow-hidden lg:aspect-[16/9]">
                  <Image
                    src={image}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover object-top opacity-90 transition-transform duration-[1200ms] ease-out group-hover:scale-[1.02]"
                  />
                </div>
              </div>
            </a>
            <div className="flex flex-1 flex-col border-t border-white/[0.06] p-6 sm:p-7">
              <div className="flex min-h-5 flex-wrap items-center gap-x-3 gap-y-1 text-xs text-zinc-500">
                <span>{sector}</span>
                <span className="rounded-full border border-white/[0.08] px-2 py-px text-[10px] leading-4 uppercase tracking-wider text-zinc-500">Fiktives Beispiel</span>
              </div>
              <h3 className="mt-2 text-lg font-medium text-zinc-100">{name}</h3>
              <p className="mt-3 text-pretty text-sm leading-7 text-zinc-400">{text}</p>
              <ul className="mt-5 flex flex-wrap gap-2" aria-label="Schwerpunkte">
                {tags.map((tag) => (
                  <li key={tag} className="rounded-full border border-white/[0.07] bg-white/[0.02] px-2.5 py-1 text-[11px] text-zinc-400">{tag}</li>
                ))}
              </ul>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-1.5 self-start pt-7 text-sm text-zinc-300 transition-colors duration-500 hover:text-zinc-100"
              >
                Website ansehen <ArrowUpRight size={14} aria-hidden="true" />
                <span className="sr-only">: {name} (öffnet in neuem Tab)</span>
              </a>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
