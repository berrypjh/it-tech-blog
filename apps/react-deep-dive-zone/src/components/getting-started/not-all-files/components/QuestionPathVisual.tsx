import { cn } from '@it-tech-blog/utils';

import { HeroDiagramShell } from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/terminal';
import type { NotAllFilesContent } from '../content';
import { FileIcon, FolderOpenIcon } from '../icons';

type Props = { visual: NotAllFilesContent['hero']['visual'] };

/**
 * Hero 우측: 질문 중심 독해 경로 비주얼.
 * 구성:
 *  - 좌하: 겹쳐 쌓인 파일 카드 스택 (noise)
 *  - 그 위로 mint/teal 곡선 path: Start → 질문 → 핵심 경로 → Answer (signal)
 *  - 우상: facebook/react repository tree mini card (react-reconciler 강조)
 */
export const QuestionPathVisual = ({ visual }: Props) => {
  return (
    <HeroDiagramShell
      a11yLabel="흩어진 파일 더미에서 질문을 따라 핵심 경로로 이어지는 독해 경로 비주얼"
      className="min-h-[480px] sm:min-h-[520px] lg:min-h-[540px]"
    >
      {/* 미세한 grid */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none opacity-50"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern id="path-grid" x="0" y="0" width="22" height="22" patternUnits="userSpaceOnUse">
            <path
              d="M22 0H0v22"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-[var(--term-border)]"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#path-grid)" />
      </svg>

      {/* 상단 라벨 */}
      <div className="relative flex items-center justify-between mb-md">
        <TerminalBadge dotClassName="bg-[var(--term-accent)]">guided path</TerminalBadge>
        <span className="text-[10px] font-mono text-[var(--term-muted)]">
          {'//'} {visual.stackLabel}
        </span>
      </div>

      {/* 파일 카드 스택 (좌하단) — opacity 단계화 */}
      <div className="absolute inset-x-md bottom-12 sm:inset-x-lg sm:bottom-14 lg:left-lg lg:right-[44%] pointer-events-none">
        <ul className="relative h-[200px] sm:h-[230px]" aria-hidden="true">
          {visual.fileNames.map((name, i) => {
            const total = visual.fileNames.length;
            const offsetX = i * 8;
            const offsetY = i * 10;
            const opacity = 0.35 + (i / (total - 1)) * 0.55;
            const rotate = -3 + i * 1.1;
            return (
              <li
                key={name}
                className="absolute left-0 top-0 w-[88%] sm:w-[80%] rounded-md border border-[var(--term-border)] bg-white dark:bg-slate-900 px-2.5 py-1.5 shadow-[0_2px_0_var(--term-border)] flex items-center gap-1.5"
                style={{
                  transform: `translate(${offsetX}px, ${offsetY}px) rotate(${rotate}deg)`,
                  opacity,
                  zIndex: i,
                }}
              >
                <FileIcon className="h-3 w-3 text-[var(--term-dim)]" />
                <code className="text-[10px] sm:text-[11px] font-mono text-[var(--term-fg)] truncate">
                  {name}
                </code>
              </li>
            );
          })}
        </ul>
      </div>

      {/* 우상단: repo tree mini card */}
      <aside
        aria-label={visual.repoTitle}
        className="absolute top-12 right-md sm:right-lg w-[200px] sm:w-[220px] rounded-md border border-[var(--term-border)] bg-white dark:bg-slate-900 p-sm shadow-[0_2px_0_var(--term-border)]"
      >
        <header className="flex items-center gap-1.5 pb-1 mb-1 border-b border-dashed border-[var(--term-border)]">
          <FolderOpenIcon className="h-3.5 w-3.5 text-sky-600 dark:text-sky-300" />
          <span className="text-[10px] font-mono font-bold text-[var(--term-fg)] truncate">
            {visual.repoTitle}
          </span>
        </header>
        <ul className="flex flex-col gap-0.5">
          <li className="flex items-center gap-1 text-[10px] font-mono text-[var(--term-muted)] pl-1">
            <span className="text-[var(--term-dim)]">└─</span>
            <span>packages/</span>
          </li>
          {visual.repoPackages.map((p, i, arr) => {
            const isLast = i === arr.length - 1;
            return (
              <li
                key={p.name}
                className={cn(
                  'flex items-center gap-1 text-[10px] font-mono pl-4 py-0.5 rounded',
                  p.active
                    ? 'bg-[var(--term-surface)] text-[var(--term-accent)] font-bold'
                    : 'text-[var(--term-muted)]',
                )}
              >
                <span className="text-[var(--term-dim)]">{isLast ? '└─' : '├─'}</span>
                <span>{p.name}</span>
                {p.active && (
                  <span
                    aria-hidden="true"
                    className="ml-auto inline-block w-1.5 h-1.5 rounded-full bg-[var(--term-accent)]"
                  />
                )}
              </li>
            );
          })}
        </ul>
      </aside>

      {/* 곡선 path SVG + path labels overlay */}
      <svg
        aria-hidden="true"
        viewBox="0 0 400 400"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full pointer-events-none"
      >
        <defs>
          <linearGradient id="path-line" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stopColor="currentColor" className="text-[var(--term-accent)]" />
            <stop offset="1" stopColor="currentColor" className="text-[var(--term-accent)]" />
          </linearGradient>
        </defs>
        {/* Start(좌하단) → 질문 → 핵심경로 → Answer(우상단) 곡선 */}
        <path
          d="M40 340 C 100 280, 140 230, 200 200 S 320 100, 360 70"
          fill="none"
          stroke="url(#path-line)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* 화살촉 (Answer 방향) */}
        <path
          d="m352 76 12-8-4 14"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-[var(--term-accent)]"
        />
        {/* path nodes (4개) */}
        <circle cx="40" cy="340" r="5" className="fill-[var(--term-accent)]" />
        <circle cx="40" cy="340" r="8" className="fill-[var(--term-accent)]" opacity="0.6" />
        <circle cx="140" cy="232" r="5" className="fill-[var(--term-accent)]" />
        <circle cx="240" cy="160" r="5" className="fill-[var(--term-accent)]" />
        <circle cx="360" cy="70" r="6" className="fill-[var(--term-accent)]" />
        <circle cx="360" cy="70" r="10" className="fill-[var(--term-accent)]" opacity="0.5" />
      </svg>

      {/* path labels — 절대 위치 카드 */}
      <span
        aria-hidden="true"
        className="absolute top-[80%] left-[14%] -translate-x-1/2 -translate-y-1/2 inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white dark:bg-slate-900 border border-[var(--term-border)] text-[10px] font-bold text-[var(--term-accent)] shadow-[0_2px_0_var(--term-border)]"
      >
        <span className="inline-block w-1 h-1 rounded-full bg-[var(--term-accent)]" />
        {visual.pathLabels.start}
      </span>
      <span
        aria-hidden="true"
        className="absolute top-[58%] left-[40%] -translate-x-1/2 -translate-y-1/2 inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white dark:bg-slate-900 border border-sky-300 dark:border-sky-700 text-[10px] font-bold text-sky-700 dark:text-sky-200 shadow-[0_2px_0_var(--term-border)]"
      >
        <span className="inline-block w-1 h-1 rounded-full bg-sky-500" />
        {visual.pathLabels.question}
      </span>
      <span
        aria-hidden="true"
        className="absolute top-[40%] left-[62%] -translate-x-1/2 -translate-y-1/2 inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white dark:bg-slate-900 border border-violet-300 dark:border-violet-700 text-[10px] font-bold text-violet-700 dark:text-violet-200 shadow-[0_2px_0_var(--term-border)]"
      >
        <span className="inline-block w-1 h-1 rounded-full bg-violet-500" />
        {visual.pathLabels.corePath}
      </span>
      <span
        aria-hidden="true"
        className="absolute top-[18%] left-[88%] -translate-x-1/2 -translate-y-1/2 inline-flex items-center gap-1 px-2 py-1 rounded-full bg-[var(--term-surface)] text-[var(--term-accent)] border border-[var(--term-border)] text-[10px] font-bold shadow-[0_2px_0_var(--term-border)]"
      >
        <span className="inline-block w-1 h-1 rounded-full bg-[var(--term-accent)]" />
        {visual.pathLabels.answer}
      </span>

      {/* 하단 보조 라벨 */}
      <p className="absolute bottom-2 left-md right-md text-center text-[10px] text-[var(--term-muted)]">
        {'//'} from noise to a single guided path
      </p>
    </HeroDiagramShell>
  );
};
