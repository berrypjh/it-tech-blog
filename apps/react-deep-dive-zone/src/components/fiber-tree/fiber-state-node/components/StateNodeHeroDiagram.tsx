import { cn } from '@it-tech-blog/utils';

import { ToneIconBox } from '../../../shared/ToneIconBox';
import { toneTokens } from '../../../shared/tones';
import type { FiberStateNodeContent, TargetCard } from '../content';
import { BoxesIcon, HomeIcon, UserIcon } from '../icons';

type Props = { content: FiberStateNodeContent['hero']; className?: string };

const iconMap = { home: HomeIcon, cube: BoxesIcon, user: UserIcon } as const;

/**
 * Hero 핵심 비주얼.
 * Fiber 객체의 stateNode 필드가 fiber tag별로 어떤 외부 대상
 * (Root 객체 / Host Instance / Class Instance)을 가리키는지
 * fiber tag → accent ↓ → stateNode target 흐름으로 잇는 컴팩트 다이어그램.
 */
export const StateNodeHeroDiagram = ({ content, className }: Props) => {
  const a11y = `${content.cardLabel}의 ${content.pillLabel} 필드는 fiber tag에 따라 ${content.targets
    .map((t) => `${t.subtitle} → ${t.title}`)
    .join(', ')}로 연결됩니다.`;

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
    </div>
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
          className={cn(
            'rounded-md border px-2 py-0.5 font-mono text-[11px]',
            field.isStateNode
              ? cn(toneTokens.emerald.chip, 'font-bold')
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
  const Icon = iconMap[target.iconName];
  return (
    <article
      className={cn(
        'flex items-center gap-sm rounded-xl border bg-[var(--term-bg)] p-sm',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
        t.borderHover,
      )}
    >
      <ToneIconBox tone={target.tone} size="sm">
        <Icon className="h-4 w-4" aria-hidden="true" />
      </ToneIconBox>
      <div className="flex min-w-0 flex-col gap-0.5">
        <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
          {target.subtitle}
        </span>
        <span className={cn('text-sm font-bold tracking-tight', t.text)}>{target.title}</span>
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
