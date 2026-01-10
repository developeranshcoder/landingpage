import React, { useState } from 'react';

export default function Card({ title = 'Title', description = 'Description', image = '', className = '', ...props }) {
    const [hovered, setHovered] = useState(false)

    const styles = {
        container: {
            position: 'relative',
            borderRadius: 16,
            overflow: 'hidden',
            height: 320,
            backgroundColor: '#111827',
            backgroundImage: image ? `url(${image})` : 'none',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            boxShadow: '0 8px 30px rgba(2,6,23,0.6)',
            color: '#fff',
            fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
            display: 'flex',
            alignItems: 'flex-end',
        },
        overlay: {
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.7) 100%)',
            transition: 'opacity 240ms ease',
            pointerEvents: 'none',
        },
        content: {
            position: 'relative',
            padding: 20,
            zIndex: 2,
            width: '100%',
        },
        title: {
            margin: 0,
            fontSize: 22,
            fontWeight: 700,
            textShadow: '0 2px 6px rgba(0,0,0,0.6)'
        },
        description: {
            marginTop: 12,
            marginBottom: 0,
            color: '#e5e7eb',
            fontSize: 14,
            lineHeight: 1.5,
            maxHeight: hovered ? 140 : 0,
            overflow: 'hidden',
            transition: 'max-height 300ms ease, opacity 200ms ease',
            opacity: hovered ? 1 : 0,
        },
        footerButton: {
            marginTop: 12,
            display: hovered ? 'inline-block' : 'none',
            background: 'transparent',
            border: '1px solid rgba(255,255,255,0.8)',
            color: '#fff',
            padding: '8px 12px',
            borderRadius: 8,
            cursor: 'pointer',
        }
    };

    return (
        <article
            className={className}
            style={styles.container}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            {...props}
        >
            <div style={styles.overlay} />

            <div style={styles.content}>
                <h2 style={styles.title}>{title}</h2>
                <p style={styles.description}>{description}</p>
                <button style={styles.footerButton}>See more</button>
            </div>
        </article>
    );
}