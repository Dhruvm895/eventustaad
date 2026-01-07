import { useState, useEffect } from 'react'

const pages = [
  '/venue1.jpeg',
  '/venue2.jpeg',
  '/venue3.jpeg',
  '/venue4.jpeg',
  '/venue5.jpeg',
  '/venue6.jpeg',
  '/venue7.jpeg',
]

const VenueTipsStack = () => {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)
  const AUTO_DELAY = 2000   // wait before sliding (4s)


  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => (document.body.style.overflow = '')
  }, [open])

  useEffect(() => {
  if (!open) return
  if (index >= pages.length - 1) return

  const timer = setTimeout(() => {
    setIndex(i => i + 1)
  }, AUTO_DELAY)

  return () => clearTimeout(timer)
}, [open, index])
 useEffect(() => {
  if (open) {
    document.body.style.overflow = 'hidden'
    document.body.classList.add('modal-open')
  } else {
    document.body.style.overflow = ''
    document.body.classList.remove('modal-open')
  }

  return () => {
    document.body.style.overflow = ''
    document.body.classList.remove('modal-open')
  }
}, [open])


  const next = () => {
    if (index < pages.length - 1) setIndex(i => i + 1)
  }

  const prev = () => {
    if (index > 0) setIndex(i => i - 1)
  }

  return (
    <>
      {/* SECTION */}
      <section className="bg-[#FAF7F2] py-24 text-center border-t border-[#E5DED3]">
        

        <img
          src={pages[0]}
          className="w-[320px] md:w-[360px] lg:w-[400px] mx-auto cursor-pointer shadow-xl"
          onClick={() => {
            setOpen(true)
            setIndex(0)
          }}
        />
        <p className="mt-8 text-sm text-[#6A6A6A]">
      Click to explore all tips
    </p>
      </section>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xl flex items-center justify-center">

       {/* CLOSE */}
<button
  onClick={() => setOpen(false)}
  aria-label="Close"
  className="
    fixed top-6 right-6 z-50
    w-10 h-10
    flex items-center justify-center
    rounded-full
    bg-white/20 backdrop-blur-lg
    text-white/80 text-xl
    hover:bg-white/30 hover:text-white
    transition
  "
>
  ✕
</button>


          {/* STACK */}
          <div className="relative w-full max-w-5xl h-[520px] flex items-center justify-center overflow-hidden">

            {pages.map((img, i) => {
              const offset = i - index
              const abs = Math.abs(offset)

              return (
                <div
                  key={i}
                  className="ios-card"
                  style={{
                    transform: `
                      translateX(${offset * 220}px)
                      scale(${1 - abs * 0.12})
                    `,
                    opacity: abs > 2 ? 0 : 1,
                    zIndex: 10 - abs,
                  }}
                >
                  <img src={img} alt="" />
                </div>
              )
            })}

          </div>

          {/* CONTROLS */}
          <div className="fixed left-0 right-0 bottom-28 flex justify-between px-12 text-white">
            <button onClick={prev} disabled={index === 0}>
              ← Previous
            </button>
            <button onClick={next} disabled={index === pages.length - 1}>
              Next →
            </button>
          </div>

        </div>
      )}
    </>
  )
}

export default VenueTipsStack
