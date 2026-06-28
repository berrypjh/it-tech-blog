import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { KeyFiberReuseContent } from '../content';
import { FingerprintIcon } from '../icons';

type Props = { content: KeyFiberReuseContent['tracking'] };

const sky = toneTokens.sky;

export const KeyTrackingPrinciple = ({ content }: Props) => (
  <section id="tracking" aria-labelledby="heading-tracking" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="tracking"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<FingerprintIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'rounded-3xl border p-md sm:p-lg lg:p-xl text-center',
        'border-[var(--term-border)] bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <div className="flex flex-col items-center gap-md mx-auto max-w-[640px]">
        <p className="text-md sm:text-lg lg:text-xl font-extrabold leading-snug break-keep text-[var(--term-fg)]">
          {content.mainMessage}
        </p>
        <ul className="flex flex-wrap gap-2 justify-center pt-1">
          {content.pills.map((pill) => (
            <li key={pill}>
              <span
                className={cn(
                  'inline-flex items-center rounded-full border px-3 py-1',
                  'text-[11px] font-mono font-bold tracking-tight',
                  sky.chip,
                )}
              >
                {pill}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  </section>
);
