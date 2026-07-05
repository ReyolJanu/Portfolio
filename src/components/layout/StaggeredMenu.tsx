"use client";

import React, { useCallback, useLayoutEffect, useRef, useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";

const menuItems = [
  { label: "Work",     ariaLabel: "View my work",    link: "/work" },
  { label: "About",   ariaLabel: "About me",         link: "/about" },
  { label: "Services",ariaLabel: "View services",    link: "/services" },
  { label: "Blog",    ariaLabel: "Read my blog",     link: "/blog" },
  { label: "Contact", ariaLabel: "Get in touch",     link: "/contact" },
];

const socialItems = [
  { label: "GitHub",   link: "https://github.com/ReyolJanu" },
  { label: "LinkedIn", link: "https://linkedin.com/in/janukshan" },
  { label: "Dribbble", link: "https://dribbble.com/janukshan" },
];

export function StaggeredMenu() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const openRef = useRef(false);

  const panelRef       = useRef<HTMLDivElement | null>(null);
  const preLayersRef   = useRef<HTMLDivElement | null>(null);
  const preLayerElsRef = useRef<HTMLElement[]>([]);

  const plusHRef    = useRef<HTMLSpanElement | null>(null);
  const plusVRef    = useRef<HTMLSpanElement | null>(null);
  const iconRef     = useRef<HTMLSpanElement | null>(null);
  const textInnerRef= useRef<HTMLSpanElement | null>(null);
  const [textLines, setTextLines] = useState<string[]>(["Menu", "Close"]);

  const openTlRef           = useRef<gsap.core.Timeline | null>(null);
  const closeTweenRef       = useRef<gsap.core.Tween | null>(null);
  const spinTweenRef        = useRef<gsap.core.Timeline | null>(null);
  const textCycleAnimRef    = useRef<gsap.core.Tween | null>(null);
  const colorTweenRef       = useRef<gsap.core.Tween | null>(null);
  const toggleBtnRef        = useRef<HTMLButtonElement | null>(null);
  const busyRef             = useRef(false);
  const itemEntranceTweenRef= useRef<gsap.core.Tween | null>(null);

  // Close on route change
  useEffect(() => {
    if (openRef.current) closeMenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const panel      = panelRef.current;
      const preContainer = preLayersRef.current;
      const plusH      = plusHRef.current;
      const plusV      = plusVRef.current;
      const icon       = iconRef.current;
      const textInner  = textInnerRef.current;
      if (!panel || !plusH || !plusV || !icon || !textInner) return;

      let preLayers: HTMLElement[] = [];
      if (preContainer) {
        preLayers = Array.from(preContainer.querySelectorAll(".sm-prelayer")) as HTMLElement[];
      }
      preLayerElsRef.current = preLayers;

      gsap.set([panel, ...preLayers], { xPercent: 100, opacity: 1 });
      if (preContainer) gsap.set(preContainer, { xPercent: 0, opacity: 1 });

      gsap.set(plusH, { transformOrigin: "50% 50%", rotate: 0 });
      gsap.set(plusV, { transformOrigin: "50% 50%", rotate: 90 });
      gsap.set(icon,  { rotate: 0, transformOrigin: "50% 50%" });
      gsap.set(textInner, { yPercent: 0 });
      if (toggleBtnRef.current) gsap.set(toggleBtnRef.current, { color: "#212121" });
    });
    return () => ctx.revert();
  }, []);

  const buildOpenTimeline = useCallback(() => {
    const panel  = panelRef.current;
    const layers = preLayerElsRef.current;
    if (!panel) return null;

    openTlRef.current?.kill();
    closeTweenRef.current?.kill();
    closeTweenRef.current = null;
    itemEntranceTweenRef.current?.kill();

    const itemEls    = Array.from(panel.querySelectorAll(".sm-panel-itemLabel")) as HTMLElement[];
    const numberEls  = Array.from(panel.querySelectorAll('.sm-panel-list[data-numbering] .sm-panel-item')) as HTMLElement[];
    const socialTitle= panel.querySelector(".sm-socials-title") as HTMLElement | null;
    const socialLinks= Array.from(panel.querySelectorAll(".sm-socials-link")) as HTMLElement[];

    if (itemEls.length)   gsap.set(itemEls,   { yPercent: 140, rotate: 10 });
    if (numberEls.length) gsap.set(numberEls, { ["--sm-num-opacity" as string]: 0 });
    if (socialTitle)      gsap.set(socialTitle,  { opacity: 0 });
    if (socialLinks.length) gsap.set(socialLinks,{ y: 25, opacity: 0 });

    const tl = gsap.timeline({ paused: true });

    layers.forEach((el, i) => {
      tl.fromTo(el, { xPercent: 100 }, { xPercent: 0, duration: 0.5, ease: "power4.out" }, i * 0.07);
    });

    const lastTime      = layers.length ? (layers.length - 1) * 0.07 : 0;
    const panelInsert   = lastTime + (layers.length ? 0.08 : 0);
    const panelDuration = 0.65;

    tl.fromTo(panel, { xPercent: 100 }, { xPercent: 0, duration: panelDuration, ease: "power4.out" }, panelInsert);

    if (itemEls.length) {
      const itemsStart = panelInsert + panelDuration * 0.15;
      tl.to(itemEls, { yPercent: 0, rotate: 0, duration: 1, ease: "power4.out", stagger: { each: 0.1 } }, itemsStart);
      if (numberEls.length) {
        tl.to(numberEls, { duration: 0.6, ease: "power2.out", ["--sm-num-opacity" as string]: 1, stagger: { each: 0.08 } }, itemsStart + 0.1);
      }
    }

    const socialsStart = panelInsert + panelDuration * 0.4;
    if (socialTitle)      tl.to(socialTitle,  { opacity: 1, duration: 0.5, ease: "power2.out" }, socialsStart);
    if (socialLinks.length) {
      tl.to(socialLinks, { y: 0, opacity: 1, duration: 0.55, ease: "power3.out", stagger: { each: 0.08 } }, socialsStart + 0.04);
    }

    openTlRef.current = tl;
    return tl;
  }, []);

  const playOpen = useCallback(() => {
    if (busyRef.current) return;
    busyRef.current = true;
    const tl = buildOpenTimeline();
    if (tl) {
      tl.eventCallback("onComplete", () => { busyRef.current = false; });
      tl.play(0);
    } else {
      busyRef.current = false;
    }
  }, [buildOpenTimeline]);

  const playClose = useCallback(() => {
    openTlRef.current?.kill();
    openTlRef.current = null;
    itemEntranceTweenRef.current?.kill();
    const panel  = panelRef.current;
    const layers = preLayerElsRef.current;
    if (!panel) return;

    closeTweenRef.current?.kill();
    closeTweenRef.current = gsap.to([...layers, panel], {
      xPercent: 100,
      duration: 0.32,
      ease: "power3.in",
      overwrite: "auto",
      onComplete: () => {
        const els = Array.from(panel.querySelectorAll(".sm-panel-itemLabel")) as HTMLElement[];
        if (els.length) gsap.set(els, { yPercent: 140, rotate: 10 });
        const nums = Array.from(panel.querySelectorAll('.sm-panel-list[data-numbering] .sm-panel-item')) as HTMLElement[];
        if (nums.length) gsap.set(nums, { ["--sm-num-opacity" as string]: 0 });
        const st  = panel.querySelector(".sm-socials-title") as HTMLElement | null;
        const sl  = Array.from(panel.querySelectorAll(".sm-socials-link")) as HTMLElement[];
        if (st) gsap.set(st, { opacity: 0 });
        if (sl.length) gsap.set(sl, { y: 25, opacity: 0 });
        busyRef.current = false;
      },
    });
  }, []);

  const animateIcon = useCallback((opening: boolean) => {
    const icon = iconRef.current;
    const h    = plusHRef.current;
    const v    = plusVRef.current;
    if (!icon || !h || !v) return;
    spinTweenRef.current?.kill();
    if (opening) {
      gsap.set(icon, { rotate: 0 });
      spinTweenRef.current = gsap.timeline({ defaults: { ease: "power4.out" } })
        .to(h, { rotate: 45,  duration: 0.5 }, 0)
        .to(v, { rotate: -45, duration: 0.5 }, 0);
    } else {
      spinTweenRef.current = gsap.timeline({ defaults: { ease: "power3.inOut" } })
        .to(h, { rotate: 0,  duration: 0.35 }, 0)
        .to(v, { rotate: 90, duration: 0.35 }, 0);
    }
  }, []);

  const animateText = useCallback((opening: boolean) => {
    const inner = textInnerRef.current;
    if (!inner) return;
    textCycleAnimRef.current?.kill();
    const current = opening ? "Menu" : "Close";
    const target  = opening ? "Close" : "Menu";
    const cycles  = 3;
    const seq: string[] = [current];
    let last = current;
    for (let i = 0; i < cycles; i++) { last = last === "Menu" ? "Close" : "Menu"; seq.push(last); }
    if (last !== target) seq.push(target);
    seq.push(target);
    setTextLines(seq);
    gsap.set(inner, { yPercent: 0 });
    const finalShift = ((seq.length - 1) / seq.length) * 100;
    textCycleAnimRef.current = gsap.to(inner, { yPercent: -finalShift, duration: 0.5 + seq.length * 0.07, ease: "power4.out" });
  }, []);

  const closeMenu = useCallback(() => {
    if (!openRef.current) return;
    openRef.current = false;
    setOpen(false);
    playClose();
    animateIcon(false);
    animateText(false);
    colorTweenRef.current?.kill();
    if (toggleBtnRef.current) gsap.to(toggleBtnRef.current, { color: "#212121", duration: 0.3 });
    document.body.style.overflow = "";
  }, [playClose, animateIcon, animateText]);

  const toggleMenu = useCallback(() => {
    const target = !openRef.current;
    openRef.current = target;
    setOpen(target);
    if (target) {
      playOpen();
      document.body.style.overflow = "hidden";
      colorTweenRef.current?.kill();
      if (toggleBtnRef.current) gsap.to(toggleBtnRef.current, { color: "#212121", delay: 0.18, duration: 0.3 });
    } else {
      playClose();
      document.body.style.overflow = "";
      colorTweenRef.current?.kill();
      if (toggleBtnRef.current) gsap.to(toggleBtnRef.current, { color: "#212121", duration: 0.3 });
    }
    animateIcon(target);
    animateText(target);
  }, [playOpen, playClose, animateIcon, animateText]);

  // Close on click outside
  useEffect(() => {
    if (!open) return;
    const handle = (e: MouseEvent) => {
      if (
        panelRef.current && !panelRef.current.contains(e.target as Node) &&
        toggleBtnRef.current && !toggleBtnRef.current.contains(e.target as Node)
      ) closeMenu();
    };
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, [open, closeMenu]);

  return (
    <>
      {/* Sticky top bar */}
      <header className={`sticky top-0 z-50 w-full bg-white transition-all duration-200 border-b ${open ? "border-[#E4E4E7]" : "border-transparent"}`}>
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 md:px-12">
          {/* Logo */}
          <Link href="/" className="font-semibold text-[#212121] tracking-tight text-[15px] hover:opacity-70 transition-opacity">
            Janukshan
          </Link>

          {/* Menu toggle */}
          <button
            ref={toggleBtnRef}
            onClick={toggleMenu}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="relative inline-flex items-center gap-2 bg-transparent border-0 cursor-pointer font-medium text-sm text-[#212121] leading-none"
            type="button"
          >
            <span className="relative inline-block h-[1em] overflow-hidden whitespace-nowrap" aria-hidden="true">
              <span ref={textInnerRef} className="flex flex-col leading-none">
                {textLines.map((l, i) => (
                  <span className="block h-[1em] leading-none" key={i}>{l}</span>
                ))}
              </span>
            </span>
            <span ref={iconRef} className="relative w-[14px] h-[14px] shrink-0 inline-flex items-center justify-center" aria-hidden="true">
              <span ref={plusHRef} className="absolute left-1/2 top-1/2 w-full h-[2px] bg-current rounded -translate-x-1/2 -translate-y-1/2" />
              <span ref={plusVRef} className="absolute left-1/2 top-1/2 w-full h-[2px] bg-current rounded -translate-x-1/2 -translate-y-1/2" />
            </span>
          </button>
        </div>
      </header>

      {/* Full-screen overlay */}
      <div className={`fixed inset-0 z-40 pointer-events-none ${open ? "pointer-events-auto" : ""}`} aria-hidden={!open}>
        {/* Prelayers */}
        <div ref={preLayersRef} className="absolute top-0 right-0 bottom-0 w-full pointer-events-none z-[5]">
          <div className="sm-prelayer absolute top-0 right-0 h-full w-full" style={{ background: "rgba(var(--color-primary-rgb), 0.1)", backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)" }} />
        </div>

        {/* Panel */}
        <aside
          ref={panelRef}
          className="absolute top-0 right-0 h-full bg-white flex flex-col overflow-y-auto z-10 pointer-events-auto"
          style={{ width: "clamp(280px, 40vw, 480px)", padding: "7rem 2.5rem 2.5rem" }}
          aria-hidden={!open}
        >
          <div className="flex-1 flex flex-col gap-6">
            {/* Nav items */}
            <ul className="sm-panel-list list-none m-0 p-0 flex flex-col gap-1" role="list" data-numbering>
              {menuItems.map((item, idx) => (
                <li className="relative overflow-hidden leading-none" key={item.label}>
                  <Link
                    href={item.link}
                    aria-label={item.ariaLabel}
                    data-index={idx + 1}
                    className="sm-panel-item relative text-[#212121] font-semibold cursor-pointer leading-none uppercase transition-colors duration-150 inline-block no-underline pr-[1.4em] hover:text-primary"
                    style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-1px" }}
                  >
                    <span className="sm-panel-itemLabel inline-block" style={{ transformOrigin: "50% 100%" }}>
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Socials */}
            <div className="sm-socials mt-auto pt-8 flex flex-col gap-3">
              <h3 className="sm-socials-title m-0 text-sm font-medium" style={{ color: "var(--color-primary)" }}>Socials</h3>
              <ul className="list-none m-0 p-0 flex flex-row items-center gap-5 flex-wrap" role="list">
                {socialItems.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sm-socials-link text-base font-medium text-[#212121] no-underline hover:text-primary transition-colors"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
      </div>

      <style>{`
        .sm-panel-list[data-numbering] { counter-reset: smItem; }
        .sm-panel-list[data-numbering] .sm-panel-item::after {
          counter-increment: smItem;
          content: counter(smItem, decimal-leading-zero);
          position: absolute;
          top: 0.15em;
          right: 0.2em;
          font-size: 14px;
          font-weight: 400;
          color: var(--color-primary);
          letter-spacing: 0;
          pointer-events: none;
          user-select: none;
          opacity: var(--sm-num-opacity, 0);
        }
      `}</style>
    </>
  );
}
