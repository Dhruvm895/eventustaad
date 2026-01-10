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
      
    },
    {
      name: "Biyani Family(Biyani Packaging Pvt Ltd.)",
      place: "Wedding Planning",
      summary: "Stress-free wedding managed perfectly end-to-end",
      detail:
        "From décor to timelines, every function ran smoothly and on time. Event Ustaad truly added value and delivered beyond expectations.",
    
    },
    {
      name: "Prachi Mantri",
      place: "Wedding Management",
      summary: "Handled complex challenges with grace and resilience",
      detail:
        "Managing a 30+ member team across borders in days was impressive. Their patience, kindness, and attention to detail stood out.",
      
    },
    {
      name: "Abhijit Kabra",
      place: "Wedding Event",
      summary: "Every detail executed like a family celebration",
      detail:
        "From décor to guest experience, everything was seamless. The team treated the event like their own and delivered a classy experience.",
  
    },
    {
      name: "Krishank Malik",
      place: "Eco-Friendly Wedding",
      summary: "Bold ideas executed with technical perfection",
      detail:
        "From CRM to guest coordination, everything was tech-driven and smooth. A rare team that executes ambitious ideas flawlessly.",
   
    },
    {
      name: "Sandeep Agarwal(Asian Paints)",
      place: "Corporate Event (400+ Guests)",
      summary: "Creative, reliable, and highly professional team",
      detail:
        "They managed planning to execution seamlessly. Lighting, branding, engagement activities — everything was top notch.",
     
    },
    {
      name: "Vachan Shetty(Godrej Tyson)",
      place: "Corporate Conference",
      summary: "Go-to team for seamless corporate events",
      detail:
        "They played a key anchoring role and ensured a smooth conference experience from start to finish.",
     
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
        
Our Signature Services

      </h2>
      <p className="text-base sm:text-lg text-[#1F1F1F]/70 mt-4">
            End-to-End Planning. Seamless Execution. Exceptional Experiences.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {[
        { title: 'Exquisite Destination & Venue Curation', slug: 'venue-search', img: '/venue.webp' },
        { title: 'Luxury Décor & Design', slug: 'event-design', img: '/decor.webp' },
        { title: 'Seamless Logistics & Guest Experience', slug: 'hospitality', img: '/hosp.webp' },
        { title: 'Bespoke Vendor & Entertainment Management', slug: 'artist-management', img: '/artist.webp' },
        { title: 'Ceremony & Ritual Expertise', slug: 'ceremony-planning', img: '/decor.webp' },
        { title: 'Curated Culinary & Beverage Experiences', slug: 'food-and-beverages', img: '/f&b.png' }
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
<section className="py-16 sm:py-24 bg-[#EFE9DF] relative">
  <div className="site-container relative">

    <h2
      className="text-center text-3xl sm:text-4xl md:text-5xl font-light text-[#1F1F1F] mb-12 sm:mb-16"
      style={{ fontFamily: 'Cormorant, serif' }}
    >
      What Our Clients Say
    </h2>

    {/* Wrapper */}
    <div className="relative flex justify-center items-stretch gap-4 sm:gap-6 px-2 sm:px-0">

      {/* PREVIOUS */}
      <button
        onClick={() =>
          setActiveTestimonial(
            (prev) =>
              (prev - 1 + testimonialData.length) % testimonialData.length
          )
        }
        className="absolute left-[-56px] sm:left-[-72px] top-1/2 -translate-y-1/2 z-20
                   w-12 h-12 sm:w-14 sm:h-14 rounded-full
                   bg-white/40 backdrop-blur-md
                   flex items-center justify-center
                   hover:bg-white/60 transition"
      >
        <span className="text-[#C6A75E] text-xl sm:text-2xl">‹</span>
      </button>

      {/* CARDS */}
      {[ -1, 0, 1 ].map((offset) => {
        const index =
          (activeTestimonial + offset + testimonialData.length) %
          testimonialData.length;

        const isCenter = offset === 0;

        return (
          <div
            key={index}
            className={`
              w-full max-w-[280px] sm:max-w-sm
              bg-white
              border border-[#E5DED3] rounded-2xl
              px-5 sm:px-8
              py-6 sm:py-10
              text-center
              transition-all duration-500
              flex flex-col
              ${isCenter
                ? 'shadow-2xl scale-100 opacity-100'
                : 'shadow-md scale-95 opacity-70'}
            `}
          >

            {/* Stars */}
            <div className="flex justify-center gap-1 mb-4 sm:mb-6">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className="text-[#C6A75E] text-xs sm:text-sm"
                >
                  ★
                </span>
              ))}
            </div>

            {/* Testimonial Text */}
            <p
              className="
                text-[#6A6A6A] italic
                text-xs sm:text-base
                leading-relaxed
                mb-6
                line-clamp-6 sm:line-clamp-none
              "
            >
              “{testimonialData[index].detail}”
            </p>

            {/* Name */}
            <div className="mt-auto">
              <div className="font-medium text-sm sm:text-base text-[#1F1F1F]">
                {testimonialData[index].name}
              </div>
              <div className="text-[#C6A75E] text-xs sm:text-sm">
                {testimonialData[index].place}
              </div>
            </div>

          </div>
        );
      })}

      {/* NEXT */}
      <button
        onClick={() =>
          setActiveTestimonial(
            (prev) => (prev + 1) % testimonialData.length
          )
        }
        className="absolute right-[-56px] sm:right-[-72px] top-1/2 -translate-y-1/2 z-20
                   w-12 h-12 sm:w-14 sm:h-14 rounded-full
                   bg-white/40 backdrop-blur-md
                   flex items-center justify-center
                   hover:bg-white/60 transition"
      >
        <span className="text-[#C6A75E] text-xl sm:text-2xl">›</span>
      </button>

    </div>
  </div>
</section>


     {/* CTA */}
<section className="py-16 sm:py-24 bg-[#C6A75E] text-center px-4">
  <h2
    className="text-3xl sm:text-5xl font-light text-white mb-4 sm:mb-6"
    style={{ fontFamily: 'Cormorant, serif' }}
  >
    Let’s Create Magic Together
  </h2>

  <p className="text-base sm:text-xl text-white/90 mb-6 sm:mb-8">
    Ready to plan your dream event?
  </p>

  <Link to="/contact" className="inline-flex justify-center w-full sm:w-auto">
    <Button
      className="
        bg-white text-[#1F1F1F]
        px-6 sm:px-10
        py-4 sm:py-6
        text-base sm:text-xl
        rounded-xl
        flex items-center justify-center gap-2
        w-full sm:w-auto
        max-w-sm
        hover:bg-[#FAF7F2]
      "
    >
      Contact Us
      <ArrowRight className="w-5 h-5" />
    </Button>
  </Link>
</section>

    </div>
  );
};

export default NewHome;
