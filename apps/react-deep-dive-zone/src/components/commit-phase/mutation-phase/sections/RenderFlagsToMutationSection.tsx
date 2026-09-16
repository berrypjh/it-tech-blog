import { cx } from '@berrypjh/react-ui';
import { ArrowDown, ArrowRight, Flag, Workflow, Zap } from 'lucide-react';

import { SectionBadgeHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { ConnectionCard, MutationPhaseContent } from '../content';

type Props = { content: MutationPhaseContent['connection'] };

export const RenderFlagsToMutationSection = ({ content }: Props) => (
  <section
    id="render-to-mutation"
    aria-labelledby="heading-render-to-mutation"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      descriptionFullWidth
      id="render-to-mutation"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Workflow className="h-5 w-5" aria-hidden="true" />}
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

const ConnCard = ({ card }: { card: ConnectionCard }) => {
  const t = toneTokens[card.tone];
  const isRender = card.side === 'render';
  const Icon = isRender ? Flag : Zap;
  return (
    <article
      className={cx(
        'flex h-full flex-col gap-sm rounded-lg border-2 p-md sm:p-lg',
        t.fill.border,
        t.fill.bg,
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <ToneIconBox tone={card.tone}>
        <Icon className="h-5 w-5" />
      </ToneIconBox>
      <h3 className={cx('text-md sm:text-lg font-bold leading-tight break-keep', t.fill.text)}>
        {card.title}
      </h3>
      <p className={cx('text-xsm font-bold break-keep', t.text)}>{card.subtitle}</p>
      <ul className="flex flex-col gap-1.5 mt-1">
        {card.lines.map((line) => (
          <li
            key={line}
            className={cx(
              'flex items-center gap-2 text-xsm sm:text-sm leading-snug break-keep',
              t.fill.text,
            )}
          >
            <span
              aria-hidden="true"
              className={cx('inline-block h-1.5 w-1.5 rounded-full shrink-0', t.dot)}
            />
            <span className={isRender ? 'font-mono' : undefined}>{line}</span>
          </li>
        ))}
      </ul>
    </article>
  );
};
