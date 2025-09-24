import React from 'react';
// Fix: Import Variants type from framer-motion to explicitly type variant objects.
import { motion, AnimatePresence, Variants } from 'framer-motion';

interface BuyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const backdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants: Variants = {
  hidden: { opacity: 0, y: -50, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 30 } },
  exit: { opacity: 0, y: 50, scale: 0.9, transition: { duration: 0.2 } },
};

const BuyModal: React.FC<BuyModalProps> = ({ isOpen, onClose }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-md p-1 bg-gradient-to-br from-primary via-secondary to-tertiary rounded-2xl"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-gray-900/50 backdrop-blur-xl rounded-[15px] p-8">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
              
              <h2 className="text-2xl font-bold text-white mb-2">Pre-purchase Trivium</h2>
              <p className="text-white/60 mb-6">Secure your tokens before the public sale.</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/80">Full Name</label>
                  <input type="text" id="name" name="name" required className="mt-1 block w-full bg-white/5 border border-white/20 rounded-md py-2 px-3 text-white focus:ring-2 focus:ring-tertiary focus:border-tertiary transition" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/80">Email Address</label>
                  <input type="email" id="email" name="email" required className="mt-1 block w-full bg-white/5 border border-white/20 rounded-md py-2 px-3 text-white focus:ring-2 focus:ring-tertiary focus:border-tertiary transition" />
                </div>
                <div>
                  <label htmlFor="amount" className="block text-sm font-medium text-white/80">Amount (USD)</label>
                  <input type="number" id="amount" name="amount" required min="50" placeholder="Minimum $50" className="mt-1 block w-full bg-white/5 border border-white/20 rounded-md py-2 px-3 text-white focus:ring-2 focus:ring-tertiary focus:border-tertiary transition" />
                </div>
                <div className="pt-4">
                  <button type="submit" className="w-full px-6 py-3 rounded-md font-semibold text-black bg-gradient-to-r from-primary via-secondary to-tertiary bg-[length:200%_auto] hover:bg-light transition-all duration-500 animate-gradient-x">
                    Submit Pre-purchase
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BuyModal;