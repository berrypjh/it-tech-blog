import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { UpdatePhaseContent } from '../content';
import { ArrowDownIcon, ArrowRightIcon, LockIcon, SquareEqualIcon } from '../icons';

type Props = { content: UpdatePhaseContent['propsExample'] };

export const PropsChangeExampleSection = ({ content }: Props) => (
  <section
    id="props-example"
    aria-labelledby="heading-props-example"
    className="space-y-md scroll-mt-xl"
  >
    <SectionHeader
      id="props-example"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<LockIcon className="h-5 w-5" />}
    />

    <article className="rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
      <div className="grid grid-cols-1 md:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-3 items-stretch">
        <CodeCard title={content.beforeTitle} code={content.beforeCode} variant="before" />
        <Arrow />
        <CodeCard title={content.afterTitle} code={content.afterCode} variant="after" />
      </div>

      <aside
        className={cn(
          'mt-md flex items-start gap-sm rounded-lg border-2 p-md',
          toneTokens.sky.fill.border,
          toneTokens.sky.fill.bg,
        )}
      >
        <ToneIconBox tone="sky" size="sm" className="mt-0.5 shrink-0">
          <SquareEqualIcon className="h-4 w-4" />
        </ToneIconBox>
        <p
          className={cn('text-xsm sm:text-sm leading-relaxed break-keep', toneTokens.sky.fill.text)}
        >
          {content.bottomNote}
        </p>
      </aside>
    </article>
  </section>
);

const Arrow = () => {
  const t = toneTokens.sky;
  return (
    <div aria-hidden="true" className={cn('flex items-center justify-center py-1 md:py-0', t.text)}>
      <span
        className={cn(
          'inline-flex h-10 w-10 items-center justify-center rounded-full border-2',
          t.fill.bg,
          t.fill.border,
          t.fill.text,
        )}
      >
        <ArrowRightIcon className="hidden md:inline-block h-5 w-5" />
        <ArrowDownIcon className="md:hidden h-5 w-5" />
      </span>
    </div>
  );
};

const CodeCard = ({
  title,
  code,
  variant,
}: {
  title: string;
  code: string;
  variant: 'before' | 'after';
}) => {
  const isAfter = variant === 'after';
  const t = toneTokens.sky;
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-2 rounded-lg border-2 bg-[var(--term-bg)] p-md',
        isAfter ? t.fill.border : 'border-[var(--term-border)]',
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <h3
          className={cn(
            'text-xsm sm:text-sm font-bold uppercase tracking-wider break-keep',
            isAfter ? t.text : 'text-[var(--term-fg)]',
          )}
        >
          {title}
        </h3>
        <span
          className={cn(
            'inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider',
            isAfter
              ? t.chip
              : 'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-muted)]',
          )}
        >
          jsx
        </span>
      </header>
      <pre
        className={cn(
          'overflow-x-auto rounded-md border p-sm text-[11px] sm:text-xsm leading-snug font-mono',
          isAfter
            ? cn(t.fill.border, t.fill.bg, t.fill.text)
            : 'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-fg)]',
        )}
      >
        <code>{code}</code>
      </pre>
    </article>
  );
};
