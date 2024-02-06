// src/components/MobileMockup.js
import React from 'react';
import './mobile.css';
import Image from 'next/image'
import IconBar from '../IconBar/IconBar';

const MobileMockup = ({ children }) => {
  return (
    <section className="mobile-mockup">
      <main className="screen">{children}
        <div className='upper-section'>
          <div className='profile-img'>
            <div className='circular-image'>
            <Image
                src="/img/foto-about.jpg"
                alt="Foto Carla Escobar Prímola"
                width={800}
                height={800}
                className='imgHome'
              />
              </div>
          </div>
        </div>
        <div className='lower-section'>
          <div className='post-ig'>Sobre mí</div>
          <div className='post-ig'>Contacto</div>
          <div className='post-ig'>CV</div>
          <div className='post-ig'>Proyecto 4</div>
          <div className='post-ig'>Proyecto 5</div>
          <div className='post-ig'>Proyecto 6</div>
          <div className='post-ig'>Proyecto 7</div>
          <div className='post-ig'>Proyecto 8</div>
          <div className='post-ig'>Proyecto 9</div>
          
        </div>
      </main>
    </section>
  );
};

export default MobileMockup;

