import { NavLink } from 'react-router-dom'
import './landing-nav.css'

const LandingNav = () => {
  return (
    <div className='nav-div'>
        <nav className='nav'> 
          <div className='logo-box'>
            <h1 className="nav-title"> STEEL </h1>
            <img src="https://github.com/Remojs/PI-Videogames/blob/master/client/public/img/LogoSteel.png?raw=true" alt="SteelGaming" className='logo' />
          </div>
          <div className='btn-box'>
            <button className='nav-btn'> <NavLink to='/workinprogress' className='nav-btn-link'> Login Account </NavLink></button>
                <button className='nav-btn install'> <NavLink to='/workinprogress' className='nav-btn-link'><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5"/></svg> Install Steel </NavLink></button>
          </div>
        </nav>
      </div>
  )
}

export default LandingNav