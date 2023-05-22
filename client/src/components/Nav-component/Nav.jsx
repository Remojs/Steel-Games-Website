import React from 'react'
import { NavLink } from 'react-router-dom'
import './nav.css'

const Nav = () => {
  return (
    <>
        <nav className="nav-home">
            <div className='icon-box'>
                <h1 className="steel-title"> STEEL </h1>
                <img src="https://github.com/Remojs/PI-Videogames/blob/master/client/public/img/LogoSteelNav.png?raw=true" alt="SteelGaming" className='icon' />
            </div>

            <div className="links-nav">
                <h4 className="link"><NavLink to='/' className="link"> HOME </NavLink></h4>
                <h4 className="link"><NavLink to='/' className="link"> ABOUT </NavLink></h4>
                <h4 className="link"><NavLink to='/createGame' className="link"> CREATE GAME </NavLink></h4>
            </div>
        
            <div className='btn-box'>
                <button className='nav-btn'> Login Account </button>
                <button className='nav-btn install'> <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5"/></svg> Install Steel </button>
            </div>
        </nav>
    </>
  )
}

export default Nav