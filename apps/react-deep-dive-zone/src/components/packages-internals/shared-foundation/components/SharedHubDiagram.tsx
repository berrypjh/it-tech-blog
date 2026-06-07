import { cn } from '@it-tech-blog/utils';

import { ToneIconBox } from '../../../shared/ToneIconBox';
import { toneTokens } from '../../../shared/tones';
import type { PackageNode, SharedContent } from '../content';
import { CheckCircleIcon, sharedIcon } from '../icons';

type Props = { hero: SharedContent['hero']; className?: string };

/**
 * Hero 우측 허브 다이어그램.
 * 중앙 deep-navy shared 노드 + 좌상/우상/하단의 react·react-dom·react-reconciler 카드 + 점선 connector
 * + 우측에 공통 항목 체크 리스트.
 */
export const SharedHubDiagram = ({ hero, className }: Props) => {
  const [reactPkg, reactDom, reconciler] = hero.packages;
  return (
    <div
      className={cn(
        'relative w-full rounded-2xl border bg-[var(--term-bg)]',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'px-md py-lg sm:p-lg overflow-hidden',
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_40%_50%,rgba(56,189,248,0.16),transparent_55%)]"
      />
      <p className="sr-only">{hero.a11yDiagram}</p>

      <div className="relative grid grid-cols-1 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,_0.85fr)] gap-md">
        {/* Hub diagram */}
        <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-sm items-center min-h-[220px]">
          {/* 좌상단: react */}
          <div className="sm:col-start-1 sm:row-start-1 flex sm:justify-start">
            <PackageCardNode pkg={reactPkg} />
          </div>
          {/* 우상단: react-dom */}
          <div className="sm:col-start-3 sm:row-start-1 flex sm:justify-end">
            <PackageCardNode pkg={reactDom} />
          </div>
          {/* 중앙 hub */}
          <div className="sm:col-start-2 sm:row-start-1 sm:row-span-2 flex items-center justify-center order-first sm:order-none">
            {/* dashed connector */}
            <span
              aria-hidden="true"
              className="hidden sm:block pointer-events-none absolute inset-0"
            >
              <ConnectorLines />
            </span>
            <HubCenter label={hero.centerLabel} subtitle={hero.centerSubtitle} />
          </div>
          {/* 하단 center: react-reconciler */}
          <div className="sm:col-start-2 sm:row-start-2 flex justify-center sm:mt-md">
            <PackageCardNode pkg={reconciler} />
          </div>
        </div>

        {/* 체크 리스트 */}
        <ul className="flex flex-col gap-2 self-start lg:self-center">
          {hero.checklist.map((item) => (
            <li
              key={item}
              className={cn(
                'flex items-start gap-2 rounded-lg border px-3 py-2 text-xsm leading-snug',
                'bg-[var(--term-bg)] border-[var(--term-border)] text-[var(--term-fg)] break-keep',
              )}
            >
              <span aria-hidden="true" className="text-sky-600 dark:text-sky-300 shrink-0 mt-0.5">
                <CheckCircleIcon className="h-4 w-4" />
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const HubCenter = ({ label, subtitle }: { label: string; subtitle: string }) => (
  <div
    className={cn(
      'relative inline-flex flex-col items-center justify-center gap-1',
      'w-24 h-24 sm:w-28 sm:h-28 rounded-full',
      'border-2 border-slate-700 bg-slate-900 text-slate-100',
      'shadow-[0_4px_0_var(--term-border)] overflow-hidden',
    )}
    aria-hidden="true"
  >
    <span
      aria-hidden="true"
      className="absolute inset-0 -z-0 bg-[radial-gradient(circle_at_50%_45%,rgba(125,211,252,0.45),transparent_60%)]"
    />
    <CubeIcon className="relative h-7 w-7 text-cyan-300" />
    <span className="relative text-sm font-bold font-mono tracking-tight text-cyan-200">
      {label}
    </span>
    <span className="relative text-[9px] uppercase tracking-wider text-cyan-300/80 text-center px-1 break-keep">
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
        'group inline-flex flex-col gap-1 rounded-xl border p-md',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        tone.border,
        tone.borderHover,
        'transition-all hover:-translate-y-0.5',
        'w-full min-w-0 max-w-xs',
      )}
    >
      <span className="flex items-center gap-2 min-w-0">
        <ToneIconBox tone={pkg.tone} size="sm">
          <Icon className="h-4 w-4" aria-hidden="true" />
        </ToneIconBox>
        <span
          className={cn('text-sm font-bold font-mono tracking-tight truncate min-w-0', tone.text)}
        >
          {pkg.name}
        </span>
      </span>
      <span className="text-[10px] uppercase tracking-wider text-[var(--term-muted)] break-keep">
        {pkg.subtitle}
      </span>
    </article>
  );
};

const ConnectorLines = () => (
  <svg
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
    className="h-full w-full text-cyan-400/70 dark:text-cyan-600/70"
  >
    <path
      d="M 20 25 Q 50 50 50 50"
      stroke="currentColor"
      strokeWidth="1"
      strokeDasharray="3 4"
      fill="none"
    />
    <path
      d="M 80 25 Q 50 50 50 50"
      stroke="currentColor"
      strokeWidth="1"
      strokeDasharray="3 4"
      fill="none"
    />
    <path
      d="M 50 50 Q 50 70 50 80"
      stroke="currentColor"
      strokeWidth="1"
      strokeDasharray="3 4"
      fill="none"
    />
  </svg>
);

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
