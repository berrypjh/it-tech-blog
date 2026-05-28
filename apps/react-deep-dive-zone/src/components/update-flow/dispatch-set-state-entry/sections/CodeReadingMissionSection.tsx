import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import { toneTokens } from '../../../shared/tones';
import type { DispatchSetStateEntryContent, MissionIconName, MissionStep } from '../content';
import { ArrowRightIcon, FileTextIcon, FlagIcon, Link2Icon, SearchIcon } from '../icons';

type Props = { content: DispatchSetStateEntryContent['mission'] };

const iconMap: Record<MissionIconName, typeof FileTextIcon> = {
  fileText: FileTextIcon,
  search: SearchIcon,
  flag: FlagIcon,
  link: Link2Icon,
};

export const CodeReadingMissionSection = ({ content }: Props) => (
  <section id="mission" aria-labelledby="heading-mission" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="mission"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<SearchIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'rounded-3xl border p-md sm:p-lg',
        'border-[var(--term-border)] bg-gradient-to-br from-white via-sky-50/40 to-violet-50/40',
        'dark:from-[var(--term-bg)] dark:via-sky-950/20 dark:to-violet-950/20',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <header className="mb-md flex flex-wrap items-center justify-between gap-2">
        <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
          {'// open · find · check · trace'}
        </span>
        <span className="text-[10px] font-mono uppercase tracking-wider text-sky-700/80 dark:text-sky-300/80 rounded-md border border-sky-200/70 dark:border-sky-800/60 px-2 py-0.5">
          code exploration route
        </span>
      </header>

      <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] gap-md lg:gap-2 items-stretch">
        {content.steps.map((step, idx) => (
          <li key={step.number} className="contents">
            <Step step={step} />
            {idx < content.steps.length - 1 && <StepArrow />}
          </li>
        ))}
      </ol>
    </article>
  </section>
);

const Step = ({ step }: { step: MissionStep }) => {
  const Icon = iconMap[step.iconName];
  const t = toneTokens[step.tone];
  return (
    <div
      className={cn(
        'flex flex-col gap-2 rounded-2xl border-2 bg-[var(--term-bg)] p-md',
        t.border,
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-7 min-w-[1.75rem] items-center justify-center rounded-full px-1.5',
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
      <p className={cn('text-xsm sm:text-sm font-bold leading-snug break-keep', t.text)}>
        {step.body}
      </p>
    </div>
  );
};

const StepArrow = () => (
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
