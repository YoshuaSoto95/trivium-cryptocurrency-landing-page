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

const partnersData = [
  { name: 'Alpha Ventures', logo: futuristicIcon(['M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25']) },
  { name: 'Cyber Corp', logo: futuristicIcon(['M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V18m4.5-15V3m0 1.5v1.5m0 3V9m0 3v1.5m0 3V18m0 3v-1.5m-4.5-1.5V18m0-3v1.5m0-6V9m0-3V4.5']) },
  { name: 'Momentum Six', logo: futuristicIcon(['M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-3.94-3.94m3.94 3.94l-3.94 3.94']) },
  { name: 'Blockstone', logo: futuristicIcon(['M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9']) },
  { name: 'DeFi Alliance', logo: futuristicIcon(['M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z']) },
  { name: 'Zenith Labs', logo: futuristicIcon(['M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048', 'M12 9a3 3 0 100 6 3 3 0 000-6z']) },
  { name: 'InfraNode', logo: futuristicIcon(['M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 8.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 018.25 20.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z']) },
  { name: 'SecureScale', logo: futuristicIcon(['M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z']) },
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