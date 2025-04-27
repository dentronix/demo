
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
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
            className="h-8 w-8 text-primary mr-2"
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
