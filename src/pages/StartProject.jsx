import { useState } from 'react'
import { BackLink, Button, Chip, Display, Icon, Sticker } from '../components/ui'
import { EMAIL, whatsappLink } from '../data/site'

const OPTIONS = {
  projectType: [
    'UI/UX Design',
    'Mobile App Design',
    'Web App Design',
    'Design System',
    'Brand Identity & Visual Design',
    'Frontend Development',
    'Full Product (Design + Build)',
    'Prototyping & UX Research',
  ],
  budget: ['Under $500', '$500 – $1,500', '$1,500 – $5,000', '$5,000 – $10,000', '$10,000+'],
  timeline: ['Less than 1 month', '1–3 months', '3–6 months', '6+ months', 'Flexible'],
  source: ['Instagram', 'Twitter / X', 'Referral', 'Google search', 'Other'],
}

const EMPTY = {
  name: '',
  email: '',
  phone: '',
  company: '',
  projectType: '',
  budget: '',
  timeline: '',
  description: '',
  links: '',
  source: '',
}

const REQUIRED = {
  name: 'Please enter your full name',
  email: 'Please enter a valid email',
  phone: 'Please add a phone or WhatsApp number',
  projectType: 'Choose a project type',
  description: 'Tell me a little about the project',
}

function validate(values) {
  const errors = {}
  for (const [key, message] of Object.entries(REQUIRED)) {
    if (!values[key].trim()) errors[key] = message
  }
  if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = REQUIRED.email
  }
  return errors
}

function buildMessage(v) {
  const sections = [
    ['Hi Dami — new project inquiry from damidesigns.com'],
    [`Name: ${v.name}`, `Email: ${v.email}`, `Phone / WhatsApp: ${v.phone}`, v.company && `Company / Brand: ${v.company}`],
    [`Project type: ${v.projectType}`, v.budget && `Budget: ${v.budget}`, v.timeline && `Timeline: ${v.timeline}`],
    [`About the project: ${v.description}`, v.links && `References: ${v.links}`, v.source && `Heard about me via: ${v.source}`],
  ]
  // Optional fields are '' when empty and get dropped.
  return sections.map((s) => s.filter(Boolean).join('\n')).join('\n\n')
}

function Field({ id, label, required, error, className = '', children }) {
  return (
    <div className={`field ${className}`}>
      <label htmlFor={id} className="field__label">
        {label}{required && ' *'}
      </label>
      {children}
      {error && (
        <p className="field__error" id={`${id}-error`}>
          <Icon src="/assets/icon-alert-field.svg" size={16} />
          {error}
        </p>
      )}
    </div>
  )
}

