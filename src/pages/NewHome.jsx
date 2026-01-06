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
      <section className="py-16 sm:py-20 bg-[#FAF7F2]">
        <div className="site-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {eventTypes.map((event, index) => {
              const Icon = event.icon;
              return (
                <Link key={index} to={event.path} className="group">
                  <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                      <div className="relative h-56 sm:h-72 md:h-80">
                        <img
                          src={event.image}
                          alt={event.title}
                          loading="lazy"
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
  <div className="site-container">
    <div className="text-center mb-12">
      <h2
        className="text-3xl sm:text-4xl md:text-5xl font-light text-[#1F1F1F]"
        style={{ fontFamily: 'Cormorant, serif' }}
      >
        Our Services
      </h2>
      <p className="text-base sm:text-lg text-[#1F1F1F]/70 mt-4">
        Comprehensive event solutions tailored to perfection
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {[
        { title: 'Venue Search', slug: 'venue-search', img: '/venue.webp' },
        { title: 'Event Design', slug: 'event-design', img: '/decor.webp' },
        { title: 'Hospitality', slug: 'hospitality', img: '/hosp.webp' },
        { title: 'Artist Management', slug: 'artist-management', img: '/artist.webp' },
        { title: 'Corporate Gifting', slug: 'corporate-gifting', img: '/gift.webp' },
        { title: 'Complete Solutions', slug: 'complete-solutions', img: '/complete.jpeg' }
      ].map((item, i) => (
        <Link key={i} to={`/services/${item.slug}`}>
            <Card className="overflow-hidden hover:shadow-xl transition cursor-pointer">
            <div className="relative h-48 sm:h-56 md:h-64">
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F1F1F]/80 to-transparent" />
              <h3 className="absolute bottom-6 left-6 text-2xl text-white font-light">
                {item.title}
              </h3>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  </div>
</section>

      <LargeImageSections />
      <EventsCreatedSection />
      <RotatingClientLogos />

     {/* Testimonials */}
<section className="py-24 bg-[#EFE9DF]">
  <div className="site-container relative">

    <h2
      className="text-center text-3xl sm:text-4xl md:text-5xl font-light text-[#1F1F1F] mb-12"
      style={{ fontFamily: 'Cormorant, serif' }}
    >
      Happy Customers
    </h2>

    {/* Left Button */}
    <button
      onClick={() =>
        document.getElementById("testimonial-scroll").scrollBy({
          left: -360,
          behavior: "smooth",
        })
      }
      className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-[#E5DED3] rounded-full w-10 h-10 items-center justify-center shadow"
    >
      ‹
    </button>

    {/* Right Button */}
    <button
      onClick={() =>
        document.getElementById("testimonial-scroll").scrollBy({
          left: 360,
          behavior: "smooth",
        })
      }
      className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-[#E5DED3] rounded-full w-10 h-10 items-center justify-center shadow"
    >
      ›
    </button>

    {/* Scroll Container */}
    <div
      id="testimonial-scroll"
      className="flex gap-8 overflow-x-auto scroll-smooth pb-6 px-1"
    >

      {[
        {
          name: "Dharmendra Ranka",
          place: "Wedding Event",
          summary: "Flawless execution with complete peace of mind",
          detail:
            "The entire wedding was planned meticulously and executed professionally within budget. The team was always available and extremely cooperative."
        },
        {
          name: "Biyani Family",
          place: "Wedding Planning",
          summary: "Stress-free wedding managed perfectly end-to-end",
          detail:
            "From décor to timelines, every function ran smoothly and on time. Event Ustaad truly added value and delivered beyond expectations."
        },
        {
          name: "Prachi Mantri",
          place: "Wedding Management",
          summary: "Handled complex challenges with grace and resilience",
          detail:
            "Managing a 30+ member team across borders in days was impressive. Their patience, kindness, and attention to detail stood out."
        },
        {
          name: "Abhijit Kabra",
          place: "Wedding Event",
          summary: "Every detail executed like a family celebration",
          detail:
            "From décor to guest experience, everything was seamless. The team treated the event like their own and delivered a classy experience."
        },
        {
          name: "Krishank Malik",
          place: "Eco-Friendly Wedding",
          summary: "Bold ideas executed with technical perfection",
          detail:
            "From CRM to guest coordination, everything was tech-driven and smooth. A rare team that executes ambitious ideas flawlessly."
        },
        {
          name: "Sandeep Agarwal",
          place: "Corporate Event (400+ Guests)",
          summary: "Creative, reliable, and highly professional team",
          detail:
            "They managed planning to execution seamlessly. Lighting, branding, engagement activities — everything was top notch."
        },
        {
          name: "Vachan Shetty",
          place: "Corporate Conference",
          summary: "Go-to team for seamless corporate events",
          detail:
            "They played a key anchoring role and ensured a smooth conference experience from start to finish."
        },
        {
          name: "Destination Wedding Client",
          place: "Lonavala Wedding",
          summary: "Professional planning with a personal touch",
          detail:
            "Guests appreciated the flow, coordination, and overall execution. Everything felt thoughtfully managed."
        },
        {
          name: "Luxury Wedding Client",
          place: "High-End Wedding",
          summary: "Attention to detail that truly stands out",
          detail:
            "From concepts to execution, everything was handled with precision. The experience felt premium and effortless."
        },
        {
          name: "Corporate Leadership Team",
          place: "Annual Business Meet",
          summary: "Trusted partners for high-stakes events",
          detail:
            "Their confidence, planning, and execution standards made the event a complete success."
        }
      ].map((t, i) => (
        <div
          key={i}
          className="group relative min-w-[340px] max-w-[340px] h-[270px]
                     bg-white border border-[#E5DED3] rounded-xl
                     px-6 py-8 text-center
                     hover:shadow-xl transition-all duration-500"
        >

          {/* ⭐ Rating Placeholder */}
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, idx) => (
              <span key={idx} className="text-[#C6A75E] text-sm">★</span>
            ))}
          </div>

          {/* Summary */}
          <p className="text-sm text-[#6A6A6A] italic leading-relaxed
                        group-hover:opacity-0 transition-opacity duration-300">
            “{t.summary}”
          </p>

          {/* Hover Detail */}
          <p className="absolute left-6 right-6 top-20
                        text-sm text-[#6A6A6A] leading-relaxed
                        opacity-0 group-hover:opacity-100
                        transition-opacity duration-300">
            “{t.detail}”
          </p>

          {/* Footer */}
          <div className="absolute bottom-6 left-0 right-0">
            <div className="font-medium text-[#1F1F1F]">{t.name}</div>
            <div className="text-[#C6A75E] text-sm">{t.place}</div>
          </div>
        </div>
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
