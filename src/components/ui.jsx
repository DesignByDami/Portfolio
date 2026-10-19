import { Link } from 'react-router-dom'

const ICONS = {
  'arrow-white': '/assets/icon-arrow-right-white.svg',
  'arrow-white-lg': '/assets/icon-arrow-right-white-18.svg',
  'arrow-ink': '/assets/icon-arrow-right-ink-18.svg',
  'arrow-ink-md': '/assets/icon-arrow-right-ink-17.svg',
  'arrow-left': '/assets/icon-arrow-left.svg',
  open: '/assets/icon-open-arrow.svg',
  download: '/assets/icon-download.svg',
}

export function Icon({ name, src, size = 16, className = '' }) {
  return (
    <img
      className={`icon ${className}`}
      src={src || ICONS[name]}
      width={size}
      height={size}
      alt=""
      aria-hidden="true"
    />
  )
}

function isExternal(to) {
  return /^(https?:|mailto:|tel:)/.test(to)
}

// Static files (e.g. /Damilola-Olowo-CV.pdf) live in public/ and must bypass the router.
function isFile(to) {
  return /\.[a-z0-9]+$/i.test(to.split(/[?#]/)[0])
}

// Renders a router Link, an external anchor, or a button depending on props.
export function Action({ to, children, ...rest }) {
  if (!to) return <button type="button" {...rest}>{children}</button>
  if (!isExternal(to) && isFile(to)) {
    return <a href={to} download {...rest}>{children}</a>
  }
  if (isExternal(to)) {
    const external = to.startsWith('http')
    return (
      <a href={to} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})} {...rest}>
        {children}
      </a>
    )
  }
  return <Link to={to} {...rest}>{children}</Link>
}

// variant: dark | light | sage | outline · size: lg | md
export function Button({ variant = 'dark', size = 'lg', icon, iconBefore, block, className = '', children, ...rest }) {
  const iconSize = size === 'lg' ? 18 : 16
  return (
    <Action className={`btn btn--${variant} btn--${size}${block ? ' btn--block' : ''} ${className}`} {...rest}>
      {iconBefore && <Icon name={iconBefore} size={20} />}
      <span>{children}</span>
      {icon && <Icon name={icon} size={iconSize} />}
    </Action>
  )
}

export function Chip({ tone = 'sage', size = 'sm', bold, children }) {
  return <span className={`chip chip--${tone} chip--${size}${bold ? ' chip--bold' : ''}`}>{children}</span>
}

export function BackLink({ to = '/', children }) {
  return (
    <Link to={to} className="back-link">
      <Icon name="arrow-left" size={18} />
      <span>{children}</span>
    </Link>
  )
}

// `onDark` sets the logo on a light pill so the black artwork stays visible.
export function Logo({ size = 'lg', onDark, to = '/', onClick }) {
  return (
    <Link to={to} className={`logo logo--${size}${onDark ? ' logo--on-dark' : ''}`} onClick={onClick}>
      <img src="/logo.png" alt="Dami Design — home" width="864" height="320" />
    </Link>
  )
}

// Big two-tone heading: Figtree sans + Instrument Serif italic accent.
// `parts` is an array of strings; odd-indexed entries render in italic serif.
// A "\n" inside a part is a desktop-only line break (mobile text wraps naturally).
function withBreaks(text) {
  return text.split('\n').flatMap((line, i) =>
    i === 0 ? [line] : [' ', <br key={i} className="br-desk" />, line]
  )
}

export function Display({ as: Tag = 'h2', parts, className = '' }) {
  return (
    <Tag className={`display ${className}`}>
      {parts.map((p, i) =>
        i % 2 === 1 ? <em key={i}>{withBreaks(p)}</em> : <span key={i}>{withBreaks(p)}</span>
      )}
    </Tag>
  )
}

export function SectionHead({ parts, sub, className = '', id }) {
  return (
    <header className={`section-head ${className}`} id={id}>
      <Display parts={parts} className="display--section" />
      {sub && <p className="section-head__sub">{sub}</p>}
    </header>
  )
}

export function Sticker({ src, size, rotate = 0, className = '' }) {
  return (
    <img
      className={`sticker ${className}`}
      src={src}
      width={size}
      height={size}
      style={{ transform: `rotate(${rotate}deg)` }}
      alt=""
      aria-hidden="true"
    />
  )
}
