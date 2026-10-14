'use client';

import { type ReactNode, useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

import { useLang } from '@it-tech-blog/utils';

import { SkipLink } from '@berrypjh/react-ui';

import { HamburgerIcon } from '../icons';

type Props = {
  children: ReactNode;
  sidebar: ReactNode;
  mobileBrand: ReactNode;
  /** 건너뛰기 링크 문구. 없으면 현재 locale의 기본 문구를 쓴다. */
  skipLinkLabel?: string;
  /** 모바일 메뉴 버튼 이름. 없으면 현재 locale의 기본 문구를 쓴다. */
  menuLabel?: string;
};

const strings = {
  ko: { skip: '본문으로 건너뛰기', menu: '메뉴 열기', panel: '메뉴' },
  en: { skip: 'Skip to main content', menu: 'Open menu', panel: 'Menu' },
};

const focusableSelector =
  'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';

export const AppShell = ({ children, sidebar, mobileBrand, skipLinkLabel, menuLabel }: Props) => {
  const t = useLang(strings);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  /** 모바일 메뉴가 열려 있는 동안: 패널로 포커스를 옮기고, Escape로 닫고, Tab이 패널 밖으로 나가지 않게 한다. */
  useEffect(() => {
    if (!mobileOpen) return;

    const panel = panelRef.current;
    const focusables = () =>
      Array.from(panel?.querySelectorAll<HTMLElement>(focusableSelector) ?? []);
    focusables()[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.defaultPrevented) return;
      if (event.key === 'Escape') {
        setMobileOpen(false);
        menuButtonRef.current?.focus();
        return;
      }
      if (event.key !== 'Tab') return;

      const items = focusables();
      if (items.length === 0) return;

      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);

    return () => document.removeEventListener('keydown', onKeyDown);
  }, [mobileOpen]);

  return (
    <div className="flex h-screen w-full max-w-[1440px] mx-auto bg-[var(--shell-bg)] text-[var(--shell-fg)] overflow-hidden">
      <SkipLink targetId="main-content">{skipLinkLabel ?? t.skip}</SkipLink>

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

          <div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label={t.panel}
            className="relative w-[var(--shell-sidebar-w,280px)] h-full shadow-xl"
          >
            {sidebar}
          </div>
        </div>
      )}

      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <header className="lg:hidden flex items-center gap-md px-lg h-[var(--shell-header-h,56px)] border-b border-[var(--shell-border)] bg-[var(--shell-bg)] shrink-0">
          <button
            ref={menuButtonRef}
            onClick={() => setMobileOpen(true)}
            aria-label={menuLabel ?? t.menu}
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
