import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Detectamos cambios de tamaño de pantalla
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if(window.innerWidth >= 768) setIsOpen(false); // Cerramos menú móvil al cambiar a desktop
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <nav className="fixed w-full top-0 z-50 bg-dark text-text border-b border-dark-light shadow-md transition-all duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#home" className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
              Portfolio
            </a>

            {/* Menú desktop - Versión corregida */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-text hover:bg-gray-500 px-4 py-2 rounded-lg transition-all">
                Home
              </a>
              <a href="#about" className="text-text hover:bg-gray-500 px-4 py-2 rounded-lg transition-all">
                About
              </a>
              <a href="#skills" className="text-text hover:bg-gray-500 px-4 py-2 rounded-lg transition-all">
                Skills
              </a>
              <a href="#projects" className="text-text hover:bg-gray-500 px-4 py-2 rounded-lg transition-all">
                Projects
              </a>
              <a href="#contact" className="text-text bg-slate-700 px-6 py-2 rounded-lg hover:bg-slate-500 transition-colors">
                Contact
              </a>
            </div>

            {/* Botón móvil - Solo visible en mobile */}
            <button
              className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Menú móvil - Solo visible cuando está abierto en mobile */}
        {isMobile && (
          <div className={`md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-200 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
            <div className="container mx-auto px-4 py-4">
              {/* Centrar los enlaces */}
              <div className="flex flex-col items-center space-y-4">
                <a 
                  href="#home" 
                  className="text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </a>
                <a 
                  href="#about" 
                  className="text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </a>
                <a 
                  href="#skills" 
                  className="text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Skills
                </a>
                <a 
                  href="#projects" 
                  className="text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Projects
                </a>
                <a 
                  href="#contact" 
                  className="text-blue-600 bg-blue-50 px-6 py-2 rounded-lg hover:bg-blue-100 text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      <div className="pt-20"></div>
    </>
  );
}