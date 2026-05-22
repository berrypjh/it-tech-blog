import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../element-jsx/_shared/SectionBadgeHeader';
import type { FlowStep, FunctionClassComponentFiberContent } from '../content';
import { ArrowDownIcon, ArrowRightIcon, HelpCircleIcon, LightbulbIcon, SplitIcon } from '../icons';

type Props = { content: FunctionClassComponentFiberContent['shouldConstruct'] };

export const ShouldConstructExplanation = ({ content }: Props) => (
  <section
    id="should-construct"
    aria-labelledby="heading-should-construct"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="should-construct"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<SplitIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_minmax(0,_1.15fr)] gap-md items-stretch">
      {/* Left: description + emphasis */}
      <div className="flex flex-col gap-md">
        <article
          className={cn(
            'rounded-2xl border bg-[var(--term-bg)] p-md sm:p-lg',
            'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <p className="text-sm sm:text-md leading-relaxed text-[var(--term-fg)] break-keep">
            React는{' '}
            <code className="font-mono font-bold text-sky-700 dark:text-sky-300">
              Component.prototype.isReactComponent
            </code>{' '}
            존재 여부를 바탕으로 클래스 컴포넌트인지 판단합니다.
          </p>
        </article>

        <article
          className={cn(
            'flex items-start gap-sm rounded-2xl border-2 p-md sm:p-lg',
            'border-amber-300/70 bg-amber-50/70',
            'dark:border-amber-700/70 dark:bg-amber-950/30',
          )}
        >
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex items-center justify-center w-12 h-12 rounded-2xl shrink-0',
              'bg-amber-500 text-white dark:bg-amber-400 dark:text-slate-950',
              'shadow-[0_8px_22px_-8px_rgba(217,119,6,0.55)]',
            )}
          >
            <LightbulbIcon className="h-6 w-6" />
          </span>
          <p className="text-sm sm:text-md font-bold leading-snug text-amber-900 dark:text-amber-100 break-keep">
            {content.emphasis}
          </p>
        </article>
      </div>

      {/* Right: flow chart */}
      <article
        className={cn(
          'rounded-2xl border bg-[var(--term-bg)] p-md sm:p-lg',
          'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
          'flex flex-col gap-sm',
        )}
      >
        <span className="text-[10px] uppercase tracking-wider font-mono font-bold text-[var(--term-muted)]">
          decision flow
        </span>

        <ol className="flex flex-col gap-1">
          {content.flow.map((step, idx) => (
            <li key={step.id} className="flex flex-col gap-1">
              <FlowQuestion prompt={step.prompt} />
              <BranchOutputs step={step} />
              {idx < content.flow.length - 1 && (
                <div className="flex justify-center py-1" aria-hidden="true">
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-sky-100 text-sky-700 dark:bg-sky-950/60 dark:text-sky-200 border border-sky-200/80 dark:border-sky-700/60">
                    <ArrowDownIcon className="h-3.5 w-3.5" />
                  </span>
                </div>
              )}
            </li>
          ))}
        </ol>
      </article>
    </div>
  </section>
);

const FlowQuestion = ({ prompt }: { prompt: string }) => (
  <div
    className={cn(
      'flex items-center gap-sm rounded-xl border-2 px-md py-3',
      'border-sky-300/80 bg-sky-50/60',
      'dark:border-sky-700/70 dark:bg-sky-950/30',
    )}
  >
    <span
      aria-hidden="true"
      className={cn(
        'inline-flex items-center justify-center w-8 h-8 rounded-full shrink-0',
        'bg-sky-600 text-white dark:bg-sky-500 dark:text-slate-950',
      )}
    >
      <HelpCircleIcon className="h-4 w-4" />
    </span>
    <code className="font-mono text-xsm sm:text-sm font-bold text-sky-900 dark:text-sky-100 break-keep">
      {prompt}
    </code>
  </div>
);

const toneTokens = {
  green: {
    border: 'border-emerald-300/80 dark:border-emerald-700/70',
    chip: 'bg-emerald-100 text-emerald-800 border-emerald-300/80 dark:bg-emerald-950/60 dark:text-emerald-200 dark:border-emerald-700/70',
    text: 'text-emerald-700 dark:text-emerald-300',
    dot: 'bg-emerald-500 dark:bg-emerald-400',
  },
  purple: {
    border: 'border-violet-300/80 dark:border-violet-700/70',
    chip: 'bg-violet-100 text-violet-800 border-violet-300/80 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-700/70',
    text: 'text-violet-700 dark:text-violet-300',
    dot: 'bg-violet-500 dark:bg-violet-400',
  },
} as const;

const BranchOutputs = ({ step }: { step: FlowStep }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-md">
    {step.yes && <BranchRow {...step.yes} />}
    {step.no && <BranchRow {...step.no} />}
  </div>
);

const BranchRow = ({
  label,
  result,
  tone,
}: {
  label: string;
  result: string;
  tone: 'green' | 'purple';
}) => {
  const t = toneTokens[tone];
  return (
    <div
      className={cn(
        'flex items-center gap-2 rounded-lg border px-sm py-2',
        t.border,
        'bg-[var(--term-bg)]',
      )}
    >
      <span
        className={cn(
          'inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider font-mono shrink-0',
          t.chip,
        )}
      >
        {label}
      </span>
      <ArrowRightIcon
        className="h-3.5 w-3.5 text-[var(--term-muted)] shrink-0"
        aria-hidden="true"
      />
      <code className={cn('font-mono text-xsm font-bold tracking-tight break-all', t.text)}>
        {result}
      </code>
    </div>
  );
};
