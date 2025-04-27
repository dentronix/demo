
import React from 'react';

const Location = () => {
  return (
    <section id="contato" className="py-16 bg-white">
      <div className="container max-w-7xl mx-auto px-4">
        <h2 className="section-title">Localização</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden h-[400px]">
            <iframe
              title="Mapa da Clínica Sorriso Perfeito"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0535261168614!2d-46.65410222512566!3d-23.564417861219354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1682015929968!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Como Chegar</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium text-gray-700 mb-2">Endereço:</h4>
                <p className="text-gray-600">
                  Av. Saúde Dental, 123 - Centro<br />
                  São Paulo/SP - CEP 00000-000
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-medium text-gray-700 mb-2">Horário de Funcionamento:</h4>
                <p className="text-gray-600">
                  Segunda à Sexta: 8h às 19h<br />
                  Sábado: 9h às 13h
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-medium text-gray-700 mb-2">Contato:</h4>
                <p className="text-gray-600">
                  Telefone: (11) 5555-5555<br />
                  WhatsApp: (11) 99999-9999<br />
                  Email: contato@sorrisoperfeito.com.br
                </p>
              </div>
              
              <div className="bg-secondary/50 rounded-lg p-4">
                <p className="text-gray-700">
                  <strong>Dica:</strong> Estamos próximos ao Parque Central. Estacionamento gratuito para clientes!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
