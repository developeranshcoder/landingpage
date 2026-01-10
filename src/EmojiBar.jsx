import React from 'react'

export default function EmojiBar({ className = '' }) {
  const emojis = [
    { symbol: '🏎️', label: 'Racing' },
    { symbol: '🚗', label: 'Car' },
    { symbol: '🏁', label: 'Flag' },
    { symbol: '🔥', label: 'Fast' },
    { symbol: '⚡️', label: 'Electric' },
    { symbol: '🛣️', label: 'Track' },
    { symbol: '🏆', label: 'Winner' },
    { symbol: '🚦', label: 'Signal' },
  ]

  const styles = {
    bar: {
      display: 'flex',
      gap: 12,
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      padding: '12px 8px',
    },
    item: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: 64,
      height: 64,
      borderRadius: 12,
      background: 'rgba(255,255,255,0.06)',
      color: '#fff',
      fontSize: 28,
      boxShadow: 'inset 0 -6px 18px rgba(0,0,0,0.2)',
    },
    label: {
      marginTop: 6,
      fontSize: 12,
      color: 'rgba(255,255,255,0.85)'
    }
  }

  return (
    <div className={className} style={styles.bar} aria-hidden>
      {emojis.map((e) => (
        <div key={e.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={styles.item}>{e.symbol}</div>
          <div style={styles.label}>{e.label}</div>
        </div>
      ))}
    </div>
  )
}
