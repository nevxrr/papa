import { useEffect, useState, type ReactNode } from 'react'
import { Link, NavLink } from 'react-router-dom'
import telegramIcon from '../assets/figma/telegram.svg'
import vkIcon from '../assets/figma/vk.svg'

export function useScrolled(threshold = 24) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])
  return scrolled
}

export function LandingHeader() {
  const scrolled = useScrolled()

  return (
    <header className={`landing-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="landing-header-inner">
        <a href="#top" className="logo">
          NailCraft
        </a>
        <nav className="nav-row" aria-label="Разделы">
          <a href="#courses">Курсы</a>
          <a href="#reviews">Отзывы</a>
          <a href="#contacts">Контакты</a>
          <NavLink to="/cabinet" className="cabinet-link">
            Кабинет
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export function PageChrome({
  children,
  showBack = true,
}: {
  children: ReactNode
  showBack?: boolean
}) {
  const scrolled = useScrolled()
  return (
    <div className="page page-blobs">
      <header className={`landing-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="landing-header-inner">
          <Link to="/" className="logo">
            NailCraft
          </Link>
          <nav className="nav-row" aria-label="Разделы">
            <Link to="/#courses">Курсы</Link>
            <Link to="/#reviews">Отзывы</Link>
            <Link to="/#contacts">Контакты</Link>
            <NavLink to="/cabinet" className="cabinet-link">
              Кабинет
            </NavLink>
          </nav>
        </div>
      </header>
      <div className="shell shell-inner">
        {children}
        {showBack && (
          <Link to="/" className="back-home">
            Вернуться на главную
          </Link>
        )}
      </div>
    </div>
  )
}

export function SocialLinks() {
  return (
    <div className="social-figma">
      <a href="https://t.me/" target="_blank" rel="noreferrer" aria-label="Telegram">
        <img src={telegramIcon} alt="" />
      </a>
      <a href="https://vk.com/" target="_blank" rel="noreferrer" aria-label="VK">
        <img src={vkIcon} alt="" />
      </a>
    </div>
  )
}
