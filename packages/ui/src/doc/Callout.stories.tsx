import type { Meta, StoryObj } from '@storybook/react-vite';

import { Callout } from './Callout';

const meta: Meta<typeof Callout> = {
  title: 'Doc/Callout',
  component: Callout,
  parameters: { layout: 'padded' },
  decorators: [
    (Story) => (
      <div className="doc-prose max-w-[46rem]">
        <Story />
      </div>
    ),
  ],
  args: {
    children: <p>보이는 라벨이 없으면 입력 도중에 무엇을 적는 칸인지 다시 확인할 수 없습니다.</p>,
  },
};
export default meta;

type Story = StoryObj<typeof Callout>;

export const Note: Story = { args: { variant: 'note' } };

export const Pitfall: Story = { args: { variant: 'pitfall' } };

export const Practice: Story = { args: { variant: 'practice', title: '도구 없이 30초 확인' } };
