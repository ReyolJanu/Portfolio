"use client";

import { useState } from "react";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { FiArrowRight } from "react-icons/fi";

const socialLinks = [
  { href: "https://github.com/ReyolJanu", label: "GitHub", handle: "@ReyolJanu" },
  { href: "https://linkedin.com/in/janukshan", label: "LinkedIn", handle: "in/janukshan" },
  { href: "https://dribbble.com/janukshan", label: "Dribbble", handle: "@janukshan" },
  { href: "https://x.com/janukshan", label: "X (Twitter)", handle: "@janukshan" },
];

export function ContactClient() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1000));
    setStatus("sent");
  }

  const inputClass =
    "w-full rounded-lg border border-[#E4E4E7] bg-white px-4 py-3 text-sm text-[#212121] placeholder:text-[#A1A1AA] transition-colors hover:border-[#A1A1AA] focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";

  return (
    <div className="grid gap-16 md:grid-cols-[1.4fr_1fr]">
      {/* Form */}
      <FadeIn>
        {status === "sent" ? (
          <div className="rounded-2xl border border-[#E4E4E7] p-10 text-center">
            <div className="mb-4 text-3xl text-primary">✓</div>
            <h2 className="h3 text-[#212121] mb-2">Message sent</h2>
            <p className="text-base text-[#A1A1AA]">
              Thanks for reaching out. I&apos;ll get back to you within 24 hours.
            </p>
            <button
              onClick={() => {
                setStatus("idle");
                setForm({ name: "", email: "", subject: "", message: "" });
              }}
              className="mt-6 text-sm font-medium text-primary hover:text-primary-hover transition-colors"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="body-sm text-[#212121] block mb-1.5">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="email" className="body-sm text-[#212121] block mb-1.5">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="body-sm text-[#212121] block mb-1.5">
                I need help with
              </label>
              <select
                id="subject"
                name="subject"
                required
                value={form.subject}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="" disabled>
                  Select a service…
                </option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="Design Engineering">Design Engineering</option>
                <option value="Design System">Design System</option>
                <option value="Brand Identity">Brand Identity</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="body-sm text-[#212121] block mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                placeholder="Tell me about your project…"
                value={form.message}
                onChange={handleChange}
                className={`${inputClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full rounded-lg bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-hover disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Sending…" : <><span>Send message</span> <FiArrowRight /></>}
            </button>
          </form>
        )}
      </FadeIn>

      {/* Sidebar */}
      <FadeIn delay={0.1}>
        <div className="space-y-10">
          <div>
            <h3 className="h3 text-[#212121] mb-2">Availability</h3>
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex h-2 w-2 rounded-full bg-primary" />
              <span className="text-sm text-[#212121] font-medium">Available for projects</span>
            </div>
            <p className="text-sm text-[#A1A1AA] leading-relaxed">
              I typically respond within 24 hours. For urgent projects, mention it in your message.
            </p>
          </div>

          <div>
            <h3 className="h3 text-[#212121] mb-4">Email directly</h3>
            <a
              href="mailto:janukshan@ascentis.tech"
              className="text-sm font-medium text-primary link-underline hover:text-primary-hover transition-colors"
            >
              janukshan@ascentis.tech
            </a>
          </div>

          <div>
            <h3 className="h3 text-[#212121] mb-4">Find me online</h3>
            <ul className="space-y-3">
              {socialLinks.map(({ href, label, handle }) => (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-sm text-[#A1A1AA] hover:text-[#212121] transition-colors group"
                  >
                    <span>{label}</span>
                    <span className="mono text-xs text-[#A1A1AA] group-hover:text-primary transition-colors">
                      {handle}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl bg-[#F4F4F5] p-5">
            <p className="text-sm text-[#A1A1AA] leading-relaxed">
              Not sure what you need?{" "}
              <Link
                href="/services"
                className="text-primary hover:text-primary-hover transition-colors"
              >
                Browse my services
              </Link>{" "}
              or just send a message and we&apos;ll figure it out together.
            </p>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
