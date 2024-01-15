import Spline from '@splinetool/react-spline'
import React from 'react'
import Image from 'next/image'

const Projects = () => {
  return (
    <main>
    <div className="hero mt-20 mb-20">
      <div className="flex-1 mt-5 padding-x">
      <h1 className="hero__title">Projects</h1>
      <p className='hero__subtitle'>Some of my favourite coding projects. More info available on my <a style={{color: 'blue'}} href='https://github.com/mdigius' target="_blank">GitHub</a>.</p>

        <h1 className="hero__title">ChordSense</h1>
        <p className="hero__subtitle">Technologies: Swift, SwiftUI, SwiftData</p>
        <p className='hero__subtitle'>- View on the <a style={{color: 'blue'}} href='https://apple.co/46o7lPk' target="_blank">App Store</a>.</p>
        <div className='spline-container'>
        <Spline scene="https://prod.spline.design/C58UoR3CbthV7m49/scene.splinecode" />
          </div>

          <div className='hero__subtitle'>
            <p> ◦ Co-founder and independent developer of the iOS version of ChordSense, a published app designed to simplify
                  music theory learning</p>
            <p> ◦ Stores user’s music creations and settings with the newly introduced SwiftData framework </p>
            <p> ◦ Designed marketing assets for the app including multiple logos, app description, and App Store previews </p>
            <p> ◦ Implemented in-app purchases and the handling of transactions with Apple StoreKit </p>
        </div>
        

        <h1 className="hero__title">HeroHub</h1>
        <p className="hero__subtitle">Technologies: NextJS, React, TypeScript, JavaScript, CORS, REST API, MongoDB</p>
        <p className='hero__subtitle'>- View on <a style={{color: 'blue'}} href='https://github.com/mdigius/se3316-mdigius-lab4' target="_blank">GitHub</a>.</p>
        <div className='spline-container'>
        <Spline scene="https://prod.spline.design/O9vV9RGtNLX1xX2S/scene.splinecode" className="object-contain"/>
          </div>
        <div className='hero__subtitle'>
            <p> ◦ Final project for SE3316 course to build a full stack web app, featuring a superhero-themed social media platform</p>
            <p> ◦ Includes an authentication system, with salted password hashing </p>
            <p> ◦ RESTful API to provide functionality to the client, while preventing malicious injections with proper input
                  sanitization </p>
            <p> ◦ Admin account to disable other users, hide inappropriate comments, and respond to DMCA takedown requests </p>
            <p> ◦ Hosted the application on an AWS web server </p>
            <p> ◦ Received a mark of 99% on the assignment</p>
        </div>

        <h1 className="hero__title">Greenguard Systems</h1>
        <p className="hero__subtitle">Technologies: NextJS, React Leaflet, MongoDB</p>
        <p className='hero__subtitle'>- View on <a style={{color: 'blue'}} href='https://github.com/mdigius/greenguard' target="_blank">GitHub</a>.</p>

        <div className='spline-container'>
        <Spline scene="https://prod.spline.design/uz3sTgah5aVm4hmx/scene.splinecode" />
          </div>
          <div className='hero__subtitle'>
            <p> ◦ Submission for the 2024 Western Engineering Competition</p>
            <p> ◦ Challenged to develop a system that will help emergency services track and report natural disasters</p>
            <p> ◦ Worked with a group of 3 others to complete the task in only 7 hours</p>
            <p> ◦ A valuable learning experience with an emphasis on teamwork and communication</p>
            <p> ◦ Placed 3rd amongst 20+ competing teams</p>
        </div>
        
        <h1 className="hero__title">The Enchanted Blades</h1>
        <p className="hero__subtitle">Technologies: Python, Pygame</p>
        <p className='hero__subtitle'>- View on <a style={{color: 'blue'}} href='https://github.com/mdigius/The-Enchanted-Blades' target="_blank">GitHub</a>.</p>

        <div className='spline-container'>
        <Spline scene="https://prod.spline.design/Vv75dNPTZ2YIAEuQ/scene.splinecode" />
          </div>
          <div className='hero__subtitle'>
            <p> ◦ Final group project for the SE2250 course, entailing the creation of an intricate RPG game</p>
            <p> ◦ Engineered a wave-based combat system featuring animated adversaries and player attack sequences</p>
            <p> ◦ Implemented object-oriented principles and extensively documented the project with UML diagrams </p>
            <p> ◦ Collaborated seamlessly within a team of three programmers, utilizing Git for version control</p>
            <p> ◦ Conducted a live presentation of the game and provided comprehensive explanations, along with inclusion of UML
                  diagrams in the project’s README.md on GitHub</p>
            <p> ◦ Received a mark of 100% on the assignment</p>
        </div>
        
      
      </div>
    </div>
  </main>
    
  )
}

export default Projects