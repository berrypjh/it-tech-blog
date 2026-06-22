import type { Meta, StoryObj } from '@storybook/react-vite';

import { NextStepBanner } from './NextStepBanner';

const meta: Meta<typeof NextStepBanner> = {
  title: 'React Deep Dive/NextStepBanner',
  component: NextStepBanner,
  parameters: {
    layout: 'padded',
  },
};
export default meta;

type Story = StoryObj<typeof NextStepBanner>;

export const Default: Story = {
  args: {
    content: {
      eyebrow: '다음 학습으로 이어집니다',
      title: '오픈소스 GitHub 기반 학습이 좋은 이유',
      description: '소스코드를 더 정확히, 더 깊이 이해하는 방법을 알아봅니다.',
      cta: '다음 페이지로 이동',
      href: '#',
    },
  },
};
