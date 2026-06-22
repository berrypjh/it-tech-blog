import { cn } from '@it-tech-blog/utils';

import { ToneIconBox } from '../../../shared/ToneIconBox';
import { toneTokens } from '../../../shared/tones';
import type { AlternateFiberContent } from '../content';
import { LinkIcon } from '../icons';

import { FiberPairCard } from './FiberPairCard';

type Props = { content: AlternateFiberContent['hero']; className?: string };

export const AlternateHeroDiagram = ({ content, className }: Props) => {
  const a11y = `React는 같은 노드에 대해 ${content.currentTitle}와 ${content.workTitle} 두 가지를 동시에 가지며, alternate 포인터로 서로 양방향 연결합니다. current는 화면에 반영된 안정적인 트리이고, workInProgress는 다음 화면을 계산 중인 작업 트리입니다.`;

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

      <ol className="relative flex flex-col gap-sm" aria-hidden="true">
        <li className="flex flex-col">
          <FiberPairCard
            variant="current"
            title={content.currentTitle}
            items={content.currentItems}
            compact
          />
        </li>

        <DownArrow />

        <li>
          <AlternateLinkChip
            forwardLabel={content.forwardLabel}
            backwardLabel={content.backwardLabel}
          />
        </li>

        <DownArrow />

        <li className="flex flex-col">
          <FiberPairCard
            variant="workInProgress"
            title={content.workTitle}
            items={content.workItems}
            compact
          />
        </li>
      </ol>
    </div>
  );
};

const AlternateLinkChip = ({
  forwardLabel,
  backwardLabel,
}: {
  forwardLabel: string;
  backwardLabel: string;
}) => {
  const tone = toneTokens.sky;
  return (
    <div className="flex items-center gap-sm rounded-xl border border-[var(--term-border)] bg-[var(--term-bg)] px-md py-2.5 shadow-[0_2px_0_var(--term-border)]">
      <ToneIconBox tone="sky" size="sm">
        <LinkIcon className="h-4 w-4" aria-hidden="true" />
      </ToneIconBox>
      <span className={cn('font-mono text-sm font-bold tracking-tight', tone.text)}>
        {forwardLabel}
      </span>
      <span className="ml-auto inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-[var(--term-muted)]">
        ↔ {backwardLabel}
      </span>
    </div>
  );
};

const DownArrow = () => (
  <span
    aria-hidden="true"
    className="inline-flex items-center justify-center text-[var(--term-accent)] text-lg leading-none"
  >
    ↓
  </span>
);
