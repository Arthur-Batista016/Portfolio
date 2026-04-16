import { useEffect, useRef } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Intro from './components/Intro'
import Tecnologies from './components/tecnologies'
import Projects from './components/projects'
import Academic from './components/academic'
import Header from './components/header';
import Footer from './components/footer'


function App() {
  
    useEffect(() => {
    let isAnimating = false;

      const smoothScrollTo = (targetY, duration =  5000) => {
  const startY = window.scrollY;
  const diff = targetY - startY;
  let start;

  const ease = (t) => t < 0.5
  ? 4 * t * t * t
  : 1 - Math.pow(-2 * t + 2, 3) / 2;


  
  const step = (timestamp) => {
    if (!start) start = timestamp;
    const time = timestamp - start;
    const percent = Math.min(time / duration, 1);

    window.scrollTo(0, startY + diff * ease(percent));

    if (time < duration) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
};


    const handleScroll = (e) => {
      if (isAnimating) return;

      const section = document.elementFromPoint(
        window.innerWidth / 2,
        window.innerHeight / 2
      )?.closest("section");

      if (!section) return;

      const atTop = section.scrollTop === 0;
      const atBottom =
        section.scrollHeight - section.scrollTop <= section.clientHeight + 1;

      // ⬇️ Próxima section
      if (e.deltaY > 0 && atBottom) {
        const next = section.nextElementSibling;
        if (next) {
          isAnimating = true;
          next.scrollIntoView({ behavior: "smooth" });

          setTimeout(() => (isAnimating = false), 600);
        }
      }

      // ⬆️ Section anterior
      if (e.deltaY < 0 && atTop) {
        const prev = section.previousElementSibling;
        if (prev) {
          isAnimating = true;
          prev.scrollIntoView({ behavior: "smooth" });

          setTimeout(() => (isAnimating = false), 600);
        }
      }
    };

    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);









useEffect(() => {
  const elements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    {
      threshold: 0.2, // quando 20% aparece
    }
  );

  elements.forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}, []);
















  return (
    <>
     
       <Header/>

      <section id="intro">
        <Intro liberarScroll={() => (liberarScroll.current = true)} />
      </section>

      <section id="tec">
        <Tecnologies />
      </section>

<section id="academic">
        <Academic />
      </section>

       <section id="proj">
        <Projects />
      </section>

        <section id="contacts">
         
      </section>
       
       <Footer/>


  
       



    </>
  )
}

export default App