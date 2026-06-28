import { cn } from '@it-tech-blog/utils';

import { toneTokens } from '../../../shared/tones';
import { ArrowRightIcon, LinkIcon } from '../icons';

/** Connection diagram 전용: 가운데 alternate 핵심 카드 + 위/아래 화살표 */
export const VerticalAlternateLink = ({ label }: { label: string }) => (
  <div className="flex flex-col items-center justify-center gap-1" aria-hidden="true">
    <ArrowRightIcon className="h-4 w-4 rotate-[-90deg] text-[var(--term-accent)]" />
    <span
      className={cn(
        'inline-flex items-center justify-center gap-1.5 rounded-full border-2 px-3 py-1.5',
        'shadow-[0_2px_0_var(--term-border)]',
        toneTokens.sky.chip,
      )}
    >
      <LinkIcon className="h-4 w-4" />
      <code className="font-mono text-sm font-extrabold tracking-tight">{label}</code>
    </span>
    <ArrowRightIcon className="h-4 w-4 rotate-90 text-[var(--term-accent)]" />
  </div>
);
