import { BackLink, Button, Chip, Display, Icon } from '../components/ui'
import { CV_PDF_URL } from '../data/site'

const CONTACTS = [
  { label: 'Abuja, Kaduna, Nigeria' },
  { label: '09040071843', href: 'tel:+2349040071843' },
  { label: 'info@damidesigns.com', href: 'mailto:info@damidesigns.com' },
  { label: 'damidolowo@gmail.com', href: 'mailto:damidolowo@gmail.com' },
  { label: 'damidesigns.com', href: 'https://damidesigns.com' },
]

const EXPERIENCE = [
  {
    title: 'Lead UX/UI Designer',
    org: 'Sunflex Ride — Remote',
    dates: 'January 2026 – Present',
    points: [
      'Owned the end-to-end design process for user-centric web applications, from initial discovery and wireframing through to final high-fidelity interfaces using Figma.',
      'Leveraged AI-assisted tools including Claude and Figma Make/AI to accelerate rapid prototyping and explore design alternatives, carefully refining and editing outputs to ensure high-quality, user-centric results.',
      'Bridged the gap between design and development by delivering interactive prototypes, scalable component libraries, and developer-ready assets.',
      'Advocated for user-focused design solutions, ensuring pixel-perfect implementation and responsive web components using clean HTML5 and CSS3.',
      'Collaborated closely with project managers and developers in an asynchronous environment to continuously test and iterate designs based on user feedback.',
    ],
  },
  {
    title: 'UX/UI Designer & Brand Specialist',
    org: 'Tycoon — Remote',
    dates: 'January 2026 – Present',
    points: [
      'Designed and optimized responsive, cross-device web interfaces, focusing on intuitive user flows and adherence to best practices in visual design.',
      'Developed and maintained robust digital design systems, ensuring consistency and efficiency across all client deliverables.',
      'Translated complex Figma mockups into structured, semantic frontend code, collaborating smoothly with technical teams.',
    ],
  },
  {
    title: 'UX/UI Designer & Frontend Developer',
    org: 'WorkSyncAfrica — Remote',
    dates: 'June 2026 – Present',
    points: [
      'Led the design of web interfaces for a business applications platform, focusing heavily on user experience, accessibility, and smooth technical implementation.',
      'Conducted usability testing and translated findings into actionable design improvements for complex software solutions.',
    ],
  },
]

const PROJECTS = [
  {
    title: 'Lead UX/UI Designer',
    org: 'Agro Mark — Remote',
    dates: 'November 2025 – Present',
    points: [
      'Developed wireframes, interactive prototypes, and UI templates for a specialized agricultural web platform, focusing on solving specific user workflow problems.',
    ],
  },
  {
    title: 'Frontend Developer & UI Implementer',
    org: 'D.O. Naija Cargo',
    dates: 'March 2026 – Present',
    points: [
      'Built and deployed the frontend interface for a logistics and cargo tracking platform, integrating a React/Supabase backend while maintaining strict adherence to the original UI design.',
    ],
  },
]

const SKILLS = [
  {
    group: 'UX/UI Design',
    tone: 'sage',
    items: ['End-to-End Product Design', 'User Research & Usability Testing', 'Wireframing', 'Rapid Prototyping', 'Design Systems & Component Libraries', 'Interaction Design', 'WCAG Accessibility'],
  },
  {
    group: 'Tools & Technologies',
    tone: 'teal',
    items: ['Figma (Advanced, Design Systems, Figma AI/Make)', 'AI-Assisted Design Tools (Claude, ChatGPT)', 'Framer', 'Adobe XD'],
  },
  {
    group: 'Technical Collaboration',
    tone: 'ink',
    items: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Web Design', 'Design-to-Code Handoff', 'Git/GitHub'],
  },
  {
    group: 'Workflow',
    tone: 'teal',
    items: ['Asynchronous Communication', 'Remote Collaboration', 'Cross-functional Team Leadership'],
  },
]

