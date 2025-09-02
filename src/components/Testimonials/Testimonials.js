import { testimonials } from '../../data';

import React from 'react';

// --- INLINE SVG ICON for the star rating ---
const StarIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

const Testimonials = () => {
    const testimonialCards = testimonials.map(({ id, image, name, review }) => {
        return (
            <div key={id} className='bg-slate-800/50 p-8 rounded-xl shadow-lg border border-amber-500/20 flex flex-col items-center text-center'>
                {/* Avatar */}
                <img src={image} alt={name} className='w-24 h-24 rounded-full object-cover mb-4 border-2 border-amber-400' />
                
                {/* Star Rating */}
                <div className='flex items-center gap-1 mb-4'>
                    {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} className='w-5 h-5 text-amber-400' />
                    ))}
                </div>
                
                {/* Review Text */}
                <p className='text-gray-300 mb-6 flex-grow'>"{review}"</p>
                
                {/* Reviewer Name */}
                <h4 className='font-serif text-xl font-semibold text-white mt-auto'>- {name}</h4>
            </div>
        );
    });

    return (
        <section name='testimonials' className='bg-slate-900 py-16 md:py-24'>
            <div className='container mx-auto px-6'>
                {/* Section Header */}
                <div className='text-center mb-12'>
                    <h2 className='text-4xl lg:text-5xl font-bold text-amber-400 font-serif'>
                        What Our Guests Are Saying
                    </h2>
                    <p className='text-gray-400 text-lg mt-2'>
                        Discover why Saffron Spice is a celebrated culinary destination.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {testimonialCards}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
