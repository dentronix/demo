
import React, { useState, useEffect } from 'react';
import { Menu, X, Tooth } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { label: 'Home', href: '#' },
  { label: 'Especialidades', href: '#especialidades' },
  { label: 'Corpo Clínico', href: '#equipe' },
  { label: 'Convênios', href: '#convenios' },
  { label: 'Agendamento', href: '#agendamento' },
  { label: 'Contato', href: '#contato' }
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white/80 backdrop-blur-md py-4'}`}>
      <div className="container max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <Tooth className="h-8 w-8 text-primary mr-2" />
          <span className="text-xl font-bold text-gray-800">Sorriso Perfeito</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
          <Button className="gradient-button ml-4">Agendar Consulta</Button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu} aria-label="Menu">
          {isMenuOpen ? <X className="h-6 w-6 text-primary" /> : <Menu className="h-6 w-6 text-primary" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white w-full py-4 px-4 shadow-lg">
          <nav className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary"
                onClick={toggleMenu}
              >
                {item.label}
              </a>
            ))}
            <Button className="gradient-button w-full">Agendar Consulta</Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
