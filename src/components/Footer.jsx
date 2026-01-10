import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Instagram, Facebook, Linkedin } from 'lucide-react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Footer = () => {
  return (
    <footer className="bg-[#FAF7F2] border-t border-[#E5DED3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 py-12 lg:py-16">

        {/* Main Grid */}
        <div className="
          grid grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-[1.2fr_0.8fr_1.2fr_0.8fr]
          gap-12
        ">

          {/* Brand */}
          <div className="flex flex-col gap-4 items-center lg:items-start text-center lg:text-left">
            <LazyLoadImage
              src="https://customer-assets.emergentagent.com/job_eventelegance-3/artifacts/ltcg4g2q_loggogo.svg"
              alt="Event Ustaad"
              effect="blur"
              className="h-14 sm:h-20 md:h-28 w-auto"
            />

            <p className="text-[#4A4A4A] text-sm leading-relaxed max-w-sm">
              Event Ustaad is a luxury wedding and event planning studio, crafting grand celebrations,
              immersive experiences, and flawlessly executed events across India. With over 10 years
              of expertise, we have successfully curated 175+ extraordinary events, traveling across
              the country to bring each celebration to life with unmatched elegance, precision, and creativity.
            </p>

            <div className="flex gap-4 mt-2">
              <a href="https://www.instagram.com/eventustaad/" target="_blank" rel="noopener noreferrer" className="text-[#6A6A6A] hover:text-[#C6A75E]">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/EventUstaad/" target="_blank" rel="noopener noreferrer" className="text-[#6A6A6A] hover:text-[#C6A75E]">
                <Facebook size={20} />
              </a>
              <a href="https://www.linkedin.com/in/event-ustaad-b30378187/" target="_blank" rel="noopener noreferrer" className="text-[#6A6A6A] hover:text-[#C6A75E]">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center lg:text-left">
            <h3 className="text-[#1F1F1F] font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                ['About Us', '/about'],
                ['Our Work', '/OurWork'],
                ['Events', '/events'],
                ['Services', '/Services'],
              ].map(([label, path]) => (
                <li key={label}>
                  <Link to={path} className="text-[#6A6A6A] hover:text-[#C6A75E]">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="text-center lg:text-left">
            <h3 className="text-[#1F1F1F] font-semibold mb-4">
              Services
            </h3>
            <ul className="space-y-3 text-sm text-[#6A6A6A]">
              <li>Exquisite Destination & Venue Curation</li>
              <li>Elite Entertainment & Artist Management</li>
              <li>Bespoke Vendor Coordination</li>
              <li>Seamless Logistics, Hospitality & Guest Experience</li>
              <li>Luxury Décor & Design</li>
              <li>Curated Food & Beverage Experiences</li>
              <li>Gifting Solutions</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center lg:text-left">
            <h3 className="text-[#1F1F1F] font-semibold mb-4">
              Get In Touch
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:eventustaad@gmail.com" className="flex justify-center lg:justify-start items-center gap-2 text-[#6A6A6A] hover:text-[#C6A75E]">
                  <Mail size={14} />
                      eventustaad@gmail.com
                </a>
              </li>
              <li>
                <a href="mailto:contact@eventustaad.com" className="flex justify-center lg:justify-start items-center gap-2 text-[#6A6A6A] hover:text-[#C6A75E]">
                  <Mail size={14} />
                      contact@eventustaad.com
                </a>
              </li>
              <li>
                <a href="tel:+919833310150" className="flex justify-center lg:justify-start items-center gap-2 text-[#6A6A6A] hover:text-[#C6A75E]">
                  <Phone size={16} />
                  +91 9833310150
                </a>
              </li>
              <li>
                <a href="tel:+919920581507" className="flex justify-center lg:justify-start items-center gap-2 text-[#6A6A6A] hover:text-[#C6A75E]">
                  <Phone size={16} />
                  +91 9920581507
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-[#E5DED3] flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p className="text-sm text-[#6A6A6A]">
            © 2018 Event Ustaad. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy" className="text-[#6A6A6A] hover:text-[#C6A75E]">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-[#6A6A6A] hover:text-[#C6A75E]">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
