import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { existsSync } from "node:fs";
import path from "node:path";
import Providers from "./providers";
import Atmosphere from "@/components/ui/Atmosphere";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { profile, socialLinks } from "@/data/portfolio";
import "./globals.css";
import "./enhancements.css";

const sans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});
const mono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});
const title = "Akhilesh Patil — Software Engineer | React, Next.js, TypeScript";
export const metadata: Metadata = {
  metadataBase: new URL(profile.url),
  title: { default: title, template: "%s | Akhilesh Patil" },
  description: profile.description,
  alternates: { canonical: "/" },
  keywords: [
    "Software Engineer",
    "Frontend Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Full Stack Developer",
    "AI Product Engineering",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    type: "website",
    title,
    description: profile.description,
    url: "/",
    siteName: profile.name,
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: profile.description,
    images: ["/opengraph-image"],
  },
  robots: { index: true, follow: true },
};
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${profile.url}/#person`,
      name: profile.name,
      url: profile.url,
      jobTitle: profile.role,
      sameAs: socialLinks
        .filter((link) => !link.href.startsWith("mailto:"))
        .map((link) => link.href),
      knowsAbout: [
        "React",
        "Next.js",
        "TypeScript",
        "Frontend systems",
        "Full-stack development",
        "AI product engineering",
      ],
    },
    {
      "@type": "WebSite",
      url: profile.url,
      name: `${profile.name} — Engineering portfolio`,
      author: { "@id": `${profile.url}/#person` },
    },
  ],
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const hasResume = existsSync(
    path.join(process.cwd(), "public", "Akhilesh-Patil-Resume.pdf"),
  );
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sans.variable} ${mono.variable}`}>
        <Providers>
          <a className="skip-link" href="#main-content">
            Skip to content
          </a>
          <Navbar hasResume={hasResume} />
          {children}
          <Footer />
          <Atmosphere />
        </Providers>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
