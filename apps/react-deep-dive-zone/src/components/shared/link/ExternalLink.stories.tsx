import type { Meta, StoryObj } from '@storybook/react-vite';

import { ExternalLink } from './ExternalLink';

const meta: Meta<typeof ExternalLink> = {
  title: 'React Deep Dive/ExternalLink',
  component: ExternalLink,
  parameters: {
    layout: 'padded',
  },
};
export default meta;

type Story = StoryObj<typeof ExternalLink>;

export const Default: Story = {
  args: {
    href: 'https://react.dev',
    children: 'react.dev 공식 문서',
  },
};

export const InParagraph: Story = {
  render: () => (
    <p className="text-sm leading-relaxed text-[var(--term-fg)] break-keep">
      자세한 내용은{' '}
      <ExternalLink href="https://github.com/facebook/react">React 저장소</ExternalLink>
      에서 직접 확인할 수 있습니다.
    </p>
  ),
};
