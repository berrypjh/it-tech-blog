import type { Locale } from '@it-tech-blog/preferences';
import { DocPageHeader, type HeaderContent } from '@it-tech-blog/ui';

import { narration } from '../narration';

const content: Record<Locale, HeaderContent> = {
  ko: {
    eyebrow: '09장 · 1 / 10',
    title: '이미지의 목적과 문맥에 맞는 대체 텍스트 결정하기',
    lead: (
      <>
        같은 그림이라도 놓인 자리에 따라 사용자가 알아야 할 것이 다릅니다. 이 페이지는{' '}
        <strong className="text-text-default">그림의 목적과 문맥</strong>에서 대체 텍스트를 정하고,
        빈 alt와 alt 생략을 구분합니다.
      </>
    ),
    readingTime: '읽는 시간 약 12분',
    practices: '브라우저 실습 1개',
    learnItems: [
      '장식 · 정보 · 기능 이미지를 목적으로 나누기',
      'alt=""와 alt 생략이 DOM에서 다른 점',
      '링크 글자와 대체 텍스트가 겹칠 때 중복 낭독 피하기',
    ],
  },
  en: {
    eyebrow: 'Chapter 09 · 1 of 10',
    title: 'Deciding text alternatives by an image’s purpose and context',
    lead: (
      <>
        The same picture tells users different things depending on where it sits. This page decides
        text alternatives from{' '}
        <strong className="text-text-default">the image’s purpose and context</strong>, and tells an
        empty alt apart from a missing one.
      </>
    ),
    readingTime: 'About 12 min read',
    practices: '1 in-browser exercise',
    learnItems: [
      'Sorting images into decorative, informative, and functional by purpose',
      'How alt="" and a missing alt differ in the DOM',
      'Avoiding repeated speech when link text and alt overlap',
    ],
  },
};

export const PageHeader = ({ locale }: { locale: Locale }) => (
  <DocPageHeader locale={locale} content={content[locale]} script={narration} />
);
