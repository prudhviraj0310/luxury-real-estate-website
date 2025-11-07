// components/ScrollHandMoney.js
'use client';
import { useRef, useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import animationData from '../public/animations/handmoney.json';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ScrollHandMoney() {
  const lottieRef = useRef();
  const sectionRef = useRef();
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const anim = lottieRef.current;
    if (!anim) return;

    const ctx = gsap.context(() => {
      // Total frames of the Lottie animation
      const totalFrames = anim.getDuration(true);

      // ScrollTrigger timeline synced to scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '#handMoneyScene',
          start: 'top 70%',
          end: 'bottom 10%',
          scrub: 1.5,
          pin: false,
        },
      });

      // Animate Lottie progress as user scrolls
      tl.to(anim, {
        duration: 1,
        onUpdate: () => {
          const frame = Math.round(tl.progress() * totalFrames);
          anim.goToAndStop(frame, true);
        },
        ease: 'none',
      });

      // Fade in headline text when hands meet
      gsap.fromTo(
        '.gsap-fade',
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          scrollTrigger: {
            trigger: '#handMoneyScene',
            start: '50% center',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Fade in subtitle
      gsap.fromTo(
        '.gsap-subtitle',
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          delay: 0.3,
          scrollTrigger: {
            trigger: '#handMoneyScene',
            start: '55% center',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  // Theme detection
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
  const bgGradient = isDark 
    ? 'bg-gradient-to-b from-[#071428] via-[#03121f] to-[#000]'
    : 'bg-gradient-to-b from-white via-[#F5FAFF] to-white';
  const textColor = isDark ? 'text-electric' : 'text-brand-blue';
  const subtitleColor = isDark ? 'text-muted' : 'text-brand-gray';

  return (
    <section
      id="handMoneyScene"
      ref={sectionRef}
      className={`relative flex flex-col items-center justify-center min-h-[120vh] ${bgGradient} overflow-hidden`}
    >
      {/* Radial gradient spotlight effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(39,169,225,0.1)_0%,_transparent_70%)] pointer-events-none" />
      
      {/* Animated background particles */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-brand-blue rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-brand-blue rounded-full animate-ping" />
        <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-brand-blue rounded-full animate-pulse" />
      </div>

      {/* Text content */}
      <div className="max-w-3xl mx-auto relative z-20 text-center px-6">
        <h2 className={`gsap-fade text-3xl md:text-6xl font-bold ${textColor} mb-4 opacity-0`}>
          Building Trust, Empowering Growth
        </h2>
        <p className={`gsap-subtitle ${subtitleColor} text-lg md:text-xl opacity-0 max-w-2xl mx-auto`}>
          Every investment is a promise. Every deposit, a step toward your dreams.
        </p>
      </div>

      {/* Lottie Animation */}
      <div className="absolute w-full h-full flex items-center justify-center z-10">
        <Lottie
          lottieRef={lottieRef}
          animationData={animationData}
          loop={false}
          autoplay={false}
          className="w-[90%] md:w-[700px] lg:w-[800px]"
        />
      </div>

      {/* Bottom gradient overlay for smooth transition */}
      <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-t from-[#000]/80 via-transparent to-transparent' : 'bg-gradient-to-t from-white/80 via-transparent to-transparent'} pointer-events-none z-5`} />
      
      {/* Floating accent elements */}
      <div className="absolute bottom-20 left-10 w-12 h-12 border border-brand-blue/20 rounded-full animate-bounce opacity-30" />
      <div className="absolute top-32 right-16 w-8 h-8 border border-brand-blue/30 rounded-full animate-pulse opacity-20" />
    </section>
  );
}
