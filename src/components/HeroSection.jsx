// File: src/components/HeroSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const fadeIn = (direction = 'up', delay = 0) => ({
  hidden: {
    opacity: 0,
    x: direction === 'left' ? 40 : 0,
    y: direction === 'up' ? 40 : 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { delay, duration: 0.8, ease: 'easeOut' },
  },
});

const HeroSection = () => (
  <section className="h-screen bg-gray-950 text-white px-6 flex items-center">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
      {/* Texto */}
      <motion.div
        className="space-y-6 text-center md:text-left"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={fadeIn('up', 0.1)} className="text-4xl md:text-5xl font-extrabold leading-tight">
          Transformo ideas<br/>
          <span className="text-red-400">en realidades digitales</span>
        </motion.h1>
        <motion.p variants={fadeIn('up', 0.3)} className="text-gray-300 text-lg">
          Soy Gerald Lanza Rodríguez: apasionado por la ingeniería en sistemas, con experiencia  en servicios y soporte técnico, y enfocado en soluciones de alto impacto.
        </motion.p>
        <motion.div variants={fadeIn('up', 0.5)} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href="#about"
            className="inline-flex items-center gap-2 border border-red-400 text-red-400 px-6 py-2 rounded-lg hover:bg-red-500 hover:text-white transition"
          >
            Conocer más <FaArrowDown />
          </a>
          <a
            href="public\Documents\Currículum Vitae Gerald Lanza.pdf"
            download
            className="inline-block border border-red-400 text-red-400 px-6 py-2 rounded-lg hover:bg-red-500 hover:text-white transition"
          >
            Descargar CV
          </a>
        </motion.div>
      </motion.div>

      {/* Avatar sin animación de flotación */}
      <motion.div
        className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-red-400"
        variants={fadeIn('left', 0.7)}
        initial="hidden"
        animate="visible"
      >
        <img
          src="public\image\OxigenBoy.jpg"
          alt="Gerald Lanza Rodríguez"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
