import React from 'react';
import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const futuristicIcon = (paths: string[]) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-tertiary">
        {paths.map((d, i) => <path key={i} strokeLinecap="round" strokeLinejoin="round" d={d} />)}
    </svg>
);

const ecosystemPartners = [
  { name: 'QuantumLeap', logo: futuristicIcon(['M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M20.25 20.25v-4.5m0 4.5h-4.5m4.5 0L15 15']) },
  { name: 'Nova Capital', logo: futuristicIcon(['M12 6v12m6-6H6']) },
  { name: 'StellarGuard', logo: futuristicIcon(['M12 21a9 9 0 100-18 9 9 0 000 18z', 'M12 3.75v16.5']) },
  { name: 'Apex Nodes', logo: futuristicIcon(['M15.75 8.25l-7.5 7.5', 'M15.75 15.75l-7.5-7.5']) },
  { name: 'ChainLink', logo: futuristicIcon(['M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244']) },
  { name: 'DataVerse', logo: futuristicIcon(['M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z']) },
  { name: 'Synthwave Labs', logo: futuristicIcon(['M12 18.375a9.375 9.375 0 006.286-2.431', 'M12 5.625a9.375 9.375 0 016.286 2.431', 'M12 12a1.5 1.5 0 00-1.5 1.5v.001a1.5 1.5 0 003 0v-.001a1.5 1.5 0 00-1.5-1.5z']) },
  { name: 'Oracle Nexus', logo: futuristicIcon(['M8.25 3.75h7.5', 'M8.25 12h7.5m-7.5 8.25h7.5', 'M3 3.75h.008v.008H3v-.008z', 'M3 12h.008v.008H3V12zm0 8.25h.008v.008H3v-.008z']) },
];

const PartnerCard: React.FC<{ name: string; logo: React.ReactNode }> = ({ name, logo }) => (
  <motion.div
    variants={itemVariants}
    className="p-[1px] bg-gradient-to-br from-primary via-secondary to-tertiary animate-gradient-x rounded-xl h-full"
  >
    <div className="bg-black/80 backdrop-blur-md rounded-[11px] p-6 flex flex-col items-center justify-center aspect-square cursor-pointer transition-all duration-300 hover:shadow-[0_0_20px_theme(colors.tertiary)]">
        {logo}
        <h3 className="font-semibold text-lg text-white text-center mt-4">{name}</h3>
    </div>
  </motion.div>
);

const Ecosystem: React.FC = () => {
  return (
    <section id="ecosystem" className="relative min-h-screen flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8 snap-start overflow-hidden">
        <div className="absolute inset-0 z-0">
             {/* Subtle background bubbles */}
             <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/10 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
             <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-tertiary/10 rounded-full filter blur-3xl animate-blob animation-delay-7000"></div>
        </div>
        <div className="container mx-auto relative z-10">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={containerVariants}
                className="text-center max-w-3xl mx-auto mb-16"
            >
                <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold">
                    A Thriving Ecosystem
                </motion.h2>
                <motion.p variants={itemVariants} className="mt-4 text-white/70 md:text-lg">
                    Trivium is supported by a growing network of partners, validators, and dApps, all contributing to a vibrant and robust ecosystem.
                </motion.p>
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={containerVariants}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
            >
                {ecosystemPartners.map((partner, index) => (
                    <PartnerCard key={index} {...partner} />
                ))}
            </motion.div>
        </div>
    </section>
  );
};

export default Ecosystem;