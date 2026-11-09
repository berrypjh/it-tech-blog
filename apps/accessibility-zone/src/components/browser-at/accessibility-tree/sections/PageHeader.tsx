import type { Locale } from '@it-tech-blog/preferences';
import { DocPageHeader, type HeaderContent } from '@it-tech-blog/ui';

import { narration } from '../narration';

const content: Record<Locale, HeaderContent> = {
  ko: {
    eyebrow: '03장 · 1 / 6',
    title: 'DOM · 스타일 · 렌더링 정보와 접근성 트리의 관계',
    lead: (
      <>
        브라우저는 DOM만 보고 접근성 정보를 만들지 않습니다. 요소의 네이티브 의미, 계산된 스타일,
        렌더링 결과가 함께 들어갑니다. 이 페이지는 같은 UI를{' '}
        <strong className="text-text-default">DOM과 접근성 트리에서 나란히 보며</strong> 어디서
        차이가 생기는지 확인합니다.
      </>
    ),
    readingTime: '읽는 시간 약 12분',
    practices: '브라우저 실습 1개',
    learnItems: [
      '같은 요소를 Elements 패널과 접근성 트리에서 찾아 비교하는 절차',
      '네이티브 의미 · 숨김 상태 · 스타일 변화가 노출에 주는 영향',
      'DOM 노드와 접근성 노드가 일대일로 대응하지 않는 경우',
      '트리 노출과 이름 계산 참조를 같은 규칙으로 단정하지 않는 이유',
    ],
  },
  en: {
    eyebrow: 'Chapter 03 · 1 of 6',
    title: 'How the DOM, styles, and rendering relate to the accessibility tree',
    lead: (
      <>
        The browser does not build accessibility information from the DOM alone. An element&apos;s
        native meaning, its computed style, and the rendering result all go in. This page looks at
        one UI{' '}
        <strong className="text-text-default">
          side by side in the DOM and the accessibility tree
        </strong>{' '}
        to see where differences come from.
      </>
    ),
    readingTime: 'About 12 min read',
    practices: '1 in-browser exercise',
    learnItems: [
      'A procedure for finding the same element in the Elements panel and the accessibility tree',
      'How native meaning, hidden states, and style changes affect what is exposed',
      'Cases where DOM nodes and accessibility nodes do not correspond one-to-one',
      'Why tree exposure and name computation references are not decided by the same rule',
    ],
  },
};

export const PageHeader = ({ locale }: { locale: Locale }) => (
  <DocPageHeader locale={locale} content={content[locale]} script={narration} />
);
