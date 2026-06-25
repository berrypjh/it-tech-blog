import { cn } from '@it-tech-blog/utils';

import { toneTokens } from '../../../shared/tones';
import type { ExplorationContent, HeroFlowNode } from '../content';
import { ArrowRightIcon, iconByName } from '../icons';

type Props = { content: ExplorationContent['hero'] };

export const HeroExplorationFlow = ({ content }: Props) => {
  return (
    <div
      className={cn(
        '@container relative w-full rounded-2xl border bg-[var(--term-bg)]',
        'border-[var(--term-border)] shadow-[0_3px_0_var(--term-border)]',
        'p-md sm:p-lg overflow-hidden',
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[var(--term-surface)]/40"
      />

      <div className="relative flex flex-col gap-md">
        <ol className="grid grid-cols-1 @2xl:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr] gap-2 items-stretch">
          {content.flowNodes.map((node, idx) => (
            <FlowNodeWithArrow
              key={node.id}
              node={node}
              isLast={idx === content.flowNodes.length - 1}
            />
          ))}
        </ol>

        {/* 하단 정리 문구 */}
        <div className="flex items-center justify-center gap-1.5 sm:gap-3 flex-wrap pt-sm border-t border-dashed border-[var(--term-border)]">
          {content.summaryLine.map((word, idx) => (
            <span key={idx} className="inline-flex items-center gap-1.5 sm:gap-3">
              <span className="text-sm sm:text-md font-bold tracking-tight text-[var(--term-fg)]">
                {word}
              </span>
              {idx < content.summaryLine.length - 1 && (
                <ArrowRightIcon
                  className="h-3.5 w-3.5 text-[var(--term-accent)]"
                  aria-hidden="true"
                />
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

type WithArrowProps = { node: HeroFlowNode; isLast: boolean };

const FlowNodeWithArrow = ({ node, isLast }: WithArrowProps) => (
  <>
    <FlowNode node={node} />
    {!isLast && <FlowArrow />}
  </>
);

const FlowArrow = () => (
  <div aria-hidden="true" className="flex items-center justify-center">
    <ArrowRightIcon className="hidden @2xl:inline-flex h-4 w-4 text-[var(--term-accent)]" />
    <ArrowRightIcon className="inline-flex @2xl:hidden h-4 w-4 rotate-90 text-[var(--term-accent)]" />
  </div>
);

type NodeProps = { node: HeroFlowNode };

const FlowNode = ({ node }: NodeProps) => {
  const tone = toneTokens[node.tone];
  const Icon = iconByName[node.icon];

  return (
    <article
      className={cn(
        'flex flex-col items-center gap-1.5 rounded-lg border p-3 text-center',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)] transition-all hover:-translate-y-0.5',
        tone.border,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex items-center justify-center w-9 h-9 rounded-md border',
          tone.chip,
        )}
      >
        <Icon className="h-4 w-4" />
      </span>
      <h3 className={cn('text-xsm font-bold font-mono tracking-tight', tone.text)}>{node.title}</h3>
      <p className="text-[10px] leading-snug text-[var(--term-muted)] break-keep">
        {node.subtitle}
      </p>
    </article>
  );
};
