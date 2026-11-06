import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "Ankit Giri — Senior Full Stack Java Engineer",
    template: "%s",
  },
  description:
    "Ankit Giri is a Senior Full Stack Java Engineer and Technical Lead with 6+ years of experience building scalable, secure and production-ready systems in Java, Spring Boot, microservices, REST APIs, Angular, React and AWS.",
  keywords: [
    "Ankit Giri",
    "Senior Full Stack Java Engineer",
    "Java Developer",
    "Spring Boot Developer",
    "Microservices",
    "REST API Development",
    "Backend Engineer",
    "AWS Lambda",
    "PostgreSQL",
    "Technical Lead",
    "Angular",
    "React",
    "TypeScript",
  ],
  authors: [{ name: "Ankit Giri", url: "mailto:javadeveloperankitg@gmail.com" }],
  creator: "Ankit Giri",
  openGraph: {
    type: "profile",
    title: "Ankit Giri — Senior Full Stack Java Engineer",
    description:
      "6+ years of experience in Java, Spring Boot, microservices, REST APIs, Angular, React, databases and AWS cloud application development.",
    siteName: "Ankit Giri — Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ankit Giri — Senior Full Stack Java Engineer",
    description:
      "Backend architecture, microservices, REST APIs, cloud and full-stack product engineering.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import Navbar from "@/components/Navbar";
import { PageTransitionProvider } from "@/components/PageTransition";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PageTransitionProvider>
          {children}
          <Navbar />
        </PageTransitionProvider>
      </body>
    </html>
  );
}
