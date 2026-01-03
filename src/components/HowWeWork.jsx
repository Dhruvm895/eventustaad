import React from 'react';
import { Calendar, Palette, Users, Sparkles, Music, Camera } from 'lucide-react';

const HowWeWork = () => {
  const steps = [
    { icon: Calendar, color: 'from-purple-500 to-purple-600' },
    { icon: Palette, color: 'from-pink-500 to-pink-600' },
    { icon: Users, color: 'from-purple-400 to-pink-500' },
    { icon: Sparkles, color: 'from-purple-600 to-pink-600' },
    { icon: Music, color: 'from-pink-400 to-purple-500' },
    { icon: Camera, color: 'from-purple-500 to-pink-400' }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-purple-50 via-white to-pink-50 overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-200 rounded-full blur-3xl opacity-20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-4">
            How We Work
          </h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <React.Fragment key={index}>
                <div 
                  className="relative group"
                  style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both` }}
                >
                  <div className={`w-28 h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-all duration-500 group-hover:rotate-12`}>
                    <IconComponent className="text-white" size={48} />
                  </div>
                  <div className="absolute inset-0 bg-white/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block w-12 h-1 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full" />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default HowWeWork;