"use client";

import React from "react";
import { motion } from "framer-motion";

export function PageLabel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`text-[#F44A22] text-4xl tracking-widest drop-shadow-md select-none ${className}`}
      style={{ fontFamily: "'Samarkan', sans-serif" }}
    >
      {children}
    </div>
  );
}

export function Reveal({
  children,
  className = "",
  delay = 0,
  y = 28,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeader({
  index,
  title,
  description,
  tone = "dark",
  className = "",
}: {
  index: string;
  title: string;
  description?: string;
  tone?: "dark" | "light";
  className?: string;
}) {
  const mutedText = tone === "dark" ? "text-[#161616]/65" : "text-[#FEF8E8]/65";
  const titleText = tone === "dark" ? "text-[#161616]" : "text-[#FEF8E8]";

  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      <div className="flex items-center gap-3">
        <span className="font-mono text-[11px] tracking-[0.3em] text-[#F44A22] font-bold">
          {index}
        </span>
        <span className="h-[2px] w-10 bg-[#F44A22]" />
      </div>
      <h2
        className={`font-oswald font-black uppercase text-4xl md:text-6xl lg:text-7xl leading-[0.85] tracking-tighter ${titleText}`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`font-jakarta font-light text-sm md:text-base leading-relaxed max-w-3xl ${mutedText}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function Chip({
  children,
  tone = "light",
}: {
  children: React.ReactNode;
  tone?: "light" | "dark" | "orange";
}) {
  const tones = {
    light: "bg-[#FEF8E8] text-[#161616] border-[#161616]/70",
    dark: "bg-white/[0.06] text-[#FEF8E8]/90 border-[#FEF8E8]/25",
    orange: "bg-[#F44A22] text-[#FEF8E8] border-[#161616]",
  } as const;

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1.5 text-[10px] md:text-[11px] font-jakarta font-semibold tracking-wide uppercase ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
