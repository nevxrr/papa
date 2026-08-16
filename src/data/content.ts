export interface Course {
  id: string
  title: string
  level: string
  format: 'online' | 'offline' | 'hybrid'
  duration: string
  price: number
  description: string
  lessons: Lesson[]
  highlights: string[]
}

export interface Lesson {
  id: string
  title: string
  duration: string
  type: 'video' | 'practice' | 'pdf'
  summary: string
}

export interface Review {
  id: string
  name: string
  text: string
  rating: number
  course: string
}

export interface OfflineSlot {
  id: string
  date: string
  time: string
  topic: string
  seats: number
  seatsLeft: number
}

export const MASTER = {
  name: 'Анастасия Захватава',
  title: 'Дипломированный мастер маникюра',
  academy: 'NailCraft',
}

export const courses: Course[] = [
  {
    id: 'start',
    title: 'Маникюр с нуля',
    level: 'Новичок',
    format: 'hybrid',
    duration: '14 дней',
    price: 14900,
    description:
      'Полный старт в профессии: от подготовки рабочего места до идеального покрытия. Онлайн-уроки + практика офлайн.',
    highlights: [
      'Базовый маникюр и гигиена',
      'Снятие и подготовка ногтевой пластины',
      'Классическое и френч-покрытие',
      'Сертификат NailCraft',
    ],
    lessons: [
      {
        id: 's1',
        title: 'Знакомство с профессией и рабочее место',
        duration: '18 мин',
        type: 'video',
        summary: 'Инструменты, стерилизация, организация кабинета.',
      },
      {
        id: 's2',
        title: 'Анатомия ногтя и безопасность',
        duration: '22 мин',
        type: 'video',
        summary: 'Строение ногтевой пластины, противопоказания, уход.',
      },
      {
        id: 's3',
        title: 'Комбинированный маникюр — техника',
        duration: '35 мин',
        type: 'video',
        summary: 'Пошаговый разбор снятия, опила и обработки кутикулы.',
      },
      {
        id: 's4',
        title: 'Покрытие гель-лаком',
        duration: '28 мин',
        type: 'video',
        summary: 'База, цвет, топ. Как избежать сколов и отслоек.',
      },
      {
        id: 's5',
        title: 'Практика: френч',
        duration: '40 мин',
        type: 'practice',
        summary: 'Классический френч на типсах и натуральных ногтях.',
      },
      {
        id: 's6',
        title: 'Чек-лист мастера',
        duration: '12 мин',
        type: 'pdf',
        summary: 'Памятка по этапам услуги и общению с клиентом.',
      },
    ],
  },
  {
    id: 'pro',
    title: 'Укрепление и дизайн',
    level: 'Продолжающий',
    format: 'online',
    duration: '10 дней',
    price: 18900,
    description:
      'Укрепление тонких ногтей, архитектура и аккуратные дизайны, которые быстро продаются в салоне.',
    highlights: [
      'Укрепление гелем и полигелем',
      'Архитектура формы',
      'Минималистичный дизайн',
      'Фото работ для портфолио',
    ],
    lessons: [
      {
        id: 'p1',
        title: 'Диагностика и выбор системы укрепления',
        duration: '20 мин',
        type: 'video',
        summary: 'Когда гель, когда полигель, ошибки новичков.',
      },
      {
        id: 'p2',
        title: 'Выкладной френч',
        duration: '32 мин',
        type: 'video',
        summary: 'Чистая линия улыбки без трафаретов.',
      },
      {
        id: 'p3',
        title: 'Дизайн за 10 минут',
        duration: '25 мин',
        type: 'video',
        summary: 'Втирка, тонкие линии, акцент на одном пальце.',
      },
      {
        id: 'p4',
        title: 'Домашнее задание',
        duration: '—',
        type: 'practice',
        summary: '3 работы в портфолио с разбором от куратора.',
      },
    ],
  },
  {
    id: 'offline-intensive',
    title: 'Офлайн-интенсив «Первые клиенты»',
    level: 'Практика',
    format: 'offline',
    duration: '2 дня',
    price: 12900,
    description:
      'Живая практика в мини-группе: отрабатываете технику на моделях и собираете первые уверенные работы.',
    highlights: [
      'Мини-группа до 6 человек',
      'Модели включены',
      'Разбор ошибок на месте',
      'План выхода на первых клиентов',
    ],
    lessons: [
      {
        id: 'o1',
        title: 'День 1 — техника под контролем',
        duration: '6 ч',
        type: 'practice',
        summary: 'Маникюр и покрытие на двух моделях.',
      },
      {
        id: 'o2',
        title: 'День 2 — скорость и чистота',
        duration: '6 ч',
        type: 'practice',
        summary: 'Тайминг услуги, общение, финальный разбор.',
      },
    ],
  },
]

export const reviews: Review[] = [
  {
    id: 'r1',
    name: 'Марина К.',
    text: 'За две недели ушла от «делаю подругам» к первым платным клиентам. Очень мягко объясняет и всё по делу.',
    rating: 5,
    course: 'Маникюр с нуля',
  },
  {
    id: 'r2',
    name: 'Алина С.',
    text: 'Онлайн-уроки удобно смотреть вечером, а офлайн закрепил руки. Платформа понятная, без хаоса.',
    rating: 5,
    course: 'Маникюр с нуля',
  },
  {
    id: 'r3',
    name: 'Дарья В.',
    text: 'Брала блок по укреплению — ногти клиентов перестали ломаться. Дизайны теперь делаю быстрее.',
    rating: 5,
    course: 'Укрепление и дизайн',
  },
]

export const offlineSlots: OfflineSlot[] = [
  {
    id: 'slot-1',
    date: '2026-08-22',
    time: '11:00–17:00',
    topic: 'Базовый маникюр + покрытие',
    seats: 6,
    seatsLeft: 2,
  },
  {
    id: 'slot-2',
    date: '2026-08-29',
    time: '11:00–17:00',
    topic: 'Френч и аккуратный дизайн',
    seats: 6,
    seatsLeft: 4,
  },
  {
    id: 'slot-3',
    date: '2026-09-05',
    time: '12:00–18:00',
    topic: 'Интенсив «Первые клиенты»',
    seats: 6,
    seatsLeft: 5,
  },
]

export function formatPrice(n: number): string {
  return new Intl.NumberFormat('ru-RU').format(n) + ' ₽'
}

export function formatDate(iso: string): string {
  return new Date(`${iso}T12:00:00`).toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    weekday: 'short',
  })
}
