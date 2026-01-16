import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, Instagram, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#FAF7F2] border-t border-[#E5DED3]">
      <div className="max-w-7xl mx-auto px-6 py-14">

        {/* ===== TOP SECTION ===== */}
        <div
          className="
            grid grid-cols-1
            gap-14
            md:grid-cols-2
            lg:grid-cols-4
            items-start
          "
        >
          {/* BRAND */}
          <div className="space-y-5">
            

            <p className="text-sm text-[#4A4A4A] leading-relaxed max-w-xs">
            <strong> Event Ustaad</strong>  is a luxury wedding & event planning studio crafting
              elegant, large-scale celebrations across India with precision,
              creativity, and soul.
            </p>



           <img
            src="https://customer-assets.emergentagent.com/job_eventelegance-3/artifacts/ltcg4g2q_loggogo.svg"
            alt="Event Ustaad"
            width="112"
            height="40"
            className="w-28 h-auto"
            style={{ imageRendering: "crisp-edges" }}
          />


            <div className="flex gap-4 pt-2">
              <a href="https://www.instagram.com/eventustaad/" target="_blank" rel="noreferrer"
                className="text-[#6A6A6A] hover:text-[#C6A75E]">
                <Instagram size={18} />
              </a>
              <a href="https://www.facebook.com/EventUstaad/" target="_blank" rel="noreferrer"
                className="text-[#6A6A6A] hover:text-[#C6A75E]">
                <Facebook size={18} />
              </a>
              <a href="https://www.linkedin.com/in/event-ustaad-b30378187/" target="_blank" rel="noreferrer"
                className="text-[#6A6A6A] hover:text-[#C6A75E]">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-wide text-[#1F1F1F]">
              QUICK LINKS
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/OurWork" className="footer-link">Our Work</Link></li>
              <li><Link to="/events" className="footer-link">Events</Link></li>
              <li><Link to="/Services" className="footer-link">Services</Link></li>
            </ul>
          </div>

          {/* SERVICES */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-wide text-[#1F1F1F]">
              SERVICES
            </h4>
            <ul className="space-y-2 text-sm text-[#6A6A6A]">
              <li>Destination & Venue Curation</li>
              <li>Entertainment & Artist Management</li>
              <li>Vendor Coordination</li>
              <li>Logistics & Guest Experience</li>
              <li>Luxury Décor & Design</li>
              <li>Luxury Gifting & Personalization</li>
              <li>Food & Beverage Experiences</li>

            </ul>
          </div>

          {/* CONTACT */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-wide text-[#1F1F1F]">
              GET IN TOUCH
            </h4>
            <ul className="space-y-3 text-sm text-[#6A6A6A]">
              <li className="flex items-center gap-2">
                <Mail size={14} /> eventustaad@gmail.com
              </li>
            
              <li className="flex items-center gap-2">
                <Phone size={14} /> +91 98333 10150
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} /> +91 99205 81507
              </li>
            </ul>
          </div>
        </div>

        {/* ===== BOTTOM BAR ===== */}
        <div
          className="
            mt-14 pt-6 border-t border-[#E5DED3]
            flex flex-col sm:flex-row
            items-center justify-between
            gap-4
            text-center sm:text-left
          "
        >
          <p className="text-xs text-[#6A6A6A]">
            © 2018 Event Ustaad. All rights reserved.
          </p>

          <div className="flex gap-6 text-xs">
            <Link to="/privacy" className="footer-link">Privacy Policy</Link>
            <Link to="/terms" className="footer-link">Terms of Service</Link>
          </div>
        </div>
      </div>

      {/* shared footer link style */}
      <style>{`
        .footer-link {
          color: #6A6A6A;
          transition: color 0.2s ease;
        }
        .footer-link:hover {
          color: #C6A75E;
        }
      `}</style>
    </footer>
  );
};

export default Footer;