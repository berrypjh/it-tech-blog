import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { MutationPhaseContent } from '../content';
import { ArrowDownIcon, ArrowRightIcon, PlusIcon, ReplaceIcon } from '../icons';

type Props = { content: MutationPhaseContent['beforeAfter'] };

export const MutationBeforeAfterSection = ({ content }: Props) => (
  <section
    id="before-after"
    aria-labelledby="heading-before-after"
    className="space-y-md scroll-mt-xl"
  >
    <SectionHeader
      id="before-after"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<ReplaceIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 md:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-3 items-stretch">
      <DomCard variant="before" card={content.beforeCard} />
      <CenterArrow centerLabel={content.centerLabel} />
      <DomCard variant="after" card={content.afterCard} />
    </div>
  </section>
);

const CenterArrow = ({
  centerLabel,
}: {
  centerLabel: MutationPhaseContent['beforeAfter']['centerLabel'];
}) => {
  const t = toneTokens.violet;
  return (
    <div className="flex flex-col items-center justify-center gap-2 py-2 md:py-0">
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-10 w-10 items-center justify-center rounded-full border-2',
          t.fill.bg,
          t.fill.border,
          t.fill.text,
          'shadow-[0_1px_0_var(--term-border)]',
        )}
      >
        <ArrowRightIcon className="hidden md:inline-block h-5 w-5" />
        <ArrowDownIcon className="md:hidden h-5 w-5" />
      </span>
      <article
        className={cn(
          'flex flex-col items-center gap-0.5 rounded-lg border-2 px-sm py-1.5 text-center',
          t.fill.border,
          t.fill.bg,
        )}
      >
        <span
          className={cn(
            'inline-flex items-center gap-1 text-xsm font-bold break-keep',
            t.fill.text,
          )}
        >
          <PlusIcon aria-hidden="true" className="h-3.5 w-3.5" />
          {centerLabel.title}
        </span>
        <span className={cn('text-[10px] font-mono break-keep', t.text)}>
          {centerLabel.subtitle}
        </span>
      </article>
    </div>
  );
};

const DomCard = ({
  variant,
  card,
}: {
  variant: 'before' | 'after';
  card: { title: string; code: string; preview: string[] };
}) => {
  const isBefore = variant === 'before';
  const t = toneTokens[isBefore ? 'sky' : 'teal'];
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-md rounded-lg border-2 bg-[var(--term-bg)] p-md sm:p-lg',
        t.fill.border,
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <h3
          className={cn(
            'text-xsm sm:text-sm font-bold uppercase tracking-wider break-keep',
            t.text,
          )}
        >
          {card.title}
        </h3>
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider',
            t.chip,
          )}
        >
          {isBefore ? 'before' : 'after'}
        </span>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,_1.4fr)_minmax(0,_1fr)] gap-3">
        <pre
          className={cn(
            'overflow-x-auto rounded-md border bg-[var(--term-surface)] p-sm text-[11px] sm:text-xsm leading-snug font-mono',
            t.fill.border,
            t.fill.text,
          )}
        >
          <code>{card.code}</code>
        </pre>

        <ListPreview items={card.preview} variant={variant} />
      </div>
    </article>
  );
};

const ListPreview = ({ items, variant }: { items: string[]; variant: 'before' | 'after' }) => {
  const newTone = toneTokens.violet;
  return (
    <ul className="flex flex-col gap-1 rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] p-sm">
      <li className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)] mb-1">
        preview
      </li>
      {items.map((item, idx) => {
        const isNew = variant === 'after' && idx === items.length - 1;
        return (
          <li
            key={item}
            className={cn(
              'flex items-center gap-2 rounded-md border px-2 py-1 text-xsm font-mono',
              isNew
                ? cn(newTone.fill.border, newTone.fill.bg, newTone.fill.text)
                : 'border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-fg)]',
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                'inline-block h-1.5 w-1.5 rounded-full',
                isNew ? newTone.dot : 'bg-[var(--term-dim)]',
              )}
            />
            <span>{item}</span>
            {isNew && (
              <span
                className={cn(
                  'ml-auto text-[9px] font-mono uppercase tracking-wider',
                  newTone.text,
                )}
              >
                new
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
};
