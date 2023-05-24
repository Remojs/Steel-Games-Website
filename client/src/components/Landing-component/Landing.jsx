import React from 'react'
import { NavLink } from 'react-router-dom'
import LandingNav from '../Layout-components/Landing-Nav/Landing-Navbar'
import './landing.css'

const Landing = () => {
  return (
    <div className='component-box'>
      <LandingNav />
      <div className='landing'>
        <button className='btn'> <NavLink to='/home' className='btn-link'> Go to Steel </NavLink> </button>
      </div>
    </div>
  )
}

export default Landing