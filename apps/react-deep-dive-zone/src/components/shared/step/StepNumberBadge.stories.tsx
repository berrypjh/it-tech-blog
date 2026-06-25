import type { Meta, StoryObj } from '@storybook/react-vite';

import { StepNumberBadge } from './StepNumberBadge';

const meta: Meta<typeof StepNumberBadge> = {
  title: 'React Deep Dive/StepNumberBadge',
  component: StepNumberBadge,
  parameters: {
    layout: 'padded',
  },
};
export default meta;

type Story = StoryObj<typeof StepNumberBadge>;

export const Small: Story = {
  args: { size: 'sm', children: '1' },
};

export const Medium: Story = {
  args: { size: 'md', children: '2' },
};

export const Sequence: Story = {
  render: () => (
    <div className="flex items-center gap-md">
      <StepNumberBadge size="md">1</StepNumberBadge>
      <StepNumberBadge size="md">2</StepNumberBadge>
      <StepNumberBadge size="md">3</StepNumberBadge>
      <StepNumberBadge size="md">4</StepNumberBadge>
    </div>
  ),
};
