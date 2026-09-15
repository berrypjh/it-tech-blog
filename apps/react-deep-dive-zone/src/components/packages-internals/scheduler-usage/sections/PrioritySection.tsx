import { cx } from '@berrypjh/react-ui';
import {
  CheckCircle2,
  Lightbulb,
  type LucideIcon,
  Map,
  Monitor,
  RefreshCw,
  User,
  Zap,
} from 'lucide-react';

import { type FlowStepItem, FlowStepsGrid } from '../../../shared/grid';
import { SectionBadgeHeader } from '../../../shared/section';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { PriorityLevel, SchedulerContent } from '../content';

type Props = { content: SchedulerContent['priority'] };

const levelIcon: Record<PriorityLevel['id'], LucideIcon> = {
  sync: Zap,
  'user-blocking': User,
  normal: Monitor,
  low: RefreshCw,
};

/** 우선순위 단계 4색 순환 */
const CYCLE: ToneKey[] = ['amber', 'sky', 'violet', 'teal'];

const toFlowStep = (level: PriorityLevel, idx: number): FlowStepItem => {
  const tone = CYCLE[idx % CYCLE.length];
  const Icon = levelIcon[level.id];
  return {
    id: level.id,
    badge: level.badge,
    title: level.title,
    body: level.description,
    tone,
    icon: <Icon className={cx('h-5 w-5', toneTokens[tone].text)} aria-hidden="true" />,
  };
};

export const PrioritySection = ({ content }: Props) => {
  return (
    <section id="priority" aria-labelledby="heading-priority" className="space-y-md scroll-mt-xl">
      <SectionBadgeHeader
        descriptionFullWidth
        id="priority"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<Map className="h-5 w-5" aria-hidden="true" />}
      />

      <FlowStepsGrid steps={content.levels.map(toFlowStep)} columns={4} />

      <article
        className={cx(
          'flex flex-col gap-md rounded-2xl border p-md sm:p-lg',
          'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
          'transition-all hover:-translate-y-0.5',
          toneTokens.sky.border,
        )}
      >
        <header className="flex items-center gap-sm">
          <span
            aria-hidden="true"
            className={cx(
              'inline-flex items-center justify-center w-11 h-11 rounded-2xl border',
              toneTokens.sky.chip,
            )}
          >
            <Lightbulb className="h-5 w-5" aria-hidden="true" />
          </span>
          <h3
            className={cx(
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
              <CheckCircle2
                className={cx('h-4 w-4 shrink-0', toneTokens.emerald.text)}
                aria-hidden="true"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};
