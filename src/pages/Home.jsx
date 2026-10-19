import { Fragment, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Button, Chip, Display, Icon, SectionHead, Sticker } from '../components/ui'
import Faq from '../components/Faq'
import { projects, studioProjects } from '../data/projects'
import { EMAIL, FAQS, whatsappLink } from '../data/site'

const CLIENTS = [
  { name: 'WorkSync Africa', weight: 700 },
  { name: 'Sunflex Ride', weight: 800 },
  { name: 'Tycoon', weight: 800 },
  { name: 'AgroMart', weight: 700 },
  { name: 'Novastrum', weight: 600 },
  { name: 'folio', serif: true },
  { name: 'D.O Naija Cargo', weight: 700 },
  { name: 'AW3D', weight: 800, desktopOnly: true },
]

const STEPS = [
  {
    title: 'Understand',
    text: 'Interviews, audits and constraint-gathering to find the real problem before touching a screen.',
    short: 'Interviews, audits and constraints to find the real problem first.',
    tone: 'sage',
    icon: '/assets/step-understand.svg',
  },
  {
    title: 'Structure',
    text: 'Information architecture and flows mapped out so the product logic holds before it’s styled.',
    short: 'Information architecture and flows, so the logic holds before styling.',
    tone: 'teal',
    icon: '/assets/step-structure.svg',
  },
  {
    title: 'Design',
    text: 'High-fidelity screens and a component system, tuned for the details that make things feel obvious.',
    short: 'High-fidelity screens and a component system tuned for detail.',
    tone: 'ink',
    icon: '/assets/step-design.svg',
  },
  {
    title: 'Refine',
    text: 'Usability testing and iteration loops that keep polishing after the first version ships.',
    short: 'Usability testing and iteration that keeps polishing after launch.',
    tone: 'teal',
    icon: '/assets/step-refine.svg',
  },
]

const STRENGTHS = [
  { title: 'Product thinking first', text: 'I start with the problem, the users and the constraints — so the screens solve the right thing.', tone: 'sage', icon: '/assets/why-1.svg' },
  { title: 'Design systems that scale', text: 'Tokens, components and variants your team can extend without breaking consistency.', tone: 'teal', icon: '/assets/why-2.svg' },
  { title: 'Mobile & web', text: 'Native-feeling mobile apps, data-heavy dashboards and marketing sites that convert.', tone: 'ink', icon: '/assets/why-3.svg' },
  { title: 'Dev-ready handoff', mobileTitle: 'Dev-ready handoff (React, HTML, CSS)', text: 'Clean files, documented specs and a designer who also writes React, HTML and CSS.', tone: 'teal', icon: '/assets/why-4.svg' },
  { title: 'Research-led', mobileTitle: 'Research-led decisions', text: 'Interviews, audits and usability testing keep decisions grounded in real behaviour.', tone: 'sage', icon: '/assets/why-5.svg' },
  { title: 'Brand + UI together', text: 'Visual identity and product UI from the same hands, so the brand holds across every screen.', tone: 'teal', icon: '/assets/why-6.svg' },
]

const EXPERIENCE = [
  { company: 'Sunflex Ride', role: 'Lead UX/UI Designer', dates: 'Jan 2026 — now', dot: 'sage' },
  { company: 'Tycoon', role: 'UX/UI Designer & Brand Specialist', dates: 'Jan 2026 — now', dot: 'teal' },
  { company: 'WorkSyncAfrica', role: 'UX/UI Designer & Frontend Developer', dates: 'Jun 2026 — now', dot: 'ink' },
  { company: 'Agro Mark', role: 'Lead UX/UI Designer · Project', dates: 'Nov 2025 — now', dot: 'teal' },
  { company: 'D.O. Naija Cargo', role: 'Frontend Developer & UI Implementer · Project', dates: 'Mar 2026 — now', dot: 'sage' },
]

const SERVICES = [
  ['UI/UX design', 'Mobile app design', 'Web app design', 'Design systems'],
  ['Brand identity & visual design', 'Frontend development', 'Full product (design + build)', 'Prototyping & UX research'],
]
const SERVICES_SHORT = ['UI/UX & mobile app design', 'Web apps & design systems', 'Brand identity', 'Frontend & full product']

