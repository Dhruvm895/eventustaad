import { useState, useEffect, useRef } from 'react'

const mustHaves = [
  { img: '/must1.jpeg' },
  { img: '/must2.jpeg' },
  { img: '/must3.jpeg' },
  { img: '/must4.jpeg' },
  { img: '/must5.jpeg' },
  { img: '/must6.jpeg' },
  { img: '/must7.jpeg' },
]

const WeddingMustHavesTrail = () => {
  const [open, setOpen] = useState(false)
  const [step, setStep] = useState(0)
  const refs = useRef([])

  /* Auto progress */
  useEffect(() => {
    if (!open) return
    if (step < mustHaves.length - 1) {
      const t = setTimeout(() => setStep(s => s + 1), 1800)
      return () => clearTimeout(t)
    }
  }, [step, open])

  /* Auto scroll */
  useEffect(() => {
    refs.current[step]?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    })
  }, [step])

  return (
    <>
      {/* PREVIEW */}
      <section className="bg-[#FAF7F2] py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3
            className="text-3xl md:text-4xl mb-10"
            style={{ fontFamily: 'TheSeasons, serif' }}
          >
            7 Must-Haves for Your Dream Wedding
          </h3>

          <div
            onClick={() => {
              setOpen(true)
              setStep(0)
            }}
            className="inline-block cursor-pointer"
          >
            <img
              src={mustHaves[0].img}
              alt="Wedding must haves"
              className="w-[260px] shadow-md border border-[#E5DED3]"
            />
          </div>
        </div>
      </section>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-md overflow-y-auto">

          {/* CLOSE */}
          <button
            onClick={() => setOpen(false)}
            className="fixed top-6 right-6 z-50 text-white/80 text-2xl hover:text-white"
          >
            ✕
          </button>

          <div className="min-h-screen py-28">
            <div className="max-w-5xl mx-auto px-6 relative">

              {mustHaves.slice(0, step + 1).map((item, i) => {
                const isLeft = i % 2 === 0
                const isActive = i === step

                return (
                  <div
                    key={i}
                    ref={el => (refs.current[i] = el)}
                    className="relative mb-32"
                  >
                    {/* IMAGE CARD */}
                    <div
                      className={`w-[320px] transition-all duration-700
                      ${isLeft ? 'ml-0 mr-auto' : 'ml-auto mr-0'}
                      ${
                        isActive
                          ? 'scale-[1.03] shadow-xl'
                          : 'opacity-70'
                      }`}
                    >
                      <img
                        src={item.img}
                        alt="Wedding must have"
                        className="w-full block"
                      />
                    </div>

                    {/* TRAIL */}
                    {i < step && (
                      <TrailSVG direction={isLeft ? 'right' : 'left'} />
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default WeddingMustHavesTrail
const TrailSVG = ({ direction }) => {
  return (
    <svg
      width="200"
      height="120"
      viewBox="0 0 200 120"
      className={`absolute top-full ${
        direction === 'right' ? 'left-[300px]' : 'right-[300px]'
      }`}
    >
      <path
        d={
          direction === 'right'
            ? 'M10 10 C 80 40, 120 80, 190 110'
            : 'M190 10 C 120 40, 80 80, 10 110'
        }
        stroke="#c22"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  )
}
