'use client';

import { useId, useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../start/_shared/SectionHeader';
import type { ChangelogContent } from '../content';
import { ChevronDownIcon, LightbulbIcon, PencilIcon, ShieldCheckIcon } from '../icons';

type Props = { content: ChangelogContent['memo'] };

export const VersionMemoPanel = ({ content }: Props) => {
  const [version, setVersion] = useState(content.selectValue);
  const [memo, setMemo] = useState(content.textareaDefault);

  const selectId = useId();
  const textareaId = useId();
  const max = content.maxLength;
  const count = memo.length;

  return (
    <section aria-labelledby="heading-memo" className="space-y-md">
      <SectionHeader
        id="memo"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<PencilIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.3fr)_minmax(0,_0.48fr)_minmax(0,_0.22fr)] gap-md items-stretch">
        {/* 좌측 prompt */}
        <article
          className={cn(
            'flex flex-col items-start gap-md rounded-xl border p-md sm:p-lg',
            'border-sky-200/80 bg-sky-50/70 text-sky-900',
            'dark:border-sky-800/60 dark:bg-sky-950/30 dark:text-sky-100',
          )}
        >
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex items-center justify-center w-12 h-12 rounded-xl border-2',
              'border-sky-300 bg-sky-100 text-sky-700',
              'dark:border-sky-700/60 dark:bg-sky-950/60 dark:text-sky-200',
            )}
          >
            <PencilIcon className="h-6 w-6" />
          </span>
          <span className="text-[10px] uppercase tracking-wider font-bold">
            {content.promptTitle}
          </span>
          <p className="text-md sm:text-lg font-bold tracking-tight leading-snug break-keep whitespace-pre-line">
            {content.promptText}
          </p>
        </article>

        {/* 중앙 form */}
        <article
          className={cn(
            'flex flex-col gap-md rounded-xl border bg-[var(--term-bg)]',
            'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
            'p-md sm:p-lg',
          )}
        >
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor={selectId}
              className="text-[10px] uppercase tracking-wider font-bold text-[var(--term-muted)]"
            >
              {content.selectLabel}
            </label>
            <div className="relative">
              <select
                id={selectId}
                value={version}
                onChange={(e) => setVersion(e.target.value)}
                className={cn(
                  'w-full appearance-none rounded-md border px-3 py-2.5 pr-8 text-xsm font-mono',
                  'border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-fg)]',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
                  'hover:border-[var(--term-accent)] transition-colors cursor-pointer',
                )}
              >
                {content.selectOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <ChevronDownIcon
                className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--term-muted)]"
                aria-hidden="true"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor={textareaId}
              className="text-[10px] uppercase tracking-wider font-bold text-[var(--term-muted)]"
            >
              {content.textareaLabel}
            </label>
            <textarea
              id={textareaId}
              value={memo}
              onChange={(e) => setMemo(e.target.value.slice(0, max))}
              placeholder={content.textareaPlaceholder}
              rows={5}
              maxLength={max}
              className={cn(
                'w-full rounded-md border px-3 py-2 text-xsm leading-relaxed font-mono resize-y',
                'border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-fg)]',
                'placeholder:text-[var(--term-dim)]',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
                'hover:border-[var(--term-accent)] transition-colors',
              )}
            />
            <span
              className={cn(
                'self-end text-[10px] font-mono tabular-nums',
                count >= max ? 'text-rose-600 dark:text-rose-300' : 'text-[var(--term-muted)]',
              )}
            >
              {count} / {max}
            </span>
          </div>
        </article>

        {/* 우측 tip */}
        <article
          className={cn(
            'flex flex-col items-start gap-sm rounded-xl border p-md sm:p-lg',
            'border-emerald-200/80 bg-emerald-50/70 text-emerald-900',
            'dark:border-emerald-800/60 dark:bg-emerald-950/30 dark:text-emerald-100',
          )}
        >
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex items-center justify-center w-10 h-10 rounded-md',
              'bg-emerald-500 text-white dark:bg-emerald-400 dark:text-slate-950',
            )}
          >
            <ShieldCheckIcon className="h-5 w-5" />
          </span>
          <span className="text-[10px] uppercase tracking-wider font-bold">{content.tipTitle}</span>
          <p className="text-xsm sm:text-sm leading-relaxed font-medium break-keep mt-auto">
            <span className="inline-flex items-center gap-1">
              <LightbulbIcon
                className="h-3.5 w-3.5 shrink-0 text-emerald-600 dark:text-emerald-300"
                aria-hidden="true"
              />
            </span>{' '}
            {content.tipText}
          </p>
        </article>
      </div>
    </section>
  );
};
