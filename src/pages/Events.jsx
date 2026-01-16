import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MapPin, Lightbulb, Hotel, Music, Gift } from "lucide-react";
import useReveal from "../hooks/useReveal";

const Services = () => {
  const [heroRef, heroVisible] = useReveal();
  const { slug } = useParams();

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const heroHeight = Math.max(50, 100 - scrollY / 6);

  useEffect(() => {
    if (!slug) return;
    const el = document.getElementById(slug);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [slug]);

  const services = [
    {
      slug: "venue-search",
      icon: MapPin,
      title: "Exquisite Destination & Venue Curation",
      features: [
        "Personalized recommendations for breathtaking destinations and iconic venues.",
        "Assistance with site visits, availability checks, and negotiations.",
        "Creating a setting that perfectly reflects your vision and event style.",
      ],
      image: "/venuein.jpeg",
    },
    {
      slug: "event-design",
      icon: Lightbulb,
      title: "Luxury Décor & Design",
      features: [
        "Bespoke theme and décor concepts tailored to your taste and event style.",
        "Selection and arrangement of floral designs, lighting, furniture, and décor elements.",
        "Transforming spaces into visually stunning, immersive experiences.",
      ],
      image: "/decorin.jpeg",
    },
    {
      slug: "artist-management",
      icon: Music,
      title: "Bespoke Vendor & Entertainment Management",
      features: [
        "Handpicked vendors for photography, styling, music, and performances.",
        "Coordination and scheduling of artists and entertainment segments.",
        "Ensuring every service runs seamlessly, leaving you stress-free.",
      ],
      image: "/artistin.jpeg",
    },
    {
      slug: "ceremony-planning",
      icon: Lightbulb,
      title: "Ceremony & Ritual Expertise",
      features: [
        "Guidance for all traditional, cultural, or custom rituals.",
        "Step-by-step planning to ensure ceremonies flow smoothly.",
        "Handling officiants, timing, and ceremonial essentials flawlessly.",
      ],
      image: "/ritualin.jpeg",
    },
    {
      slug: "hospitality",
      icon: Hotel,
      title: "Seamless Logistics & Guest Experience",
      features: [
        "Complete management of guest arrivals, transport, and accommodations.",
        "On-site coordination for smooth execution.",
        "Personalized care for every guest.",
      ],
      image: "/hospin.jpeg",
    },
    {
      slug: "food-and-beverages",
      icon: Gift,
      title: "Curated Culinary & Beverage Experiences",
      features: [
        "Personalized menu planning and tastings.",
        "Catering coordination including dietary requirements.",
        "Beverage planning and seamless service execution.",
      ],
      image: "/khana.jpg",
    },
  ];

  const reveal0 = useReveal(0.25);
  const reveal1 = useReveal(0.25);
  const reveal2 = useReveal(0.25);
  const reveal3 = useReveal(0.25);
  const reveal4 = useReveal(0.25);
  const reveal5 = useReveal(0.25);

  const revealItems = [
    reveal0,
    reveal1,
    reveal2,
    reveal3,
    reveal4,
    reveal5,
  ];

  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section
        ref={heroRef}
        style={{ height: `${heroHeight}vh` }}
        className={`relative flex items-center justify-center overflow-hidden transition-[height] duration-300 ease-out ${
          heroVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(signature.jpeg)",
            filter: `brightness(${Math.max(0.6, 1 - scrollY / 600)})`,
            transform: `scale(${1 + scrollY / 2000})`,
          }}
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 text-center">
          <h1
            className="text-6xl md:text-7xl font-light text-white mb-6"
            style={{ fontFamily: "Cormorant, serif" }}
          >
            Our Signature Services
          </h1>
          <div className="w-24 h-[1px] bg-[#C6A75E] mx-auto mb-6" />
          <p className="text-white/90 max-w-3xl mx-auto">
            End-to-End Planning. Seamless Execution. Exceptional Experiences.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-[#FAF7F2]">
        <div className="container mx-auto max-w-7xl space-y-32 px-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const [ref, visible] = revealItems[index];
            const reverse = index % 2 !== 0;

            return (
              <div
                key={service.slug}
                id={service.slug}
                ref={ref}
                className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ease-out ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <div className={reverse ? "md:order-2" : ""}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[500px] object-cover rounded-lg shadow-xl"
                  />
                </div>

                <div className={reverse ? "md:order-1" : ""}>
                  <div className="w-20 h-20 border border-[#C6A75E] rounded-full flex items-center justify-center mb-8">
                    <Icon size={36} className="text-[#C6A75E]" />
                  </div>

                  <h3
                    className="text-4xl md:text-5xl font-light mb-6"
                    style={{ fontFamily: "Cormorant, serif" }}
                  >
                    {service.title}
                  </h3>

                  <div className="space-y-3">
                    {service.features.map((feature, i) => (
                      <div
  key={i}
  className="relative pl-6 text-lg leading-relaxed text-[#1F1F1F]/80
             before:content-[''] before:absolute
             before:left-2 before:top-[0.7em]
             before:w-[6px] before:h-[6px]
             before:bg-[#C6A75E] before:rounded-full"
>
  {feature}
</div>


                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Services;