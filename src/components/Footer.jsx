// File: src/components/Footer.jsx
import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaFilePdf, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-gray-900 text-gray-300 py-12 px-6">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* Quién eres */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Gerald Lanza Rodriguez</h3>
        <p className="text-sm">
          Estudiante de Ingeniería en Sistemas de Información y emprendedor en soporte técnico.
          Apasionado por soluciones limpias y escalables.
        </p>
      </div>

      {/* Servicios */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Servicios</h3>
        <ul className="text-sm space-y-2">
          <li>Desarrollo Web</li>
          <li>Soporte Técnico</li>
          <li>Consultoría TI</li>
          <li>Automatización DevOps</li>
        </ul>
      </div>

      {/* Contacto */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Contacto</h3>
        <p className="flex items-center gap-2 text-sm mb-2">
          <FaPhoneAlt /> +506 8697 9541
        </p>
        <p className="flex items-center gap-2 text-sm mb-4">
          <FaEnvelope /> <a href="mailto:andreylanza3@gmail.com" className="hover:text-white transition">andreylanza3@gmail.com</a>
        </p>
        <div className="flex gap-4 text-xl">
          <a href="https://github.com/Geraldsamurai3" className="hover:text-white" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/in/gerald-lanza180704" className="hover:text-white" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://wa.me/50686979541" className="hover:text-white" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
        </div>
      </div>

      {/* Dirección */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Dirección</h3>
        <p className="flex items-center gap-2 text-sm">
          <FaMapMarkerAlt className="text-red-400" /> Guanacaste, Costa Rica
        </p>
      </div>
    </div>

    {/* Pie legal */}
    <div className="mt-10 text-center text-xs text-gray-500">
      © {new Date().getFullYear()} Gerald Lanza Rodriguez. Todos los derechos reservados.
    </div>
  </footer>
);

export default Footer;
