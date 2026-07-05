import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { BorderedSection } from "@/components/ui/BorderedSection";
import { services } from "@/lib/data";
import { FiArrowRight } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Services | UI/UX Design & Interface Engineering",
  description:
    "Freelance services by Janukshan — UI/UX design, design engineering, component library development, and brand identity. Available for project-based and retainer work.",
  keywords: [
    "freelance UI/UX design services", "design engineering services", "interface development",
    "Figma design", "React component library", "design system services",
    "brand identity design", "Next.js development", "hire UI/UX designer Sri Lanka",
  ],
  alternates: { canonical: "https://janukshan.dev/services" },
  openGraph: {
    url: "https://janukshan.dev/services",
    title: "Services | UI/UX Design & Interface Engineering — Janukshan",
    description: "Freelance UI/UX design, design engineering, and brand identity services. Available for project-based work.",
    images: [{ url: "/profilepng.png", width: 1200, height: 630, alt: "Janukshan — Design Services" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | UI/UX Design & Interface Engineering — Janukshan",
    description: "Freelance UI/UX design, design engineering, and brand identity services.",
    images: ["/profilepng.png"],
  },
};

const process = [
  {
    step: "01",
    title: "Discovery",
    body: "We start with a conversation. I want to understand your users, your constraints, and what success looks like, before a single pixel is placed.",
  },
  {
    step: "02",
    title: "Definition",
    body: "I map out the problem space: information architecture, user flows, and the key decisions that will shape the product. We align before moving forward.",
  },
  {
    step: "03",
    title: "Design",
    body: "From low-fidelity wireframes to pixel-perfect UI, I move through fidelity levels deliberately, testing assumptions at each stage.",
  },
  {
    step: "04",
    title: "Delivery",
    body: "Developer-ready Figma files, component documentation, and, where engaged, production code. I stay available through implementation.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────────── */}
      <BorderedSection topBorder={false} corners={false} className="pt-20 pb-16 md:pt-32 md:pb-24">
        <Container>
          <FadeIn>
            <span className="mono text-[#A1A1AA] text-xs mb-5 block">Services</span>
            <h1 className="h1 text-[#212121] max-w-[640px]">
              Design and engineering,<br className="hidden md:block" /> end to end.
            </h1>
            <p className="body-lg text-[#A1A1AA] mt-6 max-w-[520px]">
              I work with startups and growing teams who need both strong design
              thinking and the technical ability to execute it.
            </p>
          </FadeIn>
        </Container>
      </BorderedSection>

      {/* ─── Services Grid ────────────────────────────────────── */}
      <BorderedSection className="py-16 md:py-24">
        <Container>
          <StaggerContainer className="grid gap-4 md:grid-cols-2">
            {services.map((service) => (
              <StaggerItem key={service.id}>
                <div className="rounded-xl border border-[#E4E4E7] p-8 hover:border-[#A1A1AA] hover:bg-[#F4F4F5]/40 transition-all duration-200">
                  <h2 className="h3 text-[#212121] mb-3">{service.title}</h2>
                  <p className="text-base text-[#A1A1AA] leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-[#A1A1AA]">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6A48FF]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </BorderedSection>

      {/* ─── Process ──────────────────────────────────────────── */}
      <BorderedSection className="py-16 md:py-24">
        <Container>
          <FadeIn>
            <span className="mono text-[#A1A1AA] text-xs mb-3 block">How it works</span>
            <h2 className="h2 text-[#212121] mb-12">My process</h2>
          </FadeIn>

          <div className="space-y-0">
            {process.map((step, i) => (
              <FadeIn key={step.step} delay={i * 0.07}>
                <div className="flex gap-8 py-8 border-b border-[#E4E4E7] last:border-0">
                  <span className="mono text-[#E4E4E7] text-2xl font-medium w-10 shrink-0 pt-0.5">
                    {step.step}
                  </span>
                  <div>
                    <h3 className="h3 text-[#212121] mb-2">{step.title}</h3>
                    <p className="text-base text-[#A1A1AA] leading-relaxed max-w-[520px]">
                      {step.body}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </BorderedSection>

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <BorderedSection bottomBorder className="py-16 md:py-24">
        <Container>
          <FadeIn>
            <div className="rounded-xl border border-[#E4E4E7] bg-[#212121] px-8 py-14 text-center md:px-16 md:py-20">
              <span className="mono text-[#A1A1AA] text-xs mb-4 block">Ready when you are</span>
              <h2 className="h2 text-white mb-5">Let&apos;s build something together</h2>
              <p className="body-lg text-[#A1A1AA] mb-10 max-w-[420px] mx-auto">
                Tell me about your project and I&apos;ll get back to you within 24 hours.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-medium text-[#212121] transition-colors hover:bg-[#F4F4F5]"
              >
                Start a conversation <FiArrowRight />
              </Link>
            </div>
          </FadeIn>
        </Container>
      </BorderedSection>
    </>
  );
}
