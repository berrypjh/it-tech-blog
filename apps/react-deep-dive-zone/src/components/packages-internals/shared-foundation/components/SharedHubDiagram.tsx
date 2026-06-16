import { cn } from '@it-tech-blog/utils';

import { HeroDiagramShell } from '../../../shared/HeroDiagramShell';
import type { PackageNode, SharedContent } from '../content';
import { CheckCircleIcon, sharedIcon } from '../icons';
import { accentText, neutralChrome, toneAccent } from '../localTone';

type Props = { hero: SharedContent['hero']; className?: string };

/**
 * Hero 우측 허브 다이어그램.
 * 중앙 shared 허브 → 점선 → shared를 함께 쓰는 패키지 3종(반응형 그리드) → 공통 항목 체크리스트.
 */
export const SharedHubDiagram = ({ hero, className }: Props) => (
  <HeroDiagramShell
    a11yLabel={hero.a11yDiagram}
    className={className}
    gradient="radial-gradient(circle at 50% 0%, rgba(245,158,11,0.12), transparent 55%)"
  >
    <div className="relative flex flex-col items-center gap-md">
      <HubCenter label={hero.centerLabel} subtitle={hero.centerSubtitle} />

      <span
        aria-hidden="true"
        className="block h-md w-px border-l border-dashed border-[var(--term-border)]"
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
            <span aria-hidden="true" className="text-[var(--term-accent)] shrink-0 mt-0.5">
              <CheckCircleIcon className="h-4 w-4" />
            </span>
            <span className="min-w-0">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </HeroDiagramShell>
);

const HubCenter = ({ label, subtitle }: { label: string; subtitle: string }) => (
  <div
    className={cn(
      'relative inline-flex flex-col items-center justify-center gap-1',
      'w-28 h-28 rounded-full overflow-hidden',
      'border-2 border-[var(--term-border)] bg-[var(--term-surface)]',
      'shadow-[0_4px_0_var(--term-border)]',
    )}
    aria-hidden="true"
  >
    <CubeIcon className="relative h-7 w-7 text-[var(--term-accent)]" />
    <span className="relative text-sm font-bold font-mono tracking-tight text-[var(--term-accent)]">
      {label}
    </span>
    <span className="relative text-[9px] uppercase tracking-wider text-[var(--term-muted)] text-center px-1 break-keep">
      {subtitle}
    </span>
  </div>
);

const PackageCardNode = ({ pkg }: { pkg: PackageNode }) => {
  const accent = accentText[toneAccent(pkg.tone)];
  const Icon = sharedIcon[pkg.iconName];

  return (
    <article
      className={cn(
        'group flex w-full min-w-0 flex-1 flex-col gap-1 rounded-xl border p-md',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)] hover:border-[var(--term-accent)]',
        'transition-all hover:-translate-y-0.5',
      )}
    >
      <span className="flex min-w-0 items-center gap-2">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-9 h-9 rounded-md shrink-0',
            neutralChrome,
            accent,
          )}
        >
          <Icon className="h-4 w-4" aria-hidden="true" />
        </span>
        <span className={cn('min-w-0 truncate text-sm font-bold font-mono tracking-tight', accent)}>
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
