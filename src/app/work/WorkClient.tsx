"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { Badge } from "@/components/ui/Badge";
import { projects } from "@/lib/data";

type Filter = "all" | "ui-ux" | "development";

const filterLabels: Record<Filter, string> = {
  all: "All",
  "ui-ux": "UI/UX",
  development: "Development",
};

export function WorkClient() {
  const [active, setActive] = useState<Filter>("all");

  const filtered =
    active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      {/* Filters */}
      <div className="flex items-center gap-2 mb-10 border-b border-[#E4E4E7]">
        {(["all", "ui-ux", "development"] as Filter[]).map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`relative pb-3 px-1 text-sm font-medium transition-colors ${
              active === f
                ? "text-[#212121] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-[#212121]"
                : "text-[#A1A1AA] hover:text-[#212121]"
            }`}
          >
            {filterLabels[f]}
          </button>
        ))}
      </div>

      <StaggerContainer className="grid gap-6 md:grid-cols-2">
        {filtered.map((project) => (
          <StaggerItem key={project.slug}>
            <Link
              href={`/work/${project.slug}`}
              className="group block overflow-hidden rounded-2xl border border-[#E4E4E7] bg-white transition-all duration-300 hover:border-[#A1A1AA] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
            >
              <div className="relative aspect-video overflow-hidden bg-[#F4F4F5]">
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="default">
                    {project.category === "ui-ux" ? "UI/UX" : "Development"}
                  </Badge>
                  <span className="mono text-xs text-[#A1A1AA]">{project.year}</span>
                </div>
                <h2 className="h3 text-[#212121] mb-2">{project.title}</h2>
                <p className="text-sm text-[#A1A1AA] leading-relaxed line-clamp-2">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 4).map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Link>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </>
  );
}
