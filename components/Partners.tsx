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

const futuristicIcon = (paths: string[]) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-tertiary">
    {paths.map((d, i) => <path key={i} strokeLinecap="round" strokeLinejoin="round" d={d} />)}
  </svg>
);

const partnersData = [
  {
    name: 'Alpha Ventures',
    description: 'A leading venture capital firm focused on incubating and accelerating the most promising blockchain projects from seed to scale.',
    icon: futuristicIcon(['M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25'])
  },
  {
    name: 'Cyber Corp',
    description: 'Providing institutional-grade security audits and infrastructure support to ensure the Trivium network remains robust and secure.',
    icon: futuristicIcon(['M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V18m4.5-15V3m0 1.5v1.5m0 3V9m0 3v1.5m0 3V18m0 3v-1.5m-4.5-1.5V18m0-3v1.5m0-6V9m0-3V4.5'])
  },
  {
    name: 'Momentum Six',
    description: 'A strategic marketing and growth agency that helps amplify our message and drive mainstream adoption across global markets.',
    icon: futuristicIcon(['M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-3.94-3.94m3.94 3.94l-3.94 3.94'])
  },
  {
    name: 'Blockstone',
    description: 'Specialists in decentralized infrastructure, providing reliable and high-performance validator nodes for the Trivium network.',
    icon: futuristicIcon(['M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9'])
  },
];

const exchangeLogos = [
  { name: 'Binance', src: 'https://cdn.worldvectorlogo.com/logos/binance.svg' },
  { name: 'Coinbase', src: 'https://cdn.worldvectorlogo.com/logos/coinbase.svg' },
  { name: 'Bybit', src: 'https://cdn.worldvectorlogo.com/logos/bybit-3.svg' },
  { name: 'Crypto.com', src: 'https://cdn.worldvectorlogo.com/logos/crypto-com-1.svg' },
  { name: 'Bitfinex', src: 'https://cdn.worldvectorlogo.com/logos/bitfinex.svg' },
];

const PartnerCard: React.FC<{ name: string; description: string; icon: React.ReactNode }> = ({ name, description, icon }) => (
  <motion.div
    variants={itemVariants}
    className="p-[1px] bg-gradient-to-br from-primary via-secondary to-tertiary animate-gradient-x rounded-xl h-full"
  >
    <div className="bg-gray-900/50 backdrop-blur-lg rounded-[11px] p-6 flex flex-col items-start h-full cursor-pointer transition-all duration-300 hover:shadow-[0_0_20px_theme(colors.tertiary)]">
      <div className="mb-4">{icon}</div>
      <h3 className="font-bold text-xl mb-2 text-white">{name}</h3>
      <p className="text-white/70 text-sm">{description}</p>
    </div>
  </motion.div>
);

const Partners: React.FC = () => {
  return (
    <section id="partners" className="relative min-h-screen flex flex-col items-center justify-center py-24 px-4 sm:px-6 lg:px-8 snap-start overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-secondary/10 rounded-full filter blur-3xl animate-blob animation-delay-5000"></div>
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-blob animation-delay-8000"></div>
      </div>
      <div className="container mx-auto relative z-10 flex-grow flex flex-col justify-center">
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
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {partnersData.map((partner, index) => (
            <PartnerCard key={index} {...partner} />
          ))}
        </motion.div>
      </div>
      <div className="w-full mt-auto py-12">
        <h3 className="text-center text-white/60 text-lg mb-8">Trusted by leading crypto exchanges</h3>
        <div
          className="w-full overflow-hidden"
          style={{
            maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)'
          }}
        >
          <div className="flex w-max animate-scroll">
            {[...exchangeLogos, ...exchangeLogos].map((logo, index) => (
              <div key={index} className="flex-shrink-0 mx-10 flex items-center justify-center w-36">
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-8 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;