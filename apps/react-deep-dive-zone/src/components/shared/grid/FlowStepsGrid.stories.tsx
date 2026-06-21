import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box, CircleCheck, Database, FunctionSquare, History, MousePointer2 } from 'lucide-react';

import { type FlowStepItem, FlowStepsGrid } from './FlowStepsGrid';

const steps: FlowStepItem[] = [
  {
    id: 'click',
    number: '1',
    title: 'Click',
    body: '사용자 클릭',
    tone: 'sky',
    icon: <MousePointer2 className="h-5 w-5" />,
  },
  {
    id: 'dispatch',
    number: '2',
    title: 'dispatchSetState',
    body: '`setCount` 호출',
    tone: 'blue',
    icon: <FunctionSquare className="h-5 w-5" />,
  },
  {
    id: 'queue',
    number: '3',
    title: 'update queue',
    body: '업데이트 저장',
    tone: 'indigo',
    icon: <Database className="h-5 w-5" />,
  },
  {
    id: 'schedule',
    number: '4',
    title: 'scheduleUpdateOnFiber',
    body: '스케줄링 시작',
    tone: 'cyan',
    icon: <History className="h-5 w-5" />,
  },
  {
    id: 'render',
    number: '5',
    title: 'Render Phase',
    body: '변경 계산',
    tone: 'teal',
    icon: <Box className="h-5 w-5" />,
  },
  {
    id: 'commit',
    number: '6',
    title: 'Commit Phase',
    body: 'DOM 반영',
    tone: 'emerald',
    icon: <CircleCheck className="h-5 w-5" />,
  },
];

const meta: Meta<typeof FlowStepsGrid> = {
  title: 'React Deep Dive/FlowStepsGrid',
  component: FlowStepsGrid,
  parameters: {
    layout: 'padded',
  },
};
export default meta;

type Story = StoryObj<typeof FlowStepsGrid>;

export const ThreeColumns: Story = {
  render: () => <FlowStepsGrid steps={steps} columns={3} />,
};

export const FourColumns: Story = {
  render: () => <FlowStepsGrid steps={steps.slice(0, 4)} columns={4} />,
};
