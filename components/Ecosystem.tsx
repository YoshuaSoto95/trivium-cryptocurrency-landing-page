// Fix: Replaced placeholder content with a functional React component to resolve module and parsing errors.
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

const ecosystemPartners = [
  { name: 'QuantumLeap', logo: '🌐' },
  { name: 'Nova Capital', logo: '💸' },
  { name: 'StellarGuard', logo: '🛡️' },
  { name: 'Apex Nodes', logo: '⚙️' },
  { name: 'ChainLink', logo: '🔗' },
  { name: 'DataVerse', logo: '📊' },
  { name: 'Synthwave Labs', logo: '🧪' },
  { name: 'Oracle Nexus', logo: '🔮' },
];

const PartnerCard: React.FC<{ name: string; logo: string }> = ({ name, logo }) => (
  <motion.div
    variants={itemVariants}
    className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 flex flex-col items-center justify-center aspect-square"
  >
    <div className="text-5xl mb-4">{logo}</div>
    <h3 className="font-semibold text-lg text-white text-center">{name}</h3>
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
