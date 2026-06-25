import type { Meta, StoryObj } from '@storybook/react-vite';
import { ArrowDown, ArrowLeftRight, ArrowRight } from 'lucide-react';

import { MappingRowCard } from './MappingRowCard';

const meta: Meta<typeof MappingRowCard> = {
  title: 'React Deep Dive/MappingRowCard',
  component: MappingRowCard,
  parameters: {
    layout: 'padded',
  },
};
export default meta;

type Story = StoryObj<typeof MappingRowCard>;

const codeChip =
  'inline-flex w-fit items-center px-2 py-1 rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] text-xsm font-mono font-bold break-all';

export const BeforeAfter: Story = {
  render: () => (
    <MappingRowCard
      columns="md:grid-cols-[minmax(0,0.9fr)_auto_minmax(0,1.5fr)]"
      arrow={
        <>
          <ArrowRight className="h-4 w-4 hidden md:block" />
          <ArrowDown className="h-4 w-4 md:hidden" />
        </>
      }
      left={
        <div className="flex flex-col gap-1.5">
          <span className="text-[10px] uppercase tracking-wider text-[var(--term-dim)]">
            과거에는
          </span>
          <code className={`${codeChip} text-[var(--term-muted)]`}>componentWillMount</code>
        </div>
      }
      right={
        <div className="flex flex-col gap-1">
          <span className="text-[10px] uppercase tracking-wider text-[var(--term-accent)]">
            지금은
          </span>
          <p className="text-xsm font-bold text-[var(--term-accent)] leading-snug break-keep">
            useEffect / 생성자
          </p>
          <p className="text-xsm text-[var(--term-muted)] leading-relaxed break-keep">
            마운트 전 로직은 effect나 생성자로 옮깁니다.
          </p>
        </div>
      }
    />
  ),
};

export const SymmetricPair: Story = {
  render: () => (
    <MappingRowCard
      arrow={
        <>
          <ArrowLeftRight className="h-4 w-4 hidden md:block" />
          <ArrowLeftRight className="h-4 w-4 md:hidden rotate-90" />
        </>
      }
      left={
        <div className="flex flex-col gap-1.5">
          <span className="text-[10px] uppercase tracking-wider text-[var(--term-accent)]">
            구현 파일
          </span>
          <code className={`${codeChip} text-[var(--term-fg)]`}>ReactJSXElement.js</code>
          <p className="text-xsm text-[var(--term-muted)] leading-relaxed break-keep">
            createElement 구현
          </p>
        </div>
      }
      right={
        <div className="flex flex-col gap-1.5">
          <span className="text-[10px] uppercase tracking-wider text-[var(--term-accent)]">
            테스트 파일
          </span>
          <code className={`${codeChip} text-[var(--term-fg)]`}>ReactCreateElement-test.js</code>
          <p className="text-xsm text-[var(--term-muted)] leading-relaxed break-keep">
            key / props 검증
          </p>
        </div>
      }
    />
  ),
};
