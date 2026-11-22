import type { Locale } from '@it-tech-blog/preferences';
import { DocPageHeader, type HeaderContent } from '@it-tech-blog/ui';

import { narration } from '../narration';

const content: Record<Locale, HeaderContent> = {
  ko: {
    eyebrow: '12장 · 8 / 9',
    title: '분할 영역 조절에 이름 · 현재 값 · 키보드 조작 제공하기',
    lead: (
      <>
        목록과 내용을 나란히 둔 화면에서 경계를 끌어 넓히는 기능은, 끌 수 없는 사용자에게는 없는
        기능입니다. 글자를 크게 보는 사용자일수록 영역의 크기를 바꿀 필요가 큽니다. 이 페이지는
        경계에 <strong className="text-text-default">이름 · 현재 값 · 방향키 · 접기와 복원</strong>
        을 주고, 누르기만 하는 버튼을 함께 둡니다.
      </>
    ),
    readingTime: '읽는 시간 약 11분',
    practices: '브라우저 실습 1개',
    learnItems: [
      'separator에 방향 · 주 영역의 이름 · 현재 값 · 허용 범위 주기',
      '방향키 · Enter · 버튼이 같은 값을 바꾸게 하고 실제 크기와 대조하기',
      '양 끝 · 반복 접기 · 좁은 화면에서 내용에 닿을 수 있는지 확인하기',
    ],
  },
  en: {
    eyebrow: 'Chapter 12 · 8 of 9',
    title: 'Giving a pane splitter a name, current value, and keyboard operation',
    lead: (
      <>
        On a screen with a list beside its content, widening by dragging the boundary is a feature
        that does not exist for users who cannot drag. The larger a user’s text, the greater the
        need to resize panes. This page gives the boundary a{' '}
        <strong className="text-text-default">
          name, a current value, arrow keys, and collapse and restore
        </strong>
        , along with tap-only buttons.
      </>
    ),
    readingTime: 'About 11 min read',
    practices: '1 in-browser exercise',
    learnItems: [
      'Giving a separator its orientation, the primary pane’s name, a current value, and an allowed range',
      'Making arrow keys, Enter, and buttons change the same value, and comparing it with the real size',
      'Checking that content stays reachable at both ends, on repeated collapse, and on a narrow screen',
    ],
  },
};

export const PageHeader = ({ locale }: { locale: Locale }) => (
  <DocPageHeader locale={locale} content={content[locale]} script={narration} />
);
