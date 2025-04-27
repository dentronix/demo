
import React from 'react';

const InsurancePlans = () => {
  const insurances = [
    "Amil", "Bradesco Saúde", "SulAmérica", "Unimed", "Porto Seguro",
    "Golden Cross", "NotreDame Intermédica", "Metlife", "Odontoprev"
  ];

  return (
    <section id="convenios" className="py-16 bg-white">
      <div className="container-section">
        <h2 className="section-title">Convênios Aceitos</h2>
        
        <div className="bg-secondary/50 rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {insurances.map((insurance, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-4 text-center shadow hover:shadow-md transition-shadow flex items-center justify-center"
              >
                <span className="font-medium text-gray-700">{insurance}</span>
              </div>
            ))}
            <div className="bg-primary/10 rounded-lg p-4 text-center flex items-center justify-center">
              <span className="font-medium text-primary">Particular</span>
            </div>
          </div>
          
          <p className="text-center mt-8 text-gray-600">
            Consulte outros convênios ou formas de pagamento pelo nosso WhatsApp.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InsurancePlans;
