import Navbar from '@/app/components/Navbar/Navbar';
import React from 'react';
import '@/app/pages/about/about.css'
import Image from 'next/image'

export default function about () {
  return (
    <section>
      <Navbar/>
      
      <main className='about-main'>
       
        <Image
              src="/img/foto-about.jpg"
              alt="Foto Carla Escobar Prímola"
              width={800}
              height={800}
              className='imgAbout'
            />
            <div>
              <h1>Carla Escobar Prímola</h1>
              <article>
                <p>Mi nombre es Carla Escobar Prímola y llevo más de 7 años trabajando en el sector de marketing digital y publicidad. Después de estudiar un bootcamp en desarrollo web full stack con ciberseguridad, decidí cambiar de profesión y pasarme al sector de IT.
                  </p>
                <p className='text-projects'>
                ¡Echa un vistazo a mis Proyectos!
                </p>
                   
            
              </article>
            </div>
      </main>
      
      
    </section>
  );
};
