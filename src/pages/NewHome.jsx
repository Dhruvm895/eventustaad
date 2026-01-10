import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Briefcase, PartyPopper } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import HeroCarousel from '../components/HeroCarousel';
import LargeImageSections from '../components/LargeImageSections';
import RotatingClientLogos from '../components/RotatingClientLogos';
import EventsCreatedSection from '../components/EventsCreatedSection';
import { Star, StarHalf } from 'lucide-react';


const NewHome = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonialData = [
    {
      name: "Dharmendra Ranka",
      place: "Wedding Event",
      rating: 5,
      summary: "Flawless execution with complete peace of mind",
      detail:
        "The entire wedding was planned meticulously and executed professionally within budget. The team was always available and extremely cooperative.",
      
    },
    {
      name: "Biyani Family(Biyani Packaging Pvt Ltd.)",
      place: "Wedding Planning",
      rating: 5,
      summary: "Stress-free wedding managed perfectly end-to-end",
      detail:
        "From décor to timelines, every function ran smoothly and on time. Event Ustaad truly added value and delivered beyond expectations.",
    
    },
    {
      name: "Prachi Mantri",
      place: "Wedding Management",
      rating: 5,
      summary: "Handled complex challenges with grace and resilience",
      detail:
        "Managing a 30+ member team across borders in days was impressive. Their patience, kindness, and attention to detail stood out.",
      
    },
    {
      name: "Abhijit Kabra",
      place: "Wedding Event",
      rating: 5,
      summary: "Every detail executed like a family celebration",
      detail:
        "From décor to guest experience, everything was seamless. The team treated the event like their own and delivered a classy experience.",
  
    },
    {
      name: "Krishank Malik",
      place: "Eco-Friendly Wedding",
      rating: 5,
      summary: "Bold ideas executed with technical perfection",
      detail:
        "From CRM to guest coordination, everything was tech-driven and smooth. A rare team that executes ambitious ideas flawlessly.",
   
    },
    {
      name: "Sandeep Agarwal(Asian Paints)",
      place: "Corporate Event (400+ Guests)",
      rating: 5,
      summary: "Creative, reliable, and highly professional team",
      detail:
        "They managed planning to execution seamlessly. Lighting, branding, engagement activities — everything was top notch.",
     
    },
    {
      name: "Vachan Shetty(Godrej Tyson)",
      place: "Corporate Conference",
       rating: 5,
      summary: "Go-to team for seamless corporate events",
      detail:
        "They played a key anchoring role and ensured a smooth conference experience from start to finish.",
     
    },
    {
      name: "Nikita & Gaurav",
      place: "Wedding Event",
      rating: 4.5,
      detail: "Creative ideas combined with professional execution made our wedding truly special.\nThe team handled décor, coordination, and last-minute details with ease, ensuring a smooth and memorable celebration.",
    },
    {
      name: "Sakshi & Manish",
      place: "Wedding Event",
      rating: 5,
      detail: "Their thoughtful ideas and calm execution made our wedding truly special.\nEverything was well-planned, beautifully organised, and handled with great care.",
    }
    
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
        { title: 'Exquisite Destination & Venue Curation', slug: 'venue-search', img: '/venue.jpeg' },
        { title: 'Luxury Décor & Design', slug: 'event-design', img: '/decor.jpeg' },
        { title: 'Seamless Logistics & Guest Experience', slug: 'hospitality', img: '/hosp.jpeg' },
        { title: 'Bespoke Vendor & Entertainment Management', slug: 'artist-management', img: '/artist.webp' },
        { title: 'Ceremony & Ritual Expertise', slug: 'ceremony-planning', img: '/ritual.jpeg' },
        { title: 'Curated Culinary & Beverage Experiences', slug: 'food-and-beverages', img: '/f&b.jpeg' }
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
<section className="py-24 bg-[#EFE9DF] relative">
  <div className="site-container relative">

    <h2
      className="text-center text-3xl sm:text-4xl md:text-5xl font-light text-[#1F1F1F] mb-16"
      style={{ fontFamily: 'Cormorant, serif' }}
    >
    What Our Clients Say  
    </h2>

    {/* Wrapper */}
    <div className="relative flex justify-center items-stretch gap-6">

      {/* PREVIOUS */}
      <button
        onClick={() =>
          setActiveTestimonial(
            (prev) =>
              (prev - 1 + testimonialData.length) % testimonialData.length
          )
        }
        className="absolute left-[-72px]  top-1/2 -translate-y-1/2 z-20
                   w-14 h-14 rounded-full
                   bg-white/40 backdrop-blur-md
                   flex items-center justify-center
                   hover:bg-white/60 transition"
      >
        <span className="text-[#C6A75E] text-2xl">‹</span>
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
              w-full max-w-sm bg-white
              border border-[#E5DED3] rounded-2xl
              px-8 py-10 text-center
              transition-all duration-500
              ${isCenter
                ? 'shadow-2xl scale-100 opacity-100'
                : 'shadow-md scale-95 opacity-70'}
            `}
          >

           {(() => {
  const rating = testimonialData[index].rating;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex justify-center gap-1 mb-6">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} size={14} fill="#C6A75E" stroke="none" />
      ))}

      {hasHalfStar && (
        <StarHalf size={14} fill="#C6A75E" stroke="none" />
      )}

      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} size={14} className="text-[#E5DED3]" />
      ))}
    </div>
  );
})()}


            {/* ELABORATION ONLY */}
            <p className="text-[#6A6A6A] italic text-sm sm:text-base leading-relaxed mb-8">
              “{testimonialData[index].detail}”
            </p>

            {/* Name */}
            <div>
              <div className="font-medium text-[#1F1F1F]">
                {testimonialData[index].name}
              </div>
              <div className="text-[#C6A75E] text-sm">
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
        className="absolute right-[-72px]  top-1/2 -translate-y-1/2 z-20
                   w-14 h-14 rounded-full
                   bg-white/40 backdrop-blur-md
                   flex items-center justify-center
                   hover:bg-white/60 transition"
      >
        <span className="text-[#C6A75E] text-2xl">›</span>
      </button>

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
