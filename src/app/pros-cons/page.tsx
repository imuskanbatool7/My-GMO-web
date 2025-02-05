import React from 'react'

 function proscons() {
  return (<>
    <div className='min-h-screen bg-gary-100 p-6 flex flex-col items-center' >
     <h1 className='text-3xl md:text-4xl font-extrabold text-center text-green-600 mb-8'> <b>GMO FOOD</b></h1>
     <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl mb-8">
   <h2 className='text-2xl font-bold text-green-700 mb-4' ><b>PROS</b></h2>
        <ul className='space-y-4'>
        <p> <u>Higher Yields </u>: Increased crop production and reliable harvests.</p>
        <p> <u>Reduced Pesticide Use</u>: Pest-resistant crops mean fewer chemicals.</p>
        <p> <u>Enhanced Nutrition </u>: Improved nutrient content, like Vitamin A in &apos;Golden Rice.</p>
        <p> <u>Longer Shelf Life </u>: Extended freshness reduces food waste.</p>
        <p> <u>Climate Resilience </u>: Withstand harsh conditions, aiding food security.</p>
   </ul>
   </div>
   <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl mb-8"> <br />
   <h2  className='text-2xl font-bold text-green-700 mb-4'><b>CONS</b></h2>
   <ul className='space-x-4'>
        <p><u>Environmental Impact</u>: May reduce biodiversity and harm nearby plants and animals.</p> <br />
        <p><u>Health Concerns</u>: Potential risks of allergens or unknown long-term effects.</p> <br />
        <p> <u>Resistance</u>: Can lead to herbicide-resistant superweeds &apos;and superbugs&apos;</p> <br />
        <p> <u>Economic Strain </u>: Higher seed costs and patent issues hurt small farmers.</p> <br />
        <p> <u>Cross-Contamination </u>: Risk of genetic mixing with non-GMO crops.</p> <br />
        <p> <u>Ethical Issues </u>: Concerns about altering organisms&apos;natural makeup.</p>
</ul>
   </div>
    </div>
    </>

  )
}


export default proscons