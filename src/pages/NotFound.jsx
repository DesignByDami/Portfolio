import { Button, Display, Sticker } from '../components/ui'

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="not-found__art">
        <Sticker src="/assets/sticker-star-sage-110.svg" size={110} rotate={10} className="not-found__sticker" />
        <p className="not-found__code" aria-hidden="true">404</p>
        <Sticker src="/assets/sticker-smile-teal-110.svg" size={110} rotate={-8} className="not-found__sticker" />
      </div>
      <Display as="h1" parts={['This page took a ', 'day off.']} className="display--about" />
      <p className="section-head__sub">The link may be old or mistyped. Let’s get you back to the work.</p>
      <div className="not-found__actions">
        <Button to="/" icon="arrow-white-lg">Back to home</Button>
        <Button to="/#work" variant="light">See my work</Button>
      </div>
    </section>
  )
}
