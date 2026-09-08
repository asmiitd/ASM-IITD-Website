export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid #E4D8C2', background: '#F5EBD9' }}>
      <div
        style={{
          maxWidth: 1180,
          margin: '0 auto',
          padding: '44px 32px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: 28,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <img
            src={`${import.meta.env.BASE_URL}logo.png`}
            alt=""
            style={{ width: 38, height: 38, display: 'block', opacity: 0.9 }}
          />
          <div>
            <p style={{ margin: 0, fontFamily: 'Spectral, Georgia, serif', fontSize: 15, color: '#7A0F14' }}>
              ASM&#8209;IITD Student Chapter
            </p>
            <p style={{ margin: '2px 0 0', fontSize: 13, color: '#7C6A5C' }}>
              Indian Institute of Technology Delhi, Hauz Khas, New Delhi 110016
            </p>
          </div>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, fontSize: '13.5px' }}>
          <a href="https://www.instagram.com/asm.iitd" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href="https://www.linkedin.com/company/asm-iitd-student-chapter/about/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={`${import.meta.env.BASE_URL}constitution.pdf`} target="_blank" rel="noopener noreferrer">
            Constitution (PDF)
          </a>
        </div>
      </div>
    </footer>
  )
}
