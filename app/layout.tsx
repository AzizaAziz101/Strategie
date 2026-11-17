import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Resonanz web digital – Webentwicklung für Unternehmen vor Ort",
  description:
    "Klare, rechtssichere Websites für lokale Unternehmen und Selbstständige. Moderne digitale Präsenz, faire Festpreise und persönliche Begleitung.",
  applicationName: "Resonanz web digital",
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#09090b",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="de" className="h-full antialiased">
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
