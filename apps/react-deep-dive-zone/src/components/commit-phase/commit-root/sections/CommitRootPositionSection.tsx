import { cx } from '@berrypjh/react-ui';
import {
  ArrowDown,
  Calendar,
  CheckCircle2,
  Cpu,
  DoorOpen,
  List,
  type LucideIcon,
  Map as MapIcon,
} from 'lucide-react';

import { SectionBadgeHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { CommitRootContent, PositionStep, PositionStepId } from '../content';

type Props = { content: CommitRootContent['position'] };

const iconMap: Record<PositionStepId, LucideIcon> = {
  calendar: Calendar,
  cpu: Cpu,
  check: CheckCircle2,
  gate: DoorOpen,
  list: List,
};

export const CommitRootPositionSection = ({ content }: Props) => (
  <section
    id="commit-root-position"
    aria-labelledby="heading-commit-root-position"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      descriptionFullWidth
      id="commit-root-position"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<MapIcon className="h-5 w-5" aria-hidden="true" />}
    />

    <article className="rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
      <ol className="flex flex-col">
        {content.steps.map((step, idx) => (
          <li key={step.title} className="flex flex-col">
            <PositionRow step={step} index={idx + 1} entryBadge={content.entryBadge} />
            {idx < content.steps.length - 1 && (
              <span aria-hidden="true" className="my-2 flex justify-center text-[var(--term-dim)]">
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </span>
            )}
          </li>
        ))}
      </ol>
    </article>
  </section>
);

const PositionRow = ({
  step,
  index,
  entryBadge,
}: {
  step: PositionStep;
  index: number;
  entryBadge: string;
}) => {
  const Icon = iconMap[step.id];
  const t = toneTokens[step.tone];
  return (
    <article
      className={cx(
        'grid grid-cols-[auto_minmax(0,_1fr)_auto] gap-md items-start rounded-lg border p-md',
        step.emphasis
          ? cx('border-2', t.fill.border, t.fill.bg)
          : cx(t.border, 'bg-[var(--term-bg)]'),
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <ToneIconBox tone={step.tone}>
        <Icon className="h-5 w-5" />
      </ToneIconBox>

      <div className="flex flex-col gap-1 min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className={cx('text-sm sm:text-md font-bold leading-tight break-keep', t.fill.text)}>
            {step.title}
          </h3>
          {step.emphasis && (
            <span
              className={cx(
                'inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider font-bold',
                t.chip,
              )}
            >
              {entryBadge}
            </span>
          )}
        </div>
        <p className="text-xsm sm:text-sm leading-snug text-[var(--term-muted)] break-keep">
          {step.description}
        </p>
        {step.subItems && (
          <ul className="mt-1 flex flex-wrap gap-1.5">
            {step.subItems.map((sub) => (
              <li
                key={sub}
                className={cx(
                  'inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-[10px] font-mono',
                  t.chip,
                )}
              >
                <span
                  aria-hidden="true"
                  className={cx('inline-block h-1 w-1 rounded-full', t.dot)}
                />
                {sub}
              </li>
            ))}
          </ul>
        )}
      </div>

      <span
        aria-hidden="true"
        className={cx(
          'hidden sm:inline-flex h-7 w-7 items-center justify-center rounded-md border text-[11px] font-mono font-bold tabular-nums',
          t.chip,
        )}
      >
        {String(index).padStart(2, '0')}
      </span>
    </article>
  );
};
