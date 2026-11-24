import type { Metadata, Viewport } from "next";
import { SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  applicationName: "hoeft.digital",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  verification: { google: "si2WbLXNeG6opWEuitklpcF0vHFhLKY2SmQYsi2esEg" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "/",
    siteName: "hoeft.digital",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "hoeft.digital",
  url: `${SITE_URL}/`,
  description: "Webdesign aus Berlin: professionelle Websites in 7–13 Tagen, ohne Vorauszahlung.",
  areaServed: "Berlin",
  address: { "@type": "PostalAddress", addressLocality: "Berlin", addressCountry: "DE" },
  email: "hoeftantonio@yahoo.com",
  serviceType: ["Webdesign", "Website-Erstellung", "SEO-Optimierung"],
};

export const viewport: Viewport = {
  themeColor: "#09090b",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="de" className="h-full antialiased">
      <body className="min-h-full font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
