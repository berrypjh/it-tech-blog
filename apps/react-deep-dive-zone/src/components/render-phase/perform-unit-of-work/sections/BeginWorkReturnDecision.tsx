import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { PerformUnitContent, ReturnDirectionCard } from '../content';
import { ArrowDownIcon, ArrowUpIcon, GitBranchIcon } from '../icons';

type Props = { content: PerformUnitContent['returnDirection'] };

export const BeginWorkReturnDecision = ({ content }: Props) => (
  <section id="return-direction" aria-labelledby="heading-return-direction" className="space-y-md">
    <SectionHeader
      id="return-direction"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<GitBranchIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 md:grid-cols-2 gap-md md:gap-lg">
      <DirectionCard card={content.cards.left} />
      <DirectionCard card={content.cards.right} />
    </div>
  </section>
);

const DirectionCard = ({ card }: { card: ReturnDirectionCard }) => {
  const isDown = card.direction === 'down';
  const tone: ToneKey = isDown ? 'teal' : 'violet';
  const t = toneTokens[tone];
  const Icon = isDown ? ArrowDownIcon : ArrowUpIcon;
  return (
    <article
      className={cn(
        'grid h-full grid-cols-[auto_minmax(0,_1fr)] items-start gap-md rounded-lg border p-md sm:p-lg',
        'shadow-[0_2px_0_var(--term-border)] transition-all hover:-translate-y-0.5 motion-reduce:transform-none',
        t.border,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-14 w-14 items-center justify-center rounded-lg border',
          t.chip,
        )}
      >
        <Icon className="h-6 w-6" />
      </span>

      <div className="flex flex-col gap-2 min-w-0">
        <h3 className={cn('text-sm sm:text-md font-bold leading-tight break-keep', t.text)}>
          {card.title}
        </h3>
        <span
          className={cn(
            'inline-flex w-fit items-center rounded-md border px-2 py-0.5 text-xsm font-bold tracking-tight',
            t.chip,
          )}
        >
          {card.subtitle}
        </span>
        <ul className="mt-1 flex flex-col gap-1.5">
          {card.items.map((item) => {
            const isMono = /[A-Za-z]/.test(item) && /[=()]/.test(item);
            return (
              <li
                key={item}
                className="flex items-start gap-2 text-xsm sm:text-sm leading-snug text-[var(--term-fg)] break-keep"
              >
                <span
                  aria-hidden="true"
                  className={cn('mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full', t.dot)}
                />
                {isMono ? <code className="font-mono">{item}</code> : <span>{item}</span>}
              </li>
            );
          })}
        </ul>
      </div>
    </article>
  );
};
