import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#FAF7F2] border-t border-[#E5DED3]">
      <div className="container mx-auto px-6 lg:px-8 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">

          {/* Brand */}
          <div className="space-y-5">
            <img
              src="https://customer-assets.emergentagent.com/job_eventelegance-3/artifacts/ltcg4g2q_loggogo.svg"
              alt="Event Ustaad"
              className="h-16 w-auto"
            />
            <p className="text-[#4A4A4A] text-sm leading-relaxed max-w-xs">
              Creating extraordinary experiences since 2018. Specializing in luxury weddings and corporate events across India.
            </p>
            <div className="flex gap-4">
              <a className="text-[#6A6A6A] hover:text-[#C6A75E] transition">
                <Instagram size={20} />
              </a>
              <a className="text-[#6A6A6A] hover:text-[#C6A75E] transition">
                <Facebook size={20} />
              </a>
              <a className="text-[#6A6A6A] hover:text-[#C6A75E] transition">
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
                ['Our Work', '/our-work']
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
              <li className="flex items-center gap-2 text-[#6A6A6A]">
                <Mail size={16} /> eventustaad@gmail.com
              </li>
              <li className="flex items-center gap-2 text-[#6A6A6A]">
                <Mail size={16} /> contact@eventustaad.com
              </li>
              <li className="flex items-center gap-2 text-[#6A6A6A]">
                <Phone size={16} /> +91 98333 10150
              </li>
              <li className="flex items-center gap-2 text-[#6A6A6A]">
                <Phone size={16} /> +91 99205 81507
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-14 pt-6 border-t border-[#E5DED3] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#6A6A6A]">
            © {new Date().getFullYear()} Event Ustaad. All rights reserved.
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
