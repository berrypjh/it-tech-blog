import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { HeroDiagramShell } from '../../../shared/hero';
import { DownArrow } from '../../../shared/icon';
import { ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { FiberPropsContent } from '../content';
import { ClockIcon, ZapIcon } from '../icons';

type Props = { content: FiberPropsContent['hero']; className?: string };

type CardData = FiberPropsContent['hero']['pendingCard'];

/**
 * Hero 핵심 비주얼.
 * 이번 작업에서 들어온 pendingProps와 지난 렌더에서 쓰인 memoizedProps를
 * 위에서 아래로 잇는 컴팩트 비교 stepper.
 */
export const PropsComparisonHeroDiagram = ({ content, className }: Props) => {
  const a11y = `${content.pendingCard.title} — ${content.pendingCard.subtitle}. ${content.vs}. ${content.memoizedCard.title} — ${content.memoizedCard.subtitle}.`;

  return (
    <HeroDiagramShell a11yLabel={a11y} className={className}>
      <ol className="relative flex flex-col gap-sm" aria-hidden="true">
        <li className="flex flex-col gap-sm">
          <PropsCard
            tone="sky"
            icon={<ZapIcon className="h-[18px] w-[18px]" />}
            card={content.pendingCard}
          />
        </li>

        <DownArrow />

        <li className="flex flex-col gap-sm">
          <PropsCard
            tone="emerald"
            icon={<ClockIcon className="h-[18px] w-[18px]" />}
            card={content.memoizedCard}
          />
        </li>
      </ol>
    </HeroDiagramShell>
  );
};

const PropsCard = ({
  tone,
  icon,
  card,
}: {
  tone: ToneKey;
  icon: React.ReactNode;
  card: CardData;
}) => {
  const t = toneTokens[tone];
  return (
    <div className="flex flex-col gap-sm">
      <div className="flex items-center gap-sm">
        <ToneIconBox tone={tone} size="sm">
          {icon}
        </ToneIconBox>
        <span className={cn('min-w-0 truncate font-mono text-sm font-bold tracking-tight', t.text)}>
          {card.title}
        </span>
        <span
          className={cn(
            'ml-auto inline-flex shrink-0 items-center rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider',
            t.chip,
          )}
        >
          {card.badge}
        </span>
      </div>
      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
        {card.subtitle}
      </p>
      <CodePreviewPanel
        code={card.example}
        caption={card.exampleLabel}
        showWindowDots={false}
        size="md"
      />
    </div>
  );
};
