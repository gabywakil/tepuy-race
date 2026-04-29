import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sponsors from './pages/Sponsors';
import RaceSelection from './pages/RaceSelection';
import Checkout from './pages/Checkout';
import RegistrationConfirmed from './pages/RegistrationConfirmed';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import OurProjects from './pages/OurProjects';
import './styles/globals.css';

function App() {
  const [scrollY, setScrollY] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

 return (
  <div className="App" style={{
    fontFamily: "'Playfair Display', serif",
    backgroundColor: '#0a4a42',
    color: '#f5f1e8',
    minHeight: '100vh',
    margin: 0,
    padding: 0,
    width: '100%',
    position: 'relative'
  }}>

    {/* 🌿 Hojas de palmera decorativas */}
    <div className="palm-bg">
      {[...Array(8)].map((_, i) => (
        <div className="palm-leaf" key={i}>
          <svg viewBox="0 0 200 400" xmlns="http://www.w3.org/2000/svg">
            <path d="M100,400 C80,300 20,250 10,150 C0,80 40,20 100,0 C160,20 200,80 190,150 C180,250 120,300 100,400Z" />
            <path d="M100,400 C60,320 10,280 5,200 C0,140 30,100 100,80 L100,400Z" opacity="0.5"/>
            <path d="M100,400 C140,320 190,280 195,200 C200,140 170,100 100,80 L100,400Z" opacity="0.5"/>
            <line x1="100" y1="400" x2="100" y2="0" stroke="#1a5c44" strokeWidth="3" opacity="0.4"/>
            <line x1="100" y1="300" x2="40"  y2="180" stroke="#1a5c44" strokeWidth="1.5" opacity="0.3"/>
            <line x1="100" y1="250" x2="160" y2="140" stroke="#1a5c44" strokeWidth="1.5" opacity="0.3"/>
            <line x1="100" y1="200" x2="30"  y2="110" stroke="#1a5c44" strokeWidth="1.5" opacity="0.3"/>
            <line x1="100" y1="160" x2="165" y2="80"  stroke="#1a5c44" strokeWidth="1.5" opacity="0.3"/>
          </svg>
        </div>
      ))}
    </div>

    <Navbar scrollY={scrollY} />

    <Routes>
      <Route path="/"                      element={<Home />} />
      <Route path="/sponsors"              element={<Sponsors />} />
      <Route path="/register"              element={<RaceSelection />} />
      <Route path="/checkout"              element={<Checkout />} />
      <Route path="/registration-confirmed" element={<RegistrationConfirmed />} />
      <Route path="/about"                 element={<AboutUs />} />
      <Route path="/projects"              element={<OurProjects />} />
    </Routes>

    <Footer />
  </div>
);
}

export default App;
