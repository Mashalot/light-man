import { Award, Shield, Clock, Users, CheckCircle, Zap } from 'lucide-react'

const reasons = [
  {
    icon: Award,
    title: 'Professional Expertise',
    description: 'Years of experience in residential and commercial electrical work. Certified and trained professionals.',
  },
  {
    icon: Shield,
    title: 'Licensed & Insured',
    description: 'Full licensing and insurance coverage. Every job backed by comprehensive protection and guarantees.',
  },
  {
    icon: CheckCircle,
    title: 'Reliable Service',
    description: 'Dependable work you can count on. On-time, every time. No surprise charges or delays.',
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Emergency services available day or night. We\'re here when you need us most.',
  },
  {
    icon: Users,
    title: 'Customer Focused',
    description: 'Your satisfaction is our priority. Transparent communication and detailed project planning.',
  },
  {
    icon: Zap,
    title: 'Modern Solutions',
    description: 'Latest electrical technology and techniques. Energy-efficient and code-compliant installations.',
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 md:py-32 bg-gradient-to-br from-dark-50 to-primary-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-header">Why Choose Light Man</h2>
          <p className="section-subtitle mx-auto">
            Trusted by hundreds of satisfied customers in Brampton and surrounding areas.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-5xl font-bold text-primary-600 mb-2">4.9★</div>
            <p className="text-dark-600 font-semibold">Average Rating</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-primary-600 mb-2">500+</div>
            <p className="text-dark-600 font-semibold">Projects Completed</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-primary-600 mb-2">100%</div>
            <p className="text-dark-600 font-semibold">Satisfaction Guarantee</p>
          </div>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 border border-dark-200 hover:border-primary-300 hover:shadow-xl transition-all duration-300 group"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-500 transition-colors">
                  <Icon className="text-primary-600 group-hover:text-white transition-colors" size={28} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-dark-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-dark-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-primary-600 text-white rounded-xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready for Professional Electrical Work?</h3>
          <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote. Let&apos;s discuss your electrical needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:(647)461-1406"
              className="btn-primary bg-white text-primary-600 hover:bg-gray-100"
            >
              Call Now
            </a>
            <a
              href="#contact"
              className="btn-secondary border-white text-white hover:bg-primary-700/50"
            >
              Request Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
