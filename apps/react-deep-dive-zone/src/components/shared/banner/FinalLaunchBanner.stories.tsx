import type { Meta, StoryObj } from '@storybook/react-vite';

import { FinalLaunchBanner } from './FinalLaunchBanner';

const meta: Meta<typeof FinalLaunchBanner> = {
  title: 'React Deep Dive/FinalLaunchBanner',
  component: FinalLaunchBanner,
  parameters: {
    layout: 'padded',
  },
};
export default meta;

type Story = StoryObj<typeof FinalLaunchBanner>;

export const Default: Story = {
  args: {
    content: {
      progressLabel: '1/15 챕터 완료',
      copyLine1: '준비가 끝났습니다.',
      copyLine2: '이제 실제 React 저장소를 열고,',
      copyLine3: '전체 구조부터 읽어봅니다.',
      primaryCta: 'React GitHub 저장소 구조 읽기',
      primaryHref: '#',
      secondaryCta: '처음부터 다시 보기',
      secondaryHref: '#',
    },
  },
};
