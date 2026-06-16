import { cn } from '@it-tech-blog/utils';

import { DownArrow } from '../../../shared/DownArrow';
import { HeroDiagramShell } from '../../../shared/HeroDiagramShell';
import type { HeroFlowItem, ReactElementSummaryBeforeFiberContent } from '../content';
import { BoxIcon, CodeIcon, FileTextIcon, NetworkIcon } from '../icons';
import { toneChip, ToneIconBox, toneText } from '../localTone';

type Props = { content: ReactElementSummaryBeforeFiberContent['hero']; className?: string };

const iconMap = {
  code: CodeIcon,
  cube: BoxIcon,
  document: FileTextIcon,
  tree: NetworkIcon,
} as const;

/**
 * Hero 핵심 비주얼.
 * JSX → runtime → Element → Fiber로 이어지는 챕터 흐름을 위에서 아래로 잇는
 * 컴팩트 stepper. 이번 챕터의 핵심인 Element 카드를 강조한다.
 */
export const ElementSummaryHeroDiagram = ({ content, className }: Props) => {
  const a11y = `${content.flowTitle}: ${content.flowItems.map((item) => item.title).join(' → ')}`;

  return (
    <HeroDiagramShell a11yLabel={a11y} className={className}>
      <ol className="relative flex flex-col items-center gap-sm" aria-hidden="true">
        {content.flowItems.map((item, i) => (
          <li key={item.id} className="flex w-full flex-col items-center gap-sm">
            <FlowBox item={item} />
            {i < content.flowItems.length - 1 && <DownArrow />}
          </li>
        ))}
      </ol>
    </HeroDiagramShell>
  );
};

const FlowBox = ({ item }: { item: HeroFlowItem }) => {
  const Icon = iconMap[item.iconName];

  return (
    <article
      className={cn(
        'flex w-full min-w-0 items-start gap-sm rounded-xl border px-md py-2.5',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)] transition-all hover:-translate-y-0.5',
        item.highlighted
          ? cn(toneChip(item.tone), '@sm:shadow-[0_3px_0_var(--term-border)]')
          : cn('border-[var(--term-border)]', 'hover:border-[var(--term-accent)]'),
      )}
    >
      <ToneIconBox tone={item.tone} size="md">
        <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
      </ToneIconBox>
      <div className="flex min-w-0 flex-col gap-1">
        <span className="flex min-w-0 items-center gap-2">
          <span
            className={cn(
              'min-w-0 truncate font-mono text-sm font-bold tracking-tight',
              toneText(item.tone),
            )}
          >
            {item.title}
          </span>
          <span className="shrink-0 text-[10px] uppercase tracking-wider text-[var(--term-muted)] font-mono">
            {item.iconHint}
          </span>
        </span>
        <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">{item.body}</p>
      </div>
    </article>
  );
};
