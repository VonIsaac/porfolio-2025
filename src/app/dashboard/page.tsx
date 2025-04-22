
'use client'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import { TimeLine } from '@/elements/TimeLine';
import { Infinite } from '@/elements/Infinite';
import StickyScrollRevealDemo from '@/elements/Sticky-Scroll';
import Footer from '@/components/ui/Footer';
export default function Main() {
  console.log('Main');

  
  return (
   <>
  
      <div className=' ' id='home' >
        <div className='text-white'>
          <nav className="flex justify-between items-center px-10 py-4 text-white sticky top-0 bg-transparent  shadow-[0_3px_10px_rgb(0,0,0,0.2)]  ">
              <div className="text-xl font-bold">
                <h1>Portfolio</h1>
              </div>

              <div className="flex gap-6 text-sm md:text-base">
                <a href="#home" className="transition cursor-pointer text-slate-300 hover:text-neutral-200 tracking-wide">Home</a>
                <a href="#about" className="transition text-slate-300 hover:text-neutral-200 tracking-wide">About</a>
                <a href="#project" className="transition text-slate-300 hover:text-neutral-200 tracking-wide" >Project</a>
                <a href="#technology" className="transition text-slate-300 hover:text-neutral-200 tracking-wide">Technology</a>
              </div>
          </nav>

          <header className="px-5 py-4 h-screen flex items-center" data-aos="fade-right" >
              <div className="max-w-3xl ml-10 ">
                <div>
                  <p className="tracking-wider text-sky-300">Hi there, I am</p>
                </div>
                <h1 className="font-bold text-[40px] tracking-wider px-2 text-sky-700">
                  <TypeAnimation
                    sequence={['Von Isaac Baban', 2000, ' Web Developer', 1000]}
                    wrapper="span"
                    cursor={true}
                    repeat={Infinity}
                    style={{ fontSize: '2em', display: 'inline-block' }}
                  />
                </h1>
                <div className="flex flex-wrap gap-4 mt-4">
                  <div className="text-sky-300  hover:text-sky-600 cursor-pointer">
                    <LocationOnIcon />
                    <span>Manila, Philippines</span>
                  </div>
                  <div className="text-sky-300 hover:text-sky-600 cursor-pointer " >
                    <EmailIcon />
                    vonbaban1@gmail.com
                  </div>
                </div>
                <div className=' mt-10 *:flex flex-col gap-2 tracking-wider text-slate-300'>
                  <p className=''>
                      A devoted and passionate about building websites.
                      I cant wait to use my in-depth understanding of web development to create creative and intuitive online experiences.
                      and I&apos;m always investigating new technology
                      to maintain an advantage in the ever changing field of web development. 
                      My objective is to provide fluid, quick, 
                      and captivating web experiences that address actual issues while still looking fantastic.
                  </p>
                </div>
              </div>
              
            </header>
            <main>
              <Infinite />
              <StickyScrollRevealDemo />
              <TimeLine />
             
            </main>
            <Footer />
        </div>
      </div>
   
   </>
  )
}
