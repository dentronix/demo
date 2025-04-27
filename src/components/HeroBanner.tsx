
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroBanner = () => {
  return (
    <section className="relative bg-gradient-to-r from-secondary to-white pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container-section flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0 pr-0 md:pr-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Seu Sorriso Perfeito Começa Aqui!
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Tratamentos personalizados e tecnologia de ponta para toda a família.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#agendamento">
              <Button className="gradient-button w-full sm:w-auto">
                Agende Online
              </Button>
            </a>
            <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="secondary-button w-full sm:w-auto">
                Fale no WhatsApp
              </Button>
            </a>
          </div>
        </div>
        <div className="md:w-1/2 animate-fade-in">
          <img
            src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
            alt="Sorriso Perfeito Clínica Odontológica"
            className="rounded-lg shadow-xl w-full object-cover h-[300px] md:h-[400px]"
          />
        </div>
      </div>

      {/* Wave SVG at the bottom */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="fill-white">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,42.7C1120,32,1280,32,1360,32L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroBanner;
