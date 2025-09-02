import React, { useEffect, useState } from 'react';

// The useNavigate and LinkR hooks were causing errors because the component
// was not wrapped in a <Router>. For this single-component view,
// we will handle the confirmation state internally instead of navigating.

// Inline SVG for the Home icon
const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const BookingForm = ({ availableTimes, dispatch }) => {
  // Mocking the submitAPI function for demonstration
  const submitAPI = (formData) => new Promise((resolve) => setTimeout(() => resolve(true), 500));
  
  const { times = ['17:00', '18:00', '19:00', '20:00', '21:00'] } = availableTimes || {};
  
  const initialBookingState = {
    date: '',
    time: '17:00',
    guests: '',
    occasion: 'Birthday',
  };
  
  const [bookings, setBookings] = useState(initialBookingState);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false); // State to handle confirmation view

  useEffect(() => {
    localStorage.setItem('Bookings', JSON.stringify(bookings));
  }, [bookings]);

  // FORM VALIDATION
  const validateForm = () => {
    const newErrors = {};
    if (!bookings.date) newErrors.date = 'Please select a date.';
    if (!bookings.guests) newErrors.guests = 'Please enter the number of guests.';
    else if (bookings.guests < 1 || bookings.guests > 20) newErrors.guests = 'Please enter a number between 1 and 20.';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // SUBMIT HANDLER
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const success = await submitAPI(bookings);
      if (success) {
        setIsSubmitted(true); // Show confirmation message instead of navigating
        console.log('Form Submitted:', bookings);
      }
    } else {
      console.log('Form has validation errors.');
    }
  };

  // Centralized change handler for all inputs
  const handleChange = e => {
    const { name, value } = e.target;
    setBookings({ ...bookings, [name]: value });
  };
  
  // Renders the booking confirmation message
  if (isSubmitted) {
    return (
      <section name='reservations' className='min-h-screen bg-slate-900 py-12 md:py-20 flex items-center justify-center font-sans'>
        <div className='w-full max-w-lg mx-auto bg-slate-800/50 p-8 rounded-2xl shadow-2xl text-center'>
            <h2 className='text-4xl font-bold text-amber-400 font-serif'>Thank You!</h2>
            <p className='text-gray-300 mt-4 mb-8 text-lg'>Your reservation for {bookings.guests} guest(s) on {bookings.date} at {bookings.time} has been confirmed.</p>
            <button 
              onClick={() => {
                setBookings(initialBookingState);
                setIsSubmitted(false);
              }}
              className='w-full px-4 py-3 font-bold text-slate-900 bg-amber-400 rounded-md hover:bg-amber-500 transition-colors duration-300'
            >
              Make Another Reservation
            </button>
        </div>
      </section>
    );
  }

  // Renders the main form
  return (
    <section name='reservations' className='min-h-screen bg-slate-900 py-12 md:py-20 flex items-center justify-center font-sans'>
      <div className='relative w-full max-w-lg mx-auto bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-amber-500/20'>
        {/* Replaced LinkR with a standard anchor tag */}
        <a href='/' className='absolute top-4 right-4 text-gray-400 hover:text-amber-400 transition-colors p-2 rounded-full bg-slate-700/50 hover:bg-slate-700'>
          <HomeIcon />
        </a>

        <div className='text-center'>
          <h2 className='text-4xl font-bold text-amber-400 font-serif'>Saffron Spice</h2>
          <h3 className='text-xl text-gray-300 mb-4'>Hyderabad</h3>
          <h1 className='text-2xl text-white mb-8'>Reserve a Table for an Unforgettable Experience</h1>
        </div>

        <form onSubmit={handleSubmit} className='space-y-6' noValidate aria-label='Reservation Form'>
          {/* DATE INPUT */}
          <div>
            <label htmlFor='res-date' className='block mb-2 text-sm font-medium text-gray-300'>Date</label>
            <input
              type='date' name='date' id='res-date' required
              className={`w-full px-4 py-2 text-white bg-slate-700 rounded-md border-2 focus:outline-none focus:ring-2 ${errors.date ? 'border-red-500 focus:ring-red-500' : 'border-transparent focus:ring-amber-500'}`}
              style={{ colorScheme: 'dark' }}
              value={bookings.date}
              onChange={e => {
                setBookings({ ...bookings, date: e.target.value });
                if (dispatch) {
                    dispatch({ type: 'UPDATE_TIMES', date: new Date(e.target.value) });
                }
              }}
            />
            {errors.date && <p className="mt-1 text-xs text-red-500">{errors.date}</p>}
          </div>

          {/* TIME SELECT */}
          <div>
            <label htmlFor='res-time' className='block mb-2 text-sm font-medium text-gray-300'>Time</label>
            <select
              id='res-time' name='time' required
              value={bookings.time} onChange={handleChange}
              className='w-full px-4 py-2 text-white bg-slate-700 rounded-md border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-amber-500'
            >
              {times.map(time => <option key={time} value={time}>{time}</option>)}
            </select>
          </div>

          {/* GUESTS INPUT */}
          <div>
            <label htmlFor='guests' className='block mb-2 text-sm font-medium text-gray-300'>Number of Guests</label>
            <input
              type='number' placeholder='e.g., 2' min='1' max='20' id='guests' name='guests' required
              value={bookings.guests} onChange={handleChange}
              className={`w-full px-4 py-2 text-white bg-slate-700 rounded-md border-2 focus:outline-none focus:ring-2 ${errors.guests ? 'border-red-500 focus:ring-red-500' : 'border-transparent focus:ring-amber-500'}`}
            />
            {errors.guests && <p className="mt-1 text-xs text-red-500">{errors.guests}</p>}
          </div>

          {/* OCCASION SELECT */}
          <div>
            <label htmlFor='occasion' className='block mb-2 text-sm font-medium text-gray-300'>Occasion</label>
            <select
              id='occasion' name='occasion' required
              value={bookings.occasion} onChange={handleChange}
              className='w-full px-4 py-2 text-white bg-slate-700 rounded-md border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-amber-500'
            >
              <option>Birthday</option>
              <option>Engagement</option>
              <option>Anniversary</option>
              <option>Wedding</option>
              <option>Business Dinner</option>
              <option>Family Gathering</option>
            </select>
          </div>

          {/* SUBMIT BUTTON */}
          <button type='submit' className='w-full px-4 py-3 font-bold text-slate-900 bg-amber-400 rounded-md hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-amber-400 transition-colors duration-300'>
            Confirm Your Reservation
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;

