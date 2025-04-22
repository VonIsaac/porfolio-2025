"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

const content = [
  {
    title: "Air Jordan 1 Retro High OG",
    description: "The Air Jordan 1 Retro High OG is a classic sneaker that combines style and performance.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/project-image/AirJordan.png"
          alt="jordan"
          className="h-full w-full object-cover"
        />
      </div>
    ),
  },
  {
    title: "Snapbuy",
    description: "Snapbuy is ecomerce reference that allow user to buy add to cart like a ecommerce.", 
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/project-image/Snapbuy.png"
          alt="Snap"
          className="h-full w-full object-cover"
        />
      </div>
    ),
  },
  {
    title: "Share Gadgets",
    description: "Easily upload and share documents with just a few clicks.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/project-image/Share.png"
          alt="share"
          className="h-full w-full object-cover"
        />
      </div>
    ),
  },
  {
    title: "Scholarship Management System", 
    description: "Our dashboard helps you monitor academic achievements in real time.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/project-image/Scholar.png"
          alt="scholar"
          className="h-full w-full object-cover"
        />
      </div>
    ),
  },
];

export default function StickyScrollRevealDemo() {
  return (
    <div className="w-full py-4">
      <h1 className="text-4xl text-center font-bold mb-10 tracking-wider uppercase text-sky-700">
        My Project&apos;s
      </h1>
      <StickyScroll content={content} />
    </div>
  );
}
