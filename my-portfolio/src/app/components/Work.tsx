'use client'
import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const projects = [
  {
    title: 'E-Learning Platform',
    overview:
      'A full-featured e-learning platform allowing tutors and students to connect, schedule, and share media.',
    video: '/videos/Arcs-video.mp4',
    gallery: [
      '/images/Arcs_ss1.png',
      '/images/Arcs_ss2.png',
      '/images/Arcs_ss3.png',
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS S3'],
  },
  {
    title: 'Creative Vision Agency',
    overview:
      'A marketing agency website featuring smooth scroll, custom brand identity pages, and creative animations.',
    video: '/videos/Arcs-video.mp4',
    gallery: [
      '/images/agency-1.png',
      '/images/agency-2.png',
      '/images/agency-3.png',
    ],
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
  },
]

export default function Work() {
  const containerRef = useRef<HTMLDivElement>(null)

  const scrollTo = (direction: 'left' | 'right') => {
    const container = containerRef.current
    if (container) {
      const scrollAmount = window.innerWidth
      const scrollPos = direction === 'left' ? -scrollAmount : scrollAmount
      container.scrollBy({ left: scrollPos, behavior: 'smooth' })
    }
  }

  return (
    <section
      id="work"
      className="relative bg-gray-900 text-white h-screen w-screen overflow-hidden pt-20"
    >
      {/* Scrollable Projects */}
      <div
        ref={containerRef}
        className="flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory h-full w-full scroll-smooth no-scrollbar"
      >
        {projects.map((project, idx) => (
          <motion.div
          key={idx}
          className="flex-shrink-0 w-screen h-full flex relative snap-start"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Left: Text + Video */}
          <div className="w-1/2 h-full px-10 py-6 flex flex-col justify-start ml-10">
            <div className="mb-4">
              <h2 className="text-5xl font-bold text-left mb-2">{project.title}</h2>
              <p className="text-left text-base text-gray-300 max-w-xl">
                {project.overview}
              </p>
            </div>
            <div className="w-full aspect-video max-h-[70%] rounded-lg overflow-hidden shadow-lg">
              <video
                src={project.video}
                controls
                className="w-full h-full rounded-lg shadow-lg object-contain"
              />
            </div>
          </div>
        
          {/* Right: Slideshow + Technologies */}
          <div className="w-1/2 flex flex-col items-center justify-start mt-[150px] pr-10">
            <div className="rounded-lg shadow-lg">
              <Slideshow images={project.gallery} />
            </div>
            
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="bg-cyan-600 px-3 py-1 text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </motion.div>
        ))}
      </div>

      {/* Section Navigation Arrows */}
      <div className="absolute top-1/2 left-6 transform -translate-y-1/2 z-10">
        <button
          onClick={() => scrollTo('left')}
          className="text-white bg-white/10 hover:bg-white/20 p-3 rounded-full"
        >
          ◀
        </button>
      </div>
      <div className="absolute top-1/2 right-6 transform -translate-y-1/2 z-10">
        <button
          onClick={() => scrollTo('right')}
          className="text-white bg-white/10 hover:bg-white/20 p-3 rounded-full"
        >
          ▶
        </button>
      </div>
    </section>
  )
}

export function Slideshow({ images }: { images: string[] }) {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1) // 1: forward

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1)
      setCurrent((prev) => (prev + 1) % images.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="relative w-[400px] h-[300px] overflow-hidden rounded-xl shadow-lg">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          initial={{ x: direction > 0 ? 400 : -400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction > 0 ? -400 : 400, opacity: 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          className="absolute w-full h-full"
        >
          <Image
            src={images[current]}
            alt={`Slide ${current + 1}`}
            width={400}
            height={300}
            className="object-contain rounded-xl"
            sizes="(max-width: 400px) 100vw, 400px"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}