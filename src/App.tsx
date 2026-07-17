import './App.css'

const reserveLink =
  'https://docs.google.com/forms/d/e/1FAIpQLSeJCiwP1G41hdjuoJRPRguhPjE3H_rsOoGJw_gmQEz8KGPZKw/viewform?usp=preview'

const eventDetails = [
  { label: 'Date', value: '27 July 2026' },
  { label: 'Time', value: '10:00 AM WAT' },
  { label: 'Location', value: 'Online webinar' },
]

const signals = ['Skill fit', 'Portfolio proof', 'Interview clarity', 'Application strategy']

const barriers = [
  'You learnt the skill, but your portfolio does not show business-ready thinking.',
  'Your CV says “certified”, but your projects do not show enough context or outcomes.',
  'You are applying everywhere, but not positioning yourself for a specific role.',
  'You can talk about what you studied, but interviews still feel unpredictable.',
]

const blueprintSteps = [
  {
    title: 'Choose the right digital path',
    text: 'Match your strengths to roles where you can build confidence, proof, and consistency.',
  },
  {
    title: 'Build employer-ready evidence',
    text: 'Turn learning exercises into portfolio pieces that show process, judgment, and results.',
  },
  {
    title: 'Package your story',
    text: 'Make your CV, LinkedIn, and portfolio say one clear thing about where you are going.',
  },
  {
    title: 'Handle interviews with structure',
    text: 'Prepare answers that show how you think, how you solve problems, and how you learn.',
  },
]

const outcomes = [
  'Why employers reject qualified candidates.',
  'Which digital skill matches your strengths.',
  'How to become employable, not just certified.',
  'What hiring managers actually look for.',
  'The exact roadmap from learning to landing opportunities.',
]

const audience = [
  'Students wondering what to do after school.',
  'Graduates sending applications without results.',
  'NYSC members and recent corps members.',
  'Career switchers trying to enter digital work.',
  'Online course learners who still do not feel confident.',
  'Anyone trying to choose a digital career that truly fits.',
]

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
            <p className="label">Free online career webinar</p>
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
            </div>
            <dl>
              {eventDetails.map((detail) => (
                <div key={detail.label}>
                  <dt>{detail.label}</dt>
                  <dd>{detail.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      <section className="signal-bar" aria-label="Webinar focus areas">
        {signals.map((signal) => (
          <span key={signal}>{signal}</span>
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
              <li key={barrier}>{barrier}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="blueprint" id="blueprint" aria-labelledby="blueprint-title">
        <div className="blueprint-image">
          <img src="/students_image1.png" alt="Wild Fusion Digital Centre students" />
        </div>

        <div className="blueprint-content">
          <p className="label">The employability blueprint</p>
          <h2 id="blueprint-title">A practical path from learning to landing opportunities.</h2>

          <div className="step-list">
            {blueprintSteps.map((step, index) => (
              <article className="step" key={step.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
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
            <li key={outcome}>{outcome}</li>
          ))}
        </ul>
      </section>

      <section className="audience section">
        <div className="audience-intro">
          <p className="label">Who this is for</p>
          <h2>Built for people caught between learning, experience, and getting hired.</h2>
          <p>
            If you are asking “what should I learn?”, “what should I put in my
            portfolio?”, or “why are my applications not working?”, this webinar was
            designed for that exact middle place.
          </p>
        </div>

        <div className="audience-grid">
          {audience.map((item) => (
            <article key={item}>
              <span aria-hidden="true" />
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="register">
        <div>
          <p className="label">27 July 2026 • 10:00 AM WAT • Online</p>
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
        <img src="/company_logo.png" alt="Wild Fusion Digital Centre" />
        <p>Hosted by Wild Fusion Digital Centre.</p>
      </footer>

      <a className="mobile-cta" href={reserveLink} target="_blank" rel="noreferrer">
        Reserve My Seat
      </a>
    </main>
  )
}

export default App
