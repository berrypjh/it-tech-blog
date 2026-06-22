import { cn } from '@it-tech-blog/utils';

import type { ReactNode } from 'react';

import { SectionHeader } from '../../../shared/section';
import type { WhyReact19Content } from '../content';
import { CheckIcon, RefreshIcon, SwapIcon, XIcon } from '../icons';

type Props = { content: WhyReact19Content['terminology'] };

type TermTone = 'legacy' | 'modern';

type TermItem = { name: string; description: string };

const toneClasses: Record<
  TermTone,
  { card: string; iconBadge: string; header: string; bullet: string; code: string }
> = {
  legacy: {
    card: 'border-[var(--term-border)] hover:border-[var(--term-dim)] hover:shadow-[0_2px_0_var(--term-border)]',
    iconBadge: 'border border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-dim)]',
    header: 'text-[var(--term-muted)]',
    bullet: 'bg-[var(--term-dim)]',
    code: 'text-[var(--term-fg)]',
  },
  modern: {
    card: 'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)] hover:border-[var(--term-accent)]',
    iconBadge:
      'bg-[var(--term-surface)] border border-[var(--term-border)] text-[var(--term-accent)]',
    header: 'text-[var(--term-accent)]',
    bullet: 'bg-[var(--term-accent)]',
    code: 'text-[var(--term-accent)]',
  },
};

const TermItemRow = ({ item, tone }: { item: TermItem; tone: TermTone }) => {
  const t = toneClasses[tone];
  return (
    <li className="flex items-start gap-sm">
      <span
        aria-hidden="true"
        className={cn('mt-1 inline-block w-1.5 h-1.5 rounded-full shrink-0', t.bullet)}
      />
      <div className="flex flex-col gap-0.5 min-w-0">
        <code className={cn('text-xsm font-mono font-bold break-all', t.code)}>{item.name}</code>
        <span className="text-xsm text-[var(--term-muted)] leading-relaxed break-keep">
          {item.description}
        </span>
      </div>
    </li>
  );
};

const TermPanel = ({
  tone,
  panel,
  icon,
}: {
  tone: TermTone;
  panel: { header: string; items: TermItem[] };
  icon: ReactNode;
}) => {
  const t = toneClasses[tone];
  return (
    <article
      aria-labelledby={`terminology-${tone}-header`}
      className={cn(
        'flex flex-col gap-md rounded-lg border bg-[var(--term-bg)] p-md sm:p-lg transition-all hover:-translate-y-px',
        t.card,
      )}
    >
      <header className="flex items-center gap-2 pb-sm border-b border-dashed border-[var(--term-border)]">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-7 h-7 rounded-full',
            t.iconBadge,
          )}
        >
          {icon}
        </span>
        <h3
          id={`terminology-${tone}-header`}
          className={cn('text-xsm sm:text-sm font-bold tracking-tight', t.header)}
        >
          {panel.header}
        </h3>
      </header>

      <ul className="flex flex-col gap-md">
        {panel.items.map((item) => (
          <TermItemRow key={item.name} item={item} tone={tone} />
        ))}
      </ul>
    </article>
  );
};

export const TerminologyShiftCompare = ({ content }: Props) => {
  return (
    <section id="section-terminology" aria-labelledby="heading-terminology" className="space-y-lg">
      <SectionHeader
        id="terminology"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<SwapIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(220px,_0.7fr)_1fr] gap-md lg:gap-lg items-stretch">
        {/* 왼쪽: 과거 자료 (neutral) */}
        <TermPanel tone="legacy" panel={content.left} icon={<XIcon className="h-3.5 w-3.5" />} />

        {/* 중앙: 메시지 (브리지) */}
        <div className="flex flex-col items-center justify-center gap-md text-center lg:px-sm py-md">
          <span
            aria-hidden="true"
            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[var(--term-surface)] border border-[var(--term-border)] text-[var(--term-accent)] shadow-[0_2px_0_var(--term-border)]"
          >
            <RefreshIcon className="h-5 w-5" />
          </span>
          <p className="text-md sm:text-lg font-bold tracking-tight text-[var(--term-fg)] break-keep leading-snug">
            {content.center.headline.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </p>
          <p className="text-xsm text-[var(--term-muted)] leading-relaxed break-keep">
            {content.center.sub.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </p>
        </div>

        {/* 오른쪽: 최신 용어 (teal/blue 강조) */}
        <TermPanel
          tone="modern"
          panel={content.right}
          icon={<CheckIcon className="h-3.5 w-3.5" />}
        />
      </div>
    </section>
  );
};
