import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
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
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.32fr)_minmax(0,_0.68fr)] gap-md lg:gap-12 items-stretch">
          {/* 좌측 shared hub */}
          <SharedHubCard
            title={content.hubTitle}
            subtitle={content.hubSubtitle}
            tags={content.hubTags}
          />

          {/* 우측 3개 row */}
          <ul className="relative flex flex-col gap-3">
            {/* lg 이상: shared 허브 → 패키지 점선 버스.
                허브 중앙에서 짧은 stub로 나와 세로 rail을 타고, 행마다 가지가 카드로 이어진다.
                가지가 각 행의 세로 중앙(top-1/2)에서 그려지므로 행 높이가 달라도 항상 정확히 닿는다. */}
            <span
              aria-hidden="true"
              className="hidden lg:block pointer-events-none absolute -left-12 top-1/2 -translate-y-1/2 w-6 border-t border-dashed border-[var(--term-border)]"
            />
            <span
              aria-hidden="true"
              className="hidden lg:block pointer-events-none absolute -left-6 inset-y-8 w-px border-l border-dashed border-[var(--term-border)]"
            />

            {content.rows.map((row) => (
              <li key={row.id} className="relative">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 8"
                  preserveAspectRatio="none"
                  className={cn(
                    'hidden lg:block pointer-events-none absolute -left-6 top-1/2 -translate-y-1/2 w-6 h-2',
                    toneTokens[row.tone].stroke,
                  )}
                >
                  <line
                    x1="0"
                    y1="4"
                    x2="24"
                    y2="4"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeDasharray="3 4"
                  />
                </svg>
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
      'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-fg)]',
      'shadow-[0_3px_0_var(--term-border)] lg:self-center',
    )}
  >
    <header className="flex items-center gap-sm">
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex items-center justify-center w-10 h-10 rounded-md border',
          'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-accent)]',
        )}
      >
        <PackageIcon className="h-5 w-5" />
      </span>
      <div className="flex flex-col">
        <h3 className="text-md font-bold font-mono tracking-tight text-[var(--term-accent)]">
          {title}
        </h3>
        <span className="text-[10px] uppercase tracking-wider text-[var(--term-muted)]">
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
              'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-accent)]',
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
  const accent = toneTokens[row.tone].text;
  const Icon = iconByName[row.icon];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,_0.45fr)_auto_minmax(0,_0.55fr)] gap-2 items-stretch">
      {/* 패키지 카드 */}
      <article
        className={cn(
          'flex items-center gap-sm rounded-lg border p-3',
          'border-[var(--term-border)] bg-[var(--term-surface)]',
          'shadow-[0_2px_0_var(--term-border)] transition-all hover:-translate-y-0.5',
          'hover:border-[var(--term-accent)]',
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-9 h-9 rounded-md border shrink-0',
            'border-[var(--term-border)] bg-[var(--term-surface)]',
            accent,
          )}
        >
          <Icon className="h-4 w-4" />
        </span>
        <div className="flex flex-col min-w-0">
          <h4 className={cn('text-sm font-bold font-mono tracking-tight', accent)}>
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
          'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-fg)]',
        )}
      >
        <p className="text-xsm leading-snug font-medium break-keep">{row.usage}</p>
      </article>
    </div>
  );
};
