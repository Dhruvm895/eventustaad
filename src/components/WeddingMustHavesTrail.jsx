import { useState, useEffect, useRef } from 'react'

const mustHaves = [
  '/must1.jpeg',
  '/must2.jpeg',
  '/must3.jpeg',
  '/must4.jpeg',
  '/must5.jpeg',
  '/must6.jpeg',
  '/must7.jpeg',
  '/must8.jpeg',
]

const WeddingMustHavesTrail = () => {
  const [open, setOpen] = useState(false)
  const [step, setStep] = useState(0)
  const refs = useRef([])

  /* RESET refs when modal opens */
  useEffect(() => {
    if (open) {
      refs.current = []
    }
  }, [open])

  /* AUTO PROGRESSION */
  useEffect(() => {
    if (!open) return
    if (step >= mustHaves.length - 1) return

    const t = setTimeout(() => {
      setStep(s => s + 1)
    }, 1800)

    return () => clearTimeout(t)
  }, [step, open])

  /* AUTO SCROLL — SAFE */
  useEffect(() => {
    if (!open) return

    const el = refs.current[step]
    if (!el) return

    const t = setTimeout(() => {
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      })
    }, 100) // wait for DOM paint

    return () => clearTimeout(t)
  }, [step, open])

  /* LOCK BACKGROUND SCROLL */
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => (document.body.style.overflow = '')
  }, [open])

  return (
    <>
      {/* PREVIEW */}
      <section className="bg-[#FAF7F2] py-20 text-center">
        <img
          src={mustHaves[0]}
          className="w-[260px] md:w-[300px] lg:w-[360px] mx-auto cursor-pointer shadow-md"
          onClick={() => {
            setStep(0)
            setOpen(true)
          }}
        />
        <p className="mt-4 text-sm text-[#6A6A6A]">
          Click to explore all tips
        </p>
      </section>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-md">

          {/* CLOSE */}
          <button
            onClick={() => setOpen(false)}
            className="fixed top-6 right-6 z-50 text-white text-2xl"
          >
            ✕
          </button>

          <div className="absolute inset-0 overflow-y-auto py-24">
            <div className="max-w-5xl mx-auto px-6">

              {mustHaves.slice(0, step + 1).map((img, i) => {
                const isLeft = i % 2 === 0
                const isActive = i === step

                return (
                  <div key={i} className="relative mb-24">

                    {/* CARD */}
                    <div
                      ref={el => (refs.current[i] = el)}
                      className={`relative w-[320px] transition-all duration-700
                        ${isLeft ? 'mr-auto' : 'ml-auto'}
                        ${isActive ? 'scale-[1.04] shadow-xl' : 'opacity-70'}
                      `}
                    >
                      <img
                        src={img}
                        className="w-full block rounded-md"
                      />
                    </div>

                    {/* CONNECTOR (NO SPACE TAKEN) */}
                    {i < step && (
                      <svg
                        viewBox="0 0 200 120"
                        className={`absolute top-full pointer-events-none
                          ${isLeft ? 'left-[320px]' : 'right-[320px]'}
                        `}
                        width="200"
                        height="120"
                      >
                        <path
                          d={
                            isLeft
                              ? 'M0 0 C 120 40, 120 80, 200 120'
                              : 'M200 0 C 80 40, 80 80, 0 120'
                          }
                          stroke="#c22"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                        />
                      </svg>
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
