import React, { useEffect } from 'react';
import { useMotionValue, useTransform, animate, motion } from 'framer-motion';

interface AnimatedCounterProps {
  to: number;
  from?: number;
  duration?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ to, from = 0, duration = 2 }) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString());

  useEffect(() => {
    const controls = animate(count, to, {
      duration: duration,
      ease: 'easeOut',
    });
    return controls.stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [to]);

  return <motion.span>{rounded}</motion.span>;
};

export default AnimatedCounter;