const CERTS = [
  ['Google UX Design Professional Certificate', 'Coursera'],
  ['Meta UI/UX Specialization', 'Coursera'],
  ['IBM Design Thinking Practitioner', 'IBM SkillsBuild'],
  ['UI Design, UX Research, Prototyping Certifications', 'Interaction Design Foundation (IDF)'],
  ['Adobe XD Essentials Certification', 'Adobe'],
]

function Roles({ title, roles }) {
  return (
    <section className="cv-card">
      <h2 className="cv-card__title">{title}</h2>
      {roles.map((r) => (
        <div key={r.title + r.org} className="cv-role">
          <div className="cv-role__head">
            <div>
              <h3>{r.title}</h3>
              <p>{r.org}</p>
            </div>
            <span className="pill">{r.dates}</span>
          </div>
          <ul className="cv-role__points">
            {r.points.map((p) => <li key={p}>{p}</li>)}
          </ul>
        </div>
      ))}
    </section>
  )
}

export default function Cv() {
  return (
    <div className="cv">
      <header className="cv__header">
        <div className="cv__intro">
          <BackLink to="/">Home</BackLink>
          <Chip tone="sage" bold>Curriculum Vitae</Chip>
          <Display as="h1" parts={['Damilola ', 'Olowo']} className="display--cv" />
          <p className="cv__role">UX/UI Designer</p>
          <ul className="cv__contacts">
            {CONTACTS.map((c) => (
              <li key={c.label}>
                {c.href ? <a href={c.href}>{c.label}</a> : c.label}
              </li>
            ))}
          </ul>
        </div>
        <div className="cv__actions">
          <Button to={CV_PDF_URL} iconBefore="download">Download CV (PDF)</Button>
          <Button to="/start-a-project" variant="light" icon="arrow-ink" className="d-only">Start a project</Button>
        </div>
      </header>

      <div className="cv__body">
        <div className="cv__main">
          <section className="cv-card">
            <Display parts={['Professional ', 'summary']} className="display--cv-summary" />
            <p className="cv-card__summary">
              Detail-oriented UX/UI Designer with over 2 years of professional experience driving the end-to-end design process for web and mobile applications. Expertise in user-centered design methodologies, comprehensive user research, and translating complex business requirements into intuitive, high-fidelity Figma prototypes. Brings a unique advantage with hands-on frontend development experience (HTML/CSS), ensuring all digital solutions are technically feasible, highly accessible (WCAG), and seamlessly handed off to development teams. Proven ability to thrive in fully remote, asynchronous, cross-functional global teams.
            </p>
          </section>
          <Roles title="Experience" roles={EXPERIENCE} />
          <Roles title="Projects" roles={PROJECTS} />
        </div>

        <aside className="cv__side">
          <section className="cv-card">
            <h2 className="cv-card__title">Skills</h2>
            {SKILLS.map((s) => (
              <div key={s.group} className="cv-skills">
                <h3>{s.group}</h3>
                <div className="chips chips--wrap">
                  {s.items.map((i) => <Chip key={i} tone={s.tone} size="cv">{i}</Chip>)}
                </div>
              </div>
            ))}
          </section>
          <section className="cv-card tone--sage">
            <h2 className="cv-card__title">Education</h2>
            <p className="cv-edu__degree">BSc Geography and Environmental Studies</p>
            <p className="cv-edu__school">Kogi State University, Kogi State</p>
            <p className="cv-edu__dates">October 2015 – September 2019</p>
          </section>
          <section className="cv-card">
            <h2 className="cv-card__title">Certifications</h2>
            <ul className="cv-certs">
              {CERTS.map(([name, by]) => (
                <li key={name}>
                  <span className="tick tick--teal"><Icon src="/assets/icon-check-cert.svg" size={12} /></span>
                  <div>
                    <p>{name}</p>
                    <p className="cv-certs__by">{by}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
          <section className="cv-card tone--teal">
            <h2 className="cv-card__title">Languages</h2>
            <p className="cv-lang">English — Fluent / C1 Level</p>
            <p className="cv-lang__note">Excellent written and verbal communication</p>
          </section>
          <Button to={CV_PDF_URL} iconBefore="download" block className="m-only cv__download-bottom">Download CV (PDF)</Button>
        </aside>
      </div>
    </div>
  )
}
