import type { Meta, StoryObj } from '@storybook/react-vite';
import { ListChecks } from 'lucide-react';

import { SectionHeader } from './SectionHeader';

const meta: Meta<typeof SectionHeader> = {
  title: 'React Deep Dive/SectionHeader',
  component: SectionHeader,
  parameters: {
    layout: 'padded',
  },
};
export default meta;

type Story = StoryObj<typeof SectionHeader>;

export const Default: Story = {
  args: {
    id: 'demo',
    eyebrow: '01 · 핵심 정리',
    title: '왜 내부 구조를 읽는가',
    description: '구현을 직접 읽으면 동작의 이유와 한계가 함께 보입니다.',
    icon: <ListChecks className="h-5 w-5" />,
  },
};

export const Centered: Story = {
  args: {
    id: 'demo-centered',
    eyebrow: '02 · KEY TAKEAWAY',
    title: '같은 코드도 무엇을 읽느냐에 따라 다르다',
    align: 'center',
  },
};
