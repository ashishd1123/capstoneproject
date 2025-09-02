import React, { useEffect, useState } from 'react';

const SuccessIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const LocationIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
    </svg>
);


const ConfirmedBooking = () => {
    // State to hold booking details retrieved from localStorage
    const [reservedDetails, setReserveDetails] = useState({
        date: 'N/A',
        time: 'N/A',
        guests: 'N/A',
        occasion: 'N/A',
    });

    useEffect(() => {
        const data = localStorage.getItem('Bookings');
        if (data) {
            setReserveDetails(JSON.parse(data));
        }
    }, []);

    return (
        <section name='booking-confirmation' className='min-h-screen bg-slate-900 py-12 px-4 flex items-center justify-center font-sans'>
            {/* Main Confirmation Card */}
            <div className='w-full max-w-2xl mx-auto bg-slate-800/50 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-2xl border border-amber-500/20 text-center'>
                
                <div className='flex justify-center mb-6'>
                    <SuccessIcon />
                </div>

                <h1 className='text-4xl md:text-5xl font-bold text-green-400 font-serif mb-4'>Your Reservation is Confirmed!</h1>
                <h2 className='text-2xl text-white mb-8'>at Saffron Spice, Hyderabad</h2>

                {/* Reservation Details */}
                <div className='bg-slate-900/70 rounded-lg p-6 my-8 space-y-4 text-left border border-slate-700'>
                    <div className='flex justify-between items-center'>
                        <span className='text-gray-400 font-semibold'>DATE:</span>
                        <span className='text-amber-400 text-lg font-bold'>{reservedDetails.date}</span>
                    </div>
                    <div className='flex justify-between items-center'>
                        <span className='text-gray-400 font-semibold'>TIME:</span>
                        <span className='text-amber-400 text-lg font-bold'>{reservedDetails.time}</span>
                    </div>
                    <div className='flex justify-between items-center'>
                        <span className='text-gray-400 font-semibold'>GUESTS:</span>
                        <span className='text-amber-400 text-lg font-bold'>{reservedDetails.guests}</span>
                    </div>
                    <div className='flex justify-between items-center'>
                        <span className='text-gray-400 font-semibold'>OCCASION:</span>
                        <span className='text-amber-400 text-lg font-bold'>{reservedDetails.occasion}</span>
                    </div>
                </div>

                {/* Location Details */}
                <div className='text-gray-300 mt-8'>
                    <div className='flex items-center justify-center gap-2 mb-2'>
                        <LocationIcon className='w-5 h-5 text-amber-400' />
                        <p className='font-semibold'>Saffron Spice, Jubilee Hills</p>
                    </div>
                    <p className='text-sm text-gray-400'>Road No. 36, Hyderabad, Telangana 500033</p>
                    <a
                        href='https://www.google.com/maps/search/?api=1&query=Jubilee+Hills,+Hyderabad'
                        target='_blank'
                        rel='noreferrer'
                        className='inline-block mt-3 text-amber-400 hover:text-amber-300 font-bold transition-colors'
                    >
                        Get Directions
                    </a>
                </div>

                {/* Home Button */}
                <a href='/' className='mt-10 inline-block w-full max-w-xs px-6 py-3 font-bold text-slate-900 bg-amber-400 rounded-md hover:bg-amber-500 transition-colors duration-300'>
                    Back to Home
                </a>
            </div>
        </section>
    );
};

export default ConfirmedBooking;

