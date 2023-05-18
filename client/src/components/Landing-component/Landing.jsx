import React from 'react'
import { NavLink } from 'react-router-dom'
import './landing.css'

const Landing = () => {
  return (
    <div className='btn-box'>
      <button className='btn'> <NavLink to='/home'> GO HOME </NavLink> </button>
    </div>
  )
}

export default Landing