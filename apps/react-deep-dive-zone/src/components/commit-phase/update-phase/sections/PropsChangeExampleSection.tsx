import { cx } from '@berrypjh/react-ui';
import { ArrowDown, ArrowRight, Lightbulb, Lock } from 'lucide-react';

import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { UpdatePhaseContent } from '../content';

type Props = { content: UpdatePhaseContent['propsExample'] };

export const PropsChangeExampleSection = ({ content }: Props) => (
  <section
    id="props-example"
    aria-labelledby="heading-props-example"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      descriptionFullWidth
      id="props-example"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Lock className="h-5 w-5" aria-hidden="true" />}
    />

    <article className="rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
      <div className="grid grid-cols-1 md:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-3 items-stretch">
        <CodeCard title={content.beforeTitle} code={content.beforeCode} variant="before" />
        <Arrow />
        <CodeCard title={content.afterTitle} code={content.afterCode} variant="after" />
      </div>
    </article>

    <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
  </section>
);

const Arrow = () => {
  const t = toneTokens.sky;
  return (
    <div aria-hidden="true" className={cx('flex items-center justify-center py-1 md:py-0', t.text)}>
      <span
        className={cx(
          'inline-flex h-10 w-10 items-center justify-center rounded-full border-2',
          t.fill.bg,
          t.fill.border,
          t.fill.text,
        )}
      >
        <ArrowRight className="hidden md:inline-block h-5 w-5" aria-hidden="true" />
        <ArrowDown className="md:hidden h-5 w-5" aria-hidden="true" />
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
      className={cx(
        'flex h-full flex-col gap-2 rounded-lg border-2 bg-[var(--term-bg)] p-md',
        isAfter ? t.fill.border : 'border-[var(--term-border)]',
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <h3
        className={cx(
          'text-xsm sm:text-sm font-bold uppercase tracking-wider break-keep',
          isAfter ? t.text : 'text-[var(--term-fg)]',
        )}
      >
        {title}
      </h3>
      <pre
        className={cx(
          'overflow-x-auto rounded-md border p-sm text-[11px] sm:text-xsm leading-snug font-mono',
          isAfter
            ? cx(t.fill.border, t.fill.bg, t.fill.text)
            : 'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-fg)]',
        )}
      >
        <code>{code}</code>
      </pre>
    </article>
  );
};
