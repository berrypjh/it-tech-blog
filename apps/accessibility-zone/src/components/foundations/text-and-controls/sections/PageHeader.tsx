import type { Locale } from '@it-tech-blog/preferences';
import { DocPageHeader, type HeaderContent } from '@it-tech-blog/ui';

import { narration } from '../narration';

const content: Record<Locale, HeaderContent> = {
  ko: {
    eyebrow: '02장 · 3 / 7',
    title: '목록·인용·강조와 링크·버튼을 목적에 맞게 선택하기',
    lead: (
      <>
        모양이 같아 보여도 요소마다 전달하는 의미와 기본 동작이 다릅니다. 이 페이지는 글의 의미를
        나타내는 요소와, 사용자가 누르는 요소를{' '}
        <strong className="text-text-default">목적에 따라 고르는 기준</strong>을 다루고, 그 차이를
        키보드로 직접 확인합니다.
      </>
    ),
    readingTime: '읽는 시간 약 12분',
    practices: '브라우저 실습 1개',
    learnItems: [
      '목록 · 인용 · 강조 요소의 의미와 흔한 오용 구분하기',
      '이동이면 링크, 동작이면 버튼 — 기준과 두 요소의 기본 동작 비교하기',
      'role 속성만으로는 키보드 동작이 생기지 않음을 직접 확인하기',
    ],
  },
  en: {
    eyebrow: 'Chapter 02 · 3 of 7',
    title: 'Choosing lists, quotes, emphasis, links, and buttons for their purpose',
    lead: (
      <>
        Elements that look the same carry different meaning and built-in behavior. This page covers{' '}
        <strong className="text-text-default">how to choose by purpose</strong> both the elements
        that give text meaning and the elements users press, and checks the difference with the
        keyboard.
      </>
    ),
    readingTime: 'About 12 min read',
    practices: '1 in-browser exercise',
    learnItems: [
      'What list, quote, and emphasis elements convey, and how they are commonly misused',
      'Links for navigation, buttons for actions — how to choose and what each does by default',
      'How to check for yourself that a role attribute alone adds no keyboard behavior',
    ],
  },
};

export const PageHeader = ({ locale }: { locale: Locale }) => (
  <DocPageHeader locale={locale} content={content[locale]} script={narration} />
);
