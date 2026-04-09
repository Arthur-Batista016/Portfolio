import React from 'react'

const Intro = () => {
  return (
     <div
        class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-start"
      >
        <div class="col-md-6 p-lg-5 mx-auto my-5">
          <h1 class="display-3 fw-bold">Arthur Bonvecchio Batista</h1>
          <h3 class="fw-normal text-muted mb-3">
            Desenvolvedor Full-Stack
          </h3>
          <div class="d-flex gap-3 justify-content-start lead fw-normal">
            <a class="icon-link" href="#">
              Learn more
              <svg class="bi" aria-hidden="true">
                <use xlink:href="#chevron-right"></use>
              </svg>
            </a>
            <a class="icon-link" href="#">
              Buy
              <svg class="bi" aria-hidden="true">
                <use xlink:href="#chevron-right"></use>
              </svg>
            </a>
          </div>
        </div>
        <div class="product-device shadow-sm d-none d-md-block"></div>
        <div
          class="product-device product-device-2 shadow-sm d-none d-md-block"
        ></div>
      </div>
  )
}

export default Intro