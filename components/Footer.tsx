import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gray-900/50 py-12 px-4 sm:px-6 lg:px-8 snap-start">
      <div className="container mx-auto text-center text-white/60">
        <p>&copy; {new Date().getFullYear()} Trivium. All Rights Reserved.</p>
        <p className="mt-2 text-sm">Pioneering the future of decentralized applications.</p>
      </div>
    </footer>
  );
};

export default Footer;
