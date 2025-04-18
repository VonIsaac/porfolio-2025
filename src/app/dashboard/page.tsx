
'use client'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'
export default function Main() {
  return (
    <div>
      <div className=' flex justify-center items-center h-screen text-center'>
        <div className='text-white'>
            <div>
            <p>Hi there, I am</p>
            </div>
            <h1>
                <TypeAnimation
                    sequence={['Von Isaac Baban', 1000,  'I am a Web Developer', 1000]}
                    wrapper="span"
                    cursor={true}
                    repeat={Infinity}
                    style={{ fontSize: '2em', display: 'inline-block' }}
                />
            </h1>
            <p className='text-center'>
                A devoted and passionate about building websites.
                I cant wait to use my in-depth understanding of web development to create creative and intuitive online experiences.
            </p>
        </div>
      </div>
    </div>
  )
}
