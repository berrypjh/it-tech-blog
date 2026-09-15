import { cx } from '@berrypjh/react-ui';
import { Box, CheckCircle2, Split, Workflow } from 'lucide-react';

import { CompareVs } from '../../../shared/compare';
import { SectionHeader } from '../../../shared/section';
import { ToneBadge, ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { DispatchSetStateEntryContent, FunctionSplitCard } from '../content';

const splitIconByName = {
  workflow: Workflow,
  box: Box,
} as const;

type Props = { content: DispatchSetStateEntryContent['splitReason'] };

export const DispatchInternalSplitSection = ({ content }: Props) => (
  <section id="section-split" aria-labelledby="heading-split" className="space-y-md">
    <SectionHeader
      id="split"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Split className="h-5 w-5" aria-hidden="true" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-md lg:gap-lg items-stretch">
      <SplitCard card={content.leftCard} />
      <CompareVs />
      <SplitCard card={content.rightCard} />
    </div>
  </section>
);

const SplitCard = ({ card }: { card: FunctionSplitCard }) => {
  const Icon = splitIconByName[card.icon];
  const t = toneTokens[card.tone];
  return (
    <article
      className={cx(
        'flex flex-col gap-md rounded-lg border bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]',
        t.border,
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <ToneIconBox tone={card.tone} size="sm">
            <Icon className="h-[18px] w-[18px]" />
          </ToneIconBox>
          <h3 className={cx('text-sm sm:text-md font-bold font-mono break-keep', t.text)}>
            {card.title}
          </h3>
        </div>
        <ToneBadge tone={card.tone}>{card.badge}</ToneBadge>
      </header>

      <ul className="flex flex-col gap-2">
        {card.items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] px-3 py-2"
          >
            <CheckCircle2 aria-hidden="true" className={cx('mt-0.5 h-4 w-4 shrink-0', t.text)} />
            <span className="text-xsm sm:text-sm text-[var(--term-fg)] leading-snug break-keep">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
};
