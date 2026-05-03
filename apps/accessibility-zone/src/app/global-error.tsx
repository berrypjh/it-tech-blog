'use client';

import { useEffect } from 'react';

const GlobalError = ({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) => {
  useEffect(() => {
    // TODO: 에러 트래킹 서비스로 전송
    console.error(error);
  }, [error]);

  return (
    <html lang="ko">
      <body style={{ margin: 0, background: '#101828', color: '#f2f4f7', fontFamily: 'system-ui, sans-serif' }}>
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
          <span style={{ fontSize: '4rem', fontWeight: 900, color: '#10b981', fontFamily: 'monospace' }}>500</span>

          <h1 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0 }}>오류가 발생했습니다</h1>

          <p style={{ fontSize: '0.875rem', color: '#98a2b3', margin: 0 }}>Something went wrong. Please try again.</p>

          <button
            onClick={reset}
            style={{
              marginTop: '0.5rem',
              fontSize: '0.875rem',
              fontWeight: 500,
              color: '#10b981',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              textDecoration: 'underline',
              textUnderlineOffset: '4px',
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
