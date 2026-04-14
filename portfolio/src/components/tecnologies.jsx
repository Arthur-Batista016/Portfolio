import React from 'react'
import './tecnologies.css'

const tecnologies = () => {
  return (
    <div id='tec'>
         <h2 class="pb-2 border-bottom academic-text reveal" id='tec-title'>Tecnologias</h2>

        <div>
            <div>
            <h1 id='top-langs' className='reveal'><b>MINHAS ESPECIALIDADES</b></h1>
            
            <div id='top-langs-img' className='reveal'>
              <img id='java' src="/Java-Icon.png" alt="" />
              <img id='react' src="/react-icon.png" alt="" />
              <img id='Sql' src="/sql.png" alt="" />
            </div>
            </div>

            <div>
                <h1 id='other-langs' className='reveal'><b>OUTROS CONHECIMENTOS</b></h1>

                <div id='other-langs-img' className='reveal'>
                   <img id='python' src="python.png" alt="" />
                  <img id='csharp' src="csharp.png" alt="" />
                  <img id='pbi' src="pbi.png" alt="" />
                  <img id='linux' src="linux.png" alt="" />
                  <img src="ts.png" alt="" />
                </div>
            </div>
        </div>

        <div id='next-tec' className='reveal'>
          <a href="#proj">
          <img  src="down-arrow.png" alt="" />
          </a>
    </div>
    </div>
  )
}

export default tecnologies