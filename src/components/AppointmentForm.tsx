
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { CalendarIcon } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

type Procedure = {
  id: number;
  name: string;
};

const procedures: Procedure[] = [
  { id: 1, name: 'Consulta de Avaliação' },
  { id: 2, name: 'Limpeza Dental' },
  { id: 3, name: 'Tratamento de Canal' },
  { id: 4, name: 'Clareamento Dental' },
  { id: 5, name: 'Ortodontia (Aparelhos)' },
  { id: 6, name: 'Implante Dentário' },
  { id: 7, name: 'Consulta de Urgência' },
  { id: 8, name: 'Odontopediatria' },
];

const timeSlots = [
  '08:00', '09:00', '10:00', '11:00', 
  '14:00', '15:00', '16:00', '17:00', '18:00'
];

const AppointmentForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedProcedure, setSelectedProcedure] = useState('');
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [timeSlot, setTimeSlot] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!name || !phone || !email || !selectedProcedure || !date || !timeSlot) {
      toast.error('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      
      // Show success message
      toast.success('Agendamento realizado com sucesso! Entraremos em contato para confirmar.', {
        duration: 5000,
      });

      // Reset form
      setName('');
      setPhone('');
      setEmail('');
      setSelectedProcedure('');
      setDate(undefined);
      setTimeSlot('');
    }, 1000);
  };

  return (
    <section id="agendamento" className="py-16 bg-secondary/30">
      <div className="container-section">
        <h2 className="section-title">Agendamento Online</h2>
        
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Digite seu nome"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Telefone/WhatsApp *
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="(00) 00000-0000"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                E-mail *
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="seu@email.com"
                required
              />
            </div>
            
            <div>
              <label htmlFor="procedure" className="block text-sm font-medium text-gray-700 mb-1">
                Procedimento *
              </label>
              <select
                id="procedure"
                value={selectedProcedure}
                onChange={(e) => setSelectedProcedure(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                required
              >
                <option value="" disabled>Selecione um procedimento</option>
                {procedures.map((procedure) => (
                  <option key={procedure.id} value={procedure.name}>
                    {procedure.name}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Data Preferencial *
                </label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, 'dd/MM/yyyy', { locale: ptBR }) : <span>Selecione uma data</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 pointer-events-auto" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={(date) => {
                        const day = date.getDay();
                        // Disable weekends (0 = Sunday, 6 = Saturday)
                        return day === 0 || date < new Date();
                      }}
                      initialFocus
                      className="p-3 pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>
              
              <div>
                <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                  Horário Preferencial *
                </label>
                <select
                  id="time"
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  required
                >
                  <option value="" disabled>Selecione um horário</option>
                  {timeSlots.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="text-center pt-4">
              <Button 
                type="submit" 
                className="gradient-button w-full sm:w-auto px-8"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Processando...' : 'Confirmar Agendamento'}
              </Button>
              
              <p className="mt-4 text-sm text-gray-500">
                Após o envio, entraremos em contato para confirmar seu agendamento.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;
