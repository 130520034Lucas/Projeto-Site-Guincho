import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <img 
      src="LogoAService.jpg" 
      alt="A Service Auto Socorro Logo" 
      className={className}
    />
  );
};

export default Logo;