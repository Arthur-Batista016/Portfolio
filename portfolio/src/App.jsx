import { useEffect } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Intro from './components/Intro'
import Tecnologies from './components/tecnologies'
import Projects from './components/projects'
import Academic from './components/academic'
import Header from './components/header'
import Footer from './components/footer'
import Conctact from './components/contactme'
import Aboutme from './components/aboutme'

function App() {

  // SCROLL ENTRE SECTIONS
  useEffect(() => {

    let isScrolling = false
    let scrollCount = 0

    const handleScroll = (e) => {

      if (isScrolling) return

      const sections = document.querySelectorAll("section")

      let currentSection = 0

      sections.forEach((section, index) => {

        const rect = section.getBoundingClientRect()

        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          currentSection = index
        }

      })

      // conta quantos scrolls o usuário deu
      scrollCount++

      // só muda de section depois de 3 scrolls
      if (scrollCount < 3) return

      // reseta contador
      scrollCount = 0

      // DESCER
      if (e.deltaY > 0) {

        const nextSection = sections[currentSection + 1]

        if (nextSection) {

          isScrolling = true

          nextSection.scrollIntoView({
            behavior: "smooth"
          })

          setTimeout(() => {
            isScrolling = false
          }, 800)
        }
      }

      // SUBIR
      if (e.deltaY < 0) {

        const prevSection = sections[currentSection - 1]

        if (prevSection) {

          isScrolling = true

          prevSection.scrollIntoView({
            behavior: "smooth"
          })

          setTimeout(() => {
            isScrolling = false
          }, 800)
        }
      }
    }

    window.addEventListener("wheel", handleScroll)

    return () => {
      window.removeEventListener("wheel", handleScroll)
    }

  }, [])





  // ANIMAÇÃO REVEAL
  useEffect(() => {

    const elements = document.querySelectorAll(".reveal")

    const observer = new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {
            entry.target.classList.add("active")
          }

        })

      },
      {
        threshold: 0.2
      }
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()

  }, [])





  return (
    <>

      <Header />

      <section id="intro">
        <Intro />
      </section>

      <section id="aboutme">
        <Aboutme />
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

      <section id="contact">
        <Conctact />
        <Footer />
      </section>

      

    </>
  )
}

export default App