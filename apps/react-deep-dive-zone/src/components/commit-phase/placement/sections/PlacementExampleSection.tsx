import { cx } from '@berrypjh/react-ui';
import { ArrowDown, ChevronRight, Layers } from 'lucide-react';

import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { PlacementContent } from '../content';

type Props = { content: PlacementContent['example'] };

export const PlacementExampleSection = ({ content }: Props) => (
  <section
    id="easy-example"
    aria-labelledby="heading-easy-example"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="easy-example"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<Layers className="h-5 w-5" aria-hidden="true" />}
    />

    <article className="rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
      <div className="grid grid-cols-1 md:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-3 items-stretch">
        <DomCard
          title={content.beforeTitle}
          code={content.beforeCode}
          preview={content.beforePreview}
          previewLabel={content.previewLabel}
          variant="before"
        />
        <CenterArrow lines={content.centerLines} />
        <DomCard
          title={content.afterTitle}
          code={content.afterCode}
          preview={content.afterPreview}
          previewLabel={content.previewLabel}
          variant="after"
          newBadge={content.newBadge}
        />
      </div>
    </article>
  </section>
);

const CenterArrow = ({ lines }: { lines: string[] }) => {
  const t = toneTokens.violet;
  return (
    <div className="flex flex-col items-center justify-center gap-2 py-2 md:py-0">
      <span
        aria-hidden="true"
        className={cx(
          'inline-flex h-12 w-12 items-center justify-center rounded-full border-2',
          t.fill.bg,
          t.fill.border,
          t.fill.text,
          'shadow-[0_1px_0_var(--term-border)]',
        )}
      >
        <ChevronRight className="hidden md:inline-block h-6 w-6" aria-hidden="true" />
        <ArrowDown className="md:hidden h-6 w-6" aria-hidden="true" />
      </span>
      <ul
        className={cx(
          'flex flex-col gap-0.5 rounded-lg border-2 px-sm py-1.5 text-center',
          t.fill.border,
          t.fill.bg,
        )}
      >
        {lines.map((line) => (
          <li key={line} className={cx('text-[11px] font-mono font-bold break-keep', t.fill.text)}>
            {line}
          </li>
        ))}
      </ul>
    </div>
  );
};

const DomCard = ({
  title,
  code,
  preview,
  previewLabel,
  variant,
  newBadge,
}: {
  title: string;
  code: string;
  preview: string[];
  previewLabel: string;
  variant: 'before' | 'after';
  newBadge?: string;
}) => {
  const isAfter = variant === 'after';
  const t = toneTokens[isAfter ? 'teal' : 'sky'];
  return (
    <article
      className={cx(
        'flex h-full flex-col gap-md rounded-lg border-2 bg-[var(--term-bg)] p-md',
        t.fill.border,
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <h3
        className={cx('text-xsm sm:text-sm font-bold uppercase tracking-wider break-keep', t.text)}
      >
        {title}
      </h3>

      <pre
        className={cx(
          'overflow-x-auto rounded-md border bg-[var(--term-surface)] p-sm text-[11px] sm:text-xsm leading-snug font-mono',
          t.fill.border,
          t.fill.text,
        )}
      >
        <code>{code}</code>
      </pre>

      <ul className="flex flex-col gap-1 rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] p-sm">
        <li className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)] mb-1">
          {previewLabel}
        </li>
        {preview.map((item, idx) => {
          const isNew = isAfter && idx === preview.length - 1;
          return (
            <li
              key={item}
              className={cx(
                'flex items-center gap-2 rounded-md border px-2 py-1 text-xsm font-mono',
                isNew
                  ? cx(
                      toneTokens.teal.fill.border,
                      toneTokens.teal.fill.bg,
                      toneTokens.teal.fill.text,
                    )
                  : 'border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-fg)]',
              )}
            >
              <span
                aria-hidden="true"
                className={cx(
                  'inline-block h-1.5 w-1.5 rounded-full',
                  isNew ? toneTokens.teal.dot : 'bg-[var(--term-dim)]',
                )}
              />
              <span>{item}</span>
              {isNew && newBadge && (
                <span
                  className={cx(
                    'ml-auto text-[10px] font-mono uppercase tracking-wider font-bold',
                    toneTokens.teal.text,
                  )}
                >
                  {newBadge}
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </article>
  );
};
