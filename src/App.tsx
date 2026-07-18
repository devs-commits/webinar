import './App.css'
import type { ReactNode } from 'react'

type IconName =
  | 'spark'
  | 'compass'
  | 'portfolio'
  | 'mic'
  | 'target'
  | 'calendar'
  | 'clock'
  | 'monitor'
  | 'alert'
  | 'student'
  | 'graduate'
  | 'switch'
  | 'course'
  | 'career'
  | 'check'
  | 'location'
  | 'phone'
  | 'mail'

const reserveLink =
  'https://docs.google.com/forms/d/e/1FAIpQLSeJCiwP1G41hdjuoJRPRguhPjE3H_rsOoGJw_gmQEz8KGPZKw/viewform?usp=preview'

const eventDetails: Array<{ label: string; value: string; icon: IconName }> = [
  { label: 'Date', value: '27 July 2026', icon: 'calendar' },
  { label: 'Time', value: '10:00 AM WAT', icon: 'clock' },
  { label: 'Location', value: 'Online webinar', icon: 'monitor' },
]

const signals: Array<{ label: string; icon: IconName }> = [
  { label: 'Skill fit', icon: 'compass' },
  { label: 'Portfolio proof', icon: 'portfolio' },
  { label: 'Interview clarity', icon: 'mic' },
  { label: 'Application strategy', icon: 'target' },
]

const barriers: Array<{ text: string; icon: IconName }> = [
  {
    text: 'You learnt the skill, but your portfolio does not show business-ready thinking.',
    icon: 'portfolio',
  },
  {
    text: 'Your CV says "certified", but your projects do not show enough context or outcomes.',
    icon: 'alert',
  },
  {
    text: 'You are applying everywhere, but not positioning yourself for a specific role.',
    icon: 'target',
  },
  {
    text: 'You can talk about what you studied, but interviews still feel unpredictable.',
    icon: 'mic',
  },
]

const blueprintSteps: Array<{ title: string; text: string; icon: IconName }> = [
  {
    title: 'Choose the right digital path',
    text: 'Match your strengths to roles where you can build confidence, proof, and consistency.',
    icon: 'compass',
  },
  {
    title: 'Build employer-ready evidence',
    text: 'Turn learning exercises into portfolio pieces that show process, judgment, and results.',
    icon: 'portfolio',
  },
  {
    title: 'Package your story',
    text: 'Make your CV, LinkedIn, and portfolio say one clear thing about where you are going.',
    icon: 'spark',
  },
  {
    title: 'Handle interviews with structure',
    text: 'Prepare answers that show how you think, how you solve problems, and how you learn.',
    icon: 'mic',
  },
]

const outcomes: Array<{ text: string; icon: IconName }> = [
  { text: 'Why employers reject qualified candidates.', icon: 'alert' },
  { text: 'Which digital skill matches your strengths.', icon: 'compass' },
  { text: 'How to become employable, not just certified.', icon: 'check' },
  { text: 'What hiring managers actually look for.', icon: 'target' },
  { text: 'The exact roadmap from learning to landing opportunities.', icon: 'career' },
]

const audience: Array<{ text: string; icon: IconName }> = [
  { text: 'Students wondering what to do after school.', icon: 'student' },
  { text: 'Graduates sending applications without results.', icon: 'graduate' },
  { text: 'NYSC members and recent corps members.', icon: 'spark' },
  { text: 'Career switchers trying to enter digital work.', icon: 'switch' },
  { text: 'Online course learners who still do not feel confident.', icon: 'course' },
  { text: 'Anyone trying to choose a digital career that truly fits.', icon: 'career' },
]

const footerContacts: Array<{
  label: string
  value: string
  href?: string
  icon: IconName
}> = [
  {
    label: 'Visit us',
    value: '276b Corporation Drive, Dolphin Estate, Ikoyi Lagos.',
    icon: 'location',
  },
  {
    label: 'Call',
    value: '+234 806 897 9309',
    href: 'tel:+2348068979309',
    icon: 'phone',
  },
  {
    label: 'Email',
    value: 'fadekemi@wdc.com.ng',
    href: 'mailto:fadekemi@wdc.com.ng',
    icon: 'mail',
  },
  {
    label: 'Training enquiries',
    value: 'trainings@wdc.com.ng',
    href: 'mailto:trainings@wdc.com.ng',
    icon: 'mail',
  },
]

