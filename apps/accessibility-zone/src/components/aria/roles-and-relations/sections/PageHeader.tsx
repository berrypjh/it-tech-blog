import type { Locale } from '@it-tech-blog/preferences';
import { DocPageHeader, type HeaderContent } from '@it-tech-blog/ui';

import { narration } from '../narration';

const content: Record<Locale, HeaderContent> = {
  ko: {
    eyebrow: '05장 · 2 / 6',
    title: 'role · state · property와 필수 소유 · 참조 관계 읽기',
    lead: (
      <>
        ARIA 속성은 모두 <code>aria-</code>로 시작하지만 하는 일이 다릅니다. 무엇인지 알리는 역할,
        자주 바뀌는 상태, 잘 바뀌지 않는 속성, 다른 요소를 가리키는 관계가 있습니다. 이 페이지는
        넷을 나눠 읽고, 한 역할이 <strong className="text-text-default">반드시 갖춰야 할 것</strong>
        을 WAI-ARIA 원문에서 찾습니다.
      </>
    ),
    readingTime: '읽는 시간 약 11분',
    practices: '브라우저 실습 1개',
    learnItems: [
      '역할 · 상태 · 속성 · 관계를 짧은 예제에서 구분하기',
      '한 역할의 필수 상태 · 속성과 소유 · 문맥 요구를 원문 표에서 찾기',
      'DOM 부모 · 자식, 접근성 소유, ID 참조의 차이',
      'aria-controls와 aria-owns가 만들지 않는 것',
    ],
  },
  en: {
    eyebrow: 'Chapter 05 · 2 of 6',
    title: 'Reading roles, states, properties, and required ownership and references',
    lead: (
      <>
        Every ARIA attribute starts with <code>aria-</code>, but they do different jobs. A role says
        what something is, a state changes often, a property rarely changes, and a relation points
        to another element. This page reads the four apart and finds in the WAI-ARIA text{' '}
        <strong className="text-text-default">what one role must have</strong>.
      </>
    ),
    readingTime: 'About 11 min read',
    practices: '1 in-browser exercise',
    learnItems: [
      'Telling role, state, property, and relation apart in a short example',
      'Finding one role’s required states and properties and its ownership and context requirements in the spec table',
      'How DOM parents and children, accessibility ownership, and ID references differ',
      'What aria-controls and aria-owns do not create',
    ],
  },
};

export const PageHeader = ({ locale }: { locale: Locale }) => (
  <DocPageHeader locale={locale} content={content[locale]} script={narration} />
);
