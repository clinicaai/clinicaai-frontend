import {motion} from 'framer-motion'
const HowItWorksCard: React.FC<{title:string, desc?: string,num: number,img:string}> = ({title,desc,num,img}) =>(
  <motion.div initial={{opacity:0,y:50}} whileInView={{opacity: 1, y:0}} whileHover={{ y: -8, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.08)' }} viewport={{once:false,amount:0.2}} transition={{duration:2,ease:"easeIn"}} className="bg-white rounded-xl p-8 shadow-xl text-center border-t-4 border-accent/70 h-90">
    <motion.div className="mx-auto rounded-full bg-accent/10 flex items-center justify-center">
      <img src={img} className="h-30 rounded-3xl" alt={title}/>
    </motion.div>
    <motion.div className="text-4xl font-extrabold mb-3 text-accent">{num}</motion.div>
    <motion.h4 className="font-bold text-xl text-gray-900">{title}</motion.h4>
    {num == 1 ? <motion.p className="text-base text-gray-600 mt-3">Start a chat with Clinicabot using <strong>join serve-cent</strong> and describe how you feel in your own words (pidgin supported).</motion.p> : num == 3 ? <motion.p className="text-base text-gray-600 mt-3">Get help using <strong>/help</strong>. Schedule reminders, get wellness tips, or seamlessly connect to a real teleconsultation.</motion.p> :<motion.p className="text-base text-gray-600 mt-3">{desc}</motion.p>}
  </motion.div>
)
export default function HowItWorks(){
 return (
  <section id="how" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
   <div className="text-center mb-12">
        <p className="text-sm font-semibold uppercase text-accent tracking-widest mb-2">Process</p>
    <h3 className="text-4xl font-extrabold text-gray-900">How it works — 3 simple steps</h3>
   </div>
   <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    <HowItWorksCard title="Open whatsapp" num = {1} img="Open.jpg"/>
    <HowItWorksCard title="Receive Guidance" num = {2} desc= "Clinicabot offers safe, non-diagnostic advice, and suggests monitoring or nearby clinics if needed." img="ComAI.jpg"/>
    <HowItWorksCard title="Get Help & Reminders" num = {3} img="reminder.jpg"/>
   </div>
  </section>
 )
}