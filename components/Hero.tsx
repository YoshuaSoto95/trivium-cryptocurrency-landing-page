import React, { useRef } from 'react';
// Fix: Import Variants type from framer-motion to explicitly type variant objects.
import { motion, Variants, useScroll, useTransform } from 'framer-motion';
import AnimatedCounter from './AnimatedCounter';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const statsVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 1.5,
      },
    },
  };
  
const statItemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const GradientBubble: React.FC<{
  className: string;
  initialAnimateProps: any;
  yTransform: any; // For parallax effect
}> = ({ className, initialAnimateProps, yTransform }) => (
  <motion.div
    className={`absolute rounded-full filter blur-3xl opacity-20 ${className}`}
    animate={initialAnimateProps}
    style={{ y: yTransform }}
    transition={{
      duration: 20,
      repeat: Infinity,
      repeatType: 'mirror',
      ease: 'easeInOut',
    }}
  />
);

const Hero: React.FC = () => {
  const targetRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '-30%']);
  const y3 = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  return (
    <section ref={targetRef} id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 snap-start">
      <div className="absolute inset-0 z-0">
        <GradientBubble
          className="w-96 h-96 bg-gradient-to-r from-primary to-secondary"
          initialAnimateProps={{ x: [0, 100, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
          yTransform={y1}
        />
        <GradientBubble
          className="w-[30rem] h-[30rem] bg-gradient-to-r from-secondary to-tertiary top-1/4 left-1/4"
          initialAnimateProps={{ x: [0, -80, 0], y: [0, 60, 0], scale: [1.2, 1, 1.2] }}
          yTransform={y2}
        />
        <GradientBubble
          className="w-80 h-80 bg-gradient-to-r from-tertiary to-primary bottom-10 right-10"
          initialAnimateProps={{ x: [0, 40, 0], y: [0, -40, 0], scale: [1, 1.1, 1] }}
          yTransform={y3}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto"
        >
          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
            The Future of Scalable
          </motion.h1>
          <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-tertiary mt-2">
            Decentralized Apps
          </motion.h2>
          <motion.p variants={itemVariants} className="mt-6 text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            Trivium is a high-performance blockchain designed for mass adoption. Experience unparalleled speed, low costs, and a thriving ecosystem.
          </motion.p>
          <motion.div variants={itemVariants} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#cta" className="px-8 py-3 rounded-md font-semibold text-black bg-gradient-to-r from-primary via-secondary to-tertiary bg-[length:200%_auto] hover:bg-light transition-all duration-500 animate-gradient-x w-full sm:w-auto">
              Buy Now
            </a>
            <button className="px-8 py-3 rounded-md font-semibold text-white bg-white/10 hover:bg-white/20 transition-colors duration-300 w-full sm:w-auto">
              Learn More
            </button>
          </motion.div>
        </motion.div>

        <motion.div 
            variants={statsVariants}
            initial="hidden"
            animate="visible"
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-left"
        >
            <motion.div variants={statItemVariants} className="p-4">
                <h3 className="text-3xl md:text-4xl font-bold">
                    <AnimatedCounter to={250} />B+
                </h3>
                <p className="text-sm text-white/60">Tokens</p>
            </motion.div>
            <motion.div variants={statItemVariants} className="p-4">
                <h3 className="text-3xl md:text-4xl font-bold">
                    <AnimatedCounter to={500} />k+
                </h3>
                <p className="text-sm text-white/60">Secure Transactions</p>
            </motion.div>
            {/* Fix: Corrected typo from `statItemvariants` to `statItemVariants`. */}
            <motion.div variants={statItemVariants} className="p-4">
                <h3 className="text-3xl md:text-4xl font-bold">
                    <AnimatedCounter to={1500} />+
                </h3>
                <p className="text-sm text-white/60">Partners</p>
            </motion.div>
            <motion.div variants={statItemVariants} className="p-4">
                <h3 className="text-3xl md:text-4xl font-bold">
                    <AnimatedCounter to={15} />+
                </h3>
                <p className="text-sm text-white/60">Exchanges Listed</p>
            </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;