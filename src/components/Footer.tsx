export default function Footer() {
return (
<footer id="contact" className="bg-gray-800 text-white mt-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-start justify-between gap-10">
<div className="max-w-sm">
<h4 className="text-xl font-bold text-primary-light">Clinicabot</h4>
<p className="text-sm text-gray-400 mt-3">AI-powered, WhatsApp-first health assistant tailored for Nigeria and similar regions. Bridging the gap in primary care.</p>
</div>
<div className="flex-1 md:flex-none">
 <h5 className="font-semibold text-lg mb-4 text-gray-200">Connect</h5>
<ul className="text-base text-gray-400 space-y-2">
<li>For partnerships: <a href="mailto:partnerships@clinicabot.com" className="hover:text-accent transition">Email Us</a></li>
<li>Deployment inquiries: <a href="mailto:hello@clinicabot.com" className="hover:text-accent transition">Contact Team</a></li>
</ul>
</div>
<div className="w-full md:w-auto">
<h5 className="font-semibold text-lg mb-4 text-gray-200">Legal & Safety</h5>
<ul className="text-base text-gray-400 space-y-2">
<li className="hover:text-accent transition cursor-pointer">Privacy Policy</li>
<li className="hover:text-accent transition cursor-pointer">Terms of Service</li>
<li className="hover:text-accent transition cursor-pointer">Non-diagnostic Policy</li>
</ul>
</div>
</div>
  <div className="border-t border-gray-700 bg-gray-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs text-gray-500 text-center">
      <p>© {new Date().getFullYear()} Clinicabot — Built for communities. All guidance is non-diagnostic and should not replace professional medical advice.</p>
    </div>
  </div>
</footer>
)
}