'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {
  AccessibilityIcon,
  BackArrowIcon,
  BriefcaseIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  ClipboardListIcon,
  CollapseAllIcon,
  DesignPatternIcon,
  ExpandAllIcon,
  HtmlIcon,
  KeyboardIcon,
  PaletteIcon,
  RocketIcon,
  VolumeIcon,
} from '@it-tech-blog/icons';
import { useLocale } from '@it-tech-blog/preferences';
import { cn } from '@it-tech-blog/utils';

import { navData, type NavGroup, sidebarStrings } from '@/data';

import { SettingsPopover } from './SettingsPopover';

const sectionIcons = [
  RocketIcon,
  HtmlIcon,
  KeyboardIcon,
  VolumeIcon,
  ClipboardListIcon,
  DesignPatternIcon,
  PaletteIcon,
  CheckCircleIcon,
  BriefcaseIcon,
];

const getInitialExpanded = (navGroups: NavGroup[], pathname: string): Set<number> => {
  const activeIndex = navGroups.findIndex((group) => group.items.some((item) => pathname === `/${item.id}`));

  return new Set([activeIndex >= 0 ? activeIndex : 0]);
};

export const Sidebar = ({ className }: { className?: string }) => {
  const pathname = usePathname();
  const { locale } = useLocale();
  const lang = (locale as 'ko' | 'en') ?? 'ko';
  const currentNavData = navData[lang];
  const t = sidebarStrings[lang];

  const [expanded, setExpanded] = useState<Set<number>>(() => getInitialExpanded(currentNavData, pathname));

  const toggle = (index: number) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);

      return next;
    });
  };

  const anyExpanded = expanded.size > 0;
  const toggleAll = () => setExpanded(anyExpanded ? new Set() : new Set(currentNavData.map((_, i) => i)));

  return (
    <aside className={cn('flex flex-col h-full bg-background border-r border-border', className)}>
      {/* 헤더 */}
      <div className="px-5 pt-5 pb-4 space-y-3">
        <div className="flex items-center justify-between">
          <Link href="/intro" className="flex items-center gap-2 group">
            <div className="w-7 h-7 rounded bg-emerald-500 group-hover:bg-emerald-600 transition-colors flex items-center justify-center">
              <AccessibilityIcon color="white" />
            </div>

            <span className="font-bold text-base tracking-tight text-foreground">{t.title}</span>
          </Link>

          <SettingsPopover />
        </div>

        <p className="text-xs text-muted-foreground/60 leading-snug">{t.subtitle}</p>
      </div>

      <div className="h-px bg-border mx-5" />

      {/* 모든 섹션 확장/축소 버튼 */}
      <div className="flex justify-end px-3 pt-1.5">
        <button
          onClick={toggleAll}
          className="flex items-center gap-1 px-1.5 py-1 rounded text-muted-foreground/40 hover:text-muted-foreground hover:bg-muted/50 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-500"
        >
          {anyExpanded ? <CollapseAllIcon /> : <ExpandAllIcon />}

          <span className="text-[10px]">{anyExpanded ? t.collapseAll : t.expandAll}</span>
        </button>
      </div>

      {/* nav */}
      <nav className="flex-1 overflow-y-auto py-1" aria-label={t.menu}>
        {currentNavData.map((group, groupIndex) => {
          const isExpanded = expanded.has(groupIndex);
          const panelId = `nav-panel-${groupIndex}`;
          const hasActiveItem = group.items.some((item) => pathname === `/${item.id}`);
          const SectionIcon = sectionIcons[groupIndex] ?? RocketIcon;

          return (
            <div key={groupIndex}>
              <button
                onClick={() => toggle(groupIndex)}
                aria-expanded={isExpanded}
                aria-controls={panelId}
                className={cn(
                  'w-full flex items-center gap-2.5 px-5 py-2.5 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-emerald-500',
                  hasActiveItem ? 'text-foreground' : 'text-muted-foreground hover:text-foreground',
                )}
              >
                <span
                  className={cn(
                    'shrink-0 transition-colors',
                    hasActiveItem ? 'text-emerald-500' : 'text-muted-foreground/40',
                  )}
                >
                  <SectionIcon />
                </span>

                <span className="flex-1 text-sm font-semibold uppercase tracking-[0.07em]">{group.title}</span>

                <ChevronDownIcon
                  className={cn(
                    'transition-all duration-200',
                    hasActiveItem ? 'text-emerald-500' : 'text-muted-foreground/30',
                    isExpanded && 'rotate-180',
                  )}
                />
              </button>

              <div
                id={panelId}
                className={cn(
                  'grid transition-all duration-200 ease-in-out',
                  isExpanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                )}
              >
                <div className="overflow-hidden">
                  <ul className="px-4 pb-2 pt-0.5 space-y-px">
                    {group.items.map((item) => {
                      const isActive = pathname === `/${item.id}`;

                      const badge = item.badge ? (
                        <span
                          className={cn(
                            'ml-2 shrink-0 text-[10px] px-1.5 py-0.5 rounded-sm font-bold uppercase tracking-wide',
                            item.badgeColor === 'warning' &&
                              'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400',
                            item.badgeColor === 'purple' &&
                              'bg-violet-100 text-violet-600 dark:bg-violet-900/30 dark:text-violet-400',
                            item.badgeColor === 'default' &&
                              'bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400',
                          )}
                        >
                          {item.badge}
                        </span>
                      ) : null;

                      const labelClass = 'truncate text-xs leading-snug';

                      return (
                        <li key={item.id}>
                          <Link
                            href={`/${item.id}`}
                            aria-current={isActive ? 'page' : undefined}
                            className={cn(
                              'flex items-center justify-between px-2.5 py-1.5 rounded transition-colors duration-150 outline-none focus-visible:ring-2 focus-visible:ring-emerald-500',
                              isActive
                                ? 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 font-medium'
                                : 'text-muted-foreground hover:text-foreground hover:bg-muted/50',
                            )}
                          >
                            <span className={labelClass}>{item.label}</span>

                            {badge}
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

      <div className="h-px bg-border mx-5" />

      {/* 홈으로 */}
      <div className="px-5 py-3">
        <a
          href="/"
          className="flex items-center gap-2 text-xs text-muted-foreground/50 hover:text-muted-foreground transition-colors group"
        >
          <BackArrowIcon />
          {t.backToMain}
        </a>
      </div>
    </aside>
  );
};
