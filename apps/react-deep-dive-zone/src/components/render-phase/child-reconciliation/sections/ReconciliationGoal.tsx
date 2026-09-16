import { cx } from '@berrypjh/react-ui';
import { CheckCircle2, ListChecks } from 'lucide-react';

import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { ReconcileChildrenContent } from '../content';

type Props = { content: ReconcileChildrenContent['goal'] };

export const ReconciliationGoal = ({ content }: Props) => (
  <section id="goal" aria-labelledby="heading-goal" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="goal"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<ListChecks className="h-5 w-5" aria-hidden="true" />}
    />

    <article
      className={cx(
        'rounded-lg border p-md sm:p-lg bg-[var(--term-bg)]',
        toneTokens.sky.border,
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-md">
        {content.items.map((item, idx) => (
          <li
            key={item}
            className={cx(
              'flex items-start gap-3 rounded-lg border bg-[var(--term-bg)] p-md',
              toneTokens.sky.border,
              'transition-all hover:-translate-y-0.5 motion-reduce:transform-none',
            )}
          >
            <span
              aria-hidden="true"
              className={cx(
                'mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border',
                toneTokens.teal.chip,
              )}
            >
              <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
            </span>
            <div className="flex flex-col gap-0.5 min-w-0">
              <span
                className={cx('text-xxsm font-mono uppercase tracking-wider', toneTokens.sky.text)}
              >
                {content.itemLabel} {idx + 1}
              </span>
              <p className="text-xsm sm:text-sm leading-snug text-[var(--term-fg)] font-bold break-keep">
                {item}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </article>
  </section>
);
