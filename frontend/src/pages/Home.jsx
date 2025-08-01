import React from 'react'
import {Link} from "react-router-dom"
import Navbar from '../components/Navbar'
import Bros from '../assets/Hero/Handshake_Light.png'

const Home = () => {
  return (
    <div>
        <header>
            <Navbar />
        </header>
        <section className="hero relative flex flex-col items-start justify-center px-16 py-8">
          <div className="flex flex-col gap-6 max-w-lg items-start z-10">
            <div className="small-text w-[30ch]">
              <p>Bridge the gap between employees and HR. One platform for all your workplace conversations</p>
            </div>
            <div className="heading">
              <h1 className='text-4xl w-[12ch] font-bold text-left'>Making A Difference:</h1>
            </div>
            <div className="description">
              <h1 className='text-4xl w-[15ch] font-bold text-blue-400 text-left'>Communication Starts with You</h1>
            </div>
          </div>
          <img 
            src={Bros} 
            alt="" 
            className="w-1/2 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-80 pointer-events-none"
            style={{zIndex: 1}}
          />
        </section>
        <section className="hero relative flex flex-col items-end justify-start px-16 poadding-bottom-8">
          <div className="flex flex-col gap-2 max-w-lg items-end z-10 ">
            <div className="heading">
              <h1 className='text-4xl w-[12ch] font-bold text-right'>A Small Act Of</h1>
            </div>
            <div className="description">
              <h1 className='text-4xl w-[15ch] font-bold text-blue-400 text-right'>Communication</h1>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Home