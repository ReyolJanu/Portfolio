import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { BorderedSection } from "@/components/ui/BorderedSection";
import { ContactClient } from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch to discuss your project. I'm available for freelance UI/UX design and interface engineering work.",
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
