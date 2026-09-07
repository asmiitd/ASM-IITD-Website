import { NavLink } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/events', label: 'Events' },
  { to: '/talks', label: 'Talks' },
  { to: '/team', label: 'Team' },
]

function navStyle({ isActive }) {
  return {
    padding: '9px 18px',
    border: 0,
    borderRadius: '999px',
    background: isActive ? '#7A0F14' : 'transparent',
    color: isActive ? '#FAF5EA' : '#5C4A42',
    fontFamily: "'IBM Plex Sans', sans-serif",
    fontSize: '14px',
    letterSpacing: '0.02em',
    cursor: 'pointer',
    display: 'inline-block',
  }
}

const socialLinkStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '34px',
  height: '34px',
  border: '1px solid #DFCFB4',
  borderRadius: '999px',
  fontSize: '11px',
  letterSpacing: '0.04em',
}

export default function Header() {
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 20,
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        flexWrap: 'wrap',
        padding: '14px 32px',
        background: 'rgba(250,245,234,0.94)',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid #E4D8C2',
      }}
    >
      <NavLink
        to="/"
        style={{ display: 'flex', alignItems: 'center', gap: '14px', marginRight: 'auto' }}
      >
        <img
          src={`${import.meta.env.BASE_URL}logo.png`}
          alt="ASM-IITD chapter logo"
          style={{ width: 46, height: 46, display: 'block' }}
        />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <span
            style={{
              fontFamily: "Spectral, Georgia, serif",
              fontSize: '19px',
              fontWeight: 600,
              letterSpacing: '0.01em',
              color: '#7A0F14',
            }}
          >
            ASM&#8209;IITD
          </span>
          <span
            style={{
              fontSize: '10.5px',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#7C6A5C',
            }}
          >
            Student Chapter
          </span>
        </div>
      </NavLink>

      <nav style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        {navLinks.map((link) => (
          <NavLink key={link.to} to={link.to} end={link.end} style={navStyle}>
            {link.label}
          </NavLink>
        ))}
      </nav>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          paddingLeft: 8,
          borderLeft: '1px solid #E4D8C2',
        }}
      >
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram"
          className="social-link"
          style={socialLinkStyle}
        >
          IG
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
          className="social-link"
          style={socialLinkStyle}
        >
          in
        </a>
      </div>
    </header>
  )
}
