"use client";

import React from "react";
import Link from "next/link";
import { projects } from "@/data/portfolio";
import { Chip, PageLabel, Reveal, SectionHeader } from "@/components/ui/shared";

function GradientPanel({
  number,
  primary,
  secondary,
  className = "",
}: {
  number: string;
  primary: string;
  secondary: string;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden bg-[#161616] flex items-center justify-center ${className}`}
    >
      <div
        className="absolute w-[95%] h-[65%] -top-[25%] left-[2.5%] rounded-full blur-[40px] opacity-80 pointer-events-none animate-float-fast-top"
        style={{ backgroundColor: "#ffffff" }}
      />
      <div
        className="absolute w-[85%] h-[85%] top-[10%] -left-[10%] rounded-full blur-[35px] opacity-75 pointer-events-none animate-float-medium-mid"
        style={{ backgroundColor: primary }}
      />
      <div
        className="absolute w-[85%] h-[85%] top-[15%] -right-[10%] rounded-full blur-[35px] opacity-75 pointer-events-none animate-float-medium-mid-delayed"
        style={{ backgroundColor: secondary }}
      />
      <div className="absolute w-full h-[60%] -bottom-[25%] left-0 rounded-full blur-[30px] opacity-90 pointer-events-none animate-float-slow-bottom bg-[#161616]" />
      <div
        className="absolute inset-0 opacity-[0.22] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      <span className="relative z-10 font-oswald font-black text-5xl md:text-6xl text-[#FEF8E8] drop-shadow-[0_4px_16px_rgba(0,0,0,0.45)]">
        {number}
      </span>
    </div>
  );
}

function ProjectMeta({ project }: { project: (typeof projects)[number] }) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[10px] md:text-[11px] uppercase tracking-widest">
      <span className="text-[#F44A22] font-bold">{project.category}</span>
      <span className="hidden md:block h-[1px] w-6 bg-[#161616]/25" />
      <span className="text-[#161616]/55">{project.role}</span>
    </div>
  );
}

export default function Projects({
  variant = "preview",
}: {
  variant?: "preview" | "full";
}) {
  const isFull = variant === "full";
  const list = isFull ? projects : projects.slice(0, 6);

  return (
    <section
      id="projects"
      className="relative w-full bg-white text-[#161616] py-24 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      <div className="relative max-w-6xl w-full mx-auto">
        <PageLabel className="mb-10">PROJECTS</PageLabel>

        <Reveal>
          <SectionHeader
            index={isFull ? "04 / WORK" : "04 / SELECTED WORK"}
            title={isFull ? "Selected Project Portfolio" : "Featured Projects"}
            description={
              isFull
                ? "Selected highlights from more than 40 delivered projects spanning enterprise platforms, data engineering, cloud automation, AI, mobile, logistics and commerce — each one taken from requirements through delivery."
                : "A selection of enterprise, cloud, data and product engineering work delivered across six years of practice."
            }
          />
        </Reveal>

        {isFull ? (
          <div className="mt-14 flex flex-col gap-6">
            {list.map((project, index) => (
              <Reveal key={project.number} delay={index * 0.04}>
                <article className="bg-[#FEF8E8] border-4 border-[#161616] rounded-3xl overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr]">
                    <div className="flex flex-col">
                      <GradientPanel
                        number={project.number}
                        primary={project.gradient.primary}
                        secondary={project.gradient.secondary}
                        className="h-44 lg:h-56"
                      />
                      <div className="bg-[#161616] text-[#FEF8E8] p-6 flex flex-col gap-4 flex-1">
                        <div>
                          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#F44A22] block mb-1.5">
                            Category
                          </span>
                          <p className="font-jakarta font-semibold text-sm leading-snug">
                            {project.category}
                          </p>
                        </div>
                        <div>
                          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#F44A22] block mb-1.5">
                            Role
                          </span>
                          <p className="font-jakarta font-light text-[13px] leading-relaxed text-[#FEF8E8]/85">
                            {project.role}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-7 md:p-10 flex flex-col">
                      <h3 className="font-oswald font-black text-2xl md:text-3xl uppercase tracking-tighter leading-[0.95]">
                        {project.title}
                      </h3>

                      <p className="font-jakarta font-light text-sm md:text-[15px] leading-relaxed text-[#161616]/75 mt-4 max-w-3xl">
                        {project.overview}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mt-6">
                        {project.tech.map((tech) => (
                          <Chip key={tech} tone="light">
                            {tech}
                          </Chip>
                        ))}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 pt-8 border-t-2 border-[#161616]/10">
                        {project.blocks.map((block) => (
                          <div key={block.heading}>
                            <h4 className="font-mono text-[11px] font-bold tracking-[0.25em] uppercase text-[#F44A22] mb-4">
                              {block.heading}
                            </h4>
                            <ul className="flex flex-col gap-2.5">
                              {block.items.map((item) => (
                                <li
                                  key={item}
                                  className="flex gap-2.5 font-jakarta font-light text-[13px] leading-relaxed text-[#161616]/80"
                                >
                                  <span className="mt-[7px] h-[5px] w-[5px] shrink-0 rounded-full bg-[#161616]/30" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>

                      {project.impact ? (
                        <div className="mt-8 bg-[#161616] text-[#FEF8E8] rounded-2xl p-5 md:p-6 flex flex-col md:flex-row gap-3 md:gap-6">
                          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-[#F44A22] shrink-0 pt-1">
                            Engineering Impact
                          </span>
                          <p className="font-jakarta font-light text-[13px] md:text-sm leading-relaxed text-[#FEF8E8]/90">
                            {project.impact}
                          </p>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
              {list.map((project, index) => (
                <Reveal key={project.number} delay={index * 0.05}>
                  <Link
                    href="/projects"
                    className="group h-full flex flex-col bg-white border-4 border-[#161616] rounded-3xl overflow-hidden hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(22,22,22,0.14)] transition-all duration-300"
                  >
                    <GradientPanel
                      number={project.number}
                      primary={project.gradient.primary}
                      secondary={project.gradient.secondary}
                      className="h-36"
                    />
                    <div className="flex flex-col flex-1 p-6 md:p-7">
                      <ProjectMeta project={project} />
                      <h3 className="font-oswald font-black text-xl md:text-2xl uppercase tracking-tighter leading-tight mt-4 group-hover:text-[#F44A22] transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="font-jakarta font-light text-[13px] leading-relaxed text-[#161616]/70 mt-3 flex-1">
                        {project.overview}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mt-5">
                        {project.tech.slice(0, 5).map((tech) => (
                          <Chip key={tech} tone="light">
                            {tech}
                          </Chip>
                        ))}
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.1}>
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-5 bg-[#F44A22] text-[#FEF8E8] border-4 border-[#161616] rounded-3xl px-8 py-7">
                <div>
                  <h3 className="font-oswald font-black text-2xl md:text-3xl uppercase tracking-tighter text-white">
                    Full Project Portfolio
                  </h3>
                  <p className="font-jakarta font-light text-sm text-[#FEF8E8]/90 mt-1">
                    {projects.length} detailed case studies — full technology
                    stacks and engineering impact.
                  </p>
                </div>
                <Link
                  href="/projects"
                  className="shrink-0 inline-flex items-center gap-2.5 rounded-full bg-[#161616] text-white px-6 py-3.5 font-jakarta font-bold text-xs tracking-widest uppercase border-2 border-[#161616] hover:bg-[#FEF8E8] hover:text-[#161616] transition-all duration-300 active:scale-95"
                >
                  View Portfolio
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </Reveal>
          </>
        )}
      </div>
    </section>
  );
}
