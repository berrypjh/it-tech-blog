'use client';

import { useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import { toneTokens } from '../../../shared/tones';
import type { GithubReadingContent, SearchResult } from '../content';
import { SearchIcon } from '../icons';

type Props = { content: GithubReadingContent['search'] };

export const GithubSearchPractice = ({ content }: Props) => {
  const [selectedId, setSelectedId] = useState<SearchResult['id']>(content.results[0].id);
  const result = content.results.find((r) => r.id === selectedId) ?? content.results[0];
  const rt = toneTokens[result.tone];

  return (
    <section
      id="section-search"
      aria-labelledby="heading-search"
      className="space-y-lg rounded-lg border border-[var(--term-border)] bg-[var(--term-surface)] p-md sm:p-lg lg:p-xl"
    >
      <SectionHeader
        id="search"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<SearchIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.85fr)_minmax(0,_1fr)] gap-md lg:gap-lg items-start">
        {/* 검색창 + 키워드 */}
        <div className="flex flex-col gap-sm">
          <div className="flex items-center gap-sm rounded-md border border-[var(--term-border)] bg-[var(--term-bg)] px-md py-3">
            <SearchIcon className="h-4 w-4 shrink-0 text-[var(--term-muted)]" aria-hidden="true" />
            <span className="font-mono text-xsm sm:text-sm font-bold text-[var(--term-fg)] [overflow-wrap:anywhere]">
              {result.keyword}
            </span>
            <span className="ml-auto text-[10px] text-[var(--term-dim)] shrink-0 hidden sm:inline">
              {content.placeholder}
            </span>
          </div>

          <ul className="flex flex-wrap gap-2" aria-label="recommended keywords">
            {content.results.map((r) => {
              const t = toneTokens[r.tone];
              const isSelected = r.id === result.id;
              return (
                <li key={r.id}>
                  <button
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => setSelectedId(r.id)}
                    className={cn(
                      'inline-flex items-center rounded-full border px-3 py-1.5 font-mono text-xsm font-bold transition-colors [overflow-wrap:anywhere]',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-surface)]',
                      isSelected
                        ? cn(t.chip, 'ring-1 ring-inset')
                        : 'border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-muted)] hover:border-[var(--term-accent)] hover:text-[var(--term-fg)]',
                    )}
                  >
                    {r.keyword}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* 검색 결과 카드 */}
        <article
          aria-live="polite"
          className="flex flex-col gap-md rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg"
        >
          <div className="flex items-center gap-sm">
            <SearchIcon className={cn('h-4 w-4 shrink-0', rt.text)} aria-hidden="true" />
            <code
              className={cn(
                'rounded border px-2 py-0.5 font-mono text-sm font-bold [overflow-wrap:anywhere]',
                rt.chip,
              )}
            >
              {result.keyword}
            </code>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-[10px] uppercase tracking-wider text-[var(--term-dim)] font-bold">
              {content.labels.path}
            </span>
            <code className="block rounded border border-[var(--term-border)] bg-[var(--term-surface)] px-2 py-1 font-mono text-[10.5px] leading-snug text-[var(--term-fg)] [overflow-wrap:anywhere]">
              {result.path}
            </code>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
            <div className="flex flex-col gap-0.5">
              <span className="text-[10px] uppercase tracking-wider text-[var(--term-dim)] font-bold">
                {content.labels.role}
              </span>
              <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
                {result.role}
              </p>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-[10px] uppercase tracking-wider text-[var(--term-dim)] font-bold">
                {content.labels.test}
              </span>
              <code className="inline-block w-fit max-w-full rounded border border-[var(--term-border)] bg-[var(--term-surface)] px-1.5 py-0.5 font-mono text-[10.5px] text-[var(--term-muted)] [overflow-wrap:anywhere]">
                {result.test}
              </code>
            </div>
          </div>

          <div className="flex flex-col gap-0.5">
            <span className="text-[10px] uppercase tracking-wider text-[var(--term-dim)] font-bold">
              {content.labels.firstPoint}
            </span>
            <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
              {result.firstPoint}
            </p>
          </div>

          <div className="mt-auto flex flex-col gap-1.5 pt-sm border-t border-dashed border-[var(--term-border)]">
            <span className="text-[10px] uppercase tracking-wider text-[var(--term-dim)] font-bold">
              {content.labels.nextFiles}
            </span>
            <ul className="flex flex-col gap-1">
              {result.nextFiles.map((f) => (
                <li key={f}>
                  <code className="block rounded border border-[var(--term-border)] bg-[var(--term-surface)] px-2 py-1 font-mono text-[10.5px] leading-snug text-[var(--term-fg)] [overflow-wrap:anywhere]">
                    {f}
                  </code>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
};
