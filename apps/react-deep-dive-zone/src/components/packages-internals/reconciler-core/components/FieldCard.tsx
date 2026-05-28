import { cn } from '@it-tech-blog/utils';

import { ToneIconBox } from '../../../shared/ToneIconBox';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { CodeField, ReconcilerIconName } from '../content';
import { reconcilerIcon } from '../icons';

type Props = {
  title: string;
  subtitle: string;
  fields: CodeField[];
  iconName: ReconcilerIconName;
  tone: ToneKey;
  /** 더 큰 강조용 */
  emphasized?: boolean;
  className?: string;
};

/**
 * Element / Fiber 카드 — 필드 목록을 code-like 박스로 보여준다.
 * Hero와 ElementFiber 시각화 섹션에서 공통으로 사용한다.
 */
export const FieldCard = ({
  title,
  subtitle,
  fields,
  iconName,
  tone,
  emphasized = false,
  className,
}: Props) => {
  const t = toneTokens[tone];
  const Icon = reconcilerIcon[iconName];

  return (
    <article
      className={cn(
        'group flex h-full flex-col gap-sm rounded-2xl border p-md',
        'shadow-[0_2px_0_var(--term-border)]',
        emphasized ? t.chip : 'bg-[var(--term-bg)] border-[var(--term-border)]',
        t.borderHover,
        emphasized && t.border,
        'transition-all hover:-translate-y-0.5',
        className,
      )}
    >
      <header className="flex items-center gap-sm">
        <ToneIconBox tone={tone} size="sm">
          <Icon className="h-4 w-4" aria-hidden="true" />
        </ToneIconBox>
        <div className="flex flex-col min-w-0">
          <h3 className={cn('text-sm font-bold font-mono tracking-tight truncate', t.text)}>
            {title}
          </h3>
          <span className="text-[10px] uppercase tracking-wider text-[var(--term-muted)]">
            {subtitle}
          </span>
        </div>
      </header>

      <ul
        className={cn(
          'flex flex-col gap-0.5 rounded-lg border px-3 py-2 font-mono text-[11px] leading-snug',
          'border-dashed border-[var(--term-border)] bg-[var(--term-surface)]',
        )}
      >
        {fields.map((field, i) => (
          <li key={`${field.name}-${i}`} className="flex items-baseline gap-1.5 break-all">
            <span className={cn('shrink-0', t.text)}>{field.name}</span>
            {field.value && (
              <>
                <span className="text-[var(--term-dim)]">:</span>
                <span className="text-[var(--term-fg)]">{field.value}</span>
              </>
            )}
          </li>
        ))}
      </ul>
    </article>
  );
};
