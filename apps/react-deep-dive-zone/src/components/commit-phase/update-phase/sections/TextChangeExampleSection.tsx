import { cx } from '@berrypjh/react-ui';
import { ArrowRight, Lightbulb, Type } from 'lucide-react';

import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { UpdatePhaseContent } from '../content';

type Props = { content: UpdatePhaseContent['textExample'] };

export const TextChangeExampleSection = ({ content }: Props) => (
  <section
    id="text-example"
    aria-labelledby="heading-text-example"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      descriptionFullWidth
      id="text-example"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Type className="h-5 w-5" aria-hidden="true" />}
    />

    <article className="rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <JsxCard title={content.jsxTitle} code={content.jsxCode} />
        <StateCard
          title={content.stateTitle}
          name={content.stateName}
          from={content.stateFrom}
          to={content.stateTo}
        />
      </div>
    </article>

    <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
  </section>
);

const JsxCard = ({ title, code }: { title: string; code: string }) => (
  <article className="flex h-full flex-col gap-2 rounded-lg border-2 border-[var(--term-border)] bg-[var(--term-bg)] p-md shadow-[0_1px_0_var(--term-border)]">
    <h3 className="text-xsm sm:text-sm font-bold uppercase tracking-wider text-[var(--term-fg)]">
      {title}
    </h3>
    <pre className="overflow-x-auto rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] p-sm text-[11px] sm:text-xsm leading-snug font-mono text-[var(--term-fg)]">
      <code>{code}</code>
    </pre>
  </article>
);

const StateCard = ({
  title,
  name,
  from,
  to,
}: {
  title: string;
  name: string;
  from: string;
  to: string;
}) => {
  const t = toneTokens.teal;
  return (
    <article
      className={cx(
        'flex h-full flex-col gap-3 rounded-lg border-2 bg-[var(--term-bg)] p-md',
        t.fill.border,
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <h3 className={cx('text-xsm sm:text-sm font-bold uppercase tracking-wider', t.text)}>
        {title}
      </h3>
      <div className="flex items-center justify-center gap-3 py-3">
        <StateCircle value={from} variant="from" />
        <ArrowRight aria-hidden="true" className={cx('h-6 w-6', t.text)} />
        <StateCircle value={to} variant="to" />
      </div>
      <p className="text-center text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
        {name}
      </p>
    </article>
  );
};

const StateCircle = ({ value, variant }: { value: string; variant: 'from' | 'to' }) => {
  const isTo = variant === 'to';
  const t = toneTokens.teal;
  return (
    <span
      className={cx(
        'inline-flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full border-2 font-mono font-bold text-lg sm:text-xl tabular-nums shadow-[0_2px_0_var(--term-border)]',
        isTo
          ? cx(t.fill.bg, t.fill.border, t.fill.text)
          : 'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-fg)]',
      )}
    >
      {value}
    </span>
  );
};
