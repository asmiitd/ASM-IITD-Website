import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Events from './pages/Events.jsx'
import Talks from './pages/Talks.jsx'
import Team from './pages/Team.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  return (
    <div
      style={{
        fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
        color: '#241614',
        background: '#FAF5EA',
        minHeight: '100vh',
        overflowX: 'hidden',
      }}
    >
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/talks" element={<Talks />} />
        <Route path="/team" element={<Team />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
