import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-[60vh] md:h-[70vh] bg-gray-900 overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{
          backgroundImage: 'url("/imagen8.jpg")',
          filter: 'brightness(0.6)'
        }}
      ></div>
      
      {/* Text overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4" style={{ textShadow: '2px 2px 0 #000' }}>
          Guincho para veículos leves
        </h2>
        <p className="text-xl md:text-2xl text-center max-w-2xl" style={{ textShadow: '1px 1px 0 #000' }}>
          Atendimento rápido e eficiente 24 horas por dia
        </p>
        <a 
          href="https://wa.me/5541988355326" 
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-8 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full text-lg font-medium transition-transform hover:scale-105 shadow-lg"
          style={{ textShadow: '1px 1px 0 #000' }}
        >
          Solicitar guincho agora
        </a>
        <p className="mt-4 text-lg font-medium text-white" style={{ textShadow: '1px 1px 0 #000' }}>
          Faça já seu Orçamento
        </p>
      </div>
    </div>
  );
};

export default Hero;







