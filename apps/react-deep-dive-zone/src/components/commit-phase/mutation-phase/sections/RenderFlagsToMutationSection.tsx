import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import { commitToneTokens } from '../../_shared/tones';
import type { ConnectionCard, MutationPhaseContent } from '../content';
import { ArrowDownIcon, ArrowRightIcon, FlagIcon, WorkflowIcon, ZapIcon } from '../icons';

type Props = { content: MutationPhaseContent['connection'] };

export const RenderFlagsToMutationSection = ({ content }: Props) => (
  <section
    id="render-to-mutation"
    aria-labelledby="heading-render-to-mutation"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="render-to-mutation"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<WorkflowIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'rounded-3xl border p-md sm:p-lg',
        'border-[var(--term-border)] bg-[var(--term-bg)]',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <div className="grid grid-cols-1 md:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-3 items-stretch">
        <ConnCard card={content.cards[0]} />
        <Arrow />
        <ConnCard card={content.cards[1]} />
      </div>
    </article>
  </section>
);

const Arrow = () => (
  <div
    aria-hidden="true"
    className="flex items-center justify-center text-teal-500 dark:text-teal-300 py-1 md:py-0"
  >
    <span
      className={cn(
        'relative inline-flex items-center justify-center rounded-full border-2',
        'border-teal-300/80 bg-gradient-to-br from-teal-100 to-sky-100',
        'dark:border-teal-700/70 dark:from-teal-950/70 dark:to-sky-950/60',
        'h-10 w-10',
      )}
    >
      <span className="hidden md:inline-block">
        <ArrowRightIcon className="h-5 w-5" />
      </span>
      <span className="md:hidden">
        <ArrowDownIcon className="h-5 w-5" />
      </span>
    </span>
  </div>
);

const ConnCard = ({ card }: { card: ConnectionCard }) => {
  const t = commitToneTokens[card.tone];
  const isRender = card.side === 'render';
  const Icon = isRender ? FlagIcon : ZapIcon;
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-sm rounded-2xl border-2 p-md sm:p-lg',
        t.borderStrong,
        t.bg,
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-11 w-11 items-center justify-center rounded-2xl border',
            t.chipSolid,
          )}
        >
          <Icon className="h-5 w-5" />
        </span>
        <span
          className={cn(
            'inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider',
            t.chip,
          )}
        >
          {isRender ? 'plan' : 'execute'}
        </span>
      </header>
      <h3 className={cn('text-md sm:text-lg font-bold leading-tight break-keep', t.textStrong)}>
        {card.title}
      </h3>
      <p className={cn('text-xsm font-bold break-keep', t.text)}>{card.subtitle}</p>
      <ul className="flex flex-col gap-1.5 mt-1">
        {card.lines.map((line) => (
          <li
            key={line}
            className={cn(
              'flex items-center gap-2 text-xsm sm:text-sm leading-snug break-keep',
              t.textStrong,
            )}
          >
            <span
              aria-hidden="true"
              className={cn('inline-block h-1.5 w-1.5 rounded-full shrink-0', t.dot)}
            />
            <span className={isRender ? 'font-mono' : undefined}>{line}</span>
          </li>
        ))}
      </ul>
    </article>
  );
};
