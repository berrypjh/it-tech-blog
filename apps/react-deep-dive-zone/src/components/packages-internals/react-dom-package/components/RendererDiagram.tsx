import { cn } from '@it-tech-blog/utils';

import { HeroDiagramShell } from '../../../shared/hero';
import type { HeroDiagramNode, ReactDomContent } from '../content';
import { reactDomIcon } from '../icons';
import { localTone, LocalToneIconBox } from '../tone';

type Props = { content: ReactDomContent['hero']; className?: string };

/**
 * Hero 우측 다이어그램 (react-package ApiNetworkDiagram과 같은 결).
 * 중앙 react-dom atom 카드 → 점선 → renderer가 만들어내는 출력 3종을 반응형 그리드(1 → 3열)로 보여준다.
 */
export const RendererDiagram = ({ content, className }: Props) => (
  <HeroDiagramShell
    a11yLabel={content.a11yFlow}
    className={className}
    gradient="radial-gradient(circle at 50% 0%, rgba(251,191,36,0.14), transparent 55%)"
  >
    <div className="relative flex flex-col items-center gap-md">
      <CenterReactDomCard center={content.centerCard} />

      <span
        aria-hidden="true"
        className="block w-px h-md border-l border-dashed border-[var(--term-border)]"
      />

      <ul className="grid w-full grid-cols-1 @sm:grid-cols-3 gap-sm items-stretch">
        {content.nodes.map((node) => (
          <li key={node.id} className="flex min-w-0">
            <OutputNodeCard node={node} />
          </li>
        ))}
      </ul>
    </div>
  </HeroDiagramShell>
);

const CenterReactDomCard = ({ center }: { center: ReactDomContent['hero']['centerCard'] }) => (
  <div
    className={cn(
      'relative flex flex-col items-center justify-center gap-1 overflow-hidden rounded-2xl border',
      'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-fg)]',
      'shadow-[0_3px_0_var(--term-border)] px-lg py-md min-w-[10rem]',
    )}
  >
    <span
      aria-hidden="true"
      className="absolute inset-0 -z-0 rounded-2xl opacity-70 bg-[radial-gradient(circle_at_50%_40%,rgba(251,191,36,0.18),transparent_60%)]"
    />
    <ReactAtomIcon className="relative h-10 w-10 text-[var(--term-accent)]" />
    <span className="relative text-lg font-bold font-mono tracking-tight text-[var(--term-accent)]">
      {center.title}
    </span>
    <span className="relative text-[10px] uppercase tracking-wider text-[var(--term-muted)]">
      {center.caption}
    </span>
  </div>
);

const OutputNodeCard = ({ node }: { node: HeroDiagramNode }) => {
  const tone = localTone(node.tone);
  const Icon = reactDomIcon[node.iconName];

  return (
    <article
      className={cn(
        'group flex min-w-0 flex-1 flex-col gap-2 rounded-xl border p-3',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)]',
        tone.borderHover,
        'transition-all hover:-translate-y-0.5',
      )}
    >
      <header className="flex min-w-0 items-center gap-2">
        <LocalToneIconBox tone={node.tone} size="sm">
          <Icon className="h-4 w-4" aria-hidden="true" />
        </LocalToneIconBox>
        <div className="flex min-w-0 flex-col">
          <h3 className={cn('text-sm font-bold font-mono tracking-tight break-keep', tone.text)}>
            {node.title}
          </h3>
          <span className="text-[10px] uppercase tracking-wider text-[var(--term-muted)]">
            {node.caption}
          </span>
        </div>
      </header>

      {node.code && (
        <pre className="overflow-x-auto rounded-md border border-dashed border-[var(--term-border)] bg-[var(--term-surface)] p-2 text-[10.5px] leading-snug font-mono text-[var(--term-fg)]">
          <code>{node.code}</code>
        </pre>
      )}

      <p className="text-[11px] leading-relaxed text-[var(--term-muted)] break-keep">
        {node.description}
      </p>
    </article>
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
