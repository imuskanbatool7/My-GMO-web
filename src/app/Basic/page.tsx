
import React from 'react'
import Image from 'next/image'
function GMO() {
  return (
    <div className='min-h-screen bg-gary-100 p-6 flex flex-col items-center'>
      {/* heading */}
      <h1 className='text-4xl md:text-5xl font-extrabold text-green-600 text-center mb-6'> <b>  🌱 GMO FOOD</b></h1> <br />

      {/* Content Wrapper */}
      <div className='bg-white shadow-lg rounded-lg p-6 md:p-10 max-w-4xl w-full text-gray-800'>
        {/* what are gmo */}
        <section className='mb-8'>
          <h2 className='text-2xl md:text-3xl font-bold mb-2 text-green-600 '> <b> What are GMOs? </b></h2>
          <p className='text-lg leading-relaxed'>Genetically modified organisms (GMOs) are plants, animals, or microbes that have had their DNA changed using genetic engineering techniques.</p> <br />
        </section>

        {/* how gmo made */}
        <section className='mb-8'>
          <h2 className='text-2xl md:text-3xl font-bold mb-2 text-green-700'><b>How GMOs are made?</b></h2>
          <p className='text-lg leading-relaxed'>GMOs are made by altering the genetic material of organisms using techniques like gene splicing and gene editing to enhance desired traits</p><br />
        </section>
        <section>

          <h2 className='text-2xl md:text-3xl font-bold mb-2 text-green-700'><b>Genitically modified crops</b></h2>
          <div className='space-y-8'>
            <div className='bg-green-50 p-4 rounded-lg shadow-md'>
              <p className='text-lg' ><b>Corn</b>:Genetically modified to resist pests and tolerate herbicides, making it easier to grow in large quantities.</p>
              <div className='my-4'>
                <Image
                  src="/corn.png"
                  alt="corn GMO"
                  width={900}
                  height={500}
                  unoptimized={true}
                  className='w-full h-auto object-cover rounded-lg'
                />
              </div>
            </div>

            <div className='bg-green-50 p-4 rounded-lg shadow-md'>
              <p className='text-lg'> <b>soyabeans</b>:Engineered for herbicide resistance, commonly used in food products, animal feed, and biofuels.</p>
              <div>
                <Image
                  src="/soya.png"
                  alt="GMO"
                  width={900}
                  height={500}
                  unoptimized={true}
                  className='w-full h-auto object-cover rounded-lg'
                />
              </div>
            </div>

            <div className='bg-green-50 p-4 rounded-lg shadow-md'>
              <p className='text-lg'><b>Cotton</b>:Modified to resist insects and reduce pesticide use, widely used in textiles and cottonseed oil.</p>
              <div>
                <Image
                  src="/cotton.png"
                  alt="GMO"
                  width={900}
                  height={500}
                  unoptimized={true}
                  className='w-full h-auto object-cover rounded-lg'
                />
              </div>
            </div>

            <div className='bg-green-50 p-4 rounded-lg shadow-md'>
              <p className='text-lg'><b>Canola</b>:Genetically altered to tolerate herbicides, primarily used in cooking oils and animal feed.</p>

              <div>
                <Image
                  src="/Canola.png"
                  alt="GMO"
                  width={900}
                  height={500}
                  unoptimized={true}
                  className='w-full h-auto object-cover rounded-lg'
                />
              </div>
            </div>
          </div>

        </section>
      </div>
    </div>
  )
}


export default GMO;