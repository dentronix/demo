
import React from 'react';
import { ArrowRight, Brackets, Sun, Baby } from 'lucide-react';
import { Button } from '@/components/ui/button';

const specialtiesData = [
  {
    title: 'Odontologia Geral',
    description: 'Prevenção, diagnóstico e tratamento das principais doenças bucais para manter sua saúde oral.',
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6 text-primary"
      >
        <path d="M12 5.5c-1.5-1-2-2-2.5-3 .5 1 2 2 2.5 3z" />
        <path d="M10 7c-.5-1-1.5-2.5-2.5-3 .5 1.5 2 2 2.5 3z" />
        <path d="M8.5 9c-1-1-2-1.5-3-1.5 1 .5 2 2 3 1.5z" />
        <path d="M8 12c-1 0-2.5 0-3.5-.5 1.5.5 2 1.5 3.5.5z" />
        <path d="M9 15c-1 1-1.5 2.5-1.5 3.5.5-1 2-1.5 1.5-3.5z" />
        <path d="M12 17c0 1 0 3-1 4 1-1 2-2 1-4z" />
        <path d="M15 15c1 .5 2 2 1.5 3.5.5-1.5 0-3-1.5-3.5z" />
        <path d="M17 12c2 0 2.5 1.5 3 2-.5-1.5-2-2-3-2z" />
        <path d="M16 8.5c1.5-.5 2.5-1.5 3-3-.5 1-2 2-3 3z" />
        <path d="M13 7c.5-1.5 1.5-2.5 2.5-3-.5 1-1.5 2.5-2.5 3z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    )
  },
  {
    title: 'Ortodontia',
    description: 'Aparelhos fixos e invisíveis para alinhar seus dentes e corrigir problemas de mordida.',
    icon: () => <Brackets className="w-6 h-6 text-primary" />
  },
  {
    title: 'Implantodontia',
    description: 'Substitua dentes perdidos com implantes que parecem, sentem e funcionam como dentes naturais.',
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6 text-primary"
      >
        <path d="M12 5.5c-1.5-1-2-2-2.5-3 .5 1 2 2 2.5 3z" />
        <path d="M10 7c-.5-1-1.5-2.5-2.5-3 .5 1.5 2 2 2.5 3z" />
        <path d="M8.5 9c-1-1-2-1.5-3-1.5 1 .5 2 2 3 1.5z" />
        <path d="M8 12c-1 0-2.5 0-3.5-.5 1.5.5 2 1.5 3.5.5z" />
        <path d="M9 15c-1 1-1.5 2.5-1.5 3.5.5-1 2-1.5 1.5-3.5z" />
        <path d="M12 17c0 1 0 3-1 4 1-1 2-2 1-4z" />
        <path d="M15 15c1 .5 2 2 1.5 3.5.5-1.5 0-3-1.5-3.5z" />
        <path d="M17 12c2 0 2.5 1.5 3 2-.5-1.5-2-2-3-2z" />
        <path d="M16 8.5c1.5-.5 2.5-1.5 3-3-.5 1-2 2-3 3z" />
        <path d="M13 7c.5-1.5 1.5-2.5 2.5-3-.5 1-1.5 2.5-2.5 3z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    )
  },
  {
    title: 'Clareamento Dental',
    description: 'Técnicas seguras para clarear seus dentes e remover manchas, devolvendo o brilho ao seu sorriso.',
    icon: () => <Sun className="w-6 h-6 text-primary" />
  },
  {
    title: 'Odontopediatria',
    description: 'Cuidados dentários especializados para crianças em um ambiente acolhedor e divertido.',
    icon: () => <Baby className="w-6 h-6 text-primary" />
  },
  {
    title: 'Endodontia',
    description: 'Tratamento de canal para eliminar infecções e preservar dentes danificados.',
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6 text-primary"
      >
        <path d="M12 5.5c-1.5-1-2-2-2.5-3 .5 1 2 2 2.5 3z" />
        <path d="M10 7c-.5-1-1.5-2.5-2.5-3 .5 1.5 2 2 2.5 3z" />
        <path d="M8.5 9c-1-1-2-1.5-3-1.5 1 .5 2 2 3 1.5z" />
        <path d="M8 12c-1 0-2.5 0-3.5-.5 1.5.5 2 1.5 3.5.5z" />
        <path d="M9 15c-1 1-1.5 2.5-1.5 3.5.5-1 2-1.5 1.5-3.5z" />
        <path d="M12 17c0 1 0 3-1 4 1-1 2-2 1-4z" />
        <path d="M15 15c1 .5 2 2 1.5 3.5.5-1.5 0-3-1.5-3.5z" />
        <path d="M17 12c2 0 2.5 1.5 3 2-.5-1.5-2-2-3-2z" />
        <path d="M16 8.5c1.5-.5 2.5-1.5 3-3-.5 1-2 2-3 3z" />
        <path d="M13 7c.5-1.5 1.5-2.5 2.5-3-.5 1-1.5 2.5-2.5 3z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    )
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
                {specialty.icon()}
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
