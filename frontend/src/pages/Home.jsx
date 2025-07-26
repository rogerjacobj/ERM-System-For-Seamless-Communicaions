import React from 'react'
import {Link} from "react-router-dom"
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div>
        <header>
            <Navbar />
        </header>
        <section className="hero">
          <img src="" alt="" />
          <div className="hero-text">
            <h1 className="title">
              
            </h1>
            <p className='text-blue-700'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo fuga soluta voluptas aperiam, rem amet molestiae sit modi itaque id adipisci minus natus exercitationem totam, enim impedit! Ipsa, optio nulla.
              Doloremque ipsa consectetur impedit, sit, consequatur, eum at vitae asperiores excepturi deleniti iste officia numquam possimus unde corporis aspernatur! Ratione exercitationem, iure obcaecati culpa amet quisquam maiores illum earum beatae.
              Ea cupiditate reiciendis cum optio iste perspiciatis magnam eos quae sunt sapiente voluptates harum, voluptatem tempore? Dolore optio id minus, ipsum ratione esse libero eveniet cupiditate, aut impedit atque quidem.
            </p>
            <div className="tickets">
              <Link to="/dashboard" className='ticket'>Raise a Ticket</Link>
            <Link to="/dashboard" className='updates'>View Updates</Link>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Home