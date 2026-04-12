import { useState, useEffect } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Intro from './components/Intro'
import Tecnologies from './components/tecnologies'
import Footer from './components/footer'
import Projects from './components/projects'

function App() {

  useEffect(() => {
  const handleWheel = (e) => {
    const intro = document.getElementById("intro");
    if (!intro) return;

    const limite = intro.offsetHeight;

    if (window.scrollY + e.deltaY >= limite) {
      e.preventDefault();
      window.scrollTo(0, limite);
    }
  };

  window.addEventListener("wheel", handleWheel, { passive: false });

  return () => {
    window.removeEventListener("wheel", handleWheel);
  };
}, []);

  return (
    <>

      <Footer/>

      <section id="intro">
        <Intro />
      </section>

      <section id="tec">
        <Tecnologies />
      </section>

      <section>
        <Projects/>
      </section>

      
      
    </>
  )
}

export default App