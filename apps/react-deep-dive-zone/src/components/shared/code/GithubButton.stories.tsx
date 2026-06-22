import type { Meta, StoryObj } from '@storybook/react-vite';

import { GithubButton } from './GithubButton';

const meta: Meta<typeof GithubButton> = {
  title: 'React Deep Dive/GithubButton',
  component: GithubButton,
  parameters: {
    layout: 'padded',
  },
};
export default meta;

type Story = StoryObj<typeof GithubButton>;

export const Default: Story = {
  args: {
    href: 'https://github.com/facebook/react',
    label: 'GitHub에서 코드 열기',
  },
};
