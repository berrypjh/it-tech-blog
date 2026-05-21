import { cn } from '@it-tech-blog/utils';

import { type ToneKey, toneTokens } from '../../../start/_shared/tones';

type Props = {
  label: string;
  tone?: ToneKey;
  /** core: 강조 / secondary: 채도 낮춤 / muted: 가장 흐림 */
  emphasis?: 'core' | 'secondary' | 'muted';
  icon?: React.ReactNode;
  className?: string;
};

export const PackagePill = ({ label, tone, emphasis = 'core', icon, className }: Props) => {
  const t = tone ? toneTokens[tone] : null;

  const variantClass =
    emphasis === 'core'
      ? cn(
          'shadow-[0_2px_0_var(--term-border)] font-bold text-[var(--term-fg)]',
          t ? t.border : 'border-[var(--term-border)]',
          t ? t.chip : 'bg-[var(--term-surface)]',
        )
      : emphasis === 'secondary'
        ? 'border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-muted)] font-medium'
        : 'border-dashed border-[var(--term-border)] bg-transparent text-[var(--term-dim)] font-normal';

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xsm tracking-tight font-mono',
        variantClass,
        className,
      )}
    >
      {icon && (
        <span aria-hidden="true" className={cn('shrink-0', t?.text)}>
          {icon}
        </span>
      )}
      {label}
    </span>
  );
};
