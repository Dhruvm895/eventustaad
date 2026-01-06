const postcards = [
  { img: '/postcard1.jpg', rotate: '-2.5deg', delay: '0ms' },
  { img: '/postcard2.jpg', rotate: '1.8deg', delay: '120ms' },
  { img: '/postcard3.jpg', rotate: '-1.2deg', delay: '240ms' },
  { img: '/postcard4.jpg', rotate: '2.2deg', delay: '360ms' },
  { img: '/postcard5.jpg', rotate: '-1.8deg', delay: '480ms' },
  { img: '/postcard6.jpg', rotate: '1.2deg', delay: '600ms' },
  { img: '/postcard7.jpg', rotate: '-2deg', delay: '720ms' },
  { img: '/postcard8.jpg', rotate: '1.6deg', delay: '840ms' },
]

const WeddingTipsBoard = () => {
  return (
    <section className="bg-[#FAF7F2] py-24 border-t border-[#E5DED3]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-16 max-w-2xl">
          <h2
            className="text-3xl md:text-4xl mb-4"
            style={{ fontFamily: 'TheSeasons, serif' }}
          >
            Wedding Tips & Planning Insights
          </h2>
          <p className="text-[#6A6A6A]">
            A quiet collection of thoughtful details we live by.
          </p>
        </div>

        {/* Board */}
        <div className="flex flex-wrap justify-center gap-14">
          {postcards.map((card, i) => (
            <div
              key={i}
              className="relative w-[230px] bg-white p-3 border border-[#E5DED3] shadow-md
                         postcard-reveal"
              style={{
                '--final-rotate': card.rotate,
                animationDelay: card.delay,
              }}
            >
              {/* Tape */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-7 cello-tape" />

              {/* Image */}
              <img
                src={card.img}
                alt="Wedding planning inspiration"
                loading="lazy"
                className="w-full h-[260px] object-cover"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default WeddingTipsBoard
