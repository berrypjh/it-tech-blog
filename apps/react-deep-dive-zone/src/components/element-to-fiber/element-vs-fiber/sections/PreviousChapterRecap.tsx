import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../element-jsx/_shared/SectionBadgeHeader';
import type { ElementVsFiberContent, RecapStep } from '../content';
import { ArrowDownIcon, BoxesIcon, CodeIcon, LightbulbIcon, RotateIcon, WandIcon } from '../icons';

type Props = { content: ElementVsFiberContent['recap'] };

const iconMap = {
  code: CodeIcon,
  wand: WandIcon,
  box: BoxesIcon,
} as const;

export const PreviousChapterRecap = ({ content }: Props) => (
  <section id="recap" aria-labelledby="heading-recap" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="recap"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<RotateIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <ol className="flex flex-col items-stretch gap-2 mx-auto max-w-[640px]">
        {content.steps.map((step, idx) => (
          <li key={step.id} className="flex flex-col">
            <StepPill step={step} />
            {idx < content.steps.length - 1 && (
              <span className="flex justify-center py-1" aria-hidden="true">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-sky-50 border border-sky-200/80 text-sky-600 dark:bg-sky-950/40 dark:border-sky-800/60 dark:text-sky-300">
                  <ArrowDownIcon className="h-3.5 w-3.5" />
                </span>
              </span>
            )}
          </li>
        ))}
      </ol>

      <div
        className={cn(
          'mt-md flex items-start gap-sm rounded-2xl border-2 p-md',
          'border-amber-300/80 bg-amber-50/70',
          'dark:border-amber-800/60 dark:bg-amber-950/30',
        )}
      >
        <span
          aria-hidden="true"
          className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-200 shrink-0"
        >
          <LightbulbIcon className="h-5 w-5" />
        </span>
        <p className="text-xsm sm:text-sm font-bold leading-snug text-amber-900 dark:text-amber-100 break-keep">
          {content.notice}
        </p>
      </div>
    </article>
  </section>
);

const StepPill = ({ step }: { step: RecapStep }) => {
  const Icon = iconMap[step.iconName];
  return (
    <article
      className={cn(
        'flex items-center gap-sm rounded-xl border p-sm min-h-[56px]',
        'border-sky-200/80 bg-sky-50/40',
        'dark:border-sky-800/60 dark:bg-sky-950/20',
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex items-center justify-center w-10 h-10 rounded-lg border shrink-0',
          'border-sky-300/80 bg-white text-sky-700',
          'dark:border-sky-700/60 dark:bg-sky-950/40 dark:text-sky-200',
        )}
      >
        <Icon className="h-5 w-5" />
      </span>
      <div className="flex flex-col gap-0.5 min-w-0">
        <code className="font-mono text-xsm font-bold tracking-tight text-sky-800 dark:text-sky-200 break-all">
          {step.title}
        </code>
        <span className="text-[11px] leading-relaxed text-[var(--term-muted)] break-keep">
          {step.subtitle}
        </span>
      </div>
    </article>
  );
};
