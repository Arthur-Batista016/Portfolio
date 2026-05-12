import React from 'react'
import './header.css'

const header = () => {
  return (
    <header className="text-white footer-details background-header" id='header'>
      <div className="container">

        <div className="d-flex flex-wrap justify-content-center align-items-center py-0">

       
          {/* Centro (logo estilizado) */}
          <div className="d-flex justify-content-center">
             <img className='logo' src="mylogo.png" alt="" />
          </div>

          {/* Direita (menu) */}
          <ul className="nav itens">
             <li className="nav-item item-btn">
              <a href="#intro" className="nav-link px-2 text-secondary">Início</a>
            </li>
            <li className="nav-item item-btn">
              <a href="#" className="nav-link px-2 text-secondary">Sobre Mim</a>
            </li>
            <li className="nav-item item-btn">
              <a href="#tec" className="nav-link px-2 text-secondary">Tecnologias</a>
            </li>
            <li className="nav-item item-btn">
              <a href="#proj" className="nav-link px-2 text-secondary">Projetos</a>
            </li>
            <li className="nav-item item-btn">
              <a href="#academic" className="nav-link px-2 text-secondary">Formação Academica</a>
            </li>
          </ul>

        </div>

      </div>
    </header>
  )
}

export default header