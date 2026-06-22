import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type {
  EnqueueConcurrentHookUpdateContent,
  EnqueueMeaningStep,
  EnqueueMeaningStepIconName,
} from '../content';
import {
  ArrowRightIcon,
  DatabaseIcon,
  FileTextIcon,
  FlagIcon,
  LightbulbIcon,
  SettingsIcon,
  SquareDashedIcon,
} from '../icons';

type Props = { content: EnqueueConcurrentHookUpdateContent['meaning'] };

const iconMap: Record<EnqueueMeaningStepIconName, typeof SquareDashedIcon> = {
  squareDashed: SquareDashedIcon,
  database: DatabaseIcon,
  fileText: FileTextIcon,
  flag: FlagIcon,
  settings: SettingsIcon,
};

export const EnqueueUpdateMeaningSection = ({ content }: Props) => (
  <section id="meaning" aria-labelledby="heading-meaning" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="meaning"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<SettingsIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_minmax(0,_1.35fr)] gap-md lg:gap-lg items-stretch">
      {/* Left description */}
      <article
        className={cn(
          'flex flex-col gap-md rounded-3xl border-2 p-md sm:p-lg',
          'border-sky-200/80 dark:border-sky-800/70',
          'bg-gradient-to-br from-white via-sky-50/40 to-cyan-50/30',
          'dark:from-[var(--term-bg)] dark:via-sky-950/25 dark:to-cyan-950/20',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center gap-sm">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex h-10 w-10 items-center justify-center rounded-2xl',
              'bg-amber-100 text-amber-700 border border-amber-200/80',
              'dark:bg-amber-950/60 dark:text-amber-200 dark:border-amber-800/60',
            )}
          >
            <LightbulbIcon className="h-5 w-5" />
          </span>
          <span className="text-[10px] uppercase tracking-wider font-mono text-sky-700/80 dark:text-sky-300/80">
            common chokepoint
          </span>
        </header>
        <h3 className="text-md sm:text-lg font-bold text-sky-900 dark:text-sky-100 break-keep leading-snug">
          {content.descriptionTitle}
        </h3>
        <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep">
          {content.descriptionBody}
        </p>
        <ul className="mt-auto flex flex-wrap gap-1.5 pt-1">
          <li className="rounded-md border border-sky-300/70 bg-white/70 px-2 py-0.5 text-[10px] font-mono text-sky-700 dark:border-sky-700/60 dark:bg-slate-950/40 dark:text-sky-200">
            Hook
          </li>
          <li className="rounded-md border border-violet-300/70 bg-white/70 px-2 py-0.5 text-[10px] font-mono text-violet-700 dark:border-violet-700/60 dark:bg-slate-950/40 dark:text-violet-200">
            Class
          </li>
          <li className="rounded-md border border-emerald-300/70 bg-white/70 px-2 py-0.5 text-[10px] font-mono text-emerald-700 dark:border-emerald-700/60 dark:bg-slate-950/40 dark:text-emerald-200">
            shared path
          </li>
        </ul>
      </article>

      {/* Right horizontal flow */}
      <article
        className={cn(
          'flex flex-col gap-md rounded-3xl border p-md sm:p-lg',
          'border-[var(--term-border)] bg-gradient-to-br from-white via-sky-50/15 to-emerald-50/20',
          'dark:from-[var(--term-bg)] dark:via-sky-950/10 dark:to-emerald-950/15',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center justify-between gap-sm">
          <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
            {'// fiber → queue → update → lane → handler'}
          </span>
          <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-700/80 dark:text-emerald-300/80 rounded-md border border-emerald-200/70 dark:border-emerald-800/60 px-2 py-0.5">
            concurrent path
          </span>
        </header>

        <ol className="flex flex-wrap items-center justify-center gap-2 sm:gap-1.5">
          {content.flow.map((step, idx) => (
            <li key={step.label} className="flex items-center gap-2 sm:gap-1.5">
              <SmallChip step={step} />
              {idx < content.flow.length - 1 && (
                <ArrowRightIcon aria-hidden="true" className="h-3.5 w-3.5 text-[var(--term-dim)]" />
              )}
            </li>
          ))}
          <li className="flex items-center gap-2 sm:gap-1.5">
            <ArrowRightIcon aria-hidden="true" className="h-3.5 w-3.5 text-[var(--term-dim)]" />
            <FinalCard label={content.finalLabel} body={content.finalBody} />
          </li>
        </ol>
      </article>
    </div>
  </section>
);

const SmallChip = ({ step }: { step: EnqueueMeaningStep }) => {
  const Icon = iconMap[step.iconName];
  const t = toneTokens[step.tone];
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-xl border px-2.5 py-1.5 font-mono',
        t.chip,
      )}
    >
      <Icon aria-hidden="true" className="h-3.5 w-3.5" />
      <span className={cn('text-xsm font-bold', t.text)}>{step.label}</span>
    </span>
  );
};

const FinalCard = ({ label, body }: { label: string; body: string }) => (
  <span
    className={cn(
      'inline-flex flex-col items-center gap-0.5 rounded-2xl border-2 px-3 py-2 max-w-[18ch]',
      'border-emerald-300/80 bg-emerald-50/80 text-emerald-900',
      'dark:border-emerald-700/70 dark:bg-emerald-950/40 dark:text-emerald-100',
    )}
  >
    <span className="text-xsm sm:text-sm font-bold font-mono leading-tight text-center break-keep">
      {label}
    </span>
    <span className="text-[10px] text-emerald-900/85 dark:text-emerald-100/85 leading-snug text-center break-keep">
      {body}
    </span>
  </span>
);
