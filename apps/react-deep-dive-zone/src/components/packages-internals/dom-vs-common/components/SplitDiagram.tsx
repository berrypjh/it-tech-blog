import { cn } from '@it-tech-blog/utils';

import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { DvcContent, HeroSideArea } from '../content';
import { dvcIcon } from '../icons';

type Props = { hero: DvcContent['hero']; className?: string };

/**
 * Hero 우측 다이어그램.
 * 공통 렌더링 구조(teal) | DOM 전용 구현(violet) 두 영역을 중앙 분리선으로 나눈다.
 */
export const SplitDiagram = ({ hero, className }: Props) => {
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
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_45%,rgba(45,212,191,0.15),transparent_55%),radial-gradient(circle_at_82%_45%,rgba(167,139,250,0.16),transparent_55%)]"
      />
      <p className="sr-only">{hero.a11y}</p>

      <div className="relative grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-stretch gap-md">
        <SideArea area={hero.common} tone="teal" />
        {/* 중앙 세로 분리선 — 모바일에서는 dashed 가로 separator */}
        <div className="hidden md:flex flex-col items-center justify-center" aria-hidden="true">
          <span className="block w-px h-full border-l border-dashed border-[var(--term-border)]" />
        </div>
        <hr
          aria-hidden="true"
          className="md:hidden border-t border-dashed border-[var(--term-border)]"
        />
        <SideArea area={hero.domSpecific} tone="violet" />
      </div>
    </div>
  );
};

const SideArea = ({ area, tone }: { area: HeroSideArea; tone: ToneKey }) => {
  const t = toneTokens[tone];
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-md rounded-xl border p-md',
        t.chip,
        t.border,
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <header className="flex flex-col gap-1">
        <h3 className={cn('text-md font-bold tracking-tight', t.text)}>{area.title}</h3>
        <span className="text-[10px] uppercase tracking-wider text-[var(--term-muted)] font-bold font-mono">
          {area.subtitle}
        </span>
      </header>

      <ul className="flex flex-wrap gap-1.5">
        {area.items.map((item) => {
          const Icon = dvcIcon[item.iconName];
          return (
            <li key={item.id}>
              <span
                className={cn(
                  'inline-flex items-center gap-1.5 rounded-full border px-2 py-1 text-[11px] font-mono font-bold',
                  'bg-[var(--term-bg)]',
                  t.border,
                  t.text,
                )}
              >
                <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                {item.label}
              </span>
            </li>
          );
        })}
      </ul>

      <p
        className={cn(
          'mt-auto rounded-lg border px-3 py-2 text-[11px] font-bold tracking-tight text-center',
          'border-dashed border-[var(--term-border)] bg-[var(--term-bg)]',
          t.text,
        )}
      >
        {area.bottomLabel}
      </p>
    </article>
  );
};
