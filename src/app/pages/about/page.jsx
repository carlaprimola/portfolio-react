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
                <p>¡Hola!😊 Mi nombre es Carla Escobar, soy publicista y he trabajado siempre en marketing digital. Ahora, tras haber estudiado un bootcamp de desarrollo web full stack con ciberseguridad, decidí embarcarme en un nuevo viaje y probar suerte en esta apasionante profesión 💻<br></br>
                  En mi portfolio y mi GitHub podrás ver distintos proyectos, para frontend, backend y full stack. Espero que te guste ✨
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
