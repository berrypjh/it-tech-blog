import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { ConnectionCard, MutationPhaseContent } from '../content';
import { ArrowDownIcon, ArrowRightIcon, FlagIcon, WorkflowIcon, ZapIcon } from '../icons';

type Props = { content: MutationPhaseContent['connection'] };

export const RenderFlagsToMutationSection = ({ content }: Props) => (
  <section
    id="render-to-mutation"
    aria-labelledby="heading-render-to-mutation"
    className="space-y-md scroll-mt-xl"
  >
    <SectionHeader
      id="render-to-mutation"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<WorkflowIcon className="h-5 w-5" />}
    />

    <article className="rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
      <div className="grid grid-cols-1 md:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-3 items-stretch">
        <ConnCard card={content.cards[0]} />
        <Arrow />
        <ConnCard card={content.cards[1]} />
      </div>
    </article>
  </section>
);

const Arrow = () => {
  const t = toneTokens.teal;
  return (
    <div aria-hidden="true" className={cn('flex items-center justify-center py-1 md:py-0', t.text)}>
      <span
        className={cn(
          'inline-flex h-10 w-10 items-center justify-center rounded-full border-2',
          t.fill.bg,
          t.fill.border,
          t.fill.text,
        )}
      >
        <ArrowRightIcon className="hidden md:inline-block h-5 w-5" />
        <ArrowDownIcon className="md:hidden h-5 w-5" />
      </span>
    </div>
  );
};

const ConnCard = ({ card }: { card: ConnectionCard }) => {
  const t = toneTokens[card.tone];
  const isRender = card.side === 'render';
  const Icon = isRender ? FlagIcon : ZapIcon;
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-sm rounded-lg border-2 p-md sm:p-lg',
        t.fill.border,
        t.fill.bg,
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <ToneIconBox tone={card.tone}>
          <Icon className="h-5 w-5" />
        </ToneIconBox>
        <span
          className={cn(
            'inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider',
            t.chip,
          )}
        >
          {isRender ? 'plan' : 'execute'}
        </span>
      </header>
      <h3 className={cn('text-md sm:text-lg font-bold leading-tight break-keep', t.fill.text)}>
        {card.title}
      </h3>
      <p className={cn('text-xsm font-bold break-keep', t.text)}>{card.subtitle}</p>
      <ul className="flex flex-col gap-1.5 mt-1">
        {card.lines.map((line) => (
          <li
            key={line}
            className={cn(
              'flex items-center gap-2 text-xsm sm:text-sm leading-snug break-keep',
              t.fill.text,
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
