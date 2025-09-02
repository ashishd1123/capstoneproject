import React from 'react';
import Card from '../Card/Card'; 

const SaffronSpiceSpecials = () => {
  return (
    <section name='specials' className='bg-slate-900 py-16 md:py-24'>
      <div className='container mx-auto px-6'>
        
        {/* Section Header: Title and Menu Button */}
        <div className='flex flex-col md:flex-row justify-between items-center mb-12'>
          <h1 className='text-4xl lg:text-5xl font-bold text-amber-400 font-serif text-center md:text-left mb-6 md:mb-0'>
            This Week's Culinary Highlights
          </h1>
          <a 
            href='#' // This could link to a full menu page
            className='inline-block px-8 py-3 font-bold text-slate-900 bg-amber-400 rounded-md text-lg hover:bg-amber-500 transition-transform duration-300 transform hover:scale-105 shadow-lg'
          >
            View Full Menu
          </a>
        </div>
        
        <Card />
        
      </div>
    </section>
  );
};

export default SaffronSpiceSpecials;