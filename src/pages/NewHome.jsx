import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Briefcase, PartyPopper } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import HeroCarousel from '../components/HeroCarousel';
import LargeImageSections from '../components/LargeImageSections';
import RotatingClientLogos from '../components/RotatingClientLogos';
import EventsCreatedSection from '../components/EventsCreatedSection';

const NewHome = () => {
  const eventTypes = [
    {
      title: 'Weddings',
      description: 'Grand celebrations where dreams come alive',
      icon: Heart,
      image: 'https://images.pexels.com/photos/11985359/pexels-photo-11985359.jpeg',
      path: '/events#weddings',
      gradient: 'from-[#C6A75E] to-[#A88849]'
    },
    {
      title: 'Corporate Events',
      description: 'Professional gatherings that inspire excellence',
      icon: Briefcase,
      image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg',
      path: '/events#corporate',
      gradient: 'from-[#C6A75E] to-[#A88849]'
    },
    {
      title: 'Social Events',
      description: 'Memorable moments crafted with perfection',
      icon: PartyPopper,
      image: 'https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg',
      path: '/events#social',
      gradient: 'from-[#C6A75E] to-[#A88849]'
    }
  ];

  return (
    <div className="min-h-screen">

      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Event Types */}
      <section className="py-24 bg-[#FAF7F2]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {eventTypes.map((event, index) => {
              const Icon = event.icon;
              return (
                <Link key={index} to={event.path} className="group">
                  <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    <div className="relative h-80">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${event.gradient} opacity-60`} />
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
                        <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-6">
                          <Icon size={36} className="text-white" />
                        </div>
                        <h3 className="text-4xl font-light text-white mb-2">{event.title}</h3>
                        <p className="text-white/90 text-lg">{event.description}</p>
                        <div className="mt-6 flex items-center gap-2 text-white">
                          <span>Explore</span>
                          <ArrowRight size={20} />
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-[#EFE9DF]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light text-[#1F1F1F]" style={{ fontFamily: 'Cormorant, serif' }}>
              Our Services
            </h2>
            <p className="text-lg text-[#1F1F1F]/70 mt-4">
              Comprehensive event solutions tailored to perfection
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Venue Search', img: 'https://images.pexels.com/photos/169211/pexels-photo-169211.jpeg' },
              { title: 'Event Design', img: 'https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg' },
              { title: 'Hospitality', img: 'https://images.pexels.com/photos/730055/pexels-photo-730055.jpeg' },
              { title: 'Artist Management', img: 'https://images.pexels.com/photos/2788494/pexels-photo-2788494.jpeg' },
              { title: 'Corporate Gifting', img: 'https://images.pexels.com/photos/15841148/pexels-photo-15841148.jpeg' },
              { title: 'Complete Solutions', img: 'https://images.pexels.com/photos/33726144/pexels-photo-33726144.jpeg' }
            ].map((item, i) => (
              <Card key={i} className="overflow-hidden hover:shadow-xl transition">
                <div className="relative h-64">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F1F1F]/80 to-transparent" />
                  <h3 className="absolute bottom-6 left-6 text-2xl text-white font-light">
                    {item.title}
                  </h3>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <LargeImageSections />
      <EventsCreatedSection />
      <RotatingClientLogos />

      {/* Testimonials */}
      <section className="py-24 bg-[#EFE9DF]">
        <div className="container mx-auto px-6">
          <h2 className="text-center text-5xl font-light text-[#1F1F1F] mb-16">
            Happy Customers
          </h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {[
              {
                name: 'Priya & Arjun',
                place: 'Royal Wedding, Udaipur',
                img: 'https://images.pexels.com/photos/15841148/pexels-photo-15841148.jpeg',
                text: 'Event Ustaad made our dream wedding come true.'
              },
              {
                name: 'Meera & Vikram',
                place: 'Destination Wedding, Jaipur',
                img: 'https://images.pexels.com/photos/15582310/pexels-photo-15582310.jpeg',
                text: 'Their creativity transformed our wedding into a fairytale.'
              }
            ].map((t, i) => (
              <Card key={i} className="shadow-xl">
                <img src={t.img} alt={t.name} className="h-64 w-full object-cover" />
                <CardContent className="p-8">
                  <p className="italic text-[#6A6A6A] mb-6">"{t.text}"</p>
                  <div className="font-medium text-[#1F1F1F]">{t.name}</div>
                  <div className="text-[#C6A75E]">{t.place}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#C6A75E] text-center">
        <h2 className="text-5xl font-light text-white mb-6" style={{ fontFamily: 'Cormorant, serif' }}>
          Let’s Create Magic Together
        </h2>
        <p className="text-xl text-white/90 mb-8">Ready to plan your dream event?</p>
        <Link to="/contact">
          <Button className="bg-white text-[#1F1F1F] px-10 py-6 text-xl hover:bg-[#FAF7F2]">
            Contact Us
            <ArrowRight className="ml-2" />
          </Button>
        </Link>
      </section>

    </div>
  );
};

export default NewHome;
