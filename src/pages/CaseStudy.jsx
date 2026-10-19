import { Link, useParams } from 'react-router-dom'
import { BackLink, Chip, Display, Icon } from '../components/ui'
import { getNextProject, getProject } from '../data/projects'
import NotFound from './NotFound'

const HIGHLIGHT_TONES = ['teal', 'ink', 'teal']

export default function CaseStudy() {
  const { slug } = useParams()
  const project = getProject(slug)
  if (!project) return <NotFound />
  const next = getNextProject(slug)
  const { images } = project

  return (
    <article className="case">
      <header className="case__header">
        <BackLink to="/#work">All work</BackLink>
        <div className="chips">
          {project.tags.map((t) => (
            <Chip key={t.label} tone={t.tone}>{t.label}</Chip>
          ))}
        </div>
        <Display as="h1" parts={project.title} className="display--case" />
        <p className="case__lede">{project.lede}</p>
        <dl className="facts">
          {project.facts.map(([label, value, href]) => (
            <div key={label} className="fact">
              <dt>{label}</dt>
              <dd>{href ? <a href={href} target="_blank" rel="noreferrer">{value}</a> : value}</dd>
            </div>
          ))}
        </dl>
      </header>

      <div className="case__hero">
        <img
          src={images.hero}
          alt={`${project.name} — product mockups`}
          width="1344"
          height={images.heroHeight}
        />
      </div>

      <section className="brief">
        <div>
          <Chip tone="sage" bold>The brief</Chip>
          <p>{project.brief}</p>
        </div>
        <div>
          <Chip tone="teal" bold>My approach</Chip>
          <p>{project.approach}</p>
        </div>
      </section>

      <section className="designed">
        <Display parts={project.designedTitle} className="display--designed" />
        <ul className="designed__list">
          {project.designed.map((item) => (
            <li key={item}>
              <span className="tick tick--lg"><Icon src="/assets/icon-check-ink-14.svg" size={14} /></span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="highlights" aria-label="Highlights">
        {project.highlights.map(([title, text], i) => (
          <div key={title} className={`highlight tone--${HIGHLIGHT_TONES[i]}`}>
            <p className="highlight__num">0{i + 1}</p>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        ))}
      </section>

      <section className="details" aria-label="Screen details">
        {images.details.map((src, i) => (
          <div key={src} className="details__item">
            <img src={src} alt={`${project.name} — detail ${i + 1}`} loading="lazy" width="662" height="520" />
          </div>
        ))}
      </section>

      <section className="next">
        <Link to={`/work/${next.slug}`} className="next__card">
          <div className="next__copy">
            <Chip tone="sage" bold>Next project</Chip>
            <p className="next__title">{next.name}</p>
            <span className="next__cta">
              View case study
              <span className="next__btn"><Icon name="arrow-ink" size={18} /></span>
            </span>
          </div>
          <div className="next__thumb">
            <img src={images.next} alt="" loading="lazy" width="560" height="340" />
          </div>
        </Link>
      </section>
    </article>
  )
}
