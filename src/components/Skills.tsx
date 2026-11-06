"use client";

import React from "react";
import { specializations, languages, marqueeSkills } from "@/data/portfolio";
import { Chip, PageLabel, Reveal, SectionHeader } from "@/components/ui/shared";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative w-full bg-[#E4E2E3] text-[#161616] py-24 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      <div className="relative max-w-6xl w-full mx-auto">
        <PageLabel className="mb-10">SKILLS</PageLabel>

        <Reveal>
          <SectionHeader
            index="03 / STACK"
            title="Professional Specializations"
            description="A backend-first engineering toolkit extended across frontend, databases, cloud, DevOps and quality engineering."
          />
        </Reveal>

        {/* Languages band */}
        <Reveal>
          <div className="mt-14 bg-[#161616] text-[#FEF8E8] rounded-3xl border-4 border-[#161616] px-7 py-6 md:px-10 md:py-7 flex flex-col md:flex-row md:items-center gap-5 md:gap-10">
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-[#F44A22] shrink-0">
              Languages
            </span>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
              {languages.map((language) => (
                <span
                  key={language}
                  className="flex items-center gap-5 font-oswald font-black text-2xl md:text-3xl uppercase tracking-tighter text-[#FEF8E8]"
                >
                  {language}
                  <span className="text-[#F44A22] text-sm">✦</span>
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Specialization groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
          {specializations.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.05}>
              <div className="h-full bg-white rounded-3xl border-4 border-[#161616] p-6 flex flex-col gap-4 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(22,22,22,0.12)] transition-all duration-300">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-oswald font-black text-xl md:text-2xl uppercase tracking-tighter leading-none text-[#F44A22]">
                    {group.title}
                  </h3>
                  <span className="font-mono text-[10px] text-[#161616]/40 shrink-0 pt-1">
                    {String(group.items.length).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <Chip key={item} tone="light">
                      {item}
                    </Chip>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Scrolling skills banner */}
      <div className="relative mt-14 w-[110vw] -ml-[5vw] bg-[#F44A22] py-3.5 border-y-2 border-[#161616] overflow-hidden select-none rotate-[-1.5deg]">
        <div className="animate-marquee font-oswald text-[#FEF8E8] text-base md:text-lg font-extrabold uppercase tracking-widest flex items-center gap-10 whitespace-nowrap">
          {Array.from({ length: 3 }).map((_, idx) => (
            <span key={idx} className="flex items-center gap-10">
              {marqueeSkills.map((skill) => (
                <span key={`${idx}-${skill}`} className="flex items-center gap-10">
                  <span>{skill}</span>
                  <span className="text-[#FEF8E8]/55">✦</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
