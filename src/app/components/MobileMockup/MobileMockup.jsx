// src/components/MobileMockup.js
import React from 'react';
import './mobile.css';
import Image from 'next/image'
import IconBar from '../IconBar/IconBar';
import Link from 'next/link'

const MobileMockup = ({ children }) => {
  return (
    <section className="mobile-mockup">
      <main className="screen">{children}
        <div className='upper-section'>
          <section className='info-profile'>
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
            <div className='data-ig'>9 Posts</div>
            <div className='data-ig'>100 Followers</div>
            <div className='data-ig'>155 Following</div>
          </section>
          
          <div>
            <h5>Carla Escobar Prímola</h5>
            <h6>Jr. Full stack developer & Digital Marketing</h6>
            <p className='description-ig'>Vengo del mundo del marketing digital y tras estudiar un bootcamp en Desarrollo web full stack & ciberseguridad, he querido adentrarme en el sector IT. ¡Echa un ojo a mi Portfolio!</p>
          </div>
        </div>

        <div className='edit-profile'>Edit profile</div>

        <div className='lower-section'>
          <div className='post-ig'>
            <Link className="" href='https://github.com/carlaprimola' target="_blank">GitHub</Link>
            </div>
          <div className='post-ig'>
            <Link className="" href='https://www.linkedin.com/in/carlaescobarprimola/' target="_blank">Linkedin</Link>
            </div>
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

