import { cx } from '@berrypjh/react-ui';

import { type ToneKey, toneTokens } from '../../../shared/tones';

type Props = {
  bits: string;
  tone: ToneKey;
};

/** 31비트 문자열을 칸으로 펼친다. 켜진 비트만 톤 색으로 채운다. */
export const BitRow = ({ bits, tone }: Props) => {
  const t = toneTokens[tone];
  return (
    <div className="flex flex-wrap gap-[2px]">
      {bits.split('').map((bit, i) => (
        <span
          key={`${i}-${bit}`}
          className={cx(
            'inline-flex h-4 w-[9px] items-center justify-center rounded-[2px] border font-mono text-[8px] leading-none',
            bit === '1'
              ? cx(t.fill.bg, t.fill.border, t.fill.text, 'font-bold')
              : 'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-dim)]',
          )}
        >
          {bit}
        </span>
      ))}
    </div>
  );
};
