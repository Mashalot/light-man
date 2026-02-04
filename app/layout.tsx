import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Light Man - Professional Electrical Services in Brampton',
  description: 'Professional electrical contractor in Brampton, ON. Residential wiring, commercial electrical, emergency repairs, and panel upgrades. 24/7 service available. 4.9★ rated.',
  keywords: 'electrician, electrical services, Brampton, residential wiring, commercial electrical',
  openGraph: {
    title: 'Light Man - Professional Electrical Services',
    description: 'Licensed and insured electrician in Brampton, ON',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-white text-dark-900">
        {children}
      </body>
    </html>
  )
}
