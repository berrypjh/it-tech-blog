import { cn } from '@it-tech-blog/utils';

import { StepSectionHeader } from '../components/StepSectionHeader';
import type { UsageVsInternalsContent } from '../content';
import { flowIconByName } from '../icons';

type Props = { content: UsageVsInternalsContent['flow'] };

const stepTones = ['sky', 'blue', 'indigo', 'cyan', 'teal', 'emerald'] as const;
type StepTone = (typeof stepTones)[number];

const stepToneClasses: Record<StepTone, { chip: string; border: string; iconText: string }> = {
  sky: {
    chip: 'bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/70',
    border: 'border-sky-200/70 dark:border-sky-800/60',
    iconText: 'text-sky-600 dark:text-sky-300',
  },
  blue: {
    chip: 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/60 dark:text-blue-200 dark:border-blue-800/70',
    border: 'border-blue-200/70 dark:border-blue-800/60',
    iconText: 'text-blue-600 dark:text-blue-300',
  },
  indigo: {
    chip: 'bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950/60 dark:text-indigo-200 dark:border-indigo-800/70',
    border: 'border-indigo-200/70 dark:border-indigo-800/60',
    iconText: 'text-indigo-600 dark:text-indigo-300',
  },
  cyan: {
    chip: 'bg-cyan-50 text-cyan-700 border-cyan-200 dark:bg-cyan-950/60 dark:text-cyan-200 dark:border-cyan-800/70',
    border: 'border-cyan-200/70 dark:border-cyan-800/60',
    iconText: 'text-cyan-600 dark:text-cyan-300',
  },
  teal: {
    chip: 'bg-teal-50 text-teal-700 border-teal-200 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/70',
    border: 'border-teal-200/70 dark:border-teal-800/60',
    iconText: 'text-teal-600 dark:text-teal-300',
  },
  emerald: {
    chip: 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-200 dark:border-emerald-800/70',
    border: 'border-emerald-200/70 dark:border-emerald-800/60',
    iconText: 'text-emerald-600 dark:text-emerald-300',
  },
};

export const CounterUpdateFlow = ({ content }: Props) => {
  return (
    <section id="section-flow" aria-labelledby="heading-flow" className="space-y-lg">
      <StepSectionHeader id="flow" num={content.sectionNum} title={content.title} />

      <ol className="relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
        {content.steps.map((step, idx) => {
          const tone = stepTones[idx] ?? 'sky';
          const t = stepToneClasses[tone];
          const Icon = flowIconByName[step.icon];
          const isLast = idx === content.steps.length - 1;
          return (
            <li key={step.id} className="relative flex flex-col">
              <article
                className={cn(
                  'group flex flex-col items-start gap-sm h-full',
                  'rounded-lg border bg-[var(--term-bg)] p-sm sm:p-md',
                  'transition-all hover:-translate-y-0.5 hover:shadow-[0_2px_0_var(--term-border)]',
                  t.border,
                )}
              >
                <div className="flex items-center justify-between w-full">
                  <span
                    className={cn(
                      'inline-flex items-center justify-center w-10 h-10 rounded-md border',
                      t.chip,
                    )}
                    aria-hidden="true"
                  >
                    <Icon className={cn('h-5 w-5', t.iconText)} />
                  </span>
                  <span className="text-[10px] tabular-nums text-[var(--term-dim)] font-bold">
                    {step.num.padStart(2, '0')}
                  </span>
                </div>

                <h3 className="text-xsm sm:text-sm font-bold text-[var(--term-fg)] leading-tight break-keep">
                  {step.title}
                </h3>

                <p className="text-[11px] sm:text-xsm text-[var(--term-muted)] leading-relaxed break-keep">
                  {formatInline(step.hint)}
                </p>
              </article>

              {/* 카드 사이 화살표 — sm 이상에서만 노출 */}
              {!isLast && (
                <span
                  aria-hidden="true"
                  className="hidden lg:flex absolute top-1/2 -right-2 -translate-y-1/2 text-[var(--term-dim)] text-xsm z-10"
                >
                  →
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </section>
  );
};

const formatInline = (text: string): React.ReactNode => {
  const parts = text.split(/(`[^`]+`)/g);
  return parts.map((part, i) => {
    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code
          key={i}
          className="px-1 py-0.5 rounded border border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-accent)] text-[0.9em] font-mono"
        >
          {part.slice(1, -1)}
        </code>
      );
    }
    return <span key={i}>{part}</span>;
  });
};
