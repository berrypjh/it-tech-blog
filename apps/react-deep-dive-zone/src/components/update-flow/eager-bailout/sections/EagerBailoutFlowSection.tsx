import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import { toneTokens } from '../../../shared/tones';
import type { BailoutStep, BailoutStepIconName, EagerBailoutContent } from '../content';
import {
  ArrowRightIcon,
  BanIcon,
  CheckCircleIcon,
  CircleDotDashedIcon,
  ScaleIcon,
  SettingsIcon,
  ZapIcon,
} from '../icons';

type Props = { content: EagerBailoutContent['flow'] };

const iconMap: Record<BailoutStepIconName, typeof CircleDotDashedIcon> = {
  circleDotDashed: CircleDotDashedIcon,
  settings: SettingsIcon,
  scale: ScaleIcon,
  checkCircle: CheckCircleIcon,
  ban: BanIcon,
};

export const EagerBailoutFlowSection = ({ content }: Props) => (
  <section id="flow" aria-labelledby="heading-flow" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="flow"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<ZapIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'rounded-3xl border p-md sm:p-lg',
        'border-[var(--term-border)] bg-gradient-to-br from-white via-sky-50/20 to-emerald-50/20',
        'dark:from-[var(--term-bg)] dark:via-sky-950/15 dark:to-emerald-950/15',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <header className="mb-md flex flex-wrap items-center justify-between gap-2">
        <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
          {'// queue empty · compute · compare · bail · skip'}
        </span>
        <span className="text-[10px] font-mono uppercase tracking-wider text-sky-700/80 dark:text-sky-300/80 rounded-md border border-sky-200/70 dark:border-sky-800/60 px-2 py-0.5">
          5-step happy path
        </span>
      </header>

      <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr] gap-md lg:gap-2 items-stretch">
        {content.steps.map((step, idx) => (
          <li key={step.number} className="contents">
            <StepCard step={step} />
            {idx < content.steps.length - 1 && <Arrow />}
          </li>
        ))}
      </ol>
    </article>
  </section>
);

const StepCard = ({ step }: { step: BailoutStep }) => {
  const Icon = iconMap[step.iconName];
  const t = toneTokens[step.tone];
  return (
    <article
      className={cn(
        'flex flex-col gap-2 rounded-2xl bg-[var(--term-bg)] p-md text-center',
        step.emphasized ? 'border-2' : 'border',
        t.border,
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-6 min-w-[1.5rem] items-center justify-center rounded-full px-1.5',
            'text-[10px] font-mono font-bold tabular-nums',
            t.chip,
          )}
        >
          {step.number}
        </span>
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-9 w-9 items-center justify-center rounded-xl border',
            t.chip,
          )}
        >
          <Icon className="h-4 w-4" />
        </span>
      </header>
      <h3 className={cn('text-xsm sm:text-sm font-bold leading-tight break-keep', t.text)}>
        {step.title}
      </h3>
      <p
        className={cn(
          'rounded-md border px-2 py-1 font-mono text-[10px] leading-snug break-keep',
          t.chip,
        )}
      >
        {step.detail}
      </p>
    </article>
  );
};

const Arrow = () => (
  <div
    aria-hidden="true"
    className="hidden lg:flex items-center justify-center text-[var(--term-dim)]"
  >
    <span
      className={cn(
        'inline-flex h-7 w-7 items-center justify-center rounded-full border',
        'border-sky-200/80 bg-sky-50 text-sky-700',
        'dark:border-sky-800/60 dark:bg-sky-950/40 dark:text-sky-300',
      )}
    >
      <ArrowRightIcon className="h-3.5 w-3.5" />
    </span>
  </div>
);
