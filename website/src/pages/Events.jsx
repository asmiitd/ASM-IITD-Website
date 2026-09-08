import { Link } from 'react-router-dom'
import PlaceholderImage from '../components/PlaceholderImage.jsx'
import Reveal from '../components/Reveal.jsx'

const events = [
  {
    id: 'ev-microbiome-day',
    eyebrow: 'Hackathon · add date',
    title: 'World Microbiome Day Hackathon',
    description:
      'A day‑long hackathon marking World Microbiome Day, with student teams building solutions around the human and environmental microbiome. Replace this paragraph with the theme, problem statements and winning teams.',
    tags: ['Teams: add count', 'Venue: add venue'],
    placeholder: 'Drop a photo from the hackathon',
  },
  {
    id: 'ev-tour-of-stalls',
    eyebrow: 'Campus activity · add date',
    title: 'Tour of Stalls',
    description:
      'A guided walk through the exhibit stalls, introducing visitors to the chapter and to microbiology work happening across the three departments. Replace this paragraph with what was shown and who attended.',
    tags: ['Visitors: add count', 'Venue: add venue'],
    placeholder: 'Drop a photo from the tour',
  },
  {
    id: 'ev-open-house-2026',
    eyebrow: 'Outreach · 2026',
    title: 'Open House 2026',
    description:
      'The chapter’s first public appearance at the IIT Delhi Open House, presenting microbiology demonstrations and the chapter’s plans to visiting students and families. Replace this paragraph with the demonstrations you ran and the footfall.',
    tags: ['Visitors: add count', 'Venue: add venue'],
    placeholder: 'Drop a photo from Open House',
  },
]

export default function Events() {
  return (
    <main style={{ maxWidth: 1180, margin: '0 auto', padding: '72px 32px 90px' }}>
      <Reveal>
        <p
          style={{
            margin: '0 0 14px',
            fontSize: '11.5px',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#A8262B',
          }}
        >
          Archive
        </p>
      </Reveal>
      <Reveal delay={0.06}>
        <h1
          style={{
            margin: '0 0 18px',
            fontFamily: 'Spectral, Georgia, serif',
            fontSize: 'clamp(32px, 4.4vw, 54px)',
            lineHeight: 1.08,
            fontWeight: 600,
            letterSpacing: '-0.015em',
          }}
        >
          Events
        </h1>
      </Reveal>
      <Reveal delay={0.12}>
        <p style={{ margin: '0 0 56px', maxWidth: '62ch', fontSize: 17, lineHeight: 1.62, color: '#4A3A33' }}>
          Competitions, hands‑on workshops, outreach activities and career fairs run by the chapter,
          newest first. Seminars and talks live under <Link to="/talks">Talks</Link>.
        </p>
      </Reveal>

      {events.map((event, i) => (
        <Reveal
          key={event.id}
          as="article"
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.05fr)',
            gap: 40,
            alignItems: 'start',
            paddingBottom: i === events.length - 1 ? 0 : 52,
            marginBottom: i === events.length - 1 ? 0 : 52,
            borderBottom: i === events.length - 1 ? undefined : '1px solid #E4D8C2',
          }}
        >
          <div style={{ position: 'relative', width: '100%', aspectRatio: '4 / 3', background: '#F5EBD9' }}>
            <PlaceholderImage caption={event.placeholder} />
          </div>
          <div>
            <p
              style={{
                margin: '0 0 12px',
                fontSize: 12,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#8C7A6B',
              }}
            >
              {event.eyebrow}
            </p>
            <h2
              style={{
                margin: '0 0 16px',
                fontFamily: 'Spectral, Georgia, serif',
                fontSize: 'clamp(24px, 2.6vw, 34px)',
                lineHeight: 1.16,
                fontWeight: 600,
              }}
            >
              {event.title}
            </h2>
            <p style={{ margin: '0 0 20px', fontSize: '16.5px', lineHeight: 1.66, color: '#4A3A33', textWrap: 'pretty' }}>
              {event.description}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {event.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    padding: '6px 13px',
                    border: '1px solid #DFCFB4',
                    borderRadius: '999px',
                    fontSize: '12.5px',
                    color: '#6B584E',
                    whiteSpace: 'nowrap',
                    flex: '0 0 auto',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      ))}
    </main>
  )
}
