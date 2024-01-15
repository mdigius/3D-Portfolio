"use client"
import React from 'react'
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react';
import Link from 'next/link';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <main>
      <div className="hero mt-20 mb-20">
        <div className="flex-1 mt-5 padding-x">
          <h1 className="hero__title">Michael Di Giuseppe</h1>
          <p className="hero__subtitle">Software Engineering student at Western University </p>

          <div className='spline-container'>
           <Spline scene="https://prod.spline.design/LvqbiIo9JA5QoUbK/scene.splinecode" className="" />
          </div>

          <h1 className="hero__title2">Work Sample - ChordSense</h1>
          <div className='spline-container'>
          <Spline scene="https://prod.spline.design/PY4VuAUXnJZmArgO/scene.splinecode" className='mb-3'/>
          </div>
          <div className='hero__subtitle'>
            <p>- Music theory application that I developed from scratch using Swift</p>
            <p>- Published to the App Store</p>
            <p>- Registered business in Ontario</p>
            <a style={{color: 'blue'}} href='/projects'>More Projects</a>
            </div>
          
            
          <h1 className="hero__title2">Programming Languages</h1>
          <div className='hero__subtitle'>
            <p>Profiency in:</p>
          </div>
          <div className='spline-container'>
          <Spline scene="https://prod.spline.design/IECKvPJxVMNT1g2G/scene.splinecode"/>
          </div>

          <h1 className="hero__title">Hobbies</h1>
          <div className='hero__subtitle'>
            <p>Music</p>
            <p>- Drummer with 16 years of experience</p>
            <p>- Self-taught guitarist and bassist with 7 years of experience</p>
            <p>- Extensive experience in recording software/hardware and music production</p>
            <p className="hero__title2">Click on the TV screen to play/pause!</p>
          </div>
          <div className='spline-container'>
          <Spline scene="https://prod.spline.design/7VqAs5RA8PcjxPOb/scene.splinecode" />
          </div>

          <h2 className="hero__title2">Art</h2>
          <div className='hero__subtitle'>
            <p>- Beginner artist</p>
            <p>- Enjoy being creative as I believe it directly translates into web development, resulting in better user experiences</p>
          </div>
          <div className='spline-container'>
            <Spline scene="https://prod.spline.design/V2Qa5ez7u6zXz6EW/scene.splinecode" className="mt-5"/>
          </div>
          </div>
          </div>
      
        
     
      
    </main>
  );
}

export default Hero