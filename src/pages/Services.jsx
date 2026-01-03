import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MapPin, Lightbulb, Hotel, Music, Gift } from 'lucide-react';

const Services = () => {
  const location = useLocation();

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
      icon: MapPin,
      title: 'Our Venue Search',
      description: 'Finding the perfect venue is the cornerstone of a successful event. With our extensive network and in-depth knowledge, we source venues that align seamlessly with your event\'s objectives and ambiance.',
      features: ['For unwinding experiences', 'For the class', 'For the luxury vibe', 'For the fun'],
      image: 'https://images.pexels.com/photos/169211/pexels-photo-169211.jpeg'
    },
    {
      id: 'design',
      icon: Lightbulb,
      title: 'Event Concepts – Designing & Production',
      description: 'At Event Ustaad, we believe every event is a story waiting to be told. From thoughtful interactive ideas to larger-than-life productions, we transform visions into immersive experiences.',
      features: ['Thoughtful Interactive Ideas', 'Creative Elements', 'Larger Than Life Events'],
      image: 'https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg'
    },
    {
      id: 'hospitality',
      icon: Hotel,
      title: 'Hospitality & Logistics',
      description: 'Seamless logistics and exceptional hospitality are the backbone of every successful gathering. From transportation to luxury accommodations, we ensure flawless execution.',
      features: ['Help Desk', 'Warm Welcome', 'Personalised Welcome Notes', 'Welcome Photobooth'],
      image: 'https://images.pexels.com/photos/730055/pexels-photo-730055.jpeg'
    },
    {
      id: 'artists',
      icon: Music,
      title: 'Artist Management',
      description: 'We connect you with the finest talents in the industry to add star power to your event.',
      features: ['Live Band', 'Stand-up Comedian', 'Mentalist', 'Premium Bar Solutions'],
      image: 'https://images.pexels.com/photos/2788494/pexels-photo-2788494.jpeg'
    },
    {
      id: 'gifting',
      icon: Gift,
      title: 'Corporate Gifting',
      description: 'Elevate relationships with curated, premium gifting solutions that leave a lasting impression.',
      features: ['Personalized Gifts', 'Premium Gifting', 'Luxury Boxes', 'Customised Products'],
      image: 'https://images.pexels.com/photos/15841148/pexels-photo-15841148.jpeg'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/33726144/pexels-photo-33726144.jpeg)',
            filter: 'brightness(0.6)'
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl md:text-7xl font-light text-white mb-6" style={{ fontFamily: 'Cormorant, serif' }}>
            Our Services
          </h1>
          <div className="w-24 h-[1px] bg-[#C6A75E] mx-auto mt-6" />
        </div>
      </section>

      {/* Services Content */}
      <section className="py-24 bg-[#FAF7F2]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl space-y-32">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isEven = index % 2 === 0;

            return (
              <div 
                key={service.id}
                id={service.id}
                className={`grid md:grid-cols-2 gap-12 items-center ${!isEven ? 'md:flex-row-reverse' : ''}`}
                style={{ animation: `fadeInUp 0.8s ease-out ${index * 0.15}s both` }}
              >
                {/* Image */}
                <div className={`${!isEven ? 'md:order-2' : ''}`}>
                  <div className="image-zoom-container rounded-lg overflow-hidden shadow-xl">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[500px] object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={`${!isEven ? 'md:order-1' : ''}`}>
                  <div className="w-20 h-20 border-2 border-[#C6A75E] rounded-full flex items-center justify-center mb-8">
                    <IconComponent className="text-[#C6A75E]" size={36} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-4xl md:text-5xl font-light text-[#1F1F1F] mb-6" style={{ fontFamily: 'Cormorant, serif' }}>
                    {service.title}
                  </h3>
                  <p className="text-xl text-[#1F1F1F]/70 leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-[#C6A75E] rounded-full" />
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
