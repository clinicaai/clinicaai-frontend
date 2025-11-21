import { motion } from 'framer-motion'

export default function Hero(){
return(
  <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col md:flex-row items-center gap-12">
   <div className="flex-1">
    <motion.h2
     initial={{ opacity: 0, y: 10 }}
     animate={{ opacity: 1, y: 0 }}
     transition={{ duration: 0.5 }}
      whileInView={{opacity: 1, y:0}}
      viewport={{once:false,amount:0.2}}
     className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-gray-900"
    >
     AI-powered health guidance on WhatsApp — <span className="text-primary">built for Nigeria</span>
    </motion.h2>
    <motion.p
     initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
     transition={{ delay: 0.15 }}
     className="mt-5 text-xl text-gray-600 max-w-lg"
    >
     Clinicabot understands local expressions, provides safe symptom triage, reminders, and points you to nearby clinics — all over WhatsApp.
    </motion.p>

    <motion.div className="mt-10 flex flex-col sm:flex-row gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}>
     <a
      href="#contact"
      className="inline-flex items-center justify-center gap-3 bg-white text-blue-400 px-8 py-3 rounded-full font-semibold shadow-xl shadow-accent/40 hover:bg-accent/90 transition transform hover:scale-[1.02]"
     >
      Get Started on WhatsApp
     </a>
     <a href="#features" className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full border border-white text-black hover:bg-gray-100 hover:text-black transition">
      Explore Features
     </a>
    </motion.div>
    <motion.ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-base text-gray-700 font-medium" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}>
     <li className="flex items-center gap-2">✔ Works on any phone via WhatsApp</li>
     <li className="flex items-center gap-2">✔ Understands Nigerian pidgin & colloquial terms</li>
     <li className="flex items-center gap-2">✔ Medication reminders & wellness tips</li>
     <li className="flex items-center gap-2">✔ Maps integration for nearby clinics</li>
    </motion.ul>

   </div>
   <motion.div className="flex-1 w-full max-w-md mt-10 md:mt-0"  transition={{ delay: 0.3 ,duration: 1, ease:'easeIn'}} initial={{opacity:0,y:50}} whileInView={{opacity: 1, y:0}} whileHover={{ y: -8, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.08)' }} >
    <div className="bg-white rounded-3xl shadow-2xl border-2 border-gray-100 p-4">
     <div className="h-[28rem] w-full rounded-2xl bg-gray-50 flex flex-col overflow-hidden border border-gray-200">
      <div className="flex items-center gap-3 p-4 bg-white border-b">
        <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">CB</div>
       <div className="flex-1">
        <h3 className="font-semibold text-gray-800">Clinicabot Assistant</h3>
        <p className="text-xs text-[#17ebf7] ">online</p>
       </div>
      </div>
      <div className="flex-1 p-4 overflow-auto space-y-3">
        <div className="ml-auto max-w-[80%] bg-[#c6f5f8] text-gray-800 px-3 py-2 rounded-xl rounded-tr-none shadow-sm">You: body dey hot and I dey vomit</div>
        <div className="mr-auto max-w-[90%] bg-white border border-gray-200 text-gray-800 px-3 py-2 rounded-xl rounded-tl-none shadow-md">Clinicabot: Thanks — please sip water, rest, monitor your temp. If vomiting persists, visit nearest clinic.</div>
        <div className="ml-auto max-w-[70%] bg-[#c6f5f8] text-gray-800 px-3 py-2 rounded-xl rounded-tr-none shadow-sm">You: Where I fit check for test?</div>
        <div className="mr-auto max-w-[80%] bg-white border border-gray-200 text-gray-800 px-3 py-2 rounded-xl rounded-tl-none shadow-md">Clinicabot: Sending nearest diagnostic centers... (Click to view map)</div>
      </div>

      <div className="p-4 border-t bg-white flex items-center gap-3">
       <input className="flex-1 rounded-full border border-gray-300 p-3 bg-gray-50 focus:ring-primary focus:border-primary" placeholder="Type a message..." aria-hidden disabled/>
       <button className="bg-primary text-white p-3 rounded-full w-10 h-10 flex items-center justify-center" aria-hidden><span className="text-sm">➤</span></button>
      </div>
     </div>
    </div>
   </motion.div>
  </section>
)
}