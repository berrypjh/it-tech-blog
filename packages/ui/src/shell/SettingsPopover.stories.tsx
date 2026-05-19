import type { Meta, StoryObj } from '@storybook/react-vite';

import { SettingsPopover } from './SettingsPopover';

const meta: Meta<typeof SettingsPopover> = {
  title: 'Shell/SettingsPopover',
  component: SettingsPopover,
  parameters: {
    layout: 'centered',
  },
};
export default meta;

type Story = StoryObj<typeof SettingsPopover>;

export const Default: Story = {};
