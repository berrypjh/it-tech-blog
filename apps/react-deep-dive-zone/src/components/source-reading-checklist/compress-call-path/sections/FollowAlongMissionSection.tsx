import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import type { CallPathCompressionContent } from '../content';
import { ClipboardCheckIcon } from '../icons';

type Props = { content: CallPathCompressionContent['mission'] };

export const FollowAlongMissionSection = ({ content }: Props) => {
  return (
    <section id="section-mission" aria-labelledby="heading-mission" className="space-y-lg">
      <SectionHeader
        id="mission"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.intro}
        icon={<ClipboardCheckIcon className="h-5 w-5" />}
      />

      <article
        className={cn(
          'rounded-2xl border-2 p-md sm:p-lg lg:p-xl',
          'border-emerald-200 bg-emerald-50/40',
          'dark:border-emerald-800/60 dark:bg-emerald-950/20',
          'shadow-[0_3px_0_var(--term-border)]',
        )}
      >
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
          {content.items.map((item, i) => (
            <li
              key={item}
              className={cn(
                'flex items-start gap-3 rounded-xl border-2 p-3 sm:p-md',
                'border-emerald-200 bg-white',
                'dark:border-emerald-800/60 dark:bg-[var(--term-bg)]',
                'transition-all motion-safe:hover:border-emerald-400',
                'dark:motion-safe:hover:border-emerald-500/80',
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  'mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md border-2',
                  'border-emerald-300 bg-white text-emerald-700',
                  'dark:border-emerald-700/70 dark:bg-[var(--term-bg)] dark:text-emerald-200',
                )}
              >
                <span className="text-[10px] font-mono font-bold tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </span>
              <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-keep">
                {item}
              </p>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};
