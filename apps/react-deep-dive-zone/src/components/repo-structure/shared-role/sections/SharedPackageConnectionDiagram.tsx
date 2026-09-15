import { cx } from '@berrypjh/react-ui';
import {
  ArrowRight,
  Atom,
  Cuboid,
  type LucideIcon,
  MonitorSmartphone,
  Package,
} from 'lucide-react';

import { SectionHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { ConnectionRow, SharedContent } from '../content';

const packageIcon: Record<'react' | 'react-dom' | 'react-reconciler', LucideIcon> = {
  react: Atom,
  'react-dom': MonitorSmartphone,
  'react-reconciler': Cuboid,
};

type Props = { content: SharedContent['connection'] };

export const SharedPackageConnectionDiagram = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-connection" className="space-y-md">
      <SectionHeader
        id="connection"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<Package className="h-5 w-5" aria-hidden="true" />}
      />

      <div
        className={cx(
          'rounded-2xl border bg-[var(--term-bg)]',
          'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
          'p-md sm:p-lg',
        )}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.32fr)_minmax(0,_0.68fr)] gap-md lg:gap-12 items-stretch">
          <SharedHubCard
            title={content.hubTitle}
            subtitle={content.hubSubtitle}
            tags={content.hubTags}
          />

          <ul className="relative flex flex-col gap-3">
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
                  className={cx(
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
    className={cx(
      'flex flex-col gap-sm rounded-xl border p-md sm:p-lg',
      'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-fg)]',
      'shadow-[0_3px_0_var(--term-border)] lg:self-center',
    )}
  >
    <header className="flex items-center gap-sm">
      <span
        aria-hidden="true"
        className={cx(
          'inline-flex items-center justify-center w-10 h-10 rounded-md border',
          'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-accent)]',
        )}
      >
        <Package className="h-5 w-5" aria-hidden="true" />
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
            className={cx(
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
  const Icon = packageIcon[row.id];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,_0.45fr)_auto_minmax(0,_0.55fr)] gap-2 items-stretch">
      {/* 패키지 카드 */}
      <article
        className={cx(
          'flex items-center gap-sm rounded-lg border p-3',
          'border-[var(--term-border)] bg-[var(--term-surface)]',
          'shadow-[0_2px_0_var(--term-border)] transition-all hover:-translate-y-0.5',
        )}
      >
        <span
          aria-hidden="true"
          className={cx(
            'inline-flex items-center justify-center w-9 h-9 rounded-md border shrink-0',
            'border-[var(--term-border)] bg-[var(--term-surface)]',
            accent,
          )}
        >
          <Icon className="h-4 w-4" aria-hidden="true" />
        </span>
        <div className="flex flex-col min-w-0">
          <h4 className={cx('text-sm font-bold font-mono tracking-tight', accent)}>
            {row.packageName}
          </h4>
          <p className="text-[11px] text-[var(--term-muted)] break-keep">{row.description}</p>
        </div>
      </article>

      {/* 화살표 */}
      <div className="flex items-center justify-center" aria-hidden="true">
        <ArrowRight
          className="hidden sm:inline-flex h-5 w-5 text-[var(--term-accent)]"
          aria-hidden="true"
        />
        <ArrowRight
          className="sm:hidden h-5 w-5 rotate-90 text-[var(--term-accent)]"
          aria-hidden="true"
        />
      </div>

      {/* 사용 설명 카드 */}
      <article
        className={cx(
          'flex items-center rounded-lg border border-dashed p-3',
          'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-fg)]',
        )}
      >
        <p className="text-xsm leading-snug font-medium break-keep">{row.usage}</p>
      </article>
    </div>
  );
};
