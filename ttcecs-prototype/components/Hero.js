import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] flex items-center">
      {/* Simplified background - using CSS gradient instead of particles for now */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-electric/10 via-transparent to-blue-500/10"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10 text-center px-6 py-28">
        <motion.h1 initial={{ y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: .7 }} className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg,#00d9ff,#00a6ff,#ffffff)' }}>
          Fixed Deposit <span className="text-electric">14.40%</span>
        </motion.h1>
        <motion.p initial={{ y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: .9 }} className="mt-4 text-muted text-lg md:text-xl text-center">
          Secure returns for cooperative members • Smart Card QR + OTP access • Multi-branch service
        </motion.p>

        <div className="mt-8 flex justify-center gap-4">
          <a href="#contact" className="bg-electric px-5 py-3 rounded-md text-[#00121a] font-semibold shadow">Open FD</a>
          <a href="#services" className="border border-white/10 px-4 py-3 rounded-md text-sm">Explore Services</a>
        </div>
      </div>
    </section>
  );
}
