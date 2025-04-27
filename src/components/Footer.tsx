
import React from 'react';
import { Instagram, Facebook, Linkedin, Tooth } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <Tooth className="h-6 w-6 text-primary mr-2" />
              <span className="text-xl font-bold">Sorriso Perfeito</span>
            </div>
            <p className="text-gray-300 mb-4">
              Cuidando do seu sorriso com excelência e tecnologia de ponta.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Instagram />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Facebook />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Linkedin />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#especialidades" className="text-gray-300 hover:text-white transition-colors">Especialidades</a></li>
              <li><a href="#equipe" className="text-gray-300 hover:text-white transition-colors">Corpo Clínico</a></li>
              <li><a href="#convenios" className="text-gray-300 hover:text-white transition-colors">Convênios</a></li>
              <li><a href="#agendamento" className="text-gray-300 hover:text-white transition-colors">Agendamento</a></li>
              <li><a href="#contato" className="text-gray-300 hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Horário de Funcionamento</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-gray-300">Segunda-Sexta:</span>
                <span className="text-white">8h às 19h</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-300">Sábado:</span>
                <span className="text-white">9h às 13h</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-300">Domingo:</span>
                <span className="text-white">Fechado</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <address className="not-italic">
              <p className="text-gray-300 mb-2">Av. Saúde Dental, 123 - Centro</p>
              <p className="text-gray-300 mb-2">São Paulo/SP - CEP 00000-000</p>
              <p className="text-gray-300 mb-2">Telefone: (11) 5555-5555</p>
              <p className="text-gray-300">WhatsApp: (11) 99999-9999</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Clínica Sorriso Perfeito. Todos os direitos reservados.
          </p>
          <div className="flex space-x-4 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
