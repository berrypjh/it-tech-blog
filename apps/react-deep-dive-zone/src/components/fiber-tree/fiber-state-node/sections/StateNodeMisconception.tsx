import { cx } from '@berrypjh/react-ui';
import { AlertTriangle, CheckCircle2, XCircle } from 'lucide-react';

import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { FiberStateNodeContent } from '../content';

type Props = { content: FiberStateNodeContent['misconception'] };

export const StateNodeMisconception = ({ content }: Props) => (
  <section
    id="misconception"
    aria-labelledby="heading-misconception"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="misconception"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<AlertTriangle className="h-5 w-5" aria-hidden="true" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-md lg:gap-lg items-stretch">
      <article
        className={cx(
          'flex flex-col gap-sm rounded-3xl border-2 p-md sm:p-lg',
          'border-rose-300/80 bg-rose-50/60',
          'dark:border-rose-800/60 dark:bg-rose-950/30',
          'transition-all motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[0_4px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className={cx(
              'inline-flex items-center justify-center w-10 h-10 rounded-xl',
              'bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-200',
            )}
          >
            <XCircle className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="inline-flex items-center rounded-full border border-rose-300/80 bg-rose-100/80 dark:bg-rose-950/60 dark:border-rose-800/60 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-rose-800 dark:text-rose-200">
            {content.misLabel}
          </span>
        </header>
        <h3 className="text-md sm:text-lg font-bold leading-snug text-rose-900 dark:text-rose-100 break-keep">
          {content.misText.lines.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </h3>
        <p className="mt-auto text-xsm leading-relaxed text-rose-800/90 dark:text-rose-200/90 break-keep">
          {content.misDescription}
        </p>
      </article>

      <div className="flex lg:flex-col items-center justify-center gap-sm lg:px-2">
        <span
          aria-hidden="true"
          className={cx(
            'flex-1 lg:flex-none lg:h-12 h-px lg:w-px w-12 border-t-2 lg:border-t-0 lg:border-l-2 border-dashed',
            toneTokens.amber.fill.border,
          )}
        />
        <div className="flex flex-col items-center gap-1">
          <span
            aria-hidden="true"
            className={cx(
              'inline-flex items-center justify-center w-12 h-12 rounded-full',
              'border-2',
              toneTokens.amber.chip,
            )}
          >
            <AlertTriangle className="h-6 w-6" aria-hidden="true" />
          </span>
          <span
            className={cx(
              'text-[11px] font-mono font-bold uppercase tracking-wider break-keep text-center',
              toneTokens.amber.text,
            )}
          >
            {content.centerText}
          </span>
        </div>
        <span
          aria-hidden="true"
          className={cx(
            'flex-1 lg:flex-none lg:h-12 h-px lg:w-px w-12 border-t-2 lg:border-t-0 lg:border-l-2 border-dashed',
            toneTokens.emerald.fill.border,
          )}
        />
      </div>

      <article
        className={cx(
          'flex flex-col gap-sm rounded-3xl border-2 p-md sm:p-lg',
          toneTokens.emerald.fill.border,
          toneTokens.emerald.fill.bg,
          'transition-all motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[0_4px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className={cx(
              'inline-flex items-center justify-center w-10 h-10 rounded-xl',
              toneTokens.emerald.chip,
            )}
          >
            <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
          </span>
          <span
            className={cx(
              'inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider',
              toneTokens.emerald.chip,
            )}
          >
            {content.correctLabel}
          </span>
        </header>
        <h3
          className={cx(
            'text-md sm:text-lg font-bold leading-snug break-keep',
            toneTokens.emerald.fill.text,
          )}
        >
          {content.correctText.lines.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </h3>
        <p className={cx('mt-auto text-xsm leading-relaxed break-keep', toneTokens.emerald.text)}>
          {content.correctDescription}
        </p>
      </article>
    </div>
  </section>
);