export default function StartProject() {
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [sentUrl, setSentUrl] = useState(null)

  const hasErrors = submitted && Object.keys(errors).length > 0

  function update(key) {
    return (e) => {
      const next = { ...values, [key]: e.target.value }
      setValues(next)
      if (submitted) setErrors(validate(next))
    }
  }

  function inputProps(key, extra = {}) {
    const filled = values[key] !== ''
    return {
      id: key,
      name: key,
      value: values[key],
      onChange: update(key),
      className: `input${errors[key] ? ' is-invalid' : ''}${filled ? ' is-filled' : ''}`,
      'aria-invalid': errors[key] ? 'true' : undefined,
      'aria-describedby': errors[key] ? `${key}-error` : undefined,
      ...extra,
    }
  }

  function select(key, required) {
    return (
      <div className="select">
        <select {...inputProps(key)} required={required}>
          <option value="" disabled>Select one</option>
          {OPTIONS[key].map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
        <Icon src={values[key] ? '/assets/icon-chevron-ink.svg' : '/assets/icon-chevron-muted.svg'} size={18} className="select__chevron" />
      </div>
    )
  }

  function onSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length) {
      document.getElementById(Object.keys(found)[0])?.focus()
      return
    }
    const url = whatsappLink(buildMessage(values))
    setSentUrl(url)
    window.open(url, '_blank', 'noopener')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="inquiry">
      <aside className="inquiry__intro">
        <BackLink to="/">Home</BackLink>
        <span className="d-only"><Chip tone="teal" bold>Project inquiry</Chip></span>
        <Display as="h1" parts={['Let’s start a ', 'project.']} className="display--inquiry" />
        <p className="inquiry__lede">
          <span className="d-only">Tell me a bit about you and what you’re looking to build. Once you submit, this opens WhatsApp with your details pre-filled so you can send it straight to me.</span>
          <span className="m-only">Tell me about you and what you’re building. Submitting opens WhatsApp with your details pre-filled.</span>
        </p>
        <div className="inquiry__stickers d-only">
          <Sticker src="/assets/sticker-star-sage-56.svg" size={56} rotate={8} />
          <Sticker src="/assets/sticker-flower-56.svg" size={56} rotate={-6} />
          <Sticker src="/assets/sticker-smile-teal-56.svg" size={56} rotate={4} />
        </div>
        <div className="inquiry__email d-only">
          <p>Rather email?</p>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </div>
      </aside>

      <div className="inquiry__panel">
        {sentUrl ? (
          <div className="sent" role="status">
            <span className="sent__icon"><Icon src="/assets/icon-check-ink-44.svg" size={44} /></span>
            <Display as="h2" parts={['Opening ', 'WhatsApp…']} className="display--sent" />
            <p className="sent__lede">Your details are pre-filled — hit send there to reach me. Nothing is stored on this site.</p>
            <dl className="sent__summary">
              {[
                ['Name', values.name],
                ['Project', values.projectType],
                ['Budget', values.budget || '—'],
                ['Timeline', values.timeline || '—'],
              ].map(([k, v]) => (
                <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
              ))}
            </dl>
            <div className="sent__actions">
              <Button to={sentUrl} size="form">Open WhatsApp again</Button>
              <Button to="/" variant="light" size="form">Back to home</Button>
            </div>
          </div>
        ) : (
          <form className="form" noValidate onSubmit={onSubmit}>
            {hasErrors && (
              <div className="form__alert" role="alert">
                <Icon src="/assets/icon-alert-banner.svg" size={20} />
                <p>A few required details are missing — they’re marked below.</p>
              </div>
            )}

            <h2 className="form__heading">Contact details</h2>
            <div className="form__row">
              <Field id="name" label="Full name" required error={errors.name}>
                <input type="text" autoComplete="name" placeholder="Your name" {...inputProps('name')} />
              </Field>
              <Field id="email" label="Email address" required error={errors.email}>
                <input type="email" autoComplete="email" placeholder="you@company.com" {...inputProps('email')} />
              </Field>
            </div>
            <div className="form__row">
              <Field id="phone" label={<><span className="d-only">Phone / WhatsApp number</span><span className="m-only">Phone / WhatsApp</span></>} required error={errors.phone}>
                <input type="tel" autoComplete="tel" placeholder="+234…" {...inputProps('phone')} />
              </Field>
              <Field id="company" label="Company / Brand name" className="d-only-block">
                <input type="text" autoComplete="organization" placeholder="Optional" {...inputProps('company')} />
              </Field>
            </div>

            <hr className="form__divider" />

            <h2 className="form__heading">Project details</h2>
            <div className="form__row form__row--3">
              <Field id="projectType" label="Project type" required error={errors.projectType}>
                {select('projectType', true)}
              </Field>
              <Field id="budget" label="Budget range">{select('budget')}</Field>
              <Field id="timeline" label="Timeline">{select('timeline')}</Field>
            </div>
            <Field id="description" label="Describe your project" required error={errors.description}>
              <textarea rows={4} placeholder="Goals, audience, what exists already…" {...inputProps('description')} />
            </Field>
            <div className="form__row d-only-flex">
              <Field id="links" label="Reference links / inspiration">
                <input type="text" placeholder="Links to sites or apps you like" {...inputProps('links')} />
              </Field>
              <Field id="source" label="How did you hear about me?">{select('source')}</Field>
            </div>

            <div className="form__footer">
              <p>Sent as a WhatsApp message — nothing is stored on this site.</p>
              <button type="submit" className="btn btn--dark btn--form">
                <span>Send via WhatsApp</span>
                <Icon name="arrow-white-lg" size={18} />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
