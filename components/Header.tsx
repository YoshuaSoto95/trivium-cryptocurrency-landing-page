import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Features', href: '#features' },
  { name: 'Ecosystem', href: '#ecosystem' },
  { name: 'Partners', href: '#partners' },
  { name: 'Community', href: '#community' },
];

const NavLink: React.FC<{ href: string; children: React.ReactNode; onClick?: () => void }> = ({ href, children, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="block md:inline-block px-4 py-2 text-white/80 hover:text-white transition-colors duration-300"
  >
    {children}
  </a>
);

const CTABtn: React.FC<{ className?: string }> = ({ className = '' }) => (
    <button className={`px-6 py-2 rounded-md font-semibold text-black bg-gradient-to-r from-primary via-secondary to-tertiary bg-[length:200%_auto] hover:bg-light transition-all duration-500 animate-gradient-x ${className}`}>
        Buy Now
    </button>
);


const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    closed: { x: '100%' },
    open: { x: '0%' },
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="text-2xl font-bold text-white">Trivium</div>
          
          <nav className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <NavLink key={link.name} href={link.href}>{link.name}</NavLink>
            ))}
          </nav>

          <div className="hidden md:block">
            <CTABtn />
          </div>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ type: 'tween', ease: 'easeInOut', duration: 0.4 }}
            className="md:hidden fixed top-0 left-0 w-full h-screen bg-black"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
                <div className="text-2xl font-bold text-white mb-8">Trivium</div>
                {navLinks.map((link) => (
                    <NavLink key={link.name} href={link.href} onClick={() => setIsOpen(false)}>{link.name}</NavLink>
                ))}
                <CTABtn className="mt-4" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;