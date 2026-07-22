import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { Badge } from "@/components/ui/Badge";
import { BorderedSection } from "@/components/ui/BorderedSection";
import { FiArrowRight } from "react-icons/fi";

export const metadata: Metadata = {
  title: "About Janukshan | UI/UX Designer & Software Engineer",
  description:
    "Learn about Janukshan — a UI/UX designer and software engineer based in Sri Lanka with experience across Figma, Next.js, React, Node.js, Python, and PostgreSQL. Open to software engineering roles and freelance projects.",
  keywords: [
    "about Janukshan", "UI/UX designer background", "software engineer Sri Lanka",
    "full-stack developer", "Figma expert", "Next.js developer", "Node.js developer",
    "Python developer", "product designer", "design systems", "frontend developer Sri Lanka",
  ],
  alternates: { canonical: "https://janukshan.dev/about" },
  openGraph: {
    url: "https://janukshan.dev/about",
    title: "About Janukshan | UI/UX Designer & Software Engineer",
    description: "UI/UX designer and software engineer based in Sri Lanka. Figma, Next.js, React, Node.js, Python, and PostgreSQL.",
    images: [{ url: "/profilepng.png", width: 1200, height: 630, alt: "Janukshan — UI/UX Designer & Software Engineer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Janukshan | UI/UX Designer & Software Engineer",
    description: "UI/UX designer and software engineer based in Sri Lanka.",
    images: ["/profilepng.png"],
  },
};

const skillGroups: { title: string; items: string[] }[] = [
  { title: "Design & UI/UX", items: ["Figma", "Adobe XD", "Adobe Illustrator", "Canva", "Framer", "Design Systems"] },
  { title: "Languages", items: ["TypeScript", "JavaScript", "Python", "Java", "PHP", "SQL"] },
  { title: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Bootstrap"] },
  { title: "Backend & Data", items: ["Node.js", "Express.js", "REST APIs", "PostgreSQL", "MongoDB", "Supabase", "Firebase"] },
  { title: "Cloud & Tools", items: ["Vercel", "Railway", "Cloudflare R2", "AWS", "Git / GitHub", "Postman"] },
  { title: "Integrations & AI", items: ["Stripe", "PayHere", "Google OAuth", "JWT", "PyTorch", "Hugging Face"] },
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
            jobTitle: "UI/UX Designer & Software Engineer",
            description: "UI/UX designer and software engineer based in Sri Lanka.",
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
              Designer who builds.<br />Engineer who designs.
            </h1>
            <p className="body-lg text-[#A1A1AA] mt-6 max-w-[540px]">
              I&apos;m Janukshan, a UI/UX designer and software engineer based in Sri Lanka.
              I work at the intersection of design and code — from the interface to the API.
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
                  was designing, exactly as I designed them — and I kept going until I
                  could ship the whole product, front to back.
                </p>
                <p className="text-base text-[#A1A1AA] leading-relaxed">
                  As a Product Engineer at Ascentis Technology (a France-based startup, remote),
                  I build features across the stack — from UI implementation to backend logic,
                  automated PDF and asset-generation pipelines in Python, and AI-assisted
                  development workflows. Alongside that I work as a freelance full-stack
                  developer, shipping MERN and Next.js applications for clients.
                </p>
                <p className="text-base text-[#A1A1AA] leading-relaxed">
                  My work spans e-commerce, marketplaces, deals platforms, and internal tooling.
                  I&apos;m most energised by projects with real constraints — a complex workflow
                  to simplify, an integration to get right, or ambiguous requirements to turn
                  into working software. Recent projects include Offeritz, a production deals
                  platform on a custom domain, and a bilingual voice-to-voice research system
                  built with deep learning.
                </p>
                <p className="text-base text-[#A1A1AA] leading-relaxed">
                  I&apos;m finishing a BSc (Hons) in Computer Science &amp; Technology at Uva
                  Wellassa University, and outside of work I think and write about accessible
                  design, design systems, and clean, maintainable code.
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
            <span className="mono text-[#A1A1AA] text-xs mb-3 block">Skills & tools</span>
            <h2 className="h2 text-[#212121] mb-10 max-w-[480px]">
              Design and engineering, across the stack
            </h2>
          </FadeIn>
          <StaggerContainer className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <StaggerItem key={group.title}>
                <h3 className="h3 text-[#212121] mb-4">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Badge key={item} variant="default" className="text-sm py-1 px-3">{item}</Badge>
                  ))}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
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
                  Open to software engineering roles and freelance projects. Let&apos;s talk.
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
