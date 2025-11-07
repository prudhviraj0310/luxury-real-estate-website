import { motion } from 'framer-motion';

const projects = [
  { title: 'FD Campaign', subtitle: '14.40% launch', summary: 'Member acquisition drive with high returns' },
  { title: 'Smart Card rollout', subtitle: 'QR + OTP', summary: 'Digitized deposit checks for members' },
  { title: 'Branch Modernization', subtitle: 'Hyderabad & Chennai', summary: 'Improved teller & backend systems' }
];

export default function Projects(){
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold">Featured Projects</h2>
      <p className="text-muted mt-2">Case studies showing measurable outcomes for members and operations.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {projects.map((p, i) => (
          <motion.div key={p.title} className="project-card glass p-5 rounded-lg"
            initial={{ opacity: 0, y: 20 }} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay: i*0.1}}>
            <div className="h-36 bg-[linear-gradient(135deg,#0b2a44,#061428)] rounded-md flex items-center justify-center text-4xl">🏭</div>
            <h3 className="mt-4 font-semibold">{p.title}</h3>
            <p className="text-electric text-sm mt-1">{p.subtitle}</p>
            <p className="text-muted text-sm mt-2">{p.summary}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
