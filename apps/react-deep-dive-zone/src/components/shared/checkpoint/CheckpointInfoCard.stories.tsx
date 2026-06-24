import type { Meta, StoryObj } from '@storybook/react-vite';
import { Code2, FileCode2, Info } from 'lucide-react';

import { CheckpointInfoCard } from './CheckpointInfoCard';

const meta: Meta<typeof CheckpointInfoCard> = {
  title: 'React Deep Dive/CheckpointInfoCard',
  component: CheckpointInfoCard,
  parameters: {
    layout: 'padded',
  },
};
export default meta;

type Story = StoryObj<typeof CheckpointInfoCard>;

const chip =
  'inline-flex items-center rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] px-2 py-0.5 text-xsm font-mono text-[var(--term-fg)]';

export const ThreeRows: Story = {
  args: {
    rows: [
      {
        label: '파일',
        value: (
          <code className="font-mono break-all">packages/react-dom/src/client/ReactDOMRoot.js</code>
        ),
        icon: FileCode2,
      },
      {
        label: '볼 함수',
        value: <code className={chip}>createRoot</code>,
        icon: Code2,
      },
      {
        label: '설명',
        value: <span>DOM 컨테이너에 React 트리를 부착하는 클라이언트 진입점입니다.</span>,
        icon: Info,
      },
    ],
    question: 'createRoot는 어디서 Fiber 루트를 만들고\n렌더러와 연결되는가?',
  },
};

export const TwoRows: Story = {
  args: {
    rows: [
      {
        label: '파일',
        value: <code className="font-mono break-all">packages/shared/src/ReactSymbols.js</code>,
        icon: FileCode2,
      },
      {
        label: '이유',
        value: <span>여러 패키지가 공유하는 공통 심볼을 한곳에서 정의합니다.</span>,
        icon: Info,
      },
    ],
    question: 'shared 패키지는 왜 런타임 로직 없이\n상수와 타입만 모아둘까?',
  },
};
