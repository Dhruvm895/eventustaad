import React, { useState } from 'react';
import { portfolioItems } from '../mockData';
import { Link } from 'react-router-dom';
import Masonry from 'react-masonry-css';



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

  const filteredItems = portfolioItems.filter(item => {
    if (activeCategory === 'all') {
      // In ALL → allow:
      // - all videos
      // - wedding photos only
      if (!item.videoUrl && item.category !== 'wedding') {
        return false;
      }
      return true;
    }

    // In specific category → show only that category
    return getCategoryType(item) === activeCategory;
  });

  const generateSlug = (name) =>
    name?.toLowerCase().replace(/[^a-z0-9]+/g, '-');

  const masonryBreakpoints = {
    default: 3,
    1024: 3,
    768: 2,
    640: 1
  };



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
          <div className="w-24 h-[1px] bg-[#f7f6f2] mx-auto" />
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
                <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-[#f7f6f2]" />
              )}
            </button>
          ))}
        </div>
      </section>

      {/* MASONRY GRID */}
      <section className="bg-[#f7f6f2] min-h-[60vh] flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Masonry
            breakpointCols={masonryBreakpoints}
            className="flex gap-8"
            columnClassName="flex flex-col gap-8"
          >
            {filteredItems.map((item, index) => {
              const slug = generateSlug(item.name || item.title);

              return (
                <div key={`${item.id}-${index}`} className="break-inside-avoid">
                  {(item.category === 'corporate' || item.category === 'social') && item.videoUrl ? (
                    <a
                      href={item.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
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

                        {/* ▶ PLAY ICON (FIXED) */}
                        <div className="absolute inset-0 bg-black/40 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                          <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 16 16"
                              fill="currentColor"
                              className="w-7 h-7 text-black ml-1"
                            >
                              <path d="M6 4.5v7l6-3.5-6-3.5z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </a>
                  ) : item.category === 'wedding' ? (
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

                        <div className="absolute inset-0 bg-black/40 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
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
                  ) : (
                    <div className="relative overflow-hidden rounded-2xl shadow-lg group bg-white cursor-default">
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

                      <div className="absolute inset-0 bg-black/40 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
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
                  )}
                </div>
              );
            })}
          </Masonry>
        </div>
      </section>
    </div>
  );
};

export default OurWork;
