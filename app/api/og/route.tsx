import { ImageResponse } from 'next/og'
import type { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const title = searchParams.get('title') ?? 'Shehzad Ali'
  const subtitle = searchParams.get('subtitle') ?? 'Python Backend & GenAI Engineer'

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#0F172A',
          padding: '60px 72px',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Blurred blob top-left */}
        <div
          style={{
            position: 'absolute',
            top: '-80px',
            left: '-80px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'rgba(37,99,235,0.18)',
            filter: 'blur(80px)',
          }}
        />
        {/* Blurred blob bottom-right */}
        <div
          style={{
            position: 'absolute',
            bottom: '-60px',
            right: '-60px',
            width: '320px',
            height: '320px',
            borderRadius: '50%',
            background: 'rgba(99,102,241,0.12)',
            filter: 'blur(80px)',
          }}
        />

        {/* Top row: logo + available badge */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '48px' }}>
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              background: '#2563EB',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '18px',
              fontWeight: 700,
              color: '#fff',
            }}
          >
            SA
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '100px',
              padding: '8px 20px',
              fontSize: '13px',
              color: '#94A3B8',
              fontWeight: 600,
              letterSpacing: '0.08em',
            }}
          >
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981' }} />
            OPEN TO REMOTE
          </div>
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: '64px',
            fontWeight: 800,
            color: '#F1F5F9',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            marginBottom: '16px',
          }}
        >
          {title}
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: '28px',
            fontWeight: 600,
            color: '#2563EB',
            marginBottom: '24px',
          }}
        >
          {subtitle}
        </div>

        {/* Summary line */}
        <div
          style={{
            fontSize: '18px',
            color: '#64748B',
            maxWidth: '720px',
            lineHeight: 1.6,
            marginBottom: '48px',
          }}
        >
          Building scalable AI-powered systems that actually ship.
        </div>

        {/* Skill chips */}
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '48px' }}>
          {['Python', 'FastAPI', 'LangChain', 'RAG', 'AWS', 'React', 'Docker'].map((s) => (
            <div
              key={s}
              style={{
                background: 'rgba(37,99,235,0.12)',
                border: '1px solid rgba(37,99,235,0.25)',
                borderRadius: '8px',
                padding: '6px 16px',
                fontSize: '14px',
                fontWeight: 700,
                color: '#93C5FD',
                letterSpacing: '0.06em',
              }}
            >
              {s}
            </div>
          ))}
        </div>

        {/* Bottom stat row */}
        <div
          style={{
            display: 'flex',
            gap: '48px',
            borderTop: '1px solid rgba(255,255,255,0.06)',
            paddingTop: '32px',
          }}
        >
          {[
            { value: '7+', label: 'Years Exp' },
            { value: '1M+', label: 'API Req/Day' },
            { value: '80%', label: 'Faster Lookup' },
            { value: '14', label: 'Engineers Led' },
          ].map((stat) => (
            <div key={stat.label} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div style={{ fontSize: '28px', fontWeight: 800, color: '#fff' }}>{stat.value}</div>
              <div style={{ fontSize: '12px', color: '#475569', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
