import React from 'react'
import './intro.css'
const Intro = () => {
  return (
     <div
        class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-start" id='body-intro'
      >
        <div class="col-md-6 p-lg-5 mx-auto my-5">
          <h1 class="display-3 fw-bold">Arthur Bonvecchio Batista</h1>
          <h3 class="fw-normal  mb-3" id='dev'>
            Desenvolvedor Full-Stack
          </h3>
        </div>
        <div class="product-device shadow-sm d-none d-md-block"></div>
        <div
          class="product-device product-device-2 shadow-sm d-none d-md-block"
        ></div>

        <div id='profile'>
          <img src="/foto.png" alt="" />
        </div>

      </div>
  )
}

export default Intro