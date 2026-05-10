import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { BorderedSection } from "@/components/ui/BorderedSection";
import { WorkClient } from "./WorkClient";

export const metadata: Metadata = {
  title: "Work",
  description:
    "UI/UX design and full-stack development projects by Janukshan — case studies in product design, marketplaces, and interface engineering.",
};

export default function WorkPage() {
  return (
    <>
      <BorderedSection topBorder={false} corners={false} className="pt-20 pb-12 md:pt-32 md:pb-16">
        <Container>
          <FadeIn>
            <span className="mono text-[#A1A1AA] text-xs mb-5 block">Work</span>
            <h1 className="h1 text-[#212121] max-w-[600px]">Projects &amp; case studies</h1>
            <p className="body-lg text-[#A1A1AA] mt-5 max-w-[480px]">
              A selection of UI/UX design and full-stack development projects.
            </p>
          </FadeIn>
        </Container>
      </BorderedSection>

      <BorderedSection bottomBorder className="pb-24 md:pb-32">
        <Container>
          <FadeIn delay={0.1}>
            <WorkClient />
          </FadeIn>
        </Container>
      </BorderedSection>
    </>
  );
}
