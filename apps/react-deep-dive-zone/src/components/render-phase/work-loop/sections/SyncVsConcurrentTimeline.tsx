import { cx } from '@berrypjh/react-ui';
import { ArrowRight, Flag, PauseCircle, Sparkles } from 'lucide-react';

import { SectionBadgeHeader } from '../../../shared/section';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { TimelineCard, TimelineNode, WorkLoopContent } from '../content';

type Props = { content: WorkLoopContent['timelines'] };

export const SyncVsConcurrentTimeline = ({ content }: Props) => (
  <section
    id="push-vs-yield"
    aria-labelledby="heading-push-vs-yield"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      descriptionFullWidth
      id="push-vs-yield"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Sparkles className="h-5 w-5" aria-hidden="true" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-md lg:gap-lg">
      <Timeline card={content.cards.left} />
      <Timeline card={content.cards.right} />
    </div>
  </section>
);

const Timeline = ({ card }: { card: TimelineCard }) => {
  const tone: ToneKey = card.kind === 'sync' ? 'sky' : 'teal';
  const t = toneTokens[tone];
  return (
    <article
      className={cx(
        'flex h-full flex-col gap-md rounded-lg border p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]',
        t.border,
      )}
    >
      <header>
        <h3 className={cx('text-md sm:text-lg font-bold leading-tight break-keep', t.text)}>
          {card.title}
        </h3>
      </header>

      <ol className="flex flex-wrap items-stretch gap-2">
        {card.flow.map((node, idx) => (
          <li key={`${node.caption}-${idx}`} className="flex items-stretch gap-2 min-w-0">
            <div className="flex flex-col items-center min-w-0">
              <TimelineNodeBox node={node} tone={tone} />
              <span
                className={cx(
                  'mt-1 text-xxsm sm:text-xsm leading-snug text-center break-keep max-w-[88px]',
                  node.yield ? cx(toneTokens.amber.text, 'font-bold') : 'text-[var(--term-muted)]',
                )}
              >
                {node.caption}
              </span>
            </div>
            {idx < card.flow.length - 1 && (
              <span
                aria-hidden="true"
                className="flex shrink-0 items-center justify-center pt-4 sm:pt-5 text-[var(--term-accent)]"
              >
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </span>
            )}
          </li>
        ))}
      </ol>

      <footer
        className={cx('mt-auto flex items-start gap-sm rounded-lg border p-sm sm:p-md', t.border)}
      >
        <span
          aria-hidden="true"
          className={cx(
            'mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md border',
            t.chip,
          )}
        >
          <Sparkles className="h-4 w-4" aria-hidden="true" />
        </span>
        <p className={cx('text-xsm sm:text-sm leading-snug font-bold break-keep', t.text)}>
          {card.footer}
        </p>
      </footer>
    </article>
  );
};

const TimelineNodeBox = ({ node, tone }: { node: TimelineNode; tone: ToneKey }) => {
  const nodeTone: ToneKey = node.yield ? 'amber' : node.finish ? 'emerald' : tone;
  const t = toneTokens[nodeTone];
  return (
    <span
      className={cx(
        'inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full border shadow-[0_1px_0_var(--term-border)]',
        node.yield && 'border-dashed',
        t.fill.bg,
        t.fill.border,
        t.fill.text,
      )}
    >
      {node.yield && <PauseCircle className="h-5 w-5" aria-hidden="true" />}
      {node.finish && <Flag className="h-5 w-5" aria-hidden="true" />}
      {node.label && (
        <span className="text-md sm:text-lg font-bold leading-none">{node.label}</span>
      )}
    </span>
  );
};
