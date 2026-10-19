// Case-study content. `tone` maps to the chip/pill palette: sage | teal | ink.
// Card chips marked `desktopOnly` are dropped from the mobile card, as in the mobile frames.
// Images are flattened renders of the Figma mockups (public/assets).

export const projects = [
  {
    slug: 'folio',
    name: 'folio — Ebook & Audiobook Store',
    title: ['folio — Ebook & ', 'Audiobook Store'],
    layout: 'wide',
    card: {
      image: '/assets/work-folio.png',
      description:
        'A calm, editorial bookstore for ebooks and audiobooks — personal picks, reading streaks and goals, daily deals, an Unlimited subscription, an in-browser reader and a full admin console behind it.',
      short: 'A calm, editorial bookstore with personal picks, reading goals, Unlimited and a full admin.',
      chips: [
        { label: 'Web app', tone: 'sage' },
        { label: 'E-commerce', tone: 'teal' },
        { label: 'Admin + design system', tone: 'ink', desktopOnly: true },
      ],
      meta: 'Product design · 2026',
    },
    tags: [
      { label: 'Web app', tone: 'sage' },
      { label: 'E-commerce', tone: 'teal' },
      { label: 'Admin + design system', tone: 'ink' },
    ],
    lede: 'A calm, editorial bookstore for ebooks and audiobooks — personal picks, reading streaks and goals, daily deals, an Unlimited subscription, an in-browser reader and a full admin console behind it.',
    facts: [
      ['Role', 'Product designer'],
      ['Platform', 'Web · Admin'],
      ['Year', '2026'],
      ['Scope', 'Store, admin, design system'],
    ],
    brief:
      'Turn a cluttered ebook search page into a calm, editorial store people enjoy browsing — and give the team the admin tools to run it.',
    approach:
      'I designed around the reading journey rather than the catalogue: discover, sample, buy, read. Covers carry the colour, the interface stays quiet, and every page reuses one set of components.',
    designedTitle: ['What I ', 'designed'],
    designed: [
      'Discover home with streaks and reading goals',
      'Search, seven category pages and empty states',
      'Book detail, in-browser reader and audiobook player',
      'Sign up, onboarding and My library',
      'Basket, checkout and purchase complete',
      '12-screen admin console and a design system',
    ],
    highlights: [
      ['Personal discovery', 'Continue reading, weekly picks and moods put the next book one tap away.'],
      ['Unlimited, made clear', 'Every card shows when a book is free with the subscription.'],
      ['Admin that runs the store', 'Catalogue, deals, orders, reviews and author payouts in one console.'],
    ],
    images: {
      hero: '/assets/cs-folio-hero.png',
      heroHeight: 800,
      details: ['/assets/cs-folio-d1.png', '/assets/cs-folio-d2.png'],
      next: '/assets/cs-folio-next.png',
    },
  },
  {
    slug: 'worksyncafrica',
    name: 'WorkSyncAfrica',
    title: ['WorkSync', 'Africa'],
    layout: 'half',
    card: {
      image: '/assets/work-worksync.png',
      description:
        'A trusted hiring platform connecting clients with verified African artisans and creatives — live job tracking, vetted profiles and secure bookings.',
      short: 'A trusted hiring platform for verified African artisans and creatives.',
      chips: [
        { label: 'Mobile app', tone: 'teal' },
        { label: 'Marketplace', tone: 'ink' },
      ],
      meta: 'UX/UI · Frontend',
    },
    tags: [
      { label: 'Mobile app', tone: 'teal' },
      { label: 'Marketplace', tone: 'ink' },
      { label: 'Hiring', tone: 'teal' },
    ],
    lede: 'A trusted hiring platform connecting clients with verified African artisans and creatives — live job tracking, vetted profiles and secure bookings in one app.',
    facts: [
      ['Role', 'UX/UI designer & frontend developer'],
      ['Platform', 'iOS & Android'],
      ['Year', '2026'],
      ['Team', 'Remote, cross-functional'],
    ],
    brief:
      'Help clients across Africa find and hire artisans and creatives they can trust — and follow each job from booking to done.',
    approach:
      'Trust had to be visible on every screen: verification badges, ratings and job history up front, and a live job card that shows exactly where things stand. Usability testing shaped each iteration.',
    designedTitle: ['What I ', 'designed'],
    designed: [
      'Home with skill search and categories',
      'Technical and creative artisan categories',
      'Verified artisan profiles',
      'Live job tracking',
      'Secure booking and escrow messaging',
      'Usability-tested flows and design standards',
    ],
    highlights: [
      ['Verified by default', 'Badges, ratings and job counts sit on every profile and card.'],
      ['Live job tracking', 'A single card shows progress, step and arrival time.'],
      ['Secure bookings', 'Clear booking steps with payment held safely until the job is done.'],
    ],
    images: {
      hero: '/assets/cs-worksync-hero.png',
      heroHeight: 740,
      details: ['/assets/cs-worksync-d1.png', '/assets/cs-worksync-d2.png'],
      next: '/assets/cs-worksync-next.png',
    },
  },
  {
    slug: 'bombay',
    name: 'Bombay Food & Loyalty',
    title: ['Bombay Food & ', 'Loyalty'],
    layout: 'half',
    card: {
      image: '/assets/work-bombay.png',
      description:
        'A café ordering app built around a stamp-based loyalty card — click & collect, catering requests and gift cards from one home screen.',
      short: 'Café ordering built around a stamp-based loyalty card.',
      chips: [
        { label: 'Mobile app', tone: 'ink' },
        { label: 'Food & drink', tone: 'teal' },
      ],
      meta: 'UI/UX design',
    },
    tags: [
      { label: 'Mobile app', tone: 'ink' },
      { label: 'Food & drink', tone: 'teal' },
      { label: 'Loyalty', tone: 'sage' },
    ],
    lede: 'A café ordering app built around a stamp-based loyalty card — click & collect, catering requests and gift cards, all from one home screen.',
    facts: [
      ['Role', 'UI/UX designer'],
      ['Platform', 'iOS & Android'],
      ['Type', 'Food & loyalty'],
      ['Scope', 'Ordering + rewards'],
    ],
    brief: 'Give a café’s regulars a reason to come back — and make ordering ahead as quick as a coffee run.',
    approach:
      'The stamp card sits at the top of the home screen so progress is always visible. Ordering, catering and gift cards are one tap below it, and popular items are ready to add straight away.',
    designedTitle: ['What I ', 'designed'],
    designed: [
      'Home with stamp-based loyalty card',
      'Click & collect ordering',
      'Catering requests',
      'Digital gift cards',
      'Menu and popular items',
      'Order-ready notifications',
    ],
    highlights: [
      ['Progress you can see', 'Stamps fill in as you order, with the reward always in view.'],
      ['One-tap actions', 'Collect, catering, gift cards and menu in a simple grid.'],
      ['Order-ready alerts', 'A clear notification when your order is ready to collect.'],
    ],
    images: {
      hero: '/assets/cs-bombay-hero.png',
      heroHeight: 740,
      details: ['/assets/cs-bombay-d1.png', '/assets/cs-bombay-d2.png'],
      next: '/assets/cs-bombay-next.png',
    },
  },
  {
    slug: 'novastrum',
    name: 'Novastrum Trading Assistant',
    title: ['Novastrum ', 'Trading Assistant'],
    layout: 'wide',
    card: {
      image: '/assets/work-novastrum.png',
      description:
        'An AI trading assistant for forex, gold and crypto — paper trading first, a plain-English reason for every trade, hard risk caps and a one-tap emergency stop. Landing page, waitlist, mobile app and admin.',
      short: 'An AI trading assistant — paper first, plain-English trades, hard risk caps.',
      chips: [
        { label: 'Mobile app', tone: 'teal' },
        { label: 'Landing page', tone: 'sage', desktopOnly: true },
        { label: 'Fintech', tone: 'teal' },
      ],
      meta: 'nova-strum.app ↗',
      href: 'https://nova-strum.app',
    },
    tags: [
      { label: 'Mobile app', tone: 'teal' },
      { label: 'Landing page', tone: 'sage' },
      { label: 'Fintech', tone: 'teal' },
    ],
    lede: 'An AI trading assistant for forex, gold and crypto — paper trading first, a plain-English reason for every trade, hard risk caps and a one-tap emergency stop.',
    facts: [
      ['Role', 'Product designer'],
      ['Platform', 'iOS · Web · Admin'],
      ['Year', '2026'],
      ['Live', 'nova-strum.app', 'https://nova-strum.app'],
    ],
    brief:
      'Make automated forex and crypto trading feel safe and understandable — for people who don’t trust black-box bots.',
    approach:
      'Paper trading comes first, every trade gets a plain-English explanation, and risk limits and the emergency stop are never more than a tap away. The bot trades; it never holds anyone’s money.',
    designedTitle: ['What I ', 'designed'],
    designed: [
      'Onboarding, risk profile and broker connection',
      'Home, trading engine and activity',
      '“Why this trade” explanations and track record',
      'News Shield and paper-to-live switch',
      'Landing page and multi-step waitlist',
      'Admin dashboard and design system',
    ],
    highlights: [
      ['Paper first', 'Every account starts in paper mode with real prices and no real money at risk.'],
      ['Reasons, not black boxes', 'Each trade explains the setup, the entry and how it closed.'],
      ['Always in control', '1% default risk, a 2% hard cap and a hold-to-stop button.'],
    ],
    images: {
      hero: '/assets/cs-novastrum-hero.png',
      heroHeight: 800,
      details: ['/assets/cs-novastrum-d1.png', '/assets/cs-novastrum-d2.png'],
      next: '/assets/cs-novastrum-next.png',
    },
  },
  {
    slug: 'nexuscare',
    name: 'NexusCare',
    title: ['Nexus', 'Care'],
    layout: 'half',
    card: {
      image: '/assets/work-nexuscare.png',
      description:
        'A landing page for a clinical efficiency platform — AI-driven documentation and a marketplace for clinical talent, with pathways for hospitals and health workers.',
      short: 'A landing page for AI documentation and clinical talent.',
      chips: [
        { label: 'Landing page', tone: 'sage' },
        { label: 'HealthTech', tone: 'teal' },
      ],
      meta: 'UI/UX design',
    },
    tags: [
      { label: 'Landing page', tone: 'sage' },
      { label: 'HealthTech', tone: 'teal' },
      { label: 'SaaS', tone: 'ink' },
    ],
    lede: 'A landing page for a clinical efficiency platform — AI-driven documentation and a marketplace for clinical talent, with dual pathways for hospitals and independent health workers.',
    facts: [
      ['Role', 'UI/UX designer'],
      ['Platform', 'Web'],
      ['Type', 'Healthcare SaaS'],
      ['Scope', 'Landing + waitlist'],
    ],
    brief:
      'Explain a two-sided clinical platform — AI documentation for hospitals and a talent marketplace for health workers — on a single page.',
    approach:
      'One headline sets the vision, then the page splits into two clear pathways so each audience finds its own value and its own call to action.',
    designedTitle: ['What I ', 'designed'],
    designed: [
      'Hero and waitlist sign-up',
      'Hospital pathway',
      'Health worker pathway',
      'AI documentation story',
      'Talent marketplace section',
      'Responsive layouts',
    ],
    highlights: [
      ['One vision', '“The Digital Pulse of Modern Healthcare” frames both products at once.'],
      ['Two pathways', 'Hospitals and health workers each get a dedicated route.'],
      ['Waitlist ready', 'A single, clear action captures interest before launch.'],
    ],
    images: {
      hero: '/assets/cs-nexuscare-hero.png',
      heroHeight: 740,
      details: ['/assets/cs-nexuscare-d1.png', '/assets/cs-nexuscare-d2.png'],
      next: '/assets/cs-nexuscare-next.png',
    },
  },
  {
    slug: 'do-naija-cargo',
    name: 'D.O Naija Cargo',
    title: ['D.O Naija ', 'Cargo'],
    layout: 'half',
    card: {
      image: '/assets/work-donaija.png',
      description:
        'Door-to-door shipping from Nigeria to 250+ countries — service booking, shipment tracking and customs clearance support in one platform.',
      short: 'Door-to-door shipping from Nigeria to 250+ countries.',
      chips: [
        { label: 'Website', tone: 'teal' },
        { label: 'Logistics', tone: 'ink' },
      ],
      meta: 'donaijacargo.com ↗',
      href: 'https://donaijacargo.com',
    },
    tags: [
      { label: 'Website', tone: 'teal' },
      { label: 'Logistics', tone: 'ink' },
      { label: 'React + Supabase', tone: 'teal' },
    ],
    lede: 'Door-to-door shipping from Nigeria to 250+ countries — service booking, shipment tracking and customs clearance support in one platform.',
    facts: [
      ['Role', 'Frontend developer & UI implementer'],
      ['Platform', 'Web + mobile web'],
      ['Since', 'March 2026'],
      ['Live', 'donaijacargo.com', 'https://donaijacargo.com'],
    ],
    brief:
      'Make shipping from Nigeria to anywhere feel simple — from booking a pickup to tracking a parcel into the recipient’s hands.',
    approach:
      'Tracking leads the page, a three-step process removes the guesswork, and every service has a clear booking path. I built and deployed the frontend on a React and Supabase backend, matching the UI design closely.',
    designedTitle: ['What I ', 'designed & built'],
    designed: [
      'Homepage with shipment tracking',
      'Booking flow',
      'Three-step how-it-works',
      'Tracking timeline',
      'Customs clearance support',
      'Responsive frontend in React',
    ],
    highlights: [
      ['Track first', 'A tracking field sits right in the hero.'],
      ['Three simple steps', 'Register & book, we pick it up, track & receive.'],
      ['Built, not just designed', 'Frontend shipped on React and Supabase.'],
    ],
    images: {
      hero: '/assets/cs-donaija-hero.png',
      heroHeight: 740,
      details: ['/assets/cs-donaija-d1.png', '/assets/cs-donaija-d2.png'],
      next: '/assets/cs-donaija-next.png',
    },
  },
]

export function getProject(slug) {
  return projects.find((p) => p.slug === slug)
}

export function getNextProject(slug) {
  const i = projects.findIndex((p) => p.slug === slug)
  return projects[(i + 1) % projects.length]
}

export const studioProjects = [
  {
    name: 'Sunflex Ride',
    description: 'Ride-hailing platform — rider onboarding, trip booking and driver-side flows.',
    role: 'Lead UX/UI',
    tone: 'sage',
  },
  {
    name: 'Tycoon',
    description: 'Full visual identity system plus responsive product UI and investor prototypes.',
    role: 'Brand + UI',
    tone: 'teal',
  },
  {
    name: 'AW3D',
    description: 'Interfaces that make 3D web content clear and accessible for non-technical users.',
    role: 'UI/UX',
    tone: 'ink',
  },
]
