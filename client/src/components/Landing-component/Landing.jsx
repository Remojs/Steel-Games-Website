import React from 'react'
import { Navlink } from 'react-router-dom'
import './landing.css'

const Landing = () => {
  return (
    <div className='btn-box'>
      <button className='btn'> <Navlink to='/home'> Go to Store </Navlink> </button>
    </div>
  )
}

export default Landing