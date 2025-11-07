import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

/**
 * Animated counter that fetches live data from API.
 * Now uses react-countup for smooth number animations.
 */
export default function Impact() {
  // Fetch live metrics from API
  const [metrics, setMetrics] = useState({
    kwhSaved: 125000,
    installations: 528,
    carbonReduced: 3200
  });
  const [loading, setLoading] = useState(true);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    async function fetchMetrics() {
      try {
        const response = await fetch('/api/metrics');
        const data = await response.json();
        setMetrics({
          kwhSaved: data.kwhSaved,
          installations: data.installations,
          carbonReduced: data.carbonReduced
        });
      } catch (error) {
        console.error('Failed to fetch metrics:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchMetrics();

    // Refresh metrics every 30 seconds
    const interval = setInterval(fetchMetrics, 30000);
    return () => clearInterval(interval);
  }, []);

  // Trigger animation when scrolled into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('impact');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="impact" className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold">Real Impact</h2>
        <p className="text-muted mt-4 text-lg">
          Live metrics powered by API {!loading && '• Updated every 30s'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0 }}
          className="glass p-8 rounded-2xl text-center group hover:scale-105 transition-transform"
        >
          <div className="text-5xl md:text-6xl font-extrabold text-electric">
            {inView ? (
              <CountUp
                end={metrics.kwhSaved}
                duration={2.5}
                separator=","
                suffix=" kWh"
              />
            ) : (
              '0 kWh'
            )}
          </div>
          <div className="text-muted mt-4 text-lg">Energy Saved</div>
          <div className="mt-4 w-full h-16 bg-electric/5 rounded-lg flex items-end gap-1 px-2 py-2">
            {[40, 65, 45, 80, 70, 90, 75, 85].map((h, i) => (
              <div
                key={i}
                className="flex-1 bg-electric/30 rounded-sm group-hover:bg-electric/50 transition-all"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="glass p-8 rounded-2xl text-center group hover:scale-105 transition-transform"
        >
          <div className="text-5xl md:text-6xl font-extrabold text-electric">
            {inView ? (
              <CountUp end={metrics.installations} duration={2.5} suffix="+" />
            ) : (
              '0+'
            )}
          </div>
          <div className="text-muted mt-4 text-lg">Active Installations</div>
          <div className="mt-4 w-full h-16 bg-electric/5 rounded-lg flex items-end gap-1 px-2 py-2">
            {[50, 70, 60, 85, 75, 95, 80, 90].map((h, i) => (
              <div
                key={i}
                className="flex-1 bg-electric/30 rounded-sm group-hover:bg-electric/50 transition-all"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass p-8 rounded-2xl text-center group hover:scale-105 transition-transform"
        >
          <div className="text-5xl md:text-6xl font-extrabold text-electric">
            {inView ? (
              <CountUp end={metrics.carbonReduced} duration={2.5} separator="," />
            ) : (
              '0'
            )}
          </div>
          <div className="text-muted mt-4 text-lg">Tons CO₂ Reduced</div>
          <div className="mt-4 w-full h-16 bg-electric/5 rounded-lg flex items-end gap-1 px-2 py-2">
            {[60, 80, 70, 90, 85, 95, 88, 92].map((h, i) => (
              <div
                key={i}
                className="flex-1 bg-electric/30 rounded-sm group-hover:bg-electric/50 transition-all"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
