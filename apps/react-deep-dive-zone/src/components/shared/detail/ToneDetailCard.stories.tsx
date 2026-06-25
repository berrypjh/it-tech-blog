import type { Meta, StoryObj } from '@storybook/react-vite';
import { Boxes } from 'lucide-react';

import { ToneDetailCard } from './ToneDetailCard';

const meta: Meta<typeof ToneDetailCard> = {
  title: 'React Deep Dive/ToneDetailCard',
  component: ToneDetailCard,
  parameters: {
    layout: 'padded',
  },
};
export default meta;

type Story = StoryObj<typeof ToneDetailCard>;

export const Default: Story = {
  args: {
    tone: 'sky',
    icon: Boxes,
    title: 'react-reconciler',
    badge: '계산 담당',
    description: 'Fiber 트리를 만들고 변경을 계산하는 렌더링 알고리즘 계층입니다.',
    bullets: ['Element를 Fiber로 변환', '변경 계산(reconciliation)', 'commit 단계 준비'],
  },
};

export const WithNote: Story = {
  args: {
    tone: 'violet',
    icon: Boxes,
    title: 'scheduler',
    badge: '실행 시점 조율',
    description: '작업을 언제 실행할지 우선순위에 따라 조율합니다.',
    bullets: ['우선순위로 실행 순서 결정', '브라우저 여유 시간에 실행', '긴 작업 분할·중단/재개'],
    note: '계산(reconciler)과 조율(scheduler)은 서로 다른 책임입니다.',
  },
};
