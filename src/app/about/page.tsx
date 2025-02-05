import Image from "next/image"



const About =() =>{
  return ( 
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
       <h1 className="text-3xl md:text-4xl font font-extrabold text-center text-green-600 mb-8"><b>ABOUT GMO FOOD</b></h1> <br />
      <section className='bg-white p-6 md:p-10 rounded-lg shadow-lg max-w-4xl w-full space-y-8'> 
        <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-3xl font-bold text-green-700 underline" > <b><u>Our Purpose</u></b></h2>
        <p className="text-lg text-gray-700 leading-relaxed">GMO Food Info Hub is dedicated to providing clear, science-based information about GMOs in food. </p>          
          <p className="text-lg text-zinc-700 leading-relaxed"> We aim to help you understand the basics of GMOs, their benefits, and any concerns, so you can make informed.</p>
      </div>

      <div className="my-8">
       <Image 
         src="/about.png"
         alt="GMO"
         width={900}
         height={500}
         unoptimized={true} 
        className="mx-auto rounded-lg shadow-lg"
       />
       </div>
      </section>
    </div>
  )
}

export default About