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
    <div className="flex h-screen w-full max-w-[1440px] mx-auto bg-background-surface text-text-default overflow-hidden">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:top-mdl focus:left-mdl focus:px-mdl focus:py-sm focus:rounded-md focus:bg-background-primary focus:text-text-contrastText focus:text-xsm focus:font-medium focus:shadow-lg"
      >
        본문으로 건너뛰기
      </a>

      {/* 데스크탑 사이드바 */}
      <div className="hidden lg:block w-[280px] shrink-0 h-full border-r border-stroke-default relative">
        <div className="absolute inset-0">
          <Sidebar />
        </div>
      </div>

      {/* 모바일 드로어 */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-background-dark/50 backdrop-blur-sm"
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
        <header className="lg:hidden flex items-center gap-sml px-mdl h-14 border-b border-stroke-default bg-background-surface shrink-0">
          <button
            onClick={() => setMobileOpen(true)}
            aria-label="메뉴 열기"
            aria-expanded={mobileOpen}
            className="p-xsm rounded-md text-text-light hover:text-text-default hover:bg-background-grey/15 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stroke-primary"
          >
            <HamburgerIcon />
          </button>

          <span className="font-bold text-xsm text-text-default tracking-tight">A11y Lab</span>
        </header>

        <main id="main-content" className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};
