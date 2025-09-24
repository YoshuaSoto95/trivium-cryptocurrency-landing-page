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

const socialChannels = [
  {
    name: 'Discord',
    description: 'Join the conversation with our dev team and community.',
    link: '#',
    icon: '💬',
    cta: 'Join Server'
  },
  {
    name: 'Twitter',
    description: 'Follow us for the latest news, updates, and announcements.',
    link: '#',
    icon: '🐦',
    cta: 'Follow Us'
  },
  {
    name: 'Telegram',
    description: 'Get real-time updates and chat with fellow supporters.',
    link: '#',
    icon: '✈️',
    cta: 'Join Channel'
  },
  {
    name: 'GitHub',
    description: 'Contribute to our open-source code and help build the future.',
    link: '#',
    icon: '💻',
    cta: 'View Code'
  },
];

const SocialCard: React.FC<typeof socialChannels[0]> = ({ name, description, link, icon, cta }) => (
    <motion.div
      variants={itemVariants}
      className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 flex flex-col items-start h-full hover:border-primary transition-colors duration-300"
    >
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="font-bold text-xl mb-2 text-white">{name}</h3>
        <p className="text-white/70 text-sm flex-grow mb-4">{description}</p>
        <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full text-center px-4 py-2 rounded-md font-semibold text-white bg-white/10 hover:bg-primary/80 hover:text-white transition-colors duration-300"
        >
          {cta}
        </a>
    </motion.div>
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