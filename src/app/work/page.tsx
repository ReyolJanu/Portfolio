import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { BorderedSection } from "@/components/ui/BorderedSection";
import { WorkClient } from "./WorkClient";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Work & Projects | UI/UX Design Case Studies",
  description:
    "UI/UX design and development case studies by Janukshan — e-commerce UI, marketplace platforms, food delivery apps, and design systems. See how I solve real product problems.",
  keywords: [
    "UI/UX design case studies", "design portfolio", "product design work",
    "e-commerce UI design", "marketplace design", "design systems portfolio",
    "Next.js projects", "React projects", "interface engineering portfolio", "Janukshan projects",
  ],
  alternates: { canonical: "https://janukshan.dev/work" },
  openGraph: {
    url: "https://janukshan.dev/work",
    title: "Work & Projects | UI/UX Design Case Studies — Janukshan",
    description: "UI/UX design and development case studies — e-commerce UI, marketplace platforms, and design systems.",
    images: [{ url: "/UIUX/E-Commerce/Product Page.jpg", width: 1200, height: 630, alt: "Janukshan — Design Work" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Work & Projects | UI/UX Design Case Studies — Janukshan",
    description: "UI/UX design and development case studies by Janukshan.",
    images: ["/UIUX/E-Commerce/Product Page.jpg"],
  },
};

export default function WorkPage() {
  return (
    <>
      <BorderedSection topBorder={false} corners={false} className="pt-10 pb-10 md:pt-14 md:pb-14 bg-[#333333]">
        <Container>
          <FadeIn>
            <span className="mono text-[#A1A1AA] text-xs mb-5 block">Work</span>
            <h1 className="h1 text-white max-w-[600px]">Projects &amp; case studies</h1>
            <p className="body-lg text-[#A1A1AA] mt-5 max-w-[480px]">
              A selection of UI/UX design and full-stack development projects.
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
