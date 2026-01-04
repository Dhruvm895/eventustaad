import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Users, Award, Heart, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen pt-20 bg-[#FAF7F2]">

      {/* Hero Section */}
      <section className="relative h-[45vh] md:h-[55vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/about.png)',
            backgroundPosition: 'center 40%',
            filter: 'brightness(0.65)'
          }}
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-6xl font-light text-white mb-4">
            Our Story
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
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
              Event Ustaad was born from a friendship that began in college. Anmol and Shrishti discovered a shared passion for creating unforgettable experiences.
            </p>
            <p className="text-[#6A6A6A] leading-relaxed">
              What started in 2018 as helping friends soon evolved into a full-scale luxury event company trusted across India.
            </p>
            <p className="text-[#6A6A6A] leading-relaxed">
              Every celebration is crafted with elegance, precision, and heart — from intimate weddings to grand corporate gatherings.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.pexels.com/photos/15841148/pexels-photo-15841148.jpeg"
              className="rounded-lg shadow-lg object-cover h-64"
              alt="Celebration"
            />
            <img
              src="https://images.pexels.com/photos/33552016/pexels-photo-33552016.jpeg"
              className="rounded-lg shadow-lg object-cover h-64 mt-8"
              alt="Couple"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8">
          {[{
            icon: Award,
            value: '10+',
            label: 'Years Experience'
          },{
            icon: Heart,
            value: '65+',
            label: 'Wedding Couples'
          },{
            icon: MapPin,
            value: '50+',
            label: 'Destinations'
          },{
            icon: Users,
            value: '100+',
            label: 'Events Executed'
          }].map((item, i) => (
            <Card key={i} className="border border-[#E5DED3] hover:shadow-lg transition">
              <CardContent className="p-8 text-center">
                <item.icon className="mx-auto text-[#C6A75E] mb-4" size={30} />
                <div className="text-4xl font-light text-[#C6A75E] mb-2">{item.value}</div>
                <div className="text-[#6A6A6A] text-sm">{item.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-[#FAF7F2]">
        <div className="max-w-4xl mx-auto text-center px-6 space-y-6">
          <h2 className="text-4xl md:text-5xl font-light text-[#1F1F1F]">
            Our Philosophy
          </h2>
          <p className="text-[#6A6A6A] text-lg leading-relaxed">
            Every event tells a story. Our mission is to create elegant, meaningful, and flawlessly executed experiences.
          </p>
          <p className="text-[#6A6A6A] text-lg leading-relaxed">
            We work closely with our clients to transform ideas into moments that last a lifetime.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#C6A75E] text-center">
        <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
          Ready to Start Your Journey?
        </h2>
        <p className="text-white/90 mb-8 max-w-2xl mx-auto">
          Let’s create something extraordinary together
        </p>
        <Link to="/contact">
          <Button className="bg-white text-[#1F1F1F] hover:bg-[#FAF7F2] px-8 py-6 text-lg rounded-md shadow-md">
            Get In Touch
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </Link>
      </section>

    </div>
  );
};

export default About;
