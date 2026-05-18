'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

import { HamburgerIcon } from '@it-tech-blog/icons';

import { Sidebar } from './Sidebar';

export const AppShell = ({ children }: { children: React.ReactNode }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <div className="flex h-screen w-full max-w-[1440px] mx-auto bg-[var(--term-bg)] text-[var(--term-fg)] overflow-hidden">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:top-mdl focus:left-mdl focus:px-mdl focus:py-sm focus:bg-[var(--term-accent)] focus:text-[var(--term-bg)] focus:text-xsm focus:font-medium focus:shadow-lg"
      >
        본문으로 건너뛰기
      </a>

      {/* 데스크탑 사이드바 */}
      <div className="hidden lg:block w-[300px] shrink-0 h-full relative">
        <div className="absolute inset-0">
          <Sidebar />
        </div>
      </div>

      {/* 모바일 드로어 */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            aria-hidden="true"
            onClick={() => setMobileOpen(false)}
          />

          <div className="relative w-[300px] h-full shadow-2xl">
            <Sidebar />
          </div>
        </div>
      )}

      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        {/* 모바일 헤더 */}
        <header className="lg:hidden flex items-center gap-sml px-mdl h-12 border-b border-[var(--term-border)] bg-[var(--term-bg)] shrink-0">
          <button
            onClick={() => setMobileOpen(true)}
            aria-label="메뉴 열기"
            aria-expanded={mobileOpen}
            className="p-xsm text-[var(--term-muted)] hover:text-[var(--term-accent)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)]"
          >
            <HamburgerIcon />
          </button>

          <span className="text-xxsm tracking-tight">
            <span className="text-[var(--term-accent)] font-bold">$</span>{' '}
            <span className="font-bold text-[var(--term-fg)]">react-lab</span>
          </span>
        </header>

        <main id="main-content" className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};
