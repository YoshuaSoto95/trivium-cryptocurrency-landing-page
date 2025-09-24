import React from 'react';

// Define nav links locally for component encapsulation
const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Features', href: '#features' },
  { name: 'Roadmap', href: '#roadmap' },
  { name: 'Ecosystem', href: '#ecosystem' },
  { name: 'Partners', href: '#partners' },
  { name: 'Community', href: '#community' },
];

const socialLinks = [
    { name: 'Twitter', href: '#', icon: <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.223.085c.645 1.956 2.52 3.375 4.738 3.414a9.847 9.847 0 01-6.082 2.1A9.942 9.942 0 010 19.54c2.17 1.39 4.768 2.205 7.548 2.205 9.058 0 14.01-7.496 14.01-13.986 0-.213 0-.425-.015-.637a9.954 9.954 0 002.424-2.528z"></path></svg> },
    { name: 'Discord', href: '#', icon: <svg role="img" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M20.317 4.36982C18.9958 3.52244 17.5134 2.87523 15.9038 2.48154C15.6881 2.94392 15.441 3.53752 15.2644 4.04132C13.5934 3.70012 11.9538 3.70012 10.3141 4.04132C10.1375 3.53752 9.89043 2.94392 9.67472 2.48154C8.06516 2.87523 6.58274 3.52244 5.26154 4.36982C2.22845 8.71189 1.54785 12.8751 2.47265 16.8927C4.69531 18.2541 6.88726 19.0494 9.05922 19.2625C9.44437 18.7306 9.77452 18.1588 10.0632 17.5572C9.43262 17.3732 8.83203 17.129 8.27344 16.8346C8.42875 16.7349 8.57724 16.6284 8.71893 16.515C11.3932 17.6534 14.1566 17.6534 16.8613 16.515C17.003 16.6284 17.1515 16.7349 17.3068 16.8346C16.7482 17.129 16.1476 17.3732 15.517 17.5572C15.8057 18.1588 16.1358 18.7306 16.521 19.2625C18.6929 19.0494 20.8849 18.2541 23.1075 16.8927C24.0827 12.6978 23.3418 8.4419 20.317 4.36982ZM13.7844 13.9099C12.823 13.9099 12.0163 13.1165 12.0163 12.1742C12.0163 11.2318 12.8023 10.4384 13.7844 10.4384C14.7664 10.4384 15.5731 11.2318 15.5524 12.1742C15.5524 13.1165 14.7664 13.9099 13.7844 13.9099ZM10.2974 13.9099C9.33594 13.9099 8.5293 13.1165 8.5293 12.1742C8.5293 11.2318 9.31523 10.4384 10.2974 10.4384C11.2794 10.4384 12.086 11.2318 12.0653 12.1742C12.0653 13.1165 11.2794 13.9099 10.2974 13.9099Z"></path></svg> },
    { name: 'Telegram', href: '#', icon: <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M21.8,3.2c-0.4-0.4-1-0.5-1.5-0.1L2.9,9.9c-0.5,0.2-0.8,0.7-0.7,1.2c0.1,0.5,0.5,0.9,1,1l5.4,1.7l1.7,5.4 c0.2,0.6,0.8,1,1.4,1c0,0,0,0,0,0c0.5,0,1-0.3,1.2-0.7l6.8-17.4C22.3,4.2,22.2,3.6,21.8,3.2z M17.3,7.3L9.6,15L8.1,9.9L17.3,7.3z"></path></svg> },
    { name: 'GitHub', href: '#', icon: <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.03-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd"></path></svg> }
];

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-black border-t border-white/10 py-16 px-4 sm:px-6 lg:px-8 snap-start">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white">Trivium</h3>
            <p className="mt-4 text-white/70 max-w-md">
              Trivium is a high-performance blockchain designed for mass adoption, offering unparalleled speed, low costs, and a thriving ecosystem for decentralized applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white tracking-wider">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-white/70 hover:text-white transition-colors duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-semibold text-white tracking-wider">Community</h4>
            <div className="mt-4 flex space-x-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.name} 
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white/80 hover:bg-primary hover:text-white transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <hr className="my-10 border-white/10" />

        <div className="text-center text-white/50 text-sm">
          <p className="mb-4">
            <strong>Disclaimer:</strong> This content is for informational purposes only and should not be construed as financial or investment advice. The cryptocurrency market is highly volatile and speculative. Please conduct your own research before investing.
          </p>
          <p>&copy; {new Date().getFullYear()} Trivium. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
