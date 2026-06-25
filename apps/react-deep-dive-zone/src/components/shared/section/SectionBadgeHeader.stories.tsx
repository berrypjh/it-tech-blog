import type { Meta, StoryObj } from '@storybook/react-vite';
import { Info } from 'lucide-react';

import { SectionBadgeHeader } from './SectionBadgeHeader';

const meta: Meta<typeof SectionBadgeHeader> = {
  title: 'React Deep Dive/SectionBadgeHeader',
  component: SectionBadgeHeader,
  parameters: {
    layout: 'padded',
  },
};
export default meta;

type Story = StoryObj<typeof SectionBadgeHeader>;

export const Default: Story = {
  args: {
    id: 'demo',
    number: '2',
    eyebrow: 'PROBLEM',
    title: '공통 개념을 패키지마다 따로 정의하면',
    description: '같은 개념이 다른 값으로 정의되어 내부 일관성이 깨집니다.',
    icon: <Info className="h-5 w-5" />,
  },
};
