import React from 'react';
import restaurant from '../../assets/restaurant.png';

const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);
const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);
const TwitterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
);

// --- MOCK DATA FOR THE FOOTER ---
const links = [
    { id: 1, link: 'about' },
    { id: 2, link: 'specials' },
    { id: 3, link: 'reservations' }
];

const contacts = [
    { id: 1, title: 'reservations@saffronspice.com', link: 'mailto:reservations@saffronspice.com' },
    { id: 2, title: '+91 40 1234 5678', link: 'tel:+914012345678' }
];

const socials = [
    { id: 1, child: <InstagramIcon />, link: 'https://instagram.com' },
    { id: 2, child: <FacebookIcon />, link: 'https://facebook.com' },
    { id: 3, child: <TwitterIcon />, link: 'https://twitter.com' }
];


const Footer = () => {
    // RENDER LOGIC FOR LINKS
    const navLinks = links.map(({ link, id }) => (
        <li key={id}>
            {/* Replaced LinkS with a standard <a> tag */}
            <a href={`#${link}`} className='capitalize cursor-pointer transition-colors hover:text-amber-300'>
                {link}
            </a>
        </li>
    ));

    const contactLinks = contacts.map(({ link, id, title }) => (
        <li key={id}>
            <a href={link} className='transition-colors hover:text-amber-300'>
                {title}
            </a>
        </li>
    ));

    const socialLinks = socials.map(({ id, child, link }) => (
        <li key={id}>
            <a href={link} target='_blank' rel='noreferrer' className='transition-colors hover:text-amber-300'>
                {child}
            </a>
        </li>
    ));

    return (
        <footer name='contact' className='bg-slate-900 text-gray-400 font-sans border-t-2 border-amber-500/20'>
            <div className='container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left'>
                
                {/* Column 1: Restaurant Info */}
                <div className='flex flex-col items-center md:items-start space-y-4'>
                    <h3 className='font-serif text-3xl font-bold text-amber-400'>Saffron Spice</h3>
                    <img 
                        src={restaurant} 
                        className='rounded-lg w-48' 
                        alt='Saffron Spice restaurant logo' 
                    />
                    <p className='text-sm'>Experience the authentic taste of Hyderabad.</p>
                </div>

                {/* Column 2: Navigation */}
                <div className='flex flex-col items-center md:items-start'>
                    <h4 className='text-xl font-semibold text-white mb-4'>Explore</h4>
                    <ul className='space-y-3'>{navLinks}</ul>
                </div>

                {/* Column 3: Contact & Address */}
                <div className='flex flex-col items-center md:items-start'>
                    <h4 className='text-xl font-semibold text-white mb-4'>Visit Us</h4>
                    <address className='not-italic space-y-3'>
                        <p>Jubilee Hills, Road No. 36<br/>Hyderabad, Telangana 500033</p>
                        <ul className='space-y-2'>{contactLinks}</ul>
                    </address>
                </div>

                {/* Column 4: Social Media */}
                <div className='flex flex-col items-center md:items-start'>
                    <h4 className='text-xl font-semibold text-white mb-4'>Follow Us</h4>
                    <ul className='flex items-center space-x-6'>{socialLinks}</ul>
                </div>

            </div>

            {/* Copyright Section */}
            <div className='bg-slate-900 py-6 border-t border-slate-800'>
                <p className='text-center text-sm text-gray-500'>
                    &copy; {new Date().getFullYear()} Saffron Spice. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;

