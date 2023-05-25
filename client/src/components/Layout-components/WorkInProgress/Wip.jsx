import './wip.css'
import {NavLink} from 'react-router-dom'
import LandingNav from '../Landing-Nav/Landing-Navbar'
import Footer from '../Footer/Footer'

const Wip = () => {
  return (
    <div className="wip-page-box">
        <LandingNav />

        <div className='wip-box'>
            <img className='wip-gif-one' src="http://www.imagenesanimadas.net/Personas/Obreros/Obrero-03.gif" alt="" />
            <div className="wip-title-box">
                <h1 className='wip-title-one'>Esta feature todavia no ha sido creada, el programador queria dormir.</h1>
                <h3 className='wip-title-two'>Trabajaremos en ella cuanto antes</h3>
                <button className='wip-btn'><NavLink className='wip-link' to='/home'> Back To Home </NavLink></button>
            </div>
            <img className='wip-gif-two' src="https://www.gifss.com/profesiones/obreros/obrero.gif" alt="" />
        </div>

        <Footer />
    </div>
  )
}

export default Wip