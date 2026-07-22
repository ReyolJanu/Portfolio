"use client";

import Link from "next/link";
import { useState } from "react";
import { StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { FiArrowUpRight } from "react-icons/fi";
import type { Project } from "@/lib/types";

type Filter = "all" | "ui-ux" | "development";

const filterLabels: Record<Filter, string> = {
  all: "All",
  "ui-ux": "UI/UX",
  development: "Software",
};

const categoryMeta: Record<"ui-ux" | "development", { label: string; color: string }> = {
  "ui-ux": { label: "UI/UX Design", color: "var(--color-primary)" },
  development: { label: "Software Engineering", color: "#0EA5E9" },
};

interface WorkClientProps {
  projects: Project[];
}

export function WorkClient({ projects }: WorkClientProps) {
  const [active, setActive] = useState<Filter>("all");

  const filtered =
    active === "all" ? projects : projects.filter((p) => p.category === active);

  const count = (f: Filter) =>
    f === "all" ? projects.length : projects.filter((p) => p.category === f).length;

  return (
    <>
      {/* Filters */}
      <div className="mb-8 flex flex-wrap items-center gap-2">
        {(["all", "ui-ux", "development"] as Filter[]).map((f) => {
          const isActive = active === f;
          return (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-150 ${
                isActive
                  ? "bg-[#212121] text-white"
                  : "bg-[#F4F4F5] text-[#71717A] hover:bg-[#E4E4E7] hover:text-[#212121]"
              }`}
            >
              {filterLabels[f]}
              <span className={`mono text-xs ${isActive ? "text-white/50" : "text-[#A1A1AA]"}`}>
                {count(f)}
              </span>
            </button>
          );
        })}
      </div>

      {/* Project index */}
      <StaggerContainer className="overflow-hidden rounded-2xl border border-[#E4E4E7]">
        {filtered.map((project, i) => {
          const meta =
            categoryMeta[project.category as "ui-ux" | "development"] ??
            categoryMeta.development;

          return (
            <StaggerItem key={project.slug}>
              <Link
                href={`/work/${project.slug}`}
                className="group relative flex flex-col gap-4 border-b border-[#E4E4E7] px-6 py-6 transition-colors last:border-b-0 hover:bg-[#F9F9FB] md:flex-row md:items-center md:gap-8 md:px-8 md:py-7"
              >
                {/* Index number */}
                <span className="mono text-sm text-[#D4D4D8] shrink-0 md:w-8">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Main content */}
                <div className="min-w-0 flex-1">
                  <div className="mb-2 flex flex-wrap items-center gap-2.5">
                    <span
                      className="h-2 w-2 shrink-0 rounded-full"
                      style={{ background: meta.color }}
                    />
                    <span className="mono text-xs font-medium" style={{ color: meta.color }}>
                      {meta.label}
                    </span>
                    <span className="mono text-xs text-[#A1A1AA]">· {project.year}</span>
                  </div>

                  <h2 className="h3 text-[#212121] transition-colors group-hover:text-primary">
                    {project.title}
                  </h2>

                  <p className="mt-1.5 max-w-[580px] text-sm leading-relaxed text-[#A1A1AA] line-clamp-2">
                    {project.description}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="mono rounded-md border border-[#E4E4E7] px-2 py-0.5 text-[11px] text-[#A1A1AA]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                <span className="absolute right-6 top-6 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#E4E4E7] text-[#A1A1AA] transition-all duration-200 group-hover:border-primary group-hover:bg-primary group-hover:text-white md:static">
                  <FiArrowUpRight size={18} />
                </span>
              </Link>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </>
  );
}
