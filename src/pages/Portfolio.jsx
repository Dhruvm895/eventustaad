import React, { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { portfolioItems } from '../mockData';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const filteredItems = filter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/35234733/pexels-photo-35234733.jpeg)',
            filter: 'brightness(0.6)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/40 to-purple-900/60" />
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6">
            Our Work
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
            A showcase of the extraordinary events we've created
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-12 bg-white border-b border-purple-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              onClick={() => setFilter('all')}
              className={`rounded-full px-6 py-2 ${
                filter === 'all'
                  ? 'bg-purple-400 text-white hover:bg-purple-500'
                  : 'bg-purple-50 text-purple-700 hover:bg-purple-100'
              }`}
            >
              All Events
            </Button>
            <Button
              onClick={() => setFilter('wedding')}
              className={`rounded-full px-6 py-2 ${
                filter === 'wedding'
                  ? 'bg-purple-400 text-white hover:bg-purple-500'
                  : 'bg-purple-50 text-purple-700 hover:bg-purple-100'
              }`}
            >
              Weddings
            </Button>
            <Button
              onClick={() => setFilter('corporate')}
              className={`rounded-full px-6 py-2 ${
                filter === 'corporate'
                  ? 'bg-purple-400 text-white hover:bg-purple-500'
                  : 'bg-purple-50 text-purple-700 hover:bg-purple-100'
              }`}
            >
              Corporate
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24 bg-gradient-to-br from-purple-50 via-white to-lavender-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <Card key={item.id} className="hover-lift border-purple-100 overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">
                      {item.category === 'wedding' ? 'Wedding' : 'Corporate'}
                    </span>
                    {item.featured && (
                      <span className="px-3 py-1 bg-gradient-to-r from-purple-400 to-purple-300 text-white text-xs font-medium rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-light text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-purple-600 font-medium mb-3">{item.location}</p>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
