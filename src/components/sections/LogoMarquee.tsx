"use client";

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
  SiExpress,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiSupabase,
} from "react-icons/si";
import type { IconType } from "react-icons";

interface Item {
  name: string;
  Icon: IconType;
}

const items: Item[] = [
  { name: "Figma",        Icon: SiFigma            },
  { name: "Framer",       Icon: SiFramer           },
  { name: "Illustrator",  Icon: SiAdobeillustrator },
  { name: "Canva",        Icon: SiCanva            },
  { name: "Next.js",      Icon: SiNextdotjs        },
  { name: "React",        Icon: SiReact            },
  { name: "Tailwind CSS", Icon: SiTailwindcss      },
  { name: "TypeScript",   Icon: SiTypescript       },
  { name: "Node.js",      Icon: SiNodedotjs        },
  { name: "Express",      Icon: SiExpress          },
  { name: "Python",       Icon: SiPython           },
  { name: "PostgreSQL",   Icon: SiPostgresql       },
  { name: "MongoDB",      Icon: SiMongodb          },
  { name: "Supabase",     Icon: SiSupabase         },
  { name: "GitHub",       Icon: SiGithub           },
];

const doubled = [...items, ...items];

export function LogoMarquee() {
  return (
    <div className="border-y border-[#E4E4E7] bg-white">
      <style>{`
        @keyframes logo-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .logo-marquee-track {
          display: flex;
          width: max-content;
          animation: logo-scroll 28s linear infinite;
          will-change: transform;
        }
      `}</style>

      <div className="flex items-stretch">

        {/* ── Left 40%: label ── */}
        <div
          className="relative z-10 shrink-0 flex items-center justify-left px-8 md:px-12 py-6 border-r border-[#E4E4E7] bg-white"
          style={{ width: "35%" }}
        >
          <p className="text-base md:text-lg font-bold text-[#212121] whitespace-nowrap">
            Tools &amp; tech I design and build with
          </p>
        </div>

        {/* ── Right 60%: scrolling icons ── */}
        <div className="relative overflow-hidden py-6" style={{ width: "65%" }}>
          {/* Fade left edge */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16"
            style={{ background: "linear-gradient(to right, #ffffff, transparent)" }}
          />
          {/* Fade right edge */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16"
            style={{ background: "linear-gradient(to left, #ffffff, transparent)" }}
          />

          <div className="logo-marquee-track">
            {doubled.map((item, i) => (
              <div
                key={i}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "0 2rem",
                  flexShrink: 0,
                }}
              >
                <item.Icon size={17} color="#212121" />
                <span style={{ fontSize: "13px", fontWeight: 500, color: "#212121", whiteSpace: "nowrap" }}>
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
