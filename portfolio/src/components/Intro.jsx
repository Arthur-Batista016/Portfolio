import React from 'react'
import './intro.css'
const Intro = () => {
  return (
  <div>
  <div className="overflow-hidden p-3 p-md-5" id="body-intro">
  
  <div className="container">
    <div className="row align-items-center">
      
      <div className="col-md-6 p-lg-5">
        <h1 className="display-6 fw-bold" id="name">
          Arthur Bonvecchio Batista
        </h1>
        <h3 className="fw-normal mb-3" id="dev">
          Desenvolvedor Full-Stack
        </h3>
      </div>

      <div className="col-md-6 text-center" id="profile">
        <img src="/foto.png" alt="" />
      </div>

    </div>
  </div>

       
</div>

    <div id='next-intro'>
      <a href="#tec">
      <img  src="down-arrow.png" alt="" />
      </a>
    </div>
  </div>
  )
}

export default Intro