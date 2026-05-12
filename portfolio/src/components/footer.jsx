import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer d-flex flex-wrap justify-content-between align-items-center py-3 px-4">
      
      <div className="align-items-start" id='footer-texts'>
        <img src="/mylogo.png" alt="" id='footer-logo' />
        <h5>Desenvolvedor apaixonado por criar experiencias modernas, rápidas e intuitivas</h5>
      </div>

      <div id='social-medias' className='reveal'>

        <h1 className='reveal'>Vamos Nos Conectar !</h1>

        <ul className="nav justify-content-end list-unstyled d-flex">

          {/* GITHUB */}
          <li className="ms-3 reveal">
            <a 
              href="https://github.com/Arthur-Batista016"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/gitlogo.webp" alt="GitHub" />
            </a>
          </li>

          {/* LINKEDIN */}
          <li className="ms-3 reveal">
            <a 
              href="https://www.linkedin.com/in/arthurbbatista/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className='reveal' src="/linkedas.webp" alt="LinkedIn" />
            </a>
          </li>

        </ul>

      </div>

      <div id='line-footer' className='reveal'>
        <img className='reveal' src="line-footer.png" alt="" />
      </div>

      <div id='final-footer' className='reveal'>
        <h3>Feito com 💙 e muito código!</h3>
      </div>

      <div className="footer-line reveal"></div>
    
      <div id='footer-symbol' className='reveal'>
        <img src="/footersymbol.png" alt="" />
      </div>

      <div id='copyright'>
        <h2 className='reveal'>@ 2026 ABB Todos os Direitos Reservados</h2>
      </div>

    </footer>
  )
}

export default Footer