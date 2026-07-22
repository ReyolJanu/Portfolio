import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { BorderedSection } from "@/components/ui/BorderedSection";
import { WorkClient } from "./WorkClient";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Work & Projects | UI/UX Design & Full-Stack Case Studies",
  description:
    "UI/UX design and full-stack engineering case studies by Janukshan — the Offeritz deals platform, e-commerce UIs, marketplaces, and full-stack web apps. See how I solve real product problems.",
  keywords: [
    "UI/UX design case studies", "full-stack projects", "software engineering portfolio",
    "e-commerce UI design", "marketplace design", "Next.js projects", "Node.js projects",
    "React projects", "design systems portfolio", "Janukshan projects",
  ],
  alternates: { canonical: "https://janukshan.dev/work" },
  openGraph: {
    url: "https://janukshan.dev/work",
    title: "Work & Projects | UI/UX Design & Full-Stack Case Studies — Janukshan",
    description: "UI/UX design and full-stack engineering case studies — deals platforms, e-commerce UIs, marketplaces, and web apps.",
    images: [{ url: "/UIUX/E-Commerce/Product Page.jpg", width: 1200, height: 630, alt: "Janukshan — Design & Engineering Work" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Work & Projects | UI/UX Design & Full-Stack Case Studies — Janukshan",
    description: "UI/UX design and full-stack engineering case studies by Janukshan.",
    images: ["/UIUX/E-Commerce/Product Page.jpg"],
  },
};

export default function WorkPage() {
  return (
    <>
      <BorderedSection topBorder={false} corners={false} className="pt-20 pb-12 md:pt-32 md:pb-16">
        <Container>
          <FadeIn>
            <span className="mono text-[#A1A1AA] text-xs mb-5 block">Work</span>
            <h1 className="h1 text-[#212121] max-w-[640px]">Projects &amp; case studies</h1>
            <p className="body-lg text-[#A1A1AA] mt-5 max-w-[520px]">
              A selection of UI/UX design and full-stack engineering projects —
              from production platforms to interface systems.
            </p>
          </FadeIn>
        </Container>
      </BorderedSection>

      <BorderedSection bottomBorder className="pt-12 pb-24 md:pt-16 md:pb-32">
        <Container>
          <FadeIn delay={0.1}>
            <WorkClient projects={projects} />
          </FadeIn>
        </Container>
      </BorderedSection>
    </>
  );
}
