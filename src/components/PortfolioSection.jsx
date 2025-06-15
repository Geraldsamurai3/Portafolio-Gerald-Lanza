// File: src/components/PortfolioSection.jsx
import React from 'react';
import PortfolioCard from './PortfolioCard';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Proyecto 1',
    description: 'Descripción breve del proyecto 1.',
    imageUrl: 'https://placehold.co/600x400?text=Proyecto+1',
    projectLink: 'https://example.com/proyecto1',
    githubLink: 'https://github.com/Geraldsamurai3/proyecto1',
  },
  {
    title: 'Proyecto 2',
    description: 'Descripción breve del proyecto 2.',
    imageUrl: 'https://placehold.co/600x400?text=Proyecto+2',
    projectLink: 'https://example.com/proyecto2',
    githubLink: 'https://github.com/Geraldsamurai3/proyecto2',
  },
  {
    title: 'Proyecto 3',
    description: 'Descripción breve del proyecto 3.',
    imageUrl: 'https://placehold.co/600x400?text=Proyecto+3',
    projectLink: 'https://example.com/proyecto3',
    githubLink: 'https://github.com/Geraldsamurai3/proyecto3',
  },
];

const PortfolioSection = () => (
  <section className="py-16 px-6 bg-gray-900 text-white">
    <motion.h2
      className="text-4xl font-bold text-center mb-12 border-b-2 border-red-400 inline-block pb-2"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      Mi Portafolio
    </motion.h2>

    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
      initial="hidden"
      whileInView="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.2 } },
      }}
      viewport={{ once: true }}
    >
      {projects.map((p, i) => (
        <PortfolioCard key={i} {...p} />
      ))}
    </motion.div>
  </section>
);

export default PortfolioSection;
