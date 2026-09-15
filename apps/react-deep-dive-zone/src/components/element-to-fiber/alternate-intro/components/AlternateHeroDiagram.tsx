import { cx } from '@berrypjh/react-ui';
import { Link } from 'lucide-react';

import { HeroDiagramShell } from '../../../shared/hero';
import { DownArrow } from '../../../shared/icon';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { AlternateFiberContent } from '../content';

import { FiberPairCard } from './FiberPairCard';

type Props = { content: AlternateFiberContent['hero'] };

export const AlternateHeroDiagram = ({ content }: Props) => {
  const a11y = `${content.currentTitle}: ${content.currentItems.join(', ')} — ${content.forwardLabel} ↔ ${content.backwardLabel} — ${content.workTitle}: ${content.workItems.join(', ')}`;

  return (
    <HeroDiagramShell a11yLabel={a11y}>
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
    </HeroDiagramShell>
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
        <Link className="h-4 w-4" aria-hidden="true" />
      </ToneIconBox>
      <span className={cx('font-mono text-sm font-bold tracking-tight', tone.text)}>
        {forwardLabel}
      </span>
      <span className="ml-auto inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-[var(--term-muted)]">
        ↔ {backwardLabel}
      </span>
    </div>
  );
};
