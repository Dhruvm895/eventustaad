import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Instagram, Facebook, Linkedin } from 'lucide-react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Footer = () => {
  return (
    <footer className="bg-[#FAF7F2] border-t border-[#E5DED3]">
      <div className="site-container py-12 lg:py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">

          {/* Brand */}
          <div className="space-y-5">
            <LazyLoadImage
              src="https://customer-assets.emergentagent.com/job_eventelegance-3/artifacts/ltcg4g2q_loggogo.svg"
              alt="Event Ustaad"
              effect="blur"
              className="h-22 md:h-36 w-auto"
            />

            <p className="text-[#4A4A4A] text-sm leading-relaxed max-w-xs">
              Creating extraordinary experiences since 2018. Specializing in luxury weddings and corporate events across India.
            </p>

            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/eventustaad/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6A6A6A] hover:text-[#C6A75E] transition"
                aria-label="Event Ustaad Instagram"
              >
                <Instagram size={20} />
              </a>

              <a
                href="https://www.facebook.com/EventUstaad/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6A6A6A] hover:text-[#C6A75E] transition"
                aria-label="Event Ustaad Facebook"
              >
                <Facebook size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/event-ustaad-b30378187/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6A6A6A] hover:text-[#C6A75E] transition"
                aria-label="Event Ustaad LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#1F1F1F] font-semibold mb-5">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              {[
                ['About Us', '/about'],
                ['Wedding Services', '/services'],
                ['Corporate Events', '/events#corporate'],
                ['Our Work', '/our-work'],
              ].map(([label, path]) => (
                <li key={label}>
                  <Link
                    to={path}
                    className="text-[#6A6A6A] hover:text-[#C6A75E] transition"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[#1F1F1F] font-semibold mb-5">Services</h3>
            <ul className="space-y-3 text-sm text-[#6A6A6A]">
              <li>Destination Weddings</li>
              <li>Corporate Events</li>
              <li>Décor Management</li>
              <li>Hospitality & Logistics</li>
              <li>Artist Management</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#1F1F1F] font-semibold mb-5">Get In Touch</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=eventustaad@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#6A6A6A] hover:text-[#C6A75E] transition"
                >
                  <Mail size={16} />
                  eventustaad@gmail.com
                </a>
              </li>

              <li>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@eventustaad.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#6A6A6A] hover:text-[#C6A75E] transition"
                >
                  <Mail size={16} />
                  contact@eventustaad.com
                </a>
              </li>

              <li>
                <a
                  href="tel:+919833310150"
                  className="flex items-center gap-2 text-[#6A6A6A] hover:text-[#C6A75E] transition"
                >
                  <Phone size={16} />
                  +91 98333 10150
                </a>
              </li>

              <li>
                <a
                  href="tel:+919920581507"
                  className="flex items-center gap-2 text-[#6A6A6A] hover:text-[#C6A75E] transition"
                >
                  <Phone size={16} />
                  +91 99205 81507
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-[#E5DED3] flex flex-col md:flex-row justify-between items-center gap-4">
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
