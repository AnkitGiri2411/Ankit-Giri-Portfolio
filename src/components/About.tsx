"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { profile, profileSummary, stats, coreCapabilities } from "@/data/portfolio";
import { Chip, PageLabel } from "@/components/ui/shared";

export default function About() {
  const containerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const block1Ref = useRef<HTMLDivElement>(null);
  const block2Ref = useRef<HTMLDivElement>(null);
  const block3Ref = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const capabilitiesRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ delay: 0.2 });

      tl.from(logoRef.current, {
        y: -20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })
        .from(
          titleRef.current,
          { y: 30, opacity: 0, duration: 0.8, ease: "power3.out" },
          "-=0.4"
        )
        .from(
          portraitRef.current,
          { scale: 0.95, opacity: 0, duration: 1.0, ease: "power3.out" },
          "-=0.6"
        )
        .from(
          [block1Ref.current, block2Ref.current, block3Ref.current],
          { y: 30, opacity: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" },
          "-=0.6"
        )
        .from(
          [statsRef.current, capabilitiesRef.current],
          { y: 30, opacity: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" },
          "-=0.5"
        );
    },
    { scope: containerRef }
  );

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative w-full min-h-screen bg-white text-[#161616] py-24 px-6 md:px-12 lg:px-20 flex flex-col items-center justify-center z-20 overflow-hidden font-jakarta"
    >
      <PageLabel className="absolute top-6 left-8 z-20">ABOUT</PageLabel>

      <div className="max-w-6xl w-full mx-auto mt-8 flex flex-col">
        {/* Giant Bold Oswald Title Block */}
        <div
          ref={titleRef}
          className="w-full relative select-none mb-8 md:mb-12 flex flex-col gap-3"
        >
          <h1 className="font-oswald font-black text-[10vw] md:text-[11vw] uppercase leading-[0.8] text-[#F44A22] tracking-tighter">
            {profile.firstName}
          </h1>
          <h1 className="font-oswald font-black text-[10vw] md:text-[11vw] uppercase leading-[0.8] text-[#F44A22] tracking-tighter">
            {profile.lastName}
          </h1>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full items-stretch">
          {/* Left Column: Text Blocks */}
          <div className="lg:col-span-7 flex flex-col gap-6 order-2 lg:order-1">
            {/* Block 1: Main Charcoal Card */}
            <div
              ref={block1Ref}
              className="bg-[#161616] text-[#FEF8E8] rounded-3xl p-8 md:p-10 border-4 border-[#161616] flex flex-col justify-between shadow-sm"
            >
              <div>
                <span className="font-mono text-[11px] tracking-[0.3em] text-[#F44A22] font-bold uppercase">
                  Professional Profile
                </span>
                <h2 className="font-oswald font-bold text-3xl md:text-4xl tracking-wide uppercase text-white mb-5 mt-3">
                  {profile.headline}
                </h2>
                <div className="flex flex-col gap-4">
                  {profileSummary.slice(0, 3).map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 24)}
                      className="font-jakarta font-light text-sm md:text-base leading-relaxed text-[#E4E2E3]/95"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 mt-7">
                {profile.roles.map((role) => (
                  <Chip key={role} tone="dark">
                    {role}
                  </Chip>
                ))}
              </div>

              <div
                className="text-3xl md:text-4xl transform -rotate-3 select-none text-[#FEF8E8]/90 self-end mt-4 cursor-default"
                style={{ fontFamily: "'RonthelBrush', cursive" }}
              >
                {profile.name}
              </div>
            </div>

            {/* Bottom Row Blocks */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Block 2: Orange Card */}
              <div
                ref={block2Ref}
                className="bg-[#F44A22] text-[#FEF8E8] rounded-3xl p-8 border-4 border-[#161616] flex flex-col justify-between min-h-[280px] hover:shadow-[0_12px_30px_rgba(244,74,34,0.15)] transition-shadow duration-300"
              >
                <div>
                  <h3 className="font-oswald font-black text-2xl md:text-3xl uppercase tracking-tighter mb-3 text-white">
                    OWNERSHIP, NOT ISOLATION.
                  </h3>
                  <div className="flex flex-col gap-3">
                    {profileSummary.slice(3, 5).map((paragraph) => (
                      <p
                        key={paragraph.slice(0, 24)}
                        className="font-jakarta font-light text-[13px] leading-relaxed text-[#FEF8E8]/95"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between items-center mt-6">
                  <span className="text-[10px] uppercase tracking-widest font-mono opacity-80">
                    Technical Leadership
                  </span>
                  <Link
                    href="/contact"
                    aria-label="Get in touch with Ankit Giri"
                    className="w-12 h-12 rounded-full bg-[#161616] hover:bg-[#FEF8E8] hover:text-[#161616] text-white flex items-center justify-center border-2 border-[#161616] transition-all duration-300 transform hover:scale-105"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Block 3: White Informational Card */}
              <div
                ref={block3Ref}
                className="bg-white text-[#161616] rounded-3xl p-8 border-4 border-[#161616] flex flex-col justify-between min-h-[280px]"
              >
                <div>
                  <h3 className="font-cormorant font-bold text-2xl md:text-3xl italic leading-tight text-[#161616] mb-3">
                    Currently building independently.
                  </h3>
                  <p className="font-jakarta font-light text-[13px] text-gray-700 leading-relaxed">
                    {profileSummary[5]}
                  </p>
                </div>
                <div className="flex flex-col gap-3 mt-6 text-[11px] font-mono text-[#161616]">
                  <a
                    href={`mailto:${profile.email}`}
                    className="flex items-center gap-2 hover:text-[#F44A22] transition-colors"
                  >
                    <Mail size={14} className="text-[#F44A22] shrink-0" />
                    {profile.email}
                  </a>
                  <a
                    href={`tel:${profile.phoneHref}`}
                    className="flex items-center gap-2 hover:text-[#F44A22] transition-colors"
                  >
                    <Phone size={14} className="text-[#F44A22] shrink-0" />
                    {profile.phone}
                  </a>
                  <span className="flex items-center gap-2">
                    <MapPin size={14} className="text-[#F44A22] shrink-0" />
                    {profile.location}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Portrait Block */}
          <div
            ref={portraitRef}
            className="lg:col-span-5 relative w-full h-[450px] md:h-[500px] lg:h-auto rounded-3xl border-4 border-[#161616] overflow-hidden bg-gray-100 order-1 lg:order-2"
          >
            <img
              src="/ankit-giri-portrait.jpg"
              alt="Ankit Giri — Senior Full Stack Java Engineer"
              className="w-full h-full object-cover object-top select-none animate-ken-burns"
            />

            <div className="absolute top-6 right-6 bg-[#7B2CBF] text-[#FEF8E8] font-bold text-[10px] md:text-xs uppercase px-4 py-1.5 rounded-full border-2 border-[#161616] select-none shadow-sm z-10">
              6+ YEARS
            </div>
            <div className="absolute bottom-6 left-6 bg-[#FEF8E8] text-[#161616] font-bold text-[10px] md:text-xs uppercase px-4 py-1.5 rounded-full border-2 border-[#161616] select-none shadow-sm z-10">
              {profile.location}
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full mt-6"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-[#161616] text-[#FEF8E8] rounded-3xl border-4 border-[#161616] px-6 py-6 flex flex-col justify-center gap-1"
            >
              <span className="font-oswald font-black text-4xl md:text-5xl text-[#F44A22] leading-none">
                {stat.value}
              </span>
              <span className="font-jakarta text-[10px] md:text-xs uppercase tracking-widest text-[#FEF8E8]/70">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Core Capabilities */}
        <div
          ref={capabilitiesRef}
          className="bg-[#FEF8E8] text-[#161616] rounded-3xl p-8 md:p-10 border-4 border-[#161616] w-full mt-6"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
            <h3 className="font-oswald font-black text-2xl md:text-3xl uppercase tracking-tighter">
              Core Engineering Capabilities
            </h3>
            <span className="font-mono text-[11px] tracking-widest text-[#161616]/50 uppercase">
              {coreCapabilities.length} Capabilities
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {coreCapabilities.map((capability) => (
              <Chip key={capability} tone="light">
                {capability}
              </Chip>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
