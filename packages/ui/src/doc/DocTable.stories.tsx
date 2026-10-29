import type { Meta, StoryObj } from '@storybook/react-vite';

import { DocTable } from './DocTable';

const meta: Meta<typeof DocTable> = {
  title: 'Doc/DocTable',
  component: DocTable,
  parameters: { layout: 'padded' },
  decorators: [
    (Story) => (
      <div className="doc-prose max-w-[46rem]">
        <Story />
      </div>
    ),
  ],
  args: {
    caption: 'div 버튼과 button 요소의 차이',
    head: ['항목', '<div onclick>', '<button>'],
    rows: [
      ['역할', '없음', '버튼'],
      ['Tab 포커스', 'tabindex를 직접 추가', '기본 제공'],
      ['Enter · Space 실행', '키 이벤트를 직접 작성', '기본 제공'],
    ],
  },
};
export default meta;

type Story = StoryObj<typeof DocTable>;

export const Default: Story = {};

/** 좁은 폭에서는 표가 가로로 스크롤된다. */
export const Mobile: Story = { globals: { viewport: { value: 'mobile' } } };
