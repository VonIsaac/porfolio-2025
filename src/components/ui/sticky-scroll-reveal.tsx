"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const linearGradients = [
  "linear-gradient(to bottom right, #06b6d4, #10b981)",
  "linear-gradient(to bottom right, #ec4899, #6366f1)",
  "linear-gradient(to bottom right, #f97316, #eab308)",
  "linear-gradient(to bottom right, #9333ea, #3b82f6)",
  "linear-gradient(to bottom right, #2563eb, #14b8a6)",
];

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string ;
    description?: string
    underconstruction?: string;
    techStack?: string[];
    content?: React.ReactNode;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end end"],
  });

  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const clamped = Math.max(0, Math.min(1, latest));
    const cardIndex = Math.min(
      Math.floor(clamped * cardLength * 1.15),
      cardLength - 1
    );
    setActiveCard(cardIndex);
  });

  const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      className="relative flex h-[30rem] flex-row-reverse justify-center space-x-10 space-x-reverse overflow-y-auto rounded-md p-10"
      ref={ref}
    >
      {/* TEXT ON THE RIGHT */}
      <div className="relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20 text-left">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="text-2xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="mt-4 max-w-sm text-slate-300"
              >
                {item.description}
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="mt-4 inline-block text-sm px-3 py-1  text-yellow-300 font-extrabold rounded-full "
                >
               {item.underconstruction }
              </motion.p>
              
              {item.techStack && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  className="mt-6"
                >
                  <h3 className="text-md font-semibold text-slate-200 mb-2">Tech Stack:</h3>
                  <div className="flex flex-wrap gap-2">
                    {item.techStack.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-slate-800/50 text-slate-200 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          ))}
          <div className="h-60" />
        </div>
      </div>

      {/* STICKY IMAGE BOX ON THE LEFT */}
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "sticky top-10 h-60 w-[500px] overflow-hidden rounded-md bg-white lg:block",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};