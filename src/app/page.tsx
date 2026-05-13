import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { BorderedSection } from "@/components/ui/BorderedSection";
import { ToolsStack } from "@/components/sections/ToolsStack";
import { LogoMarquee } from "@/components/sections/LogoMarquee";
import { ServicesAccordion } from "@/components/sections/ServicesAccordion";
import { projects, services } from "@/lib/data";
import { FiArrowRight } from "react-icons/fi";
import TrueFocus from "@/components/ui/TrueFocus";

export const metadata: Metadata = {
  title: "Janukshan, UI/UX Designer & Interface Engineer",
  description:
    "Freelance UI/UX designer and interface engineer crafting clean, intuitive digital products.",
};

export default function HomePage() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Janukshan",
            url: "https://janukshan.dev",
            jobTitle: "UI/UX Designer & Interface Engineer",
            description: "Freelance UI/UX designer and interface engineer.",
            sameAs: [
              "https://github.com/ReyolJanu",
              "https://linkedin.com/in/janukshan",
              "https://dribbble.com/janukshan",
            ],
          }),
        }}
      />

      {/* ─── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10">
          <div className="grid md:grid-cols-2 items-start md:mt-[50px]">

            {/* Left: text */}
            <div className="pt-20 pb-16 md:pt-24 md:pb-20 pr-0 md:pr-12">
              <FadeIn direction="up">
                <h1 className="h1 text-[#212121]">
                  Crafting <span className="text-[#6A48FF]">interfaces</span><br />
                  that feel inevitable.
                </h1>
              </FadeIn>

              <FadeIn direction="up" delay={0.08}>
                <div className="mt-8">
                  <TrueFocus
                    sentence="UIUX Designing|Development"
                    separator="|"
                    manualMode={false}
                    blurAmount={5}
                    borderColor="#6A48FF"
                    glowColor="rgba(106,72,255,0.6)"
                    animationDuration={0.5}
                    pauseBetweenAnimations={1.5}
                  />
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.16}>
                <p className="body-lg text-[#A1A1AA] mt-14 max-w-[460px]">
                  Freelance UI/UX designer and interface engineer. I turn complex
                  ideas into clean, intuitive digital products.
                </p>
              </FadeIn>

              <FadeIn direction="up" delay={0.22}>
                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-lg bg-[#6A48FF] px-6 py-3 text-sm font-semibold text-white hover:bg-[#5538EE] transition-colors"
                  >
                    Lets collaborate <FiArrowRight />
                  </Link>
                </div>
              </FadeIn>
            </div>

            {/* Right: profile with purple glow — frameless */}
            <FadeIn direction="up" delay={0.14}>
              <div className="relative flex items-end justify-center md:justify-end" style={{ minHeight: "520px" }}>
                {/* Purple radial glow */}
                <div
                  className="absolute pointer-events-none"
                  style={{
                    top: "10%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "500px",
                    height: "500px",
                    background:
                      "radial-gradient(circle, rgba(106,72,255,0.24) 0%, rgba(106,72,255,0.08) 50%, transparent 72%)",
                    borderRadius: "50%",
                    filter: "blur(10px)",
                  }}
                />
                {/* Profile — fills height, no frame */}
                <Image
                  src="/profilepng.png"
                  alt="Janukshan, UI/UX Designer & Interface Engineer"
                  width={560}
                  height={700}
                  className="relative z-10 w-full max-w-[520px] object-contain object-bottom select-none"
                  style={{ maxHeight: "580px" }}
                  priority
                />
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* ─── Logo Marquee ─────────────────────────────────────── */}
      <LogoMarquee />

      {/* ─── Featured Work — Dodo-style vertical feature list ── */}
      <BorderedSection className="py-24 md:py-32">
        <Container>
          <FadeIn>
            <div className="mb-4 text-center">
              <h2 className="h2 text-[#212121]"><span className="text-[#6A48FF]">Selected</span> work</h2>
              <p className="body-lg text-[#A1A1AA] mt-3 max-w-[480px] mx-auto">
                From design systems to full-stack products, here&apos;s a look at recent projects.
              </p>
            </div>
          </FadeIn>

          {/* Project list container */}
          <FadeIn delay={0.1}>
            <div className="mt-10 flex flex-col gap-8">
              {featuredProjects.map((project) => {
                const isUiUx = project.category === "ui-ux";
                const accentColor = isUiUx ? "#6A48FF" : "#0EA5E9";
                const accentBg = isUiUx ? "rgba(106,72,255,0.08)" : "rgba(14,165,233,0.08)";
                return (
                  <Link
                    key={project.slug}
                    href={`/work/${project.slug}`}
                    className="group flex flex-col md:flex-row items-stretch min-h-[300px] md:min-h-[320px] overflow-hidden rounded-2xl border border-[#E4E4E7] bg-white transition-all duration-200 hover:border-[#A1A1AA] hover:shadow-[0_4px_20px_rgba(0,0,0,0.05)]"
                  >
                    {/* ── Left: text ──────────────────────────────── */}
                    <div className="flex flex-col justify-center gap-5 px-8 py-10 md:w-[42%] md:px-10 md:py-12">
                      {/* Category badge with colored icon */}
                      <div className="flex items-center gap-2.5">
                        <span
                          className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-md"
                          style={{ background: accentBg }}
                        >
                          <span
                            className="block h-2.5 w-2.5 rounded-sm"
                            style={{ background: accentColor }}
                          />
                        </span>
                        <span className="mono text-xs font-medium" style={{ color: accentColor }}>
                          {isUiUx ? "UI/UX Design" : "Development"}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="h2 text-[#212121] leading-tight">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-[#A1A1AA] leading-relaxed max-w-[320px]">
                        {project.description}
                      </p>

                      {/* CTA */}
                      <span
                        className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium link-underline transition-colors"
                        style={{ color: accentColor }}
                      >
                        View case study <FiArrowRight />
                      </span>
                    </div>

                    {/* ── Right: screenshot ────────────────────────── */}
                    <div className="relative flex-1 overflow-hidden border-t border-[#E4E4E7] bg-[#F4F4F5] md:border-t-0 md:border-l min-h-[240px]">
                      <Image
                        src={project.coverImage}
                        alt={project.title}
                        fill
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                        sizes="(max-width: 768px) 100vw, 700px"
                      />
                    </div>
                  </Link>
                );
              })}
            </div>
          </FadeIn>

          {/* Footer link */}
          <FadeIn delay={0.15}>
            <div className="mt-6 flex justify-end">
              <Link
                href="/work"
                className="relative inline-flex items-center gap-2 border border-dashed border-[#6A48FF] px-6 py-2.5 text-sm font-bold text-[#6A48FF] transition-colors hover:bg-[#6A48FF]/5"
              >
                <span aria-hidden className="absolute -top-[3px] -left-[3px] block h-[6px] w-[6px] bg-[#6A48FF]" />
                <span aria-hidden className="absolute -top-[3px] -right-[3px] block h-[6px] w-[6px] bg-[#6A48FF]" />
                <span aria-hidden className="absolute -bottom-[3px] -left-[3px] block h-[6px] w-[6px] bg-[#6A48FF]" />
                <span aria-hidden className="absolute -bottom-[3px] -right-[3px] block h-[6px] w-[6px] bg-[#6A48FF]" />
                See all projects <FiArrowRight />
              </Link>
            </div>
          </FadeIn>
        </Container>
      </BorderedSection>

      {/* ─── About Teaser ─────────────────────────────────────── */}
      <BorderedSection className="py-24 md:py-32">
        <Container>
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <FadeIn direction="left">
              <div className="relative aspect-[3/4] max-w-[400px] overflow-hidden rounded-xl border border-[#E4E4E7] bg-[#F4F4F5]">
                <Image
                  src="/profilepng.png"
                  alt="Janukshan, UI/UX Designer & Interface Engineer"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.1}>
              <div>
                <span className="mono text-[#A1A1AA] text-xs mb-4 block">About me</span>
                <h2 className="h2 text-[#212121] mb-5">
                  I <span className="text-[#6A48FF]">design and build</span> digital products.
                </h2>
                <p className="body-lg text-[#A1A1AA] mb-6">
                  I&apos;m a freelance UI/UX designer and interface engineer based in Sri Lanka.
                  I work across the full design-to-development lifecycle, from early concepts
                  to polished, production-ready interfaces.
                </p>
                <p className="text-base text-[#A1A1AA] mb-8">
                  My background spans product design, design systems, and front-end
                  engineering. The best interfaces feel inevitable, like they couldn&apos;t
                  have been built any other way.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#6A48FF] link-underline hover:text-[#5538EE] transition-colors"
                >
                  More about me <FiArrowRight />
                </Link>
              </div>
            </FadeIn>
          </div>
        </Container>
      </BorderedSection>

      {/* ─── Tools & Stack ───────────────────────────────────── */}
      <ToolsStack />

      {/* ─── Services ─────────────────────────────────────────── */}
      <BorderedSection className="py-24 md:py-32">
        <Container>
          <FadeIn>
            <div className="mb-12 text-center">
              <h2 className="h2 text-[#212121]"><span className="text-[#6A48FF]">What</span> I do</h2>
              <p className="body-lg text-[#A1A1AA] mt-3 max-w-[480px] mx-auto">
                From wireframes to shipped product, here&apos;s how I help bring ideas to life.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <ServicesAccordion services={services} />
          </FadeIn>
        </Container>
      </BorderedSection>

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <BorderedSection bottomBorder className="py-24 md:py-32">
        <Container>
          <FadeIn>
            <div className="rounded-xl border border-[#E4E4E7] bg-[#212121] px-8 py-14 text-center md:px-16 md:py-20">
              <span className="mono text-[#A1A1AA] text-xs mb-4 block">Let&apos;s collaborate</span>
              <h2 className="h2 text-white mb-5">Have a project in mind?</h2>
              <p className="body-lg text-[#A1A1AA] mb-10 max-w-[480px] mx-auto">
                I&apos;m currently available for freelance work. Let&apos;s talk about your next project.
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
