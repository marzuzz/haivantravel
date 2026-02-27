"use client"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export default function InfinityGallery() {
  const sliderRef = useRef<HTMLDivElement>(null)

  const images = [
    "/slider/img1.png",
    "/slider/img2.png",
    "/slider/img3.png",
    "/slider/img4.png",
    "/slider/img5.png",
  ]

  useEffect(() => {
    const el = sliderRef.current
    if (!el) return

    const width = el.scrollWidth / 2

    gsap.to(el, {
      x: -width,
      duration: 25,
      ease: "none",
      repeat: -1,
    })
  }, [])

  return (
    <div className="relative w-full py-24 bg-[#121212] overflow-hidden translate-y-[-50px]">
      <div className="overflow-hidden w-full">
        <div
          ref={sliderRef}
          className="flex gap-10 w-max"
        >
          {images.concat(images).map((src, i) => (
            <div key={i}
                 className="w-[900px] h-[1000px]
                            rounded-xl overflow-hidden
                            shadow-2xl">
              <img
                src={src}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}