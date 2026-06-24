'use client';

import { useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import { SectionNote } from '../../../shared/note';
import { RepoBrowserShell, RepoBrowserTree } from '../../../shared/repo-browser';
import { toneTokens } from '../../../shared/tones';
import type { RepoOverviewContent } from '../content';
import { CheckCircleIcon, FileTextIcon, FolderIcon, LightbulbIcon, MapIcon } from '../icons';

type Props = { content: RepoOverviewContent['miniMap'] };

export const RepoRootMiniMap = ({ content }: Props) => {
  const [selectedId, setSelectedId] = useState(content.defaultSelected);
  const detail = content.details[selectedId] ?? content.details[content.defaultSelected];
  const isDir = content.treeRows.find((r) => r.id === selectedId)?.kind === 'dir';
  const tone = toneTokens[detail.tone];
  const toneText = tone.text;
  const toneMarker = tone.dot;

  return (
    <RepoBrowserShell
      id="mini-map"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<MapIcon className="h-5 w-5" />}
      repoLabel={content.treeHeader}
      statusLabel="public"
      tree={
        <RepoBrowserTree
          tree={content.treeRows}
          selected={selectedId}
          onSelect={setSelectedId}
          hasDetail={(id) => Boolean(content.details[id])}
        />
      }
      detail={
        <>
          <header className="flex items-center justify-between gap-sm">
            <div className="flex items-center gap-sm min-w-0">
              <span
                aria-hidden="true"
                className="inline-flex w-11 h-11 items-center justify-center rounded-md border border-[var(--term-border)] bg-[var(--term-surface)]"
              >
                {isDir ? (
                  <FolderIcon className={cn('h-5 w-5', toneText)} aria-hidden="true" />
                ) : (
                  <FileTextIcon className={cn('h-5 w-5', toneText)} aria-hidden="true" />
                )}
              </span>
              <h3 className={cn('text-lg sm:text-xl font-bold tracking-tight', toneText)}>
                {detail.title}
              </h3>
            </div>
            {detail.badge && (
              <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full border border-[var(--term-border)] bg-[var(--term-surface)] text-[10px] font-medium text-[var(--term-muted)]">
                <span
                  aria-hidden="true"
                  className={cn('inline-block w-1 h-1 rounded-full', toneMarker)}
                />
                {detail.badge}
              </span>
            )}
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
                  className={cn('mt-0.5 h-4 w-4 shrink-0', toneText)}
                  aria-hidden="true"
                />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          {detail.recommendation && (
            <SectionNote className="mt-auto" icon={<LightbulbIcon className="h-4 w-4" />}>
              {detail.recommendation}
            </SectionNote>
          )}
        </>
      }
    />
  );
};
