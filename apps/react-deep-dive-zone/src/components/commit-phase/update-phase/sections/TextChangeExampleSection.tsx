import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { UpdatePhaseContent } from '../content';
import { ArrowRightIcon, TypeIcon } from '../icons';

type Props = { content: UpdatePhaseContent['textExample'] };

export const TextChangeExampleSection = ({ content }: Props) => (
  <section
    id="text-example"
    aria-labelledby="heading-text-example"
    className="space-y-md scroll-mt-xl"
  >
    <SectionHeader
      id="text-example"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<TypeIcon className="h-5 w-5" />}
    />

    <article className="rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <JsxCard title={content.jsxTitle} code={content.jsxCode} />
        <StateCard title={content.stateTitle} from={content.stateFrom} to={content.stateTo} />
      </div>

      <aside
        className={cn(
          'mt-md flex items-start gap-sm rounded-lg border-2 p-md',
          toneTokens.teal.fill.border,
          toneTokens.teal.fill.bg,
        )}
      >
        <ToneIconBox tone="teal" size="sm" className="mt-0.5 shrink-0">
          <TypeIcon className="h-4 w-4" />
        </ToneIconBox>
        <p
          className={cn(
            'text-xsm sm:text-sm leading-relaxed break-keep',
            toneTokens.teal.fill.text,
          )}
        >
          {content.bottomNote}
        </p>
      </aside>
    </article>
  </section>
);

const JsxCard = ({ title, code }: { title: string; code: string }) => (
  <article className="flex h-full flex-col gap-2 rounded-lg border-2 border-[var(--term-border)] bg-[var(--term-bg)] p-md shadow-[0_1px_0_var(--term-border)]">
    <header className="flex items-center justify-between gap-2">
      <h3 className="text-xsm sm:text-sm font-bold uppercase tracking-wider text-[var(--term-fg)]">
        {title}
      </h3>
      <span className="inline-flex items-center rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
        jsx
      </span>
    </header>
    <pre className="overflow-x-auto rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] p-sm text-[11px] sm:text-xsm leading-snug font-mono text-[var(--term-fg)]">
      <code>{code}</code>
    </pre>
  </article>
);

const StateCard = ({ title, from, to }: { title: string; from: string; to: string }) => {
  const t = toneTokens.teal;
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-3 rounded-lg border-2 bg-[var(--term-bg)] p-md',
        t.fill.border,
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <h3 className={cn('text-xsm sm:text-sm font-bold uppercase tracking-wider', t.text)}>
          {title}
        </h3>
        <span
          className={cn(
            'inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider',
            t.chip,
          )}
        >
          state
        </span>
      </header>
      <div className="flex items-center justify-center gap-3 py-3">
        <StateCircle value={from} variant="from" />
        <ArrowRightIcon aria-hidden="true" className={cn('h-6 w-6', t.text)} />
        <StateCircle value={to} variant="to" />
      </div>
      <p className="text-center text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
        count
      </p>
    </article>
  );
};

const StateCircle = ({ value, variant }: { value: string; variant: 'from' | 'to' }) => {
  const isTo = variant === 'to';
  const t = toneTokens.teal;
  return (
    <span
      aria-label={`count ${variant} ${value}`}
      className={cn(
        'inline-flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full border-2 font-mono font-bold text-lg sm:text-xl tabular-nums shadow-[0_2px_0_var(--term-border)]',
        isTo
          ? cn(t.fill.bg, t.fill.border, t.fill.text)
          : 'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-fg)]',
      )}
    >
      {value}
    </span>
  );
};
