import React from 'react'
import './tecnologies.css'

const tecnologies = () => {
  return (
    <div>
        <h1 id="tec-title"><b>TECNOLOGIAS</b></h1>

        <div>
            <div>
            <h1 id='top-langs'><b>MINHAS ESPECIALIDADES</b></h1>
            
            <div id='top-langs-img'>
              <img id='java' src="/Java-Icon.png" alt="" />
              <img id='react' src="/react-icon.png" alt="" />
              <img id='Sql' src="/sql.png" alt="" />
            </div>
            </div>

            <div>
                <h1 id='other-langs'><b>OUTROS CONHECIMENTOS</b></h1>

                <div id='other-langs-img'>
                   <img id='python' src="python.png" alt="" />
                  <img id='csharp' src="csharp.png" alt="" />
                  <img id='pbi' src="pbi.png" alt="" />
                  <img id='linux' src="linux.png" alt="" />
                  <img src="ts.png" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default tecnologies