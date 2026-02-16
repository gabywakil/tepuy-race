import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Overview from '../components/Overview';
import InfoHub from '../components/InfoHub';
import MainSponsors from '../components/MainSponsors';
import Prizes from '../components/Prizes';
import RegistrationCTA from '../components/RegistrationCTA';
import SocialMedia from '../components/SocialMedia';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Overview />
      <InfoHub />
      <MainSponsors />
      <Prizes />
      <RegistrationCTA />
      <SocialMedia />
      
      
    </>
  );
};

export default Home;