import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { HostComponentFiberContent, TreeNode } from '../content';
import { ArrowRightIcon, LayersIcon, MonitorIcon } from '../icons';

type Props = { content: HostComponentFiberContent['concept'] };

const emerald = toneTokens.emerald;
const sky = toneTokens.sky;

export const HostComponentConcept = ({ content }: Props) => (
  <section id="concept" aria-labelledby="heading-concept" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="concept"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description1}
      icon={<LayersIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_minmax(0,_1.1fr)] gap-md items-stretch">
        {/* Left: description */}
        <div className="flex flex-col gap-md">
          <p className="text-sm sm:text-md leading-relaxed text-[var(--term-fg)] break-keep max-w-[58ch]">
            {content.description1}
          </p>
          <p className="text-sm sm:text-md leading-relaxed text-[var(--term-fg)] break-keep max-w-[58ch]">
            브라우저에서는 <code className={cn('font-mono font-bold', emerald.text)}>div</code>,{' '}
            <code className={cn('font-mono font-bold', emerald.text)}>button</code>,{' '}
            <code className={cn('font-mono font-bold', emerald.text)}>input</code> 같은 DOM 요소와
            이어집니다.
          </p>
          <div
            className={cn(
              'mt-auto inline-flex items-center gap-sm rounded-xl border-2 px-md py-3',
              sky.fill.bg,
              sky.fill.border,
            )}
          >
            <ToneIconBox tone="sky" size="sm">
              <ArrowRightIcon className="h-4 w-4" />
            </ToneIconBox>
            <code
              className={cn('font-mono text-xsm sm:text-sm font-bold break-keep', sky.fill.text)}
            >
              {content.bridgeLabel}
            </code>
          </div>
        </div>

        {/* Right: tree + browser */}
        <div
          className={cn(
            'rounded-2xl border p-md',
            'border-[var(--term-border)] bg-[var(--term-surface)]',
            'flex flex-col gap-md',
          )}
        >
          <span className="text-[10px] uppercase tracking-wider font-mono font-bold text-[var(--term-muted)]">
            host tree → DOM
          </span>

          <ul className="flex flex-col gap-1.5" aria-label="Host fiber tree example">
            {content.treeNodes.map((node) => (
              <li key={node.id}>
                <TreeRow node={node} />
              </li>
            ))}
          </ul>

          <div
            className={cn(
              'mt-2 flex items-center gap-sm rounded-xl border-2 p-md',
              sky.fill.bg,
              sky.fill.border,
            )}
          >
            <ToneIconBox tone="sky" size="md">
              <MonitorIcon className="h-6 w-6" />
            </ToneIconBox>
            <div className="flex flex-col gap-0.5 min-w-0">
              <span
                className={cn('text-[10px] uppercase tracking-wider font-mono font-bold', sky.text)}
              >
                output
              </span>
              <code className={cn('font-mono text-sm font-bold', sky.fill.text)}>
                {content.domLabel}
              </code>
            </div>
          </div>
        </div>
      </div>
    </article>
  </section>
);

const TreeRow = ({ node }: { node: TreeNode }) => {
  const prefix =
    node.depth === 0 ? '' : '│  '.repeat(node.depth - 1) + (node.isLast ? '└─ ' : '├─ ');
  return (
    <div className={cn('flex items-center gap-2 rounded-md border px-sm py-2', emerald.chip)}>
      <code className="font-mono text-[11px] text-[var(--term-muted)] whitespace-pre">
        {prefix}
      </code>
      <code className={cn('font-mono text-xsm font-bold break-all', emerald.text)}>
        {node.label}
      </code>
    </div>
  );
};
