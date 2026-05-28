'use client';

import { useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import { ToneBadge } from '../../../shared/ToneBadge';
import { ToneIconBox } from '../../../shared/ToneIconBox';
import { toneTokens } from '../../../shared/tones';
import { RepoTreeCard } from '../components/RepoTreeCard';
import type { RepoOverviewContent } from '../content';
import { CheckCircleIcon, FileTextIcon, FolderIcon, LightbulbIcon, MapIcon } from '../icons';

type Props = { content: RepoOverviewContent['miniMap'] };

export const RepoRootMiniMap = ({ content }: Props) => {
  const [selectedId, setSelectedId] = useState(content.defaultSelected);
  const detail = content.details[selectedId] ?? content.details[content.defaultSelected];
  const isDir = content.treeRows.find((r) => r.id === selectedId)?.kind === 'dir';
  const tone = toneTokens[detail.tone];

  return (
    <section aria-labelledby="heading-mini-map" className="space-y-md">
      <SectionHeader
        id="mini-map"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<MapIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.4fr)_minmax(0,_0.6fr)] gap-md lg:gap-lg items-stretch">
        <RepoTreeCard
          header={content.treeHeader}
          rows={content.treeRows}
          selectedId={selectedId}
          onSelect={setSelectedId}
        />

        <article
          className={cn(
            'flex flex-col gap-md rounded-lg border bg-[var(--term-bg)]',
            'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
            'p-md sm:p-lg transition-colors',
            tone.border,
          )}
          aria-live="polite"
        >
          <header className="flex items-center justify-between gap-sm">
            <div className="flex items-center gap-sm min-w-0">
              <ToneIconBox tone={detail.tone} size="md">
                {isDir ? (
                  <FolderIcon className="h-5 w-5" aria-hidden="true" />
                ) : (
                  <FileTextIcon className="h-5 w-5" aria-hidden="true" />
                )}
              </ToneIconBox>
              <h3 className={cn('text-lg sm:text-xl font-bold tracking-tight', tone.text)}>
                {detail.title}
              </h3>
            </div>
            {detail.badge && <ToneBadge tone={detail.tone}>{detail.badge}</ToneBadge>}
          </header>

          <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep">
            {detail.description}
          </p>

          <ul className="flex flex-col gap-2">
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

          {detail.recommendation && (
            <div
              className={cn(
                'mt-auto flex items-start gap-2 rounded-md border p-3',
                'border-dashed text-xsm break-keep',
                tone.border,
                'bg-[var(--term-surface)] text-[var(--term-fg)]',
              )}
            >
              <LightbulbIcon
                className={cn('mt-0.5 h-4 w-4 shrink-0', tone.text)}
                aria-hidden="true"
              />
              <span>{detail.recommendation}</span>
            </div>
          )}
        </article>
      </div>
    </section>
  );
};
