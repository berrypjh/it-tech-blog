import type { Meta, StoryObj } from '@storybook/react-vite';
import { Check } from 'lucide-react';

import { ComparePanel } from './ComparePanel';

const meta: Meta<typeof ComparePanel> = {
  title: 'React Deep Dive/ComparePanel',
  component: ComparePanel,
  parameters: {
    layout: 'padded',
  },
};
export default meta;

type Story = StoryObj<typeof ComparePanel>;

const items = ['useActionState', 'use(...)', 'ref as prop'];

export const Default: Story = {
  render: () => (
    <ComparePanel
      tone={{
        card: 'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        iconBadge:
          'bg-[var(--term-surface)] border border-[var(--term-border)] text-[var(--term-accent)]',
        header: 'text-[var(--term-accent)]',
      }}
      icon={<Check className="h-3.5 w-3.5" />}
      title="모던 표현"
      headerId="compare-panel-demo"
    >
      <ul className="flex flex-col gap-md">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-sm">
            <span
              aria-hidden="true"
              className="mt-1 inline-block w-1.5 h-1.5 rounded-full shrink-0 bg-[var(--term-accent)]"
            />
            <span className="text-xsm text-[var(--term-fg)] leading-relaxed break-keep">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </ComparePanel>
  ),
};
