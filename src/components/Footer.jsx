import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer(){
  return (
    <footer className="bg-navy text-white py-12 mt-12">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-md bg-white flex items-center justify-center text-navy font-bold">OR</div>
              <div className="font-heading text-xl">Oblong Realties</div>
            </div>
            <p className="mt-4 text-slate-300 text-sm leading-relaxed mb-4">
              Since 2013, we've been crafting exceptional living spaces across India. 
              Award-winning developer committed to quality, innovation, and customer satisfaction.
            </p>
            {/* Social Links */}
            <div className="flex gap-3 mt-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">📘</a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">📷</a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">🐦</a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">💼</a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">▶️</a>
            </div>
          </div>

          {/* Quick Menu */}
          <div>
            <div className="font-semibold text-lg mb-4">Quick Menu</div>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-slate-300 hover:text-gold transition-colors">About Us</Link></li>
              <li><Link to="/projects" className="text-slate-300 hover:text-gold transition-colors">All Projects</Link></li>
              <li><Link to="/projects?status=Ongoing" className="text-slate-300 hover:text-gold transition-colors">Ongoing Projects</Link></li>
              <li><Link to="/projects?status=Completed" className="text-slate-300 hover:text-gold transition-colors">Completed Projects</Link></li>
              <li><Link to="/projects?status=Upcoming" className="text-slate-300 hover:text-gold transition-colors">Upcoming Projects</Link></li>
              <li><Link to="/contact" className="text-slate-300 hover:text-gold transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <div className="font-semibold text-lg mb-4">Quick Links</div>
            <ul className="space-y-2 text-sm">
              <li><Link to="/emi-calculator" className="text-slate-300 hover:text-gold transition-colors">EMI Calculator</Link></li>
              <li><Link to="/careers" className="text-slate-300 hover:text-gold transition-colors">Careers</Link></li>
              <li><Link to="/blogs" className="text-slate-300 hover:text-gold transition-colors">Blogs</Link></li>
              <li><Link to="/awards" className="text-slate-300 hover:text-gold transition-colors">Awards</Link></li>
              <li><Link to="/privacy" className="text-slate-300 hover:text-gold transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-slate-300 hover:text-gold transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="font-semibold text-lg mb-4">Reach Us</div>
            <div className="space-y-3 text-sm text-slate-300">
              <div>
                <div className="font-semibold text-white mb-1">Corporate Address</div>
                <p>123 Luxury Avenue<br/>Anna Nagar, Chennai<br/>Tamil Nadu 600040, India</p>
              </div>
              <div>
                <div className="font-semibold text-white mb-1">For Sales Enquiries</div>
                <a href="tel:18003130080" className="hover:text-gold transition-colors">📞 1800 313 0080</a>
              </div>
              <div>
                <div className="font-semibold text-white mb-1">For Other Enquiries</div>
                <a href="tel:+918025591080" className="hover:text-gold transition-colors">📞 +91 80 2559 1080</a>
              </div>
              <div>
                <div className="font-semibold text-white mb-1">Email</div>
                <a href="mailto:properties@oblongrealties.com" className="hover:text-gold transition-colors">properties@oblongrealties.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-300">
          <div>© {new Date().getFullYear()} Official Website of Oblong Realties. All Rights Reserved.</div>
          <div className="flex gap-4">
            <Link to="/disclaimer" className="hover:text-gold transition-colors">Disclaimer</Link>
            <Link to="/sitemap" className="hover:text-gold transition-colors">Sitemap</Link>
            <Link to="/privacy" className="hover:text-gold transition-colors">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
