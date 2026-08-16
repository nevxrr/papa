import { useState, type FormEvent } from 'react'
import { Link, Navigate, Outlet } from 'react-router-dom'
import {
  courses,
  formatDate,
  formatPrice,
  offlineSlots,
} from '../data/content'
import { useStore } from '../store/StoreContext'
import { CabinetHeader } from '../components/LayoutBits'

export function CabinetLayout() {
  const { isLoggedIn } = useStore()

  if (!isLoggedIn) {
    return <Navigate to="/cabinet/login" replace />
  }

  return (
    <div className="cabinet-shell">
      <CabinetHeader />
      <main className="cabinet-main">
        <Outlet />
      </main>
    </div>
  )
}

export function LoginPage() {
  const { login, isLoggedIn } = useStore()
  const [name, setName] = useState('')

  if (isLoggedIn) return <Navigate to="/cabinet" replace />

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    login(name)
  }

  return (
    <div className="app-frame">
      <form className="login-box glass-strong" onSubmit={onSubmit}>
        <Link to="/" className="logo" style={{ fontSize: '1.8rem' }}>
          NailCraft
        </Link>
        <h1 style={{ marginTop: 16 }}>Личный кабинет</h1>
        <p>
          Войдите, чтобы открыть уроки и запись на офлайн после оплаты курса.
        </p>
        <div className="form-grid">
          <label className="field">
            <span>Ваше имя</span>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Мария"
              required
            />
          </label>
          <button type="submit" className="btn btn-dark">
            Войти
          </button>
          <Link to="/" className="muted" style={{ textAlign: 'center' }}>
            ← На главную
          </Link>
        </div>
      </form>
    </div>
  )
}

