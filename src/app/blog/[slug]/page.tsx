import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Badge } from "@/components/ui/Badge";
import { BorderedSection } from "@/components/ui/BorderedSection";
import { blogPosts } from "@/lib/data";
import { formatDate } from "@/lib/utils";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

function renderMarkdown(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="h2 text-[#212121] mt-10 mb-4">{line.slice(3)}</h2>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="h3 text-[#212121] mt-8 mb-3">{line.slice(4)}</h3>
      );
    } else if (line.startsWith("```")) {
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].startsWith("```")) {
        codeLines.push(lines[i]);
        i++;
      }
      elements.push(
        <pre key={i} className="mono my-6 overflow-x-auto rounded-xl border border-[#E4E4E7] bg-[#212121] p-5 text-xs text-[#F4F4F5] leading-relaxed">
          <code>{codeLines.join("\n")}</code>
        </pre>
      );
    } else if (line.trim() === "") {
      elements.push(<div key={i} className="h-3" />);
    } else {
      elements.push(
        <p key={i} className="text-base text-[#A1A1AA] leading-[1.8]">{line}</p>
      );
    }
    i++;
  }
  return elements;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <article>
      <BorderedSection topBorder={false} corners={false} className="pt-20 pb-10 md:pt-32 md:pb-14">
        <Container>
          <FadeIn>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 mono text-xs text-[#A1A1AA] hover:text-[#212121] transition-colors mb-8"
            >
              ← Back to blog
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="mono text-xs text-[#A1A1AA]">{formatDate(post.date)}</span>
              <span className="mono text-xs text-[#A1A1AA]">·</span>
              <span className="mono text-xs text-[#A1A1AA]">{post.readTime}</span>
            </div>

            <h1 className="h1 text-[#212121] max-w-[720px] mb-5">{post.title}</h1>
            <p className="body-lg text-[#A1A1AA] max-w-[560px] mb-6">{post.description}</p>

            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline">{tag}</Badge>
              ))}
            </div>
          </FadeIn>
        </Container>
      </BorderedSection>

      <BorderedSection className="py-10 md:py-14">
        <Container>
          <FadeIn delay={0.1}>
            <div className="max-w-[680px] space-y-2">
              {renderMarkdown(post.content)}
            </div>
          </FadeIn>
        </Container>
      </BorderedSection>

      <BorderedSection bottomBorder className="py-16 md:py-24">
        <Container>
          <FadeIn>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="h2 text-[#212121]">Enjoyed this post?</h2>
                <p className="text-base text-[#A1A1AA] mt-2">See more of my work or get in touch.</p>
              </div>
              <div className="flex gap-3 shrink-0">
                <Link
                  href="/blog"
                  className="inline-flex items-center rounded-lg border border-[#E4E4E7] px-4 py-2.5 text-sm font-medium text-[#212121] hover:border-[#A1A1AA] hover:bg-[#F4F4F5] transition-colors"
                >
                  More posts
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-lg bg-[#6A48FF] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#5538EE] transition-colors"
                >
                  Get in touch
                </Link>
              </div>
            </div>
          </FadeIn>
        </Container>
      </BorderedSection>
    </article>
  );
}
