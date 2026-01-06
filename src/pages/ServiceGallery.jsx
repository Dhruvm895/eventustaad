import React from 'react';
import { useParams } from 'react-router-dom';

const galleries = {
  'venue-search': Array.from({ length: 10 }, (_, i) => `/gallery/venue${i + 1}.jpg`),
  'event-design': Array.from({ length: 10 }, (_, i) => `/gallery/design${i + 1}.jpg`),
  'hospitality': Array.from({ length: 10 }, (_, i) => `/gallery/hospitality${i + 1}.jpg`),
  'artist-management': Array.from({ length: 10 }, (_, i) => `/gallery/artist${i + 1}.jpg`),
  'corporate-gifting': Array.from({ length: 10 }, (_, i) => `/gallery/gift${i + 1}.jpg`),
  'complete-solutions': Array.from({ length: 10 }, (_, i) => `/gallery/complete${i + 1}.jpg`)
};

const titles = {
  'venue-search': 'Venue Search',
  'event-design': 'Event Design',
  'hospitality': 'Hospitality',
  'artist-management': 'Artist Management',
  'corporate-gifting': 'Corporate Gifting',
  'complete-solutions': 'Complete Solutions'
};

const ServiceGallery = () => {
  const { serviceSlug } = useParams();
  const images = galleries[serviceSlug] || [];

  return (
    <div className="min-h-screen pt-28 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-6">

        <h1
          className="text-5xl md:text-6xl font-light text-[#1F1F1F] mb-14 text-center"
          style={{ fontFamily: 'Cormorant, serif' }}
        >
          {titles[serviceSlug]}
        </h1>

        {/* Masonry layout (same as Our Work) */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="break-inside-avoid rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition"
            >
              <img
                src={img}
                alt=""
                loading="lazy"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ServiceGallery;
