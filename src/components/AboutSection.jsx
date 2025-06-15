// File: src/components/AboutSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import TechStack from './TechStack';
import { FaBriefcase, FaGraduationCap, FaUser, FaGlobe } from 'react-icons/fa';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const AboutSection = () => (
  <section id="about" className="bg-gray-950 text-white pt-32 pb-24 px-6">
    <div className="max-w-4xl mx-auto space-y-16">

      {/* Sobre mí */}
      <motion.h2
        className="flex items-center justify-center text-5xl font-extrabold text-center border-b-4 border-red-400 pb-2 mb-4 gap-2 mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={0}
      >
        <FaUser className="text-red-400" />
        Sobre mí
      </motion.h2>
      <motion.div
        className="space-y-4 text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={1}
      >
        <p>
          Soy <strong>Gerald Lanza Rodríguez</strong>, estudiante de <strong>Ingeniería en Sistemas de Información</strong> en la Universidad Nacional de Costa Rica.
        </p>
        <p>
          Tengo conocimientos en diversas áreas: Soporte técnico, bases de datos, seguridad informática y desarrollo de software.
        </p>
        <p>
          Además, gestiono un pequeño emprendimiento de <strong>servicios y soporte técnico</strong>, brindando soluciones a usuarios finales.
        </p>
        <p>
          Actualmente desarrollo un sistema de gestión de información para <strong>FUCOEN</strong>, fundación cristiana sin fines de lucro, como proyecto de donación.
        </p>
      </motion.div>

      {/* Educación y Experiencia */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={2}
      >
        <h3 className="flex items-center justify-center text-4xl font-bold mb-6 border-b-2 border-red-400 pb-2 gap-2">
          <FaGraduationCap className="text-red-400" /> Educación y Experiencia
        </h3>
        <div className="space-y-4 text-gray-300 max-w-3xl mx-auto">
          <div className="flex items-start gap-3">
            <span className="text-red-400 mt-1">•</span>
            <p><strong>UNA Costa Rica</strong> – Ingeniería en Sistemas de Información (en curso).</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-red-400 mt-1">•</span>
            <p><strong>Proyecto Académico</strong> – Sistema colaborativo para gestión educativa.</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-red-400 mt-1">•</span>
            <p><strong>Emprendimiento propio</strong> – Servicios y soporte técnico a usuarios finales.</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-red-400 mt-1">•</span>
            <p><strong>FUCOEN</strong> – Gestión de información para fundación cristiana sin fines de lucro (en curso).</p>
          </div>
        </div>
      </motion.div>

      {/* Tecnologías */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={3}
      >
        <TechStack />
      </motion.div>

      {/* Idiomas */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={4}
      >
        <h3 className="flex items-center justify-center text-4xl font-bold mb-6 border-b-2 border-red-400 pb-2 gap-2">
          <FaGlobe className="text-red-400" /> Idiomas
        </h3>
        <div className="space-y-4 text-gray-300 max-w-3xl mx-auto">
          <div className="flex items-start gap-3">
            <span className="text-red-400 mt-1">•</span>
            <p><strong>Español:</strong> Nativo.</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-red-400 mt-1">•</span>
            <p><strong>Inglés:</strong> Básico intermedio.</p>
          </div>
        </div>
      </motion.div>

      {/* Experiencia Laboral */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={5}
      >
        <h3 className="flex items-center justify-center text-4xl font-bold mb-6 border-b-2 border-red-400 pb-2 gap-2">
          <FaBriefcase className="text-red-400" /> Experiencia Laboral
        </h3>
        <div className="space-y-6 max-w-3xl mx-auto text-gray-300">
          <div className="flex items-start gap-3">
            <span className="text-red-400 mt-1">•</span>
            <p><strong>SIMADLSC:</strong> Desarrollo de plataforma académica donada al Liceo de Santa Cruz, desde diseño de base de datos hasta despliegue.</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-red-400 mt-1">•</span>
            <p><strong>FUCOEN:</strong> Implementación de sistema de gestión de información para fundación cristiana sin fines de lucro como donación.</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-red-400 mt-1">•</span>
            <p><strong>Soporte Técnico:</strong> Emprendimiento propio atendiendo a usuarios finales y pymes, resolución de incidencias HW/SW.</p>
          </div>
        </div>
      </motion.div>

    </div>
  </section>
);

export default AboutSection;
