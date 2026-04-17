import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer d-flex flex-wrap justify-content-between align-items-center py-3 px-4">
      
      <div className="d-flex align-items-center">
        <img src="/mylogo.png" alt="" id='footer-logo' />
      </div>

      <div id='social-medias'>
        <ul className="nav justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <img src="/gitlogo.webp" alt="" />
          </li>

          <li className="ms-3">
            <img src="/linkedas.webp" alt="" />
          </li>
        </ul>
      </div>

    </footer>
  )
}

export default Footer