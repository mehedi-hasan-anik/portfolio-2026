import { ImageResponse } from 'next/og';
import { siteConfig } from '@/lib/data';

export const runtime = 'edge';
export const alt = `${siteConfig.name} — ${siteConfig.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#0e0c0a',
          color: '#f3ece0',
          padding: '80px',
          fontFamily: 'serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              background: '#d4a056',
              color: '#0e0c0a',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 32,
              fontWeight: 700,
              borderRadius: 4,
              fontFamily: 'sans-serif',
            }}
          >
            A
          </div>
          <div
            style={{
              fontFamily: 'monospace',
              fontSize: 14,
              textTransform: 'uppercase',
              letterSpacing: 4,
              color: '#a39989',
            }}
          >
            anikmiah.dev
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 92,
              lineHeight: 1,
              letterSpacing: -2,
            }}
          >
            Building systems
          </div>
          <div style={{ fontSize: 92, lineHeight: 1, letterSpacing: -2 }}>
            that{' '}
            <span style={{ fontStyle: 'italic', color: '#d4a056' }}>scale quietly.</span>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            fontFamily: 'monospace',
            fontSize: 18,
            color: '#a39989',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <div style={{ color: '#f3ece0' }}>{siteConfig.name}</div>
            <div>{siteConfig.role} · {siteConfig.location}</div>
          </div>
          <div
            style={{
              padding: '10px 16px',
              border: '1px solid #d4a056',
              color: '#d4a056',
              fontSize: 14,
            }}
          >
            Available for work →
          </div>
        </div>
      </div>
    ),
    size
  );
}
