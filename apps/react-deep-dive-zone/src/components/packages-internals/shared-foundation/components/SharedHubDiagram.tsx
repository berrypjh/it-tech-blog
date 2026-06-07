import { cn } from '@it-tech-blog/utils';

import { ToneIconBox } from '../../../shared/ToneIconBox';
import { toneTokens } from '../../../shared/tones';
import type { PackageNode, SharedContent } from '../content';
import { CheckCircleIcon, sharedIcon } from '../icons';

type Props = { hero: SharedContent['hero']; className?: string };

/**
 * Hero 우측 허브 다이어그램.
 * 중앙 shared 허브 → 점선 → shared를 함께 쓰는 패키지 3종(반응형 그리드) → 공통 항목 체크리스트.
 */
export const SharedHubDiagram = ({ hero, className }: Props) => (
  <div
    className={cn(
      '@container relative w-full overflow-hidden rounded-2xl border bg-[var(--term-bg)]',
      'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)] p-md sm:p-lg',
      className,
    )}
  >
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.14),transparent_55%)]"
    />
    <p className="sr-only">{hero.a11yDiagram}</p>

    <div className="relative flex flex-col items-center gap-md">
      <HubCenter label={hero.centerLabel} subtitle={hero.centerSubtitle} />

      <span
        aria-hidden="true"
        className="block h-md w-px border-l border-dashed border-cyan-400/70 dark:border-cyan-600/70"
      />

      {/* shared를 함께 쓰는 패키지 */}
      <ul className="grid w-full grid-cols-1 @sm:grid-cols-3 gap-sm items-stretch">
        {hero.packages.map((pkg) => (
          <li key={pkg.id} className="flex min-w-0">
            <PackageCardNode pkg={pkg} />
          </li>
        ))}
      </ul>

      {/* 공통 항목 체크리스트 */}
      <ul className="grid w-full grid-cols-1 @sm:grid-cols-2 gap-2">
        {hero.checklist.map((item) => (
          <li
            key={item}
            className={cn(
              'flex min-w-0 items-start gap-2 rounded-lg border px-3 py-2 text-xsm leading-snug',
              'bg-[var(--term-bg)] border-[var(--term-border)] text-[var(--term-fg)] break-keep',
            )}
          >
            <span aria-hidden="true" className="text-sky-600 dark:text-sky-300 shrink-0 mt-0.5">
              <CheckCircleIcon className="h-4 w-4" />
            </span>
            <span className="min-w-0">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const HubCenter = ({ label, subtitle }: { label: string; subtitle: string }) => (
  <div
    className={cn(
      'relative inline-flex flex-col items-center justify-center gap-1',
      'w-28 h-28 rounded-full overflow-hidden',
      'border-2 border-cyan-300/80 bg-cyan-50/80 text-cyan-900',
      'dark:border-cyan-700/60 dark:bg-cyan-950/40 dark:text-cyan-100',
      'shadow-[0_4px_0_var(--term-border)]',
    )}
    aria-hidden="true"
  >
    <span
      aria-hidden="true"
      className="absolute inset-0 -z-0 rounded-full opacity-70 bg-[radial-gradient(circle_at_50%_42%,rgba(34,211,238,0.25),transparent_60%)]"
    />
    <CubeIcon className="relative h-7 w-7 text-cyan-600 dark:text-cyan-300" />
    <span className="relative text-sm font-bold font-mono tracking-tight text-cyan-700 dark:text-cyan-200">
      {label}
    </span>
    <span className="relative text-[9px] uppercase tracking-wider text-cyan-700/80 dark:text-cyan-300/80 text-center px-1 break-keep">
      {subtitle}
    </span>
  </div>
);

const PackageCardNode = ({ pkg }: { pkg: PackageNode }) => {
  const tone = toneTokens[pkg.tone];
  const Icon = sharedIcon[pkg.iconName];

  return (
    <article
      className={cn(
        'group flex w-full min-w-0 flex-1 flex-col gap-1 rounded-xl border p-md',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        tone.border,
        tone.borderHover,
        'transition-all hover:-translate-y-0.5',
      )}
    >
      <span className="flex min-w-0 items-center gap-2">
        <ToneIconBox tone={pkg.tone} size="sm">
          <Icon className="h-4 w-4" aria-hidden="true" />
        </ToneIconBox>
        <span
          className={cn('min-w-0 truncate text-sm font-bold font-mono tracking-tight', tone.text)}
        >
          {pkg.name}
        </span>
      </span>
      <span className="min-w-0 text-[10px] uppercase tracking-wider text-[var(--term-muted)] break-keep">
        {pkg.subtitle}
      </span>
    </article>
  );
};

const CubeIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);
