import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Minimum loading time: 2.5 seconds for brand impact
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-navy via-gray-900 to-black"
        >
          {/* Animated Logo Container */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative flex flex-col items-center"
          >
            {/* Logo Placeholder - Can be replaced with actual logo */}
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="w-24 h-24 mb-8 border-4 border-gold border-t-transparent rounded-full"
            />

            {/* Brand Name */}
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-white tracking-wider mb-4"
            >
              OBLONG
            </motion.h1>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mb-4"
            />

            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-xl md:text-2xl text-gold font-light tracking-widest"
            >
              REALTIES
            </motion.h2>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute bottom-24 text-white/80 text-sm md:text-base font-light tracking-wider italic"
          >
            Where Luxury Meets Legacy
          </motion.p>

          {/* Loading Progress Bar */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '240px' }}
            transition={{ delay: 1.5, duration: 1, ease: 'easeInOut' }}
            className="absolute bottom-12 h-0.5 bg-gold/50 rounded-full"
          >
            <motion.div
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="h-full w-1/3 bg-gold rounded-full"
            />
          </motion.div>

          {/* Animated Corner Accents */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Top Left */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-gold/40"
            />
            {/* Top Right */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-gold/40"
            />
            {/* Bottom Left */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-gold/40"
            />
            {/* Bottom Right */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-gold/40"
            />
          </div>

          {/* Floating Particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0,
              }}
              animate={{
                y: [null, Math.random() * -100 - 50],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
              className="absolute w-1 h-1 bg-gold rounded-full"
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
