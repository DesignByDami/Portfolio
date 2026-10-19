import { useEffect, useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { Button, Icon, Logo, Sticker, Display } from './ui'
import { EMAIL, NAV_LINKS, SOCIALS } from '../data/site'

function Nav({ onOpenMenu }) {
  return (
    <header className="nav">
      <div className="nav__inner">
        <Logo />
        <nav className="nav__links" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <Link key={l.to} to={l.to} className="nav__link">{l.label}</Link>
          ))}
          <Button to="/start-a-project" size="md" icon="arrow-white">Start a project</Button>
        </nav>
        <button type="button" className="nav__menu-btn" onClick={onOpenMenu} aria-label="Open menu" aria-haspopup="dialog">
          <Icon src="/assets/icon-menu.svg" size={20} />
        </button>
      </div>
    </header>
  )
}

const MENU_ITEMS = [...NAV_LINKS, { label: 'CV', to: '/cv' }]

function MobileMenu({ open, onClose }) {
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null
  return (
    <div className="menu" role="dialog" aria-modal="true" aria-label="Menu">
      <div className="menu__top">
        <Logo size="sm" inverse onClick={onClose} />
        <button type="button" className="menu__close" onClick={onClose} aria-label="Close menu">
          <Icon src="/assets/icon-close.svg" size={20} />
        </button>
      </div>
      <nav className="menu__links" aria-label="Mobile">
        {MENU_ITEMS.map((item, i) => (
          <Link key={item.to} to={item.to} className="menu__link" onClick={onClose}>
            <span>{item.label}</span>
            <span className={`menu__arrow menu__arrow--${i % 2 ? 'teal' : 'sage'}`}>
              <Icon name="arrow-ink" size={18} />
            </span>
          </Link>
        ))}
      </nav>
      <div className="menu__bottom">
        <Button to="/start-a-project" variant="sage" size="md" icon="arrow-ink-md" block onClick={onClose}>
          Start a project
        </Button>
        <div className="menu__contact">
          <Sticker src="/assets/sticker-star-teal-36.svg" size={36} rotate={8} />
          <Sticker src="/assets/sticker-smile-teal-40.svg" size={40} rotate={-6} />
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </div>
      </div>
    </div>
  )
}

export function Cta() {
  return (
    <section className="cta">
      <div className="cta__card">
        <div className="cta__stickers">
          <Sticker src="/assets/sticker-star-teal.svg" size={56} rotate={10} />
          <Sticker src="/assets/sticker-smile-white.svg" size={64} rotate={-6} />
          <Sticker src="/assets/sticker-star-ink.svg" size={56} rotate={-12} />
        </div>
        <div className="cta__text">
          <Display parts={['See if we’re the\n', 'right fit.']} className="display--section" />
          <p className="section-head__sub">Tell me about your product and where you want it to go.</p>
        </div>
        <div className="cta__actions">
          <Button to="/start-a-project" icon="arrow-white-lg">Start a project</Button>
          <a href={`mailto:${EMAIL}`} className="btn btn--outline btn--lg cta__email">
            <span>{EMAIL}</span>
          </a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__brand">
        <span className="logo__mark logo__mark--sm">d</span>
        <span>Based in Abuja, Nigeria</span>
      </div>
      <nav className="footer__social" aria-label="Social">
        {SOCIALS.map((s) => (
          <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
            <span className="d-only">{s.label}</span>
            <span className="m-only">{s.short}</span>
          </a>
        ))}
      </nav>
      <p className="footer__copy">© 2026 Design by Dami</p>
    </footer>
  )
}

// Scrolls to the hash target (e.g. /#work) or to the top on route change.
function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export default function Layout({ cta = true }) {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
      <ScrollManager />
      <a href="#main" className="skip-link">Skip to content</a>
      <Nav onOpenMenu={() => setMenuOpen(true)} />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <main id="main">
        <Outlet />
      </main>
      {cta && <Cta />}
      <Footer />
    </>
  )
}
