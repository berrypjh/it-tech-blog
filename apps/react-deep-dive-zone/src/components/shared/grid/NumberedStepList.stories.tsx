import { cn } from '@it-tech-blog/utils';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { Boxes, Code2, Network } from 'lucide-react';

import { NumberedStepList, stepChip, type StepRow } from './NumberedStepList';

const meta: Meta<typeof NumberedStepList> = {
  title: 'React Deep Dive/NumberedStepList',
  component: NumberedStepList,
  parameters: {
    layout: 'padded',
  },
};
export default meta;

type Story = StoryObj<typeof NumberedStepList>;

const baseRows: StepRow[] = [
  {
    id: '1',
    num: '1',
    tone: 'amber',
    icon: <Boxes className="h-[1.125rem] w-[1.125rem]" />,
    title: 'Element 단계',
    description: 'JSX가 어떤 객체가 되는지 이해합니다.',
  },
  {
    id: '2',
    num: '2',
    tone: 'sky',
    icon: <Network className="h-[1.125rem] w-[1.125rem]" />,
    title: 'Fiber 단계',
    description: 'FiberNode 주요 필드를 요약합니다.',
  },
  {
    id: '3',
    num: '3',
    tone: 'violet',
    icon: <Code2 className="h-[1.125rem] w-[1.125rem]" />,
    title: 'Render 단계',
    description: 'beginWork / completeWork 흐름을 그립니다.',
  },
];

export const Default: Story = {
  args: { rows: baseRows },
};

export const WithExtraColumn: Story = {
  args: {
    rowClassName: 'md:grid-cols-[auto_auto_1fr_minmax(180px,_240px)]',
    rows: baseRows.map((row) => ({
      ...row,
      extra: (
        <div className="col-span-full md:col-auto flex flex-col gap-1 mt-sm md:mt-0 md:border-l md:border-dashed md:border-[var(--term-border)] md:pl-md">
          <span className="text-[10px] uppercase tracking-wider text-[var(--term-dim)] font-bold">
            핵심 파일
          </span>
          <ul className="flex flex-wrap gap-1">
            {['ReactElement.js', 'ReactFiber.js'].map((f) => (
              <li key={f}>
                <code
                  className={cn(
                    'inline-flex items-center px-2 py-0.5 rounded border text-[10px] font-mono font-bold break-all',
                    stepChip,
                  )}
                >
                  {f}
                </code>
              </li>
            ))}
          </ul>
        </div>
      ),
    })),
  },
};
