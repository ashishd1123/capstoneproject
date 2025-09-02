import React, { useState, useRef, useEffect } from 'react';

// To avoid potential dependency errors, I've replaced react-scroll and react-icons
// with standard anchor tags and self-contained inline SVG icons.

// --- INLINE SVG ICONS ---
const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
);

const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

// --- MOCK DATA ---
const links = [
    { id: 1, link: 'about', title: 'About' },
    { id: 2, link: 'specials', title: 'Specials' },
    { id: 3, link: 'reservations', title: 'Reservations' },
    { id: 4, link: 'contact', title: 'Contact' }
];

const NavBar = () => {
    // State for toggling the mobile navigation menu
    const [nav, setNav] = useState(false);
    const navRef = useRef(null);

    // Hides or shows the navbar based on scroll direction
    useEffect(() => {
        let previousScrollPosition = window.scrollY;
        const handleScroll = () => {
            const currentScrollPosition = window.scrollY;
            const navElement = navRef.current;
            if (!navElement) return;

            if (previousScrollPosition > currentScrollPosition || currentScrollPosition < 10) {
                navElement.style.transform = 'translateY(0)';
            } else {
                navElement.style.transform = 'translateY(-100%)';
            }
            previousScrollPosition = currentScrollPosition;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Function to close the mobile menu
    const closeMenu = () => setNav(false);

    // Map over the links data to render navigation items
    const navLinks = links.map(({ link, id, title }) => (
        <li key={id} className='py-4 text-3xl md:text-lg md:py-0'>
            <a
                href={`#${link}`}
                onClick={closeMenu}
                className='capitalize cursor-pointer transition-colors duration-300 text-gray-300 hover:text-amber-400'
            >
                {title}
            </a>
        </li>
    ));

    return (
        <header
            ref={navRef}
            className='fixed top-0 left-0 w-full h-20 bg-slate-900/80 backdrop-blur-md border-b border-amber-500/20 z-50 transition-transform duration-500'
        >
            <nav className='container mx-auto px-6 h-full flex justify-between items-center'>
                {/* Logo */}
                <a href="#home" className='font-serif text-3xl font-bold text-amber-400'>
                    Saffron Spice
                </a>

                {/* Desktop Navigation */}
                <ul className='hidden md:flex space-x-8'>
                    {navLinks}
                </ul>

                {/* Hamburger Menu Icon */}
                <div onClick={() => setNav(!nav)} className='md:hidden cursor-pointer text-gray-300 hover:text-amber-400 z-50'>
                    {!nav ? <MenuIcon /> : <CloseIcon />}
                </div>

                {/* Mobile Navigation Menu (Overlay) */}
                <ul
                    className={`
                        md:hidden fixed top-0 left-0 w-full h-screen bg-slate-900 
                        flex flex-col justify-center items-center 
                        transition-transform duration-500 ease-in-out
                        ${nav ? 'translate-x-0' : '-translate-x-full'}
                    `}
                >
                    {navLinks}
                </ul>
            </nav>
        </header>
    );
};

export default NavBar;
