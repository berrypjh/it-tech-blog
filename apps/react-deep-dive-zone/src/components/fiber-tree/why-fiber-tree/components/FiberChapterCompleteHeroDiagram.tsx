import { cn } from '@it-tech-blog/utils';

import { HeroDiagramShell } from '../../../shared/hero';
import { DownArrow } from '../../../shared/icon';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { FiberCentralContent, FieldGroup } from '../content';
import { DatabaseIcon, FingerprintIcon, FlagIcon, ListIcon, NetworkIcon, ZapIcon } from '../icons';

type Props = {
  content: FiberCentralContent['hero'];
  groups: FieldGroup[];
  className?: string;
};

const iconMap = {
  fingerprint: FingerprintIcon,
  network: NetworkIcon,
  database: DatabaseIcon,
  list: ListIcon,
  flag: FlagIcon,
  zap: ZapIcon,
} as const;

/**
 * Hero 핵심 비주얼.
 * 챕터에서 다룬 Fiber 필드 그룹(정체성 → 연결 → 입력 → 상태/큐 → 변경표시 → 스케줄링)을
 * 위에서 아래로 잇는 컴팩트 stepper. 모든 그룹이 하나의 Fiber 객체로 모인다.
 */
export const FiberChapterCompleteHeroDiagram = ({ content, groups, className }: Props) => {
  const byId = Object.fromEntries(groups.map((g) => [g.id, g]));
  const a11y = `${content.fiberLabel} 객체는 ${groups
    .map((g) => g.title)
    .join(', ')} 그룹의 필드를 하나의 노드에 모읍니다.`;

  return (
    <HeroDiagramShell a11yLabel={a11y} className={className}>
      <h3 className="mb-sm text-xsm font-mono uppercase tracking-wider text-[var(--term-muted)]">
        {`// ${content.visualTitle}`}
      </h3>

      <ol className="relative flex flex-col gap-sm" aria-hidden="true">
        {content.fiberGroupFields.map((block) => (
          <li key={block.id} className="flex flex-col gap-sm">
            <GroupCard group={byId[block.id]} rows={block.rows} />
            <DownArrow />
          </li>
        ))}

        <li>
          <FiberCard label={content.fiberLabel} />
        </li>
      </ol>
    </HeroDiagramShell>
  );
};

const GroupCard = ({ group, rows }: { group: FieldGroup; rows: string[] }) => {
  const t = toneTokens[group.tone];
  const Icon = iconMap[group.iconName];
  return (
    <article
      className={cn(
        'flex w-full min-w-0 flex-col gap-1.5 rounded-xl border px-md py-2.5',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)] transition-all hover:-translate-y-0.5',
        'border-[var(--term-border)]',
        t.borderHover,
      )}
    >
      <span className="flex min-w-0 items-center gap-2">
        <ToneIconBox tone={group.tone} size="sm">
          <Icon className="h-4 w-4" aria-hidden="true" />
        </ToneIconBox>
        <span className={cn('min-w-0 truncate text-sm font-bold tracking-tight', t.text)}>
          {group.title}
        </span>
      </span>
      <code className="min-w-0 break-all text-[11px] font-mono leading-snug text-[var(--term-muted)]">
        {rows.join(' / ')}
      </code>
    </article>
  );
};

const FiberCard = ({ label }: { label: string }) => {
  const t = toneTokens.teal;
  return (
    <article
      className={cn(
        'flex w-full items-center justify-center gap-2 rounded-xl border px-md py-3',
        t.chip,
        t.border,
        'shadow-[0_3px_0_var(--term-border)]',
      )}
    >
      <span className={cn('font-mono text-sm font-bold tracking-tight', t.text)}>{label}</span>
      <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
        object
      </span>
    </article>
  );
};
