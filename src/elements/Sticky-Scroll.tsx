"use client";
import React from "react";
import Image from "next/image";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";


const content = [
  {
    title: "Bakery Supply System",
    description:"A comprehensive bakery supply system that allows users to browse, cart, and purchase bakery items like ecomerce. Admin and Cashier roles are available for managing the system.",
    underconstruction: "Currently under construction(40%)",
    techStack: [
      "React.js",
      "Tailwind CSS",
      "Material UI",
      "Express",
      "MongoDB",
      "JWT",
      "SMS Gateway",
    ],
    content: (
      <div className="relative flex h-full w-full items-center justify-center text-white">
        <Image
          src="/project-image/Carlvins.png"
          alt="jordan"
          fill
          className="object-cover"
        />
      </div>
    ),
  },
  {
    title: "Personal Portfolio",
    description:
      "A personal portfolio website showcasing my skills, projects, and experiences. It features a modern design, smooth animations, and responsive layout.",
    techStack: [
      "Next.js", 
      "Tailwind CSS", 
      "TypeScript",
      "Aceternity UI",
    ],
    content: (
      <div className="relative flex h-full w-full items-center justify-center text-white">
        <Image
          src="/project-image/Portfolio.png"
          alt="jordan"
          fill
          className="object-cover"
        />
      </div>
    ),
  },
  {
    title: "Advance Authentication",
    description:
      "The Advance Authentication system provides JWT token authentication, secure password reset flows with email verification, and role-based access control.",
    techStack: [ 
      "Express", 
      "JWT", 
      "MongoDB", 
      "Nodemailer", 
      "React.js",
      "Tailwind CSS",
    ],
    content: (
      <div className="relative flex h-full w-full items-center justify-center text-white">
        <Image
          src="/project-image/Auth.png"
          alt="Snap"
          fill
          className="object-cover"
        />
      </div>
    ),
  },
  {
    title: "Share Gadgets",
    description: "A community platform where users can share their favorite gadgets with others. Features include user profiles, gadget listings, reviews, and discussion forums.",
    techStack: [
      "Next.js",  
      "Prisma", 
      "Better-SQLite3", 
      "Tailwind CSS"
    ],
    content: (
      <div className="relative flex h-full w-full items-center justify-center text-white">
        <Image
          src="/project-image/Share.png"
          alt="share"
          fill
          className="object-cover"
        />
      </div>
    ),
  },
  {
    title: "Scholarship Management System",
    description:
      "A comprehensive system for managing scholarships, student applications, and academic achievements with real-time monitoring and reporting capabilities.",
    techStack: [
      "React", 
      "Firebase", 
      "Material UI", 
      "Redux", 
      "Chart.js", 
      "Express"
    ],
    content: (
      <div className="relative flex h-full w-full items-center justify-center text-white">
        <Image
          src="/project-image/Scholar.png"
          alt="scholar"
          fill
          className="object-cover"
        />
      </div>
    ),
  },
  {
    title: "News Article Website",
    description:"A modern news platform where users can read, like, and comment on the latest articles. Features include personalized feeds and real-time notifications.",
    underconstruction: "Currently under construction(60%)",
    techStack: [
      "socket.io",
      "React.js", 
      "Node.js", 
      "Express",
      "Tailwind CSS", 
      "MongoDB", 
      "JWT",
    ],
    content: (
      <div className="relative flex h-full w-full items-center justify-center text-white">
        <Image
          src="/project-image/News.png"
          alt="news"
          fill
          className="object-cover"
        />
      </div>
    ),
  },
];

export default function StickyScrollRevealDemo() {
  return (
    <div className="w-full py-4">
      <h1 className="text-4xl text-center font-bold mb-10 tracking-wider uppercase text-sky-700">
        My Projects
      </h1>
      <StickyScroll content={content} />
    </div>
  );
}