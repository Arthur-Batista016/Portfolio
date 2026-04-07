import React from 'react'
import "./academic.css"
const academic = () => {
  return (
     <div class="container px-4 py-5" id="featured-3">
        <h2 class="pb-2 border-bottom academic-text">Formação Acadêmica</h2>
        <div class="row g-4 py-5  row-cols-lg-3">
          <div class="first-course">
            <div
              class="feature-icon d-inline-flex align-items-center justify-content-center  fs-2 mb-3"
            >
             <img id='first-logo' src="/etec.png" alt="" />
            </div>
            <h3>Desenvolvimento de Sistemas</h3>
            <p>
              Curso Técnico integrado ao Ensino Médio, com duração de 3 anos, 
              no qual adquiri conhecimentos em lógica de programação, algoritmos,
               redes de computadores e boas práticas de desenvolvimento de software, 
               além de experiência com linguagens como Java, Python e C# (.NET).
               


            </p>
          </div>
          <div class="feature col">
            <div
              class="feature-icon d-inline-flex align-items-center justify-content-center  fs-2 mb-3"
            >
             <img id='second-logo' src="/eniac.webp" alt="" />
            </div>
            <h3>Engenharia de Software</h3>
            <p>
              Curso superior de bacharelado com duração de 4 anos, com previsão de conclusão em 2030. 
              Atualmente em fase inicial da graduação, com foco na construção de uma base sólida em 
              conceitos fundamentais da área de tecnologia, incluindo lógica de programação, algoritmos e 
              fundamentos da computação.
            </p>
          </div>
          <div class="feature col">
          </div>
        </div>
      </div>
  )
}

export default academic