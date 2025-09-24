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

const partnersData = [
  { name: 'Alpha Ventures', logo: '🚀' },
  { name: 'Cyber Corp', logo: '🤖' },
  { name: 'Momentum Six', logo: '📈' },
  { name: 'Blockstone', logo: '🧱' },
  { name: 'DeFi Alliance', logo: '🤝' },
  { name: 'Zenith Labs', logo: '💡' },
  { name: 'InfraNode', logo: '🗼' },
  { name: 'SecureScale', logo: '🔒' },
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

const Partners: React.FC = () => {
  return (
    <section id="partners" className="relative min-h-screen flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8 snap-start overflow-hidden">
        <div className="absolute inset-0 z-0">
             {/* Subtle background bubbles */}
             <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-secondary/10 rounded-full filter blur-3xl animate-blob animation-delay-5000"></div>
             <div className="absolute top-1/4 right-10 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-blob animation-delay-8000"></div>
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
                    Our Trusted Partners
                </motion.h2>
                <motion.p variants={itemVariants} className="mt-4 text-white/70 md:text-lg">
                    We collaborate with industry leaders to build a robust and secure ecosystem. Their expertise and support are integral to our success.
                </motion.p>
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={containerVariants}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
            >
                {partnersData.map((partner, index) => (
                    <PartnerCard key={index} {...partner} />
                ))}
            </motion.div>
        </div>
    </section>
  );
};

export default Partners;