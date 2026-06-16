import { cn } from '@it-tech-blog/utils';

import type { ArchitectureNode, SideNode } from '../content';
import { architectureIcon } from '../icons';
import { ToneIconBox, toneText } from '../localTone';

type Props = {
  mainFlow: ArchitectureNode[];
  side: SideNode[];
  flowLabel: string;
  sideLabel: string;
  a11yFlow: string;
  className?: string;
};

/**
 * React 패키지 아키텍처 다이어그램.
 * 위에서 아래로 user-code → react → reconciler → renderer 흐름을 보여주고
 * renderer 아래에 출력 대상 DOM / Native를 둔다.
 * scheduler와 shared는 보조 축으로 표시된다.
 * 컨테이너 폭(@xl)에 따라 보조 축이 우측 열 또는 하단 행으로 배치된다.
 */
export const ArchitectureDiagram = ({
  mainFlow,
  side,
  flowLabel,
  sideLabel,
  a11yFlow,
  className,
}: Props) => {
  const [userCode, react, reconciler, renderer, dom, native] = mainFlow;

  return (
    <div
      className={cn(
        '@container relative w-full rounded-2xl border bg-[var(--term-bg)]',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'px-md py-lg sm:p-lg overflow-hidden',
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

      <div className="relative mt-md grid grid-cols-1 @xl:grid-cols-[minmax(0,1fr)_auto] gap-md @xl:gap-lg items-stretch">
        {/* 중앙 main flow */}
        <div className="flex flex-col items-center gap-sm" aria-hidden="true">
          <FlowBox node={userCode} />
          <Arrow />
          <FlowBox node={react} emphasized />
          <Arrow />
          <FlowBox node={reconciler} emphasized />
          <Arrow />
          <FlowBox node={renderer} emphasized />
          <Arrow />

          {/* renderer 출력 대상: DOM / Native — 화살표 아래 가운데로 모은 한 쌍 */}
          <ul className="flex w-full flex-wrap justify-center gap-sm">
            <li className="flex w-36 max-w-full min-w-0">
              <FlowBox node={dom} />
            </li>
            <li className="flex w-36 max-w-full min-w-0">
              <FlowBox node={native} />
            </li>
          </ul>
        </div>

        {/* 우측 side axis */}
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
  const Icon = architectureIcon[node.iconName];

  return (
    <div
      className={cn(
        'group inline-flex min-w-0 flex-col items-center gap-1 rounded-lg border',
        'bg-[var(--term-bg)] transition-all hover:-translate-y-0.5',
        'shadow-[0_2px_0_var(--term-border)]',
        emphasized ? 'border-[var(--term-accent)]' : 'border-[var(--term-border)]',
        'hover:border-[var(--term-accent)]',
        'px-md py-2.5 w-full max-w-[12rem]',
      )}
    >
      <span className="flex min-w-0 max-w-full items-center gap-2">
        <ToneIconBox tone={node.tone} size="sm">
          <Icon className="h-4 w-4" aria-hidden="true" />
        </ToneIconBox>
        <span
          className={cn(
            'min-w-0 truncate text-sm font-bold font-mono tracking-tight',
            toneText(node.tone),
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
  const Icon = architectureIcon[node.iconName];

  return (
    <div
      className={cn(
        'group inline-flex flex-col items-start gap-1 rounded-lg border-2 border-dashed',
        'border-[var(--term-border)] hover:border-[var(--term-accent)]',
        'bg-[var(--term-bg)] transition-all hover:-translate-y-0.5',
        'px-md py-md flex-1 @xl:flex-none',
      )}
    >
      <span className="inline-flex items-center gap-2">
        <ToneIconBox tone={node.tone} size="sm">
          <Icon className="h-4 w-4" aria-hidden="true" />
        </ToneIconBox>
        <span className={cn('text-sm font-bold font-mono tracking-tight', toneText(node.tone))}>
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
