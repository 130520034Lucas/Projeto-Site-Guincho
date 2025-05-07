import React from 'react';
import { Phone } from 'lucide-react';
import Logo from './Logo';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo e nome - centralizado em todas as telas */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-start items-center mb-3 md:mb-0">
            <Logo className="w-14 h-14 mr-2" />
            <h1 className="text-2xl md:text-3xl font-bold text-red-600 font-serif" style={{ textShadow: '1px 1px 0 #000' }}>
              A Service Auto Socorro
            </h1>
          </div>
          
          {/* Telefone e botões - reorganizados */}
          <div className="w-full md:w-2/3 flex flex-col items-center mb-3 md:mb-0">
            {/* Número de telefone */}
            <a 
              href="tel:+5541988355326" 
              className="flex items-center text-red-600 hover:text-red-800 transition-colors mb-4"
            >
              <span className="font-medium text-xl md:text-2xl" style={{ textShadow: '0.5px 0.5px 0 #000' }}>
                (41) 98835-5326
              </span>
            </a>
            
            {/* Botões lado a lado */}
            <div className="flex justify-center space-x-6 mb-3">
              <a 
                href="tel:+5541988355326"
                className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-full flex items-center transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                <span className="text-base">Ligar</span>
              </a>
              <a 
                href="https://wa.me/5541988355326" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <img 
                  src="/whatsapplogo.png" 
                  alt="WhatsApp" 
                  className="w-8 h-8 mr-2"
                  style={{ 
                    imageRendering: 'crisp-edges',
                    objectFit: 'contain'
                  }}
                />
                <span className="text-base">WhatsApp</span>
              </a>
            </div>
            
            {/* Instagram abaixo dos outros botões */}
            <a 
              href="https://www.instagram.com/allonsimioni/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-5 py-2 rounded-full flex items-center justify-center transition-colors hover:shadow-md"
              aria-label="Instagram"
            >
              <img 
                src="/instagram.png" 
                alt="Instagram" 
                className="w-15 h-9 mr-0"
                style={{ 
                  imageRendering: 'crisp-edges',
                  objectFit: 'contain'
                }}
              />
              <span className="text-base">Instagram</span>
            </a>
          </div>
          
          {/* Localização - visível apenas em desktop */}
          <div className="hidden md:block md:w-1/3 text-right">
            <p className="text-sm text-gray-600">
              São José dos Pinhais e região
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

















