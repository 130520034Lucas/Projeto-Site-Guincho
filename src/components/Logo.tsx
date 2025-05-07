import React from 'react';
// Importe a imagem diretamente
import logoImage from '../assets/logoaservice.jpg';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <img 
      src={logoImage} 
      alt="A Service Auto Socorro Logo" 
      className={className}
    />
  );
};

export default Logo;










