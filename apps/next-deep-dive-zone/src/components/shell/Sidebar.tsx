'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import { useLocale } from '@it-tech-blog/preferences';
import { SettingsPopover, useSidebarNav } from '@it-tech-blog/ui';
import { cn } from '@it-tech-blog/utils';

import { navData, sidebarStrings } from '@/data';

/**
 * 네비게이션 그룹 제목을 파일시스템 경로처럼 보이는 슬러그로.
 * "시작하기" -> "00 getting-started/"
 */
const groupSlugs = [
  'getting-started',
  'repo-structure',
  'what-next-adds',
  'cli-init',
  'fs-routing-tree',
  'client-runtime',
  'segment-tree',
  'rsc-payload',
  'server-render',
  'client-nav-cache',
  'caching-model',
  'server-actions',
  'build-pipeline',
  'turbopack',
  'error-metadata',
  'request-pipeline',
  'next-16-changes',
  'checklist',
];

const sectionNumber = (i: number) => i.toString().padStart(2, '0');

export const Sidebar = ({ className }: { className?: string }) => {
  const pathname = usePathname();
  const router = useRouter();
  const { locale } = useLocale();
  const currentNavData = navData[locale];
  const t = sidebarStrings[locale];
  const { expanded, toggle, toggleAll, anyExpanded } = useSidebarNav(currentNavData, pathname);

  return (
    <aside
      className={cn(
        'flex flex-col h-full text-xxsm',
        'bg-[var(--term-bg)] text-[var(--term-fg)] border-r border-[var(--term-border)]',
        className,
      )}
    >
      {/* 프롬프트 헤더 */}
      <div className="px-lg pt-lg pb-md border-b border-dashed border-[var(--term-border)]">
        <div className="flex items-center justify-between">
          <Link
            href="/why-source"
            className="flex items-center gap-sm text-xsm leading-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)]"
          >
            <span className="text-[var(--term-accent)] font-bold">$</span>
            <span className="text-[var(--term-fg)] font-bold tracking-tight">next-lab</span>
            <span className="term-cursor" aria-hidden="true" />
          </Link>

          <SettingsPopover onLocaleChange={() => router.refresh()} />
        </div>

        <p className="mt-sm text-[10px] text-[var(--term-muted)] leading-snug">
          {'// '}
          {t.subtitle}
        </p>
      </div>

      {/* expand/collapse all */}
      <div className="flex justify-between items-center px-lg py-sm border-b border-dashed border-[var(--term-border)]">
        <span className="text-[10px] text-[var(--term-dim)] uppercase tracking-wider">
          {t.menu}
        </span>

        <button
          onClick={toggleAll}
          className="text-[10px] text-[var(--term-muted)] hover:text-[var(--term-accent)] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--term-accent)]"
        >
          [{anyExpanded ? '−' : '+'}] {anyExpanded ? t.collapseAll : t.expandAll}
        </button>
      </div>

      {/* file tree */}
      <nav className="flex-1 overflow-y-auto py-sm" aria-label={t.menu}>
        {currentNavData.map((group, groupIndex) => {
          const isExpanded = expanded.has(groupIndex);
          const panelId = `nav-panel-${groupIndex}`;
          const hasActiveItem = group.items.some((item) => pathname === `/${item.id}`);
          const slug = groupSlugs[groupIndex] ?? `section-${groupIndex}`;
          const arrow = isExpanded ? '▾' : '▸';

          return (
            <div
              key={groupIndex}
              className={cn(
                'mb-xs',
                groupIndex > 0 && 'mt-sm pt-sm border-t border-dashed border-[var(--term-border)]',
              )}
            >
              <button
                onClick={() => toggle(groupIndex)}
                aria-expanded={isExpanded}
                aria-controls={panelId}
                className={cn(
                  'w-full flex flex-col px-lg py-1 text-left text-xxsm leading-relaxed transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--term-accent)]',
                  hasActiveItem
                    ? 'text-[var(--term-accent)]'
                    : 'text-[var(--term-fg)] hover:text-[var(--term-accent)]',
                )}
              >
                <span className="flex items-start gap-sm">
                  <span className="text-[var(--term-dim)] shrink-0 w-3 text-center">{arrow}</span>
                  <span className="text-[var(--term-muted)] shrink-0 tabular-nums">
                    {sectionNumber(groupIndex)}
                  </span>
                  <span className="font-medium">{slug}/</span>
                </span>
                <span className="flex items-start gap-sm">
                  <span className="shrink-0 w-3" aria-hidden="true" />
                  <span className="shrink-0 tabular-nums invisible" aria-hidden="true">
                    {sectionNumber(groupIndex)}
                  </span>
                  <span className="font-normal text-[var(--term-muted)] break-keep">
                    {group.title}
                  </span>
                </span>
              </button>

              <div
                id={panelId}
                className={cn(
                  'grid transition-all duration-200 ease-in-out',
                  isExpanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                )}
              >
                <div className="overflow-hidden">
                  <ul className="pb-sm">
                    {group.items.map((item, itemIndex) => {
                      const isActive = pathname === `/${item.id}`;
                      const isLast = itemIndex === group.items.length - 1;
                      const branch = isLast ? '└─' : '├─';

                      return (
                        <li key={item.id}>
                          <Link
                            href={`/${item.id}`}
                            aria-current={isActive ? 'page' : undefined}
                            className={cn(
                              'group flex items-start gap-sm pl-lg pr-lg py-0.5 text-xxsm leading-relaxed transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--term-accent)]',
                              isActive
                                ? 'bg-[var(--term-accent-soft)] text-[var(--term-accent)]'
                                : 'text-[var(--term-muted)] hover:text-[var(--term-fg)]',
                            )}
                          >
                            <span className="shrink-0 w-3 text-center text-[var(--term-dim)]" />
                            <span
                              className={cn(
                                'shrink-0 tabular-nums select-none',
                                isActive ? 'text-[var(--term-accent)]' : 'text-[var(--term-dim)]',
                              )}
                            >
                              {isActive ? '▸' : branch}
                            </span>
                            <span className="line-clamp-2 break-keep">{item.label}</span>

                            {item.badge && (
                              <span
                                className={cn(
                                  'ml-auto shrink-0 text-[9px] uppercase tracking-wider px-1 border',
                                  item.badgeColor === 'warning' &&
                                    'border-[var(--term-accent)] text-[var(--term-accent)]',
                                  item.badgeColor === 'purple' &&
                                    'border-[var(--term-muted)] text-[var(--term-muted)]',
                                  item.badgeColor === 'default' &&
                                    'border-[var(--term-dim)] text-[var(--term-dim)]',
                                )}
                              >
                                {item.badge}
                              </span>
                            )}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </nav>

      {/* footer */}
      <div className="px-lg py-md border-t border-dashed border-[var(--term-border)]">
        <a
          href="/"
          className="flex items-center gap-sm text-[10px] text-[var(--term-muted)] hover:text-[var(--term-accent)] transition-colors"
        >
          <span>↩</span>
          <span>cd ~/ &mdash; {t.backToMain}</span>
        </a>
      </div>
    </aside>
  );
};
