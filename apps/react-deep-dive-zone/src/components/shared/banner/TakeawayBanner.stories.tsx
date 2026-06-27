import type { Meta, StoryObj } from '@storybook/react-vite';

import { TakeawayBanner } from './TakeawayBanner';

const meta: Meta<typeof TakeawayBanner> = {
  title: 'React Deep Dive/TakeawayBanner',
  component: TakeawayBanner,
  parameters: {
    layout: 'padded',
  },
};
export default meta;

type Story = StoryObj<typeof TakeawayBanner>;

export const Default: Story = {
  args: {
    lines: [
      'Element는 UI 설명 객체, Fiber는 렌더링을 처리하는 작업 단위입니다.',
      'Element는 불변의 요청서에 가깝고, Fiber는 그 요청을 처리하기 위해 상태를 가지고 진행되는 작업 단위입니다.',
    ],
  },
};

export const SingleLine: Story = {
  args: {
    lines: ['상태가 바뀌었다고 DOM이 바로 바뀌는 것이 아닙니다.'],
  },
};
