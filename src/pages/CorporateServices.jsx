import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { corporateServices } from '../mockData';

const CorporateServices = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg)',
            filter: 'brightness(0.6)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/40 to-purple-900/60" />
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6">
            Corporate Events
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
            Professional gatherings that inspire, engage, and deliver results
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <p className="text-xl text-gray-600 leading-relaxed">
              Corporate events are more than just gatherings—they're opportunities to inspire teams, strengthen brands, and create lasting impressions.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              With experience managing events for leading companies like Asian Paints, Cipla, Godrej Tyson, and Danone, we bring professionalism, creativity, and flawless execution to every corporate occasion.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gradient-to-br from-purple-50 via-lavender-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
              Our Corporate Services
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive event management for businesses of all sizes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {corporateServices.map((service) => (
              <Card key={service.id} className="hover-lift border-purple-100 hover:border-purple-300 transition-colors">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg flex items-center justify-center mb-6">
                    <div className="w-6 h-6 bg-purple-600 rounded" />
                  </div>
                  <h3 className="text-2xl font-light text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Spectrum */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
              Complete Service Spectrum
            </h2>
            <p className="text-lg text-gray-600">
              End-to-end solutions for seamless corporate events
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {[
              { title: "Venue Search", desc: "Finding the perfect location for your corporate needs" },
              { title: "Event Concepts & Production", desc: "Creative themes and professional staging" },
              { title: "Hospitality & Logistics", desc: "Guest management and seamless coordination" },
              { title: "Artist Management", desc: "Booking speakers, performers, and entertainment" },
              { title: "Corporate Gifting", desc: "Curated gifts that leave lasting impressions" },
              { title: "Technology Integration", desc: "AV setup, live streaming, and hybrid solutions" }
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-purple-50/50 rounded-lg hover:bg-purple-50 transition-colors">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-400 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-24 bg-gradient-to-br from-lavender-50 via-purple-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
              Events We've Delivered
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="image-zoom-container rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/35399260/pexels-photo-35399260.jpeg" 
                alt="Corporate conference" 
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="image-zoom-container rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg" 
                alt="Team meeting" 
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="image-zoom-container rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg" 
                alt="Business event" 
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="image-zoom-container rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg" 
                alt="Conference hall" 
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="image-zoom-container rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/3719037/pexels-photo-3719037.jpeg" 
                alt="Corporate gathering" 
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="image-zoom-container rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg" 
                alt="Professional meeting" 
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Clients */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
              Trusted by Industry Leaders
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {["Danone", "Novo Nordisk", "Alkem", "Asian Paints", "Cipla", "Godrej Tyson", "Lodha", "Fintoo"].map((client, index) => (
              <div 
                key={index}
                className="flex items-center justify-center p-6 bg-purple-50/50 rounded-lg hover:bg-purple-50 transition-colors"
              >
                <span className="text-xl font-light text-gray-700">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-purple-400 via-purple-300 to-lavender-300 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Ready to Elevate Your Corporate Event?
          </h2>
          <p className="text-xl text-purple-50 mb-8 max-w-2xl mx-auto">
            Let's create a professional gathering that inspires and delivers results
          </p>
          <Link to="/contact">
            <Button className="bg-white text-purple-700 hover:bg-purple-50 px-8 py-6 text-lg rounded-md shadow-lg hover-lift">
              Discuss Your Event
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CorporateServices;
