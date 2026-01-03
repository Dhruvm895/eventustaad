import React from 'react';
import { MapPin, Lightbulb, Hotel, Music, Gift } from 'lucide-react';

const HowWeWorkNew = () => {
  const services = [
    {
      icon: MapPin,
      title: 'Our Venue Search',
      description: 'Finding the perfect venue is the cornerstone of a successful event. With our extensive network and in-depth knowledge, we source venues that align seamlessly with your event\'s objectives and ambiance.',
      perfect: ['For unwinding experiences', 'For the class', 'For the luxury vibe', 'For the fun']
    },
    {
      icon: Lightbulb,
      title: 'Event Concepts – Designing & Production',
      description: 'At Event Ustaad, we believe every event is a story waiting to be told. From thoughtful interactive ideas to larger-than-life productions, we transform visions into immersive experiences.',
      perfect: ['Thoughtful Interactive Ideas', 'Creative Elements', 'Larger Than Life Events']
    },
    {
      icon: Hotel,
      title: 'Hospitality & Logistics',
      description: 'Seamless logistics and exceptional hospitality are the backbone of every successful gathering. From transportation to luxury accommodations, we ensure flawless execution.',
      perfect: ['Help Desk', 'Warm Welcome', 'Personalised Welcome Notes', 'Welcome Photobooth']
    },
    {
      icon: Music,
      title: 'Artist Management',
      description: 'We connect you with the finest talents in the industry to add star power to your event.',
      perfect: ['Live Band', 'Stand-up Comedian', 'Mentalist', 'Premium Bar Solutions']
    },
    {
      icon: Gift,
      title: 'Corporate Gifting',
      description: 'Elevate relationships with curated, premium gifting solutions that leave a lasting impression.',
      perfect: ['Personalized Gifts', 'Premium Gifting', 'Luxury Boxes', 'Customised Products']
    }
  ];

  return (
    <section className="py-24 bg-[#FAF7F2] relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-light text-[#1F1F1F] mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
            How We Work
          </h2>
          <div className="w-24 h-[1px] bg-[#C6A75E] mx-auto mt-6" />
        </div>

        <div className="max-w-7xl mx-auto space-y-20">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="grid md:grid-cols-12 gap-8 items-start"
                style={{ animation: `fadeInUp 0.8s ease-out ${index * 0.15}s both` }}
              >
                {/* Icon */}
                <div className="md:col-span-2 flex justify-center md:justify-start">
                  <div className="w-20 h-20 border-2 border-[#C6A75E] rounded-full flex items-center justify-center">
                    <IconComponent className="text-[#C6A75E]" size={32} strokeWidth={1.5} />
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-10">
                  <h3 className="text-2xl md:text-3xl font-light text-[#1F1F1F] mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
                    {service.title}
                  </h3>
                  <p className="text-lg text-[#1F1F1F]/70 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {service.perfect.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-[#C6A75E] rounded-full" />
                        <span className="text-[#1F1F1F]/80">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                {index < services.length - 1 && (
                  <div className="md:col-span-12 mt-12">
                    <div className="w-full h-[1px] bg-[#EFE9DF]" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default HowWeWorkNew;
