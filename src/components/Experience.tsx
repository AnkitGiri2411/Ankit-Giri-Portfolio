"use client";

import React from "react";
import { experience, independentAreas } from "@/data/portfolio";
import { Chip, PageLabel, Reveal, SectionHeader } from "@/components/ui/shared";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative w-full bg-[#161616] text-[#FEF8E8] py-24 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-[#F44A22]/20 blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl w-full mx-auto">
        <PageLabel className="mb-10">EXPERIENCE</PageLabel>

        <Reveal>
          <SectionHeader
            index="02 / CAREER"
            tone="light"
            title="Professional Experience"
            description="Six years of enterprise delivery across backend engineering, full-stack development and independent product work — from architecture and implementation to production support."
          />
        </Reveal>

        <div className="mt-14 flex flex-col gap-6">
          {experience.map((entry, index) => (
            <Reveal key={entry.company} delay={index * 0.08}>
              <article className="relative bg-[#FEF8E8] text-[#161616] rounded-3xl border-4 border-[#FEF8E8] p-7 md:p-10 overflow-hidden">
                <span className="absolute top-4 right-6 font-oswald font-black text-[5rem] md:text-[7rem] leading-none text-[#161616]/[0.05] select-none pointer-events-none">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <header className="relative flex flex-col gap-3 md:flex-row md:items-start md:justify-between md:gap-8">
                  <div className="max-w-2xl">
                    <h3 className="font-oswald font-black text-2xl md:text-4xl uppercase tracking-tighter leading-[0.95] text-[#F44A22]">
                      {entry.role}
                    </h3>
                    <p className="font-jakarta font-semibold text-sm md:text-base mt-2">
                      {entry.company}
                    </p>
                    <p className="font-jakarta text-xs md:text-sm text-[#161616]/60 mt-0.5">
                      {entry.location}
                    </p>
                  </div>
                  <span className="inline-flex shrink-0 items-center self-start rounded-full bg-[#161616] text-[#FEF8E8] px-4 py-2 font-mono text-[10px] md:text-[11px] tracking-wider uppercase">
                    {entry.period}
                  </span>
                </header>

                <p className="relative font-jakarta font-light text-sm md:text-[15px] leading-relaxed text-[#161616]/75 mt-6 max-w-4xl">
                  {entry.summary}
                </p>

                <div className="relative grid grid-cols-1 lg:grid-cols-[1.55fr_1fr] gap-8 mt-8 pt-8 border-t-2 border-[#161616]/10">
                  <div>
                    <h4 className="font-mono text-[11px] font-bold tracking-[0.25em] uppercase text-[#F44A22] mb-4">
                      Key Responsibilities
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                      {entry.responsibilities.map((item) => (
                        <li
                          key={item}
                          className="flex gap-2.5 font-jakarta font-light text-[13px] leading-relaxed text-[#161616]/80"
                        >
                          <span className="mt-[7px] h-[5px] w-[5px] shrink-0 rounded-full bg-[#F44A22]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-mono text-[11px] font-bold tracking-[0.25em] uppercase text-[#F44A22] mb-4">
                      Technical Focus
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {entry.technicalFocus.map((tech) => (
                        <Chip key={tech} tone="light">
                          {tech}
                        </Chip>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Independent workstreams */}
        <Reveal delay={0.1}>
          <div className="mt-6 rounded-3xl border-4 border-[#FEF8E8]/15 bg-white/[0.03] p-7 md:p-10">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-6">
              <h3 className="font-oswald font-black text-2xl md:text-3xl uppercase tracking-tighter text-[#FEF8E8]">
                Independent Areas Of Work
              </h3>
              <span className="font-mono text-[11px] tracking-widest text-[#FEF8E8]/50 uppercase">
                2025 – Present
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {independentAreas.map((area) => (
                <Chip key={area} tone="dark">
                  {area}
                </Chip>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
