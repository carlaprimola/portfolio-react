'use client'

import React, { useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import '@/app/components/Navbar/navbar.css'

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  
  return (
    
      <header className='navbar'>
         <Link href='/'> 
         
            <Image
              src="/img/logo.png"
              alt="Logo Carla"
              width={200}
              height={200}
              className='logoImage'
            />
            
         
        
      </Link>
        <nav className={`navLinks ${isMenuOpen ? 'showMenu' : ''}`}>
          <Link className="link" href='/pages/contact'>Contacto</Link>
          <Link className="link" href='/pages/about'>Sobre mí</Link>
          <Link className="link" href='/pages/projects'>Proyectos</Link>
        </nav>

        <div className="menuIcon" onClick={toggleMenu}>
          <div className={`bar ${isMenuOpen ? 'rotateBar1' : ''}`} />
          <div className={`bar ${isMenuOpen ? 'hideBar' : ''}`} />
          <div className={`bar ${isMenuOpen ? 'rotateBar2' : ''}`} />
      </div>
        
      </header>
    
  )
}
