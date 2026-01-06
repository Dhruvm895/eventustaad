import React from "react";

const ClientLogos = () => {
  const clients = [
    { name: "Danone", logo: "/danone.svg" },
    { name: "Novo Nordisk", logo: "/novo_nordisk.svg" },
    { name: "Alkem", logo: "/alkem.svg" },
    { name: "Asian Paints", logo: "/asianpaints.svg" },
    { name: "Fintoo", logo: "/fintoo.svg" },
    { name: "Future Generali", logo: "/futuregenerali.svg" },
    { name: "Lodha", logo: "/lodhalogo.svg" },
    { name: "Godrej Tyson", logo: "/godrejlogo.svg" },
    { name: "Cipla", logo: "/cipla.svg" },
    { name: "Schbang", logo: "/schbang.svg" },
    { name: "SISL", logo: "/sisl.svg" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-light text-center text-gray-900">
          Trusted by Leading Brands
        </h2>
      </div>

      {/* SCROLL WRAPPER */}
      <div className="relative overflow-hidden">

        {/* GRADIENT FADES */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

        {/* MOVING ROW */}
        <div className="flex w-max animate-scroll items-center gap-12 px-6">

          {/* FIRST SET */}
          {clients.map((client, index) => (
            <div
              key={`logo-1-${index}`}
                className="flex-shrink-0 flex items-center justify-center
                           grayscale hover:grayscale-0
                           transition-all duration-500
                           hover:scale-110 min-w-[140px] h-20 sm:min-w-[180px] sm:h-24"
            >
              <img
                src={client.logo}
                alt={client.name}
                loading="lazy"
                className="max-h-16 sm:max-h-20 w-auto object-contain opacity-70 hover:opacity-100 transition"
              />
            </div>
          ))}

          {/* DUPLICATE SET (REQUIRED FOR LOOP) */}
          {clients.map((client, index) => (
            <div
              key={`logo-2-${index}`}
                className="flex-shrink-0 flex items-center justify-center
                           grayscale hover:grayscale-0
                           transition-all duration-500
                           hover:scale-110 min-w-[140px] h-20 sm:min-w-[180px] sm:h-24"
            >
              <img
                src={client.logo}
                alt={client.name}
                loading="lazy"
                className="max-h-16 sm:max-h-20 w-auto object-contain opacity-70 hover:opacity-100 transition"
              />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
