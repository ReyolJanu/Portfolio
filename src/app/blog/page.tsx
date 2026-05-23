import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { Badge } from "@/components/ui/Badge";
import { BorderedSection } from "@/components/ui/BorderedSection";
import { blogPosts } from "@/lib/data";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blog | Design & Engineering Writing",
  description:
    "Janukshan writes about UI/UX design, interface engineering, accessibility, Next.js, and building digital products. Practical insights from a working designer-developer.",
  keywords: [
    "UI/UX design blog", "design engineering articles", "interface design writing",
    "Next.js blog", "accessibility design", "design systems writing",
    "product design insights", "frontend development blog", "Janukshan blog",
  ],
  alternates: { canonical: "https://janukshan.dev/blog" },
  openGraph: {
    url: "https://janukshan.dev/blog",
    title: "Blog | Design & Engineering Writing — Janukshan",
    description: "Thoughts on UI/UX design, interface engineering, accessibility, and building digital products.",
    images: [{ url: "/profilepng.png", width: 1200, height: 630, alt: "Janukshan Blog" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Design & Engineering Writing — Janukshan",
    description: "Thoughts on UI/UX design, interface engineering, and building digital products.",
    images: ["/profilepng.png"],
  },
};

export default function BlogPage() {
  const sorted = [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <>
      <BorderedSection topBorder={false} corners={false} className="pt-20 pb-12 md:pt-32 md:pb-16">
        <Container>
          <FadeIn>
            <span className="mono text-[#A1A1AA] text-xs mb-5 block">Blog</span>
            <h1 className="h1 text-[#212121] max-w-[560px]">Writing</h1>
            <p className="body-lg text-[#A1A1AA] mt-5 max-w-[440px]">
              Thoughts on design, engineering, and building things that work.
            </p>
          </FadeIn>
        </Container>
      </BorderedSection>

      <BorderedSection bottomBorder className="pb-24 md:pb-32">
        <Container>
          <StaggerContainer className="divide-y divide-[#E4E4E7] border-b border-[#E4E4E7]">
            {sorted.map((post) => (
              <StaggerItem key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col gap-3 py-8 hover:bg-[#F4F4F5]/40 px-2 -mx-2 rounded-lg transition-colors"
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="mono text-xs text-[#A1A1AA]">{formatDate(post.date)}</span>
                    <span className="mono text-xs text-[#A1A1AA]">·</span>
                    <span className="mono text-xs text-[#A1A1AA]">{post.readTime}</span>
                  </div>
                  <h2 className="h3 text-[#212121] group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-base text-[#A1A1AA] leading-relaxed max-w-[580px]">
                    {post.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline">{tag}</Badge>
                    ))}
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </BorderedSection>
    </>
  );
}
