
import React from 'react';

const doctorsData = [
  {
    name: 'Dra. Ana Silva',
    role: 'Ortodontista',
    experience: '12 anos de experiência em ortodontia',
    imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=600&auto=format'
  },
  {
    name: 'Dr. Carlos Oliveira',
    role: 'Implantodontista',
    experience: '15 anos de experiência em implantes',
    imageUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=600&auto=format'
  },
  {
    name: 'Dra. Mariana Costa',
    role: 'Odontopediatra',
    experience: '10 anos de experiência com crianças',
    imageUrl: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=600&auto=format'
  },
  {
    name: 'Dr. Paulo Santos',
    role: 'Clínico Geral',
    experience: '8 anos de experiência em odontologia geral',
    imageUrl: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=600&auto=format'
  }
];

const ClinicalStaff = () => {
  return (
    <section id="equipe" className="bg-gray-50 py-16">
      <div className="container-section">
        <h2 className="section-title">Corpo Clínico</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctorsData.map((doctor, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={doctor.imageUrl} 
                  alt={doctor.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 text-gray-800">{doctor.name}</h3>
                <p className="text-primary font-medium mb-2">{doctor.role}</p>
                <p className="text-gray-600 text-sm">{doctor.experience}</p>
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-center mt-12 text-gray-600 max-w-2xl mx-auto">
          Nossa equipe é formada por profissionais altamente qualificados, com formação nas melhores instituições 
          e constante atualização nas mais modernas técnicas odontológicas.
        </p>
      </div>
    </section>
  );
};

export default ClinicalStaff;
