import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { Badge } from "@/components/ui/Badge";
import { BorderedSection } from "@/components/ui/BorderedSection";
import { FiArrowRight } from "react-icons/fi";

export const metadata: Metadata = {
  title: "About Janukshan | UI/UX Designer & Interface Engineer",
  description:
    "Learn about Janukshan — a freelance UI/UX designer and interface engineer based in Sri Lanka with expertise in Figma, Next.js, React, and design systems. Available for freelance projects.",
  keywords: [
    "about Janukshan", "UI/UX designer background", "freelance designer Sri Lanka",
    "design engineer", "Figma expert", "Next.js developer", "product designer",
    "design systems", "interface engineer", "frontend developer Sri Lanka",
  ],
  alternates: { canonical: "https://janukshan.dev/about" },
  openGraph: {
    url: "https://janukshan.dev/about",
    title: "About Janukshan | UI/UX Designer & Interface Engineer",
    description: "Freelance UI/UX designer and interface engineer based in Sri Lanka. Figma, Next.js, React, and design systems.",
    images: [{ url: "/profilepng.png", width: 1200, height: 630, alt: "Janukshan — UI/UX Designer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Janukshan | UI/UX Designer & Interface Engineer",
    description: "Freelance UI/UX designer and interface engineer based in Sri Lanka.",
    images: ["/profilepng.png"],
  },
};

const designTools = ["Figma", "Adobe XD", "Adobe Illustrator", "Canva", "Framer"];
const devStack = [
  "Next.js", "React", "TypeScript", "Tailwind CSS",
  "Framer Motion", "Node.js", "MongoDB", "PostgreSQL", "Firebase",
];

const values = [
  {
    title: "Clarity over complexity",
    body: "Good design isn't about adding things, it's about removing everything that doesn't need to be there. I always ask: can this be simpler?",
  },
  {
    title: "Shipped is better than perfect",
    body: "I value momentum. A polished product that reaches users beats a perfect prototype that never ships.",
  },
  {
    title: "Design is a technical discipline",
    body: "Understanding how interfaces are built changes how you design them. Knowing the constraints makes the designs better, not worse.",
  },
  {
    title: "Systems thinking",
    body: "Individual screens are symptoms. I design the system, the components, tokens, and rules, that makes every screen coherent.",
  },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Janukshan",
            url: "https://janukshan.dev",
            jobTitle: "UI/UX Designer & Interface Engineer",
            description: "Freelance UI/UX designer and interface engineer based in Sri Lanka.",
            sameAs: [
              "https://github.com/ReyolJanu",
              "https://linkedin.com/in/janukshan",
              "https://dribbble.com/janukshan",
            ],
          }),
        }}
      />

      {/* ─── Hero ─────────────────────────────────────────────── */}
      <BorderedSection topBorder={false} corners={false} className="pt-20 pb-16 md:pt-32 md:pb-24">
        <Container>
          <FadeIn>
            <span className="mono text-[#A1A1AA] text-xs mb-5 block">About</span>
            <h1 className="h1 text-[#212121] max-w-[680px]">
              Designer who builds.<br />Builder who designs.
            </h1>
            <p className="body-lg text-[#A1A1AA] mt-6 max-w-[540px]">
              I&apos;m Janukshan, a freelance UI/UX designer and interface engineer based in
              Sri Lanka. I work at the intersection of design and code.
            </p>
          </FadeIn>
        </Container>
      </BorderedSection>

      {/* ─── Bio ──────────────────────────────────────────────── */}
      <BorderedSection className="py-16 md:py-24">
        <Container>
          <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:items-start">
            <FadeIn direction="left">
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-[#E4E4E7] bg-[#F4F4F5] md:sticky md:top-24">
                <Image
                  src="/profilepng.png"
                  alt="Janukshan"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 480px"
                  priority
                />
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.1}>
              <div className="space-y-5">
                <p className="text-base text-[#212121] leading-relaxed">
                  I started designing because I was frustrated with interfaces that felt
                  unintuitive. I learned to code because I wanted to build the things I
                  was designing, exactly as I designed them.
                </p>
                <p className="text-base text-[#A1A1AA] leading-relaxed">
                  Today I work across the full design-to-development lifecycle. I take
                  projects from early concepts through research, wireframes, high-fidelity
                  UI, and into production code. That end-to-end ownership means fewer
                  handoff problems and tighter final products.
                </p>
                <p className="text-base text-[#A1A1AA] leading-relaxed">
                  My work spans e-commerce, marketplaces, SaaS tools, and brand identity.
                  I&apos;m most energised by projects with real constraints, a complex
                  workflow to simplify, a brand to express through a digital product, or
                  a technical challenge that requires design to solve it.
                </p>
                <p className="text-base text-[#A1A1AA] leading-relaxed">
                  Outside of client work, I think and write about accessible design,
                  design systems, and the craft of interface engineering.
                </p>

                <div className="pt-4 flex flex-wrap gap-3">
                  <Link
                    href="/work"
                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-hover transition-colors"
                  >
                    View my work
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center rounded-lg border border-[#E4E4E7] px-5 py-2.5 text-sm font-medium text-[#212121] hover:border-[#A1A1AA] hover:bg-[#F4F4F5] transition-colors"
                  >
                    Get in touch
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </BorderedSection>

      {/* ─── Skills ───────────────────────────────────────────── */}
      <BorderedSection className="py-16 md:py-24">
        <Container>
          <FadeIn>
            <span className="mono text-[#A1A1AA] text-xs mb-8 block">Skills & tools</span>
          </FadeIn>
          <div className="grid gap-10 md:grid-cols-2">
            <FadeIn delay={0.05}>
              <div>
                <h3 className="h3 text-[#212121] mb-5">Design</h3>
                <div className="flex flex-wrap gap-2">
                  {designTools.map((tool) => (
                    <Badge key={tool} variant="default" className="text-sm py-1 px-3">{tool}</Badge>
                  ))}
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div>
                <h3 className="h3 text-[#212121] mb-5">Development</h3>
                <div className="flex flex-wrap gap-2">
                  {devStack.map((tech) => (
                    <Badge key={tech} variant="default" className="text-sm py-1 px-3">{tech}</Badge>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </BorderedSection>

      {/* ─── Values ───────────────────────────────────────────── */}
      <BorderedSection className="py-16 md:py-24">
        <Container>
          <FadeIn>
            <span className="mono text-[#A1A1AA] text-xs mb-3 block">How I work</span>
            <h2 className="h2 text-[#212121] mb-12 max-w-[480px]">
              Principles that guide every project
            </h2>
          </FadeIn>

          <StaggerContainer className="grid gap-4 sm:grid-cols-2">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="rounded-xl border border-[#E4E4E7] p-6 hover:border-[#A1A1AA] transition-colors">
                  <h3 className="h3 text-[#212121] mb-3">{v.title}</h3>
                  <p className="text-sm text-[#A1A1AA] leading-relaxed">{v.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </BorderedSection>

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <BorderedSection bottomBorder className="py-16 md:py-24">
        <Container>
          <FadeIn>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="h2 text-[#212121]">Ready to work together?</h2>
                <p className="text-base text-[#A1A1AA] mt-2">
                  I&apos;m available for freelance projects. Let&apos;s talk.
                </p>
              </div>
              <Link
                href="/contact"
                className="shrink-0 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-white hover:bg-primary-hover transition-colors"
              >
                Get in touch <FiArrowRight />
              </Link>
            </div>
          </FadeIn>
        </Container>
      </BorderedSection>
    </>
  );
}
