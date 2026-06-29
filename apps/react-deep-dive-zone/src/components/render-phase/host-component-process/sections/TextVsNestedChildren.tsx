import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { SectionHeader } from '../../../shared/section';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { ChildExampleCard, HostComponentContent } from '../content';
import { ArrowDownIcon, LayersIcon } from '../icons';

type Props = { content: HostComponentContent['childCompare'] };

const toneByKind: Record<ChildExampleCard['kind'], ToneKey> = {
  text: 'teal',
  nested: 'violet',
};

export const TextVsNestedChildren = ({ content }: Props) => (
  <section id="text-vs-nested" aria-labelledby="heading-text-vs-nested" className="space-y-md">
    <SectionHeader
      id="text-vs-nested"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<LayersIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 md:grid-cols-2 gap-md md:gap-lg items-stretch">
      <Card card={content.cards.left} />
      <Card card={content.cards.right} />
    </div>
  </section>
);

const Card = ({ card }: { card: ChildExampleCard }) => {
  const t = toneTokens[toneByKind[card.kind]];
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-3 rounded-lg border p-md sm:p-lg',
        'shadow-[0_2px_0_var(--term-border)] transition-all hover:-translate-y-0.5 motion-reduce:transform-none',
        t.border,
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <h3 className={cn('text-md sm:text-lg font-bold leading-tight break-keep', t.text)}>
          {card.cardTitle}
        </h3>
        <span
          className={cn(
            'inline-flex items-center rounded-full border px-2 py-0.5 text-xxsm font-mono uppercase tracking-wider',
            t.chip,
          )}
        >
          {card.kind}
        </span>
      </header>

      <CodePreviewPanel code={card.code} language="jsx" showWindowDots={false} />

      <ArrowDownIcon aria-hidden="true" className="mx-auto h-5 w-5 text-[var(--term-accent)]" />

      <div
        className={cn(
          'flex flex-col items-center justify-center gap-1 rounded-lg border p-md',
          t.fill.bg,
          t.fill.border,
        )}
      >
        <span className={cn('text-sm sm:text-md font-bold leading-tight break-keep', t.fill.text)}>
          {card.resultTitle}
        </span>
        <span className="text-xxsm font-mono uppercase tracking-wider text-[var(--term-muted)]">
          {card.resultDetail}
        </span>
      </div>

      <p className="mt-auto text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep">
        {card.explanation}
      </p>
    </article>
  );
};
