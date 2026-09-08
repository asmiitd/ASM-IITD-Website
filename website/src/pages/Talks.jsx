import PlaceholderImage from '../components/PlaceholderImage.jsx'
import Reveal from '../components/Reveal.jsx'

export default function Talks() {
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
          Seminars, webinars and talk series
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
          Talks
        </h1>
      </Reveal>
      <Reveal delay={0.12}>
        <p style={{ margin: '0 0 56px', maxWidth: '62ch', fontSize: 17, lineHeight: 1.62, color: '#4A3A33' }}>
          The chapter’s speaker programme, held on campus and online. Recordings and slides are
          linked where the speaker has agreed to share them.
        </p>
      </Reveal>

      <Reveal
        as="section"
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.05fr)',
          gap: 40,
          alignItems: 'center',
          padding: 32,
          marginBottom: 64,
          background: '#7A0F14',
          color: '#F7EFE0',
        }}
      >
        <div style={{ position: 'relative', width: '100%', aspectRatio: '4 / 3' }}>
          <PlaceholderImage caption="Drop the series poster" />
        </div>
        <div>
          <p
            style={{
              margin: '0 0 12px',
              fontSize: '11.5px',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#E9C6A4',
            }}
          >
            Flagship series · starting soon
          </p>
          <h2
            style={{
              margin: '0 0 16px',
              fontFamily: 'Spectral, Georgia, serif',
              fontSize: 'clamp(26px, 2.8vw, 38px)',
              lineHeight: 1.14,
              fontWeight: 600,
            }}
          >
            Young Microbiologists Talk Series
          </h2>
          <p style={{ margin: '0 0 22px', fontSize: '16.5px', lineHeight: 1.66, color: '#EBD9C4', textWrap: 'pretty' }}>
            A recurring series putting early career microbiologists — PhD scholars, postdocs and
            young faculty — in front of students to talk about their research and the paths that
            took them there. Replace this paragraph with the format, frequency and how to nominate
            a speaker.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <span
              style={{
                padding: '6px 13px',
                border: '1px solid #C2757A',
                borderRadius: '999px',
                fontSize: '12.5px',
                color: '#F0DFCB',
                whiteSpace: 'nowrap',
                flex: '0 0 auto',
              }}
            >
              Open to all students
            </span>
            <span
              style={{
                padding: '6px 13px',
                border: '1px solid #C2757A',
                borderRadius: '999px',
                fontSize: '12.5px',
                color: '#F0DFCB',
                whiteSpace: 'nowrap',
                flex: '0 0 auto',
              }}
            >
              Offline &amp; online
            </span>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <h2 style={{ margin: '0 0 8px', fontFamily: 'Spectral, Georgia, serif', fontSize: 26, fontWeight: 600 }}>
          Upcoming
        </h2>
      </Reveal>
      <Reveal delay={0.06}>
        <p style={{ margin: '0 0 24px', fontSize: 15, color: '#6B584E' }}>
          Edit this entry, or duplicate it for each scheduled talk.
        </p>
      </Reveal>
      <Reveal
        as="article"
        delay={0.12}
        style={{
          display: 'grid',
          gridTemplateColumns: '120px minmax(0, 1fr) auto',
          gap: 26,
          alignItems: 'center',
          padding: '24px 26px',
          marginBottom: 64,
          background: '#F5EBD9',
          border: '1px solid #E4D8C2',
        }}
      >
        <div>
          <p style={{ margin: 0, fontFamily: 'Spectral, Georgia, serif', fontSize: 30, fontWeight: 600, color: '#7A0F14' }}>
            DD
          </p>
          <p style={{ margin: '2px 0 0', fontSize: '12.5px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8C7A6B' }}>
            Month · time
          </p>
        </div>
        <div>
          <h3 style={{ margin: '0 0 8px', fontSize: 19, fontWeight: 600, lineHeight: 1.35 }}>Talk title</h3>
          <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: '#4A3A33' }}>
            Speaker name, affiliation · one line on the topic. Add the venue or the meeting link.
          </p>
        </div>
        <span
          style={{
            padding: '7px 14px',
            border: '1px solid #DFCFB4',
            borderRadius: '999px',
            fontSize: '12.5px',
            color: '#6B584E',
            whiteSpace: 'nowrap',
          }}
        >
          Offline / Online
        </span>
      </Reveal>

      <Reveal>
        <h2 style={{ margin: '0 0 8px', fontFamily: 'Spectral, Georgia, serif', fontSize: 26, fontWeight: 600 }}>
          Past talks
        </h2>
      </Reveal>
      <Reveal delay={0.06}>
        <p style={{ margin: '0 0 24px', fontSize: 15, color: '#6B584E' }}>
          Every completed talk is archived here with its speaker and recording.
        </p>
      </Reveal>
      <Reveal
        delay={0.12}
        style={{ padding: '40px 26px', border: '1px dashed #D3C1A4', borderRadius: 4, textAlign: 'center' }}
      >
        <p style={{ margin: 0, fontSize: 15, color: '#7C6A5C' }}>
          No talks held yet — the first entries appear once the series begins.
        </p>
      </Reveal>
    </main>
  )
}
