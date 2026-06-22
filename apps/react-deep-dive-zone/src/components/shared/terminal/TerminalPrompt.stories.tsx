import type { Meta, StoryObj } from '@storybook/react-vite';

import { TerminalPrompt } from './TerminalPrompt';

const meta: Meta<typeof TerminalPrompt> = {
  title: 'React Deep Dive/TerminalPrompt',
  component: TerminalPrompt,
  parameters: {
    layout: 'padded',
  },
};
export default meta;

type Story = StoryObj<typeof TerminalPrompt>;

export const Default: Story = {
  args: { command: 'gh repo view', path: 'facebook/react' },
};

export const WithSuffix: Story = {
  args: { command: 'cat', path: 'why-read-source.md', suffix: ' --plain' },
};
