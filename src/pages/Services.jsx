import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { MapPin, Lightbulb, Hotel, Music, Gift } from 'lucide-react';
import useReveal from "../hooks/useReveal";

const Services = () => {
 
  const [heroRef, heroVisible] = useReveal();
const { slug } = useParams();

useEffect(() => {
  if (!slug) return;

  const el = document.getElementById(slug);
  if (el) {
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}, [slug]);



  const services = [
    {
  id: 'venue',
  slug: 'venue-search',
  icon: MapPin,
  title: 'Exquisite Destination & Venue Curation',
  features: [
    'Personalized recommendations for breathtaking destinations and iconic venues.',
'Assistance with site visits, availability checks, and negotiations.',
'Creating a setting that perfectly reflects your vision and event style.' 
  ],
  image: '/venuein.jpeg'
},
{
  id: 'design',
  slug: 'event-design',
  icon: Lightbulb,
  title: 'Luxury Décor & Design',
  features: [
    '	Bespoke theme and décor concepts tailored to your taste and event style.',
    'Selection and arrangement of floral designs, lighting, furniture, and décor elements.',
    'Transforming spaces into visually stunning, immersive experiences.'
  ],
  image: '/decorin.jpeg'
},
{
  id: 'artists',
  slug: 'artist-management',
  icon: Music,
  title: 'Bespoke Vendor & Entertainment Management',
  features: [
    'Handpicked vendors for photography, styling, music, and performances.',
    'Coordination and scheduling of artists, performers, and entertainment segments.',
    'Ensuring every service runs seamlessly, leaving you stress-free.'
  ],
  image: '/artistin.jpeg'
},
{
  id: 'ceremony',
  slug: 'ceremony-planning',
  icon: Lightbulb,
  title: 'Ceremony & Ritual Expertise',
  features: [
    'Guidance for all traditional, cultural, or custom rituals.',
    'Step-by-step planning to ensure ceremonies flow smoothly and elegantly.',
    'Handling officiants, timing, and ceremonial essentials for a flawless experience.'
  ],
  image: '/ritualin.jpeg'
},
{
  id: 'hospitality',
  slug: 'hospitality',
  icon: Hotel,
  title: 'Seamless Logistics & Guest Experience',
  features: [
    'Complete management of guest arrivals, transportation, and accommodations.',
    'On-site coordination to ensure every aspect runs perfectly.',
    'Personalized care to make each guest feel valued and comfortable.'
  ],
  image: '/hospin.jpeg'
},
{
  id: 'f&b',
  slug: 'food-and-beverages',
  icon: Gift,
  title: 'Curated Culinary & Beverage Experiences',
  features: [
    'Personalized menu planning and tasting sessions to ensure every dish delights your guests.',
    'Management of catering details including portion sizes, plate counts, and dietary requirements.',
    'Coordination of beverages, including alcohol selection, inventory, and service, for a seamless dining experience.'
  ],
  image: '/khana.jpg'
}


    

    

  ];

  return (
    <div className="min-h-screen pt-20">

      {/* HERO */}
      <section
        ref={heroRef}
        className={`relative h-[50vh] flex items-center justify-center overflow-hidden
          transition-all duration-1000 ease-out
          ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        `}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(signature.jpeg)',
            filter: 'brightness(0.6)'
          }}
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 text-center">
          <h1 className="text-6xl md:text-7xl font-light text-white mb-6" style={{ fontFamily: 'Cormorant, serif' }}>
         Our Signature Services
          </h1>
          <div className="w-24 h-[1px] bg-[#C6A75E] mx-auto  mb-6" />
           <p className="text-sm sm:text-base md:text-xl text-white/90 max-w-3xl mx-auto">
          End-to-End Planning. Seamless Execution. Exceptional Experiences.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-[#FAF7F2]">
        <div className="container mx-auto max-w-7xl space-y-32 px-6">

          {services.map((service, index) => {
            const Icon = service.icon;
            const [ref, visible] = useReveal(0.25);
            const reverse = index % 2 !== 0;

            return (
             <div
  key={service.slug}
  id={service.slug}


                ref={ref}
                className={`grid md:grid-cols-2 gap-12 items-center
                  transition-all duration-1000 ease-out
                  ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
                `}
                style={{ transitionDelay: `${index * 120}ms` }}
              >

               {/* IMAGE (NON-CLICKABLE) */}
              <div className={`${reverse ? "md:order-2" : ""} group`}>
                <div className="overflow-hidden rounded-lg shadow-xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[500px] object-cover
                      transition-transform duration-[1200ms] ease-out
                      group-hover:scale-[1.04]"
                  />
                </div>
              </div>


                {/* CONTENT */}
                <div className={`${reverse ? "md:order-1" : ""}`}>
                  <div className="w-20 h-20 border border-[#C6A75E] rounded-full flex items-center justify-center mb-8">
                    <Icon size={36} className="text-[#C6A75E]" strokeWidth={1.5} />
                  </div>

                  <h3 className="text-4xl md:text-5xl font-light text-[#1F1F1F] mb-6" style={{ fontFamily: 'Cormorant, serif' }}>
                    {service.title}
                  </h3>

                  <p className="text-xl text-[#1F1F1F]/70 mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-[#C6A75E] rounded-full" />
                        <span className="text-lg text-[#1F1F1F]/80">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}

        </div>
      </section>
    </div>
  );
};

export default Services;
