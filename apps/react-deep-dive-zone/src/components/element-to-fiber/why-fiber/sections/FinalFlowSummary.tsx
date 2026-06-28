import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { FiberWhyNeededContent, FinalFlowRow } from '../content';
import { ArrowDownIcon, BoxIcon, HexagonIcon, MapIcon, PlayCircleIcon, WandIcon } from '../icons';

type Props = { content: FiberWhyNeededContent['finalFlow'] };

const iconByRow: Record<string, React.ComponentType<{ className?: string }>> = {
  jsx: BoxIcon,
  element: BoxIcon,
  'create-from-element': WandIcon,
  'create-from-type-and-props': WandIcon,
  'fiber-created': HexagonIcon,
  'render-phase': PlayCircleIcon,
};

export const FinalFlowSummary = ({ content }: Props) => (
  <section
    id="final-flow"
    aria-labelledby="heading-final-flow"
    className="space-y-md scroll-mt-xl h-full"
  >
    <SectionBadgeHeader
      id="final-flow"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<MapIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <ol className="flex flex-col gap-1">
        {content.rows.map((row, idx) => (
          <li key={row.id} className="flex flex-col">
            <Row row={row} />
            {idx < content.rows.length - 1 && (
              <span className="flex justify-center py-1" aria-hidden="true">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full border border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-accent)]">
                  <ArrowDownIcon className="h-3.5 w-3.5" />
                </span>
              </span>
            )}
          </li>
        ))}
      </ol>
    </article>
  </section>
);

const Row = ({ row }: { row: FinalFlowRow }) => {
  const t = toneTokens[row.accent];
  const Icon = iconByRow[row.id] ?? BoxIcon;
  return (
    <article
      className={cn(
        'group flex items-center gap-sm rounded-xl border-2 p-md',
        'bg-[var(--term-surface)] transition-all hover:-translate-y-0.5',
        t.fill.border,
      )}
    >
      <ToneIconBox tone={row.accent} size="md">
        <Icon className="h-5 w-5" />
      </ToneIconBox>
      <div className="flex flex-col gap-0.5 min-w-0 flex-1">
        <code
          className={cn(
            'font-mono text-xsm sm:text-sm font-extrabold tracking-tight break-all',
            t.text,
          )}
        >
          {row.title}
        </code>
        <span className="text-[11px] leading-relaxed text-[var(--term-muted)] break-keep">
          {row.description}
        </span>
      </div>
    </article>
  );
};
