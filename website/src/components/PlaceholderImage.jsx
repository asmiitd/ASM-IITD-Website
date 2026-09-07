export default function PlaceholderImage({ shape = 'rect', caption = 'Add a photo' }) {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background: 'rgba(127,127,127,0.08)',
        border: '1.5px dashed currentColor',
        borderRadius: shape === 'circle' ? '50%' : '4px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        opacity: 0.75,
        color: 'inherit',
        textAlign: 'center',
        padding: 12,
      }}
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
      <span style={{ fontSize: 11, maxWidth: '90%', fontWeight: 500, letterSpacing: '0.01em' }}>{caption}</span>
    </div>
  )
}
