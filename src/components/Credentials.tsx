"use client";

import React from "react";
import {
  achievements,
  education,
  professionalStrengths,
  publishedApps,
} from "@/data/portfolio";
import { Chip, PageLabel, Reveal, SectionHeader } from "@/components/ui/shared";

export default function Credentials() {
  const appTiles = Array.from({ length: publishedApps.count }, (_, index) =>
    String(index + 1).padStart(2, "0")
  );

  return (
    <section
      id="credentials"
      className="relative w-full bg-[#FEF8E8] text-[#161616] py-24 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      <div className="relative max-w-6xl w-full mx-auto">
        <PageLabel className="mb-10">CREDENTIALS</PageLabel>

        <Reveal>
          <SectionHeader
            index="05 / FOUNDATION"
            title="Education & Achievements"
            description="Engineering foundation, leadership recognition and mobile applications published to production."
          />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-14">
          {/* Education */}
          <Reveal className="lg:col-span-7">
            <div className="h-full bg-[#161616] text-[#FEF8E8] rounded-3xl border-4 border-[#161616] p-7 md:p-10 flex flex-col justify-between">
              <div>
                <span className="font-mono text-[11px] tracking-[0.3em] text-[#F44A22] font-bold uppercase">
                  Education
                </span>
                <h3 className="font-oswald font-bold text-2xl md:text-3xl uppercase tracking-tight leading-tight mt-4 text-white">
                  {education.degree}
                </h3>
                <p className="font-jakarta font-semibold text-sm md:text-base text-[#FEF8E8]/90 mt-5">
                  {education.institution}
                </p>
                <p className="font-jakarta font-light text-xs md:text-sm text-[#FEF8E8]/60 mt-1">
                  {education.period}
                </p>
              </div>

              <div className="mt-8 flex items-center gap-5">
                <div className="flex flex-col">
                  <span className="font-oswald font-black text-4xl md:text-5xl text-[#F44A22] leading-none">
                    {education.score}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#FEF8E8]/60 mt-1.5">
                    {education.scoreLabel}
                  </span>
                </div>
                <span className="h-14 w-[2px] bg-[#FEF8E8]/20" />
                <p className="font-jakarta font-light text-[12px] text-[#FEF8E8]/70 leading-relaxed max-w-[220px]">
                  Computer Science & Engineering
                </p>
              </div>
            </div>
          </Reveal>

          {/* Published applications */}
          <Reveal delay={0.08} className="lg:col-span-5">
            <div className="h-full bg-[#F44A22] text-[#FEF8E8] rounded-3xl border-4 border-[#161616] p-7 md:p-8 flex flex-col">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-oswald font-black text-2xl md:text-3xl uppercase tracking-tighter text-white leading-none">
                  Published Android Apps
                </h3>
                <span className="font-oswald font-black text-4xl text-[#161616] leading-none shrink-0">
                  {publishedApps.count}
                </span>
              </div>

              <p className="font-jakarta font-light text-[12px] leading-relaxed text-[#FEF8E8]/95 mt-4">
                {publishedApps.body}
              </p>

              <div className="grid grid-cols-2 gap-3 mt-6">
                {appTiles.map((id) => (
                  <div
                    key={id}
                    className="bg-[#161616] border-2 border-[#161616] rounded-2xl px-4 py-3.5"
                  >
                    <span className="font-oswald font-black text-lg text-[#FEF8E8] leading-none">
                      {id}
                    </span>
                    <p className="font-jakarta text-[10px] uppercase tracking-wider text-[#FEF8E8]/60 mt-2 leading-tight">
                      Android Application
                    </p>
                    <p className="font-jakarta text-[10px] text-[#F44A22] font-semibold mt-1 leading-tight">
                      Google Play Store
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Achievements */}
          <Reveal delay={0.12} className="lg:col-span-7">
            <div className="h-full flex flex-col gap-6">
              {achievements.map((item, index) => (
                <div
                  key={item.title}
                  className="bg-white rounded-3xl border-4 border-[#161616] p-7 flex gap-5 flex-1"
                >
                  <span className="font-oswald font-black text-3xl md:text-4xl text-[#F44A22]/25 leading-none shrink-0">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h4 className="font-cormorant font-bold text-xl md:text-2xl italic leading-tight">
                      {item.title}
                    </h4>
                    <p className="font-jakarta font-light text-[13px] leading-relaxed text-[#161616]/70 mt-2.5">
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Professional strengths */}
          <Reveal delay={0.16} className="lg:col-span-5">
            <div className="h-full bg-white rounded-3xl border-4 border-[#161616] p-7 md:p-8 flex flex-col">
              <h3 className="font-oswald font-black text-xl md:text-2xl uppercase tracking-tighter">
                Professional Strengths
              </h3>
              <div className="flex flex-wrap gap-1.5 mt-5">
                {professionalStrengths.map((strength) => (
                  <Chip key={strength} tone="light">
                    {strength.replace(/\.$/, "")}
                  </Chip>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
