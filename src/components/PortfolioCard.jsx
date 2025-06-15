// File: src/components/PortfolioCard.jsx
import React from 'react';
import { motion } from 'framer-motion';

const PortfolioCard = ({ title, description, imageUrl, projectLink, githubLink }) => (
  <motion.div
    className="flex flex-col backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 shadow-xl hover:scale-[1.02] hover:shadow-2xl transition h-[550px]"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
    viewport={{ once: true }}
  >
    {/* Imagen con altura fija */}
    <img
      className="w-full h-48 object-cover rounded-xl border border-white/20"
      src={imageUrl}
      alt={title}
    />

    {/* Contenido que crece y luego truenca */}
    <div className="flex flex-col flex-1 mt-4">
      <h2 className="text-2xl font-bold tracking-tight text-white">{title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-gray-300 overflow-hidden line-clamp-4">
        {description}
      </p>
      <div className="mt-auto flex gap-4">
        <a
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white font-medium transition"
        >
          Ver Proyecto
        </a>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-800 text-white font-medium transition"
        >
          Repositorio
        </a>
      </div>
    </div>
  </motion.div>
);

export default PortfolioCard;
