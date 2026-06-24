import { cn } from '@it-tech-blog/utils';

import { ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { TransitionDeferredContent } from '../content';
import { ClockIcon, ListIcon, SearchIcon, ZapIcon } from '../icons';

type Props = { content: TransitionDeferredContent['hero']; className?: string };

/**
 * Hero 핵심 비주얼.
 * 사용자 입력은 즉시 반영(높은 우선순위), 무거운 결과 리스트는 뒤로 미룸(낮은 우선순위)으로
 * 갈라지는 split을, 입력 카드 → accent 화살표 → 결과 카드로 위에서 아래로 잇는 컴팩트 stepper.
 */
export const TransitionDeferredHeroDiagram = ({ content, className }: Props) => {
  const { searchInput, resultList, arrowLabelTop, arrowLabelBottom } = content;
  const a11y =
    `${searchInput.title}: ${searchInput.immediateLabel} — ${searchInput.immediateBody}. ` +
    `${arrowLabelTop} / ${arrowLabelBottom}. ` +
    `${resultList.title}(${resultList.subtitle}): ${resultList.deferredLabel} — ${resultList.deferredBody}`;

  return (
    <div
      className={cn(
        '@container relative w-full overflow-hidden rounded-2xl border bg-[var(--term-bg)]',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)] p-md sm:p-lg',
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(45,212,191,0.12),transparent_55%)]"
      />
      <p className="sr-only">{a11y}</p>

      <div className="relative flex flex-col gap-sm" aria-hidden="true">
        <LaneCard
          tone="emerald"
          icon={<SearchIcon className="h-[18px] w-[18px]" />}
          title={searchInput.title}
          laneIcon={<ZapIcon className="h-3 w-3" />}
          laneLabel={searchInput.immediateLabel}
          body={searchInput.immediateBody}
          value={searchInput.value}
        />

        <ArrowWithLabel labelTop={arrowLabelTop} labelBottom={arrowLabelBottom} />

        <LaneCard
          tone="blue"
          icon={<ListIcon className="h-[18px] w-[18px]" />}
          title={resultList.title}
          subtitle={resultList.subtitle}
          laneIcon={<ClockIcon className="h-3 w-3" />}
          laneLabel={resultList.deferredLabel}
          body={resultList.deferredBody}
        />
      </div>
    </div>
  );
};

const LaneCard = ({
  tone,
  icon,
  title,
  subtitle,
  laneIcon,
  laneLabel,
  body,
  value,
}: {
  tone: ToneKey;
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  laneIcon: React.ReactNode;
  laneLabel: string;
  body: string;
  value?: string;
}) => {
  const t = toneTokens[tone];
  return (
    <article
      className={cn(
        'flex flex-col gap-sm rounded-xl border bg-[var(--term-bg)] p-md',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
        t.borderHover,
      )}
    >
      <header className="flex items-center gap-sm">
        <ToneIconBox tone={tone} size="sm">
          {icon}
        </ToneIconBox>
        <span className={cn('text-sm font-bold tracking-tight break-keep', t.text)}>{title}</span>
        {subtitle && (
          <span className="ml-auto shrink-0 rounded-md border border-[var(--term-border)] px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
            {subtitle}
          </span>
        )}
      </header>

      {value && (
        <span className="rounded-md border border-[var(--term-border)] bg-[var(--term-bg)] px-2 py-1 font-mono text-xsm text-[var(--term-fg)] truncate">
          {value}
        </span>
      )}

      <div className="flex items-center gap-1.5">
        <span
          className={cn(
            'inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider',
            t.text,
          )}
        >
          {laneIcon}
          {laneLabel}
        </span>
        <span className="text-xsm text-[var(--term-muted)] break-keep">{body}</span>
      </div>
    </article>
  );
};

const ArrowWithLabel = ({ labelTop, labelBottom }: { labelTop: string; labelBottom: string }) => (
  <div className="flex flex-col items-center gap-0.5">
    <DownArrow />
    <span className="font-mono text-[10px] text-[var(--term-muted)] break-keep text-center">
      {labelTop} / {labelBottom}
    </span>
  </div>
);

const DownArrow = () => (
  <span
    aria-hidden="true"
    className="inline-flex items-center justify-center text-[var(--term-accent)] text-lg leading-none"
  >
    ↓
  </span>
);
