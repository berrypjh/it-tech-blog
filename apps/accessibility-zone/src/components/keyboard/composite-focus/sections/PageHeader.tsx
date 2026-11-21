import type { Locale } from '@it-tech-blog/preferences';
import { DocPageHeader, type HeaderContent } from '@it-tech-blog/ui';

import { narration } from '../narration';

const content: Record<Locale, HeaderContent> = {
  ko: {
    eyebrow: '07장 · 5 / 7',
    title: 'Roving tabindex와 aria-activedescendant 선택하고 구현하기',
    lead: (
      <>
        목록의 항목마다 Tab을 눌러야 한다면 지나가기만 해도 오래 걸립니다. 이 페이지는 하나의{' '}
        <strong className="text-text-default">Listbox를 두 가지 포커스 관리 방식</strong>으로 만들어
        실제 포커스와 상태를 비교합니다.
      </>
    ),
    readingTime: '읽는 시간 약 15분',
    practices: '브라우저 실습 1개',
    learnItems: [
      '복합 위젯의 Tab 정지점과 방향키 이동',
      'Roving tabindex와 aria-activedescendant의 차이와 조건',
      '진입 · 이탈 · 선택 · 항목 삭제 때의 상태 규칙',
    ],
  },
  en: {
    eyebrow: 'Chapter 07 · 5 of 7',
    title: 'Choosing and implementing roving tabindex and aria-activedescendant',
    lead: (
      <>
        If every item in a list needs its own Tab press, just passing it takes a long time. This
        page builds one{' '}
        <strong className="text-text-default">listbox with two ways of managing focus</strong> and
        compares real focus and state.
      </>
    ),
    readingTime: 'About 15 min read',
    practices: '1 in-browser exercise',
    learnItems: [
      'The Tab stop of a composite widget and arrow key movement',
      'How roving tabindex and aria-activedescendant differ, and what they require',
      'State rules for entry, exit, selection, and item removal',
    ],
  },
};

export const PageHeader = ({ locale }: { locale: Locale }) => (
  <DocPageHeader locale={locale} content={content[locale]} script={narration} />
);
