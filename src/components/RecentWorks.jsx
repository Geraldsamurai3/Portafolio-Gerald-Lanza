// File: src/components/RecentWorks.jsx
import React, { useState, useEffect, useRef } from 'react';
import PortfolioCard from './PortfolioCard';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaFolderOpen } from 'react-icons/fa';

const projects = [
  {
    title: 'SIMADLSC',
    description:
      'Este proyecto fue desarrollado por mí, junto a un grupo de compañeros de Ingeniería en Sistemas de la Universidad Nacional, como donación al Liceo de Santa Cruz.',
    imageUrl: 'https://res.cloudinary.com/da84etlav/image/upload/v1750041481/Enhancing_User_Experience_with_the_Loading_Component_in_React_OG_Image_119187c223_t8oadb.webp',
    projectLink: 'https://simadlsc.vercel.app',
    githubLink: 'https://github.com/CristianAG13/SIMADLSC.git',
  },
  {
    title: 'Lazarus Backend',
    description: 'Backend API desarrollado para gestionar la lógica de negocio del proyecto Lazarus.',
    imageUrl: 'https://res.cloudinary.com/da84etlav/image/upload/v1750041361/nest-og_bnbuf8.png',
    projectLink: 'https://github.com/Geraldsamurai3/Lazarus-Backend',
    githubLink: 'https://github.com/Geraldsamurai3/Lazarus-Backend',
  },
  {
    title: 'SIMADLSC Backend',
    description:
      'API backend para el sistema SIMADLSC, encargado de almacenar y servir datos académicos y de usuarios.',
    imageUrl: 'https://res.cloudinary.com/da84etlav/image/upload/v1750041361/nest-og_bnbuf8.png',
    projectLink: 'https://github.com/VictorJB16/SIMADLSC-backend',
    githubLink: 'https://github.com/VictorJB16/SIMADLSC-backend',
  },
  {
    title: 'Lazarus Frontend',
    description: 'Interfaz de usuario para el proyecto Lazarus, desarrollada en Flutter.',
    imageUrl: 'https://res.cloudinary.com/da84etlav/image/upload/v1750041601/Flutter-vs-Dart-_-whats-the-difference_rdszzu.jpg',
    projectLink: 'https://github.com/Geraldsamurai3/Lazarus_Frontend',
    githubLink: 'https://github.com/Geraldsamurai3/Lazarus_Frontend',
  },
  {
    title: 'ErrorLogs API',
    description:
      'Servicio REST para capturar y almacenar logs de errores de aplicaciones, incluye endpoints para registro y consulta de eventos.',
    imageUrl: 'https://res.cloudinary.com/da84etlav/image/upload/v1750041737/Desktop-1_fgprec.png',
    projectLink: 'https://github.com/VictorJB16/ErrorLogsApi',
    githubLink: 'https://github.com/VictorJB16/ErrorLogsApi',
  },
];

const RecentWorks = () => {
  const [current, setCurrent] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const trackRef = useRef(null);
  const length = projects.length;

  // Calc width of one card (responsive)
  useEffect(() => {
    const calculateWidth = () => {
      const firstCard = trackRef.current?.children[0];
      if (firstCard) setCardWidth(firstCard.getBoundingClientRect().width);
    };
    calculateWidth();
    window.addEventListener('resize', calculateWidth);
    return () => window.removeEventListener('resize', calculateWidth);
  }, []);

  // Auto-slide
  useEffect(() => {
    const id = setTimeout(() => setCurrent((c) => (c + 1) % length), 5000);
    return () => clearTimeout(id);
  }, [current, length]);

  const next = () => setCurrent((c) => (c + 1) % length);
  const prev = () => setCurrent((c) => (c - 1 + length) % length);

  return (
    <section id="projects" className="py-16 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Encabezado */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2">
            <FaFolderOpen className="text-red-400 text-4xl" />
            <h2 className="text-4xl font-bold">Últimos proyectos</h2>
          </div>
          <div className="h-[2px] bg-red-400 w-full mt-2" />
        </motion.div>

        {/* Carrusel */}
        <div className="relative overflow-hidden">
          <div
            ref={trackRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * cardWidth}px)` }}
          >
            {projects.map((proj, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-full sm:w-80 md:w-96 px-4"
              >
                <PortfolioCard {...proj} />
              </div>
            ))}
          </div>

          {/* Flechas */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 text-lg text-red-400 p-1 bg-gray-800 bg-opacity-75 rounded-full hover:text-red-500 z-10"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 text-lg text-red-400 p-1 bg-gray-800 bg-opacity-75 rounded-full hover:text-red-500 z-10"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecentWorks;
