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
    default: "Janukshan, UI/UX Designer & Interface Engineer",
    template: "%s, Janukshan",
  },
  description:
    "Freelance UI/UX designer and interface engineer crafting clean, intuitive, and technically precise digital products.",
  keywords: ["UI/UX design", "interface engineering", "Figma", "Next.js", "React", "freelance designer"],
  authors: [{ name: "Janukshan" }],
  creator: "Janukshan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://janukshan.dev",
    siteName: "Janukshan",
    title: "Janukshan, UI/UX Designer & Interface Engineer",
    description:
      "Freelance UI/UX designer and interface engineer crafting clean, intuitive, and technically precise digital products.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Janukshan, UI/UX Designer & Interface Engineer",
    description:
      "Freelance UI/UX designer and interface engineer crafting clean, intuitive, and technically precise digital products.",
    creator: "@janukshan",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
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
