import type { Locale } from '@it-tech-blog/preferences';
import { DocPageHeader, type HeaderContent } from '@it-tech-blog/ui';

import { narration } from '../narration';

const content: Record<Locale, HeaderContent> = {
  ko: {
    eyebrow: '06장 · 4 / 6',
    title: '숨겨진 참조 · 여러 ID · 중첩 참조 · 빈 값의 경계 사례',
    lead: (
      <>
        03.1에서 숨긴 span이 버튼 이름에 쓰일 수 있다는 것을 봤습니다. 이 페이지는 그 예제에서
        출발해 숨김 · 여러 ID · 중첩 · 빈 값의 경계를 원문 단계와 대조하고,{' '}
        <strong className="text-text-default">판본이나 엔진마다 결과가 다른 곳</strong>을 하나로
        정하지 않고 기록합니다.
      </>
    ),
    readingTime: '읽는 시간 약 14분',
    practices: '브라우저 실습 1개',
    learnItems: [
      '직접 참조된 숨김 대상과 탐색 중 만나는 숨김 자손 구분하기',
      '여러 ID의 처리 순서, 없는 참조, 중첩 · 순환 참조의 결과',
      '속성 없음 · 빈 문자열 · 유효한 참조 없음 · 빈 결과를 다른 경우로 다루기',
      '해석이나 엔진 결과가 갈리는 사례를 판본 · 엔진 · 재현 조건과 함께 기록하기',
    ],
  },
  en: {
    eyebrow: 'Chapter 06 · 4 of 6',
    title: 'Edge cases: hidden references, several IDs, nested references, and empty values',
    lead: (
      <>
        In 03.1 we saw that a hidden span can be used in a button&apos;s name. This page starts from
        that example, checks the edges of hiding, several IDs, nesting, and empty values against the
        steps in the text, and records{' '}
        <strong className="text-text-default">places where editions or engines differ</strong>{' '}
        without forcing one result.
      </>
    ),
    readingTime: 'About 14 min read',
    practices: '1 in-browser exercise',
    learnItems: [
      'Telling hidden targets referenced directly apart from hidden descendants met on the way',
      'The results of several IDs, missing references, and nested or circular references',
      'Treating no attribute, an empty string, no valid reference, and an empty result as different cases',
      'Recording cases where readings or engine results differ, with the edition, engine, and reproduction conditions',
    ],
  },
};

export const PageHeader = ({ locale }: { locale: Locale }) => (
  <DocPageHeader locale={locale} content={content[locale]} script={narration} />
);
