"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { profile } from "@/data/portfolio";
import { PageLabel, Reveal } from "@/components/ui/shared";

export default function ContactCta() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const channels = [
    {
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
      icon: <Mail size={16} />,
    },
    {
      label: "Phone",
      value: profile.phone,
      href: `tel:${profile.phoneHref}`,
      icon: <Phone size={16} />,
    },
    {
      label: "WhatsApp",
      value: "Chat on WhatsApp",
      href: `https://wa.me/${profile.whatsapp}`,
      icon: <MessageCircle size={16} />,
    },
    {
      label: "Location",
      value: profile.location,
      href: undefined,
      icon: <MapPin size={16} />,
    },
  ];

  return (
    <section
      id="contact-cta"
      className="relative w-full bg-[#161616] text-[#FEF8E8] py-24 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      <div className="absolute -bottom-32 -left-24 w-[420px] h-[420px] rounded-full bg-[#F44A22]/25 blur-[130px] pointer-events-none" />

      <div className="relative max-w-6xl w-full mx-auto">
        <PageLabel className="mb-10">CONTACT</PageLabel>

        <Reveal>
          <div className="flex flex-col gap-4">
            <span className="font-mono text-[11px] tracking-[0.3em] text-[#F44A22] font-bold">
              07 / GET IN TOUCH
            </span>
            <h2 className="font-oswald font-black uppercase text-4xl md:text-6xl lg:text-7xl leading-[0.85] tracking-tighter text-[#FEF8E8]">
              Let&apos;s Build
              <br />
              Something Solid
            </h2>
            <p className="font-jakarta font-light text-sm md:text-base leading-relaxed text-[#FEF8E8]/70 max-w-2xl">
              Available for senior engineering, technical lead and full-stack
              product engagements — enterprise platforms, cloud systems, AI
              applications and backend architecture.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {channels.map((channel, index) => {
            const content = (
              <>
                <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-[#F44A22]">
                  {channel.icon}
                  {channel.label}
                </span>
                <span className="font-jakarta text-[13px] md:text-sm text-[#FEF8E8]/90 break-all leading-snug">
                  {channel.value}
                </span>
              </>
            );

            return (
              <Reveal key={channel.label} delay={index * 0.05}>
                {channel.href ? (
                  <a
                    href={channel.href}
                    target={channel.href.startsWith("http") ? "_blank" : undefined}
                    rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="h-full flex flex-col gap-3 rounded-3xl border-2 border-[#FEF8E8]/15 bg-white/[0.03] p-6 hover:border-[#F44A22] hover:bg-white/[0.06] transition-all duration-300"
                  >
                    {content}
                  </a>
                ) : (
                  <div className="h-full flex flex-col gap-3 rounded-3xl border-2 border-[#FEF8E8]/15 bg-white/[0.03] p-6">
                    {content}
                  </div>
                )}
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={handleCopyEmail}
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-[#F44A22] text-[#FEF8E8] px-7 py-4 font-jakarta font-bold text-xs tracking-widest uppercase border-2 border-[#F44A22] hover:bg-[#FEF8E8] hover:text-[#161616] hover:border-[#161616] transition-all duration-300 active:scale-95"
            >
              {copied ? <Check size={16} /> : <Mail size={16} />}
              {copied ? "Copied To Clipboard" : "Copy Email Address"}
            </button>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 rounded-full border-2 border-[#FEF8E8]/30 text-[#FEF8E8] px-7 py-4 font-jakarta font-bold text-xs tracking-widest uppercase hover:border-[#F44A22] hover:text-[#F44A22] transition-all duration-300 active:scale-95"
            >
              Open Contact Page
            </Link>
          </div>
        </Reveal>
      </div>

      <div className="relative max-w-6xl w-full mx-auto mt-16 pt-6 border-t border-[#FEF8E8]/10 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-widest text-[#FEF8E8]/45">
        <span>© 2026 {profile.name}. All rights reserved.</span>
        <span>{profile.headline}</span>
      </div>
    </section>
  );
}
