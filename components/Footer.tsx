import { Mail, Phone, MapPin, Zap } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-900 text-gray-300">
      {/* Main Footer */}
      <div className="container-custom py-16 md:py-24">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center font-bold text-lg text-white">
                L
              </div>
              <span className="font-bold text-xl text-white">Light Man</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Professional electrical services in Brampton. Licensed, insured, and available 24/7.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="#" className="text-primary-400 hover:text-primary-300 transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#why-us" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Why Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Residential Wiring
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Commercial Electrical
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Emergency Repairs
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Panel Upgrades
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                <Phone size={20} className="text-primary-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-400">Phone</p>
                  <a href="tel:(647)461-1406" className="text-primary-400 hover:text-primary-300 font-semibold">
                    (647) 461-1406
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <Mail size={20} className="text-primary-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-400">Email</p>
                  <a href="mailto:info@lightman.com" className="text-primary-400 hover:text-primary-300 font-semibold">
                    info@lightman.com
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <MapPin size={20} className="text-primary-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-400">Address</p>
                  <p className="text-primary-400 text-sm">
                    250 Sunny Meadow Blvd #5<br />
                    Brampton, ON L6R 3Y6
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-dark-700" />

        {/* Bottom Footer */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Light Man. All rights reserved. Licensed and insured electrical contractor.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="bg-dark-800 border-t border-dark-700">
        <div className="container-custom py-6">
          <div className="text-center text-sm text-gray-400">
            <p>Licensed &bull; Insured &bull; Available 24/7 &bull; 4.9★ Rated</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
