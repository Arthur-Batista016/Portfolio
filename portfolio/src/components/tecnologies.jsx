import React from 'react'
import './tecnologies.css'

const tecnologies = () => {
  return (
    <div>
        <h1 id="tec-title">TECNOLOGIAS</h1>

        <div>
            <div>
            <h1>MINHAS ESPECIALIDADES</h1>
            
            <div id='top-langs-img'>
              <img id='java' src="/Java-Icon.png" alt="" />
              <img id='react' src="/react-icon.png" alt="" />
              <img id='Sql' src="/sql.png" alt="" />
            </div>
            </div>

            <div>
                <h1>OUTROS CONHECIMENTOS</h1>
                <div id='other-langs-img'>
                  <img id='PBI' src="" alt="" />
                  <img id='dot-Net' src="" alt="" />
                  <img id='typeScript' src="" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default tecnologies