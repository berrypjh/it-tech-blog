import { cn } from '@it-tech-blog/utils';

import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { FlowStep } from '../content';
import { ArrowDownIcon } from '../icons';

type Props = {
  tone: ToneKey;
  steps: FlowStep[];
};

export const FlowSteps = ({ tone, steps }: Props) => {
  const t = toneTokens[tone];
  return (
    <ol className="flex flex-col gap-1">
      {steps.map((step, idx) => (
        <li key={step.id} className="flex flex-col">
          <article
            className={cn('flex items-center gap-sm rounded-xl border-2 p-md', t.border, t.fill.bg)}
          >
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex items-center justify-center w-9 h-9 rounded-full shrink-0',
                'font-mono text-sm font-bold tabular-nums border',
                t.chip,
              )}
            >
              {idx + 1}
            </span>
            <div className="flex flex-col gap-0.5 min-w-0">
              <code
                className={cn('font-mono text-xsm sm:text-sm font-extrabold break-all', t.text)}
              >
                {step.text}
              </code>
              {step.subtext && (
                <code className="font-mono text-[11px] text-[var(--term-muted)] font-bold">
                  {step.subtext}
                </code>
              )}
            </div>
          </article>
          {idx < steps.length - 1 && (
            <div className="flex items-center justify-center py-1" aria-hidden="true">
              <span
                className={cn(
                  'inline-flex items-center justify-center w-7 h-7 rounded-full border',
                  t.chip,
                )}
              >
                <ArrowDownIcon className="h-3.5 w-3.5" />
              </span>
            </div>
          )}
        </li>
      ))}
    </ol>
  );
};
