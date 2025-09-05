import { useState, useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/hero.jsx'
import Services from './components/Services.jsx'
import Capabilities from './components/Capabilities.jsx'
import ValueProposition from './components/ValueProposition.jsx'
import Clients from './components/Clients.jsx'
import Team from './components/Team.jsx'
import Blog from './pages/Blog.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [currentPage])

  const renderPage = () => {
    switch (currentPage) {
      case 'blog':
        return <Blog />
      case 'contact':
        return <Contact />
      case 'home':
      default:
        return (
          <>
            <Hero />
            <Services />
            <Capabilities />
            <ValueProposition />
            <Clients />
            <Team />
          </>
        )
    }
  }

  return (
    <div className="App">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer />
    </div>
  )
}

export default App
