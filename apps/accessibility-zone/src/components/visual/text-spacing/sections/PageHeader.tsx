import type { Locale } from '@it-tech-blog/preferences';
import { DocPageHeader, type HeaderContent } from '@it-tech-blog/ui';

import { narration } from '../narration';

const content: Record<Locale, HeaderContent> = {
  ko: {
    eyebrow: '08장 · 4 / 7',
    title: '텍스트 간격 · 긴 번역 · 사용자 스타일에서도 내용 유지하기',
    lead: (
      <>
        읽기 편하도록 간격을 넓히는 사용자가 있고, 번역하면 문구가 길어집니다. 이 페이지는{' '}
        <strong className="text-text-default">글자가 차지하는 공간이 늘어나도</strong> 내용과 조작이
        남는지 확인합니다.
      </>
    ),
    readingTime: '읽는 시간 약 10분',
    practices: '브라우저 실습 1개',
    learnItems: [
      '1.4.12의 네 가지 간격 값과 단위',
      '긴 문구와 간격 변경에서 생기는 잘림 · 겹침 찾기',
      '줄바꿈과 유연한 높이로 고치는 방법',
    ],
  },
  en: {
    eyebrow: 'Chapter 08 · 4 of 7',
    title: 'Keeping content with text spacing, long translations, and user styles',
    lead: (
      <>
        Some people widen spacing to read comfortably, and translation makes strings longer. This
        page checks whether content and operation remain{' '}
        <strong className="text-text-default">when text takes up more room</strong>.
      </>
    ),
    readingTime: 'About 10 min read',
    practices: '1 in-browser exercise',
    learnItems: [
      'The four spacing values of 1.4.12 and their units',
      'Finding clipping and overlap with long strings and changed spacing',
      'Fixing it with wrapping and flexible height',
    ],
  },
};

export const PageHeader = ({ locale }: { locale: Locale }) => (
  <DocPageHeader locale={locale} content={content[locale]} script={narration} />
);
