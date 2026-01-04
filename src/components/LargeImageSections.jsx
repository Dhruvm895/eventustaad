import React from 'react';
import { Link } from 'react-router-dom';

const LargeImageSections = () => {
  return (
    <div className="grid md:grid-cols-2 gap-0">
      {/* Our Work */}
      <Link
        to="/our-work"
        className="group relative h-[60vh] overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{
            backgroundImage:
              'url(/our.webp)',
          }}
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-500" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2
            className="text-6xl md:text-7xl font-light text-white tracking-wide"
            style={{ fontFamily: 'Cormorant, serif' }}
          >
            OUR WORK
          </h2>
        </div>
      </Link>

      {/* Services */}
      <Link
        to="/services"
        className="group relative h-[60vh] overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{
            backgroundImage:
              'url(/service.webp)',
          }}
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-500" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2
            className="text-6xl md:text-7xl font-light text-white tracking-wide"
            style={{ fontFamily: 'Cormorant, serif' }}
          >
            OUR SERVICES
          </h2>
        </div>
      </Link>
    </div>
  );
};

export default LargeImageSections;
