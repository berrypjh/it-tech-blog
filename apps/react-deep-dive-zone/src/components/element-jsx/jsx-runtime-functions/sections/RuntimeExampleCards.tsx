import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
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
        <li key={card.id} className="flex min-w-0">
          <ExampleCardView card={card} resultLabel={content.resultLabel} />
        </li>
      ))}
    </ul>
  </section>
);

const ExampleCardView = ({ card, resultLabel }: { card: ExampleCard; resultLabel: string }) => {
  return (
    <article
      className={cn(
        'group flex min-w-0 flex-1 flex-col gap-md rounded-2xl border p-md',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)] transition-all hover:-translate-y-0.5',
      )}
    >
      <header className="flex items-center justify-between gap-sm">
        <h3 className="text-xsm font-bold tracking-tight text-[var(--term-fg)]">{card.label}</h3>
        {card.badge && (
          <span
            className={cn(
              'inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider',
              toneTokens[card.tone].chip,
            )}
          >
            {card.badge}
          </span>
        )}
      </header>

      <CodePreviewPanel code={card.code} language="JSX" />

      <div className="flex justify-center" aria-hidden="true">
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[var(--term-bg)] border border-[var(--term-border)] text-[var(--term-accent)]">
          <ArrowDownIcon className="h-3.5 w-3.5" />
        </span>
      </div>

      <div
        className={cn(
          'flex items-center justify-between gap-sm rounded-xl border px-md py-2.5 mt-auto',
          toneTokens[card.tone].chip,
        )}
      >
        <span className="text-[10px] uppercase tracking-wider font-bold text-[var(--term-muted)]">
          {resultLabel}
        </span>
        <span className={cn('font-mono text-md font-bold', toneTokens[card.tone].text)}>
          {card.resultRuntime}
        </span>
      </div>
    </article>
  );
};