// Headline words, revealed one by one. `br` marks the desktop-only line break.
const HERO_WORDS = [
  { text: 'Product' },
  { text: 'design', br: true },
  { text: 'that' },
  { text: 'feels' },
  { text: 'obvious.', serif: true },
]

// Nudges the illustration toward the pointer (mouse/trackpad only).
function usePointerParallax(strength = 14) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    const canHover = window.matchMedia('(pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!el || !canHover || reduced) return

    let frame = 0
    const onMove = (e) => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect()
        const x = (e.clientX - r.left) / r.width - 0.5
        const y = (e.clientY - r.top) / r.height - 0.5
        el.style.setProperty('--px', `${(x * strength).toFixed(1)}px`)
        el.style.setProperty('--py', `${(y * strength).toFixed(1)}px`)
      })
    }
    const onLeave = () => {
      cancelAnimationFrame(frame)
      el.style.setProperty('--px', '0px')
      el.style.setProperty('--py', '0px')
    }
    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerleave', onLeave)
    return () => {
      cancelAnimationFrame(frame)
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerleave', onLeave)
    }
  }, [strength])
  return ref
}

function Hero() {
  const sectionRef = usePointerParallax()
  const fullTitle = HERO_WORDS.map((w) => w.text).join(' ')
  // Delay (in steps of ~90ms) for the elements that follow the headline.
  const after = HERO_WORDS.length + 1

  return (
    <section className="hero" ref={sectionRef}>
      <div className="hero__copy">
        <div className="availability hero-in" style={{ '--i': 0 }}>
          <img src="/assets/avail-dots.svg" width="68" height="28" alt="" aria-hidden="true" className="availability__dots" />
          <span>Available for new projects</span>
          <img src="/assets/avail-ellipse.svg" width="8" height="8" alt="" aria-hidden="true" className="availability__pulse" />
        </div>
        <h1 className="display display--hero" aria-label={fullTitle}>
          {HERO_WORDS.map((w, i) => {
            const word = (
              <span className="hero-word" style={{ '--i': i + 1 }} aria-hidden="true">
                {w.text}
              </span>
            )
            return (
              <Fragment key={w.text}>
                {w.serif ? <em>{word}</em> : word}
                {i < HERO_WORDS.length - 1 && ' '}
                {w.br && <br className="br-desk" />}
              </Fragment>
            )
          })}
        </h1>
        <p className="hero__lede hero-in" style={{ '--i': after }}>
          I'm Damilola — a product designer in Abuja helping startups turn ambiguous ideas into apps, dashboards and sites people use without thinking twice.
        </p>
        <div className="hero__actions hero-in" style={{ '--i': after + 1 }}>
          <Button to="/#work" icon="arrow-white-lg">See my work</Button>
          <Button to="/cv" variant="light" icon="arrow-ink">View my CV</Button>
        </div>
        <p className="hero__note hero-in" style={{ '--i': after + 2 }}>
          Currently designing for Sunflex Ride, Tycoon and WorkSyncAfrica
        </p>
      </div>
      <div className="hero__visual">
        <div className="hero__parallax">
          <div className="hero__float">
            <picture>
              <source media="(max-width: 720px)" srcSet="/assets/hero-visual-mobile.png" />
              <img
                src="/assets/hero-visual.png"
                alt="Device mockups of the folio bookstore, Novastrum trading app and WorkSyncAfrica hiring app"
                width="692"
                height="651"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  )
}

function WorkedWith() {
  return (
    <section className="clients" aria-label="Products I’ve designed for">
      <p className="clients__label">Products I’ve designed for</p>
      <ul className="clients__list">
        {CLIENTS.map((c) => (
          <li
            key={c.name}
            className={`${c.serif ? 'clients__serif' : ''}${c.desktopOnly ? ' d-only' : ''}`}
            style={c.weight ? { fontWeight: c.weight } : undefined}
          >
            {c.name}
          </li>
        ))}
      </ul>
    </section>
  )
}

