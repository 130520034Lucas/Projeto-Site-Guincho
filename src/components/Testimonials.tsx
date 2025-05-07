import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Carlos Silva",
    rating: 5,
    text: "Serviço excelente! Fiquei parado na estrada e eles chegaram em menos de 30 minutos. Super recomendo!",
  },
  {
    id: 2,
    name: "Maria Souza",
    rating: 5,
    text: "Atendimento muito profissional. O motorista foi super educado e cuidadoso com meu carro.",
  },
  {
    id: 3,
    name: "Roberto Almeida",
    rating: 4,
    text: "Bom serviço e preço justo. Atenderam rápido mesmo sendo de madrugada.",
  }
];

const Testimonials: React.FC = () => {
  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">
          O que nossos clientes dizem
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
              <p className="text-gray-900 font-medium">{testimonial.name}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <a 
            href="https://wa.me/5541988355326" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full text-lg font-medium transition-transform hover:scale-105 shadow-lg"
          >
            Solicite seu guincho
          </a>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;