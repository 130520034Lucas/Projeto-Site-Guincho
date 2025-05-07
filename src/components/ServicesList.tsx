import React from 'react';
import { Car, Droplet, Disc, Battery, Map, Calendar } from 'lucide-react';

const services = [
  { icon: <Car className="w-6 h-6" />, name: "Colisão" },
  { icon: <Droplet className="w-6 h-6" />, name: "Pane Seca" },
  { icon: <Disc className="w-6 h-6" />, name: "Troca de Pneu" },
  { icon: <Battery className="w-6 h-6" />, name: "Socorro de Bateria" },
  { icon: <Map className="w-6 h-6" />, name: "Viagens" },
  { icon: <Calendar className="w-6 h-6" />, name: "Eventos" }
];

const ServicesList: React.FC = () => {
  return (
    <div className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Nossos Serviços
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {services.map((service, index) => (
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
  );
};

export default ServicesList;