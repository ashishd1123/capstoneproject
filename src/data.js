//SOCIAL ICONS
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

//SPECIALS FOOD
import birayani from './assets/specials/birayani.jpg';
import full_plate_food from './assets/specials/full_plate_food.jpg';
import thali_food from './assets/specials/thali_food.jpg';

// TESTIMONIALS

// TESTIMONIALS
import aarav from './assets/testimonials/aarav.png';
import priya from './assets/testimonials/priya.png';
import rahul from './assets/testimonials/rahul.png';
import sneha from './assets/testimonials/sneha.png';

// LINKS FOR NAVBAR
export const links = [
  { id: 1, link: 'about' },
  { id: 2, link: 'menu' },
  { id: 3, link: 'testimonials' },
  { id: 4, link: 'contact' },
];


export const specials = [
  {
    id: 1,
    image: birayani,
    name: 'Biryani',
    price: '₹ 700',
    description:
      'Aromatic basmati rice layered with marinated meat and slow-cooked to perfection, served with raita.',
  },
  {
    id: 2,
    image: full_plate_food,
    name: 'Full Plate Food',
    price: '₹ 1000',
    description:
      'Our Full Plate Food is a delightful combination of various dishes, served on a single platter for your enjoyment.',
  },
  {
    id: 3,
    image: thali_food,
    name: 'Thali Food',
    price: '₹ 500',
    description:
      'Experience a traditional Indian Thali, featuring a variety of curries, rice, bread, and accompaniments, all served on a single platter.',
  },
];

// TESTIMONIALS
export const testimonials = [
  {
    id: 1,
    image: aarav,
    name: 'Aarav Mehta',
    review: 'An absolutely unforgettable dining experience! The Hyderabadi Biryani was the most authentic I have ever tasted outside of my grandmother\'s kitchen. The ambiance is perfect for a special night out.'
  },
  {
    id: 2,
    image: priya,
    name: 'Priya Sharma',
    review: 'Saffron Spice is a true gem in Hyderabad. From the warm welcome to the last bite of dessert, everything was flawless. The staff is incredibly attentive. Highly recommended for any food lover!'
  },
  {
    id: 3,
    image: rahul,
    name: 'Rahul Verma',
    review: 'We celebrated our anniversary here, and it was the perfect choice. The romantic setting and exquisite flavors made our evening truly memorable. The Paneer Tikka is a must-try!'
  },
  {
    id: 4,
    image: sneha,
    name: 'Sneha Kapoor',
    review: 'We celebrated our anniversary here, and it was the perfect choice. The romantic setting and exquisite flavors made our evening truly memorable. The Paneer Tikka is a must-try!'
  },
];

// FOOTER CONTACT
export const contacts = [
  {
    id: 1,
    link: 'mailto:info@littleindia.com',
    title: 'info@littleindia.com',
  },
  {
    id: 2,
    link: 'tel:+919876543210',
    title: '+91 98765 43210',
  },
  {
    id: 3,
    link: 'mailto:bookings@littleindia.com',
    title: 'bookings@littleindia.com',
  },
];

// FOOTER SOCIAL LINKS
export const socials = [
  {
    id: 1,
    child: <FaFacebook size={30} />,
    link: 'https://facebook.com/littleindia',
  },
  {
    id: 2,
    child: <FaInstagram size={30} />,
    link: 'https://instagram.com/littleindia',
  },
  {
    id: 3,
    child: <FaTwitter size={30} />,
    link: 'https://twitter.com/littleindia',
  },
];
