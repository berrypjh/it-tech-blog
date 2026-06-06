'use client';

import { useId, useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import { ToneBadge } from '../../../shared/ToneBadge';
import { ToneIconBox } from '../../../shared/ToneIconBox';
import { toneTokens } from '../../../shared/tones';
import type { CorePackage, CorePackageId, PackagesDirectoryContent } from '../content';
import { CheckCircleIcon, FileCodeIcon, FolderIcon, packageIconByName } from '../icons';

type Props = { content: PackagesDirectoryContent['selector'] };

export const CorePackageSelector = ({ content }: Props) => {
  const [activeId, setActiveId] = useState<CorePackageId>(content.defaultSelected);
  const active = content.tabs.find((tab) => tab.id === activeId) ?? content.tabs[0];
  const detail = content.details[active.id];
  const tone = toneTokens[active.tone];
  const tablistId = useId();

  return (
    <section aria-labelledby="heading-selector" className="space-y-md">
      <SectionHeader
        id="selector"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<FolderIcon className="h-5 w-5" />}
      />

      <div
        role="tablist"
        aria-label={content.title}
        id={tablistId}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-sm"
      >
        {content.tabs.map((tab) => {
          const isActive = tab.id === active.id;
          return (
            <TabCard
              key={tab.id}
              tab={tab}
              isActive={isActive}
              onSelect={() => setActiveId(tab.id)}
              panelId={`${tablistId}-panel`}
            />
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`${tablistId}-panel`}
        aria-labelledby={`${tablistId}-tab-${active.id}`}
        className={cn(
          'grid grid-cols-1 lg:grid-cols-[minmax(0,_0.58fr)_minmax(0,_0.42fr)] gap-md',
          'rounded-xl border bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
          'border-[var(--term-border)] p-md sm:p-lg',
          tone.border,
        )}
      >
        {/* 좌측 설명 패널 */}
        <article className="flex flex-col gap-sm">
          <header className="flex items-center justify-between gap-sm">
            <div className="flex items-center gap-sm min-w-0">
              <ToneIconBox tone={active.tone} size="md">
                {(() => {
                  const Icon = packageIconByName[active.icon];
                  return <Icon className="h-5 w-5" aria-hidden="true" />;
                })()}
              </ToneIconBox>
              <h3
                className={cn(
                  'text-lg sm:text-xl font-bold font-mono tracking-tight truncate',
                  tone.text,
                )}
              >
                {active.name}
              </h3>
            </div>
            <ToneBadge tone={active.tone}>{detail.badge}</ToneBadge>
          </header>

          <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep">
            {detail.description}
          </p>

          <ul className="flex flex-col gap-2 pt-xs">
            {detail.bullets.map((bullet) => (
              <li
                key={bullet}
                className="flex items-start gap-2 text-xsm leading-relaxed text-[var(--term-fg)] break-keep"
              >
                <CheckCircleIcon
                  className={cn('mt-0.5 h-4 w-4 shrink-0', tone.text)}
                  aria-hidden="true"
                />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </article>

        {/* 우측 대표 디렉터리 카드 */}
        <aside
          className={cn(
            'flex flex-col gap-sm rounded-lg border bg-[var(--term-surface)] p-md',
            'border-[var(--term-border)]',
          )}
        >
          <header className="flex items-center justify-between gap-sm">
            <h4 className="text-xsm uppercase tracking-wider font-bold text-[var(--term-muted)]">
              {detail.representativeTitle}
            </h4>
            <ToneIconBox tone={active.tone} size="sm">
              <FolderIcon className="h-4 w-4" aria-hidden="true" />
            </ToneIconBox>
          </header>

          <code
            className={cn(
              'inline-flex w-fit max-w-full items-center gap-1.5 rounded-md border px-2 py-1',
              'border-[var(--term-border)] bg-[var(--term-bg)] text-[11px] font-mono text-[var(--term-fg)] break-all',
            )}
          >
            {detail.representativePath}
          </code>

          <ul className="flex flex-col gap-1">
            {detail.representativeFiles.map((file, idx) => {
              const isLast = idx === detail.representativeFiles.length - 1;
              const branch = isLast ? '└─' : '├─';
              return (
                <li
                  key={file}
                  className="flex items-center gap-2 px-2 py-1 rounded text-xsm font-mono text-[var(--term-fg)] hover:bg-[var(--term-bg)]"
                >
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-[10px] text-[var(--term-dim)] tabular-nums w-5"
                  >
                    {branch}
                  </span>
                  <FileCodeIcon
                    className={cn('h-3.5 w-3.5 shrink-0', tone.text)}
                    aria-hidden="true"
                  />
                  <span className="truncate">{file}</span>
                </li>
              );
            })}
          </ul>
        </aside>
      </div>
    </section>
  );
};

type TabCardProps = {
  tab: CorePackage;
  isActive: boolean;
  onSelect: () => void;
  panelId: string;
};

const TabCard = ({ tab, isActive, onSelect, panelId }: TabCardProps) => {
  const tone = toneTokens[tab.tone];
  const Icon = packageIconByName[tab.icon];

  return (
    <button
      role="tab"
      type="button"
      id={`${panelId.replace('-panel', '')}-tab-${tab.id}`}
      aria-selected={isActive}
      aria-controls={panelId}
      tabIndex={isActive ? 0 : -1}
      onClick={onSelect}
      className={cn(
        'group flex flex-col items-start gap-1 rounded-lg border p-md text-left min-w-0',
        'transition-all hover:-translate-y-0.5',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
        isActive
          ? cn(tone.chip, tone.border, 'shadow-[0_3px_0_var(--term-border)] font-bold')
          : cn(
              'border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-muted)]',
              tone.borderHover,
            ),
      )}
    >
      <span className="flex w-full items-center gap-2 min-w-0">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-7 h-7 rounded border shrink-0',
            isActive
              ? 'bg-[var(--term-bg)] border-current'
              : cn(tone.chip, 'border-[var(--term-border)]'),
          )}
        >
          <Icon className={cn('h-4 w-4', isActive ? tone.text : tone.text)} />
        </span>
        <span
          className={cn(
            'min-w-0 break-words text-sm font-bold font-mono tracking-tight',
            isActive ? tone.text : 'text-[var(--term-fg)]',
          )}
        >
          {tab.name}
        </span>
      </span>
      <span className="text-[11px] leading-snug text-[var(--term-muted)] break-keep">
        {tab.shortDescription}
      </span>
    </button>
  );
};
