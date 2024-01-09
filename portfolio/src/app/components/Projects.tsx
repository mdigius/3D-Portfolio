import Spline from '@splinetool/react-spline'
import React from 'react'
import Image from 'next/image'

const Projects = () => {
  return (
    <main>
    <div className="hero mt-20">
      <div className="flex-1 mt-5 padding-x">
        <h1 className="hero__title">ChordSense</h1>
        <p className="hero__subtitle">Technologies: Swift, SwiftUI, SwiftData</p>
        <div>
        <Spline scene="https://prod.spline.design/C58UoR3CbthV7m49/scene.splinecode" />
          </div>
        

        <h1 className="hero__title">HeroHub</h1>
        <p className="hero__subtitle">Technologies: NextJS, React, TypeScript, JavaScript, CORS, REST API, MongoDB</p>
        <div>
        <Spline scene="https://prod.spline.design/O9vV9RGtNLX1xX2S/scene.splinecode" className="object-contain"/>
          </div>
        <div className='hero__subtitle'>
            <p> ◦ Final project for SE3316 course to build a full stack web app, featuring a superhero-themed social media platform</p>
            <p> ◦ Includes an authentication system, with salted password hashing </p>
            <p> ◦ RESTful API to provide functionality to the client, while preventing malicious injections with proper input
                  sanitization </p>
            <p> ◦ Admin account to disable other users, hide inappropriate comments, and respond to DMCA takedown requests </p>
            <p> ◦ Received a mark of 99% on the assignment</p>
        </div>
        
        <h1 className="hero__title">The Enchanted Blades</h1>
        <p className="hero__subtitle">Technologies: Python, Pygame</p>

        <div>
        <Spline scene="https://prod.spline.design/Vv75dNPTZ2YIAEuQ/scene.splinecode" />
          </div>
        
        
      
      </div>
    </div>
  </main>
    
  )
}

export default Projects