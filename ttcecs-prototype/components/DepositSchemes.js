// components/DepositSchemes.js
'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const schemes = [
  {
    id: 'dmg',
    name: 'DMG (Diamond)',
    icon: '💎',
    ageRange: '0-12 years',
    rate: '14.40%',
    color: 'from-blue-500 to-purple-600',
    features: ['Minor accounts', 'Guardian operated', 'Education focused', 'Quarterly interest'],
    description: 'Perfect start for your child\'s financial future'
  },
  {
    id: 'gnx',
    name: 'GNX (Gold Next)',
    icon: '🥇',
    ageRange: '13-18 years',
    rate: '14.40%',
    color: 'from-yellow-500 to-orange-600',
    features: ['Teen accounts', 'Partial self-operation', 'Higher education goals', 'Flexible deposits'],
    description: 'Growing wealth for growing minds'
  },
  {
    id: 'frontiers',
    name: 'Frontiers',
    icon: '🚀',
    ageRange: '19-35 years',
    rate: '14.40%',
    color: 'from-green-500 to-teal-600',
    features: ['Young professionals', 'Marriage & house goals', 'Loan eligibility', 'Smart Card access'],
    description: 'Launch your financial independence'
  },
  {
    id: 'pioneers',
    name: 'Pioneers',
    icon: '⭐',
    ageRange: '36-55 years',
    rate: '14.40%',
    color: 'from-indigo-500 to-blue-600',
    features: ['Prime earning years', 'Wealth accumulation', 'Retirement planning', 'Premium services'],
    description: 'Build your legacy with confidence'
  },
  {
    id: 'ssnr',
    name: 'SSNR (Senior)',
    icon: '👑',
    ageRange: '56+ years',
    rate: '14.40%',
    color: 'from-red-500 to-pink-600',
    features: ['Senior citizens', 'Retirement income', 'Health benefits', 'Priority support'],
    description: 'Secure your golden years'
  },
];

function SchemeCard({ scheme }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative h-[420px] cursor-pointer perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front */}
        <div
          className={`absolute inset-0 glass rounded-2xl p-8 flex flex-col items-center justify-center text-center backface-hidden`}
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className={`text-7xl mb-4 animate-bounce`}>{scheme.icon}</div>
          <h3 className="text-2xl font-bold mb-2">{scheme.name}</h3>
          <div className={`text-4xl font-black bg-gradient-to-r ${scheme.color} bg-clip-text text-transparent mb-3`}>
            {scheme.rate}
          </div>
          <div className="text-muted text-sm mb-4">{scheme.ageRange}</div>
          <p className="text-sm text-muted/80 italic">{scheme.description}</p>
          <div className="mt-auto pt-6">
            <div className="text-xs text-electric animate-pulse">Click to see details →</div>
          </div>
        </div>

        {/* Back */}
        <div
          className={`absolute inset-0 glass rounded-2xl p-8 flex flex-col backface-hidden bg-gradient-to-br ${scheme.color} bg-opacity-10`}
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <h3 className="text-xl font-bold mb-4 text-center">{scheme.name} Features</h3>
          <ul className="space-y-3 flex-grow">
            {scheme.features.map((feature, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isFlipped ? 1 : 0, x: isFlipped ? 0 : -20 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-2"
              >
                <span className="text-electric text-lg">✓</span>
                <span className="text-sm">{feature}</span>
              </motion.li>
            ))}
          </ul>
          <div className="mt-6 pt-4 border-t border-white/10">
            <button className="w-full bg-electric/20 hover:bg-electric/30 py-3 rounded-lg font-semibold transition text-sm">
              Open {scheme.name} Account
            </button>
          </div>
          <div className="text-xs text-center text-muted mt-3">Click to flip back</div>
        </div>
      </motion.div>
    </div>
  );
}

export default function DepositSchemes() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const getTheme = () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
      setTheme(currentTheme);
    };
    getTheme();
    const observer = new MutationObserver(getTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, []);

  const isDark = theme === 'dark';
  return (
    <section id="schemes" className={`py-24 ${isDark ? "bg-gradient-to-b from-[#071428] to-[#03121f]" : "bg-gradient-to-b from-white to-[#F5FAFF]"} relative overflow-hidden`}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(39,169,225,0.08)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Deposit Plans for Every Life Stage</h2>
          <p className="text-muted text-lg max-w-3xl mx-auto">
            From childhood to retirement, we have tailored fixed deposit schemes with consistent 14.40% returns
          </p>
        </motion.div>

        {/* Desktop: Swiper Carousel */}
        <div className="hidden md:block">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 10,
              stretch: 0,
              depth: 150,
              modifier: 1.5,
              slideShadows: false,
            }}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            className="py-8"
            style={{ padding: '40px 0' }}
          >
            {schemes.map((scheme) => (
              <SwiperSlide key={scheme.id} style={{ width: '350px' }}>
                <SchemeCard scheme={scheme} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Mobile: Grid */}
        <div className="md:hidden grid grid-cols-1 gap-6">
          {schemes.map((scheme) => (
            <SchemeCard key={scheme.id} scheme={scheme} />
          ))}
        </div>

        {/* Info Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 glass p-6 rounded-xl text-center"
        >
          <p className="text-sm text-muted">
            🏆 All schemes offer the same competitive 14.40% annual returns with quarterly compounding.
            <span className="text-electric font-semibold"> Choose based on your age and goals!</span>
          </p>
        </motion.div>
      </div>

      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #00d9ff !important;
          background: rgba(7, 20, 40, 0.8);
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }
        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 20px;
        }
        .swiper-pagination-bullet {
          background: #00d9ff !important;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
}
