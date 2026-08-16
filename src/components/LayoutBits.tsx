import { Link, NavLink } from 'react-router-dom'
import { useStore } from '../store/StoreContext'

export function LandingHeader() {
  const { hasAccess, isLoggedIn } = useStore()

  return (
    <header className="site-header app-frame">
      <Link to="/" className="logo">
        NailCraft
      </Link>
      <nav className="nav-links" aria-label="Разделы">
        <a href="#courses">Курсы</a>
        <a href="#reviews">Отзывы</a>
        <a href="#contacts">Контакты</a>
        <Link to="/cabinet" className="nav-accent">
          {hasAccess || isLoggedIn ? 'Личный кабинет' : 'Личный кабинет'}
        </Link>
      </nav>
    </header>
  )
}

export function CabinetHeader() {
  const { state, logout, hasAccess } = useStore()

  return (
    <header className="cabinet-top">
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <Link to="/" className="logo" style={{ fontSize: '1.6rem' }}>
          NailCraft
        </Link>
        <nav className="cabinet-nav">
          <NavLink
            to="/cabinet"
            end
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            Обзор
          </NavLink>
          {hasAccess && (
            <>
              <NavLink
                to="/cabinet/lessons"
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                Уроки
              </NavLink>
              <NavLink
                to="/cabinet/booking"
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                Запись офлайн
              </NavLink>
            </>
          )}
          <NavLink
            to="/cabinet/courses"
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            Курсы
          </NavLink>
        </nav>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        {state.userName && (
          <span className="muted" style={{ fontSize: '0.85rem' }}>
            {state.userName}
          </span>
        )}
        <button type="button" className="btn btn-glass" onClick={logout}>
          Выйти
        </button>
      </div>
    </header>
  )
}

export function SocialLinks() {
  return (
    <div className="social-row">
      <a
        className="social-btn"
        href="https://t.me/"
        target="_blank"
        rel="noreferrer"
        aria-label="Telegram"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M21.8 4.4 3.7 11.3c-1.2.45-1.2 1.15-.22 1.45l4.62 1.44 1.78 5.45c.22.66.6.8 1.22.5l2.5-1.84 4.84 3.56c.89.49 1.53.24 1.76-.83l3.18-14.98c.33-1.32-.48-1.92-1.58-1.51z" />
        </svg>
      </a>
      <a
        className="social-btn"
        href="https://vk.com/"
        target="_blank"
        rel="noreferrer"
        aria-label="VK"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12.5 18.2h.9c.3 0 .5-.1.6-.4.5-1 1.2-2 2-2.7.9-.8 1.3-.7 1.8.2l.9 1.5c.2.4.5.6.9.6h2.1c.6 0 .8-.3.5-.9-.3-.7-1.5-2.1-2.5-3-.9-.9-1-.9-.5-1.6.8-1.1 1.8-2.5 2.1-3.3.2-.4 0-.7-.5-.7h-2.1c-.4 0-.6.2-.7.5-.6 1.4-1.4 2.8-1.8 2.8-.4 0-.6-.3-.6-.8V7.8c0-.7-.2-1-.8-1h-3.2c-.5 0-.7.3-.7.6 0 .7.9.8.9 2.5v1.8c0 .5-.1.8-.5.8-.8 0-2.4-2.6-3.2-5.4-.2-.5-.4-.7-.8-.7H4.4c-.5 0-.6.2-.6.5 0 .6.8 3.4 3.5 7.1 1.8 2.5 4.3 3.8 6.6 3.8z" />
        </svg>
      </a>
    </div>
  )
}
