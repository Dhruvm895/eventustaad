import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { MapPin, Lightbulb, Hotel, Music, Gift } from 'lucide-react';
import useReveal from "../hooks/useReveal";

const Services = () => {
  const location = useLocation();
  const [heroRef, heroVisible] = useReveal();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location]);

  const services = [
    {
      id: 'venue',
      slug: 'venue-search',
      icon: MapPin,
      title: 'Our Venue Search',
      description:
        'Finding the perfect venue is the cornerstone of a successful event.',
      features: ['For unwinding experiences', 'For the class', 'For the luxury vibe', 'For the fun'],
      image: '/venue.webp'
    },
    {
      id: 'design',
      slug: 'event-design',
      icon: Lightbulb,
      title: 'Event Concepts – Designing & Production',
      description:
        'Transforming visions into immersive, story-driven experiences.',
      features: ['Thoughtful Interactive Ideas', 'Creative Elements', 'Larger Than Life Events'],
      image: '/decor.webp'
    },
    {
      id: 'hospitality',
      slug: 'hospitality',
      icon: Hotel,
      title: 'Hospitality & Logistics',
      description:
        'Seamless logistics and exceptional hospitality for flawless execution.',
      features: ['Help Desk', 'Warm Welcome', 'Personalised Welcome Notes', 'Welcome Photobooth'],
      image: '/hosp.webp'
    },
    {
      id: 'artists',
      slug: 'artist-management',
      icon: Music,
      title: 'Artist Management',
      description:
        'Connecting you with premium talent to elevate your event.',
      features: ['Live Band', 'Stand-up Comedian', 'Mentalist', 'Premium Bar Solutions'],
      image: '/artist.webp'
    },
    {
      id: 'gifting',
      slug: 'corporate-gifting',
      icon: Gift,
      title: 'Corporate Gifting',
      description:
        'Curated premium gifting solutions that leave a lasting impression.',
      features: ['Personalized Gifts', 'Premium Gifting', 'Luxury Boxes', 'Customised Products'],
      image: '/gift.webp'
    },

    {
      id: 'f&b',
      slug: 'food and beverages',
      icon: Gift,
      title: 'Food and Beverages',
      description:
        'Thoughtfully curated culinary experiences that complement the soul of your celebration.',
      features: ['Global & Regional Cuisine Curation',
    'Premium Caterer Sourcing',
    'Live Counters & Interactive Stations',
    'Bespoke Bar & Beverage Experiences',
    'Artisanal Presentation & Styling'],
      image: '/f&b.png'
    },



    

    

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
              'url(https://images.pexels.com/photos/33726144/pexels-photo-33726144.jpeg)',
            filter: 'brightness(0.6)'
          }}
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 text-center">
          <h1 className="text-6xl md:text-7xl font-light text-white mb-6" style={{ fontFamily: 'Cormorant, serif' }}>
            Our Services
          </h1>
          <div className="w-24 h-[1px] bg-[#C6A75E] mx-auto" />
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
                key={service.id}
                id={service.id}
                ref={ref}
                className={`grid md:grid-cols-2 gap-12 items-center
                  transition-all duration-1000 ease-out
                  ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
                `}
                style={{ transitionDelay: `${index * 120}ms` }}
              >

                {/* IMAGE (CLICKABLE) */}
                <Link
                  to={`/services/${service.slug}`}
                  className={`${reverse ? "md:order-2" : ""} group block`}
                >
                  <div className="overflow-hidden rounded-lg shadow-xl cursor-pointer">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[500px] object-cover
                        transition-transform duration-[1200ms] ease-out
                        group-hover:scale-[1.04]"
                    />
                  </div>
                </Link>

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
