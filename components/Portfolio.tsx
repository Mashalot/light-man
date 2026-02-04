import { CheckCircle } from 'lucide-react'

const projects = [
  {
    title: 'Residential Kitchen Renovation',
    description: 'Complete electrical rewiring and upgrades for a modern kitchen renovation in Brampton.',
    category: 'Residential',
    year: 2024,
  },
  {
    title: 'Commercial Office Complex',
    description: 'Full electrical installation for a new 5-story office building with advanced automation systems.',
    category: 'Commercial',
    year: 2024,
  },
  {
    title: 'Home Automation System',
    description: 'Smart home electrical integration including lighting control and power management.',
    category: 'Residential',
    year: 2023,
  },
  {
    title: 'Industrial Panel Upgrade',
    description: 'Complete electrical panel replacement and circuit distribution for manufacturing facility.',
    category: 'Commercial',
    year: 2023,
  },
  {
    title: 'Basement Finishing',
    description: 'Electrical work for finished basement including new circuits and lighting design.',
    category: 'Residential',
    year: 2023,
  },
  {
    title: 'Retail Store Renovation',
    description: 'Comprehensive electrical work for retail space including new fixture installation.',
    category: 'Commercial',
    year: 2023,
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 md:py-32 bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-header">Recent Projects</h2>
          <p className="section-subtitle mx-auto">
            Showcase of our completed work for satisfied residential and commercial clients.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 border border-dark-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300 group"
            >
              {/* Badge */}
              <div className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-sm font-semibold rounded-full mb-4">
                {project.category}
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-dark-900 mb-3 group-hover:text-primary-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-dark-600 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-dark-200">
                <span className="text-sm text-dark-500 font-medium">{project.year}</span>
                <CheckCircle className="text-primary-500" size={20} />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-dark-700 mb-6">
            Ready to see your project completed to excellence?
          </p>
          <a
            href="#contact"
            className="btn-primary bg-primary-600 hover:bg-primary-700"
          >
            Start Your Project Today
          </a>
        </div>
      </div>
    </section>
  )
}
