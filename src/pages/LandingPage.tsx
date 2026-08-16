import { Link } from 'react-router-dom'
import { MASTER } from '../data/content'
import { SiteNav, SocialLinks } from '../components/LayoutBits'
import handImg from '../assets/figma/hand.png'
import masterImg from '../assets/figma/master.png'

export function LandingPage() {
  return (
    <div className="page page-blobs">
      <div className="shell">
        <div className="top-row">
          <Link to="/" className="logo">
            NailCraft
          </Link>
          <SiteNav />
        </div>

        <div className="hero-layout">
          <div className="hero-copy">
            <h1 className="hero-title">
              Хотите зарабатывать от{' '}
              <span className="money">80.000 ₽</span> в день и работать на
              себя?
            </h1>
            <p className="hero-lead">
              Мы превратим ваше увлечение в востребованную профессию с нуля.
              Вы получите не просто диплом, а готовый набор навыков для старта
              карьеры уже на следующей неделе
            </p>
            <Link to="/courses" className="cta-figma">
              Посмотреть курсы
            </Link>
            <div className="hero-hand" aria-hidden>
              <img src={handImg} alt="" />
            </div>
          </div>

          <div className="portrait-block">
            <div className="portrait-arch">
              <img src={masterImg} alt={MASTER.name} />
            </div>
            <div className="portrait-plate">
              <strong>{MASTER.name}</strong>
              <span>{MASTER.title}</span>
            </div>
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  )
}
