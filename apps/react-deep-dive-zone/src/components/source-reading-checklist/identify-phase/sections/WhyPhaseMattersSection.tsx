import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import type { PhaseDetectionContent } from '../content';
import {
  CalendarClockIcon,
  HelpCircleIcon,
  MonitorIcon,
  ScanSearchIcon,
  TargetIcon,
  WorkflowIcon,
} from '../icons';
import { getPhaseClasses, PhaseBadge } from '../PhaseBadge';
import type { PhaseKey } from '../phaseTone';

type Props = { content: PhaseDetectionContent['whyPhase'] };

const cardIcon: Record<PhaseKey, React.ComponentType<{ className?: string }>> = {
  scheduling: CalendarClockIcon,
  render: WorkflowIcon,
  commit: MonitorIcon,
};

export const WhyPhaseMattersSection = ({ content }: Props) => {
  return (
    <section id="section-why-phase" aria-labelledby="heading-why-phase" className="space-y-lg">
      <SectionHeader
        id="why-phase"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.intro}
        icon={<ScanSearchIcon className="h-5 w-5" />}
      />

      <ul className="grid grid-cols-1 lg:grid-cols-3 gap-md">
        {content.cards.map((card) => {
          const t = getPhaseClasses(card.phase);
          const Icon = cardIcon[card.phase];
          return (
            <li key={card.phase}>
              <article
                className={cn(
                  'group flex h-full flex-col gap-md rounded-2xl border-2 p-md',
                  'bg-white dark:bg-[var(--term-bg)]',
                  t.border,
                  'shadow-[0_2px_0_var(--term-border)]',
                  'transition-all motion-safe:hover:-translate-y-0.5',
                  t.borderHover,
                )}
              >
                <header className="flex items-center justify-between gap-2">
                  <PhaseBadge phase={card.phase} size="md" strong />
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-flex h-9 w-9 items-center justify-center rounded-lg border',
                      t.chip,
                    )}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                </header>

                <h3 className={cn('text-md sm:text-lg font-bold leading-snug break-keep', t.text)}>
                  {card.title}
                </h3>

                <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                  {card.body}
                </p>

                <div
                  className={cn(
                    'mt-auto flex items-start gap-2 rounded-md border-2 p-3',
                    t.border,
                    t.chip,
                  )}
                >
                  <HelpCircleIcon
                    className={cn('mt-0.5 h-4 w-4 shrink-0', t.text)}
                    aria-hidden="true"
                  />
                  <div className="flex flex-col">
                    <span className={cn('text-[10px] font-mono uppercase tracking-wider', t.text)}>
                      {content.questionLabel}
                    </span>
                    <p className={cn('text-xsm font-bold leading-snug break-keep', t.text)}>
                      {card.representativeQuestion}
                    </p>
                  </div>
                </div>
              </article>
            </li>
          );
        })}
      </ul>

      <aside
        className={cn(
          'flex items-center gap-3 rounded-xl border-2 p-md sm:p-lg',
          'border-slate-800 bg-slate-900 text-slate-50',
          'dark:border-slate-700 dark:bg-slate-950',
          'shadow-[0_3px_0_var(--term-border)]',
        )}
        aria-label="emphasis"
      >
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg',
            'border border-blue-400/60 bg-blue-500/15 text-blue-200',
          )}
        >
          <TargetIcon className="h-5 w-5" />
        </span>
        <p className="text-md sm:text-lg lg:text-xl font-bold leading-snug break-keep">
          <span className="block text-slate-300">{content.bannerLines[0]}</span>
          <span className="block text-white">
            <span className="bg-gradient-to-r from-blue-300 via-violet-300 to-emerald-300 bg-clip-text text-transparent">
              {content.bannerLines[1]}
            </span>
          </span>
        </p>
      </aside>
    </section>
  );
};
