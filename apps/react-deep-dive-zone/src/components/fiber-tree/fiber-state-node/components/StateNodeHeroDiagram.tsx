import { cx } from '@berrypjh/react-ui';
import { Boxes, Home, type LucideIcon, User } from 'lucide-react';

import { HeroDiagramShell } from '../../../shared/hero';
import { DownArrow } from '../../../shared/icon';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { FiberKind, FiberStateNodeContent, TargetCard } from '../content';

type Props = { content: FiberStateNodeContent['hero'] };

const targetIcon: Record<FiberKind, LucideIcon> = {
  hostRoot: Home,
  hostComponent: Boxes,
  classComponent: User,
};

/**
 * Hero 핵심 비주얼.
 * Fiber 객체의 stateNode 필드가 fiber tag별로 어떤 외부 대상
 * (Root 객체 / Host Instance / Class Instance)을 가리키는지
 * fiber tag → accent ↓ → stateNode target 흐름으로 잇는 컴팩트 다이어그램.
 */
export const StateNodeHeroDiagram = ({ content }: Props) => {
  const a11y = `${content.cardLabel}.${content.pillLabel}: ${content.targets.map((t) => `${t.subtitle} → ${t.title}`).join(', ')}`;

  return (
    <HeroDiagramShell a11yLabel={a11y}>
      <div className="relative flex flex-col gap-sm" aria-hidden="true">
        <FiberCard
          label={content.cardLabel}
          fields={content.fiberFields}
          pill={content.pillLabel}
        />

        <DownArrow />

        <ol className="flex flex-col gap-sm">
          {content.targets.map((target, i) => (
            <li key={target.id} className="flex flex-col gap-sm">
              <TargetRow target={target} />
              {i < content.targets.length - 1 && <DownArrow />}
            </li>
          ))}
        </ol>
      </div>
    </HeroDiagramShell>
  );
};

const FiberCard = ({
  label,
  fields,
  pill,
}: {
  label: string;
  fields: FiberStateNodeContent['hero']['fiberFields'];
  pill: string;
}) => (
  <article className="rounded-xl border border-[var(--term-border)] bg-[var(--term-bg)] p-md shadow-[0_2px_0_var(--term-border)]">
    <header className="mb-2 flex items-center gap-sm">
      <span className="font-mono text-sm font-bold tracking-tight text-[var(--term-fg)]">
        {label}
      </span>
      <span className="ml-auto shrink-0 text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
        object
      </span>
    </header>
    <ul className="flex flex-wrap gap-1.5">
      {fields.map((field, i) => (
        <li
          key={`${field.label}-${i}`}
          className={cx(
            'rounded-md border px-2 py-0.5 font-mono text-[11px]',
            field.isStateNode
              ? cx(toneTokens.emerald.chip, 'font-bold')
              : 'border-[var(--term-border)] text-[var(--term-muted)]',
          )}
        >
          {field.label}
          {field.isStateNode && <span className="ml-1 not-italic">= {pill}</span>}
        </li>
      ))}
    </ul>
  </article>
);

const TargetRow = ({ target }: { target: TargetCard }) => {
  const t = toneTokens[target.tone];
  const Icon = targetIcon[target.id];
  return (
    <article
      className={cx(
        'flex items-center gap-sm rounded-xl border bg-[var(--term-bg)] p-sm',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
      )}
    >
      <ToneIconBox tone={target.tone} size="sm">
        <Icon className="h-4 w-4" aria-hidden="true" />
      </ToneIconBox>
      <div className="flex min-w-0 flex-col gap-0.5">
        <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
          {target.subtitle}
        </span>
        <span className={cx('text-sm font-bold tracking-tight', t.text)}>{target.title}</span>
      </div>
    </article>
  );
};
