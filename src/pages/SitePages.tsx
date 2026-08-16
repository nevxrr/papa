import { useNavigate } from 'react-router-dom'
import { courses, formatPrice, reviews, MASTER } from '../data/content'
import { useStore } from '../store/StoreContext'
import { PageChrome } from '../components/LayoutBits'

export function CoursesPage() {
  const { enroll, isEnrolled, state, login } = useStore()
  const navigate = useNavigate()

  return (
    <PageChrome active="courses">
      <h1 className="page-title">Курсы NailCraft</h1>
      <div className="cards-8">
        {courses.map((course) => {
          const owned = isEnrolled(course.id)
          return (
            <article key={course.id} className="course-tile">
              <div className="meta-row">
                <span className="chip">{course.level}</span>
                <span className="chip">
                  {course.format === 'online'
                    ? 'Онлайн'
                    : course.format === 'offline'
                      ? 'Офлайн'
                      : 'Гибрид'}
                </span>
                <span className="chip">{course.duration}</span>
              </div>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <div className="tile-foot">
                <span className="price">{formatPrice(course.price)}</span>
                {owned ? (
                  <button
                    type="button"
                    className="btn btn-aqua"
                    onClick={() => navigate('/cabinet')}
                  >
                    Открыть
                  </button>
                ) : (
                  <button
                    type="button"
                    className="btn btn-dark"
                    onClick={() => {
                      if (!state.userName) login('Ученица')
                      enroll(course.id)
                      navigate('/cabinet')
                    }}
                  >
                    Оплатить
                  </button>
                )}
              </div>
            </article>
          )
        })}
      </div>
    </PageChrome>
  )
}

export function ReviewsPage() {
  return (
    <PageChrome active="reviews">
      <h1 className="page-title">Отзывы</h1>
      <div className="grid-2">
        {reviews.slice(0, 2).map((r) => (
          <article key={r.id} className="panel-tall glass-strong">
            <div className="review-card">
              <div className="stars">{'★'.repeat(r.rating)}</div>
              <p style={{ fontSize: '1.15rem', lineHeight: 1.45 }}>{r.text}</p>
              <footer>
                <strong style={{ color: '#000' }}>{r.name}</strong>
                <span>{r.course}</span>
              </footer>
            </div>
          </article>
        ))}
      </div>
      <div className="grid-2" style={{ marginTop: 24 }}>
        {reviews.slice(2).map((r) => (
          <article key={r.id} className="course-tile">
            <div className="review-card">
              <div className="stars">{'★'.repeat(r.rating)}</div>
              <p>{r.text}</p>
              <footer>
                <strong style={{ color: '#000' }}>{r.name}</strong>
                <span>{r.course}</span>
              </footer>
            </div>
          </article>
        ))}
      </div>
    </PageChrome>
  )
}

export function ContactsPage() {
  return (
    <PageChrome active="contacts">
      <div className="contacts-layout">
        <p className="contacts-legal">
          {MASTER.fullLegal}
          <br />
          ИНН: {MASTER.inn}
        </p>
        <div className="contacts-lines">
          <p>Телефон: {MASTER.phone}</p>
          <p>Адрес: {MASTER.address}</p>
        </div>
        <div className="map-box" aria-label="Карта">
          КАРТА
        </div>
        <div className="legal-links">
          <a href="#offer">Оферта</a>
          <a href="#privacy">Политика конфиденциальности</a>
        </div>
      </div>
    </PageChrome>
  )
}
