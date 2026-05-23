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

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  const url = `https://janukshan.dev/work/${slug}`;
  return {
    title: `${project.title} | ${project.category === "ui-ux" ? "UI/UX Design" : "Development"} Case Study`,
    description: `${project.description} — A ${project.year} ${project.role} case study by Janukshan.`,
    keywords: [...project.tags, "case study", "UI/UX design", "Janukshan", project.role, project.year],
    authors: [{ name: "Janukshan", url: "https://janukshan.dev" }],
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: `${project.title} — Case Study by Janukshan`,
      description: project.description,
      images: [{ url: project.coverImage, width: 1200, height: 630, alt: project.title }],
      authors: ["Janukshan"],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — Case Study by Janukshan`,
      description: project.description,
      images: [project.coverImage],
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const allProjects = projects;

  const currentIndex = allProjects.findIndex((p) => p.slug === slug);
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

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
      <BorderedSection topBorder={false} corners={false} className="pt-10 pb-10 md:pt-14 md:pb-14 bg-[#333333]">
        <Container>
          <FadeIn>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 mono text-xs text-[#212121] bg-white px-3 py-1.5 rounded-lg hover:bg-white/90 transition-colors mb-8"
            >
              ← Back to work
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-5">
              <Badge variant="default" className="bg-white/10 text-white border-0">
                {project.category === "ui-ux" ? "UI/UX" : "Development"}
              </Badge>
              <span className="mono text-xs text-[#A1A1AA]">{project.year}</span>
              <span className="mono text-xs text-[#A1A1AA]">· {project.role}</span>
            </div>

            <h1 className="h1 text-white max-w-[720px] mb-5">{project.title}</h1>
            <p className="body-lg text-[#A1A1AA] max-w-[540px]">{project.description}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="border-white/20 text-[#A1A1AA]">{tag}</Badge>
              ))}
            </div>
          </FadeIn>
        </Container>
      </BorderedSection>

      {/* ─── Cover image ────────────────────────────────────── */}
      <BorderedSection className="pt-12 pb-16 md:pt-16 md:pb-24">
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
          <div className="grid gap-10 md:grid-cols-[1fr_320px]">

            {/* Left: content */}
            <FadeIn>
              <div className="space-y-5">
                {/* Overview */}
                <div className="rounded-2xl border border-[#E4E4E7] bg-white p-6 md:p-8">
                  <span className="mono text-[#A1A1AA] text-xs mb-2 block">Overview</span>
                  <h2 className="h2 text-[#212121] mb-3">The project</h2>
                  <p className="text-base text-[#52525B] leading-relaxed">{project.overview}</p>
                </div>

                {/* Challenge + Solution side by side on md */}
                <div className="grid gap-5 md:grid-cols-2">
                  <div className="rounded-2xl border border-[#E4E4E7] bg-white p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="flex h-6 w-6 items-center justify-center rounded-md bg-orange-50 text-orange-500 text-xs font-bold">!</span>
                      <h3 className="text-sm font-semibold text-[#212121]">The challenge</h3>
                    </div>
                    <p className="text-sm text-[#52525B] leading-relaxed">{project.challenge}</p>
                  </div>
                  <div className="rounded-2xl border border-[#E4E4E7] bg-white p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="flex h-6 w-6 items-center justify-center rounded-md bg-green-50 text-green-600 text-xs font-bold">✓</span>
                      <h3 className="text-sm font-semibold text-[#212121]">The solution</h3>
                    </div>
                    <p className="text-sm text-[#52525B] leading-relaxed">{project.solution}</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Right: meta card */}
            <FadeIn delay={0.1}>
              <div className="rounded-2xl border border-[#E4E4E7] bg-white p-6 divide-y divide-[#E4E4E7] md:sticky md:top-24">
                <div className="pb-4">
                  <span className="mono text-[#A1A1AA] text-xs mb-1 block">Year</span>
                  <p className="text-sm font-semibold text-[#212121]">{project.year}</p>
                </div>
                <div className="py-4">
                  <span className="mono text-[#A1A1AA] text-xs mb-1 block">Role</span>
                  <p className="text-sm font-semibold text-[#212121]">{project.role}</p>
                </div>
                <div className="pt-4">
                  <span className="mono text-[#A1A1AA] text-xs mb-3 block">Stack</span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="default">{tag}</Badge>
                    ))}
                  </div>
                </div>
                {project.link && (
                  <div className="pt-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#212121] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#333333] transition-colors"
                    >
                      Visit project ↗
                    </a>
                  </div>
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
              <h2 className="h2 text-[#212121] group-hover:text-primary transition-colors">
                {nextProject.title}
              </h2>
              <p className="text-base text-[#A1A1AA]">{nextProject.description}</p>
              <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-primary">View project <FiArrowRight /></span>
            </Link>
          </FadeIn>
        </Container>
      </BorderedSection>
    </>
  );
}
