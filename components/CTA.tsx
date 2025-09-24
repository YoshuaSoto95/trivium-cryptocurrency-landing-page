import React, { useState } from 'react';
import { motion } from 'framer-motion';
import BuyModal from './BuyModal';

const CTA: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="cta" className="relative min-h-screen flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8 snap-start overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-gradient-to-br from-primary via-secondary to-tertiary rounded-full filter blur-3xl opacity-25 animate-pulse"></div>
        </div>
        <div className="container mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
              Are you Ready to Start?
            </h2>
            <p className="mt-6 text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
              Join the revolution and be a part of the next generation of decentralization. Get your Trivium tokens today.
            </p>
            <div className="mt-10">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-12 py-4 rounded-lg font-semibold text-lg text-black bg-gradient-to-r from-primary via-secondary to-tertiary bg-[length:200%_auto] transition-all duration-500 animate-gradient-x shadow-lg shadow-primary/20 hover:shadow-2xl hover:shadow-tertiary/40 hover:scale-105"
              >
                Buy Trivium Now
              </button>
            </div>
          </motion.div>
        </div>
      </section>
      <BuyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default CTA;