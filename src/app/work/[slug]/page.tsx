import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { Badge } from "@/components/ui/Badge";
import { BorderedSection } from "@/components/ui/BorderedSection";
import { projects } from "@/lib/data";
import { FiArrowRight } from "react-icons/fi";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [{ url: project.coverImage }],
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: project.title,
            description: project.description,
            creator: { "@type": "Person", name: "Janukshan" },
            dateCreated: project.year,
            keywords: project.tags.join(", "),
          }),
        }}
      />

      {/* ─── Header ─────────────────────────────────────────── */}
      <BorderedSection topBorder={false} corners={false} className="pt-20 pb-10 md:pt-32 md:pb-14">
        <Container>
          <FadeIn>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 mono text-xs text-[#A1A1AA] hover:text-[#212121] transition-colors mb-8"
            >
              ← Back to work
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-5">
              <Badge variant="default">
                {project.category === "ui-ux" ? "UI/UX" : "Development"}
              </Badge>
              <span className="mono text-xs text-[#A1A1AA]">{project.year}</span>
              <span className="mono text-xs text-[#A1A1AA]">· {project.role}</span>
            </div>

            <h1 className="h1 text-[#212121] max-w-[720px] mb-5">{project.title}</h1>
            <p className="body-lg text-[#A1A1AA] max-w-[540px]">{project.description}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="outline">{tag}</Badge>
              ))}
            </div>
          </FadeIn>
        </Container>
      </BorderedSection>

      {/* ─── Cover image ────────────────────────────────────── */}
      <BorderedSection className="pb-16 md:pb-24">
        <Container>
          <FadeIn delay={0.1}>
            <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-[#E4E4E7] bg-[#F4F4F5]">
              <Image
                src={project.coverImage}
                alt={`${project.title}, cover`}
                fill
                className="object-cover"
                sizes="(max-width: 1200px) 100vw, 1200px"
                priority
              />
            </div>
          </FadeIn>
        </Container>
      </BorderedSection>

      {/* ─── Overview ───────────────────────────────────────── */}
      <BorderedSection className="py-16 md:py-24">
        <Container>
          <div className="grid gap-12 md:grid-cols-[2fr_1fr]">
            <FadeIn>
              <div className="space-y-6">
                <div>
                  <span className="mono text-[#A1A1AA] text-xs mb-3 block">Overview</span>
                  <h2 className="h2 text-[#212121] mb-4">The project</h2>
                  <p className="text-base text-[#A1A1AA] leading-relaxed">{project.overview}</p>
                </div>
                <div>
                  <h3 className="h3 text-[#212121] mb-3 mt-8">The challenge</h3>
                  <p className="text-base text-[#A1A1AA] leading-relaxed">{project.challenge}</p>
                </div>
                <div>
                  <h3 className="h3 text-[#212121] mb-3 mt-8">The solution</h3>
                  <p className="text-base text-[#A1A1AA] leading-relaxed">{project.solution}</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="space-y-6 md:pt-8">
                <div>
                  <span className="mono text-[#A1A1AA] text-xs mb-2 block">Year</span>
                  <p className="text-sm font-medium text-[#212121]">{project.year}</p>
                </div>
                <div>
                  <span className="mono text-[#A1A1AA] text-xs mb-2 block">Role</span>
                  <p className="text-sm font-medium text-[#212121]">{project.role}</p>
                </div>
                <div>
                  <span className="mono text-[#A1A1AA] text-xs mb-2 block">Stack</span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="default">{tag}</Badge>
                    ))}
                  </div>
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#6A48FF] hover:text-[#5538EE] transition-colors"
                  >
                    Visit project ↗
                  </a>
                )}
              </div>
            </FadeIn>
          </div>
        </Container>
      </BorderedSection>

      {/* ─── Gallery ────────────────────────────────────────── */}
      {project.images.length > 1 && (
        <BorderedSection className="py-16 md:py-24">
          <Container>
            <FadeIn>
              <span className="mono text-[#A1A1AA] text-xs mb-8 block">Project screens</span>
            </FadeIn>
            <StaggerContainer className="grid gap-4 sm:grid-cols-2">
              {project.images.slice(1).map((img, i) => (
                <StaggerItem key={img}>
                  <div className="relative aspect-video overflow-hidden rounded-xl border border-[#E4E4E7] bg-[#F4F4F5]">
                    <Image
                      src={img}
                      alt={`${project.title} screen ${i + 2}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 580px"
                    />
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </Container>
        </BorderedSection>
      )}

      {/* ─── Next Project ───────────────────────────────────── */}
      <BorderedSection bottomBorder className="py-16 md:py-24">
        <Container>
          <FadeIn>
            <span className="mono text-[#A1A1AA] text-xs mb-6 block">Next project</span>
            <Link
              href={`/work/${nextProject.slug}`}
              className="group flex flex-col gap-3 rounded-xl border border-[#E4E4E7] p-6 md:p-8 hover:border-[#A1A1AA] hover:bg-[#F4F4F5]/40 transition-all duration-200"
            >
              <Badge variant="default">
                {nextProject.category === "ui-ux" ? "UI/UX" : "Development"}
              </Badge>
              <h2 className="h2 text-[#212121] group-hover:text-[#6A48FF] transition-colors">
                {nextProject.title}
              </h2>
              <p className="text-base text-[#A1A1AA]">{nextProject.description}</p>
              <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-[#6A48FF]">View project <FiArrowRight /></span>
            </Link>
          </FadeIn>
        </Container>
      </BorderedSection>
    </>
  );
}
