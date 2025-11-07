import { motion } from 'framer-motion';

const services = [
  { title: 'Fixed Deposits', desc: 'High ROI FDs and renewal services.' },
  { title: 'Loans', desc: 'Member loans at cooperative rates.' },
  { title: 'Smart Card', desc: 'Secure QR + OTP member access.' },
  { title: 'Training', desc: 'Financial literacy & operational training.' }
];

export default function Services() {
  return (
    <section id="services" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold">Our Services</h2>
      <p className="text-muted mt-2 max-w-2xl">Tailored financial services for transport employees — trusted and local.</p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
        {services.map((s, i) => (
          <motion.article key={s.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="glass p-5 rounded-lg"
          >
            <div className="text-3xl mb-2">⚡</div>
            <h3 className="font-semibold">{s.title}</h3>
            <p className="text-muted text-sm mt-2">{s.desc}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
