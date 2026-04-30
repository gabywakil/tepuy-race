import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './styles/globals.css';

const Home                  = lazy(() => import('./pages/Home'));
const Sponsors              = lazy(() => import('./pages/Sponsors'));
const RaceSelection         = lazy(() => import('./pages/RaceSelection'));
const Checkout              = lazy(() => import('./pages/Checkout'));
const RegistrationConfirmed = lazy(() => import('./pages/RegistrationConfirmed'));
const AboutUs               = lazy(() => import('./pages/AboutUs'));
const OurProjects           = lazy(() => import('./pages/OurProjects'));

const PageLoader = () => (
  <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div style={{
      width: '36px', height: '36px',
      border: '3px solid rgba(244,211,94,0.2)',
      borderTop: '3px solid #f4d35e',
      borderRadius: '50%',
      animation: 'spin 0.8s linear infinite',
    }} />
    <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
  </div>
);

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="App" style={{
      fontFamily: "'Playfair Display', serif",
      color: '#f5f1e8',
      minHeight: '100vh',
      margin: 0, padding: 0, width: '100%',
      position: 'relative', /* ← clave para que .App::before se posicione dentro */
    }}>
      <Navbar scrollY={scrollY} />
      <Suspense fallback={<PageLoader />}>
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
