import {
  SiFigma,
  SiFramer,
  SiAdobeillustrator,
  SiGithub,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiCanva,
} from "react-icons/si";
import Image from "next/image";
import type { IconType } from "react-icons";
import { FadeIn } from "@/components/ui/FadeIn";
import { Container } from "@/components/ui/Container";
import { BorderedSection } from "@/components/ui/BorderedSection";

interface Tool {
  name: string;
  Icon: IconType | null;
  logoSrc?: string;
  color: string;
  bg: string;
}

const tools: Tool[] = [
  { name: "Figma",        Icon: SiFigma,            color: "#F24E1E", bg: "#FFF5F2" },
  { name: "Framer",       Icon: SiFramer,           color: "#0055FF", bg: "#EEF2FF" },
  { name: "Illustrator",  Icon: SiAdobeillustrator, color: "#FF9A00", bg: "#FFF8EE" },
  { name: "Spline",       Icon: null, logoSrc: "/spline-logo.png", color: "#0D0D0D", bg: "#F4F4F5" },
  { name: "Canva",        Icon: SiCanva,            color: "#00C4CC", bg: "#F0FEFF" },
  { name: "Next.js",      Icon: SiNextdotjs,        color: "#000000", bg: "#F4F4F5" },
  { name: "React",        Icon: SiReact,            color: "#00D8FF", bg: "#F0FEFF" },
  { name: "Tailwind CSS", Icon: SiTailwindcss,      color: "#06B6D4", bg: "#F0FCFF" },
  { name: "TypeScript",   Icon: SiTypescript,       color: "#3178C6", bg: "#EEF4FF" },
  { name: "GitHub",       Icon: SiGithub,           color: "#24292F", bg: "#F4F4F5" },
  { name: "Node.js",      Icon: SiNodedotjs,        color: "#339933", bg: "#F0FCF0" },
];

// 4-column × 3-row grid — index 3 empty for visual rhythm, Spline at index 4
const grid: (Tool | null)[] = [
  tools[0], tools[1], tools[2], null,
  tools[3], tools[4], tools[5], tools[6],
  tools[7], tools[8], tools[9], tools[10],
];

export function ToolsStack() {
  return (
    <BorderedSection className="py-24 md:py-32">
      <Container>
        <div className="grid gap-16 md:grid-cols-2 md:items-center">

          {/* ── Left: headline ──────────────────────────────── */}
          <FadeIn direction="left">
            <div className="max-w-[420px]">
              <span className="mono text-[#A1A1AA] text-xs mb-5 block">Tools & stack</span>
              <h2 className="h2 text-[#212121] mb-5">
                The <span className="text-primary">tools & Techs</span> <br />I use on projects.
              </h2>
              <p className="text-base text-[#A1A1AA] leading-relaxed mb-6">
                I design in <span className="text-[#212121] font-medium">Figma</span>, prototype in <span className="text-[#212121] font-medium">Framer</span>, and build with <span className="text-[#212121] font-medium">Next.js</span>, <span className="text-[#212121] font-medium">React</span>, and <span className="text-[#212121] font-medium">Tailwind CSS</span>, covering the full journey from concept to shipped product.
              </p>
              <p className="text-sm text-[#A1A1AA] leading-relaxed">
                Every tool in the stack is chosen deliberately, to move fast, stay consistent, and hand off clean.
              </p>
            </div>
          </FadeIn>

          {/* ── Right: icon grid — bleeds past the right edge ── */}
          <FadeIn direction="right" delay={0.1}>
            <div
              className="relative"
              style={{
                WebkitMaskImage: "linear-gradient(to right, black 65%, transparent 100%)",
                maskImage: "linear-gradient(to right, black 65%, transparent 100%)",
              }}
            >
              <div
                className="grid grid-cols-4 gap-3"
                style={{ width: "calc(100% + 6rem)" }}
              >
                {grid.map((tool, i) => {
                  const duration = 2.8 + (i % 5) * 0.4;
                  const delay    = (i * 0.35) % 2.5;
                  return tool ? (
                    <div
                      key={tool.name}
                      title={tool.name}
                      className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-[#E4E4E7] p-3 aspect-square cursor-default"
                      style={{
                        background: tool.bg,
                        animation: `tool-float ${duration}s ease-in-out ${delay}s infinite`,
                      }}
                    >
                      {tool.logoSrc ? (
                        <Image src={tool.logoSrc} alt={tool.name} width={26} height={26} className="object-contain" />
                      ) : tool.Icon ? (
                        <tool.Icon size={26} color={tool.color} />
                      ) : null}
                      <span className="mono text-[9px] text-[#A1A1AA] leading-none text-center">
                        {tool.name}
                      </span>
                    </div>
                  ) : (
                    <div
                      key={`empty-${i}`}
                      className="aspect-square rounded-2xl border border-[#E4E4E7] bg-[#F4F4F5]"
                      style={{ animation: `tool-float ${2.8 + (i % 3) * 0.5}s ease-in-out ${(i * 0.4) % 2}s infinite` }}
                    />
                  );
                })}
              </div>
            </div>
          </FadeIn>

        </div>
      </Container>
    </BorderedSection>
  );
}