function Icon({ name }: { name: IconName }) {
  const paths: Record<IconName, ReactNode> = {
    spark: (
      <>
        <path d="M12 3l1.75 5.25L19 10l-5.25 1.75L12 17l-1.75-5.25L5 10l5.25-1.75L12 3z" />
        <path d="M5 17l.7 2.1L8 20l-2.3.9L5 23l-.7-2.1L2 20l2.3-.9L5 17z" />
      </>
    ),
    compass: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="M15.5 8.5l-2.1 4.9-4.9 2.1 2.1-4.9 4.9-2.1z" />
      </>
    ),
    portfolio: (
      <>
        <path d="M9 7V5.5A1.5 1.5 0 0110.5 4h3A1.5 1.5 0 0115 5.5V7" />
        <path d="M5 7h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V9a2 2 0 012-2z" />
        <path d="M3 12h18" />
        <path d="M10 12v2h4v-2" />
      </>
    ),
    mic: (
      <>
        <rect x="9" y="3" width="6" height="11" rx="3" />
        <path d="M5 11a7 7 0 0014 0" />
        <path d="M12 18v3" />
        <path d="M8 21h8" />
      </>
    ),
    target: (
      <>
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v3" />
        <path d="M12 19v3" />
        <path d="M2 12h3" />
        <path d="M19 12h3" />
      </>
    ),
    calendar: (
      <>
        <rect x="4" y="5" width="16" height="15" rx="2" />
        <path d="M8 3v4" />
        <path d="M16 3v4" />
        <path d="M4 10h16" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    monitor: (
      <>
        <rect x="3" y="5" width="18" height="12" rx="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
      </>
    ),
    alert: (
      <>
        <path d="M12 4l9 16H3L12 4z" />
        <path d="M12 9v5" />
        <path d="M12 17h.01" />
      </>
    ),
    student: (
      <>
        <path d="M3 8l9-4 9 4-9 4-9-4z" />
        <path d="M7 10v5c2.8 2 7.2 2 10 0v-5" />
        <path d="M21 8v6" />
      </>
    ),
    graduate: (
      <>
        <path d="M12 13a4 4 0 100-8 4 4 0 000 8z" />
        <path d="M4 21a8 8 0 0116 0" />
        <path d="M17 5l2-2 2 2" />
      </>
    ),
    switch: (
      <>
        <path d="M7 7h11l-3-3" />
        <path d="M18 7l-3 3" />
        <path d="M17 17H6l3 3" />
        <path d="M6 17l3-3" />
      </>
    ),
    course: (
      <>
        <path d="M5 4h11a3 3 0 013 3v13H8a3 3 0 01-3-3V4z" />
        <path d="M8 4v13a3 3 0 003 3" />
        <path d="M9 8h6" />
        <path d="M9 12h5" />
      </>
    ),
    career: (
      <>
        <path d="M4 18l5-5 3 3 7-8" />
        <path d="M15 8h4v4" />
        <path d="M4 21h16" />
      </>
    ),
    check: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="M8.5 12.5l2.2 2.2 4.8-5.2" />
      </>
    ),
    location: (
      <>
        <path d="M12 21s7-5.2 7-11a7 7 0 10-14 0c0 5.8 7 11 7 11z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    phone: (
      <>
        <path d="M6.6 4.5l2.1-.9 2.2 5-1.7 1.2a10.6 10.6 0 005 5l1.2-1.7 5 2.2-.9 2.1c-.4 1-1.5 1.6-2.6 1.4C10.5 17.7 6.3 13.5 5.2 7.1 5 6 5.6 4.9 6.6 4.5z" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M4 7l8 6 8-6" />
      </>
    ),
  }

  return (
    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
      {paths[name]}
    </svg>
  )
}

