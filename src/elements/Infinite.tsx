"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

// SVG items
const testimonials = [
  { svg: "/svg/Figma.svg" },
  { svg: "/svg/React.svg" },
  { svg: "/svg/Next.svg" },
  { svg: "/svg/Tailwind.svg" },
  { svg: "/svg/Postman.svg" },
  { svg: "/svg/Mongo.svg" },
  { svg: "/svg/Express.svg" },
  { svg: "/svg/TypeScript.svg" },
  { svg: "/svg/HTML.svg" },
  { svg: "/svg/JavaScript.svg" },
  { svg: "/svg/AntDesign.svg" },
  { svg: "/svg/Material.svg" },
  { svg: "/svg/MySQL.svg" },
  { svg: "/svg/NPM.svg" },
  { svg: "/svg/Node.svg" },
  { svg: "/svg/jwt.svg" },
];

export function Infinite() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
        <h1 className="text-4xl font-bold  mb-10 tracking-wider uppercase text-sky-700">
            My Skill and Technology
        </h1>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}
