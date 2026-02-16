import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
    <Router>
      <div className="App" style={{ 
        fontFamily: "'Playfair Display', serif",
        backgroundColor: '#0a4a42',
        color: '#f5f1e8',
        minHeight: '100vh',
        margin: 0,
        padding: 0,
        width: '100%'
      }}>
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Inter:wght@400;500;600;700&display=swap');
            
            @keyframes float {
              0%, 100% { transform: translate(0, 0) rotate(0deg); }
              33% { transform: translate(30px, -30px) rotate(2deg); }
              66% { transform: translate(-20px, 20px) rotate(-2deg); }
            }
            
            @keyframes fadeInUp {
              from {
                opacity: 0;
                transform: translateY(30px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            
            @keyframes pulse {
              0%, 100% { transform: scale(1); }
              50% { transform: scale(1.05); }
            }
          `}
        </style>
        
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
    </Router>
  );
}

export default App;