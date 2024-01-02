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
          <p className="hero__subtitle">Software Engineering Student</p>
          <div>
           <Spline scene="https://prod.spline.design/LvqbiIo9JA5QoUbK/scene.splinecode" className="-mt-10" />
          </div>
        </div>
      </div>

      <div className="hero">
        <div className="flex-1 mt-5 padding-x">
          <h1 className="hero__title">About Me</h1>


          <h1 className="hero__title2">Projects</h1>
          <p className="hero__subtitle">Quick look at my software projects. See more</p>

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