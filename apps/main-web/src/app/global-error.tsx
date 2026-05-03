'use client';

import { useEffect } from 'react';

const GlobalError = ({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) => {
  useEffect(() => {
    // TODO: 에러 트래킹 서비스로 전송
    console.error(error);
  }, [error]);

  return (
    <html lang="ko">
      <body style={{ margin: 0, background: '#0d0a28', color: '#ffffff', fontFamily: 'system-ui, sans-serif' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            gap: '1rem',
            textAlign: 'center',
            padding: '1.5rem',
          }}
        >
          <span style={{ fontSize: '5rem', fontWeight: 900, margin: 0 }}>500</span>

          <h1 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0 }}>오류가 발생했습니다</h1>

          <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)', margin: 0 }}>
            Something went wrong. Please try again.
          </p>

          <button
            onClick={reset}
            style={{
              marginTop: '0.5rem',
              fontSize: '0.875rem',
              fontWeight: 500,
              color: '#ffffff',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              textDecoration: 'underline',
              textUnderlineOffset: '4px',
              opacity: 0.8,
            }}
          >
            다시 시도 / Try again
          </button>
        </div>
      </body>
    </html>
  );
};

export default GlobalError;
