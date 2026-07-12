import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';

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

export const TogglesTheme: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByRole('button', { name: '설정' }));

    const dark = await canvas.findByRole('button', { name: '다크' });
    await userEvent.click(dark);
    await expect(dark).toHaveAttribute('aria-pressed', 'true');
    await expect(canvas.getByRole('button', { name: '라이트' })).toHaveAttribute(
      'aria-pressed',
      'false',
    );

    await userEvent.click(canvas.getByRole('button', { name: '라이트' }));
    await expect(canvas.getByRole('button', { name: '라이트' })).toHaveAttribute(
      'aria-pressed',
      'true',
    );
  },
};

export const SwitchesLanguage: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByRole('button', { name: '설정' }));
    await userEvent.click(await canvas.findByRole('button', { name: 'English' }));

    await expect(canvas.getByRole('button', { name: 'English' })).toHaveAttribute(
      'aria-pressed',
      'true',
    );
    await expect(canvas.getByRole('button', { name: 'Light' })).toBeVisible();
  },
};
