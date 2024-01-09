"use client"
import Link from 'next/link'
import React from 'react'

const Navbar: React.FC = () => {
  return (
    <nav className = "navbar">
          <Link href="/">
            <p className="nav-link">Home</p>
          </Link>
    
          <Link href="/projects">
            <p className="nav-link">Projects</p>
          </Link>
       
          <Link href="/resume">
            <p className="nav-link">Resume</p>
          </Link>
       
          <Link href="/contact">
            <p className="nav-link">Contact</p>
          </Link>
    </nav>
  )
}

export default Navbar