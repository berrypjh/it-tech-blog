import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import { toneTokens } from '../../../shared/tones';
import type { ConnectionRow, SharedContent } from '../content';
import { ArrowRightIcon, iconByName, PackageIcon } from '../icons';

type Props = { content: SharedContent['connection'] };

export const SharedPackageConnectionDiagram = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-connection" className="space-y-md">
      <SectionHeader
        id="connection"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<PackageIcon className="h-5 w-5" />}
      />

      <div
        className={cn(
          'rounded-2xl border bg-[var(--term-bg)]',
          'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
          'p-md sm:p-lg',
        )}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.32fr)_minmax(0,_0.68fr)] gap-md items-stretch">
          {/* 좌측 shared hub */}
          <SharedHubCard
            title={content.hubTitle}
            subtitle={content.hubSubtitle}
            tags={content.hubTags}
          />

          {/* 우측 3개 row */}
          <ul className="flex flex-col gap-3 relative">
            {/* SVG dotted curve connector — sm 이상에서만 */}
            <svg
              aria-hidden="true"
              viewBox="0 0 80 240"
              preserveAspectRatio="none"
              className="hidden lg:block pointer-events-none absolute -left-12 top-2 bottom-2 w-12 h-[calc(100%-1rem)]"
            >
              <path
                d="M0 120 C 30 60, 60 30, 80 30"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeDasharray="3 4"
                className="text-blue-300 dark:text-blue-700"
              />
              <path
                d="M0 120 C 40 120, 60 120, 80 120"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeDasharray="3 4"
                className="text-indigo-300 dark:text-indigo-700"
              />
              <path
                d="M0 120 C 30 180, 60 210, 80 210"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeDasharray="3 4"
                className="text-violet-300 dark:text-violet-700"
              />
            </svg>

            {content.rows.map((row) => (
              <li key={row.id}>
                <ConnectionRowItem row={row} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

type HubProps = { title: string; subtitle: string; tags: string[] };

const SharedHubCard = ({ title, subtitle, tags }: HubProps) => (
  <article
    className={cn(
      'flex flex-col gap-sm rounded-xl border p-md sm:p-lg',
      'border-teal-300 bg-teal-50/80 text-teal-900',
      'dark:border-teal-700/60 dark:bg-teal-950/40 dark:text-teal-100',
      'shadow-[0_3px_0_var(--term-border)] self-start',
    )}
  >
    <header className="flex items-center gap-sm">
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex items-center justify-center w-10 h-10 rounded-md border',
          'border-teal-300 bg-teal-100/80 text-teal-700',
          'dark:border-teal-700/60 dark:bg-teal-950/60 dark:text-teal-200',
        )}
      >
        <PackageIcon className="h-5 w-5" />
      </span>
      <div className="flex flex-col">
        <h3 className="text-md font-bold font-mono tracking-tight">{title}</h3>
        <span className="text-[10px] uppercase tracking-wider text-teal-700/80 dark:text-teal-300/80">
          {subtitle}
        </span>
      </div>
    </header>
    <ul className="flex flex-wrap gap-1.5">
      {tags.map((tag) => (
        <li key={tag}>
          <span
            className={cn(
              'inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-bold',
              'border-teal-300 bg-teal-100/60 text-teal-800',
              'dark:border-teal-700/60 dark:bg-teal-950/60 dark:text-teal-200',
            )}
          >
            {tag}
          </span>
        </li>
      ))}
    </ul>
  </article>
);

type RowProps = { row: ConnectionRow };

const ConnectionRowItem = ({ row }: RowProps) => {
  const tone = toneTokens[row.tone];
  const Icon = iconByName[row.icon];
  const tintClass =
    row.tone === 'blue'
      ? 'bg-blue-50/80 dark:bg-blue-950/30'
      : row.tone === 'indigo'
        ? 'bg-indigo-50/80 dark:bg-indigo-950/30'
        : 'bg-violet-50/80 dark:bg-violet-950/30';

  return (
    <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,_0.45fr)_auto_minmax(0,_0.55fr)] gap-2 items-stretch">
      {/* 패키지 카드 */}
      <article
        className={cn(
          'flex items-center gap-sm rounded-lg border p-3',
          tone.border,
          tintClass,
          'shadow-[0_2px_0_var(--term-border)] transition-all hover:-translate-y-0.5',
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-9 h-9 rounded-md border shrink-0',
            tone.chip,
          )}
        >
          <Icon className="h-4 w-4" />
        </span>
        <div className="flex flex-col min-w-0">
          <h4 className={cn('text-sm font-bold font-mono tracking-tight', tone.text)}>
            {row.packageName}
          </h4>
          <p className="text-[11px] text-[var(--term-muted)] break-keep">{row.description}</p>
        </div>
      </article>

      {/* 화살표 */}
      <div className="flex items-center justify-center" aria-hidden="true">
        <ArrowRightIcon className="hidden sm:inline-flex h-5 w-5 text-[var(--term-accent)]" />
        <ArrowRightIcon className="sm:hidden h-5 w-5 rotate-90 text-[var(--term-accent)]" />
      </div>

      {/* 사용 설명 카드 */}
      <article
        className={cn(
          'flex items-center rounded-lg border border-dashed p-3',
          'border-teal-300/70 bg-teal-50/40 text-teal-900',
          'dark:border-teal-700/40 dark:bg-teal-950/20 dark:text-teal-100',
        )}
      >
        <p className="text-xsm leading-snug font-medium break-keep">{row.usage}</p>
      </article>
    </div>
  );
};
