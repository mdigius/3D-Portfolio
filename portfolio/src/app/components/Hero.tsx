"use client"
import React from 'react'
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react';
import Link from 'next/link';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <main>
      <div className="hero mt-20">
        <div className="flex-1 mt-5 padding-x">
          <h1 className="hero__title">Michael Di Giuseppe</h1>
          <p className="hero__subtitle">Software Engineering student at Western University </p>
          <div>
            
           <Spline scene="https://prod.spline.design/LvqbiIo9JA5QoUbK/scene.splinecode" className="-mt-10" />
          </div>
        </div>
      </div>

      <div className="hero mb-20">
        <div className="flex-1 padding-x">
          <h1 className="hero__title2">Work Sample - ChordSense</h1>
          <div className='flex-1'>
          <Spline scene="https://prod.spline.design/PY4VuAUXnJZmArgO/scene.splinecode" className='-mt-20 mb-3'/>
          <div className='hero__subtitle'>
            <p>- Music theory application that I developed from scratch using Swift</p>
            <p>- Published to the App Store</p>
            <p>- Registered business in Ontario</p>
            <a style={{color: 'blue'}} href='/projects'>More Projects</a>
            </div>
          </div>
            
          <h1 className="hero__title2">Programming Languages</h1>
          <p className="hero__subtitle">Profiency in:</p>
          <div>
          <Spline scene="https://prod.spline.design/IECKvPJxVMNT1g2G/scene.splinecode" className="-mt-20"/>
          </div>

          <h1 className="hero__title">Hobbies</h1>
          <p className="hero__title2">Music</p>
          <p className="hero__subtitle">- Been playing drums since the age of 5</p>
          <p className="hero__subtitle">- Self-taught guitarist and bassist with 7 years of experience</p>
          <p className="hero__subtitle">- Extensive experience in recording software/hardware and music production</p>
          <p className="hero__title2">Click on the TV screen to play/pause!</p>
          <div>
          <Spline scene="https://prod.spline.design/7VqAs5RA8PcjxPOb/scene.splinecode" />
          </div>

          <p className="hero__title2">Art</p>
          <p className="hero__subtitle">- Beginner artist</p>
          <p className="hero__subtitle">- Enjoy being creative as I believe being artistic is an important aspect of software engineering</p>
          <div>
            <Spline scene="https://prod.spline.design/V2Qa5ez7u6zXz6EW/scene.splinecode" className="mt-5"/>
          </div>

          <p className="hero__title2">AquaScaping</p>
          <p className="hero__subtitle">- Been playing drums since the age of 5</p>
          <p className="hero__subtitle">- Self-taught guitarist and bassist with 7 years of experience</p>
          <p className="hero__subtitle">- Extensive experience in recording software/hardware and music production</p>
          

          
          
          
        </div>
        
      </div>
      
    </main>
  );
}

export default Hero