import React from "react";
import { useParams } from "react-router-dom";
import { portfolioItems } from "../mockData";

const WeddingDetail = () => {
  const { slug } = useParams();

  // same slug logic as OurWork
  const generateSlug = (name) =>
    name?.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  const wedding = portfolioItems.find(
    (item) => generateSlug(item.name || item.title) === slug
  );

  if (!wedding) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-[#6A6A6A]">Wedding not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 bg-[#FAF7F2]">

      {/* HERO TITLE */}
      <section className="text-center mb-20">
        <h1
          className="text-5xl md:text-6xl font-light text-[#1F1F1F]"
          style={{ fontFamily: "Cormorant, serif" }}
        >
          {wedding.name || wedding.title}
        </h1>

        {wedding.description && (
          <p className="mt-4 text-[#6A6A6A] max-w-2xl mx-auto">
            {wedding.description}
          </p>
        )}
      </section>

      {/* Wedding Gallery */}
<section className="bg-[#FAF7F2] py-20">
  <div className="site-container">

    <div className="
      columns-1
      sm:columns-2
      lg:columns-3
      gap-6
    ">
      {wedding.images.map((img, index) => (
        <div key={index} className="mb-6 break-inside-avoid">
          <img
            src={img}
            alt={`${wedding.name} ${index + 1}`}
            loading="lazy"
            className="
              w-full
              rounded-2xl
              object-cover
              transition-transform duration-500
              hover:scale-[1.02]
            "
          />
              </div>
            ))}

          </div>
        </div>
      </section>
    </div>
  );
};

export default WeddingDetail;
