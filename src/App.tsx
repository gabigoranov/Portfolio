import './assets/styles/app.css'
import Hero from './components/Hero'
import About from './components/About'
import Header from './components/Header'
import Projects from './components/Projects'
import Education from './components/Education'
import Certification from './components/Certification'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Education />
      <Certification />
      <Contact />
      <Footer />
    </ThemeProvider>
  )
}

export default App
