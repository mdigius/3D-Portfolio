"use client"
import React from 'react'
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react';
import Link from 'next/link';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    
    <div className = "hero mt-20">
        <div className="flex-1 mt-5 padding-x">
          <h1 className = "hero__title">Michael Di Giuseppe</h1>
          <p className="hero__subtitle">Software Engineer</p>
          <div>
          <Spline scene="https://prod.spline.design/LvqbiIo9JA5QoUbK/scene.splinecode" className="-mt-10" />
          </div>
          </div>
      </div>

  )
}

export default Hero