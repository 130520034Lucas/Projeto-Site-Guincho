import React from 'react';
import { MapPin, Clock, PenTool as Tool, Award } from 'lucide-react';

const AdditionalInfo: React.FC = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">
          Por que escolher a A Service Auto Socorro
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <div className="bg-red-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <Clock className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Atendimento 24h</h3>
            <p className="text-gray-600">Estamos disponíveis a qualquer hora do dia ou da noite para atender você.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <div className="bg-red-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <MapPin className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Ampla Cobertura</h3>
            <p className="text-gray-600">Atendemos em São José dos Pinhais e região com rapidez e eficiência.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <div className="bg-red-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <Tool className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Equipe Qualificada</h3>
            <p className="text-gray-600">Profissionais treinados e equipamentos adequados para cada situação.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <div className="bg-red-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <Award className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Serviço Confiável</h3>
            <p className="text-gray-600">Compromisso com qualidade e segurança em todos os atendimentos.</p>
          </div>
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-4 text-center">Mais informações</h3>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <MapPin className="w-5 h-5 mr-3 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-medium">Área de Atuação:</p>
                <p className="text-gray-600">São José dos Pinhais e região metropolitana de Curitiba</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Clock className="w-5 h-5 mr-3 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-medium">Horário de Atendimento:</p>
                <p className="text-gray-600">24 horas por dia, 7 dias por semana, incluindo feriados</p>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-4 mt-4">
              <p className="text-center text-gray-500 text-sm">
                © 2025 A Service Auto Socorro. Todos os direitos reservados. Este site não armazena seus dados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalInfo;