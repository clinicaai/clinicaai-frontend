import React from 'react'
import { motion } from 'framer-motion'

const FeatureCard: React.FC<{title:string;desc:string,image:string}> = ({title, desc,image}) => (
  <motion.div 
    initial={{opacity:0,y:50}} whileInView={{opacity: 1, y:0}} whileHover={{ y: -8, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.08)' }} viewport={{once:false,amount:0.2}} transition={{duration:2,ease:"easeIn"}} 
    className="bg-white rounded-xl p-8 shadow-lg transition-all duration-300 border border-gray-100"
  >
    <div className=" h-40 mb-4 rounded-xl bg-accent/10 flex items-center justify-center p-3">
        <img src={`${image}`} alt={title} className="w-full h-full object-contain" />
    </div>
    <h4 className="font-bold text-lg mb-2 text-gray-900">{title}</h4>
    <p className="text-sm text-gray-600">{desc}</p>
  </motion.div>
)

export default function Features(){
  return (
    <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-white rounded-2xl shadow-inner my-12">
      <div className="text-center mb-16">
        <p className="text-sm font-semibold uppercase text-accent tracking-widest mb-2">Capabilities</p>
        <h3 className="text-4xl font-extrabold text-gray-900">Key features designed for your community</h3>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">Everything a WhatsApp-first health assistant needs to help people in low-resource regions.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FeatureCard title="AI symptom triage" desc="Interprets local phrasing like ‘body dey hot’ and provides safe next steps without diagnosing." image='/AI.jpg'/>
        <FeatureCard title="Nearby clinics & maps" desc="Integrates with maps to show nearby hospitals, pharmacies and labs with clickable links." image='/maps.jpg'/>
        <FeatureCard title="Med & vaccine reminders" desc="User-entered schedules and clinician-driven reminders delivered on WhatsApp." image='/medicine.jpg'/>
        <FeatureCard title="Teleconsultations" desc="Links to virtual rooms so users can chat or call a real clinician when needed." image='/Telecon.jpg'/>
        <FeatureCard title="Localized & inclusive" desc="Understands Nigerian pidgin and regional terms; designed for varying health literacy." image='/Nigeria.jpg'/>
        <FeatureCard title="Privacy-first" desc="Non-diagnostic; respects user choice and avoids prescribing medicine." image='/Security.jpg'/>
      </div>
    </section>
  )
}