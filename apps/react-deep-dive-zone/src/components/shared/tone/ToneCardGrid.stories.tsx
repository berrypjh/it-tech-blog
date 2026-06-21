import type { Meta, StoryObj } from '@storybook/react-vite';
import { BarChart3, Eye, HelpCircle, KeyRound, Search, Zap } from 'lucide-react';

import type { ToneKey } from '../tones';

import { ToneCardGrid, ToneCardItem } from './ToneCardGrid';

const questions: {
  id: string;
  no: string;
  tone: ToneKey;
  icon: React.ReactNode;
  badge: string;
  q: string;
}[] = [
  {
    id: 'set-state',
    no: '01',
    tone: 'sky',
    icon: <HelpCircle className="h-5 w-5" />,
    badge: 'Update Queue',
    q: '왜 setState 직후 화면이 바로 안 바뀔까?',
  },
  {
    id: 'effect',
    no: '02',
    tone: 'blue',
    icon: <Zap className="h-5 w-5" />,
    badge: 'Scheduling',
    q: '왜 useEffect는 렌더 뒤에 실행될까?',
  },
  {
    id: 'key',
    no: '03',
    tone: 'indigo',
    icon: <KeyRound className="h-5 w-5" />,
    badge: 'Fiber',
    q: '왜 key를 잘못 쓰면 상태가 꼬일까?',
  },
  {
    id: 'transition',
    no: '04',
    tone: 'cyan',
    icon: <BarChart3 className="h-5 w-5" />,
    badge: 'Priority',
    q: '왜 transition은 입력 반응을 덜 막을까?',
  },
];

const benefits: {
  id: string;
  tone: ToneKey;
  icon: React.ReactNode;
  badge: string;
  title: string;
  body: string;
}[] = [
  {
    id: 'render',
    tone: 'sky',
    icon: <Eye className="h-5 w-5" />,
    badge: '흐름을 읽는 힘',
    title: '렌더링 해석력',
    body: '렌더링 과정 전체를 그림처럼 그릴 수 있습니다.',
  },
  {
    id: 'debug',
    tone: 'blue',
    icon: <Search className="h-5 w-5" />,
    badge: '원인을 찾는 힘',
    title: '디버깅 감각',
    body: '문제의 근본 원인을 빠르게 찾습니다.',
  },
];

const meta: Meta<typeof ToneCardGrid> = {
  title: 'React Deep Dive/ToneCardGrid',
  component: ToneCardGrid,
  parameters: {
    layout: 'padded',
  },
};
export default meta;

type Story = StoryObj<typeof ToneCardGrid>;

export const NumberedQuestions: Story = {
  render: () => (
    <ToneCardGrid>
      {questions.map((c) => (
        <ToneCardItem key={c.id} tone={c.tone} icon={c.icon} topRight={c.no} badge={c.badge}>
          <p className="text-md font-bold leading-snug text-[var(--term-fg)] break-keep">{c.q}</p>
        </ToneCardItem>
      ))}
    </ToneCardGrid>
  ),
};

export const TitledBenefits: Story = {
  render: () => (
    <ToneCardGrid>
      {benefits.map((c) => (
        <ToneCardItem key={c.id} tone={c.tone} icon={c.icon} badge={c.badge}>
          <h3 className="text-md font-bold tracking-tight text-[var(--term-fg)]">{c.title}</h3>
          <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">{c.body}</p>
        </ToneCardItem>
      ))}
    </ToneCardGrid>
  ),
};
