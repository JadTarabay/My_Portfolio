'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import image1 from '../../../public/jad-portrait1.jpg'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center bg-black text-white overflow-hidden"
    >
      {/* Floating Portraits */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 rounded-full overflow-hidden border-4 border-blue-400 shadow-[0_0_30px_rgba(0,255,255,0.5)]"
        animate={{ x: [0, 10, -10, 0], y: [0, -10, 10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: 'easeInOut',
        }}
      >
        <Image src={image1} alt="Jad portrait 1" width={600} height={600} className="object-cover w-full h-full" />
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-10 w-48 h-48 rounded-full overflow-hidden border-4 border-blue-400 shadow-[0_0_30px_rgba(0,255,255,0.5)]"
        animate={{ x: [0, 10, -10, 0], y: [0, -10, 10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: 'easeInOut',
          delay: 2,
        }}
      >
        <Image src="/jad-portrait2.jpg" alt="Jad portrait 2" width={128} height={128} className="object-cover w-full h-full" />
      </motion.div>

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold">Hi, I’m Jad 👋</h1>
        <p className="mt-4 text-lg text-left">
        A web developer who creates modern, responsive websites <br></br>
        with a focus on interactive design and great user experience. <br></br>
        I specialize in React, 3D elements, and clean, efficient code <br></br> bringing creative ideas to life on the web..
        </p>
        <a
          href="#work"
          className="inline-block mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-full"
        >
          See My Work
        </a>
      </motion.div>
    </section>
  )
}
