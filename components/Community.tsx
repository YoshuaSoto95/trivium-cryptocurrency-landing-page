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


const socialChannels = [
  {
    name: 'Discord',
    description: 'Join the conversation with our dev team and community.',
    link: '#',
    icon: futuristicIcon(['M7.5 8.25h9m-9 3H12m-6.75 3h9M3.75 12a9 9 0 0118 0v.008c0 4.903-3.08 9.08-7.5 9.08s-7.5-4.177-7.5-9.08V12z']),
    cta: 'Join Server'
  },
  {
    name: 'Twitter',
    description: 'Follow us for the latest news, updates, and announcements.',
    link: '#',
    icon: futuristicIcon(['M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3']),
    cta: 'Follow Us'
  },
  {
    name: 'Telegram',
    description: 'Get real-time updates and chat with fellow supporters.',
    link: '#',
    icon: futuristicIcon(['M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a12.025 12.025 0 01-4.132 4.132m-4.132-4.132a6 6 0 017.38-5.84m-2.56 5.84a12.025 12.025 0 01-4.132-4.132M14.37 8.41a6 6 0 01-5.84-7.38v4.82m5.84 2.56a12.025 12.025 0 014.132-4.132M8.41 9.63a6 6 0 017.38 5.84m-5.84-2.56a12.025 12.025 0 01-4.132-4.132']),
    cta: 'Join Channel'
  },
  {
    name: 'GitHub',
    description: 'Contribute to our open-source code and help build the future.',
    link: '#',
    icon: futuristicIcon(['M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5']),
    cta: 'View Code'
  },
];

const SocialCard: React.FC<typeof socialChannels[0]> = ({ name, description, link, icon, cta }) => (
    <motion.a
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      variants={itemVariants}
      className="block p-[1px] bg-gradient-to-br from-primary via-secondary to-tertiary animate-gradient-x rounded-xl h-full"
    >
      <div className="bg-black/80 backdrop-blur-md rounded-[11px] p-6 flex flex-col items-start h-full cursor-pointer transition-all duration-300 hover:shadow-[0_0_20px_theme(colors.tertiary)]">
          {icon}
          <h3 className="font-bold text-xl mb-2 mt-4 text-white">{name}</h3>
          <p className="text-white/70 text-sm flex-grow mb-6">{description}</p>
          <div className="w-full text-center mt-auto px-4 py-2 rounded-md font-semibold text-white bg-white/10 group-hover:bg-primary/80 group-hover:text-white transition-colors duration-300">
            {cta}
          </div>
      </div>
    </motion.a>
);

const Community: React.FC = () => {
  return (
    <section id="community" className="relative min-h-screen flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8 snap-start overflow-hidden">
        <div className="absolute inset-0 z-0">
             {/* Subtle background bubbles */}
             <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-tertiary/10 rounded-full filter blur-3xl animate-blob animation-delay-6000"></div>
             <div className="absolute -top-20 -right-20 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl animate-blob animation-delay-9000"></div>
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
                    Join Our Thriving Community
                </motion.h2>
                <motion.p variants={itemVariants} className="mt-4 text-white/70 md:text-lg">
                    Become a part of the Trivium movement. Connect with us, ask questions, and help shape the future of decentralized technology.
                </motion.p>
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={containerVariants}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
            >
                {socialChannels.map((channel, index) => (
                    <SocialCard key={index} {...channel} />
                ))}
            </motion.div>
        </div>
    </section>
  );
};

export default Community;