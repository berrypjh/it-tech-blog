import type { Meta, StoryObj } from '@storybook/react-vite';
import { RefreshCw } from 'lucide-react';

import { CompareBridge } from './CompareBridge';

const meta: Meta<typeof CompareBridge> = {
  title: 'React Deep Dive/CompareBridge',
  component: CompareBridge,
  parameters: {
    layout: 'padded',
  },
};
export default meta;

type Story = StoryObj<typeof CompareBridge>;

export const Default: Story = {
  args: {
    icon: <RefreshCw className="h-5 w-5" />,
    headline: 'scheduler가\n우선순위에 맞게\n정렬하고 실행',
    sub: '도착 순서 ≠ 실행 순서',
  },
};
