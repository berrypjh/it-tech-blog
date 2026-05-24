import { cn } from '@it-tech-blog/utils';

import { ToneIconBox } from '../../../getting-started/_shared/ToneIconBox';
import { toneTokens } from '../../../getting-started/_shared/tones';
import type { ArchitectureNode, SideNode } from '../content';
import { architectureIcon } from '../icons';

type Props = {
  mainFlow: ArchitectureNode[];
  side: SideNode[];
  flowLabel: string;
  sideLabel: string;
  a11yFlow: string;
  /** sm 카드 사이즈로 축소된 hero 변형. 기본값 false. */
  compact?: boolean;
  className?: string;
};

/**
 * Hero와 전체 지도 섹션 모두에서 쓰는 React 패키지 아키텍처 다이어그램.
 * 위에서 아래로 user-code → react → reconciler → renderer 흐름을 보여주고
 * renderer 아래에서 DOM/Native로 두 갈래로 갈라진다.
 * scheduler와 shared는 우측 보조 축으로 점선 연결된다.
 */
export const ArchitectureDiagram = ({
  mainFlow,
  side,
  flowLabel,
  sideLabel,
  a11yFlow,
  compact = false,
  className,
}: Props) => {
  const [userCode, react, reconciler, renderer, dom, native] = mainFlow;

  return (
    <div
      className={cn(
        'relative w-full rounded-2xl border bg-[var(--term-bg)]',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        compact ? 'px-md py-md sm:p-md' : 'px-md py-lg sm:p-lg',
        'overflow-hidden',
        className,
      )}
    >
      {/* 글로우 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(56,189,248,0.10),transparent_55%),radial-gradient(circle_at_82%_88%,rgba(251,191,36,0.10),transparent_55%)]"
      />

      <p className="sr-only">{a11yFlow}</p>

      {/* 라벨 */}
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

      <div className="relative mt-md grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto] gap-md lg:gap-lg items-stretch">
        {/* 중앙 main flow */}
        <div className="flex flex-col items-center gap-sm" aria-hidden="true">
          <FlowBox node={userCode} compact={compact} />
          <Arrow tone="accent" />
          <FlowBox node={react} compact={compact} emphasized />
          <Arrow tone="accent" />
          <FlowBox node={reconciler} compact={compact} emphasized />
          <Arrow tone="accent" />
          <FlowBox node={renderer} compact={compact} emphasized />

          {/* 두 갈래 분기 */}
          <div className="relative w-full max-w-md">
            <div className="grid grid-cols-2 gap-sm pt-md">
              <div className="flex flex-col items-center">
                <BranchLine direction="left" />
                <FlowBox node={dom} compact={compact} />
              </div>
              <div className="flex flex-col items-center">
                <BranchLine direction="right" />
                <FlowBox node={native} compact={compact} />
              </div>
            </div>
          </div>
        </div>

        {/* 우측 side axis */}
        <aside
          aria-hidden="true"
          className="flex lg:flex-col flex-row items-stretch gap-sm lg:gap-md lg:w-[160px] justify-center lg:justify-start"
        >
          <div className="hidden lg:flex items-center gap-sm pl-2">
            <span className="block w-px h-md border-l border-dashed border-[var(--term-border)]" />
            <span className="text-[10px] uppercase tracking-wider text-[var(--term-muted)]">
              {sideLabel}
            </span>
          </div>

          {side.map((node) => (
            <SideNodeBox key={node.id} node={node} compact={compact} />
          ))}
        </aside>
      </div>
    </div>
  );
};

type FlowBoxProps = {
  node: ArchitectureNode;
  compact: boolean;
  emphasized?: boolean;
};

const FlowBox = ({ node, compact, emphasized }: FlowBoxProps) => {
  const tone = toneTokens[node.tone];
  const Icon = architectureIcon[node.iconName];

  return (
    <div
      className={cn(
        'group inline-flex flex-col items-center gap-1 rounded-lg border',
        'bg-[var(--term-bg)] transition-all hover:-translate-y-0.5',
        'shadow-[0_2px_0_var(--term-border)]',
        emphasized ? tone.border : 'border-[var(--term-border)]',
        tone.borderHover,
        compact ? 'px-3 py-2 w-[10.5rem]' : 'px-md py-2.5 w-[12rem]',
      )}
    >
      <span className="inline-flex items-center gap-2">
        <ToneIconBox tone={node.tone} size="sm">
          <Icon className="h-4 w-4" aria-hidden="true" />
        </ToneIconBox>
        <span className={cn('text-sm font-bold font-mono tracking-tight', tone.text)}>
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
  compact: boolean;
};

const SideNodeBox = ({ node, compact }: SideNodeBoxProps) => {
  const tone = toneTokens[node.tone];
  const Icon = architectureIcon[node.iconName];

  return (
    <div
      className={cn(
        'group inline-flex flex-col items-start gap-1 rounded-lg border-2 border-dashed',
        tone.border,
        'bg-[var(--term-bg)] transition-all hover:-translate-y-0.5',
        compact ? 'px-3 py-2' : 'px-md py-md',
        'flex-1 lg:flex-none',
      )}
    >
      <span className="inline-flex items-center gap-2">
        <ToneIconBox tone={node.tone} size="sm">
          <Icon className="h-4 w-4" aria-hidden="true" />
        </ToneIconBox>
        <span className={cn('text-sm font-bold font-mono tracking-tight', tone.text)}>
          {node.label}
        </span>
      </span>
      <span className="text-[10px] leading-snug uppercase tracking-wider text-[var(--term-muted)] break-keep">
        {node.caption}
      </span>
    </div>
  );
};

const Arrow = ({ tone = 'accent' }: { tone?: 'accent' | 'muted' }) => (
  <span
    aria-hidden="true"
    className={cn(
      'inline-flex items-center justify-center text-xl leading-none',
      tone === 'accent' ? 'text-[var(--term-accent)]' : 'text-[var(--term-muted)]',
    )}
  >
    ↓
  </span>
);

const BranchLine = ({ direction }: { direction: 'left' | 'right' }) => (
  <svg aria-hidden="true" className="h-md w-full" viewBox="0 0 100 32" preserveAspectRatio="none">
    <path
      d={direction === 'left' ? 'M 80 0 L 50 32' : 'M 20 0 L 50 32'}
      stroke="currentColor"
      strokeWidth="1.4"
      strokeDasharray="3 4"
      fill="none"
      className="text-[var(--term-accent)]"
    />
  </svg>
);
