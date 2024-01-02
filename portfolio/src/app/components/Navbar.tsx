"use client"
import Link from 'next/link'
import React from 'react'

const Navbar: React.FC = () => {
  return (
    <nav className = "navbar">
          <Link href="/">
            <p className="nav-link">Home</p>
          </Link>
        
          <Link href="/about">
            <p className="nav-link">About</p>
          </Link>
       
          <Link href="/services">
            <p className="nav-link">Projects</p>
          </Link>
       
          <Link href="/pricing">
            <p className="nav-link">Resume</p>
          </Link>
       
          <Link href="/contact">
            <p className="nav-link">Contact</p>
          </Link>
       
    </nav>
  )
}

export default Navbar