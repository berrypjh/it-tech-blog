import type { Meta, StoryObj } from '@storybook/react-vite';

import { DocH2, DocH3 } from './DocHeading';
import { DocLayout } from './DocLayout';
import { ExternalLink } from './ExternalLink';
import { ReferenceList } from './ReferenceList';

const toc = [
  { id: 'what-is', title: '웹접근성이란?' },
  { id: 'who-for', title: '누구를 위한 것인가?' },
  { id: 'references', title: '참고 자료' },
];

const references = [
  {
    href: 'https://www.w3.org/WAI/fundamentals/accessibility-intro/',
    source: { ko: 'W3C WAI', en: 'W3C WAI' },
    title: { ko: '웹 접근성 소개', en: 'Introduction to Web Accessibility' },
    note: { ko: '접근성의 정의와 범위', en: 'What accessibility covers' },
  },
  {
    href: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility',
    source: { ko: 'MDN', en: 'MDN' },
    title: { ko: '접근성', en: 'Accessibility' },
    note: { ko: '프론트엔드 구현 레퍼런스', en: 'Frontend implementation reference' },
  },
];

const paragraph =
  '웹 접근성은 사람들이 웹에서 하려는 일을 끝까지 할 수 있게 만드는 일입니다. 장벽은 사람과 환경과 인터페이스가 만나는 곳에서 생깁니다.';

/** 문서 페이지 한 장: 제목 · 문단 · 하위 제목 · 외부 링크 · 참고 자료와 오른쪽 목차(xl 이상). */
const meta: Meta<typeof DocLayout> = {
  title: 'Doc/DocLayout',
  component: DocLayout,
  parameters: { layout: 'fullscreen' },
  render: () => (
    <DocLayout toc={toc}>
      <h1 className="text-3xl leading-3xl font-bold tracking-sm text-text-default">
        웹 접근성은 누구의 어떤 활동을 가능하게 하는가?
      </h1>
      <section aria-labelledby="what-is">
        <DocH2 id="what-is" title="웹접근성이란?" />
        <p>{paragraph}</p>
        <p>
          정의는 <ExternalLink href="https://www.w3.org/WAI/">W3C WAI</ExternalLink>를 따릅니다.
        </p>
        <DocH3>과업 흐름</DocH3>
        <p>{paragraph}</p>
      </section>
      <section aria-labelledby="who-for">
        <DocH2 id="who-for" title="누구를 위한 것인가?" />
        <p>{paragraph}</p>
        <p>{paragraph}</p>
      </section>
      <section aria-labelledby="references">
        <DocH2 id="references" title="참고 자료" />
        <ReferenceList references={references} locale="ko" />
      </section>
    </DocLayout>
  ),
};
export default meta;

type Story = StoryObj<typeof DocLayout>;

export const Default: Story = {};

export const Mobile: Story = { globals: { viewport: { value: 'mobile' } } };
