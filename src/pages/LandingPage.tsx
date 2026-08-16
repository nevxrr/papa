import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { courses, formatPrice, MASTER, reviews } from '../data/content'
import { useStore } from '../store/StoreContext'
import { LandingHeader, SocialLinks } from '../components/LayoutBits'
import handImg from '../assets/french-manicure-hand.png'
import masterImg from '../assets/master-portrait.png'

export function LandingPage() {
  const navigate = useNavigate()
  const { enroll, isEnrolled } = useStore()
  const [sent, setSent] = useState(false)

  function onContact(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  function buy(courseId: string) {
    enroll(courseId)
    navigate('/cabinet')
  }

  return (
    <>
      <LandingHeader />

      <section className="hero">
        <div className="app-frame hero-grid">
          <div className="hero-copy">
            <h1 className="hero-title">
              Хотите зарабатывать от{' '}
              <span className="money">80.000 ₽</span> в день и работать на
              себя?
            </h1>
            <p className="hero-lead">
              Превратите хобби в профессию с NailCraft: диплом, уверенная
              техника и первые клиенты уже через неделю обучения.
            </p>
            <div className="hero-cta">
              <a href="#courses" className="btn btn-dark">
                Посмотреть курсы
              </a>
            </div>

            <div className="hero-hand" aria-hidden>
              <img src={handImg} alt="" />
            </div>
          </div>

          <div className="hero-portrait-wrap">
            <div className="portrait-frame">
              <img src={masterImg} alt={MASTER.name} />
              <div className="portrait-plate">
                <strong>{MASTER.name}</strong>
                <span>{MASTER.title}</span>
              </div>
            </div>
            <SocialLinks />
          </div>
        </div>
      </section>

      <section className="section" id="courses">
        <div className="app-frame">
          <div className="section-head">
            <h2>Курсы академии</h2>
            <p>
              Сначала выберите программу. После оплаты откроется личный кабинет
              с уроками и записью на офлайн-практику.
            </p>
          </div>

          <div className="course-grid">
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
                          : 'Онлайн + офлайн'}
                    </span>
                    <span className="pill">{course.duration}</span>
                  </div>
                  <h3>{course.title}</h3>
                  <p className="desc">{course.description}</p>
                  <ul>
                    {course.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                  <div className="course-foot">
                    <span className="price">{formatPrice(course.price)}</span>
                    {owned ? (
                      <Link to="/cabinet/lessons" className="btn btn-aqua">
                        Открыть
                      </Link>
                    ) : (
                      <button
                        type="button"
                        className="btn btn-dark"
                        onClick={() => buy(course.id)}
                      >
                        Оплатить
                      </button>
                    )}
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section" id="how">
        <div className="app-frame">
          <div className="section-head">
            <h2>Как устроена платформа</h2>
            <p>Мягкий вход для новичка и понятный путь после оплаты.</p>
          </div>
          <div className="how-grid">
            <div className="how-step glass">
              <div className="num">01</div>
              <h3>Лендинг и выбор курса</h3>
              <p>Смотрите программы, формат и сроки — без регистрации.</p>
            </div>
            <div className="how-step glass">
              <div className="num">02</div>
              <h3>Оплата открывает кабинет</h3>
              <p>
                После оплаты курса доступны онлайн-уроки и запись на офлайн.
              </p>
            </div>
            <div className="how-step glass">
              <div className="num">03</div>
              <h3>Учёба и практика</h3>
              <p>
                Смотрите видео, отмечайте прогресс и приходите на живые
                занятия.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="reviews">
        <div className="app-frame">
          <div className="section-head">
            <h2>Отзывы учениц</h2>
            <p>Коротко о том, как проходит обучение в NailCraft.</p>
          </div>
          <div className="reviews-grid">
            {reviews.map((r) => (
              <article key={r.id} className="review-card glass-strong">
                <div className="stars" aria-label={`${r.rating} из 5`}>
                  {'★'.repeat(r.rating)}
                </div>
                <p>{r.text}</p>
                <footer>
                  <strong>{r.name}</strong>
                  <span>{r.course}</span>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="contacts">
        <div className="app-frame contact-block">
          <div className="contact-card glass">
            <h3>Контакты</h3>
            <p>
              Напишите, если хотите подобрать курс или записаться на пробную
              консультацию перед стартом.
            </p>
            <div className="contact-list">
              <a href="mailto:hello@nailcraft.academy">hello@nailcraft.academy</a>
              <a href="https://t.me/" target="_blank" rel="noreferrer">
                Telegram NailCraft
              </a>
              <span className="muted">Москва · офлайн-студия по записи</span>
            </div>
            <SocialLinks />
          </div>

          <form className="contact-form glass-strong" onSubmit={onContact}>
            <h3>Оставить заявку</h3>
            <p>Ответим в течение дня и подскажем, с какого курса начать.</p>
            <div className="form-grid">
              <label className="field">
                <span>Имя</span>
                <input name="name" required placeholder="Алина" />
              </label>
              <label className="field">
                <span>Телефон или Telegram</span>
                <input name="contact" required placeholder="+7 или @username" />
              </label>
              <label className="field">
                <span>Интересует</span>
                <select name="interest" defaultValue="start">
                  {courses.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.title}
                    </option>
                  ))}
                </select>
              </label>
              <button type="submit" className="btn btn-pink">
                Отправить
              </button>
              {sent && (
                <div className="toast" role="status">
                  Заявка принята — скоро свяжемся.
                </div>
              )}
            </div>
          </form>
        </div>
      </section>

      <footer className="app-frame site-footer">
        <span>© {new Date().getFullYear()} NailCraft</span>
        <span>{MASTER.name} · {MASTER.title}</span>
      </footer>
    </>
  )
}
