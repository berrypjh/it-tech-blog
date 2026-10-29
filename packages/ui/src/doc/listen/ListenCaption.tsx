import { cx } from '@berrypjh/react-ui';

import type { CaptionStyle } from './useCaptionStyle';

/**
 * 자막. 이미 본문에 있는 글이라 화면 낭독기에는 숨겨 두 번 읽히지 않게 한다.
 * 떠 있을 때는 배경 불투명도를 고를 수 있고, 재생기 안(inline)에 들어가면 카드 배경을 그대로 쓴다.
 */
export const ListenCaption = ({
  text,
  style,
  inline = false,
}: {
  text: string;
  style: CaptionStyle;
  inline?: boolean;
}) => (
  <p
    aria-hidden="true"
    className={cx(
      'max-w-[60rem] text-center text-lg leading-lg text-[rgb(var(--listen-on-rgb))]',
      !inline &&
        'pointer-events-auto rounded-lg px-xl py-md shadow-lg ring-1 ring-[rgb(var(--listen-on-rgb)/0.12)]',
    )}
    style={{
      backgroundColor: inline ? undefined : `rgb(var(--listen-surface) / ${style.opacity})`,
    }}
  >
    {/* p의 text-lg를 기준으로 배율만큼 키운다. p에 직접 font-size를 주면 text-lg를 덮어쓴다. */}
    <span style={{ fontSize: `${style.size * 100}%` }}>{text}</span>
  </p>
);
