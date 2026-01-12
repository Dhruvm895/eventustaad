import React, { useState, useEffect} from 'react';

import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/our-work', label: 'Our Work' },
    { path: '/services', label: 'Services' },
    { path: '/events', label: 'Events' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact Us' }
  ];

  const isActive = (path) => location.pathname === path;
   { /* CLOSE MOBILE MENU ON SCROLL */}
   useEffect(() => {
  if (!isMenuOpen) return;

  const closeMenu = () => setIsMenuOpen(false);

  window.addEventListener('scroll', closeMenu);

  return () => window.removeEventListener('scroll', closeMenu);
}, [isMenuOpen]);

 
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass soft-shadow">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center h-16 md:h-20">

          {/* LEFT — LOGO */}
       <Link to="/" className="flex items-center pl-4 md:pl-10">
              <img
        src="https://customer-assets.emergentagent.com/job_eventelegance-3/artifacts/ltcg4g2q_loggogo.svg"
        alt="Event Ustaad"
        className="h-26 md:h-38 w-44"
      />

      </Link>

          {/* CENTER — NAV LINKS */}
       <nav className="hidden lg:flex flex-1 justify-end gap-10 text-base font-medium pr-8">

            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors duration-300 whitespace-nowrap ${
                  isActive(link.path)
                    ? 'text-[#C6A75E]'
                    : 'text-[#1F1F1F] hover:text-[#C6A75E]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

        
          
          {/* MOBILE MENU BUTTON */}
          <button
            className="lg:hidden ml-auto p-3 rounded-lg text-[#1F1F1F] hover:bg-[#EFE9DF]"
            onClick={() => setIsMenuOpen(prev => !prev)}

            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* MOBILE NAV */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 space-y-2 px-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition ${
                  isActive(link.path)
                    ? 'text-[#C6A75E] bg-[#C6A75E]/10'
                    : 'text-[#1F1F1F] hover:text-[#C6A75E] hover:bg-[#EFE9DF]'
                }`}
              >
                {link.label}
              </Link>
            ))}

           <div className="pt-4">

  
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
