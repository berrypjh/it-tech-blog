import { cx } from '@berrypjh/react-ui';
import { ArrowDown, ArrowUp, GitBranch } from 'lucide-react';

import { SectionBadgeHeader } from '../../../shared/section';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { PerformUnitContent, ReturnDirectionCard } from '../content';

type Props = { content: PerformUnitContent['returnDirection'] };

export const BeginWorkReturnDecision = ({ content }: Props) => (
  <section
    id="return-direction"
    aria-labelledby="heading-return-direction"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      descriptionFullWidth
      id="return-direction"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<GitBranch className="h-5 w-5" aria-hidden="true" />}
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
  const Icon = isDown ? ArrowDown : ArrowUp;
  return (
    <article
      className={cx(
        'grid h-full grid-cols-[auto_minmax(0,_1fr)] items-start gap-md rounded-lg border p-md sm:p-lg',
        'shadow-[0_2px_0_var(--term-border)] transition-all hover:-translate-y-0.5 motion-reduce:transform-none',
        t.border,
      )}
    >
      <span
        aria-hidden="true"
        className={cx(
          'inline-flex h-14 w-14 items-center justify-center rounded-lg border',
          t.chip,
        )}
      >
        <Icon className="h-6 w-6" />
      </span>

      <div className="flex flex-col gap-2 min-w-0">
        <h3 className={cx('text-sm sm:text-md font-bold leading-tight break-keep', t.text)}>
          {card.title}
        </h3>
        <span
          className={cx(
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
                  className={cx('mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full', t.dot)}
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
