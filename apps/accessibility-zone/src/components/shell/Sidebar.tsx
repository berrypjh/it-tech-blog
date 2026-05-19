'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import { useLocale } from '@it-tech-blog/preferences';
import { SettingsPopover, useSidebarNav } from '@it-tech-blog/ui';
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
} from '@it-tech-blog/ui';
import { cn } from '@it-tech-blog/utils';

import { navData, sidebarStrings } from '@/data';

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
        'flex flex-col h-full bg-background-surface border-r border-stroke-default',
        className,
      )}
    >
      {/* 헤더 */}
      <div className="px-lg pt-lg pb-lg space-y-md">
        <div className="flex items-center justify-between">
          <Link href="/intro" className="flex items-center gap-sm group">
            <div className="w-7 h-7 rounded bg-background-primary group-hover:bg-primary-pr700 transition-colors flex items-center justify-center">
              <AccessibilityIcon color="white" />
            </div>

            <span className="font-bold text-sm tracking-tight text-text-default">{t.title}</span>
          </Link>

          <SettingsPopover onLocaleChange={() => router.refresh()} />
        </div>

        <p className="text-xxsm text-text-light/60 leading-snug">{t.subtitle}</p>
      </div>

      <div className="h-px bg-stroke-default mx-lg" />

      {/* 모든 섹션 확장/축소 버튼 */}
      <div className="flex justify-end px-md pt-sm">
        <button
          onClick={toggleAll}
          className="flex items-center gap-xs px-sm py-xs rounded text-text-light/40 hover:text-text-light hover:bg-background-grey/10 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-stroke-primary"
        >
          {anyExpanded ? <CollapseAllIcon /> : <ExpandAllIcon />}

          <span className="text-[10px]">{anyExpanded ? t.collapseAll : t.expandAll}</span>
        </button>
      </div>

      {/* nav */}
      <nav className="flex-1 overflow-y-auto py-xs" aria-label={t.menu}>
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
                  'w-full flex items-center gap-2.5 px-lg py-2.5 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-stroke-primary',
                  hasActiveItem ? 'text-text-default' : 'text-text-light hover:text-text-default',
                )}
              >
                <span
                  className={cn(
                    'shrink-0 transition-colors',
                    hasActiveItem ? 'text-text-primary' : 'text-text-light/40',
                  )}
                >
                  <SectionIcon />
                </span>

                <span className="flex-1 text-xsm font-semiBold uppercase tracking-[0.07em]">
                  {group.title}
                </span>

                <ChevronDownIcon
                  className={cn(
                    'transition-all duration-200',
                    hasActiveItem ? 'text-text-primary' : 'text-text-light/30',
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
                  <ul className="px-lg pb-sm pt-0.5 space-y-px">
                    {group.items.map((item) => {
                      const isActive = pathname === `/${item.id}`;

                      const badge = item.badge ? (
                        <span
                          className={cn(
                            'ml-sm shrink-0 text-[10px] px-sm py-0.5 rounded-xs font-bold uppercase tracking-wide',
                            item.badgeColor === 'warning' && 'bg-warning-wa100 text-text-warning',
                            item.badgeColor === 'purple' &&
                              'bg-secondary-se100 text-text-secondary',
                            item.badgeColor === 'default' &&
                              'bg-background-grey/20 text-text-light',
                          )}
                        >
                          {item.badge}
                        </span>
                      ) : null;

                      const labelClass = 'truncate text-xxsm leading-snug';

                      return (
                        <li key={item.id}>
                          <Link
                            href={`/${item.id}`}
                            aria-current={isActive ? 'page' : undefined}
                            className={cn(
                              'flex items-center justify-between px-2.5 py-1.5 rounded-xs transition-colors duration-150 outline-none focus-visible:ring-2 focus-visible:ring-stroke-primary',
                              isActive
                                ? 'bg-primary-pr100 text-text-primary font-medium'
                                : 'text-text-light hover:text-text-default hover:bg-background-grey/10',
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

      <div className="h-px bg-stroke-default mx-lg" />

      {/* 홈으로 */}
      <div className="px-lg py-md">
        <a
          href="/"
          className="flex items-center gap-sm text-xxsm text-text-light/50 hover:text-text-light transition-colors group"
        >
          <BackArrowIcon />
          {t.backToMain}
        </a>
      </div>
    </aside>
  );
};
