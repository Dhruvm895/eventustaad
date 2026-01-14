import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { ArrowRight } from 'lucide-react';
import WeddingTipsBoard from '../components/WeddingTipsBoard';
import WeddingMustHavesTrail from '../components/WeddingMustHavesTrail';
import VenueTipsBook from '../components/VenueTipsBook';


const Events = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(/event.jpeg)",
            filter: 'brightness(0.6)'
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl md:text-7xl font-light text-white mb-6" style={{ fontFamily: 'Cormorant, serif' }}>
            Events
          </h1>
          <div className="w-24 h-[1px] bg-[#C6A75E] mx-auto mt-6" />
        </div>
      </section>

      {/* Weddings Section */}
      <section id="weddings" className="py-24 bg-[#FAF7F2] scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-light text-[#1F1F1F] mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
              Luxury Weddings
            </h2>
            <div className="w-24 h-[1px] bg-[#C6A75E] mx-auto mt-6" />
            <p className="text-xl text-[#1F1F1F]/70 mt-8 max-w-3xl mx-auto">
            Bespoke, big-fat Indian weddings designed with scale, soul, and timeless elegance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              '/chas.webp',
              '/wedding2.jpeg',
              '/wedding3.jpeg',
              '/wedevent.jpeg',
              '/wedding5.jpeg',
              '/wed6.jpeg'
            ].map((img, index) => (
              <div key={index} className="image-zoom-container rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={img}
                  alt={`Wedding ${index + 1}`}
                  className="w-full h-80 object-cover"
                />
              </div>
            ))}
          </div>

          <div className="text-center">
  <Link to="/contact">
    <Button
      className="
        bg-[#C6A75E] hover:bg-[#A88849]
        text-white
        px-4 py-2
        sm:px-8 sm:py-4
        text-sm sm:text-lg
        rounded-lg
        inline-flex items-center justify-center gap-2
        whitespace-nowrap
      "
    >
      <span>Plan Your Wedding</span>
      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
    </Button>
  </Link>
</div>

        </div>
      </section>
<section className="bg-[#FAF7F2] pt-20 pb-24 border-t border-[#E5DED3]">
  <div className="max-w-7xl mx-auto px-6">

    {/* MAIN HEADING */}
    <h2 className="text-4xl md:text-5xl mb-12 text-center"

      style={{ fontFamily: 'TheSeasons, serif' }}
    >
      Tips & Tricks
    </h2>

    {/* EQUAL GRID */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-stretch">

      {/* COLUMN 1 */}
      <div className="flex justify-center">
        <VenueTipsBook/>
      </div>
          {/* COLUMN 3 */}
      <div className="flex justify-center">
        <WeddingTipsBoard />
      </div>

      {/* COLUMN 2 */}
      <div className="flex justify-center">
        <WeddingMustHavesTrail />
      </div>

  

    </div>
  </div>
</section>


      {/* Corporate Events Section */}
      <section id="corporate" className="py-24 bg-[#EFE9DF] scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-light text-[#1F1F1F] mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
              Corporate Experiences
            </h2>
            <div className="w-24 h-[1px] bg-[#C6A75E] mx-auto mt-6" />
            <p className="text-xl text-[#1F1F1F]/70 mt-8 max-w-3xl mx-auto">
              High-impact conferences, launches, offsites, and brand experiences executed with precision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              '/corporate1.jpeg',
              '/cor2.jpeg',
              '/corporate2.jpeg',
              '/corporate3.webp'
            ].map((img, index) => (
              <div key={index} className="image-zoom-container rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={img}
                  alt={`Corporate ${index + 1}`}
                  className="w-full h-96 object-cover"
                />
              </div>
            ))}
          </div>

          <div className="text-center">
  <Link to="/contact">
    <Button
      className="
        bg-[#C6A75E] hover:bg-[#A88849]
        text-white
        px-4 py-2
        sm:px-8 sm:py-4
        text-sm sm:text-lg
        rounded-lg
        inline-flex items-center justify-center gap-2
        whitespace-nowrap
      "
    >
      <span>Plan Corporate Event</span>
      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
    </Button>
  </Link>
</div>

        </div>
      </section>

      {/* Social Events Section */}
      <section id="social" className="py-24 bg-[#FAF7F2] scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-light text-[#1F1F1F] mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
              Social Celebrations
            </h2>
            <div className="w-24 h-[1px] bg-[#C6A75E] mx-auto mt-6" />
            <p className="text-xl text-[#1F1F1F]/70 mt-8 max-w-3xl mx-auto">
             Curated private events crafted with style and attention to detail.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[

              '/social2.jpeg',
              '/social1.jpeg',
              
              '/social3.jpeg'
            ].map((img, index) => (
              <div key={index} className="image-zoom-container rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={img}
                  alt={`Social ${index + 1}`}
                  className="w-full h-80 object-cover"
                />
              </div>
            ))}
          </div>

          <div className="text-center">
  <Link to="/contact">
    <Button
      className="
        bg-[#C6A75E] hover:bg-[#A88849]
        text-white
        px-4 py-2
        sm:px-8 sm:py-4
        text-sm sm:text-lg
        rounded-lg
        inline-flex items-center justify-center gap-2
        whitespace-nowrap
      "
    >
      <span>Plan Social Event</span>
      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
    </Button>
  </Link>
</div>

        </div>
      </section>
    </div>
  );
};

export default Events;
