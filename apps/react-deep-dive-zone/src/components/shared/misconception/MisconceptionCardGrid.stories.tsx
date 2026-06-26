import type { Meta, StoryObj } from '@storybook/react-vite';
import { Boxes, Monitor, Network } from 'lucide-react';

import { MisconceptionCardGrid } from './MisconceptionCardGrid';

const meta: Meta<typeof MisconceptionCardGrid> = {
  title: 'React Deep Dive/MisconceptionCardGrid',
  component: MisconceptionCardGrid,
  parameters: {
    layout: 'padded',
  },
};
export default meta;

type Story = StoryObj<typeof MisconceptionCardGrid>;

export const Default: Story = {
  args: {
    items: [
      {
        id: 'boxes',
        icon: Boxes,
        accentClassName: 'text-[var(--term-accent)]',
        badgeWrong: '오해',
        wrong: 'JSX는 그냥 HTML이다',
        right: 'JSX는 JavaScript 표현식으로 컴파일된다',
        note: 'Babel이 React.createElement 호출로 변환한다.',
      },
      {
        id: 'network',
        icon: Network,
        accentClassName: 'text-sky-600 dark:text-sky-300',
        badgeWrong: '오해',
        wrong: '태그가 곧 DOM 노드다',
        right: 'JSX는 객체(엘리먼트)를 만든다',
        note: '실제 DOM은 렌더 단계에서 따로 생성된다.',
      },
      {
        id: 'browser',
        icon: Monitor,
        accentClassName: 'text-violet-600 dark:text-violet-300',
        badgeWrong: '오해',
        wrong: '브라우저가 JSX를 직접 읽는다',
        right: '브라우저는 변환된 JS만 실행한다',
        note: '빌드 타임에 JSX는 모두 사라진다.',
      },
    ],
  },
};
