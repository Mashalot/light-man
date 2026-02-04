import { Lightbulb, Zap, AlertCircle, Wrench, Clock } from 'lucide-react'

const services = [
  {
    icon: Lightbulb,
    title: 'Residential Wiring',
    description: 'Professional installation and repair of residential electrical systems. From new construction to renovations.',
  },
  {
    icon: Zap,
    title: 'Commercial Electrical',
    description: 'Complete commercial electrical solutions for businesses. Reliable systems for modern workplaces.',
  },
  {
    icon: AlertCircle,
    title: 'Emergency Repairs',
    description: 'Fast response 24/7 emergency electrical repairs. Same-day service available for urgent issues.',
  },
  {
    icon: Wrench,
    title: 'Panel Upgrades',
    description: 'Electrical panel upgrades to meet modern demands. Increase capacity safely and efficiently.',
  },
  {
    icon: Clock,
    title: '24/7 Service',
    description: 'Always available when you need us. Day, night, weekends, and holidays.',
  },
  {
    icon: Lightbulb,
    title: 'Code Compliance',
    description: 'All work meets current electrical codes and standards. Safe installations you can trust.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-header">Our Services</h2>
          <p className="section-subtitle mx-auto">
            Comprehensive electrical solutions for residential and commercial clients. Licensed, insured, and ready to help.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 border border-dark-200 hover:border-primary-300 hover:shadow-xl transition-all duration-300 group"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-500 transition-colors">
                  <Icon className="text-primary-600 group-hover:text-white transition-colors" size={32} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-dark-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-dark-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-dark-700 mb-6">
            Need a specific service not listed? Contact us for a custom solution.
          </p>
          <a
            href="#contact"
            className="btn-primary bg-primary-600 hover:bg-primary-700"
          >
            Get a Free Quote
          </a>
        </div>
      </div>
    </section>
  )
}
