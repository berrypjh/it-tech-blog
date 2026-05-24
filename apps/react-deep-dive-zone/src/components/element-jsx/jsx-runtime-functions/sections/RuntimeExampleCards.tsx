import { cn } from '@it-tech-blog/utils';

import { toneTokens } from '../../../getting-started/_shared/tones';
import { CodePanel } from '../../_shared/CodePanel';
import { SectionBadgeHeader } from '../../_shared/SectionBadgeHeader';
import type { ExampleCard, JsxRuntimeFunctionsContent } from '../content';
import { ArrowDownIcon, WorkflowIcon } from '../icons';

type Props = { content: JsxRuntimeFunctionsContent['examples'] };

export const RuntimeExampleCards = ({ content }: Props) => (
  <section aria-labelledby="heading-examples" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="examples"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<WorkflowIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md items-stretch">
      {content.cards.map((card) => (
        <li key={card.id} className="flex">
          <ExampleCardView card={card} resultLabel={content.resultLabel} />
        </li>
      ))}
    </ul>
  </section>
);

const ExampleCardView = ({ card, resultLabel }: { card: ExampleCard; resultLabel: string }) => {
  const t = toneTokens[card.tone];
  return (
    <article
      className={cn(
        'group flex flex-1 flex-col gap-md rounded-2xl border p-md',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)] transition-all hover:-translate-y-0.5',
        t.borderHover,
      )}
    >
      <header className="flex items-center justify-between gap-sm">
        <h3 className="text-xsm font-bold tracking-tight text-[var(--term-fg)]">{card.label}</h3>
        {card.badge && (
          <span
            className={cn(
              'inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider',
              t.chip,
            )}
          >
            {card.badge}
          </span>
        )}
      </header>

      <CodePanel code={card.code} language="JSX" />

      <div className="flex justify-center" aria-hidden="true">
        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[var(--term-bg)] border border-[var(--term-border)] text-sky-600 dark:text-sky-300">
          <ArrowDownIcon className="h-3.5 w-3.5" />
        </span>
      </div>

      <div
        className={cn(
          'flex items-center justify-between gap-sm rounded-xl border px-md py-2.5 mt-auto',
          t.chip,
        )}
      >
        <span className="text-[10px] uppercase tracking-wider font-bold">{resultLabel}</span>
        <span className={cn('font-mono text-md font-bold', t.text)}>{card.resultRuntime}</span>
      </div>
    </article>
  );
};
