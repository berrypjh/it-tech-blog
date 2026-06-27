import { cn } from '@it-tech-blog/utils';

import type { ToneKey } from '../../../shared/tones';
import { toneTokens } from '../../../shared/tones';
import type { DiagramStep, RvrIconName } from '../content';
import { rvrIcon } from '../icons';

type Props = {
  title: string;
  subtitle: string;
  steps: DiagramStep[];
  footerLabel: string;
  iconName: RvrIconName;
  /** reconciler는 페이지 chrome accent, renderer는 sky 톤을 쓴다. */
  tone?: ToneKey;
  className?: string;
};

/**
 * Hero 우측에서 사용하는 reconciler/renderer 단계 카드.
 * 제목 + 부제 + 3단계 pill + 하단 라벨로 구성된다.
 */
export const RoleStepsCard = ({
  title,
  subtitle,
  steps,
  footerLabel,
  iconName,
  tone,
  className,
}: Props) => {
  const text = tone ? toneTokens[tone].text : 'text-[var(--term-accent)]';
  const Icon = rvrIcon[iconName];

  return (
    <article
      className={cn(
        'group flex h-full flex-col gap-md rounded-2xl border p-md sm:p-lg',
        'bg-[var(--term-surface)] border-[var(--term-border)]',
        'shadow-[0_2px_0_var(--term-border)] transition-all hover:-translate-y-0.5',
        className,
      )}
    >
      <header className="flex items-center gap-sm">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-11 h-11 rounded-md border',
            'bg-[var(--term-surface)] border-[var(--term-border)]',
            text,
          )}
        >
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <div className="flex flex-col min-w-0">
          <h3 className={cn('text-md sm:text-lg font-bold tracking-tight', text)}>{title}</h3>
          <span className="text-[10px] uppercase tracking-wider text-[var(--term-muted)] font-mono">
            {subtitle}
          </span>
        </div>
      </header>

      <ol className="flex flex-col gap-sm">
        {steps.map((step, i) => (
          <li key={step.id} className="flex items-stretch gap-sm">
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex items-center justify-center w-7 h-7 rounded-full shrink-0 font-mono text-[11px] font-bold mt-0.5',
                'bg-[var(--term-bg)] border border-[var(--term-border)]',
                text,
              )}
            >
              {i + 1}
            </span>
            <div
              className={cn(
                'flex-1 rounded-lg border px-3 py-2 text-xsm leading-snug',
                'bg-[var(--term-bg)] border-[var(--term-border)] text-[var(--term-fg)] break-keep',
              )}
            >
              {step.label}
            </div>
          </li>
        ))}
      </ol>

      <p
        className={cn(
          'mt-auto rounded-lg border px-3 py-2 text-[11px] font-bold tracking-tight text-center',
          'border-dashed border-[var(--term-border)] bg-[var(--term-bg)]',
          text,
        )}
      >
        {footerLabel}
      </p>
    </article>
  );
};
