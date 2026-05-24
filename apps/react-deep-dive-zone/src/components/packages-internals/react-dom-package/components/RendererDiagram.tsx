import { cn } from '@it-tech-blog/utils';

import { ToneIconBox } from '../../../getting-started/_shared/ToneIconBox';
import { toneTokens } from '../../../getting-started/_shared/tones';
import type { HeroDiagramNode, ReactDomContent } from '../content';
import { reactDomIcon } from '../icons';

type Props = { content: ReactDomContent['hero']; className?: string };

/**
 * Hero 우측 다이어그램.
 * 데스크톱: 중앙 react-dom 카드를 중심으로 좌상/우상에 DOM 컨테이너 + HTML 문서, 하단에 서버 스트림.
 * 모바일: 중앙 react-dom 카드를 상단에 두고 세 노드는 grid로 단순화.
 */
export const RendererDiagram = ({ content, className }: Props) => {
  const top = content.nodes.filter((n) => n.slot !== 'bottom');
  const bottom = content.nodes.find((n) => n.slot === 'bottom');

  return (
    <div
      className={cn(
        'relative w-full rounded-2xl border bg-[var(--term-bg)]',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'px-md py-lg sm:p-lg overflow-hidden',
        className,
      )}
    >
      {/* 옅은 글로우 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(20,184,166,0.16),transparent_55%)]"
      />
      <p className="sr-only">{content.a11yFlow}</p>

      <div className="relative flex flex-col gap-md">
        {/* 상단 두 노드 + 중앙 react-dom */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-md">
          <div className="order-2 lg:order-1">
            <NodeCard node={top[0]} alignRight />
          </div>

          <div className="order-1 lg:order-2 flex justify-center relative">
            {/* desktop dashed connectors to top nodes */}
            <span
              aria-hidden="true"
              className="hidden lg:block pointer-events-none absolute left-[-90%] top-1/2 -translate-y-1/2 w-[90%] h-[60%]"
            >
              <ConnectorCurve from="left" />
            </span>
            <span
              aria-hidden="true"
              className="hidden lg:block pointer-events-none absolute right-[-90%] top-1/2 -translate-y-1/2 w-[90%] h-[60%]"
            >
              <ConnectorCurve from="right" />
            </span>

            <CenterReactDomCard center={content.centerCard} />
          </div>

          <div className="order-3">
            <NodeCard node={top[1]} />
          </div>
        </div>

        {/* 중앙 → 하단 점선 */}
        {bottom && (
          <div className="flex flex-col items-center gap-sm">
            <span
              aria-hidden="true"
              className="block w-px h-md border-l border-dashed border-teal-400/70 dark:border-teal-600/70"
            />
            <span className="text-[10px] uppercase tracking-wider text-[var(--term-muted)] inline-flex items-center gap-1 font-mono">
              renderTo<span className="text-[var(--term-accent)]">*</span> output
            </span>
            <NodeCard node={bottom} wide />
          </div>
        )}
      </div>
    </div>
  );
};

const CenterReactDomCard = ({ center }: { center: ReactDomContent['hero']['centerCard'] }) => (
  <div
    className={cn(
      'relative flex flex-col items-center justify-center gap-1 rounded-2xl border',
      'border-slate-700 bg-slate-900 text-slate-100',
      'shadow-[0_3px_0_var(--term-border)] px-md py-md sm:px-lg sm:py-lg',
      'min-w-[12rem] overflow-hidden',
    )}
  >
    <span
      aria-hidden="true"
      className="absolute inset-0 -z-0 bg-[radial-gradient(circle_at_50%_45%,rgba(45,212,191,0.32),transparent_60%),radial-gradient(circle_at_60%_85%,rgba(56,189,248,0.18),transparent_55%)]"
    />
    <ReactAtomIcon className="relative h-10 w-10 text-cyan-300" />
    <span className="relative text-lg font-bold font-mono tracking-tight text-cyan-200">
      {center.title}
    </span>
    <span className="relative text-[10px] uppercase tracking-wider text-cyan-300/80">
      {center.caption}
    </span>
  </div>
);

const NodeCard = ({
  node,
  alignRight = false,
  wide = false,
}: {
  node: HeroDiagramNode;
  alignRight?: boolean;
  wide?: boolean;
}) => {
  const tone = toneTokens[node.tone];
  const Icon = reactDomIcon[node.iconName];

  return (
    <article
      className={cn(
        'group flex flex-col gap-2 rounded-xl border p-md',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        tone.border,
        tone.borderHover,
        'transition-all hover:-translate-y-0.5',
        wide ? 'w-full max-w-xl mx-auto' : 'min-w-[10rem]',
        alignRight && 'lg:ml-auto lg:max-w-[18rem]',
      )}
    >
      <header className="flex items-center gap-sm">
        <ToneIconBox tone={node.tone} size="sm">
          <Icon className="h-4 w-4" aria-hidden="true" />
        </ToneIconBox>
        <div className="flex flex-col min-w-0">
          <h3 className={cn('text-sm font-bold tracking-tight font-mono truncate', tone.text)}>
            {node.title}
          </h3>
          <span className="text-[10px] uppercase tracking-wider text-[var(--term-muted)]">
            {node.caption}
          </span>
        </div>
      </header>
      {node.code && (
        <pre
          className={cn(
            'overflow-x-auto rounded-md border border-dashed p-2 text-[10.5px] leading-snug font-mono',
            'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-fg)]',
          )}
        >
          <code>{node.code}</code>
        </pre>
      )}
      <p className="text-[11px] leading-relaxed text-[var(--term-muted)] break-keep">
        {node.description}
      </p>
    </article>
  );
};

const ConnectorCurve = ({ from }: { from: 'left' | 'right' }) => {
  const start = from === 'left' ? 0 : 100;
  const end = from === 'left' ? 100 : 0;
  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className="h-full w-full text-teal-400/70 dark:text-teal-600/70"
    >
      <path
        d={`M ${start} 50 Q 50 50 ${end} 50`}
        stroke="currentColor"
        strokeWidth="1.2"
        strokeDasharray="3 4"
        fill="none"
      />
    </svg>
  );
};

const ReactAtomIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" />
    <ellipse cx="12" cy="12" rx="10" ry="4" />
    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
  </svg>
);
