import React from 'react';

// The local image imports were causing an error. 
// I've replaced them with placeholder images so the component can render.
// To use your own images, you would import them here like before:
import chefs1 from '../../assets/about/chefs1.png';
import chefs2 from '../../assets/about/chefs2.png';

const About = () => {
  return (
    // New UI: Dark, premium background. Increased vertical padding for more whitespace.
    <section name='about' className='py-20 md:py-32 bg-slate-900 text-white'>
      
      {/* Changed to an asymmetric 5-column grid for a more dynamic layout. */}
      <div className='container mx-auto px-6 grid md:grid-cols-5 gap-12 items-center'>
        
        {/* === Text Content Column (takes 3 of 5 columns) === */}
        {/* On mobile, images will appear first for better visual engagement. */}
        <div className='md:col-span-3 order-last md:order-first'>
          <h1 className='text-5xl lg:text-7xl font-bold text-amber-400 font-serif'>
            Saffron Spice
          </h1>
          {/* Decorative underline for an elegant touch */}
          <div className='w-24 h-1 bg-amber-400 mt-4 mb-6'></div>
          <h2 className='text-3xl lg:text-4xl text-gray-300 mb-8'>
            Hyderabad
          </h2>
          {/* Increased spacing between paragraphs for readability */}
          <div className='text-gray-400 text-lg leading-relaxed space-y-6'>
            <p>
              Saffron Spice is the legacy of two brothers, Rohan and Vikram, who brought their family's culinary heritage from the royal kitchens of Hyderabad to the world. Their shared dream was to create a restaurant that felt less like a business and more like a welcoming family dining room.
            </p>
            <p>
              To craft the menu, Rohan masterfully uses secret family recipes passed down through generations, showcasing his passion for authentic Hyderabadi cuisine. Vikram, with his flair for storytelling, handles all the marketing and has expanded the menu to include diverse, delectable dishes from across the Indian subcontinent.
            </p>
          </div>
        </div>

        {/* === Image Column (takes 2 of 5 columns) === */}
        {/* New image layout: A stylish mosaic/gallery grid instead of overlapping images. */}
        <div className='md:col-span-2 grid grid-cols-2 grid-rows-2 gap-4 h-96'>
          {/* First Image - spans 2 columns, creating a wide feature shot */}
          <img
            src={chefs1}
            alt='Chef Rohan meticulously preparing a dish'
            className='col-span-2 row-span-1 object-cover w-full h-full rounded-lg shadow-xl'
          />
          {/* Second Image - occupies one cell */}
          <img
            src={chefs2}
            alt='Chef Vikram greeting guests at the restaurant'
            className='col-span-1 row-span-1 object-cover w-full h-full rounded-lg shadow-xl'
          />
           {/* Third "Image" - A decorative block for brand personality */}
           <div className="col-span-1 row-span-1 bg-amber-500/10 rounded-lg flex items-center justify-center p-4">
             <p className="text-amber-400 text-center font-serif text-lg">Estd. 2024</p>
           </div>
        </div>
      </div>
    </section>
  );
};

export default About;

