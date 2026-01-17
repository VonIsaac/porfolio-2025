
'use client'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import { TimeLine } from '@/elements/TimeLine';
import { Infinite } from '@/elements/Infinite';
import StickyScrollRevealDemo from '@/elements/Sticky-Scroll';
import Footer from '@/components/ui/Footer';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Main() {
  return (
   <>
  
      <div className=' ' id='home' >
        <div className='text-white'>
          <nav className="flex justify-between items-center px-4 sm:px-6 md:px-10 py-4 text-white sticky top-0 bg-transparent  shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-50  ">
              <div className="text-xl font-bold">
                <h1>Portfolio</h1>
              </div>

              <div className="flex gap-4 sm:gap-6 text-sm md:text-base">
                <a href="https://www.facebook.com/von.von0323" className="transition cursor-pointer text-slate-300 hover:text-neutral-200 tracking-wide">
                  <FacebookIcon className="text-sky-700" />
                </a>
                <a href="https://www.instagram.com/vnisac/" className="transition text-slate-300 hover:text-neutral-200 tracking-wide">
                  <InstagramIcon className="text-sky-700" />
                </a>
                <a href="https://www.linkedin.com/in/vonisaac23/" className="transition text-slate-300 hover:text-neutral-200 tracking-wide" >
                  <LinkedInIcon className="text-sky-700"  />
                </a>
                <a href="mailto:vonbaban1@gmail.com"  className="transition text-slate-300 hover:text-neutral-200 tracking-wide">
                  <EmailIcon className="text-sky-700" />
                </a>
              </div>
          </nav>

          <header className="px-4 sm:px-5 py-4 min-h-screen flex items-center overflow-hidden" data-aos="fade-right" >
              <div className="max-w-3xl w-full sm:ml-6 md:ml-10 ">
                <div>
                  <p className="tracking-wider text-sky-300">Hi there, I am</p>
                </div>
                <h1 className="font-bold text-[20px] sm:text-[28px] md:text-[40px] tracking-wider px-2 text-sky-700 break-words">
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
                    Detail-oriented Software Engineer with practical experience in developing and maintaining business systems in a professional environment. Successfully transitioned from intern to full-time role by demonstrating strong problem-solving skills, responsibility, and the ability to contribute to real-world projects.
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
