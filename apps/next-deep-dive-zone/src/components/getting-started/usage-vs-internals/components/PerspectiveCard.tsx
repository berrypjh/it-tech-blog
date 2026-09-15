import { cx } from '@berrypjh/react-ui';
import { CheckCircle2, type LucideIcon } from 'lucide-react';

import { toneTokens } from '../../../shared/tones';
import type { ToneKey } from '../content';

type Props = {
  tone: ToneKey;
  icon: LucideIcon;
  title: string;
  description: string;
  questions: string[];
  pill: string;
  variant: 'usage' | 'internals';
};

export const PerspectiveCard = ({
  tone,
  icon: Icon,
  title,
  description,
  questions,
  pill,
  variant,
}: Props) => {
  const t = toneTokens[tone];
  return (
    <article
      className={cx(
        'flex h-full flex-col gap-md rounded-lg border bg-[var(--term-bg)] p-md sm:p-lg transition-all',
        'motion-safe:hover:-translate-y-0.5 hover:shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)]',
      )}
    >
      <div className="flex items-center gap-sm">
        <span
          className={cx(
            'inline-flex h-10 w-10 items-center justify-center rounded-md border',
            t.chip,
          )}
          aria-hidden="true"
        >
          <Icon className="h-5 w-5" />
        </span>
        <h2 className={cx('text-md sm:text-lg font-bold tracking-tight', t.text)}>{title}</h2>
      </div>

      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">{description}</p>

      <ul className="flex flex-col gap-1.5">
        {questions.map((q) => (
          <li key={q} className="flex items-start gap-sm">
            {variant === 'usage' ? (
              <span
                aria-hidden="true"
                className={cx(
                  'mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full',
                  t.chip,
                )}
              >
                <CheckCircle2 className="h-3 w-3" />
              </span>
            ) : (
              <code
                aria-hidden="true"
                className={cx('mt-0.5 shrink-0 font-mono text-xsm font-bold leading-none', t.text)}
              >
                →
              </code>
            )}
            <span className="text-xsm leading-snug text-[var(--term-fg)] break-keep">{q}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-sm border-t border-dashed border-[var(--term-border)]">
        <span
          className={cx(
            'inline-flex items-center gap-1.5 rounded-full border px-2 py-1 text-[10px] font-bold',
            t.chip,
          )}
        >
          <span aria-hidden="true" className={cx('inline-block h-1.5 w-1.5 rounded-full', t.dot)} />
          {pill}
        </span>
      </div>
    </article>
  );
};
