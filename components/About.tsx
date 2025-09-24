import React from 'react';
import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const GridItem: React.FC<{ className?: string, children: React.ReactNode }> = ({ className, children }) => (
    <motion.div
        variants={itemVariants}
        className={`p-[1px] bg-gradient-to-br from-primary via-secondary to-tertiary animate-gradient-x rounded-xl h-full ${className}`}
    >
        <div className="bg-black/80 backdrop-blur-md rounded-[11px] p-6 h-full cursor-pointer transition-all duration-300 hover:shadow-[0_0_20px_theme(colors.tertiary)]">
            {children}
        </div>
    </motion.div>
);

const About: React.FC = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8 snap-start overflow-hidden">
        <div className="absolute inset-0 z-0">
            {/* Subtle background bubbles */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl animate-blob"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-tertiary/20 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
        <div className="container mx-auto relative z-10">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={containerVariants}
                className="text-center max-w-3xl mx-auto"
            >
                <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold">
                    Pioneering the Next Digital Frontier
                </motion.h2>
                <motion.p variants={itemVariants} className="mt-4 text-white/70 md:text-lg">
                    Trivium is not just another blockchain; it's a foundational layer for a new, decentralized internet. We are committed to building a scalable, secure, and user-friendly platform for developers and users alike.
                </motion.p>
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={containerVariants}
                className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
                <GridItem className="lg:col-span-2 lg:row-span-2">
                    <h3 className="font-bold text-xl mb-3 text-secondary">Our Vision</h3>
                    <p className="text-white/80">
                        We envision a world where individuals have true ownership of their digital assets and data. Trivium aims to empower this vision by providing the core infrastructure for decentralized applications to flourish, breaking down the barriers of traditional centralized systems and fostering a more equitable digital economy for everyone.
                    </p>
                </GridItem>

                <GridItem className="lg:col-span-2 h-64 md:h-auto">
                    <img 
                        src="https://images.unsplash.com/photo-1639755299831-a9924613d312?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200" 
                        alt="Blockchain network visualization"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </GridItem>

                <GridItem>
                    <h3 className="font-bold text-xl mb-3 text-secondary">Core Technology</h3>
                    <p className="text-white/80">
                        Built on a novel consensus mechanism, Trivium achieves unprecedented transaction speeds without compromising on security or decentralization.
                    </p>
                </GridItem>
                
                <GridItem>
                    <h3 className="font-bold text-xl mb-3 text-secondary">The Team</h3>
                    <p className="text-white/80">
                        Our team consists of leading engineers, cryptographers, and designers from across the globe, united by a passion for building the future of the web.
                    </p>
                </GridItem>
                
                <GridItem>
                     <h3 className="font-bold text-xl mb-3 text-secondary">Developer First</h3>
                    <p className="text-white/80">
                        With comprehensive documentation and a robust SDK, we provide developers the tools they need to build innovative dApps on Trivium.
                    </p>
                </GridItem>

                <GridItem>
                    <h3 className="font-bold text-xl mb-3 text-secondary">Ecosystem Growth</h3>
                    <p className="text-white/80">
                        We actively fund and support projects that expand the Trivium ecosystem, fostering a vibrant and collaborative community of builders.
                    </p>
                </GridItem>
            </motion.div>
        </div>
    </section>
  );
};

export default About;