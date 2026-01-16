import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Users, Award, Heart, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const useCountUp = (end, duration = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [end, duration]);

  return count;
};

const About = () => {

  const years = useCountUp(10);
  
  const destinations = useCountUp(63);
  const events = useCountUp(175);

  return (
    <div className="min-h-screen pt-20 bg-[#FAF7F2]">

      {/* Hero Section */}
      <section className="relative h-[36vh] md:h-[55vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/about1.jpeg)',
            backgroundPosition: 'center 40%',
            filter: 'brightness(0.65)'
          }}
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 text-center px-4 sm:px-6">
          <h1 className="text-6xl md:text-7xl font-light text-white mb-6" style={{ fontFamily: 'Cormorant, serif' }}>
            Our Story
          </h1>
          <div className="w-24 h-[1px] bg-[#C6A75E] mx-auto mb-6" />
          <p className="text-sm sm:text-base md:text-xl text-white/90 max-w-3xl mx-auto">
            From hostel roommates to business partners, creating magic since 2018
          </p>
        </div>
      </section>

      {/* Founders Story */}
      <section className="py-24 bg-[#FAF7F2]">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-[#C6A75E] uppercase tracking-wider text-sm font-medium">
              The Beginning
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-[#1F1F1F]">
              From Hostel Roommates<br />to Business Partners
            </h2>

            <p className="text-[#6A6A6A] leading-relaxed">
              We’re Anmol & Shrishti — two friends, two dreamers, and now business partners. From late-night hostel room conversations to building a company together, our journey has always been about passion, trust, and creating magic out of ordinary moments. With a background in finance and engineering, we combine practicality and creativity, making sure nothing is left to chance while keeping every celebration full of soul.
            </p>

            <p className="text-[#6A6A6A] leading-relaxed mt-6">
             Event Ustaad isn’t just a company for us — it’s a space where we bring our energy, our heart, and our curiosity to every wedding and event we touch. Our team is our extended family, and together, we love getting into the details, thinking ahead, and making sure your day feels effortless, personal, and unforgettable.
            </p>

            <p className="text-[#6A6A6A] leading-relaxed mt-6">
              We’ve had the privilege of planning 175+ weddings and corporate events across 63+ destinations in India, but numbers don’t tell the story — what matters most to us is the connection, the smiles, and the feeling that every event is as unique as the people we celebrate.
            </p>

            <p className="text-[#6A6A6A] leading-relaxed mt-6">
              At Event Ustaad, we don’t just plan events —
              we walk with you, guide you, and celebrate with you.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <LazyLoadImage
              src="about.jpeg"
              alt="Celebration"
              effect="blur"
              className="rounded-lg shadow-lg object-cover h-64 w-full"
            />
            <LazyLoadImage
              src="duo.jpg"
              alt="Couple"
              effect="blur"
              className="rounded-lg shadow-lg object-cover h-64 mt-8 w-full"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8 max-w-6xl">


          <Card className="border border-[#E5DED3] hover:shadow-lg transition">
            <CardContent className="p-8 text-center">
              <Award className="mx-auto text-[#C6A75E] mb-4" size={30} />
              <div className="text-4xl font-light text-[#C6A75E] mb-2">{years}+</div>
              <div className="text-[#6A6A6A] text-sm">Years Experience</div>
            </CardContent>
          </Card>

          <Card className="border border-[#E5DED3] hover:shadow-lg transition">
            <CardContent className="p-8 text-center">
              <MapPin className="mx-auto text-[#C6A75E] mb-4" size={30} />
              <div className="text-4xl font-light text-[#C6A75E] mb-2">{destinations}+</div>
              <div className="text-[#6A6A6A] text-sm">Destinations</div>
            </CardContent>
          </Card>

          <Card className="border border-[#E5DED3] hover:shadow-lg transition">
            <CardContent className="p-8 text-center">
              <Users className="mx-auto text-[#C6A75E] mb-4" size={30} />
              <div className="text-4xl font-light text-[#C6A75E] mb-2">{events}+</div>
              <div className="text-[#6A6A6A] text-sm">Events Executed</div>
            </CardContent>
          </Card>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#C6A75E] text-center">
        <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
          Your Celebration Deserves Nothing Ordinary
        </h2>
        <p className="text-white/90 mb-8 max-w-2xl mx-auto">
          Whether you’re planning a once-in-a-lifetime wedding or a large-scale corporate event, we’re here to create an experience worth remembering.
        </p>

        <Link to="/contact">
          <Button className="bg-white text-[#1F1F1F] hover:bg-[#FAF7F2] px-8 py-6 text-lg rounded-md shadow-md inline-flex items-center gap-2">
            Get In Touch
            <ArrowRight size={20} />
          </Button>
        </Link>
      </section>

    </div>
  );
};

export default About;
