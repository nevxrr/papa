import { type ReactNode } from 'react'
import { Link, NavLink } from 'react-router-dom'
import telegramIcon from '../assets/figma/telegram.svg'
import vkIcon from '../assets/figma/vk.svg'

export function LandingNav() {
  return (
    <nav className="nav-glass nav-sticky" aria-label="Разделы">
      <a href="#courses">Курсы</a>
      <a href="#reviews">Отзывы</a>
      <a href="#contacts">Контакты</a>
      <NavLink to="/cabinet">Кабинет</NavLink>
    </nav>
  )
}

export function LandingHeader() {
  return (
    <>
      <div className="shell landing-brand">
        <a href="#top" className="logo">
          NailCraft
        </a>
      </div>
      <LandingNav />
    </>
  )
}

export function PageChrome({
  children,
  showBack = true,
}: {
  children: ReactNode
  showBack?: boolean
}) {
  return (
    <div className="page">
      <div className="shell landing-brand">
        <Link to="/" className="logo">
          NailCraft
        </Link>
      </div>
      <nav className="nav-glass nav-sticky" aria-label="Разделы">
        <Link to="/#courses">Курсы</Link>
        <Link to="/#reviews">Отзывы</Link>
        <Link to="/#contacts">Контакты</Link>
        <NavLink to="/cabinet">Кабинет</NavLink>
      </nav>
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
