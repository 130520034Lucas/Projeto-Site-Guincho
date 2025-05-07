import React, { useState, useCallback, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Car, Droplet, Disc, Battery, Map, Calendar } from 'lucide-react';

const carouselServices = [
  {
    id: 1,
    image: "/imagen2.jpg",
    title: "Reboque para carros de passeio",
    description: "Serviço de guincho profissional para veículos leves com segurança e rapidez."
  },
  {
    id: 2,
    image: "/imagen3.jpg",
    title: "Resgate em qualquer local",
    description: "Atendemos em estradas, rodovias e vias urbanas com equipamentos adequados."
  },
  {
    id: 3,
    image: "/imagen4.jpg",
    title: "Transporte seguro",
    description: "Seu veículo transportado com toda segurança e cuidado necessário."
  },
  {
    id: 4,
    image: "/imagen5.jpg",
    title: "Atendimento 24 horas",
    description: "Disponíveis a qualquer hora para auxiliar você."
  },
  {
    id: 5,
    image: "/imagen6.jpg",
    title: "Equipamentos modernos",
    description: "Utilizamos equipamentos adequados para cada tipo de situação."
  },
  {
    id: 6,
    image: "/imagen7.jpg",
    title: "Profissionais experientes",
    description: "Equipe treinada e capacitada para melhor atendimento."
  },
  {
    id: 7,
    image: "/imagen8.jpg",
    title: "Cobertura regional",
    description: "Atendimento em toda região metropolitana."
  },
  {
    id: 8,
    image: "/imagen9.jpg",
    title: "Serviço de qualidade",
    description: "Comprometimento com a satisfação do cliente."
  }
];

const iconServices = [
  { icon: <Car className="w-6 h-6" />, name: "Colisão" },
  { icon: <Droplet className="w-6 h-6" />, name: "Pane Seca" },
  { icon: <Disc className="w-6 h-6" />, name: "Troca de Pneu" },
  { icon: <Battery className="w-6 h-6" />, name: "Socorro de Bateria" },
  { icon: <Map className="w-6 h-6" />, name: "Viagens" },
  { icon: <Calendar className="w-6 h-6" />, name: "Eventos" }
];

const ServiceCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === carouselServices.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? carouselServices.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    let interval: number | undefined;
    
    if (isAutoPlaying) {
      interval = window.setInterval(() => {
        nextSlide();
      }, 5000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying, nextSlide]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <>
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          
          <div 
            className="relative max-w-4xl mx-auto"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="overflow-hidden rounded-xl shadow-lg">
              <div 
                className="flex transition-transform duration-500 ease-in-out h-[250px] sm:h-[300px] md:h-[400px]"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {carouselServices.map((service) => (
                  <div 
                    key={service.id} 
                    className="min-w-full relative"
                  >
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 md:p-6 text-white">
                      <h3 className="text-lg md:text-2xl font-bold mb-1 md:mb-2">{service.title}</h3>
                      <p className="opacity-90 text-sm md:text-base">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button 
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-white/80 text-gray-800 p-2 rounded-full transition-colors shadow-md z-10"
              aria-label="Slide anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-white/80 text-gray-800 p-2 rounded-full transition-colors shadow-md z-10"
              aria-label="Próximo slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            
            <div className="flex justify-center mt-4 gap-2">
              {carouselServices.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-red-600' : 'bg-gray-300'
                  }`}
                  aria-label={`Ir para slide ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
          
          <div className="max-w-2xl mx-auto mt-12 bg-white p-6 rounded-lg shadow-md border-l-4 border-red-600 italic text-gray-700">
            <p className="text-center text-lg">
              "Às vezes precisamos de um reboque para seguir em frente. 
              Estamos aqui para te ajudar a voltar ao seu caminho!"
            </p>
          </div>
        </div>
      </div>

      {/* Seção de ícones de serviços (movida do ServicesList) */}
      <div className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Nossos Serviços
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {iconServices.map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center hover:shadow-md transition-shadow"
              >
                <div className="bg-red-100 p-3 rounded-full mb-3">
                  {service.icon}
                </div>
                <span className="font-medium text-gray-800">{service.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCarousel;






