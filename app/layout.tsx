import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

// Update to the production domain before launch (or set NEXT_PUBLIC_SITE_URL).
const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ourbrio.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "OurBrio — Custom Website Design & Development Agency",
    template: "%s · OurBrio",
  },
  description:
    "Custom websites that convert. OurBrio designs and builds high-performance, conversion-focused sites from scratch — no templates, live in 2–4 weeks.",
  keywords: [
    "website design agency", "custom web development", "conversion-focused websites",
    "Next.js development", "small business website", "web design Canada", "OurBrio",
  ],
  authors: [{ name: "OurBrio Agency" }],
  creator: "OurBrio Agency",
  publisher: "OurBrio Agency",
  alternates: { canonical: "/" },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: SITE,
    siteName: "OurBrio",
    title: "OurBrio — Custom Website Design & Development Agency",
    description:
      "94% of first impressions are design-related. OurBrio builds custom, conversion-focused websites from scratch — live in 2–4 weeks.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "OurBrio — Custom Website Design & Development" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "OurBrio — Custom Website Design & Development Agency",
    description: "Custom, conversion-focused websites built from scratch. Live in 2–4 weeks.",
    images: ["/opengraph-image"],
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#0D0D0D",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "OurBrio",
  description:
    "Custom website design and development agency building conversion-focused sites from scratch.",
  url: SITE,
  email: "info@ourbrio.com",
  areaServed: ["CA", "US"],
  serviceType: ["Website Design", "Web Development", "Conversion Optimization"],
  address: { "@type": "PostalAddress", addressCountry: "CA", addressRegion: "Edmonton · Calgary · Toronto" },
  sameAs: [] as string[],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,700;1,900&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
