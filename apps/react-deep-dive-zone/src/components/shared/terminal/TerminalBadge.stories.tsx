import type { Meta, StoryObj } from '@storybook/react-vite';

import { TerminalBadge } from './TerminalBadge';

const meta: Meta<typeof TerminalBadge> = {
  title: 'React Deep Dive/TerminalBadge',
  component: TerminalBadge,
  parameters: {
    layout: 'padded',
  },
};
export default meta;

type Story = StoryObj<typeof TerminalBadge>;

export const Default: Story = {
  args: { children: '시작하기 · 1/6단계' },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <TerminalBadge size="sm">size sm</TerminalBadge>
      <TerminalBadge size="md">size md</TerminalBadge>
    </div>
  ),
};

export const WithoutDot: Story = {
  args: { showDot: false, children: 'no dot' },
};
