import { cx, VisuallyHidden } from '@berrypjh/react-ui';
import {
  Atom,
  Boxes,
  Clock,
  Code,
  Layers,
  type LucideIcon,
  Monitor,
  Smartphone,
} from 'lucide-react';

import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { ArchitectureNode, SideNode } from '../content';

const nodeIcon: Record<ArchitectureNode['id'] | SideNode['id'], LucideIcon> = {
  'user-code': Code,
  react: Atom,
  reconciler: Boxes,
  renderer: Monitor,
  dom: Monitor,
  native: Smartphone,
  scheduler: Clock,
  shared: Layers,
};

type Props = {
  mainFlow: ArchitectureNode[];
  side: SideNode[];
  flowLabel: string;
  sideLabel: string;
  a11yFlow: string;
};

export const ArchitectureDiagram = ({ mainFlow, side, flowLabel, sideLabel, a11yFlow }: Props) => {
  const [userCode, react, reconciler, renderer, dom, native] = mainFlow;

  return (
    <div
      className={cx(
        '@container relative w-full rounded-2xl border bg-[var(--term-bg)]',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'px-md py-lg sm:p-lg overflow-hidden',
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(56,189,248,0.10),transparent_55%),radial-gradient(circle_at_82%_88%,rgba(251,191,36,0.10),transparent_55%)]"
      />

      <VisuallyHidden>{a11yFlow}</VisuallyHidden>

      <div className="relative flex items-center gap-sm">
        <span
          aria-hidden="true"
          className="flex-1 border-t border-dashed border-[var(--term-border)]"
        />
        <span className="text-[10px] uppercase tracking-wider text-[var(--term-muted)] font-mono px-2 py-1 rounded-full border border-[var(--term-border)] bg-[var(--term-surface)]">
          {flowLabel}
        </span>
        <span
          aria-hidden="true"
          className="flex-1 border-t border-dashed border-[var(--term-border)]"
        />
      </div>

      <div className="relative mt-md grid grid-cols-1 @xl:grid-cols-[minmax(0,1fr)_auto] gap-md @xl:gap-lg items-stretch">
        <div className="flex flex-col items-center gap-sm" aria-hidden="true">
          <FlowBox node={userCode} />
          <Arrow />
          <FlowBox node={react} emphasized />
          <Arrow />
          <FlowBox node={reconciler} emphasized />
          <Arrow />
          <FlowBox node={renderer} emphasized />
          <Arrow />

          <ul className="flex w-full flex-wrap justify-center gap-sm">
            <li className="flex w-36 max-w-full min-w-0">
              <FlowBox node={dom} />
            </li>
            <li className="flex w-36 max-w-full min-w-0">
              <FlowBox node={native} />
            </li>
          </ul>
        </div>

        <aside
          aria-hidden="true"
          className="flex @xl:flex-col flex-row items-stretch gap-sm @xl:gap-md @xl:w-[160px] justify-center @xl:justify-start"
        >
          <div className="hidden @xl:flex items-center gap-sm pl-2">
            <span className="block w-px h-md border-l border-dashed border-[var(--term-border)]" />
            <span className="text-[10px] uppercase tracking-wider text-[var(--term-muted)]">
              {sideLabel}
            </span>
          </div>

          {side.map((node) => (
            <SideNodeBox key={node.id} node={node} />
          ))}
        </aside>
      </div>
    </div>
  );
};

type FlowBoxProps = {
  node: ArchitectureNode;
  emphasized?: boolean;
};

const FlowBox = ({ node, emphasized }: FlowBoxProps) => {
  const Icon = nodeIcon[node.id];

  return (
    <div
      className={cx(
        'group inline-flex min-w-0 flex-col items-center gap-1 rounded-lg border',
        'bg-[var(--term-bg)] transition-all hover:-translate-y-0.5',
        'shadow-[0_2px_0_var(--term-border)]',
        emphasized ? 'border-[var(--term-accent)]' : 'border-[var(--term-border)]',
        'px-md py-2.5 w-full max-w-[12rem]',
      )}
    >
      <span className="flex min-w-0 max-w-full items-center gap-2">
        <ToneIconBox tone={node.tone} size="sm">
          <Icon className="h-4 w-4" aria-hidden="true" />
        </ToneIconBox>
        <span
          className={cx(
            'min-w-0 truncate text-sm font-bold font-mono tracking-tight',
            toneTokens[node.tone].text,
          )}
        >
          {node.label}
        </span>
      </span>
      <span className="text-[10px] leading-snug uppercase tracking-wider text-[var(--term-muted)] break-keep text-center">
        {node.caption}
      </span>
    </div>
  );
};

type SideNodeBoxProps = {
  node: SideNode;
};

const SideNodeBox = ({ node }: SideNodeBoxProps) => {
  const Icon = nodeIcon[node.id];

  return (
    <div
      className={cx(
        'group inline-flex flex-col items-start gap-1 rounded-lg border-2 border-dashed',
        'border-[var(--term-border)]',
        'bg-[var(--term-bg)] transition-all hover:-translate-y-0.5',
        'px-md py-md flex-1 @xl:flex-none',
      )}
    >
      <span className="inline-flex items-center gap-2">
        <ToneIconBox tone={node.tone} size="sm">
          <Icon className="h-4 w-4" aria-hidden="true" />
        </ToneIconBox>
        <span
          className={cx('text-sm font-bold font-mono tracking-tight', toneTokens[node.tone].text)}
        >
          {node.label}
        </span>
      </span>
      <span className="text-[10px] leading-snug uppercase tracking-wider text-[var(--term-muted)] break-keep">
        {node.caption}
      </span>
    </div>
  );
};

const Arrow = () => (
  <span
    aria-hidden="true"
    className="inline-flex items-center justify-center text-xl leading-none text-[var(--term-accent)]"
  >
    ↓
  </span>
);
