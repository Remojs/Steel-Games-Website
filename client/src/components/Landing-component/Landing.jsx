import React from 'react'
import { NavLink } from 'react-router-dom'
import './landing.css'

const Landing = () => {
  return (
    <div className='component-box'>

      <div className='nav-div'>
        <nav className='nav'> 
          <button className='nav-btn'> Login Account </button>
          <button className='nav-btn install'> <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5"/></svg> Install Steel </button>
        </nav>
      </div>

      <div className='landing'>
        <button className='btn'> <NavLink to='/home' className='btn-link'> Go to Steel </NavLink> </button>
      </div>
    </div>
  )
}

export default Landing