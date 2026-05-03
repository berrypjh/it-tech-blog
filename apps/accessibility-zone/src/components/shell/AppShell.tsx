'use client';

import { useState, useEffect } from 'react';
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
    <div className="flex h-screen w-full max-w-[1440px] mx-auto bg-background text-foreground overflow-hidden">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:top-4 focus:left-4 focus:px-4 focus:py-2 focus:rounded-md focus:bg-emerald-500 focus:text-white focus:text-sm focus:font-medium focus:shadow-lg"
      >
        본문으로 건너뛰기
      </a>

      {/* 데스크탑 사이드바 */}
      <div className="hidden lg:block w-[280px] shrink-0 h-full border-r border-border relative">
        <div className="absolute inset-0">
          <Sidebar />
        </div>
      </div>

      {/* 모바일 드로어 */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            aria-hidden="true"
            onClick={() => setMobileOpen(false)}
          />

          <div className="relative w-[280px] h-full shadow-xl">
            <Sidebar />
          </div>
        </div>
      )}

      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        {/* 모바일 헤더 */}
        <header className="lg:hidden flex items-center gap-3 px-4 h-14 border-b border-border bg-background shrink-0">
          <button
            onClick={() => setMobileOpen(true)}
            aria-label="메뉴 열기"
            aria-expanded={mobileOpen}
            className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
          >
            <HamburgerIcon />
          </button>

          <span className="font-bold text-sm text-foreground tracking-tight">A11y Lab</span>
        </header>

        <main id="main-content" className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};
