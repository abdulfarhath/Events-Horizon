

import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/HomeRoute.css'

function HomeRoute() {
  return (
    <div className='HomePage'>
        <Navbar></Navbar>
        <div className="hero-section">
          <div className="intro-txt">
            <h2>EXPLORE EVENTS</h2>
            <h1>WELCOME TO EVENTS HORIZON</h1>
          </div>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default HomeRoute
