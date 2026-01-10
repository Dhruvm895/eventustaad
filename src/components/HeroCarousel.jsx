import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
  {
    type: 'video',
    src: '/homevideo.mp4',
    
    title: 'This is where events stop being stressful',
    subtitle: 'From the first call to the final moment, we are with you throughout.'
  },
  {
    type: 'image',
    image: '/home2.jpg',
    title: 'This is where events stop being stressful',
    subtitle: 'From the first call to the final moment, we are with you throughout.'
  },
  {
    type: 'image',
    image: '/home3.jpeg',
    title: 'This is where events stop being stressful',
    subtitle: 'From the first call to the final moment, we are with you throughout.'
  },
  {
    type: 'image',
    image: '/home4.jpeg',
    title: 'This is where events stop being stressful',
    subtitle: 'From the first call to the final moment, we are with you throughout.'
  }
];


  // ✅ CORRECT PLACE
  const slide = slides[currentSlide];

 useEffect(() => {
  if (slides[currentSlide].type === 'video') return;

  const timer = setInterval(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, 5000);

  return () => clearInterval(timer);
}, [currentSlide]);

  const goToPrevious = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const goToNext = () =>
    setCurrentSlide((prev) => (prev + 1) % slides.length);

  return (
    <div className="relative h-[70vh] md:h-screen w-full overflow-hidden">

      {/* ACTIVE SLIDE */}
      <div
        key={currentSlide}
        className="absolute inset-0 transition-all duration-1000 ease-in-out"
      >
       {/* Background */}
{slide.type === 'video' ? (
  <video
    className="absolute inset-0 w-full h-full object-cover"
    autoPlay
    muted
    playsInline
    preload="auto"
    poster={slide.poster}
    onEnded={() =>
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }
  >
    <source src={slide.src} type="video/mp4" />
  </video>
) : (
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: `url(${slide.image})` }}
  />
)}


        {/* Content */}
        <div className="absolute inset-0 flex items-start justify-start">
          <div className="mt-36 md:mt-48 ml-10 md:ml-24 max-w-xl text-left animate-fade-in">

            <h1
              className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl
                font-light text-white mb-2 animate-slide-up"
              style={{ fontFamily: 'TheSeasons, serif' }}
            >
              {slide.title}
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-white/90 mb-6 animate-slide-up delay-200">
              {slide.subtitle}
            </p>

           <Link to="/contact">
  <button
    className="
      !px-3 !py-1.5
      sm:!px-5 sm:!py-2.5
      bg-[#C6A75E]
      text-white
      !text-xs sm:!text-sm
      font-medium
      rounded-md
      shadow-md
      hover:bg-[#A88849]
      hover:shadow-lg
      transition-all duration-300
      animate-slide-up delay-400
    "
  >
    Plan Your Event
  </button>
</Link>



</div>
</div>
</div>

{/* Navigation Arrows */}
<button
  onClick={goToPrevious}
  className="
    absolute
    left-2 md:left-8
    top-[68%] md:top-1/2
    -translate-y-1/2
    z-20
    !p-1.5 md:p-3
    rounded-full
    bg-white/10 backdrop-blur-md
    hover:bg-white/20
    transition
  "
>
  <ChevronLeft className="text-white !w-5 !h-5 md:w-6 md:h-6" />
</button>

<button
  onClick={goToNext}
  className="
    absolute
    right-2 md:right-8
    top-[68%] md:top-1/2
    -translate-y-1/2
    z-20
    !p-1.5 md:p-3
    rounded-full
    bg-white/10 backdrop-blur-md
    hover:bg-white/20
    transition
  "
>
  <ChevronRight className="text-white !w-5 !h-5 md:w-6 md:h-6" />
</button>



      {/* Dots */}
      <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-500 rounded-full ${
              index === currentSlide
                ? 'w-12 h-3 bg-white'
                : 'w-3 h-3 bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

    </div>
  );
};

export default HeroCarousel;
