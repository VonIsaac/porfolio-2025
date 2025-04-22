import React from "react";
import { Timeline } from "@/components/ui/timeline";
//import Image from "next/image";

export function TimeLine() {
  const data = [
    {
      title: "2020 - 2022",
      content: (
        <div data-aos="fade-left">
          <p className="mb-8 text-xs font-bold text-sky-500 md:text-sm tracking-wider hover:text-sky-800    ">
            UNITED CRISTIAN ACADEMY(UCA) - Senior High School
          </p>
          <div className="grid grid-cols-2 gap-4">
            <p className=" tracking-wide text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
                I took the Information and Communications Technology (ICT) track in senior high school, where I finished my schooling.
                I learned more about computer systems and other things there.  
                My love for technology was ignited by this experience, 
                which also helped me get ready for further education and a job in information technology.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "2022 - 2025",
      content: (
        <div data-aos="fade-left">
        
          <p className="mb-8 text-xs font-bold text-sky-500 md:text-sm tracking-wider hover:text-sky-800    ">
            UNIVERSITY OF MUNTINLUPA - Bachelor of Science in Information Technology
          </p>
          <div className="grid grid-cols-2 gap-4">
            <p className="tracking-wide text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
             Pursuing a Bachelor of Science in Information Technology at the University of Muntinlupa,
             which is assisting me in expanding my understanding of a variety of IT-related topics, 
             including database administration, web development, programming, and web design. 
             I&apos;m laying a solid basis for my future job in the IT sector with the help of this curriculum.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Present",
      content: (
        <div data-aos="fade-left">
          <p className="mb-8 text-xs font-bold text-sky-500 md:text-sm tracking-wider hover:text-sky-800">
            Freelance Web Developer
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            <p className="tracking-wide text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
                Using cutting-edge web technology, I build responsive and user-friendly websites for clients as a freelance web developer. 
                My areas of expertise are front-end and back-end development, with an emphasis on performance, functionality, and clean design. 
                My ability to manage my time, solve problems,
                and adjust to the demands of various projects has all improved as a result of working independently.
            </p>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
