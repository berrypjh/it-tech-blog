import type { Locale } from '@it-tech-blog/preferences';
import { DocPageHeader, type HeaderContent } from '@it-tech-blog/ui';

import { narration } from '../narration';

const content: Record<Locale, HeaderContent> = {
  ko: {
    eyebrow: '12장 · 3 / 9',
    title: 'Tabs의 선택 · 포커스 · 패널과 자동 · 수동 활성화 구현하기',
    lead: (
      <>
        탭에서는 세 가지가 따로 움직일 수 있습니다. 초점이 있는 탭, 선택된 탭, 화면에 보이는
        패널입니다. 셋이 어긋나면 사용자는 보고 있는 내용이 어느 탭의 것인지 알 수 없습니다. 이
        페이지는 셋을 하나로 맞추고,{' '}
        <strong className="text-text-default">방향키는 초점만, Enter와 Space는 선택</strong>을 맡는
        수동 활성화를 직접 실행합니다.
      </>
    ),
    readingTime: '읽는 시간 약 12분',
    practices: '브라우저 실습 1개',
    learnItems: [
      '탭과 패널을 id로 잇고 선택 · roving tabindex · 보이는 패널을 한 값에서 만들기',
      '수동 활성화와 자동 활성화를 고르는 조건 말하기',
      '처음과 끝 · 탭 하나 · Tab으로 나가기를 키로 확인하기',
    ],
  },
  en: {
    eyebrow: 'Chapter 12 · 3 of 9',
    title: 'Implementing selection, focus, and panels of tabs with automatic and manual activation',
    lead: (
      <>
        Three things can move separately in tabs: the focused tab, the selected tab, and the panel
        on screen. If they disagree, the user cannot tell which tab the visible content belongs to.
        This page keeps the three as one, and runs manual activation, where{' '}
        <strong className="text-text-default">
          arrow keys move only focus and Enter and Space select
        </strong>
        .
      </>
    ),
    readingTime: 'About 12 min read',
    practices: '1 in-browser exercise',
    learnItems: [
      'Connecting tabs and panels by id and deriving selection, roving tabindex, and the visible panel from one value',
      'Stating when to choose manual or automatic activation',
      'Checking the first and last tab, a single tab, and leaving with Tab by keyboard',
    ],
  },
};

export const PageHeader = ({ locale }: { locale: Locale }) => (
  <DocPageHeader locale={locale} content={content[locale]} script={narration} />
);
