import React, { useState } from 'react';
import { portfolioItems } from '../mockData';

const OurWork = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'weddings', label: 'Weddings' },
    { id: 'corporate', label: 'Corporate' },
    { id: 'social', label: 'Social' }
  ];

  // Map existing categories
  const getCategoryType = (item) => {
    if (item.category === 'wedding') return 'weddings';
    if (item.category === 'corporate') return 'corporate';
    return 'social';
  };

  const filteredItems = activeCategory === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => getCategoryType(item) === activeCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden bg-[#FAF7F2]">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl md:text-7xl font-light text-[#1F1F1F] mb-6" style={{ fontFamily: 'Cormorant, serif' }}>
            Our Work
          </h1>
          <div className="w-24 h-[1px] bg-[#C6A75E] mx-auto mt-6" />
        </div>
      </section>

      {/* Category Navigation */}
     <section className="relative bg-[#FAF7F2] border-b border-[#EFE9DF] py-6">

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center gap-8 flex-wrap">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`relative text-lg font-light transition-all duration-300 pb-2 ${
                  activeCategory === category.id
                    ? 'text-[#C6A75E]'
                    : 'text-[#1F1F1F]/60 hover:text-[#1F1F1F]'
                }`}
              >
                {category.label}
                {activeCategory === category.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C6A75E]" />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Gallery */}
      <section className="py-16 bg-[#FAF7F2]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="break-inside-avoid group"
                style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.05}s both` }}
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-2xl font-light mb-2" style={{ fontFamily: 'Cormorant, serif' }}>
                        {item.title}
                      </h3>
                      <p className="text-sm text-white/80">{item.location}</p>
                      <p className="text-sm text-white/70 mt-2">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurWork;