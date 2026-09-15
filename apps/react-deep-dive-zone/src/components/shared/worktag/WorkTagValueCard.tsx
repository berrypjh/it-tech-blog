import { cx } from '@berrypjh/react-ui';
import type { ReactNode } from 'react';

import { ToneIconBox } from '../tone';
import { type ToneKey, toneTokens } from '../tones';

type Props = {
  tone: ToneKey;
  /** 제목 옆 아이콘(`h-5 w-5` 크기로 전달). */
  icon: ReactNode;
  title: string;
  /** 제목 아래 보조 식별자 (예: REACT_FRAGMENT_TYPE). */
  subtitle?: string;
  value: string;
  description?: string;
};

/** Fiber 종류와 Work Tag 숫자를 짝지어 보여주는 카드. */
export const WorkTagValueCard = ({ tone, icon, title, subtitle, value, description }: Props) => {
  const t = toneTokens[tone];
  return (
    <article
      className={cx(
        'group flex flex-1 flex-col gap-md rounded-2xl border-2 p-md sm:p-lg',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
        t.fill.border,
      )}
    >
      <header className="flex items-center gap-sm">
        <ToneIconBox tone={tone} size="md">
          {icon}
        </ToneIconBox>
        <div className="flex flex-col min-w-0">
          <code
            className={cx('font-mono text-sm sm:text-md font-extrabold tracking-tight', t.text)}
          >
            {title}
          </code>
          {subtitle && <code className={cx('font-mono text-[11px]', t.text)}>{subtitle}</code>}
        </div>
      </header>

      <div
        className={cx(
          'flex items-center justify-between gap-sm rounded-xl border-2 p-md',
          t.fill.bg,
          t.fill.border,
        )}
      >
        <span className={cx('text-[10px] uppercase tracking-wider font-mono font-bold', t.text)}>
          Work Tag
        </span>
        <code className={cx('font-mono text-3xl sm:text-4xl font-extrabold tabular-nums', t.text)}>
          {value}
        </code>
      </div>

      {description && (
        <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
          {description}
        </p>
      )}
    </article>
  );
};
