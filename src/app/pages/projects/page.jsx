import Project from '@/app/components/ProjectInfo/Project'
import React from 'react'
import './projects.css'
import Navbar from '@/app/components/Navbar/Navbar';
import '@/app/components/Navbar/navbar.css'


export default function Projects() {
  return (
    <section className='projects-container'>
      <Navbar/>

      <h1>Mis Proyectos</h1>

      <Project />
    </section>
  )
}



