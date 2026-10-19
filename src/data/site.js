// Contact details and links shared across the site.
export const EMAIL = 'info@damidesigns.com'

// International format without "+" or spaces (wa.me requirement).
export const WHATSAPP_NUMBER = '2349040071843'

// Served from public/ — exported from the "CV / A4 print" frames in Figma.
export const CV_PDF_URL = '/Damilola-Olowo-CV.pdf'

// Entries without an href are hidden in the footer until a URL is added.
export const SOCIALS = [
  { label: 'Instagram', short: 'Instagram', href: 'https://www.instagram.com/damidesign__/' },
  { label: 'Twitter / X', short: 'X', href: 'https://x.com/damidesign_' },
]

export const NAV_LINKS = [
  { label: 'Work', to: '/#work' },
  { label: 'How I work', to: '/#process' },
  { label: 'About', to: '/#about' },
  { label: 'FAQ', to: '/#faq' },
]

export const FAQS = [
  {
    q: 'What kinds of projects do you take on?',
    a: 'UI/UX for mobile and web apps, design systems, brand identity, and full products from design through frontend build.',
  },
  {
    q: 'Can you also build what you design?',
    a: 'Yes. I write React, HTML and CSS, so I can take a design all the way to a responsive frontend — or hand clean, documented files to your developers.',
  },
  {
    q: 'Where are you based?',
    a: 'Abuja, Nigeria. I work remotely with teams everywhere, asynchronously or with overlapping hours.',
  },
  {
    q: 'What tools do you use?',
    a: 'Figma for design systems and prototyping, Framer for marketing sites and React for builds — plus AI-assisted tools like Claude and Figma Make to explore ideas faster.',
  },
  {
    q: 'How do we get started?',
    a: 'Fill in the project form. It opens WhatsApp with your details pre-filled; I’ll reply to shape the scope, timeline and budget with you.',
  },
]

export function whatsappLink(text) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
}
