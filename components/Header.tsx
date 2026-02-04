'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Projects' },
    { href: '#why-us', label: 'Why Us' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="bg-dark-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="#" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center font-bold text-lg group-hover:bg-primary-400 transition-colors">
              L
            </div>
            <span className="font-bold text-xl hidden sm:inline">Light Man</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-primary-400 transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <a
            href="tel:(647)461-1406"
            className="hidden sm:inline-block btn-primary bg-primary-500 hover:bg-primary-600"
          >
            Call Now
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 hover:bg-dark-800 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-dark-700">
            <div className="flex flex-col space-y-4 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-300 hover:text-primary-400 transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:(647)461-1406"
                className="btn-primary bg-primary-500 hover:bg-primary-600 w-full text-center"
              >
                Call Now
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
