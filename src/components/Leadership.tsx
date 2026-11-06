"use client";

import React from "react";
import {
  careerPositioning,
  currentFocus,
  profile,
  technicalLeadership,
} from "@/data/portfolio";
import { Chip, PageLabel, Reveal, SectionHeader } from "@/components/ui/shared";

export default function Leadership() {
  return (
    <section
      id="leadership"
      className="relative w-full bg-[#E4E2E3] text-[#161616] py-24 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      <div className="relative max-w-6xl w-full mx-auto">
        <PageLabel className="mb-10">LEADERSHIP</PageLabel>

        <Reveal>
          <SectionHeader
            index="06 / LEADERSHIP"
            title="Technical Leadership"
            description="Designing architecture, owning delivery and developing engineers — the responsibilities that sit beyond writing code."
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
          {technicalLeadership.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <div className="h-full bg-white rounded-3xl border-4 border-[#161616] p-7 flex flex-col gap-3 hover:-translate-y-1 transition-transform duration-300">
                <span className="font-mono text-[10px] font-bold tracking-[0.25em] text-[#F44A22] uppercase">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-oswald font-black text-xl uppercase tracking-tighter leading-none">
                  {item.title}
                </h3>
                <p className="font-jakarta font-light text-[13px] leading-relaxed text-[#161616]/70">
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Career positioning */}
        <Reveal delay={0.1}>
          <div className="mt-6 bg-[#161616] text-[#FEF8E8] rounded-3xl border-4 border-[#161616] p-7 md:p-10">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-8">
              <h3 className="font-oswald font-black text-2xl md:text-4xl uppercase tracking-tighter text-[#FEF8E8]">
                Career Positioning
              </h3>
              <span className="font-mono text-[11px] tracking-widest text-[#FEF8E8]/50 uppercase">
                5 Engagements
              </span>
            </div>

            <div className="flex flex-col divide-y divide-[#FEF8E8]/10">
              {careerPositioning.map((item, index) => (
                <div
                  key={item.title}
                  className="grid grid-cols-1 md:grid-cols-[70px_260px_1fr] gap-2 md:gap-6 py-5"
                >
                  <span className="font-oswald font-black text-xl text-[#F44A22] leading-none pt-0.5">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h4 className="font-oswald font-bold text-lg md:text-xl uppercase tracking-tight text-white leading-tight">
                    {item.title}
                  </h4>
                  <p className="font-jakarta font-light text-[13px] md:text-sm leading-relaxed text-[#FEF8E8]/80">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Value proposition + current focus */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
          <Reveal delay={0.12} className="lg:col-span-7">
            <div className="h-full bg-[#F44A22] text-[#FEF8E8] rounded-3xl border-4 border-[#161616] p-7 md:p-10 flex flex-col justify-between">
              <div>
                <span className="font-mono text-[11px] tracking-[0.3em] text-[#161616] font-bold uppercase">
                  Value Proposition
                </span>
                <p className="font-jakarta font-light text-sm md:text-base leading-relaxed text-[#FEF8E8] mt-5">
                  {profile.valueProposition}
                </p>
              </div>

              <div className="mt-8">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#161616] font-bold">
                  Engineering Lifecycle
                </span>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-2 mt-4">
                  {profile.lifecycle.map((stage, index) => (
                    <React.Fragment key={stage}>
                      <span className="bg-[#161616] text-[#FEF8E8] rounded-full px-3 py-1.5 font-jakarta text-[10px] font-semibold uppercase tracking-wide">
                        {stage}
                      </span>
                      {index < profile.lifecycle.length - 1 ? (
                        <span className="text-[#161616] font-bold text-xs">→</span>
                      ) : null}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.16} className="lg:col-span-5">
            <div className="h-full bg-white rounded-3xl border-4 border-[#161616] p-7 md:p-8 flex flex-col">
              <h3 className="font-oswald font-black text-xl md:text-2xl uppercase tracking-tighter">
                Current Professional Focus
              </h3>
              <p className="font-jakarta font-light text-[13px] leading-relaxed text-[#161616]/70 mt-3">
                Building and delivering modern software solutions across:
              </p>
              <div className="flex flex-wrap gap-1.5 mt-5">
                {currentFocus.map((focus) => (
                  <Chip key={focus} tone="light">
                    {focus}
                  </Chip>
                ))}
              </div>
              <p className="font-cormorant font-semibold italic text-lg text-[#161616] mt-auto pt-6">
                Turning complex technical requirements into maintainable,
                production-ready software.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
