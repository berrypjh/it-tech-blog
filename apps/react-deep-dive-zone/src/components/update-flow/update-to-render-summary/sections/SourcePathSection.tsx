import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../element-jsx/_shared/SectionBadgeHeader';
import { toneTokens } from '../../../getting-started/_shared/tones';
import type { SourcePathCard, UpdateToRenderSummaryContent } from '../content';
import { FileCodeIcon, FileTextIcon, GitBranchIcon, SparklesIcon } from '../icons';

type Props = { content: UpdateToRenderSummaryContent['sourcePath'] };

export const SourcePathSection = ({ content }: Props) => (
  <section
    id="source-path"
    aria-labelledby="heading-source-path"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="source-path"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<GitBranchIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md items-stretch">
      {content.cards.map((card) => (
        <li key={card.number} className="flex">
          <Card card={card} />
        </li>
      ))}
    </ul>
  </section>
);

const Card = ({ card }: { card: SourcePathCard }) => {
  const t = toneTokens[card.tone];
  return (
    <article
      className={cn(
        'flex flex-col gap-md rounded-3xl border-2 bg-[var(--term-bg)] p-md sm:p-lg w-full',
        t.border,
        'shadow-[0_2px_0_var(--term-border)]',
        'transition-transform hover:-translate-y-0.5',
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-10 w-10 items-center justify-center rounded-2xl border text-md font-mono font-bold tabular-nums',
            t.chip,
          )}
        >
          {card.number}
        </span>
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-9 w-9 items-center justify-center rounded-xl border',
            t.chip,
          )}
        >
          <FileCodeIcon className="h-4 w-4" />
        </span>
      </header>

      <h3
        className={cn(
          'inline-flex w-fit items-center rounded-lg border px-2.5 py-1 font-mono text-xsm sm:text-sm font-bold',
          'border-slate-800 bg-slate-950 text-slate-100 break-all',
        )}
      >
        <span className="text-amber-300">{card.file}</span>
      </h3>

      <ul className="flex flex-col gap-2">
        {card.functions.map((fn) => (
          <li
            key={fn.name}
            className={cn('flex flex-col gap-1 rounded-xl border px-3 py-2', t.chip)}
          >
            <span
              className={cn(
                'inline-flex items-center gap-1.5 font-mono text-xsm font-bold',
                t.text,
              )}
            >
              <FileTextIcon aria-hidden="true" className="h-3.5 w-3.5" />
              {fn.name}
            </span>
            <span className="text-[10px] sm:text-xxsm text-[var(--term-muted)] leading-snug break-keep">
              {fn.body}
            </span>
          </li>
        ))}
      </ul>

      {card.followBoxTitle && (
        <div
          className={cn(
            'mt-auto rounded-2xl border-2 border-dashed p-3',
            'border-violet-300/70 bg-violet-50/40',
            'dark:border-violet-700/70 dark:bg-violet-950/25',
          )}
        >
          <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-violet-700 dark:text-violet-200">
            <SparklesIcon aria-hidden="true" className="h-3 w-3" />
            {card.followBoxTitle}
          </span>
          <p className="mt-1 text-xxsm font-mono text-violet-900/85 dark:text-violet-100/85 leading-snug break-keep">
            {card.followBoxBody}
          </p>
        </div>
      )}
    </article>
  );
};
