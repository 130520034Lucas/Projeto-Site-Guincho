import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';

const FloatingButtons: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  // Show buttons after scrolling down a bit
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  
  // Add an animation class when buttons become visible
  const visibilityClass = isVisible 
    ? 'opacity-100 translate-y-0' 
    : 'opacity-0 translate-y-10 pointer-events-none';
  
  return (
    <div className={`fixed right-4 bottom-4 flex flex-col gap-3 transition-all duration-300 ease-in-out z-50 ${visibilityClass}`}>
      <a 
        href="tel:+5541988355326"
        className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
        aria-label="Ligar agora"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
};

export default FloatingButtons;

