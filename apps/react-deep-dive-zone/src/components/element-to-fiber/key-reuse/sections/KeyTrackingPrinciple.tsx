import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import type { KeyFiberReuseContent } from '../content';
import { FingerprintIcon, SparklesIcon } from '../icons';

type Props = { content: KeyFiberReuseContent['tracking'] };

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
        'rounded-3xl border-2 p-md sm:p-lg lg:p-xl text-center',
        'bg-gradient-to-br from-sky-50 via-white to-sky-50/40',
        'dark:from-sky-950/30 dark:via-[var(--term-bg)] dark:to-sky-950/15',
        'border-sky-300/70 dark:border-sky-700/70',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <div className="flex flex-col items-center gap-md mx-auto max-w-[640px]">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-14 h-14 rounded-2xl',
            'bg-sky-600 text-white dark:bg-sky-500 dark:text-slate-950',
            'shadow-[0_10px_28px_-12px_rgba(2,132,199,0.55)]',
          )}
        >
          <SparklesIcon className="h-6 w-6" />
        </span>
        <p className="text-md sm:text-lg lg:text-xl font-extrabold leading-snug text-sky-900 dark:text-sky-100 break-keep">
          삽입, 삭제, 재정렬이 일어나도{' '}
          <code className="font-mono text-sky-700 dark:text-sky-300">key</code>가 있으면 각 항목을
          안정적으로 추적하기 쉬워진다.
        </p>
        <ul className="flex flex-wrap gap-2 justify-center pt-1">
          {content.pills.map((pill) => (
            <li key={pill}>
              <span
                className={cn(
                  'inline-flex items-center rounded-full border px-3 py-1',
                  'text-[11px] font-mono font-bold tracking-tight',
                  'border-sky-200/80 bg-white text-sky-700',
                  'dark:border-sky-700/60 dark:bg-[var(--term-bg)] dark:text-sky-200',
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
