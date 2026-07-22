import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { StaggeredMenu } from "@/components/layout/StaggeredMenu";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://janukshan.dev"),
  title: {
    default: "Janukshan | UI/UX Designer & Software Engineer",
    template: "%s | Janukshan",
  },
  description:
    "Janukshan is a UI/UX designer and software engineer based in Sri Lanka, designing clean, intuitive interfaces and building the full-stack systems behind them with Figma, Next.js, React, Node.js, and Python.",
  keywords: [
    "UI/UX designer Sri Lanka",
    "software engineer Sri Lanka",
    "full-stack developer",
    "Figma designer",
    "Next.js developer",
    "React developer",
    "Node.js developer",
    "Python developer",
    "design engineering",
    "product design",
    "design systems",
    "Janukshan",
    "portfolio",
    "web development",
    "Tailwind CSS",
    "TypeScript developer",
  ],
  authors: [{ name: "Janukshan", url: "https://janukshan.dev" }],
  creator: "Janukshan",
  publisher: "Janukshan",
  category: "Design & Technology",
  alternates: {
    canonical: "https://janukshan.dev",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://janukshan.dev",
    siteName: "Janukshan",
    title: "Janukshan | UI/UX Designer & Software Engineer",
    description:
      "UI/UX designer and software engineer based in Sri Lanka. Designing clean interfaces and building the full-stack systems behind them with Figma, Next.js, React, Node.js, and Python.",
    images: [
      {
        url: "/profilepng.png",
        width: 1200,
        height: 630,
        alt: "Janukshan — UI/UX Designer & Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@janukshan",
    creator: "@janukshan",
    title: "Janukshan | UI/UX Designer & Software Engineer",
    description:
      "UI/UX designer and software engineer based in Sri Lanka. Designing clean interfaces and building the full-stack systems behind them.",
    images: ["/profilepng.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        {/* ── Bordered column — Dodo Payments style rails ── */}
        <div className="relative mx-auto max-w-[1400px] border-x border-[#E4E4E7] bg-white">
          <StaggeredMenu />
          <main id="main-content">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
