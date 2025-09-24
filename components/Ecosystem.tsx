import React, { useRef } from 'react';
import { motion, Variants, useScroll, useTransform } from 'framer-motion';

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

const futuristicIcon = (paths: string[]) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-tertiary">
        {paths.map((d, i) => <path key={i} strokeLinecap="round" strokeLinejoin="round" d={d} />)}
    </svg>
);

const ecosystemData = [
  {
    name: 'DeFi Hub',
    description: 'A comprehensive suite of decentralized finance protocols, including lending, borrowing, and yield farming, all powered by Trivium\'s high-speed, low-cost infrastructure. Empowering a truly open financial system.',
    icon: futuristicIcon(['M21 12a9 9 0 11-18 0 9 9 0 0118 0z', 'M12 8v4m0 4h.01M12 3v1m0 16v1m-6.4-2.6l.7-.7m11.4 0l-.7-.7m-11.4-11.4l.7.7m11.4 0l-.7.7']),
    className: 'lg:col-span-2 lg:row-span-2'
  },
  {
    name: 'NFT & Metaverse',
    description: 'Explore vibrant marketplaces for unique digital collectibles and immersive metaverse experiences built on Trivium. Our scalable network ensures minting and trading is fast, cheap, and accessible to all creators.',
    icon: futuristicIcon(['M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25z']),
    className: 'lg:col-span-2'
  },
  {
    name: 'Secure Wallets',
    description: 'Access a variety of non-custodial wallets that provide a secure and user-friendly way to manage your assets on the Trivium network.',
    icon: futuristicIcon(['M21 12V7.5M21 12v-2.25m0 2.25v2.25m0 0V18m-9-9.75h5.25M9 12h5.25M9 15h5.25M5.25 9.75h3.75m-3.75 0V15m0-5.25V6.75m0 0h3.75m0 0V9.75m6-3V6.75m0 0h3.75m0 0V9.75m0-3V6.75m0 0h3.75M9 4.5v2.25m6-2.25v2.25M3 12a9 9 0 1118 0 9 9 0 01-18 0z']),
    className: ''
  },
  {
    name: 'Oracle Integration',
    description: 'Reliable, real-time data feeds for smart contracts provided by leading decentralized oracle networks, enabling complex dApps.',
    icon: futuristicIcon(['M10.5 6a7.5 7.5 0 100 12h3a7.5 7.5 0 100-12h-3z', 'M10.5 9a2.5 2.5 0 105 0 2.5 2.5 0 00-5 0z', 'M10.5 10.5c0 .678.546 1.228 1.222 1.228.676 0 1.222-.55 1.222-1.228 0-.678-.546-1.228-1.222-1.228-.676 0-1.222.55-1.222 1.228z']),
    className: ''
  },
  {
    name: 'Web3 Gaming',
    description: 'Experience the next generation of gaming with true asset ownership, play-to-earn models, and decentralized game worlds.',
    icon: futuristicIcon(['M3.75 4.5a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75zM3.75 18.5a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75zM11.25 12.5a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z', 'M6.75 12.5a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75v-.008z', 'M15.75 12.5a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z']),
    className: ''
  },
  {
    name: 'Developer Tools',
    description: 'A robust set of SDKs, APIs, and comprehensive documentation to help developers build and deploy dApps on Trivium effortlessly.',
    icon: futuristicIcon(['M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5']),
    className: ''
  },
];

const EcosystemItem: React.FC<typeof ecosystemData[0]> = ({ name, description, icon, className }) => (
    <motion.div
        variants={itemVariants}
        className={`p-[1px] bg-gradient-to-br from-primary via-secondary to-tertiary animate-gradient-x rounded-xl h-full ${className}`}
    >
        <div className="bg-gray-900/50 backdrop-blur-lg rounded-[11px] p-6 flex flex-col items-start h-full cursor-pointer transition-all duration-300 hover:shadow-[0_0_20px_theme(colors.tertiary)]">
            <div className="mb-4">{icon}</div>
            <h3 className="font-bold text-xl mb-2 text-white">{name}</h3>
            <p className="text-white/70 text-sm flex-grow">{description}</p>
        </div>
    </motion.div>
);


const Ecosystem: React.FC = () => {
    const targetRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ['start end', 'end start'],
    });

    const y1 = useTransform(scrollYProgress, [0, 1], ['-25%', '25%']);
    const y2 = useTransform(scrollYProgress, [0, 1], ['20%', '-20%']);

  return (
    <section ref={targetRef} id="ecosystem" className="relative min-h-screen flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8 snap-start overflow-hidden">
        <div className="absolute inset-0 z-0">
             <motion.div
                style={{ y: y1 }}
                className="absolute top-1/4 right-0 w-80 h-80 bg-primary/10 rounded-full filter blur-3xl animate-blob animation-delay-4000"
             ></motion.div>
             <motion.div
                style={{ y: y2 }}
                className="absolute bottom-1/4 left-10 w-96 h-96 bg-tertiary/10 rounded-full filter blur-3xl animate-blob animation-delay-7000"
             ></motion.div>
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
                    Trivium is more than a blockchain; it's a universe of interconnected applications and services. Discover the key pillars of our growing ecosystem.
                </motion.p>
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={containerVariants}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
                {ecosystemData.map((item, index) => (
                    <EcosystemItem key={index} {...item} />
                ))}
            </motion.div>
        </div>
    </section>
  );
};

export default Ecosystem;