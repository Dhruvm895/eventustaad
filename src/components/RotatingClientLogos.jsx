import React from 'react';

const RotatingClientLogos = () => {
  const clients = [
    { name: 'Danone', logo: '/cl1.svg', height: '100' },
    { name: 'Novo Nordisk', logo: '/novo_nordisk.svg', height: '100' },
    { name: 'Alkem', logo: '/alkem.svg' , height: '100'},
    { name: 'Asian Paints', logo: '/asianpaints.svg' , height: '100'},
    { name: 'Fintoo', logo: '/fintoo.svg' , height: '100'},
    { name: 'Future Generali', logo: '/futuregenerali.svg', height: '100' },
    { name: 'Lodha', logo: '/lodhalogo.svg' , height: '100'},
    { name: 'Godrej ', logo: '/godrejlogo.svg' , height: '100' },
    { name: 'Tyson Foods', logo: '/tysonlogo.svg' , height: '100'},
    { name: 'Cipla', logo: '/cipla.svg' , height: '100'},
    { name: 'Schbang', logo: '/schbang.svg' , height: '100'},
    { name: 'SISL', logo: '/sisl.svg' , height: '100'}
  ];

  // Triple for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients, ...clients];

  return (
    <section className="py-20 bg-[#FAF7F2] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h2 className="text-4xl md:text-5xl font-light text-center text-[#1F1F1F]" style={{ fontFamily: 'Cormorant, serif' }}>
          Trusted by Leading Brands
        </h2>
        <div className="w-24 h-[1px] bg-[#C6A75E] mx-auto mt-6" />
      </div>

      <div className="relative">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-[#FAF7F2] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-[#FAF7F2] to-transparent z-10" />
        
        <div className="flex animate-scroll hover:pause-animation items-center py-8">
          {duplicatedClients.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex-shrink-0 px-12 md:px-16 flex items-center justify-center transition-all duration-500 hover:scale-110"
              style={{ minWidth: '300px', height: '140px' }}
            >
              <img 
                src={client.logo} 
                alt={client.name}
                className="max-h-28 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RotatingClientLogos;
