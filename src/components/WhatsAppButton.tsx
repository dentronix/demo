
import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5511999999999"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 flex items-center"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="ml-2 hidden md:inline">Fale Conosco!</span>
    </a>
  );
};

export default WhatsAppButton;
