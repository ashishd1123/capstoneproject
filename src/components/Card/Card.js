import { specials } from '../../data';
import { RiEBike2Line } from 'react-icons/ri';

const Card = () => {
  const specialties = specials.map(
    ({ id, image, name, price, description }) => {
      return (
        // Card Container: Dark background, rounded corners, shadow, and a subtle hover effect.
        <div key={id} className='bg-slate-800/50 rounded-xl overflow-hidden shadow-lg border border-amber-500/20 flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-amber-400/20'>
          
          {/* Image Container */}
          <div className='h-56'>
            <img src={image} alt={name} className='w-full h-full object-cover' />
          </div>

          {/* Details Container */}
          <div className='p-6 flex flex-col flex-grow'>
            {/* Name and Price */}
            <div className='flex justify-between items-start mb-2'>
              <h3 className='font-serif text-2xl font-bold text-white'>{name}</h3>
              <p className='text-xl font-semibold text-amber-400 whitespace-nowrap ml-4'>{price}</p>
            </div>
            
            {/* Description */}
            <p className='text-gray-400 mb-6 flex-grow'>
              {description}
            </p>

            {/* Delivery Link */}
            {/* 'mt-auto' pushes this to the bottom of the card */}
            <div className='flex items-center gap-3 mt-auto text-amber-400 font-semibold cursor-pointer group'>
              <span className='group-hover:text-amber-300 transition-colors'>Order for delivery</span>
              <RiEBike2Line className='w-6 h-6 group-hover:text-amber-300 transition-colors' />
            </div>
          </div>
        </div>
      );
    }
  );

  // The list of cards, arranged in a responsive grid.
  return (
    <div className='bg-slate-900'>
        <div className='container mx-auto px-6 py-16'>
            <div className='text-center mb-12'>
                <h2 className='text-4xl lg:text-5xl font-bold text-amber-400 font-serif'>This Week's Specials</h2>
                <p className='text-gray-400 text-lg mt-2'>A curated selection of our finest dishes, delivered to your door.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {specialties}
            </div>
        </div>
    </div>
  );
};

export default Card;

