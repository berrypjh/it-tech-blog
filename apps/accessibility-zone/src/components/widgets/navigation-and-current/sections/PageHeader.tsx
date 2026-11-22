import type { Locale } from '@it-tech-blog/preferences';
import { DocPageHeader, type HeaderContent } from '@it-tech-blog/ui';

import { narration } from '../narration';

const content: Record<Locale, HeaderContent> = {
  ko: {
    eyebrow: '12장 · 4 / 9',
    title: '내비게이션 · Breadcrumb · Pagination에 위치와 목적 전달하기',
    lead: (
      <>
        메뉴에서 지금 페이지만 굵게 칠해 두면, 그 표시를 볼 수 없는 사용자는 자신이 어디에 있는지 알
        수 없습니다. 이 페이지는 사이트 메뉴 · 현재 경로 · 쪽 번호를{' '}
        <strong className="text-text-default">실제 링크</strong>로 만들고, 현재 위치를 글자와 상태로
        함께 전달합니다.
      </>
    ),
    readingTime: '읽는 시간 약 12분',
    practices: '브라우저 실습 1개',
    learnItems: [
      '현재 위치를 aria-current로, 선택 상태를 aria-selected로 나눠 표시하기',
      'nav가 여럿일 때 구별되는 이름 주기',
      '주소가 바뀌는 이동과 같은 화면의 목록 갱신에서 지킬 것 나누기',
    ],
  },
  en: {
    eyebrow: 'Chapter 12 · 4 of 9',
    title: 'Conveying location and purpose in navigation, breadcrumb, and pagination',
    lead: (
      <>
        If a menu only paints the current page in bold, users who cannot see that mark do not know
        where they are. This page builds a site menu, a breadcrumb, and page numbers from{' '}
        <strong className="text-text-default">real links</strong>, and conveys the current location
        through both text and state.
      </>
    ),
    readingTime: 'About 12 min read',
    practices: '1 in-browser exercise',
    learnItems: [
      'Marking current location with aria-current and selection with aria-selected',
      'Giving distinguishable names when there are several navs',
      'Separating what to keep in address-changing navigation from in-place list updates',
    ],
  },
};

export const PageHeader = ({ locale }: { locale: Locale }) => (
  <DocPageHeader locale={locale} content={content[locale]} script={narration} />
);
