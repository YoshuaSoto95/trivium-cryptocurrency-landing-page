// Fix: Replaced placeholder content with a functional React component to resolve module and parsing errors.
import React from 'react';
import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
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

const featuresData = [
    {
        icon: '⚡️',
        title: 'Blazing Fast Speed',
        description: 'Process thousands of transactions per second with near-instant finality, ensuring a seamless user experience.',
    },
    {
        icon: '💰',
        title: 'Ultra-Low Fees',
        description: 'Make transactions affordable for everyone, enabling new types of micro-dApps and frequent on-chain interactions.',
    },
    {
        icon: '🛡️',
        title: 'Robust Security',
        description: 'A state-of-the-art consensus mechanism that ensures the integrity and security of the network against attacks.',
    },
    {
        icon: '🧑‍💻',
        title: 'Developer Friendly',
        description: 'Build and deploy smart contracts with ease using our comprehensive SDKs, rich documentation, and supportive community.',
    },
];

const FeatureCard: React.FC<{ icon: string, title: string, description: string }> = ({ icon, title, description }) => (
    <motion.div
        variants={itemVariants}
        className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 flex flex-col items-start h-full"
    >
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="font-bold text-xl mb-2 text-white">{title}</h3>
        <p className="text-white/70 text-sm">{description}</p>
    </motion.div>
);

const Features: React.FC = () => {
  return (
    <section id="features" className="relative min-h-screen flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8 snap-start overflow-hidden">
        <div className="absolute inset-0 z-0">
             {/* Subtle background bubbles */}
             <div className="absolute top-1/2 left-0 w-80 h-80 bg-tertiary/10 rounded-full filter blur-3xl animate-blob animation-delay-3000"></div>
             <div className="absolute bottom-10 right-0 w-80 h-80 bg-secondary/10 rounded-full filter blur-3xl animate-blob animation-delay-6000"></div>
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
                    Built for the Future
                </motion.h2>
                <motion.p variants={itemVariants} className="mt-4 text-white/70 md:text-lg">
                    Trivium combines cutting-edge technology to provide a platform that is scalable, secure, and easy to build on.
                </motion.p>
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={containerVariants}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
                {featuresData.map((feature, index) => (
                    <FeatureCard key={index} {...feature} />
                ))}
            </motion.div>
        </div>
    </section>
  );
};

export default Features;
