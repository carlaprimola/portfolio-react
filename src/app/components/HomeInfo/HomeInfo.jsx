import React from 'react'
import '@/app/components/HomeInfo/HomeInfo.css';

export default function HomeInfo() {
  return (
    <main className='flex flex-col items-center justify-center w-1/2'>
      <h1 className='text-black merienda'>Carla Escobar</h1>
      <h2 className='text-4xl'>Web Developer & Digital Marketing</h2>
      <h4 className='text-2xl mt-5'>¡Hola! Bienvenid@ a mi web. En ella encontrarás distintos proyectos en los que he trabajado desde que estoy estudiando programación.
        Te animo a que eches un vistazo, visites mi perfil y descubras más sobre mí.
      </h4>
    </main>
  )
}
