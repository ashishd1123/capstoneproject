import React from 'react';

// Using a standard <a> tag instead of LinkR to avoid potential router context errors.
// This makes the component more portable.

const Home = () => {
  // A high-quality, relevant background image for an Indian restaurant.
  const backgroundImageUrl = 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1887&auto=format&fit=crop';

  return (
    <section 
      className='relative h-screen flex items-center justify-center text-white font-sans bg-cover bg-center bg-no-repeat'
      // The background image is applied via inline style for simplicity.
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      {/* Dark Overlay: This sits on top of the image to ensure the text is readable. */}
      <div className='absolute inset-0 bg-black opacity-60'></div>

      {/* Content Container */}
      <div className='relative z-10 text-center px-6'>
        <h1 className='text-6xl md:text-8xl font-bold text-amber-400 font-serif tracking-wider drop-shadow-lg'>
          Saffron Spice
        </h1>
        <h3 className='text-3xl md:text-4xl text-gray-200 mt-2 mb-6 drop-shadow-md'>
          Hyderabad
        </h3>
        <p className='max-w-2xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed mb-10'>
          We are a family-owned Hyderabadi restaurant, focused on royal recipes passed down through generations, served with a contemporary flair.
        </p>
        <a 
          href='/bookings' 
          className='inline-block px-10 py-4 font-bold text-slate-900 bg-amber-400 rounded-md text-lg hover:bg-amber-500 transition-transform duration-300 transform hover:scale-105 shadow-xl'
        >
          Reserve a Table
        </a>
      </div>
    </section>
  );
};

export default Home;
