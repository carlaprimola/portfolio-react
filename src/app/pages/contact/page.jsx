import React from 'react';
import Form from '@/app/components/Form/Form';
import '@/app/components/Form/form.css'
import '@/app/pages/contact/contact.css'
import Navbar from '@/app/components/Navbar/Navbar';
import '@/app/components/Navbar/navbar.css'

export default function contact () {
  return (
    <section className='contact-container'>
      <Navbar/>
      <main className='form-container'>
        <h2>Contacto</h2>
        <Form/>
      </main>
      
    </section>
  );
};





