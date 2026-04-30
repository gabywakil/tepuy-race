import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './styles/globals.css';

// Lazy load all pages — only downloaded when the user navigates there
const Home                 = lazy(() => import('./pages/Home'));
const Sponsors             = lazy(() => import('./pages/Sponsors'));
const RaceSelection        = lazy(() => import('./pages/RaceSelection'));
const Checkout             = lazy(() => import('./pages/Checkout'));
const RegistrationConfirmed = lazy(() => import('./pages/RegistrationConfirmed'));
const AboutUs              = lazy(() => import('./pages/AboutUs'));
const OurProjects          = lazy(() => import('./pages/OurProjects'));

function App() {
  const [scrollY, setScrollY] = React.useState(0);

  React.useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
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

      <Suspense fallback={null}>
        <Routes>
          <Route path="/"                       element={<Home />} />
          <Route path="/sponsors"               element={<Sponsors />} />
          <Route path="/register"               element={<RaceSelection />} />
          <Route path="/checkout"               element={<Checkout />} />
          <Route path="/registration-confirmed" element={<RegistrationConfirmed />} />
          <Route path="/about"                  element={<AboutUs />} />
          <Route path="/projects"               element={<OurProjects />} />
        </Routes>
      </Suspense>

      <Footer />
    </div>
  );
}

export default App;
