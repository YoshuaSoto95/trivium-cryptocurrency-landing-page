import React from 'react';
import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
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

const roadmapData = [
  {
    quarter: 'Q3 2024',
    title: 'Mainnet Launch',
    description: 'The official launch of the Trivium mainnet, enabling secure and high-speed transactions for all users.',
    completed: true,
  },
  {
    quarter: 'Q4 2024',
    title: 'Ecosystem Grants Program',
    description: 'Initiation of a grant program to fund innovative projects and dApps built on the Trivium blockchain.',
    completed: false,
  },
  {
    quarter: 'Q1 2025',
    title: 'Advanced Smart Contracts',
    description: 'Upgrade to the protocol to support more complex and efficient smart contracts, unlocking new possibilities for developers.',
    completed: false,
  },
  {
    quarter: 'Q2 2025',
    title: 'Decentralized Governance',
    description: 'Implementation of a community-driven governance model, giving token holders a voice in the future of Trivium.',
    completed: false,
  },
  {
    quarter: 'Q3 2025',
    title: 'Cross-Chain Bridges',
    description: 'Launch of secure bridges to other major blockchains, enhancing interoperability and liquidity within the Trivium ecosystem.',
    completed: false,
  },
];

const RoadmapItem: React.FC<{ data: typeof roadmapData[0]; index: number }> = ({ data, index }) => {
  const isEven = index % 2 === 0;
  return (
    <motion.div variants={itemVariants} className="flex md:justify-center md:items-center w-full my-4">
      <div className={`flex items-center w-full max-w-4xl ${isEven ? 'md:flex-row-reverse' : ''}`}>
        {/* Content */}
        <div className="w-11/12 md:w-5/12 p-1">
          <div className="p-[1px] bg-gradient-to-br from-primary via-secondary to-tertiary animate-gradient-x rounded-xl h-full">
              <div className="bg-black/80 backdrop-blur-md rounded-[11px] p-6 h-full transition-all duration-300 hover:shadow-[0_0_20px_theme(colors.tertiary)]">
                  <p className={`font-semibold ${data.completed ? 'text-secondary' : 'text-primary'}`}>{data.quarter}</p>
                  <h3 className="text-xl font-bold mt-1 text-white">{data.title}</h3>
                  <p className="text-white/70 mt-2 text-sm">{data.description}</p>
              </div>
          </div>
        </div>

        {/* Timeline Line & Dot */}
        <div className="hidden md:flex items-center justify-center w-2/12 relative">
            <div className="absolute w-1 bg-white/10 h-full"></div>
            <div className={`z-10 w-4 h-4 rounded-full ${data.completed ? 'bg-secondary' : 'bg-primary border-4 border-black'}`}></div>
        </div>

        {/* Spacer for mobile */}
        <div className="w-1/12 md:hidden"></div>
        {/* Spacer for desktop */}
        <div className="hidden md:block w-5/12"></div>
      </div>
    </motion.div>
  );
};


const Roadmap: React.FC = () => {
    return (
        <section id="roadmap" className="relative min-h-screen flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8 snap-start overflow-hidden">
             <div className="absolute inset-0 z-0">
                {/* Subtle background bubbles */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-blob animation-delay-5000"></div>
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
                        Our Roadmap
                    </motion.h2>
                    <motion.p variants={itemVariants} className="mt-4 text-white/70 md:text-lg">
                        Charting the course for a decentralized future. Here are our key milestones.
                    </motion.p>
                </motion.div>

                <div className="relative">
                    {/* The vertical line for both mobile and desktop */}
                    <div className="absolute w-1 bg-white/10 h-full left-4 md:left-1/2 md:-translate-x-1/2"></div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={containerVariants}
                        className="relative flex flex-col items-start md:items-center"
                    >
                        {roadmapData.map((item, index) => (
                            <RoadmapItem key={index} data={item} index={index} />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Roadmap;