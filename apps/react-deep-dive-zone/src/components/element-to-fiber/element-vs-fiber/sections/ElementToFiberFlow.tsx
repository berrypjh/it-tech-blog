import { cx } from '@berrypjh/react-ui';
import { ArrowDown, ArrowRight, Sprout, Workflow } from 'lucide-react';

import { CodePreviewPanel } from '../../../shared/code';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { ElementVsFiberContent, FlowCard, FlowCardKind } from '../content';

type Props = { content: ElementVsFiberContent['flow'] };

const toneByKind: Record<FlowCardKind, ToneKey> = {
  jsx: 'sky',
  element: 'blue',
  fiber: 'teal',
};

export const ElementToFiberFlow = ({ content }: Props) => (
  <section id="flow" aria-labelledby="heading-flow" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="flow"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Workflow className="h-5 w-5" aria-hidden="true" />}
    />

    <div
      className={cx(
        'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <ol className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr_auto_1fr] gap-sm lg:gap-md items-stretch">
        {content.cards.map((card, idx) => (
          <li key={card.id} className="contents">
            <div className="flex">
              <FlowCardView card={card} />
            </div>
            {idx < content.cards.length - 1 && <FlowConnector />}
          </li>
        ))}
      </ol>
    </div>

    <SectionNote icon={<Sprout className="h-4 w-4" aria-hidden="true" />}>
      {content.footnote}
    </SectionNote>
  </section>
);

const FlowConnector = () => (
  <div className="flex justify-center items-center py-1 lg:py-0" aria-hidden="true">
    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[var(--term-surface)] border border-[var(--term-border)] text-[var(--term-accent)]">
      <ArrowDown className="h-4 w-4 lg:hidden" aria-hidden="true" />
      <ArrowRight className="h-4 w-4 hidden lg:block" aria-hidden="true" />
    </span>
  </div>
);

const FlowCardView = ({ card }: { card: FlowCard }) => {
  const t = toneTokens[toneByKind[card.kind]];
  return (
    <article
      className={cx(
        'flex flex-1 flex-col gap-sm rounded-2xl border-2 p-md min-w-0',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        t.border,
      )}
    >
      <header className="flex items-center gap-2">
        <span aria-hidden="true" className={cx('inline-block w-2 h-2 rounded-full', t.dot)} />
        <span className={cx('font-mono text-xsm font-bold tracking-tight', t.text)}>
          {card.label}
        </span>
      </header>
      <p className="text-[11px] leading-relaxed text-[var(--term-muted)] break-keep">
        {card.description}
      </p>

      {card.code && <CodePreviewPanel code={card.code} language="JSX" />}

      {card.items && (
        <ul className="flex flex-col gap-1.5 mt-1">
          {card.items.map((item) => (
            <li
              key={item.label}
              className={cx(
                'flex flex-col gap-0.5 rounded-lg border px-sm py-2',
                'border-[var(--term-border)] bg-[var(--term-surface)]',
              )}
            >
              <span
                className={cx(
                  'inline-flex items-center gap-1.5 font-mono text-[11px] font-bold',
                  t.text,
                )}
              >
                <span
                  aria-hidden="true"
                  className={cx('inline-block w-1 h-1 rounded-full', t.dot)}
                />
                {item.label}
              </span>
              <code className="font-mono text-xsm text-[var(--term-fg)] break-all">
                {item.value}
              </code>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
};
