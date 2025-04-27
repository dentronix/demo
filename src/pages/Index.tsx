
import React from 'react';
import Header from '@/components/Header';
import HeroBanner from '@/components/HeroBanner';
import Specialties from '@/components/Specialties';
import ClinicalStaff from '@/components/ClinicalStaff';
import InsurancePlans from '@/components/InsurancePlans';
import AppointmentForm from '@/components/AppointmentForm';
import Location from '@/components/Location';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <>
      <Header />
      <main className="pt-16">
        <HeroBanner />
        <Specialties />
        <ClinicalStaff />
        <InsurancePlans />
        <AppointmentForm />
        <Location />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Index;
