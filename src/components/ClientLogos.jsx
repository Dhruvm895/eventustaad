import React from 'react';

const ClientLogos = () => {
  const clients = [
    {
      name: "Danone",
      // Using a placeholder that will fallback to text if needed
      logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 60'%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='24' fill='%230085CA'%3EDanone%3C/text%3E%3C/svg%3E"
    },
    {
      name: "Novo Nordisk",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Novo_Nordisk_Logo.svg/320px-Novo_Nordisk_Logo.svg.png"
    },
    {
      name: "Alkem",
      logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 60'%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='24' font-weight='bold' fill='%230047AB'%3EAlkem%3C/text%3E%3C/svg%3E"
    },
    {
      name: "Asian Paints",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Asian_Paints_Logo.svg/320px-Asian_Paints_Logo.svg.png"
    },
    {
      name: "Fintoo",
      logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 60'%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='24' font-weight='bold' fill='%2300A0DC'%3EFintoo%3C/text%3E%3C/svg%3E"
    },
    {
      name: "Future Generali",
      logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 240 60'%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='20' fill='%23C8102E'%3EFuture Generali%3C/text%3E%3C/svg%3E"
    },
    {
      name: "Lodha",
      logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 60'%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='28' font-weight='bold' fill='%23B8860B'%3ELODHA%3C/text%3E%3C/svg%3E"
    },
    {
      name: "Godrej Tyson",
      logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 240 60'%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='22' fill='%23FF0000'%3EGodrej Tyson%3C/text%3E%3C/svg%3E"
    },
    {
      name: "Cipla",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Cipla_logo.svg/320px-Cipla_logo.svg.png"
    },
    {
      name: "Schbang",
      logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 60'%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='24' font-weight='bold' fill='%23FF6B35'%3ESchbang%3C/text%3E%3C/svg%3E"
    },
    {
      name: "SISL",
      logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 60'%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='32' font-weight='bold' fill='%23E31E24'%3ESISL%3C/text%3E%3C/svg%3E"
    }
  ];

  // Duplicate for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients, ...clients];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h2 className="text-3xl md:text-4xl font-light text-center text-gray-900">
          Trusted by Leading Brands
        </h2>
      </div>

      <div className="relative">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
        
        <div className="flex animate-scroll hover:pause-animation items-center">
          {duplicatedClients.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex-shrink-0 px-8 md:px-12 flex items-center justify-center filter grayscale hover:grayscale-0 transition-all duration-500 transform hover:scale-110"
              style={{ minWidth: '220px', height: '100px' }}
            >
              <img 
                src={client.logo} 
                alt={client.name}
                className="max-h-20 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
