import { useId, useState } from 'react'
import { Icon } from './ui'

export default function Faq({ items }) {
  const [open, setOpen] = useState(0)
  const baseId = useId()

  return (
    <div className="faq">
      {items.map((item, i) => {
        const isOpen = open === i
        const panelId = `${baseId}-${i}`
        return (
          <div key={item.q} className={`faq__item${isOpen ? ' is-open' : ''}`}>
            <button
              type="button"
              className="faq__q"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpen(isOpen ? -1 : i)}
            >
              <span>{item.q}</span>
              <span className="faq__toggle">
                <Icon src={isOpen ? '/assets/icon-minus.svg' : '/assets/icon-plus.svg'} size={16} />
              </span>
            </button>
            <div id={panelId} className="faq__a" role="region" hidden={!isOpen}>
              <p>{item.a}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