function Process() {
  return (
    <section className="section" id="process">
      <SectionHead
        parts={['The way product design\n', 'should’ve', ' been done.']}
        sub="A repeatable process that moves from ambiguity to a shipped interface."
        className="section-head--mobile-nosub"
      />
      <ol className="steps">
        {STEPS.map((s, i) => (
          <li key={s.title} className="step">
            <div className="step__top">
              <span className={`badge badge--${s.tone}`}>
                <Icon src={s.icon} size={26} className="d-only" />
                <span className="m-only">0{i + 1}</span>
              </span>
              <span className="step__num d-only">0{i + 1}</span>
            </div>
            <div className="step__body">
              <h3 className="step__title">{s.title}</h3>
              <p className="step__text">
                <span className="d-only">{s.text}</span>
                <span className="m-only">{s.short}</span>
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

function WorkCard({ project }) {
  const { card, layout, slug, name } = project
  const to = `/work/${slug}`
  return (
    <article className={`work-card work-card--${layout}`}>
      <Link to={to} className="work-card__media" tabIndex={-1} aria-hidden="true">
        <img src={card.image} alt="" loading="lazy" />
      </Link>
      <div className="work-card__meta">
        <div className="work-card__head">
          <h3 className="work-card__title">
            <Link to={to}>{name}</Link>
          </h3>
          <Link to={to} className="round-btn" aria-label={`Open ${name} case study`}>
            <Icon name="open" size={20} />
          </Link>
        </div>
        <p className="work-card__desc">
          <span className="d-only">{card.description}</span>
          <span className="m-only">{card.short}</span>
        </p>
        <div className="work-card__foot">
          <div className="chips">
            {card.chips.map((c) => (
              <span key={c.label} className={c.desktopOnly ? 'd-only' : undefined}>
                <Chip tone={c.tone}>{c.label}</Chip>
              </span>
            ))}
          </div>
          {card.href ? (
            <a className="work-card__aside d-only" href={card.href} target="_blank" rel="noreferrer">{card.meta}</a>
          ) : (
            <span className="work-card__aside d-only">{card.meta}</span>
          )}
        </div>
      </div>
    </article>
  )
}

function SelectedWork() {
  const [folio, worksync, bombay, novastrum, nexus, donaija] = projects
  return (
    <section className="section" id="work">
      <SectionHead
        parts={['Recent work that ', 'ships.']}
        sub="Six recent projects across dashboards, mobile products and marketing sites."
      />
      <div className="work-grid">
        <WorkCard project={folio} />
        <div className="work-row">
          <WorkCard project={worksync} />
          <WorkCard project={bombay} />
        </div>
        <WorkCard project={novastrum} />
        <div className="work-row">
          <WorkCard project={nexus} />
          <WorkCard project={donaija} />
        </div>
      </div>
      <div className="studio d-only">
        {studioProjects.map((p) => (
          <div key={p.name} className={`studio__card tone--${p.tone}`}>
            <div className="studio__head">
              <h3>{p.name}</h3>
              <span className="chip chip--ink chip--xs">Case study soon</span>
            </div>
            <p>{p.description}</p>
            <p className="studio__role">{p.role}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Strengths() {
  return (
    <section className="section">
      <SectionHead
        parts={['One designer,\n', 'end to end.']}
        sub="From the first interview to developer handoff — without losing the thread."
        className="section-head--mobile-nosub"
      />
      <ul className="strengths">
        {STRENGTHS.map((s) => (
          <li key={s.title} className="strength">
            <span className={`badge badge--${s.tone} badge--md`}>
              <Icon src={s.icon} size={24} className="d-only" />
              <Icon src={s.tone === 'ink' ? '/assets/icon-check-white-16.svg' : '/assets/icon-check-ink-16.svg'} size={16} className="m-only" />
            </span>
            <h3 className="strength__title">
              <span className="d-only">{s.title}</span>
              <span className="m-only">{s.mobileTitle || s.title}</span>
            </h3>
            <p className="strength__text d-only">{s.text}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

function About() {
  return (
    <section className="section about" id="about">
      <div className="about__top">
        <div className="portrait">
          <picture>
            <source srcSet="/assets/damilola-portrait.webp" type="image/webp" />
            <img
              className="portrait__photo"
              src="/assets/damilola-portrait.jpg"
              alt="Damilola Olowo"
              width="853"
              height="1280"
              loading="lazy"
            />
          </picture>
          <Sticker src="/assets/sticker-smile-about.svg" size={96} rotate={10} className="portrait__sticker" />
          <span className="portrait__tag d-only">Damilola Olowo · Abuja</span>
        </div>
        <div className="about__card">
          <Display parts={['Hi, I’m ', 'Damilola.']} className="display--about" />
          <p className="about__bio">
            I’m the designer behind Design by Dami — a one-person studio focused on interfaces that get out of the way, for startups who need product design that ships, not just looks good in a deck.
          </p>
          <div className="chips chips--wrap d-only">
            <Chip tone="sage" size="md">Based in Abuja, Nigeria</Chip>
            <Chip tone="teal" size="md">Product design + design systems</Chip>
            <Chip tone="ink" size="md">Figma · Framer · React</Chip>
            <Chip tone="teal" size="md">Taking on select projects</Chip>
          </div>
          <div className="about__certs d-only">
            <p className="about__certs-label">Certifications</p>
            <p>Google UX Design · Meta UI/UX · IBM Design Thinking · IDF UI Design &amp; UX Research · Adobe XD Essentials</p>
          </div>
          <Button to="/cv" size="md" icon="arrow-white" className="d-only">View my CV</Button>
        </div>
      </div>
      <ul className="experience">
        {EXPERIENCE.map((e) => (
          <li key={e.company} className="experience__row">
            <span className={`dot dot--${e.dot} d-only`} aria-hidden="true" />
            <span className="experience__company">{e.company}</span>
            <span className="experience__role">{e.role}</span>
            <span className="experience__dates">{e.dates}</span>
            <span className="experience__where d-only">Remote</span>
          </li>
        ))}
      </ul>
      <Button to="/cv" variant="dark" size="md" icon="arrow-white" block className="m-only">View my CV</Button>
    </section>
  )
}

function WorkTogether() {
  return (
    <section className="section">
      <SectionHead
        parts={['One project,\n', 'endless possibilities.']}
        sub="Tell me what you’re building and how you’d like to work together."
        className="section-head--mobile-nosub"
      />
      <div className="together">
        <div className="together__main">
          <Chip tone="sage" bold>Now booking projects</Chip>
          <h3 className="together__title">Start a project</h3>
          <p className="together__lede">
            <span className="d-only">Budgets from under $500 to $10k+ — share yours and your timeline, and I’ll shape the scope around it.</span>
            <span className="m-only">Budgets from under $500 to $10k+ — share yours and your timeline.</span>
          </p>
          <div className="together__services">
            <p className="together__label d-only">What I can take on</p>
            <div className="together__cols d-only">
              {SERVICES.map((col, i) => (
                <ul key={i}>
                  {col.map((s) => (
                    <li key={s}><span className="tick"><Icon src="/assets/icon-check.svg" size={12} /></span>{s}</li>
                  ))}
                </ul>
              ))}
            </div>
            <ul className="together__short m-only">
              {SERVICES_SHORT.map((s) => (
                <li key={s}><span className="tick"><Icon src="/assets/icon-check.svg" size={12} /></span>{s}</li>
              ))}
            </ul>
          </div>
          <Button to="/start-a-project" variant="sage" icon="arrow-ink">Start a project</Button>
        </div>
        <div className="together__side">
          <div className="together__chat">
            <h3>Prefer a quick chat?</h3>
            <p>
              <span className="d-only">The project form opens WhatsApp with your details pre-filled, so you can send it straight to me.</span>
              <span className="m-only">The project form opens WhatsApp with your details pre-filled.</span>
            </p>
            <Button to={whatsappLink('Hi Dami, I’d like to chat about a project.')} size="md" icon="arrow-white">
              Message on WhatsApp
            </Button>
          </div>
          <div className="together__email d-only">
            <h3>Rather email?</h3>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <p>Based in Abuja, working with teams everywhere.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <WorkedWith />
      <Process />
      <SelectedWork />
      <Strengths />
      <About />
      <WorkTogether />
      <section className="section section--faq" id="faq">
        <SectionHead parts={['Frequently asked ', 'questions']} />
        <Faq items={FAQS} />
      </section>
    </>
  )
}
