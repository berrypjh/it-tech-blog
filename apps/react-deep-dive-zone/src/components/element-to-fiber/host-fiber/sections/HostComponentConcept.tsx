import { cx } from '@berrypjh/react-ui';
import { Layers, Monitor } from 'lucide-react';

import { ContrastCard } from '../../../shared/compare';
import { SectionBadgeHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { HostComponentFiberContent, TreeNode } from '../content';

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
      description={content.description}
      icon={<Layers className="h-5 w-5" aria-hidden="true" />}
    />

    <ContrastCard
      left={
        <div className="flex flex-col gap-sm p-md sm:p-lg">
          <PanelLabel>host tree</PanelLabel>
          <ul className="flex flex-col gap-1.5">
            {content.treeNodes.map((node) => (
              <li key={node.id}>
                <TreeRow node={node} />
              </li>
            ))}
          </ul>
        </div>
      }
      right={
        <div className="flex flex-col gap-sm p-md sm:p-lg lg:justify-center">
          <PanelLabel>output</PanelLabel>
          <div
            className={cx(
              'flex items-center gap-sm rounded-xl border-2 p-md',
              sky.fill.bg,
              sky.fill.border,
            )}
          >
            <ToneIconBox tone="sky" size="md">
              <Monitor className="h-6 w-6" aria-hidden="true" />
            </ToneIconBox>
            <code className={cx('font-mono text-sm font-bold', sky.fill.text)}>
              {content.domLabel}
            </code>
          </div>
        </div>
      }
    />
  </section>
);

const PanelLabel = ({ children }: { children: React.ReactNode }) => (
  <span className="text-[10px] uppercase tracking-wider font-mono font-bold text-[var(--term-muted)]">
    {children}
  </span>
);

const TreeRow = ({ node }: { node: TreeNode }) => {
  const prefix =
    node.depth === 0 ? '' : '│  '.repeat(node.depth - 1) + (node.isLast ? '└─ ' : '├─ ');
  return (
    <div className={cx('flex items-center gap-2 rounded-md border px-sm py-2', emerald.chip)}>
      <code className="font-mono text-[11px] text-[var(--term-muted)] whitespace-pre">
        {prefix}
      </code>
      <code className={cx('font-mono text-xsm font-bold break-all', emerald.text)}>
        {node.label}
      </code>
    </div>
  );
};
