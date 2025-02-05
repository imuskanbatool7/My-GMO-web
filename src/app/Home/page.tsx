import React from 'react'
import Image from "next/image"

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6'>

      <h1 className='text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4'> <b>WELCOME TO <span className="text-green-600">GMO FOOD</span> </b></h1>

      <div>
        <br />
        <p className='text-lg md:text-xl text-gray-600 text-center max-w-2xl leading-relaxed mb-6'>
          <i>Uncover the science, benefits, and debates surrounding genetically modified foods </i>
        </p> <br />

        <section className='w-full flex justify-center'>
          <div className='relative w-full max-w-3xl shadow-lg rounded-lg overflow-hidden'>
            <Image
              src="/image.png"
              alt="GMO"
              width={900}
              height={500}
              unoptimized={true}
              className='w-full h-auto object-cover'
            />
          </div>
        </section>
      </div>
    </div>
  )
}