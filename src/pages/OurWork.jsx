import React, { useState } from 'react';
import { portfolioItems } from '../mockData';
import { Link } from 'react-router-dom';

const OurWork = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'weddings', label: 'Weddings' },
    { id: 'corporate', label: 'Corporate' },
    { id: 'social', label: 'Social' }
  ];

  const getCategoryType = (item) => {
    if (item.category === 'wedding') return 'weddings';
    if (item.category === 'corporate') return 'corporate';
    return 'social';
  };

  const filteredItems =
    activeCategory === 'all'
      ? portfolioItems
      : portfolioItems.filter(item => getCategoryType(item) === activeCategory);

  // 🔑 slug generator (no data changes needed)
  const generateSlug = (name) =>
    name?.toLowerCase().replace(/[^a-z0-9]+/g, '-');

  return (
    <div className="min-h-screen pt-20 bg-[#FAF7F2]">

      {/* HERO */}
      <section className="h-[40vh] flex items-center justify-center">
        <div className="text-center">
          <h1
            className="text-6xl md:text-7xl font-light text-[#1F1F1F] mb-6"
            style={{ fontFamily: 'Cormorant, serif' }}
          >
            Our Work
          </h1>
          <div className="w-24 h-[1px] bg-[#C6A75E] mx-auto" />
        </div>
      </section>

      {/* CATEGORY FILTER */}
      <section className="border-b border-[#EFE9DF] py-6">
        <div className="flex justify-center gap-10 flex-wrap">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`relative text-lg font-light pb-2 transition ${
                activeCategory === category.id
                  ? 'text-[#C6A75E]'
                  : 'text-[#1F1F1F]/60 hover:text-[#1F1F1F]'
              }`}
            >
              {category.label}
              {activeCategory === category.id && (
                <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-[#C6A75E]" />
              )}
            </button>
          ))}
        </div>
      </section>

      {/* MASONRY GRID */}
      <section className="bg-[#C6A75E] min-h-[60vh] flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-8">

            {filteredItems.map((item) => {
              const slug = generateSlug(item.name || item.title);

              return (
                <div key={item.id} className="break-inside-avoid mb-6">
                  <Link to={`/our-work/${slug}`}>

                    <div className="relative overflow-hidden rounded-2xl shadow-lg group bg-white">

                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="
                          w-full
                          h-auto
                          max-h-[520px]
                          object-cover
                          transition-transform duration-700
                          group-hover:scale-[1.04]
                        "
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                        <div className="p-6 text-white">
                          <h3
                            className="text-2xl font-light"
                            style={{ fontFamily: 'Cormorant, serif' }}
                          >
                            {item.name || item.title}
                          </h3>

                          {item.description && (
                            <p className="text-sm text-white/80 mt-1">
                              {item.description}
                            </p>
                          )}
                        </div>
                      </div>

                    </div>
                  </Link>
                </div>
              );
            })}

          </div>
        </div>
      </section>
    </div>
  );
};

export default OurWork;
