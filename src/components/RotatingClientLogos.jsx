import React from 'react';

const RotatingClientLogos = () => {
  const clients = [
    { name: 'Danone', logo: '/cl1.svg' },
    { name: 'Novo Nordisk', logo: '/novo_nordisk.svg' },
    { name: 'Alkem', logo: '/alkem.svg' },
    { name: 'Asian Paints', logo: '/asianpaints.svg' },
    { name: 'Fintoo', logo: '/fintoo.svg' },
    { name: 'Future Generali', logo: '/futuregenerali.svg' },
    { name: 'Lodha', logo: '/lodhalogo.svg' },
    { name: 'Godrej', logo: '/godrejlogo.svg' },
    { name: 'Cipla', logo: '/cipla.svg' },
    { name: 'Schbang', logo: '/schbang.svg' },
    { name: 'SISL', logo: '/sisl.svg' }
  ];

  return (
    <section className="py-20 bg-[#FAF7F2] overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-light text-[#1F1F1F]" style={{ fontFamily: 'Cormorant, serif' }}>
          Trusted by Leading Brands
        </h2>
        <div className="w-24 h-[1px] bg-[#C6A75E] mx-auto mt-6" />
      </div>

      <div className="relative overflow-hidden">
        {/* fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#FAF7F2] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#FAF7F2] to-transparent z-10" />

        {/* marquee */}
        <div className="marquee-track">
          {[...clients, ...clients].map((client, i) => (
            <div key={i} className="marquee-item">
              <img
                src={client.logo}
                alt={client.name}
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
