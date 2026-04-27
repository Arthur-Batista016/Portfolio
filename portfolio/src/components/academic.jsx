import React from 'react'
import "./academic.css"
const academic = () => {
  return (
    <div>
     <div class="container px-4 py-5" id='background-academic'>
        <h2 class="pb-2 border-bottom academic-text reveal">Formação Acadêmica</h2>
        <div class="row g-4 py-5  row-cols-lg-3">
          <div class="first-course" id='itens-academic'>
            <div
              class="feature-icon d-inline-flex align-items-center justify-content-center  fs-2 mb-3"
            >
             <img id='first-logo' src="/etec.png" alt="" className='reveal' />
            </div>
            <h3 className='reveal'>Desenvolvimento de Sistemas</h3>
            <p className='reveal'>
              Curso Técnico integrado ao Ensino Médio, com duração de 3 anos, 
              no qual adquiri conhecimentos em lógica de programação, algoritmos,
               redes de computadores e boas práticas de desenvolvimento de software, 
               além de experiência com linguagens como Java, Python e C# (.NET).
            </p>
          </div>
          
          <div class="feature col" id='itens-academic'>
            <div
              class="feature-icon d-inline-flex align-items-center justify-content-center  fs-2 mb-3"
            >
             <img id='second-logo' src="/eniac.webp" alt="" className='reveal'/>
            </div>
            <h3 className='reveal'>Engenharia de Software</h3>
            <p className='reveal'>
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
      
    <div id='next-project'>
      <a href="#proj">
      <img  src="down-arrow.png" alt="" />
      </a>
    </div>
      </div>
  )
}

export default academic