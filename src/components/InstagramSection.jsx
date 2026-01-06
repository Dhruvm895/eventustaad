const InstagramSection = () => {
  return (
    <section className="bg-[#FAF7F2] border-t border-[#E5DED3] py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Heading */}
        <div className="mb-12">
          <h2
            className="text-3xl md:text-4xl text-[#1F1F1F] mb-3"
            style={{ fontFamily: 'TheSeasons, serif' }}
          >
            From Instagram
          </h2>
          <p className="text-[#6A6A6A] max-w-xl">
            A glimpse into our latest celebrations, designs, and behind-the-scenes moments.
          </p>
        </div>

        {/* Behold Wrapper */}
        <div className="relative bg-white border border-[#E5DED3] rounded-2xl overflow-hidden">

          {/* Optional subtle top label */}
          <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur px-3 py-1 border border-[#E5DED3] rounded-full text-xs tracking-wide text-[#6A6A6A]">
            @eventustaad
          </div>

          {/* Behold Embed */}
          <iframe
            src="https://behold.so/widget/YOUR_WIDGET_ID"
            title="Event Ustaad Instagram Feed"
            loading="lazy"
            className="w-full h-[420px] md:h-[460px] lg:h-[500px]"
          />
        </div>

      </div>
    </section>
  )
}

export default InstagramSection
