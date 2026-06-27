import { cn } from '@it-tech-blog/utils';

import { type FlowStepItem, FlowStepsGrid } from '../../../shared/grid';
import { SectionNote } from '../../../shared/note';
import { SectionHeader } from '../../../shared/section';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { PriorityLevel, SchedulerContent } from '../content';
import { CheckCircleIcon, LightbulbIcon, MapIcon, schedulerIcon } from '../icons';

type Props = { content: SchedulerContent['priority'] };

/** 우선순위 단계 4색 순환 */
const CYCLE: ToneKey[] = ['amber', 'sky', 'violet', 'teal'];

const toFlowStep = (level: PriorityLevel, idx: number): FlowStepItem => {
  const tone = CYCLE[idx % CYCLE.length];
  const Icon = schedulerIcon[level.iconName];
  return {
    id: level.id,
    badge: level.badge,
    title: level.title,
    body: level.description,
    tone,
    icon: <Icon className={cn('h-5 w-5', toneTokens[tone].text)} />,
  };
};

export const PrioritySection = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-priority" className="space-y-lg">
      <SectionHeader
        id="priority"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<MapIcon className="h-5 w-5" />}
      />

      <FlowStepsGrid steps={content.levels.map(toFlowStep)} columns={4} />

      <article
        className={cn(
          'flex flex-col gap-md rounded-2xl border p-md sm:p-lg',
          'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
          'transition-all hover:-translate-y-0.5',
          toneTokens.sky.border,
        )}
      >
        <header className="flex items-center gap-sm">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex items-center justify-center w-11 h-11 rounded-2xl border',
              toneTokens.sky.chip,
            )}
          >
            <LightbulbIcon className="h-5 w-5" />
          </span>
          <h3
            className={cn(
              'text-md sm:text-lg font-bold tracking-tight break-keep',
              toneTokens.sky.text,
            )}
          >
            {content.criteriaTitle}
          </h3>
        </header>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {content.criteria.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 text-xsm sm:text-sm text-[var(--term-fg)] break-keep"
            >
              <CheckCircleIcon
                className={cn('h-4 w-4 shrink-0', toneTokens.emerald.text)}
                aria-hidden="true"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </article>

      <SectionNote icon={<StarIcon className="h-4 w-4" />}>{content.banner}</SectionNote>
    </section>
  );
};

const StarIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M12 2 L14.6 8.4 L21.5 9 L16.3 13.6 L17.9 20.4 L12 16.8 L6.1 20.4 L7.7 13.6 L2.5 9 L9.4 8.4 Z" />
  </svg>
);
