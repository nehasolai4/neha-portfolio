import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'



function App(){
  return(
    <div>
      <Navbar />
      <Hero/>
      <About/>
      <Projects/>      
      <Skills/>
      <Footer/>
    </div>
  )
}


export default App
