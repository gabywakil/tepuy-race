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
      width: '100%'
    }}>
      <style>{`/* tu css igual */`}</style>

      <Navbar scrollY={scrollY} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/register" element={<RaceSelection />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/registration-confirmed" element={<RegistrationConfirmed />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/projects" element={<OurProjects />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
