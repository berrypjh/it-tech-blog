'use client';

import { type ReactNode, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

import { SkipLink } from '@berrypjh/react-ui';

import { HamburgerIcon } from '../icons';

type Props = {
  children: ReactNode;
  sidebar: ReactNode;
  mobileBrand: ReactNode;
  skipLinkLabel?: string;
};

export const AppShell = ({
  children,
  sidebar,
  mobileBrand,
  skipLinkLabel = '본문으로 건너뛰기',
}: Props) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <div className="flex h-screen w-full max-w-[1440px] mx-auto bg-[var(--shell-bg)] text-[var(--shell-fg)] overflow-hidden">
      <SkipLink targetId="main-content">{skipLinkLabel}</SkipLink>

      <div className="hidden lg:block w-[var(--shell-sidebar-w,280px)] shrink-0 h-full relative">
        <div className="absolute inset-0">{sidebar}</div>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-[var(--shell-overlay,rgba(0,0,0,0.6))] backdrop-blur-sm"
            aria-hidden="true"
            onClick={() => setMobileOpen(false)}
          />

          <div className="relative w-[var(--shell-sidebar-w,280px)] h-full shadow-xl">
            {sidebar}
          </div>
        </div>
      )}

      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <header className="lg:hidden flex items-center gap-md px-lg h-[var(--shell-header-h,56px)] border-b border-[var(--shell-border)] bg-[var(--shell-bg)] shrink-0">
          <button
            onClick={() => setMobileOpen(true)}
            aria-label="메뉴 열기"
            aria-expanded={mobileOpen}
            className="p-sm text-current hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--shell-accent)]"
          >
            <HamburgerIcon />
          </button>

          {mobileBrand}
        </header>

        <main id="main-content" className="relative flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};
