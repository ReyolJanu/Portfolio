import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { BorderedSection } from "@/components/ui/BorderedSection";
import { FiArrowRight } from "react-icons/fi";

export default function NotFound() {
  return (
    <BorderedSection
      topBorder={false}
      corners={false}
      bottomBorder
      className="flex min-h-[70vh] items-center py-32"
    >
      <Container>
        <div className="max-w-[480px]">
          <span className="mono text-[#A1A1AA] text-xs mb-5 block">404</span>
          <h1 className="h1 text-[#212121] mb-5">Page not found</h1>
          <p className="body-lg text-[#A1A1AA] mb-10">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-lg bg-[#6A48FF] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#5538EE] transition-colors"
            >
              Go home <FiArrowRight />
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center rounded-lg border border-[#E4E4E7] px-5 py-2.5 text-sm font-medium text-[#212121] hover:border-[#A1A1AA] hover:bg-[#F4F4F5] transition-colors"
            >
              View my work
            </Link>
          </div>
        </div>
      </Container>
    </BorderedSection>
  );
}
