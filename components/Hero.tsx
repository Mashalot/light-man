import { Zap, Phone } from 'lucide-react'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-dark-900 via-primary-900 to-dark-800 text-white py-20 md:py-32">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center space-x-2 bg-primary-500/20 px-4 py-2 rounded-full mb-6">
              <Zap size={18} className="text-primary-300" />
              <span className="text-primary-300 font-semibold">Reliable Electrical Solutions</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Professional Electrical Services in Brampton
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Trusted by residential and commercial clients. 24/7 emergency repairs, expert installation, and complete electrical solutions. Licensed and fully insured.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:(647)461-1406"
                className="btn-primary bg-primary-500 hover:bg-primary-600 flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                Call Now (647) 461-1406
              </a>
              <a
                href="#contact"
                className="btn-secondary border-primary-400 text-primary-100 hover:bg-primary-900/50"
              >
                Request a Quote
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-col sm:flex-row gap-8 mt-12">
              <div>
                <div className="text-4xl font-bold text-primary-300">4.9★</div>
                <p className="text-gray-400">Customer Rating</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-300">Licensed</div>
                <p className="text-gray-400">& Fully Insured</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-300">24/7</div>
                <p className="text-gray-400">Emergency Service</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="hidden md:block relative">
            <div className="bg-gradient-to-br from-primary-400/20 to-transparent rounded-2xl p-12 border border-primary-400/30">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-dark-800 rounded-xl p-6 border border-primary-400/20 hover:border-primary-400/50 transition-colors">
                  <Zap className="text-primary-400 mb-3" size={28} />
                  <p className="text-sm font-semibold">Wiring</p>
                </div>
                <div className="bg-dark-800 rounded-xl p-6 border border-primary-400/20 hover:border-primary-400/50 transition-colors">
                  <Zap className="text-primary-400 mb-3" size={28} />
                  <p className="text-sm font-semibold">Repairs</p>
                </div>
                <div className="bg-dark-800 rounded-xl p-6 border border-primary-400/20 hover:border-primary-400/50 transition-colors">
                  <Zap className="text-primary-400 mb-3" size={28} />
                  <p className="text-sm font-semibold">Panels</p>
                </div>
                <div className="bg-dark-800 rounded-xl p-6 border border-primary-400/20 hover:border-primary-400/50 transition-colors">
                  <Zap className="text-primary-400 mb-3" size={28} />
                  <p className="text-sm font-semibold">Commercial</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
