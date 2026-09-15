import { cx } from '@berrypjh/react-ui';
import { ArrowRight, Link } from 'lucide-react';

import { toneTokens } from '../../../shared/tones';

/** Connection diagram 전용: 가운데 alternate 핵심 카드 + 위/아래 화살표 */
export const VerticalAlternateLink = ({ label }: { label: string }) => (
  <div className="flex flex-col items-center justify-center gap-1" aria-hidden="true">
    <ArrowRight className="h-4 w-4 rotate-[-90deg] text-[var(--term-accent)]" aria-hidden="true" />
    <span
      className={cx(
        'inline-flex items-center justify-center gap-1.5 rounded-full border-2 px-3 py-1.5',
        'shadow-[0_2px_0_var(--term-border)]',
        toneTokens.sky.chip,
      )}
    >
      <Link className="h-4 w-4" aria-hidden="true" />
      <code className="font-mono text-sm font-extrabold tracking-tight">{label}</code>
    </span>
    <ArrowRight className="h-4 w-4 rotate-90 text-[var(--term-accent)]" aria-hidden="true" />
  </div>
);
