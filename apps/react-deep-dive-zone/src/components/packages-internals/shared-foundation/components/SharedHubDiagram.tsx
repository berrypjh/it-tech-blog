import { cx } from '@berrypjh/react-ui';
import { Atom, Boxes, CheckCircle2, Code, type LucideIcon, Package } from 'lucide-react';

import { HeroDiagramShell } from '../../../shared/hero';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { PackageNode, SharedContent } from '../content';

type Props = { hero: SharedContent['hero'] };

const packageIcon: Record<PackageNode['id'], LucideIcon> = {
  react: Atom,
  'react-dom': Boxes,
  'react-reconciler': Code,
};

/**
 * Hero 우측 허브 다이어그램.
 * 중앙 shared 허브 → 점선 → shared를 함께 쓰는 패키지 3종(반응형 그리드) → 공통 항목 체크리스트.
 */
export const SharedHubDiagram = ({ hero }: Props) => (
  <HeroDiagramShell
    a11yLabel={hero.a11yDiagram}
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
            className={cx(
              'flex min-w-0 items-start gap-2 rounded-lg border px-3 py-2 text-xsm leading-snug',
              'bg-[var(--term-bg)] border-[var(--term-border)] text-[var(--term-fg)] break-keep',
            )}
          >
            <span aria-hidden="true" className="text-[var(--term-accent)] shrink-0 mt-0.5">
              <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
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
    className={cx(
      'relative inline-flex flex-col items-center justify-center gap-1',
      'w-28 h-28 rounded-full overflow-hidden',
      'border-2 border-[var(--term-border)] bg-[var(--term-surface)]',
      'shadow-[0_4px_0_var(--term-border)]',
    )}
    aria-hidden="true"
  >
    <Package
      strokeWidth={1.6}
      aria-hidden="true"
      className="relative h-7 w-7 text-[var(--term-accent)]"
    />
    <span className="relative text-sm font-bold font-mono tracking-tight text-[var(--term-accent)]">
      {label}
    </span>
    <span className="relative text-[9px] uppercase tracking-wider text-[var(--term-muted)] text-center px-1 break-keep">
      {subtitle}
    </span>
  </div>
);

const PackageCardNode = ({ pkg }: { pkg: PackageNode }) => {
  const tone = toneTokens[pkg.tone];
  const Icon = packageIcon[pkg.id];

  return (
    <article
      className={cx(
        'group flex w-full min-w-0 flex-1 flex-col gap-1 rounded-xl border p-md',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
      )}
    >
      <span className="flex min-w-0 items-center gap-2">
        <ToneIconBox tone={pkg.tone} size="sm" className="shrink-0">
          <Icon className="h-4 w-4" aria-hidden="true" />
        </ToneIconBox>
        <span
          className={cx('min-w-0 truncate text-sm font-bold font-mono tracking-tight', tone.text)}
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
