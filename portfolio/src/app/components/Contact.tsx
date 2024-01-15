import Spline from '@splinetool/react-spline'
import React from 'react'

const Contact = () => {
  return (
    <main>
    <div className="hero mt-20">
      <div className="flex-1 mt-5 padding-x">
        <h1 className="hero__title mb-10">Contact Info:</h1>
       
        <div className='contact-card max-w-xl'>
          <div className='-mt-3 ml-5 mb-5'>
          <h1 className='hero__title2'>Michael Di Giuseppe</h1>
          <p className='hero__subtitle'>(416) 826-7542</p>
          <p className='hero__subtitle'><a style={{color: 'blue'}} href='mailto:mdigi2012@gmail.com' target="_blank">mdigi2012@gmail.com</a></p>
          <p className='hero__subtitle'>London, ON</p>
          </div>
          
          </div>
      </div>
    </div>
  </main>
  )
}

export default Contact