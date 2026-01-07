import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Briefcase, PartyPopper } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import HeroCarousel from '../components/HeroCarousel';
import LargeImageSections from '../components/LargeImageSections';
import RotatingClientLogos from '../components/RotatingClientLogos';
import EventsCreatedSection from '../components/EventsCreatedSection';

const NewHome = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonialData = [
    {
      name: "Dharmendra Ranka",
      place: "Wedding Event",
      summary: "Flawless execution with complete peace of mind",
      detail:
        "The entire wedding was planned meticulously and executed professionally within budget. The team was always available and extremely cooperative.",
      image: "/wedding1.webp",
    },
    {
      name: "Biyani Family",
      place: "Wedding Planning",
      summary: "Stress-free wedding managed perfectly end-to-end",
      detail:
        "From décor to timelines, every function ran smoothly and on time. Event Ustaad truly added value and delivered beyond expectations.",
      image: "/wedding2.webp",
    },
    {
      name: "Prachi Mantri",
      place: "Wedding Management",
      summary: "Handled complex challenges with grace and resilience",
      detail:
        "Managing a 30+ member team across borders in days was impressive. Their patience, kindness, and attention to detail stood out.",
      image: "/wedding3.webp",
    },
    {
      name: "Abhijit Kabra",
      place: "Wedding Event",
      summary: "Every detail executed like a family celebration",
      detail:
        "From décor to guest experience, everything was seamless. The team treated the event like their own and delivered a classy experience.",
      image: "/wedding4.webp",
    },
    {
      name: "Krishank Malik",
      place: "Eco-Friendly Wedding",
      summary: "Bold ideas executed with technical perfection",
      detail:
        "From CRM to guest coordination, everything was tech-driven and smooth. A rare team that executes ambitious ideas flawlessly.",
      image: "/wedding4.webp",
    },
    {
      name: "Sandeep Agarwal",
      place: "Corporate Event (400+ Guests)",
      summary: "Creative, reliable, and highly professional team",
      detail:
        "They managed planning to execution seamlessly. Lighting, branding, engagement activities — everything was top notch.",
      image: "/wedding5.webp",
    },
    {
      name: "Vachan Shetty",
      place: "Corporate Conference",
      summary: "Go-to team for seamless corporate events",
      detail:
        "They played a key anchoring role and ensured a smooth conference experience from start to finish.",
      image: "/wedding.webp",
    },
    {
      name: "Destination Wedding Client",
      place: "Lonavala Wedding",
      summary: "Professional planning with a personal touch",
      detail:
        "Guests appreciated the flow, coordination, and overall execution. Everything felt thoughtfully managed.",
      image: "/testimonials/client-8.jpg",
    },
    {
      name: "Luxury Wedding Client",
      place: "High-End Wedding",
      summary: "Attention to detail that truly stands out",
      detail:
        "From concepts to execution, everything was handled with precision. The experience felt premium and effortless.",
      image: "/testimonials/client-9.jpg",
    },
    {
      name: "Corporate Leadership Team",
      place: "Annual Business Meet",
      summary: "Trusted partners for high-stakes events",
      detail:
        "Their confidence, planning, and execution standards made the event a complete success.",
      image: "/testimonials/client-10.jpg",
    },
  ];

  const eventTypes = [
    {
      title: 'Luxury Weddings',
      description: 'Bespoke, big-fat Indian weddings designed with scale, soul, and timeless elegance.',
      icon: Heart,
      image: '/homewedding.jpeg',
      path: '/events#weddings',
      gradient: 'from-[#C6A75E] to-[#A88849]'
    },
    {
      title: 'Corporate Experiences',
      description: 'High-impact conferences, launches, offsites, and brand experiences executed with precision.',
      icon: Briefcase,
      image: '/homecorporate.jpeg',
      path: '/events#corporate',
      gradient: 'from-[#C6A75E] to-[#A88849]'
    },
    {
      title: 'Social Celebrations',
      description: 'Curated private events crafted with style and attention to detail.',
      icon: PartyPopper,
      image: '/homesocial.webp',
      path: '/events#social',
      gradient: 'from-[#C6A75E] to-[#A88849]'
    }
  ];
  useEffect(() => {
  const interval = setInterval(() => {
    setActiveTestimonial(prev =>
      (prev + 1) % testimonialData.length
    );
  }, 5000);

  return () => clearInterval(interval);
}, [testimonialData.length]);


  return (
    <div className="min-h-screen">

      {/* Hero Carousel */}
      <HeroCarousel />

    {/* Brand Motto */}
<section className="bg-[#F7F3EC] py-12">
  <div className="site-container text-center max-w-3xl mx-auto">

    <span
      className="block text-lg sm:text-2xl font-bold tracking-[0.6em] text-[#C6A75E] mb-10 uppercase"

    >
      We are USTAAD!
    </span>

    <p
      className="text-1xl sm:text-1xl md:text-2xl font-light text-[#1F1F1F] leading-snug"
      style={{ fontFamily: 'Cormorant, serif' }}
    >
      
       Masters of celebrations, crafting every moment with care, precision, and unforgettable elegance.
      <br />
      <span className="text-[#6A6A6A] text-xl sm:text-2xl md:text-3xl">
       
      </span>
    </p>

  </div>
</section>



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
  <div className="site-container">
    <h2
      className="text-center text-3xl sm:text-4xl md:text-5xl font-light text-[#1F1F1F] mb-16"
      style={{ fontFamily: 'Cormorant, serif' }}
    >
      Happy Customers
    </h2>

    {/* Cards */}
    <div className="flex justify-center gap-8 items-stretch">
      {[ -1, 0, 1 ].map((offset) => {
        const index =
          (activeTestimonial + offset + testimonialData.length) %
          testimonialData.length;

        const isCenter = offset === 0;

        return (
          <div
            key={index}
            className={`
              group
              w-full max-w-sm
              bg-white border border-[#E5DED3] rounded-xl
              overflow-hidden
              transition-all duration-500
              ${isCenter ? 'shadow-2xl scale-100' : 'shadow-md scale-95 opacity-80'}
            `}
          >
            {/* Image */}
            <div className="relative h-48 w-full overflow-hidden">
              <img
                src={testimonialData[index].image}
                alt={testimonialData[index].name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Content */}
<div className="p-6 text-center flex flex-col h-[260px]">

  {/* Stars */}
  <div className="flex justify-center gap-1 mb-4 shrink-0">
    {[...Array(5)].map((_, i) => (
      <span key={i} className="text-[#C6A75E] text-sm">★</span>
    ))}
  </div>

  {/* Text Wrapper (FIXED HEIGHT) */}
  <div className="relative flex-1 flex items-center justify-center px-2">

    {/* Summary */}
    <p className="
      text-sm text-[#6A6A6A] italic leading-relaxed
      transition-opacity duration-300
      group-hover:opacity-0
    ">
      “{testimonialData[index].summary}”
    </p>

    {/* Detail */}
    <p className="
      absolute inset-0
      text-sm text-[#6A6A6A] leading-relaxed
      opacity-0 group-hover:opacity-100
      transition-opacity duration-300
      flex items-center justify-center px-2
    ">
      “{testimonialData[index].detail}”
    </p>

  </div>

  {/* Name */}
  <div className="mt-6 shrink-0">
    <div className="font-medium text-[#1F1F1F]">
      {testimonialData[index].name}
    </div>
    <div className="text-[#C6A75E] text-sm">
      {testimonialData[index].place}
    </div>
  </div>

</div>

          </div>
        );
      })}
    </div>

    {/* Dots */}
    <div className="flex justify-center gap-2 mt-10">
      {testimonialData.map((_, idx) => (
        <button
          key={idx}
          onClick={() => setActiveTestimonial(idx)}
          className={`h-2.5 rounded-full transition-all duration-300 ${
            idx === activeTestimonial
              ? 'w-8 bg-[#C6A75E]'
              : 'w-2.5 bg-[#D4C5B0]'
          }`}
        />
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
