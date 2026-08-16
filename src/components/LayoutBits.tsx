import type { ReactNode } from 'react'
import { Link, NavLink } from 'react-router-dom'
import telegramIcon from '../assets/figma/telegram.svg'
import vkIcon from '../assets/figma/vk.svg'

export function SiteNav({ active }: { active?: string }) {
  return (
    <nav className="nav-col" aria-label="Разделы">
      <NavLink
        to="/courses"
        className={active === 'courses' ? 'active' : undefined}
      >
        Курсы
      </NavLink>
      <NavLink
        to="/reviews"
        className={active === 'reviews' ? 'active' : undefined}
      >
        Отзывы
      </NavLink>
      <NavLink
        to="/contacts"
        className={active === 'contacts' ? 'active' : undefined}
      >
        Контакты
      </NavLink>
      <NavLink to="/cabinet" className="cabinet-link">
        Личный кабинет
      </NavLink>
    </nav>
  )
}

export function PageChrome({
  active,
  children,
  showBack = true,
}: {
  active?: string
  children: ReactNode
  showBack?: boolean
}) {
  return (
    <div className="page page-blobs">
      <div className="shell">
        <div className="top-row">
          <Link to="/" className="logo">
            NailCraft
          </Link>
          <SiteNav active={active} />
        </div>
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
