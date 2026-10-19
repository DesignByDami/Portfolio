import { useLayoutEffect } from 'react'

// Elements that rise into view as you scroll. Media blocks use a softer
// "zoom" settle instead. The hero has its own entrance, and the footer stays
// static: it sits in the viewport's bottom margin, so it would never trigger.
const REVEAL = [
  // shared
  '.section-head',
  '.cta__card',
  // home
  '.clients',
  '.step',
  '.studio__card',
  '.strength',
  '.about__card',
  '.experience__row',
  '.together__main',
  '.together__chat',
  '.together__email',
  '.faq__item',
  '.work-card__meta',
  // case study
  '.case__header > *',
  '.fact',
  '.brief > div',
  '.designed',
  '.designed__list li',
  '.highlight',
  '.next__card',
  // cv
  '.cv__intro > *',
  '.cv__actions',
  '.cv-card',
  // project form
  '.inquiry__intro > *',
  '.inquiry__panel',
  // 404
  '.not-found > *',
].join(',')

const ZOOM = ['.work-card__media', '.portrait', '.case__hero', '.details__item'].join(',')

const MAX_STAGGER = 6 // siblings past this share the last delay

// Tag the page's revealable elements and animate them in once as they enter
// the viewport. State lives in data attributes so React re-renders (which own
// className) never undo it.
export default function useScrollReveal(key) {
  useLayoutEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced || !('IntersectionObserver' in window)) return

    const root = document.documentElement
    const els = [
      ...[...document.querySelectorAll(REVEAL)].map((el) => [el, 'up']),
      ...[...document.querySelectorAll(ZOOM)].map((el) => [el, 'zoom']),
    ]

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.dataset.revealed = ''
          observer.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 }
    )

    for (const [el, kind] of els) {
      if ('revealed' in el.dataset) continue
      // Stagger among siblings that are also revealed (grid cards, list rows).
      const siblings = el.parentElement ? [...el.parentElement.children].filter((c) => c.matches(REVEAL) || c.matches(ZOOM)) : []
      const index = Math.min(Math.max(siblings.indexOf(el), 0), MAX_STAGGER)
      el.style.setProperty('--reveal-delay', `${index * 80}ms`)
      el.dataset.reveal = kind
      observer.observe(el)
    }
    root.classList.add('reveal-ready')

    return () => observer.disconnect()
  }, [key])
}
