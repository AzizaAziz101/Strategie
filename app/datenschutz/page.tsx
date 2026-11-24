import type { Metadata } from "next";
import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";

export const metadata: Metadata = {
  title: "Datenschutz | hoeft digital",
  description: "Datenschutzhinweise von hoeft.digital.",
};

const sectionClass = "mt-10 space-y-4 text-sm leading-7 text-zinc-300";
const headingClass = "text-xl font-medium text-zinc-100";
const linkClass = "text-indigo-200 underline decoration-white/20 underline-offset-4 hover:text-white";

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-[#09090b] text-zinc-100">
      <header className="border-b border-white/[0.06] px-5 py-5 sm:px-8">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <Link href="/" className="flex items-center gap-3 text-sm font-medium tracking-wide text-zinc-100">
            <BrandMark size={32} />
            <span>hoeft <span className="text-zinc-500">digital</span></span>
          </Link>
          <Link href="/" className="text-sm text-zinc-400 transition-colors hover:text-zinc-100">
            Zur Startseite
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
        <p className="mb-4 text-xs uppercase tracking-[0.2em] text-emerald-300">Rechtliches</p>
        <h1 className="text-balance text-4xl font-medium tracking-tight sm:text-5xl">Datenschutzerklärung</h1>

        <section className={sectionClass}>
          <h2 className={headingClass}>1. Verantwortlicher</h2>
          <p>Verantwortlich für die Verarbeitung personenbezogener Daten auf dieser Website ist:</p>
          <address className="not-italic">
            <span className="block">hoeft.digital – Antonio Hoeft</span>
            <span className="block">Greifswalder Straße 216</span>
            <span className="block">10405 Berlin</span>
            <span className="block">E-Mail: <a className={linkClass} href="mailto:hoeftantonio@yahoo.com">hoeftantonio@yahoo.com</a></span>
          </address>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>2. Aufruf dieser Website und Hosting</h2>
          <p>
            Diese Website wird über Vercel bereitgestellt. Beim Aufruf verarbeitet der Hosting-Anbieter technisch notwendige Verbindungs- und Zugriffsdaten, insbesondere IP-Adresse, Zeitpunkt des Zugriffs, aufgerufene Seite, Referrer-URL, Browser- und Geräteinformationen sowie den HTTP-Status. Die Verarbeitung dient der Auslieferung, Stabilität und Sicherheit der Website.
          </p>
          <p>
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem sicheren und zuverlässigen Betrieb). Empfänger ist Vercel Inc. Als weltweit tätiger Hosting-Anbieter kann Vercel Daten auch außerhalb des Europäischen Wirtschaftsraums verarbeiten. Weitere Informationen zu Datenschutz und den eingesetzten Übermittlungsmechanismen finden Sie in den Informationen von <a className={linkClass} href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noreferrer">Vercel</a> und im <a className={linkClass} href="https://vercel.com/legal/dpa" target="_blank" rel="noreferrer">Vercel Data Processing Addendum</a>. Die Speicherdauer technischer Protokolldaten richtet sich nach den betrieblichen und sicherheitsbezogenen Erfordernissen des Hostings.
          </p>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>3. Kontakt per E-Mail</h2>
          <p>
            Wenn Sie uns per E-Mail kontaktieren, verarbeiten wir Ihre Absenderadresse und die von Ihnen übermittelten Inhalte, um Ihre Anfrage zu beantworten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, sofern es um eine vorvertragliche oder vertragliche Anfrage geht, andernfalls Art. 6 Abs. 1 lit. f DSGVO. Die Daten werden gelöscht, sobald die Anfrage abschließend bearbeitet ist, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
          </p>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>4. Cookies, Analyse und externe Inhalte</h2>
          <p>
            Diese Website verwendet nach aktuellem Stand keine Analyse- oder Marketingdienste, keine nicht erforderlichen Cookies und keine eingebetteten Inhalte von Drittanbietern. Für den Betrieb der Website werden keine Kontaktformulare verwendet.
          </p>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>5. Ihre Rechte</h2>
          <p>
            Sie haben im Rahmen der gesetzlichen Voraussetzungen das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch gegen Verarbeitungen auf Grundlage berechtigter Interessen. Erteilte Einwilligungen können Sie jederzeit mit Wirkung für die Zukunft widerrufen. Außerdem haben Sie das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren.
          </p>
          <p>
            Zur Ausübung Ihrer Rechte genügt eine Nachricht an <a className={linkClass} href="mailto:hoeftantonio@yahoo.com">hoeftantonio@yahoo.com</a>.
          </p>
        </section>
      </article>
    </main>
  );
}
