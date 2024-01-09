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

      <div className="hero">
        <div className="flex-1 padding-x">
          <h1 className="hero__title2">My Work - ChordSense</h1>
          <div className='flex-1'>
          <Spline scene="https://prod.spline.design/PY4VuAUXnJZmArgO/scene.splinecode" className='-mt-20 mb-3'/>
          <div className='hero__subtitle'>
            <p>- Music theory application that I developed from scratch using Swift</p>
            <p>- Published to the App Store</p>
            <p>- Registered business in Ontario</p>
            <a style={{color: 'darkblue'}} href='/projects'>More Projects</a>
            </div>
          </div>
            
          <h1 className="hero__title2">Programming Languages</h1>
          <p className="hero__subtitle">Profiency in:</p>
          <div>
          <Spline scene="https://prod.spline.design/IECKvPJxVMNT1g2G/scene.splinecode" className="-mt-20"/>
          </div>

          <h1 className="hero__title2">Hobbies</h1>
          <p className="hero__subtitle">Music</p>
          <p className="hero__subtitle">AquaScaping</p>
          <p className="hero__subtitle">Art</p>
          
        </div>
        
      </div>
      
    </main>
  );
}

export default Hero