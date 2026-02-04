'use client'

import { useState, FormEvent, ChangeEvent } from 'react'
import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react'

interface FormData {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

interface FormErrors {
  [key: string]: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }))
    }
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    // In a real app, you would send this data to a backend
    // For now, we'll just show success message
    setSubmitted(true)
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    })

    // Reset success message after 5 seconds
    setTimeout(() => {
      setSubmitted(false)
    }, 5000)
  }

  const services = [
    'Residential Wiring',
    'Commercial Electrical',
    'Emergency Repairs',
    'Panel Upgrades',
    '24/7 Service',
    'Other',
  ]

  return (
    <section id="contact" className="py-20 md:py-32 bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-header">Get In Touch</h2>
          <p className="section-subtitle mx-auto">
            Have questions? Need a quote? We&apos;re here to help. Contact us today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-dark-900 mb-8">Contact Information</h3>

            {/* Phone */}
            <div className="flex gap-4 mb-8">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary-100">
                  <Phone className="text-primary-600" size={24} />
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-dark-900 mb-1">Phone</h4>
                <a
                  href="tel:(647)461-1406"
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  (647) 461-1406
                </a>
                <p className="text-dark-600 text-sm">Available 24/7 for emergencies</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4 mb-8">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary-100">
                  <Mail className="text-primary-600" size={24} />
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-dark-900 mb-1">Email</h4>
                <a
                  href="mailto:info@lightman.com"
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  info@lightman.com
                </a>
                <p className="text-dark-600 text-sm">We respond within 24 hours</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary-100">
                  <MapPin className="text-primary-600" size={24} />
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-dark-900 mb-1">Location</h4>
                <p className="text-dark-600 leading-relaxed">
                  250 Sunny Meadow Blvd #5<br />
                  Brampton, ON L6R 3Y6<br />
                  Canada
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-12 pt-8 border-t border-dark-200">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl font-bold text-primary-600">4.9★</div>
                  <p className="text-sm text-dark-600">Customer Rating</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary-600">24/7</div>
                  <p className="text-sm text-dark-600">Emergency Service</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                <div className="flex justify-center mb-4">
                  <CheckCircle className="text-green-600" size={48} />
                </div>
                <h4 className="text-xl font-bold text-green-900 mb-2">
                  Thank You!
                </h4>
                <p className="text-green-700 mb-4">
                  Your message has been received. We&apos;ll contact you within 24 hours.
                </p>
                <p className="text-sm text-green-600">
                  In the meantime, feel free to call us at (647) 461-1406
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-dark-900 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={`input-field ${errors.name ? 'border-red-500 focus:ring-red-500' : ''}`}
                  />
                  {errors.name && (
                    <p className="text-red-600 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-dark-900 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={`input-field ${errors.email ? 'border-red-500 focus:ring-red-500' : ''}`}
                  />
                  {errors.email && (
                    <p className="text-red-600 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-dark-900 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 123-4567"
                    className={`input-field ${errors.phone ? 'border-red-500 focus:ring-red-500' : ''}`}
                  />
                  {errors.phone && (
                    <p className="text-red-600 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>

                {/* Service */}
                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-dark-900 mb-2">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`input-field ${errors.service ? 'border-red-500 focus:ring-red-500' : ''}`}
                  >
                    <option value="">Select a service...</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="text-red-600 text-sm mt-1">{errors.service}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-dark-900 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    rows={5}
                    className={`input-field ${errors.message ? 'border-red-500 focus:ring-red-500' : ''}`}
                  />
                  {errors.message && (
                    <p className="text-red-600 text-sm mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="btn-primary bg-primary-600 hover:bg-primary-700 w-full"
                >
                  Send Message
                </button>

                <p className="text-sm text-dark-500 text-center">
                  We respect your privacy. Your information is secure.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
