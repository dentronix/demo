
import React from 'react';
import { Tooth, ArrowRight, Brackets, Sun, Baby } from 'lucide-react';
import { Button } from '@/components/ui/button';

const specialtiesData = [
  {
    title: 'Odontologia Geral',
    description: 'Prevenção, diagnóstico e tratamento das principais doenças bucais para manter sua saúde oral.',
    icon: Tooth
  },
  {
    title: 'Ortodontia',
    description: 'Aparelhos fixos e invisíveis para alinhar seus dentes e corrigir problemas de mordida.',
    icon: Brackets
  },
  {
    title: 'Implantodontia',
    description: 'Substitua dentes perdidos com implantes que parecem, sentem e funcionam como dentes naturais.',
    icon: Tooth
  },
  {
    title: 'Clareamento Dental',
    description: 'Técnicas seguras para clarear seus dentes e remover manchas, devolvendo o brilho ao seu sorriso.',
    icon: Sun
  },
  {
    title: 'Odontopediatria',
    description: 'Cuidados dentários especializados para crianças em um ambiente acolhedor e divertido.',
    icon: Baby
  },
  {
    title: 'Endodontia',
    description: 'Tratamento de canal para eliminar infecções e preservar dentes danificados.',
    icon: Tooth
  }
];

const Specialties = () => {
  return (
    <section id="especialidades" className="bg-white py-16">
      <div className="container-section">
        <h2 className="section-title">Nossas Especialidades</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialtiesData.map((specialty, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 flex flex-col"
            >
              <div className="mb-4 bg-secondary p-3 rounded-full w-12 h-12 flex items-center justify-center">
                <specialty.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{specialty.title}</h3>
              <p className="text-gray-600 mb-4 flex-grow">{specialty.description}</p>
              <a href="#agendamento" className="flex items-center text-primary font-medium hover:underline mt-2">
                Agende uma consulta
                <ArrowRight className="ml-1 w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#agendamento">
            <Button className="gradient-button">
              Agende uma Consulta
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Specialties;
