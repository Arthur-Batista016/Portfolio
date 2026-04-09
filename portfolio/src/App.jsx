import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Academic from './components/academic'


import Header from './components/header'
import Intro from './components/Intro'
import Tecnologies from './components/tecnologies'
import Projects from './components/projects'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Footer/>
    <Intro/>
    <Tecnologies/>
    <Academic/>
    <Projects/>
    

     
    </>
  )
}

export default App
