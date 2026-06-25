import { cn } from '@it-tech-blog/utils';

import type { ReactNode } from 'react';

import type { ToneKey } from '../tones';

import { ToneBadge } from './ToneBadge';
import { ToneIconBox } from './ToneIconBox';

type Props = {
  /** 상단 아이콘 박스 톤. */
  tone: ToneKey;
  /** 아이콘 박스에 담길 아이콘(`h-5 w-5` 권장). */
  icon: ReactNode;
  question: string;
  /** 결과/목적지 알약 톤. */
  resultTone: ToneKey;
  /** 결과/목적지 알약 라벨. */
  result: string;
  /** 결과 알약 앞 연결 표시(예: ↓ 화살표). 없으면 생략. */
  lead?: ReactNode;
  /** 결과 알약 뒤 상세(예: 단계 흐름). 없으면 생략. */
  detail?: ReactNode;
};

export const ToneChoiceCard = ({
  tone,
  icon,
  question,
  resultTone,
  result,
  lead,
  detail,
}: Props) => (
  <article
    className={cn(
      'group flex w-full flex-col items-center text-center gap-sm rounded-lg border',
      'border-[var(--term-border)] bg-[var(--term-bg)]',
      'p-md sm:p-lg transition-all hover:-translate-y-0.5 hover:shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <ToneIconBox tone={tone}>{icon}</ToneIconBox>

    <h3 className="text-md sm:text-lg font-bold tracking-tight text-[var(--term-fg)] break-keep whitespace-pre-line">
      {question}
    </h3>

    {lead}

    <ToneBadge tone={resultTone} size="lg">
      {result}
    </ToneBadge>

    {detail}
  </article>
);
