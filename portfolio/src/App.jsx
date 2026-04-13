import { useEffect, useRef } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Intro from './components/Intro'
import Tecnologies from './components/tecnologies'
import Footer from './components/footer'
import Projects from './components/projects'
import Academic from './components/academic'

function App() {


  


  return (
    <>
      <Footer/>

      <section id="intro">
        <Intro liberarScroll={() => (liberarScroll.current = true)} />
      </section>

      <section id="tec">
        <Tecnologies />
      </section>

       <section id="tec">
        <Academic />
      </section>

       <section id="proj">
        <Projects />
      </section>
    </>
  )
}

export default App