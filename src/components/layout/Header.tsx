"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header
      className={`relative sticky top-0 z-50 w-full bg-white transition-all duration-200 ${
        scrolled ? "border-b border-[#E4E4E7]" : "border-b border-transparent"
      }`}
    >
      {/* Bottom-corner accent marks at header/content junction */}
      {scrolled && (
        <>
          <span aria-hidden className="pointer-events-none absolute -bottom-px -left-px block h-3 w-3 border-b-2 border-l-2 border-primary" />
          <span aria-hidden className="pointer-events-none absolute -bottom-px -right-px block h-3 w-3 border-b-2 border-r-2 border-primary" />
        </>
      )}
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 md:px-12">
        {/* Logo */}
        <Link
          href="/"
          className="font-semibold text-[#212121] tracking-tight text-[15px] hover:opacity-70 transition-opacity"
        >
          Janukshan
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => {
            const active = pathname === href || pathname.startsWith(href + "/");
            return (
              <Link
                key={href}
                href={href}
                className={`body-sm link-underline transition-colors ${
                  active ? "text-[#212121]" : "text-[#A1A1AA] hover:text-[#212121]"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-hover focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            Get in touch
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-[#F4F4F5] transition-colors"
        >
          <span
            className={`block h-px w-5 bg-[#212121] transition-all duration-200 ${
              menuOpen ? "translate-y-px rotate-45" : "-translate-y-1"
            }`}
          />
          <span
            className={`block h-px w-5 bg-[#212121] transition-all duration-200 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-px w-5 bg-[#212121] transition-all duration-200 ${
              menuOpen ? "-translate-y-px -rotate-45" : "translate-y-1"
            }`}
          />
        </button>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 top-16 z-40 bg-white"
          >
            <nav
              aria-label="Mobile navigation"
              className="flex flex-col px-6 pt-8 pb-12 gap-1"
            >
              {navLinks.map(({ href, label }, i) => {
                const active = pathname === href || pathname.startsWith(href + "/");
                return (
                  <motion.div
                    key={href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.2 }}
                  >
                    <Link
                      href={href}
                      className={`block py-3 text-2xl font-semibold tracking-tight transition-colors ${
                        active ? "text-primary" : "text-[#212121]"
                      }`}
                    >
                      {label}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05, duration: 0.2 }}
                className="mt-6"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-lg bg-primary px-6 py-3 text-base font-medium text-white"
                >
                  Get in touch
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
