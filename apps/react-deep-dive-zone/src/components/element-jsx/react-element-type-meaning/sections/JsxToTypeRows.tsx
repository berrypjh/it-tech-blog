import { cx } from '@berrypjh/react-ui';
import { ArrowDown, ArrowRight, Workflow } from 'lucide-react';

import { CodePreviewPanel } from '../../../shared/code';
import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { JsxRow, ReactElementTypeMeaningContent } from '../content';

type Props = { content: ReactElementTypeMeaningContent['rows'] };

export const JsxToTypeRows = ({ content }: Props) => (
  <section id="rows" aria-labelledby="heading-rows" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="rows"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Workflow className="h-5 w-5" aria-hidden="true" />}
    />

    <ul className="flex flex-col gap-md">
      {content.items.map((row) => (
        <li key={row.id}>
          <RowView row={row} />
        </li>
      ))}
    </ul>
  </section>
);

const RowView = ({ row }: { row: JsxRow }) => {
  return (
    <article
      className={cx(
        'group grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)_auto_minmax(0,_1.2fr)] gap-md items-stretch',
        'rounded-2xl border bg-[var(--term-bg)] p-md',
        'shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)]',
      )}
    >
      {/* JSX cell */}
      <div className="flex flex-col gap-2 min-w-0">
        <span className="text-[10px] uppercase tracking-wider font-mono text-[var(--term-muted)]">
          JSX
        </span>
        <CodePreviewPanel code={row.jsx} language="JSX" />
      </div>

      {/* arrow */}
      <ArrowCell />

      {/* type result cell */}
      <div className="flex flex-col gap-2 min-w-0">
        <div className="flex items-center gap-2">
          <span className="text-[10px] uppercase tracking-wider font-mono text-[var(--term-muted)]">
            result
          </span>
          <span
            className={cx(
              'inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider',
              toneTokens[row.tone].chip,
            )}
          >
            {row.typeBadge}
          </span>
        </div>
        <code
          className={cx(
            'font-mono text-sm sm:text-md font-bold tracking-tight break-all rounded-xl border px-md py-3',
            toneTokens[row.tone].chip,
          )}
        >
          {row.typeResult}
        </code>
      </div>

      <ArrowCell />

      {/* meaning cell */}
      <aside className="flex flex-col gap-2 min-w-0">
        <div className="flex items-center gap-2">
          <span className="text-[10px] uppercase tracking-wider font-mono text-[var(--term-muted)]">
            meaning
          </span>
          <span
            className={cx(
              'inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider',
              toneTokens[row.tone].chip,
            )}
          >
            {row.meaningBadge}
          </span>
        </div>
        <p
          className={cx('text-xsm sm:text-sm leading-relaxed break-keep', 'text-[var(--term-fg)]')}
        >
          {row.meaning}
        </p>
      </aside>
    </article>
  );
};

const ArrowCell = () => (
  <div className="flex items-center justify-center" aria-hidden="true">
    <span className="lg:hidden inline-flex items-center justify-center w-6 h-6 rounded-full bg-[var(--term-bg)] border border-[var(--term-border)] text-[var(--term-accent)]">
      <ArrowDown className="h-3.5 w-3.5" aria-hidden="true" />
    </span>
    <span className="hidden lg:inline-flex items-center justify-center w-6 h-6 rounded-full bg-[var(--term-bg)] border border-[var(--term-border)] text-[var(--term-accent)]">
      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
    </span>
  </div>
);
