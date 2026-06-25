import type { Meta, StoryObj } from '@storybook/react-vite';
import { FlaskConical, MapPinned } from 'lucide-react';

import { ToneChoiceCard } from './ToneChoiceCard';

const meta: Meta<typeof ToneChoiceCard> = {
  title: 'React Deep Dive/ToneChoiceCard',
  component: ToneChoiceCard,
  parameters: {
    layout: 'padded',
  },
};
export default meta;

type Story = StoryObj<typeof ToneChoiceCard>;

const downArrow = <span className="my-2 text-lg text-[var(--term-accent)]">↓</span>;

export const WithArrowLead: Story = {
  args: {
    tone: 'amber',
    icon: <MapPinned className="h-5 w-5" />,
    question: '핵심 디렉터리부터\n빠르게 보고 싶다면?',
    resultTone: 'amber',
    result: 'packages/react',
    lead: downArrow,
  },
};

export const WithDetailFlow: Story = {
  args: {
    tone: 'sky',
    icon: <FlaskConical className="h-5 w-5" />,
    question: '관련 PR과 이슈까지\n추적하고 싶다면?',
    resultTone: 'sky',
    result: 'Releases + PR',
    lead: downArrow,
    detail: (
      <ol className="w-full flex flex-col gap-1.5 mt-md pt-md border-t border-dashed border-[var(--term-border)]">
        {['Releases', 'PR / Issue', '코드 변경 추적'].map((step) => (
          <li
            key={step}
            className="flex items-center gap-2 rounded-md border px-2 py-1.5 text-xsm text-left border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-fg)]"
          >
            <span
              aria-hidden="true"
              className="inline-block w-1 h-1 rounded-full shrink-0 bg-sky-500 dark:bg-sky-400"
            />
            <span className="font-bold font-mono text-xsm break-keep">{step}</span>
          </li>
        ))}
      </ol>
    ),
  },
};
