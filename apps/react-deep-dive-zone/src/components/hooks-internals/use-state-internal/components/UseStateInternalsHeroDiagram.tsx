import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { ToneIconBox } from '../../../shared/ToneIconBox';
import { toneTokens } from '../../../shared/tones';
import type { Piece, UseStateInternalsContent } from '../content';
import { CpuIcon, DatabaseIcon, FunctionSquareIcon, SettingsIcon } from '../icons';

type Props = { content: UseStateInternalsContent['hero']; className?: string };

const pieceIconMap = {
  number: DatabaseIcon,
  fn: FunctionSquareIcon,
  queue: CpuIcon,
  init: SettingsIcon,
} as const;

/**
 * Hero 핵심 비주얼.
 * 내가 쓰는 한 줄(useState 호출)이 React 내부에서 상태값·dispatch·queue·초기화 로직으로
 * 분해되는 모습을, 코드 → 화살표 → 조각 카드 목록으로 컴팩트하게 보여준다.
 */
export const UseStateInternalsHeroDiagram = ({ content, className }: Props) => {
  const a11y = `${content.diagramSubtitle}: ${content.pieces
    .map((p) => `${p.title}(${p.label})`)
    .join(', ')}`;

  return (
    <div
      className={cn(
        '@container relative w-full overflow-hidden rounded-2xl border bg-[var(--term-bg)]',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)] p-md sm:p-lg',
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(45,212,191,0.12),transparent_55%)]"
      />
      <p className="sr-only">{a11y}</p>

      <div className="relative flex flex-col gap-sm" aria-hidden="true">
        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]">
          {content.diagramTitle}
        </span>

        <CodePreviewPanel code={content.diagramCode} showWindowDots language="JS" size="md" />

        <DownArrow />

        <p className="text-center text-xsm font-bold text-[var(--term-fg)] break-keep">
          {content.diagramSubtitle}
        </p>

        <ol className="grid grid-cols-1 gap-sm @sm:grid-cols-2">
          {content.pieces.map((piece) => (
            <li key={piece.title}>
              <PieceCard piece={piece} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

const PieceCard = ({ piece }: { piece: Piece }) => {
  const t = toneTokens[piece.tone];
  const Icon = pieceIconMap[piece.visual];
  return (
    <article
      className={cn(
        'flex h-full items-center gap-sm rounded-xl border bg-[var(--term-bg)] px-md py-2.5',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
        t.borderHover,
      )}
    >
      <ToneIconBox tone={piece.tone} size="sm">
        <Icon className="h-4 w-4" aria-hidden="true" />
      </ToneIconBox>
      <div className="flex min-w-0 flex-col">
        <span className={cn('text-sm font-bold tracking-tight break-keep', t.text)}>
          {piece.title}
        </span>
        <code className="font-mono text-[11px] leading-none text-[var(--term-muted)] break-all">
          {piece.label}
        </code>
      </div>
    </article>
  );
};

const DownArrow = () => (
  <span
    aria-hidden="true"
    className="inline-flex items-center justify-center text-[var(--term-accent)] text-lg leading-none"
  >
    ↓
  </span>
);
