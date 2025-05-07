import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServiceCarousel from './components/ServiceCarousel';
import Testimonials from './components/Testimonials';
import AdditionalInfo from './components/AdditionalInfo';
import FloatingButtons from './components/FloatingButtons';
import './index.css';

function App() {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <ServiceCarousel />
      <Testimonials />
      <AdditionalInfo />
      <FloatingButtons />
    </div>
  );
}

export default App;


