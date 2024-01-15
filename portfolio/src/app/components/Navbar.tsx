"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Navbar: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('')

  useEffect(() => {
    setCurrentPage('home')
  }, [])

  const handleLinkClick = (page: string) => {
    setCurrentPage(page)
  }

  return (
    <nav className="navbar">
      <Link href="/">
        <p className={`nav-link ${currentPage === 'home' ? 'text' : ''}`} onClick={() => handleLinkClick('home')}>
          Home
        </p>
      </Link>

      <Link href="/projects">
        <p className={`nav-link ${currentPage === 'projects' ? 'text' : ''}`} onClick={() => handleLinkClick('projects')}>
          Projects
        </p>
      </Link>

      <Link href="./Michael Di Giusepe - 2024.pdf" target='_blank'>
        <p className={`nav-link`} >
          Resume
        </p>
      </Link>

      <Link href="/contact">
        <p className={`nav-link ${currentPage === 'contact' ? 'text' : ''}`} onClick={() => handleLinkClick('contact')}>
          Contact
        </p>
      </Link>

      <style jsx>{`
        .text {
          color: skyblue;
        }
      `}</style>
    </nav>
  )
}

export default Navbar
