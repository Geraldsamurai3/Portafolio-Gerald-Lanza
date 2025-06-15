// File: src/components/RecentWorks.jsx
import React, { useState, useEffect, useRef } from 'react';
import PortfolioCard from './PortfolioCard';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaFolderOpen } from 'react-icons/fa';

const CARD_WIDTH = 384 + 32; // w-96 (384px) + px-4*2 (32px)
const VISIBLE_COUNT = 3;     // número de cards visibles a la vez

const projects = [
  {
    title: 'SIMADLSC',
    description:
      'Este proyecto fue desarrollado por mí, junto a un grupo de compañeros de Ingeniería en Sistemas de la Universidad Nacional, como donación al Liceo de Santa Cruz. La institución contaba con un sistema obsoleto y múltiples problemas de funcionamiento. Escogimos este liceo porque es parte de nuestra historia; muchos de nosotros fuimos estudiantes ahí, y nos sentimos orgullosos de poder retribuir con una solución tecnológica que mejore su gestión académica.',
    imageUrl: 'https://placehold.co/600x300?text=SIMADLSC',
    projectLink: 'https://simadlsc.vercel.app',
    githubLink: 'https://github.com/CristianAG13/SIMADLSC.git',
  },
  {
    title: 'Lazarus Backend',
    description:
      'Backend API desarrollado para gestionar la lógica de negocio del proyecto Lazarus.',
    imageUrl: 'https://placehold.co/600x300?text=Lazarus+Backend',
    projectLink: 'https://github.com/Geraldsamurai3/Lazarus-Backend',
    githubLink: 'https://github.com/Geraldsamurai3/Lazarus-Backend',
  },
  {
    title: 'SIMADLSC Backend',
    description:
      'API backend para el sistema SIMADLSC, encargado de almacenar y servir datos académicos y de usuarios.',
    imageUrl: 'https://placehold.co/600x300?text=SIMADLSC+Backend',
    projectLink: 'https://github.com/VictorJB16/SIMADLSC-backend',
    githubLink: 'https://github.com/VictorJB16/SIMADLSC-backend',
  },
  {
    title: 'Lazarus Frontend',
    description:
      'Interfaz de usuario para el proyecto Lazarus, desarrollada en flutter.',
    imageUrl: 'https://placehold.co/600x300?text=Lazarus+Frontend',
    projectLink: 'https://github.com/Geraldsamurai3/Lazarus_Frontend',
    githubLink: 'https://github.com/Geraldsamurai3/Lazarus_Frontend',
  },
  {
    title: 'ErrorLogs API',
    description:
      'Servicio REST para capturar y almacenar logs de errores de aplicaciones, incluye endpoints para registro y consulta de eventos.',
    imageUrl: 'https://placehold.co/600x300?text=ErrorLogs+API',
    projectLink: 'https://github.com/VictorJB16/ErrorLogsApi',
    githubLink: 'https://github.com/VictorJB16/ErrorLogsApi',
  },
];

const RecentWorks = () => {
  const [current, setCurrent] = useState(0);
  const [disableTransition, setDisableTransition] = useState(false);
  const length = projects.length;
  const maxIndex = length - VISIBLE_COUNT;
  const timer = useRef(null);

  const next = () => {
    if (current >= maxIndex) {
      setDisableTransition(true);
      setCurrent(0);
    } else {
      setCurrent(c => c + 1);
    }
  };

  const prev = () => {
    if (current === 0) {
      setDisableTransition(true);
      setCurrent(maxIndex);
    } else {
      setCurrent(c => c - 1);
    }
  };

  useEffect(() => {
    if (disableTransition) {
      requestAnimationFrame(() => setDisableTransition(false));
    }
  }, [disableTransition]);

  useEffect(() => {
    timer.current = setTimeout(next, 5000);
    return () => clearTimeout(timer.current);
  }, [current]);

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
            <h2 className="text-4xl font-bold">Últimos Proyectos</h2>
          </div>
          <div className="h-[2px] bg-red-400 w-full mt-2" />
        </motion.div>

        {/* Carrusel */}
        <div className="relative overflow-hidden">
          <div
            className={`flex ${disableTransition ? '' : 'transition-transform ease-in-out duration-500'}`}
            style={{ transform: `translateX(-${current * CARD_WIDTH}px)` }}
          >
            {projects.map((proj, idx) => (
              <div key={idx} className="flex-shrink-0 w-96 px-4">
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
