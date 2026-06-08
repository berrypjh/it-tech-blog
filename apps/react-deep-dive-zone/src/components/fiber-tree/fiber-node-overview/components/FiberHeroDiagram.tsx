import { cn } from '@it-tech-blog/utils';

import { ToneIconBox } from '../../../shared/ToneIconBox';
import { toneTokens } from '../../../shared/tones';
import type { FiberNodeOverviewContent, HeroFieldGroup } from '../content';
import {
  DatabaseIcon,
  FingerprintIcon,
  FlagIcon,
  LayersIcon,
  NetworkIcon,
  ZapIcon,
} from '../icons';

type Props = { content: FiberNodeOverviewContent['hero']; className?: string };

const iconMap = {
  fingerprint: FingerprintIcon,
  network: NetworkIcon,
  database: DatabaseIcon,
  flag: FlagIcon,
  zap: ZapIcon,
  layers: LayersIcon,
} as const;

/**
 * Hero 핵심 비주얼.
 * 하나의 Fiber 객체가 정체성·트리 연결·입력/상태·변경 표시·스케줄링·이중 트리까지
 * 여러 필드 그룹을 한 몸에 품는다는 점을, 객체 헤더 → 필드 그룹 카드로 보여준다.
 */
export const FiberHeroDiagram = ({ content, className }: Props) => {
  const a11y = `${content.cardTitle}: ${content.groups
    .map((g) => `${g.title}(${g.fields.join(', ')})`)
    .join('; ')}`;

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
        <header className="flex items-center gap-sm">
          <ToneIconBox tone="teal" size="sm">
            <LayersIcon className="h-[18px] w-[18px]" />
          </ToneIconBox>
          <span className="font-mono text-sm font-bold tracking-tight text-[var(--term-fg)]">
            {content.cardTitle}
          </span>
          <span className="ml-auto shrink-0 rounded-md border border-[var(--term-border)] px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
            {content.cardLabel}
          </span>
        </header>

        <DownArrow />

        <ol className="grid grid-cols-1 gap-sm @sm:grid-cols-2">
          {content.groups.map((group) => (
            <li key={group.id}>
              <GroupCard group={group} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

const GroupCard = ({ group }: { group: HeroFieldGroup }) => {
  const t = toneTokens[group.tone];
  const Icon = iconMap[group.iconName];
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-2 rounded-xl border bg-[var(--term-bg)] p-md',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
        t.borderHover,
      )}
    >
      <header className="flex items-center gap-sm">
        <ToneIconBox tone={group.tone} size="sm">
          <Icon className="h-4 w-4" />
        </ToneIconBox>
        <h3 className={cn('text-xsm font-bold tracking-tight', t.text)}>{group.title}</h3>
      </header>
      <ul className="flex flex-wrap gap-1">
        {group.fields.map((f) => (
          <li
            key={f}
            className="rounded-md border border-[var(--term-border)] bg-[var(--term-bg)] px-1.5 py-0.5 font-mono text-[11px] leading-none text-[var(--term-muted)]"
          >
            {f}
          </li>
        ))}
      </ul>
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
