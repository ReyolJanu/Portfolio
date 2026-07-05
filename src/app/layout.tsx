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
    default: "Janukshan | UI/UX Designer & Interface Engineer",
    template: "%s | Janukshan",
  },
  description:
    "Janukshan is a freelance UI/UX designer and interface engineer based in Sri Lanka, crafting clean, intuitive, and technically precise digital products using Figma, Next.js, and React.",
  keywords: [
    "UI/UX designer Sri Lanka",
    "freelance interface engineer",
    "Figma designer",
    "Next.js developer",
    "React developer",
    "design engineering",
    "product design",
    "design systems",
    "frontend developer",
    "Janukshan",
    "portfolio",
    "web design",
    "mobile UI design",
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
    title: "Janukshan | UI/UX Designer & Interface Engineer",
    description:
      "Freelance UI/UX designer and interface engineer based in Sri Lanka. Crafting clean, intuitive digital products with Figma, Next.js, and React.",
    images: [
      {
        url: "/profilepng.png",
        width: 1200,
        height: 630,
        alt: "Janukshan — UI/UX Designer & Interface Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@janukshan",
    creator: "@janukshan",
    title: "Janukshan | UI/UX Designer & Interface Engineer",
    description:
      "Freelance UI/UX designer and interface engineer based in Sri Lanka. Crafting clean, intuitive digital products.",
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
