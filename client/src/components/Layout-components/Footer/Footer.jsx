import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer-home">
            <div className="footer-divider up"></div>
            <p className="footer-text"> © 2023 Remo Corporation. Todos los derechos reservados a <a href="https://store.steampowered.com">Steam.</a> Todos los diseños usados fueron inspirados en Steam. Todas las marcas registradas pertenecen a sus respectivos dueños en EE. UU. y otros países.
            Todos los precios son ficticios y no incluyen IVA (donde sea aplicable).   <a href="https://store.steampowered.com/privacy_agreement/?snr=1_44_44_"> Política de Privacidad </a>   |   <a href="https://store.steampowered.com/legal/?snr=1_44_44_">Información legal</a>   |   <a href="https://store.steampowered.com/subscriber_agreement/?snr=1_44_44_">Acuerdo de Suscriptor a Steam</a>   |   <a href="https://store.steampowered.com/steam_refunds/?snr=1_44_44_">Reembolsos</a>   |   <a href="https://store.steampowered.com/account/cookiepreferences/?snr=1_44_44_">Cookies</a> </p>
            <div className="footer-divider down"></div>
    </footer>
  )
}

export default Footer