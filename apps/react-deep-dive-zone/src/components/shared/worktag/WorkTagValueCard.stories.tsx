import type { Meta, StoryObj } from '@storybook/react-vite';
import { Group, SquareFunction } from 'lucide-react';

import { WorkTagValueCard } from './WorkTagValueCard';

const meta: Meta<typeof WorkTagValueCard> = {
  title: 'React Deep Dive/WorkTagValueCard',
  component: WorkTagValueCard,
  parameters: {
    layout: 'padded',
  },
  args: {
    tone: 'emerald',
    icon: <SquareFunction className="h-5 w-5" aria-hidden="true" />,
    title: 'FunctionComponent',
    value: '0',
  },
};
export default meta;

type Story = StoryObj<typeof WorkTagValueCard>;

export const Basic: Story = {};

export const WithDescription: Story = {
  args: {
    tone: 'violet',
    icon: <Group className="h-5 w-5" aria-hidden="true" />,
    title: 'Fragment',
    subtitle: '(REACT_FRAGMENT_TYPE)',
    value: '7',
    description:
      '자식들을 묶는 논리적 컨테이너로, DOM을 직접 생성하지 않는 보이지 않는 Fiber 노드입니다.',
  },
};