export function CabinetHome() {
  const { state, hasAccess } = useStore()
  const owned = courses.filter((c) => state.enrolledCourseIds.includes(c.id))

  return (
    <>
      <section className="cabinet-hero glass">
        <h1>Привет, {state.userName}</h1>
        <p>
          {hasAccess
            ? 'Платформа открыта: смотрите уроки и записывайтесь на офлайн.'
            : 'Пока нет оплаченных курсов — выберите программу, чтобы открыть обучение.'}
        </p>
        <div style={{ marginTop: 18, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          {hasAccess ? (
            <>
              <Link to="/cabinet/lessons" className="btn btn-dark">
                К урокам
              </Link>
              <Link to="/cabinet/booking" className="btn btn-glass">
                Запись офлайн
              </Link>
            </>
          ) : (
            <Link to="/cabinet/courses" className="btn btn-pink">
              Выбрать курс
            </Link>
          )}
        </div>
      </section>

      {owned.length > 0 && (
        <div className="stack-gap">
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.6rem',
              fontWeight: 600,
            }}
          >
            Ваши курсы
          </h2>
          {owned.map((c) => (
            <article key={c.id} className="course-card glass" style={{ minHeight: 0 }}>
              <div className="course-meta">
                <span className="pill pill-aqua">Доступ открыт</span>
                <span className="pill">{c.duration}</span>
              </div>
              <h3>{c.title}</h3>
              <p className="desc">{c.description}</p>
              <div className="course-foot">
                <span className="muted">{c.lessons.length} уроков</span>
                <Link to="/cabinet/lessons" className="btn btn-aqua">
                  Продолжить
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </>
  )
}

export function CabinetCourses() {
  const { enroll, isEnrolled, login, state } = useStore()

  return (
    <>
      <div className="section-head">
        <h2>Курсы</h2>
        <p>Оплата здесь демо: курс сразу открывает платформу в кабинете.</p>
      </div>
      <div className="stack-gap">
        {courses.map((course) => {
          const owned = isEnrolled(course.id)
          return (
            <article key={course.id} className="course-card glass">
              <div className="course-meta">
                <span className="pill pill-pink">{course.level}</span>
                <span className="pill pill-aqua">
                  {course.format === 'online'
                    ? 'Онлайн'
                    : course.format === 'offline'
                      ? 'Офлайн'
                      : 'Гибрид'}
                </span>
              </div>
              <h3>{course.title}</h3>
              <p className="desc">{course.description}</p>
              <div className="course-foot">
                <span className="price">{formatPrice(course.price)}</span>
                {owned ? (
                  <Link to="/cabinet/lessons" className="btn btn-aqua">
                    Смотреть уроки
                  </Link>
                ) : (
                  <button
                    type="button"
                    className="btn btn-dark"
                    onClick={() => {
                      if (!state.userName) login('Ученица')
                      enroll(course.id)
                    }}
                  >
                    Оплатить и открыть
                  </button>
                )}
              </div>
            </article>
          )
        })}
      </div>
    </>
  )
}

export function LessonsPage() {
  const { hasAccess, state, toggleLesson, isEnrolled } = useStore()

  if (!hasAccess) {
    return (
      <div className="lock-panel glass-strong">
        <h2>Уроки пока закрыты</h2>
        <p>Оплатите любой курс — и онлайн-платформа откроется здесь.</p>
        <Link to="/cabinet/courses" className="btn btn-pink">
          К курсам
        </Link>
      </div>
    )
  }

  const ownedCourses = courses.filter((c) => isEnrolled(c.id))

  return (
    <div className="stack-gap">
      <div className="section-head" style={{ marginBottom: 8 }}>
        <h2>Онлайн-уроки</h2>
        <p>Отмечайте пройденное — прогресс сохранится в браузере.</p>
      </div>

      {ownedCourses.map((course) => (
        <section key={course.id} className="stack-gap">
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.45rem',
              fontWeight: 600,
            }}
          >
            {course.title}
          </h3>
          <div className="lesson-list">
            {course.lessons.map((lesson) => {
              const done = Boolean(state.lessonProgress[lesson.id])
              return (
                <button
                  key={lesson.id}
                  type="button"
                  className={`lesson-item glass ${done ? 'done' : ''}`}
                  onClick={() => toggleLesson(lesson.id)}
                  style={{ textAlign: 'left', width: '100%' }}
                >
                  <span className="lesson-check" aria-hidden>
                    {done ? '✓' : ''}
                  </span>
                  <div>
                    <h3>{lesson.title}</h3>
                    <p>
                      {lesson.summary} · {lesson.duration}
                    </p>
                  </div>
                  <span className="lesson-type">
                    {lesson.type === 'video'
                      ? 'Видео'
                      : lesson.type === 'practice'
                        ? 'Практика'
                        : 'PDF'}
                  </span>
                </button>
              )
            })}
          </div>
        </section>
      ))}
    </div>
  )
}

export function BookingPage() {
  const { hasAccess, bookSlot, hasBooking, state } = useStore()
  const [ok, setOk] = useState<string | null>(null)
  const [phone, setPhone] = useState('')

  if (!hasAccess) {
    return (
      <div className="lock-panel glass-strong">
        <h2>Запись на офлайн</h2>
        <p>Доступна после оплаты курса — как часть платформы обучения.</p>
        <Link to="/cabinet/courses" className="btn btn-pink">
          Оплатить курс
        </Link>
      </div>
    )
  }

  return (
    <div className="stack-gap">
      <div className="section-head" style={{ marginBottom: 8 }}>
        <h2>Офлайн-занятия</h2>
        <p>Выберите дату и закрепите место в мини-группе.</p>
      </div>

      <label className="field" style={{ maxWidth: 320 }}>
        <span>Телефон для подтверждения</span>
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+7 …"
          required
        />
      </label>

      <div className="slot-list">
        {offlineSlots.map((slot) => {
          const booked = hasBooking(slot.id)
          return (
            <article key={slot.id} className="slot-card glass">
              <div>
                <h3>{slot.topic}</h3>
                <p>
                  {formatDate(slot.date)} · {slot.time}
                  <br />
                  Осталось мест: {slot.seatsLeft} из {slot.seats}
                </p>
              </div>
              {booked ? (
                <span className="pill pill-aqua">Вы записаны</span>
              ) : (
                <button
                  type="button"
                  className="btn btn-dark"
                  disabled={!phone.trim()}
                  onClick={() => {
                    bookSlot(slot.id, state.userName, phone.trim())
                    setOk(slot.id)
                  }}
                >
                  Записаться
                </button>
              )}
            </article>
          )
        })}
      </div>

      {ok && (
        <div className="toast" role="status">
          Запись сохранена. Мы напишем вам перед занятием.
        </div>
      )}
    </div>
  )
}
