import React from 'react';
import { Star } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { testimonials } from '../mockData';

const Testimonials = () => {
  return (
    <div className="min-h-screen pt-20 bg-[#FAF7F2]">

      {/* Hero Section */}
      <section className="relative h-[45vh] md:h-[55vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/15582310/pexels-photo-15582310.jpeg)',
            backgroundPosition: 'center 45%',
            filter: 'brightness(0.65)'
          }}
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-6xl font-light text-white mb-4">
            Client Stories
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Hear what our clients have to say about their experience
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24 bg-[#FAF7F2]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="border border-[#E5DED3] hover:shadow-lg transition"
              >
                <CardContent className="p-8">
                  {/* Rating */}
                  <div className="flex mb-5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className="fill-[#C6A75E] text-[#C6A75E]"
                      />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-[#6A6A6A] mb-6 leading-relaxed italic">
                    “{testimonial.text}”
                  </p>

                  {/* Client Info */}
                  <div className="flex items-center pt-6 border-t border-[#E5DED3]">
                    {testimonial.image ? (
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover mr-4"
                      />
                    ) : (
                      <div className="w-14 h-14 bg-[#C6A75E] rounded-full flex items-center justify-center mr-4 text-white text-lg">
                        {testimonial.name.charAt(0)}
                      </div>
                    )}
                    <div>
                      <div className="font-medium text-[#1F1F1F]">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-[#C6A75E]">
                        {testimonial.event}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-[#1F1F1F]">
              Our Track Record
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
            {[
              { value: '65+', label: 'Happy Couples' },
              { value: '50+', label: 'Destinations' },
              { value: '100%', label: 'Client Satisfaction' },
              { value: '7+', label: 'Years Experience' }
            ].map((item, i) => (
              <div key={i}>
                <div className="text-5xl font-light text-[#C6A75E] mb-2">
                  {item.value}
                </div>
                <div className="text-[#6A6A6A]">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Categories */}
      <section className="py-24 bg-[#FAF7F2]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">

            {/* Weddings */}
            <div>
              <h3 className="text-3xl font-light text-[#1F1F1F] mb-6">
                Wedding Celebrations
              </h3>
              <p className="text-[#6A6A6A] leading-relaxed mb-6">
                From royal palace weddings in Rajasthan to intimate beach ceremonies in Goa, we’ve helped couples celebrate in style.
              </p>
              <div className="space-y-3">
                {testimonials
                  .filter(t => t.event.toLowerCase().includes('wedding'))
                  .slice(0, 3)
                  .map(t => (
                    <div key={t.id} className="flex items-start gap-2">
                      <Star size={16} className="fill-[#C6A75E] text-[#C6A75E] mt-1" />
                      <span className="text-sm text-[#6A6A6A]">
                        {t.name} – {t.event}
                      </span>
                    </div>
                  ))}
              </div>
            </div>

            {/* Corporate */}
            <div>
              <h3 className="text-3xl font-light text-[#1F1F1F] mb-6">
                Corporate Events
              </h3>
              <p className="text-[#6A6A6A] leading-relaxed mb-6">
                Trusted by leading brands for professional events that inspire and engage teams.
              </p>
              <div className="space-y-3">
                {testimonials
                  .filter(t =>
                    t.event.toLowerCase().includes('corporate') ||
                    t.event.toLowerCase().includes('team')
                  )
                  .map(t => (
                    <div key={t.id} className="flex items-start gap-2">
                      <Star size={16} className="fill-[#C6A75E] text-[#C6A75E] mt-1" />
                      <span className="text-sm text-[#6A6A6A]">
                        {t.name} – {t.event}
                      </span>
                    </div>
                  ))}
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Testimonials;
