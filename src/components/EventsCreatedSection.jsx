import React, { useState, useEffect, useRef } from 'react';

const AnimatedNumber = ({ target, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.3 }
    );
    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let start;
    const step = (t) => {
      if (!start) start = t;
      const progress = Math.min((t - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isVisible, target, duration]);

  return <span ref={elementRef}>{count}{suffix}</span>;
};

const EventsCreatedSection = () => {
  const stats = [
    { number: 175, suffix: '+', label: 'Events' },
    { number: 10, suffix: '+', label: 'Combined Years Experience' },
    { number: 63, suffix: '+', label: 'Destinations' }
  ];

  return (
    <section className="py-16 bg-[#C6A75E] relative overflow-hidden">

      {/* Soft background glow */}
      <div className="absolute inset-0 opacity-5">
        <div className="hidden sm:block absolute top-0 left-0 w-56 h-56 bg-white rounded-full blur-3xl animate-pulse" />
        <div className="hidden sm:block absolute bottom-0 right-0 w-56 h-56 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2
            className="text-3xl md:text-4xl font-light text-white"
            style={{ fontFamily: 'Cormorant, serif' }}
          >
            A  Decade of Excellence 
          </h2>
          <div className="w-20 h-[1px] bg-white/40 mx-auto mt-4" />
        </div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-5xl mx-auto mt-16">
  {stats.map((stat, index) => (
    <div
      key={index}
      className="flex flex-col items-center justify-center"
    >
      <div className="text-5xl md:text-6xl font-light text-white mb-2">
        <AnimatedNumber target={stat.number} suffix={stat.suffix} />
      </div>
      <div className="text-base text-white/85 font-light">
        {stat.label}
      </div>
    </div>
  ))}
</div>


      </div>
    </section>
  );
};

export default EventsCreatedSection;
