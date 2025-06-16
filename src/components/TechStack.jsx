import React from 'react';
import { motion } from 'framer-motion';
import { FaDatabase, FaCloud, FaLinux, FaGithub, FaGit, FaTools } from 'react-icons/fa';
import { 
  SiCplusplus, SiHtml5, SiCss3, SiDart, SiJavascript, SiTypescript,
  SiReact, SiTailwindcss, SiFlutter, SiNestjs, SiVite, SiFramer,
  SiMysql, SiMariadb, SiMongodb 
} from 'react-icons/si';

const stack = [
  { icon: <SiCplusplus />, label: 'C++' },
  { icon: <SiHtml5 />,   label: 'HTML5' },
  { icon: <SiCss3 />,    label: 'CSS3' },
  { icon: <SiDart />,    label: 'Dart' },
  { icon: <SiJavascript />, label: 'JavaScript' },
  { icon: <SiTypescript />, label: 'TypeScript' },

  { icon: <SiReact />,   label: 'React' },
  { icon: <SiTailwindcss />, label: 'TailwindCSS' },
  { icon: <SiFlutter />, label: 'Flutter' },
  { icon: <SiNestjs />,  label: 'NestJS' },
  { icon: <SiVite />,    label: 'Vite' },
  { icon: <SiFramer />,  label: 'Framer Motion' },

  { icon: <SiMysql />,   label: 'MySQL' },
  { icon: <SiMariadb />, label: 'MariaDB' },
  { icon: <SiMongodb />, label: 'MongoDB' },
  { icon: <FaDatabase />, label: 'SQL Server' },

  { icon: <FaCloud />,   label: 'Azure' },
  { icon: <FaLinux />,   label: 'Linux' },

  { icon: <FaGit />,     label: 'Git' },
  { icon: <FaGithub />,  label: 'GitHub' },
];

const TechStack = () => (
  <motion.div
    className="text-white space-y-12"
    initial="hidden"
    whileInView="visible"
    variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
    viewport={{ once: true }}
  >
    <motion.h2
      className="flex items-center justify-center text-4xl font-bold border-b-2 border-red-400 inline-block pb-2 gap-2 mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <FaTools className="text-red-400" />
      Tecnologías y herramientas
    </motion.h2>

    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 justify-center items-center text-3xl">
      {stack.map((s, i) => (
        <motion.div
          key={i}
          className="flex flex-col items-center hover:scale-110 transition duration-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          viewport={{ once: true }}
        >
          <div className="text-red-400">{s.icon}</div>
          <span className="text-xs mt-2 text-gray-200 whitespace-nowrap">{s.label}</span>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default TechStack;
