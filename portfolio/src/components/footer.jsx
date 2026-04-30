import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer d-flex flex-wrap justify-content-between align-items-center py-3 px-4">
      
      <div className="align-items-start" id='footer-texts'>
        <img src="/mylogo.png" alt="" id='footer-logo' />
        <h5>Desenvolvedor apaixonado por criar experiencias modernas, rápidas e intuitivas</h5>
      </div>

      <div id='social-medias'>


        <h1>Vamos Nos Conectar !</h1>

        <ul className="nav justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <img src="/gitlogo.webp" alt="" />
          </li>

          <li className="ms-3">
            <img src="/linkedas.webp" alt="" />
          </li>
        </ul>

        
      </div>

      <div id='line-footer' className='border-bottom'>
        <h1></h1>
      </div>

      <div id='final-footer'>
          <h3>Feito com 💙 e muito código!</h3>
        </div>
    
    </footer>
  )
}

export default Footer