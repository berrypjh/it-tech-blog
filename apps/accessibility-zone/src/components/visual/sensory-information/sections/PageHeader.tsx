import type { Locale } from '@it-tech-blog/preferences';
import { DocPageHeader, type HeaderContent } from '@it-tech-blog/ui';

import { narration } from '../narration';

const content: Record<Locale, HeaderContent> = {
  ko: {
    eyebrow: '08장 · 2 / 7',
    title: '색상 · 모양 · 위치 · 소리만으로 정보를 전달하지 않기',
    lead: (
      <>
        &quot;빨간 항목을 고르고 오른쪽 버튼을 누르세요&quot;는 색을 구별하기 어렵거나 화면 배치가
        바뀌면 따라 할 수 없습니다. 이 페이지는 같은 과업에{' '}
        <strong className="text-text-default">이름 · 텍스트 · 형태</strong>를 더해 비교합니다.
      </>
    ),
    readingTime: '읽는 시간 약 9분',
    practices: '브라우저 실습 1개',
    learnItems: [
      '1.4.1 Use of Color와 1.3.3 Sensory Characteristics의 범위',
      '색 · 위치에 기댄 안내를 이름과 텍스트로 고치는 방법',
      '상태를 글자와 형태, 코드의 관계로 함께 전달하는 방법',
    ],
  },
  en: {
    eyebrow: 'Chapter 08 · 2 of 7',
    title: 'Not conveying information by color, shape, position, or sound alone',
    lead: (
      <>
        &quot;Choose the red item and press the button on the right&quot; cannot be followed if
        colors are hard to tell apart or the layout changes. This page adds{' '}
        <strong className="text-text-default">names, text, and form</strong> to the same task and
        compares.
      </>
    ),
    readingTime: 'About 9 min read',
    practices: '1 in-browser exercise',
    learnItems: [
      'The scope of 1.4.1 Use of Color and 1.3.3 Sensory Characteristics',
      'Fixing instructions that rely on color and position with names and text',
      'Conveying state through text, form, and relationships in the code',
    ],
  },
};

export const PageHeader = ({ locale }: { locale: Locale }) => (
  <DocPageHeader locale={locale} content={content[locale]} script={narration} />
);
