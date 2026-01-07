import { useState, useEffect } from 'react'

const postcards = [
  { img: '/postcard1.jpeg', rotate: '-2.5deg' },
  { img: '/postcard2.jpeg', rotate: '1.8deg' },
  { img: '/postcard3.jpeg', rotate: '-1.2deg' },
  { img: '/postcard4.jpeg', rotate: '2.2deg' },
  { img: '/postcard5.jpeg', rotate: '-1.8deg' },
  { img: '/postcard6.jpeg', rotate: '1.2deg' },
  { img: '/postcard7.jpeg', rotate: '-2deg' },
  { img: '/postcard8.jpeg', rotate: '1.6deg' },
  { img: '/postcard9.jpeg', rotate: '-1.4deg' },
  { img: '/postcard10.jpeg', rotate: '2deg' },
]

const AUTO_DELAY = 2500 // ⬅️ speed of auto scroll (ms)

const WeddingTipsBoard = () => {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const next = () =>
    setIndex(i => (i + 1) % postcards.length)

  const prev = () =>
    setIndex(i => (i - 1 + postcards.length) % postcards.length)

  /* AUTO SCROLL WHEN MODAL IS OPEN */
  useEffect(() => {
    if (!open) return

    const t = setInterval(() => {
      setIndex(i => (i + 1) % postcards.length)
    }, AUTO_DELAY)

    return () => clearInterval(t)
  }, [open])

  return (
    <>
      {/* SECTION */}
      <section className="bg-[#FAF7F2] py-24 border-t border-[#E5DED3]">
        <div className="max-w-7xl mx-auto px-6 text-center">

          {/* SINGLE POSTCARD */}
          <div
            className="postcard cursor-pointer inline-block"
            style={{ '--final-rotate': postcards[0].rotate }}
            onClick={() => {
              setIndex(0)
              setOpen(true)
            }}
          >
            <span className="tape tape-top-right" />
            <span className="tape tape-bottom-left" />

            <div className="polaroid">
              <img src={postcards[0].img} alt="Wedding tip" />
            </div>
          </div>

          <p className="mt-8 text-sm text-[#6A6A6A]">
            Click to explore all tips
          </p>
        </div>
      </section>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md">
          <div className="relative">

            {/* CLOSE */}
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-10 right-0 text-white/80 text-2xl hover:text-white"
            >
              ✕
            </button>

            {/* POSTCARD */}
            <div
              className="postcard postcard-modal"
              style={{ '--final-rotate': '0deg' }}
            >
              <span className="tape tape-top-right" />
              <span className="tape tape-bottom-left" />

              <div className="polaroid">
                <img
                  src={postcards[index].img}
                  alt="Wedding tip"
                />
              </div>
            </div>

            {/* CONTROLS */}
            <div className="flex justify-between mt-6 text-white">
              <button onClick={prev} className="opacity-70 hover:opacity-100">
                ← Previous
              </button>
              <button onClick={next} className="opacity-70 hover:opacity-100">
                Next →
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  )
}

export default WeddingTipsBoard
