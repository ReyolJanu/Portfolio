import { cn } from "@/lib/utils";
import { ReactNode, ElementType } from "react";

interface BorderedSectionProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  /** Show top border line (true for all except first hero section on some pages) */
  topBorder?: boolean;
  /** Show bottom border line (use on last section) */
  bottomBorder?: boolean;
  /** Show the L-shaped corner accent marks */
  corners?: boolean;
  /** Corner accent color */
  accent?: string;
}

/**
 * Wraps a section with Dodo-Payments-style bordered treatment:
 * – Top (and optionally bottom) border line
 * – L-shaped corner accent marks at the section junctions
 */
export function BorderedSection({
  children,
  className,
  as: Tag = "section",
  topBorder = true,
  bottomBorder = false,
  corners = true,
  accent = "var(--color-primary)",
}: BorderedSectionProps) {
  return (
    <Tag
      className={cn(
        "relative",
        topBorder && "border-t border-[#E4E4E7]",
        bottomBorder && "border-b border-[#E4E4E7]",
        className
      )}
    >
      {/* ── Corner accent marks ───────────────────────────── */}
      {corners && topBorder && (
        <>
          {/* Top-left */}
          <span
            aria-hidden
            className="pointer-events-none absolute -top-px -left-px block h-3 w-3"
            style={{ borderTop: `2px solid ${accent}`, borderLeft: `2px solid ${accent}` }}
          />
          {/* Top-right */}
          <span
            aria-hidden
            className="pointer-events-none absolute -top-px -right-px block h-3 w-3"
            style={{ borderTop: `2px solid ${accent}`, borderRight: `2px solid ${accent}` }}
          />
        </>
      )}
      {corners && bottomBorder && (
        <>
          {/* Bottom-left */}
          <span
            aria-hidden
            className="pointer-events-none absolute -bottom-px -left-px block h-3 w-3"
            style={{ borderBottom: `2px solid ${accent}`, borderLeft: `2px solid ${accent}` }}
          />
          {/* Bottom-right */}
          <span
            aria-hidden
            className="pointer-events-none absolute -bottom-px -right-px block h-3 w-3"
            style={{ borderBottom: `2px solid ${accent}`, borderRight: `2px solid ${accent}` }}
          />
        </>
      )}

      {children}
    </Tag>
  );
}
