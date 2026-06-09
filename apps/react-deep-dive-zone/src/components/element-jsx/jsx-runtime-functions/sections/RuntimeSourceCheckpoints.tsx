import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/CodePreviewPanel';
import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import { toneTokens } from '../../../shared/tones';
import type { CheckpointCard, JsxRuntimeFunctionsContent } from '../content';
import { ArrowRightIcon, CompassIcon, FileTextIcon } from '../icons';

type Props = { content: JsxRuntimeFunctionsContent['checkpoints'] };

export const RuntimeSourceCheckpoints = ({ content }: Props) => (
  <section
    id="checkpoints"
    aria-labelledby="heading-checkpoints"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="checkpoints"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<CompassIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 xl:grid-cols-2 gap-md items-stretch">
      {content.cards.map((card) => (
        <li key={card.id} className="flex min-w-0">
          <CheckpointCardView card={card} />
        </li>
      ))}
    </ul>
  </section>
);

const CheckpointCardView = ({ card }: { card: CheckpointCard }) => {
  const t = toneTokens[card.tone];
  return (
    <article
      className={cn(
        'group flex min-w-0 flex-1 flex-col gap-md rounded-2xl border p-md',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)] transition-all hover:-translate-y-0.5',
        t.borderHover,
      )}
    >
      <header className="flex items-center gap-sm">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-7 h-7 rounded-full border font-mono text-xsm font-bold tabular-nums',
            t.chip,
          )}
        >
          {card.number}
        </span>
        <span className="flex-1 inline-flex items-center gap-2 min-w-0">
          <FileTextIcon aria-hidden="true" className={cn('h-4 w-4 shrink-0', t.text)} />
          <code className="font-mono text-xsm tracking-tight text-[var(--term-fg)] truncate">
            {card.filePath}
          </code>
        </span>
      </header>

      <CodePreviewPanel code={card.code} language="JS" />

      <ol aria-label="source flow" className="flex flex-wrap items-center gap-1.5">
        {card.flowPills.map((pill, idx) => (
          <li key={pill} className="inline-flex items-center gap-1.5">
            <span
              className={cn(
                'inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-mono font-bold',
                t.chip,
              )}
            >
              {pill}
            </span>
            {idx < card.flowPills.length - 1 && (
              <ArrowRightIcon aria-hidden="true" className={cn('h-3 w-3 shrink-0', t.text)} />
            )}
          </li>
        ))}
      </ol>
    </article>
  );
};
