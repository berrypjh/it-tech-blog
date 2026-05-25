import { cn } from '@it-tech-blog/utils';

import type { SuspenseHydrationLinkContent } from '../content';
import {
  CheckCircleIcon,
  DropletsIcon,
  PackageIcon,
  RocketIcon,
  ServerCrashIcon,
  SparklesIcon,
} from '../icons';
import { phaseAccent } from '../tone';

import { SectionHeader } from './_SectionHeader';

type Props = { content: SuspenseHydrationLinkContent['timeline'] };

const stepIcons = [ServerCrashIcon, PackageIcon, DropletsIcon, RocketIcon, CheckCircleIcon];

export const TimelineSection = ({ content }: Props) => (
  <section aria-labelledby="timeline-heading" className="flex flex-col gap-md">
    <SectionHeader id="timeline-heading" number={content.number} title={content.title} />

    <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-5">
      {content.steps.map((step, i) => {
        const accent = phaseAccent[step.phase];
        const Icon = stepIcons[i] ?? SparklesIcon;
        const isFinal = i === content.steps.length - 1;
        return (
          <li key={step.title}>
            <article
              className={cn(
                'flex flex-col gap-2 h-full rounded-2xl border-2 p-md',
                accent.border,
                accent.bg,
                isFinal && 'ring-2 ring-emerald-300/50 dark:ring-emerald-700/40',
                'shadow-[0_2px_0_var(--term-border)]',
                'transition-transform motion-safe:hover:-translate-y-0.5',
              )}
            >
              <div className="flex items-center justify-between gap-2">
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-7 w-7 items-center justify-center rounded-full font-mono text-[11px] font-bold tabular-nums text-white',
                    accent.solidBg,
                  )}
                >
                  {i + 1}
                </span>
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-7 w-7 items-center justify-center rounded-lg border',
                    accent.iconChip,
                  )}
                >
                  <Icon className="h-3.5 w-3.5" />
                </span>
              </div>
              <h3 className={cn('text-sm font-bold break-keep', accent.text)}>{step.title}</h3>
              {step.caption && (
                <p className="text-[11px] text-[var(--term-muted)] break-keep">{step.caption}</p>
              )}
            </article>
          </li>
        );
      })}
    </ul>
  </section>
);
