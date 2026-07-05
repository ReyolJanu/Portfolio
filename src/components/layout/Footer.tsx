"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { FiGithub, FiLinkedin, FiFacebook, FiInstagram } from "react-icons/fi";
import type { IconType } from "react-icons";

const socialLinks: { href: string; label: string; Icon: IconType }[] = [
  { href: "https://github.com/ReyolJanu", label: "GitHub", Icon: FiGithub },
  { href: "https://linkedin.com/in/janukshan", label: "LinkedIn", Icon: FiLinkedin },
  { href: "https://facebook.com/janukshan", label: "Facebook", Icon: FiFacebook },
  { href: "https://instagram.com/janukshan", label: "Instagram", Icon: FiInstagram },
];

const footerLinks = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-[#E4E4E7] bg-white">
      <Container>
        <div className="py-12 md:py-16">
          <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
            {/* Brand */}
            <div className="flex flex-col gap-3">
              <Link
                href="/"
                className="font-semibold text-[#212121] tracking-tight text-[15px] hover:opacity-70 transition-opacity"
              >
                Janukshan
              </Link>
              <p className="text-sm text-[#A1A1AA] max-w-[220px]">
                UI/UX designer & interface engineer. Available for freelance work.
              </p>
            </div>

            {/* Nav + Social */}
            <div className="flex flex-col gap-8 sm:flex-row sm:gap-16">
              <div>
                <p className="body-sm text-[#212121] mb-4">Pages</p>
                <ul className="flex flex-col gap-2.5">
                  {footerLinks.map(({ href, label }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className="text-sm text-[#A1A1AA] link-underline hover:text-[#212121] transition-colors"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="body-sm text-[#212121] mb-4">Social</p>
                <ul className="flex flex-col gap-2.5">
                  {socialLinks.map(({ href, label, Icon }) => (
                    <li key={href}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-[#A1A1AA] link-underline hover:text-[#212121] transition-colors"
                      >
                        <Icon size={14} />
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 flex flex-col gap-3 border-t border-[#E4E4E7] pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-[#A1A1AA]">
              © {new Date().getFullYear()} Janukshan. All rights reserved.
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-sm text-[#A1A1AA] link-underline hover:text-[#212121] transition-colors w-fit"
            >
              Back to top ↑
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
}
