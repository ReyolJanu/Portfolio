import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { BorderedSection } from "@/components/ui/BorderedSection";
import { ContactClient } from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact | Hire Janukshan — Freelance UI/UX Designer",
  description:
    "Get in touch with Janukshan to discuss your project. Available for freelance UI/UX design, interface engineering, and design system work. Based in Sri Lanka, working globally.",
  keywords: [
    "hire UI/UX designer", "freelance designer contact", "contact Janukshan",
    "hire interface engineer", "freelance Next.js developer", "design project inquiry",
    "UI/UX design quote", "hire freelance designer Sri Lanka",
  ],
  alternates: { canonical: "https://janukshan.dev/contact" },
  openGraph: {
    url: "https://janukshan.dev/contact",
    title: "Contact Janukshan | Freelance UI/UX Designer & Interface Engineer",
    description: "Available for freelance UI/UX design and interface engineering projects. Get in touch to start a conversation.",
    images: [{ url: "/profilepng.png", width: 1200, height: 630, alt: "Contact Janukshan" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Janukshan | Freelance UI/UX Designer",
    description: "Available for freelance UI/UX design and interface engineering projects.",
    images: ["/profilepng.png"],
  },
};

export default function ContactPage() {
  return (
    <>
      <BorderedSection topBorder={false} corners={false} className="pt-20 pb-12 md:pt-32 md:pb-16">
        <Container>
          <FadeIn>
            <span className="mono text-[#A1A1AA] text-xs mb-5 block">Contact</span>
            <h1 className="h1 text-[#212121] max-w-[580px]">Let&apos;s work together</h1>
            <p className="body-lg text-[#A1A1AA] mt-5 max-w-[480px]">
              I&apos;m available for freelance projects and select collaborations.
              Fill in the form or reach out directly.
            </p>
          </FadeIn>
        </Container>
      </BorderedSection>

      <BorderedSection bottomBorder className="pt-16 pb-24 md:pt-24 md:pb-32">
        <Container>
          <ContactClient />
        </Container>
      </BorderedSection>
    </>
  );
}
