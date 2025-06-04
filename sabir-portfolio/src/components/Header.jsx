import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { navLinks } from '../constants/data';
import { slideInFromTop } from '../utils/animations';

const Header = () => {
  const [activeLink, setActiveLink] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Highlight active section
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
          setActiveLink(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={slideInFromTop}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-2 bg-slate-900/80 shadow-lg' : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="#home" className="text-2xl font-bold gradient-text">
          Sabir Ud Din
        </Link>

        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`relative px-2 py-1 transition-all ${
                activeLink === link.path.substring(1)
                  ? 'text-cyan-400 font-medium'
                  : 'text-slate-300 hover:text-cyan-400'
              }`}
            >
              {link.name}
              {activeLink === link.path.substring(1) && (
                <motion.span
                  layoutId="activeLink"
                  className="absolute left-0 bottom-0 w-full h-0.5 bg-cyan-400"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
            </Link>
          ))}
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;