function App() {
  return (
    <main className="page" id="top">
      <section className="hero" aria-labelledby="hero-title">
        <header className="nav" aria-label="Site header">
          <a className="brand" href="#top" aria-label="Wild Fusion Digital Centre">
            <img src="/company_logo.png" alt="Wild Fusion Digital Centre" />
          </a>

          <div className="nav-right">
            <img
              className="accreditation"
              src="/accreditation_logo.png"
              alt="American Council of Training and Development accreditation"
            />
            <a className="nav-link" href="#agenda">
              Agenda
            </a>
            <a className="nav-cta" href={reserveLink} target="_blank" rel="noreferrer">
              Reserve seat
            </a>
          </div>
        </header>

        <div className="hero-inner">
          <div className="hero-copy">
            <p className="label hero-label">
              <Icon name="spark" />
              Free online career webinar
            </p>
            <h1 id="hero-title">Why Aren't You Getting Hired?</h1>
            <p className="subtitle">The Employability Blueprint</p>
            <p className="lede">
              Learn what employers actually look for, discover which digital skill fits
              you best, and build a career they cannot ignore.
            </p>

            <div className="hero-actions">
              <a className="button primary" href={reserveLink} target="_blank" rel="noreferrer">
                Reserve My Seat
              </a>
              <a className="button ghost" href="#blueprint">
                View the blueprint
              </a>
            </div>
          </div>

          <aside className="event-pass" aria-label="Webinar details">
            <div className="event-pass-top">
              <p>Live session</p>
              <strong>Employability</strong>
              <span>career clarity sprint</span>
            </div>
            <dl>
              {eventDetails.map((detail) => (
                <div key={detail.label}>
                  <dt>
                    <Icon name={detail.icon} />
                    {detail.label}
                  </dt>
                  <dd>{detail.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      <section className="signal-bar" aria-label="Webinar focus areas">
        {signals.map((signal) => (
          <article key={signal.label}>
            <Icon name={signal.icon} />
            <span>{signal.label}</span>
          </article>
        ))}
      </section>

      <section className="problem section">
        <div className="section-kicker">
          <p className="label">The problem is not just skill</p>
        </div>

        <div className="problem-grid">
          <div>
            <h2>The job market does not reward unclear potential.</h2>
            <p>
              It rewards visible evidence: the right skill direction, a documented
              portfolio, a focused application story, and the confidence to explain your
              work in interviews.
            </p>
          </div>

          <ul className="barrier-list">
            {barriers.map((barrier) => (
              <li key={barrier.text}>
                <Icon name={barrier.icon} />
                <span>{barrier.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="blueprint" id="blueprint" aria-labelledby="blueprint-title">
        <div className="blueprint-image">
          <img
            className="blueprint-photo-main"
            src="/students_image1.jpg"
            alt="Wild Fusion Digital Centre students"
          />
          <img
            className="blueprint-photo-overlay"
            src="/student_image4.jpg"
            alt="Wild Fusion Digital Centre logo"
          />
          <img
            className="blueprint-photo-secondary"
            src="/student_image2.png"
            alt="Wild Fusion Digital Centre students in class"
          />
        </div>

        <div className="blueprint-content">
          <p className="label">The employability blueprint</p>
          <h2 id="blueprint-title">A practical path from learning to landing opportunities.</h2>

          <div className="step-list">
            {blueprintSteps.map((step, index) => (
              <article className="step" key={step.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <Icon name={step.icon} />
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="agenda section" id="agenda">
        <div className="section-heading">
          <p className="label">What we'll cover</p>
          <h2>By the end of this session, you will know what to fix next.</h2>
        </div>

        <ul className="outcome-list">
          {outcomes.map((outcome) => (
            <li key={outcome.text}>
              <Icon name={outcome.icon} />
              <span>{outcome.text}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="audience section">
        <div className="audience-intro">
          <p className="label">Who this is for</p>
          <h2>Built for people caught between learning, experience, and getting hired.</h2>
          <p>
            If you are asking "what should I learn?", "what should I put in my
            portfolio?", or "why are my applications not working?", this webinar was
            designed for that exact middle place.
          </p>
        </div>

        <div className="audience-grid">
          {audience.map((item) => (
            <article key={item.text}>
              <Icon name={item.icon} />
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="register">
        <div>
          <p className="label">27 July 2026 | 10:00 AM WAT | Online</p>
          <h2>Reserve your seat and leave with a clearer career plan.</h2>
          <p>
            Come with your questions about choosing a skill, building a credible
            portfolio, applying for roles, and preparing for interviews.
          </p>
        </div>

        <a className="button primary" href={reserveLink} target="_blank" rel="noreferrer">
          Reserve My Seat
        </a>
      </section>

      <footer className="footer">
        <div className="footer-brand">
          <img src="/company_logo.png" alt="Wild Fusion Digital Centre" />
          <p>
            Helping learners build practical digital skills, credible portfolios, and
            stronger career confidence.
          </p>
          <a className="footer-cta" href={reserveLink} target="_blank" rel="noreferrer">
            Reserve a webinar seat
          </a>
        </div>

        <address className="footer-contact" aria-label="Wild Fusion Digital Centre contact details">
          {footerContacts.map((contact) => {
            const content = (
              <>
                <Icon name={contact.icon} />
                <span>
                  <strong>{contact.label}</strong>
                  {contact.value}
                </span>
              </>
            )

            return contact.href ? (
              <a key={contact.value} href={contact.href}>
                {content}
              </a>
            ) : (
              <p key={contact.value}>{content}</p>
            )
          })}
        </address>

      </footer>

      <a className="mobile-cta" href={reserveLink} target="_blank" rel="noreferrer">
        Reserve My Seat
      </a>
    </main>
  )
}

export default App
