import type { Locale } from '@it-tech-blog/preferences';
import { DocPageHeader, type HeaderContent } from '@it-tech-blog/ui';

import { narration } from '../narration';

const content: Record<Locale, HeaderContent> = {
  ko: {
    eyebrow: '07장 · 7 / 7',
    title: '포커스 · 선택 · 활성 상태를 분리하고 키보드 경로 검증하기',
    lead: (
      <>
        목록을 다룰 때는 &quot;지금 어디&quot;라는 말이 세 가지를 뜻할 수 있습니다. 이 장의 마지막
        페이지는 <strong className="text-text-default">DOM 포커스 · 활성 항목 · 선택값</strong>을
        나란히 기록하며 키보드 경로 하나를 처음부터 끝까지 검증합니다.
      </>
    ),
    readingTime: '읽는 시간 약 14분',
    practices: '브라우저 실습 1개',
    learnItems: [
      'DOM 포커스 · 활성 항목 · 선택값과 CSS :active의 차이',
      '진입부터 삭제 뒤 재개까지 이어지는 키보드 경로 검증',
      '예상 · 관찰 · 수정 · 재검증을 출처와 함께 기록하기',
    ],
  },
  en: {
    eyebrow: 'Chapter 07 · 7 of 7',
    title: 'Separating focus, selection, and active state, and verifying a keyboard path',
    lead: (
      <>
        In a list, &quot;where am I&quot; can mean three things. This last page of the chapter
        records{' '}
        <strong className="text-text-default">DOM focus, the active item, and the selection</strong>{' '}
        side by side while verifying one keyboard path from start to finish.
      </>
    ),
    readingTime: 'About 14 min read',
    practices: '1 in-browser exercise',
    learnItems: [
      'How DOM focus, the active item, the selection, and CSS :active differ',
      'Verifying a keyboard path from entry to resuming after removal',
      'Recording expectation, observation, fix, and retest with their sources',
    ],
  },
};

export const PageHeader = ({ locale }: { locale: Locale }) => (
  <DocPageHeader locale={locale} content={content[locale]} script={narration} />
);
