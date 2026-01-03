import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Star } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader } from '../components/ui/card';
import { packages } from '../mockData';

const Packages = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/169211/pexels-photo-169211.jpeg)',
            filter: 'brightness(0.6)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/40 to-purple-900/60" />
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6">
            Wedding Packages
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
            Choose the perfect package for your celebration
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-24 bg-gradient-to-br from-purple-50 via-white to-lavender-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {packages.map((pkg) => (
              <Card 
                key={pkg.id} 
                className={`relative overflow-hidden ${
                  pkg.popular 
                    ? 'border-2 border-purple-400 shadow-2xl scale-105' 
                    : 'border-purple-100 hover-lift'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-400 to-purple-300 text-white px-4 py-1 text-sm font-medium flex items-center gap-1">
                    <Star size={14} className="fill-white" />
                    Most Popular
                  </div>
                )}
                
                <CardHeader className="text-center pt-12 pb-6">
                  <div className="mb-6">
                    <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center">
                      <span className="text-4xl">🌸</span>
                    </div>
                  </div>
                  <h3 className="text-3xl font-light text-gray-900 mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-lg text-purple-600 font-medium">
                    {pkg.subtitle}
                  </p>
                </CardHeader>

                <CardContent className="px-8 pb-8">
                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center mt-0.5">
                          <Check size={14} className="text-purple-600" />
                        </div>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to="/contact">
                    <Button 
                      className={`w-full py-6 text-lg ${
                        pkg.popular
                          ? 'bg-gradient-to-r from-purple-400 to-purple-300 hover:from-purple-500 hover:to-purple-400 text-white'
                          : 'bg-purple-50 text-purple-700 hover:bg-purple-100'
                      }`}
                    >
                      Contact Us
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Custom Package Note */}
          <div className="mt-16 text-center max-w-3xl mx-auto">
            <Card className="border-purple-200 bg-purple-50/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-light text-gray-900 mb-4">
                  Need Something Different?
                </h3>
                <p className="text-gray-600 mb-6">
                  Every wedding is unique. We offer fully customizable packages tailored to your specific needs, preferences, and budget. Let's create the perfect plan for your special day.
                </p>
                <Link to="/contact">
                  <Button className="bg-purple-400 hover:bg-purple-500 text-white px-8 py-3">
                    Request Custom Package
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
              What's Included
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive services across all packages
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              "Complete RSVP Management",
              "Venue Search & Coordination",
              "Full Vendor Management",
              "Décor Planning & Execution",
              "Hospitality Services",
              "Entertainment Coordination",
              "On-day Event Coordination",
              "Photography Coordination",
              "Post-wedding Support"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-purple-50/50 rounded-lg">
                <div className="flex-shrink-0 w-6 h-6 bg-purple-400 rounded-full flex items-center justify-center">
                  <Check size={14} className="text-white" />
                </div>
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Packages;
