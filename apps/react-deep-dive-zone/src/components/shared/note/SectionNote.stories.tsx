import type { Meta, StoryObj } from '@storybook/react-vite';
import { Info, Lightbulb, Sparkles, Star } from 'lucide-react';

import { SectionNote } from './SectionNote';

const meta: Meta<typeof SectionNote> = {
  title: 'React Deep Dive/SectionNote',
  component: SectionNote,
  parameters: {
    layout: 'padded',
  },
  args: {
    icon: <Info className="h-4 w-4" />,
    children: '섹션 하단에 덧붙이는 한 줄짜리 보조 노트입니다.',
  },
};
export default meta;

type Story = StoryObj<typeof SectionNote>;

export const SingleLine: Story = {
  args: {
    icon: <Star className="h-4 w-4" />,
    children: '루트 파일은 코드를 읽기 전에 먼저 훑어보면 좋습니다.',
  },
};

export const MultiLine: Story = {
  args: {
    icon: <Lightbulb className="h-4 w-4" />,
    children:
      'fixtures는 실험과 데모, 버그 재현을 위한 공간입니다. 학습 단계에서는 우선순위가 낮으니 전체 구조를 먼저 파악한 뒤 필요할 때 살펴보세요.',
  },
};

export const Icons: Story = {
  render: (args) => (
    <div className="flex flex-col gap-md">
      <SectionNote {...args} icon={<Info className="h-4 w-4" />}>
        Info — 보충 설명을 덧붙일 때.
      </SectionNote>
      <SectionNote {...args} icon={<Lightbulb className="h-4 w-4" />}>
        Lightbulb — 팁이나 권장 사항을 안내할 때.
      </SectionNote>
      <SectionNote {...args} icon={<Sparkles className="h-4 w-4" />}>
        Sparkles — 선택 가이드나 마무리 정리를 강조할 때.
      </SectionNote>
      <SectionNote {...args} icon={<Star className="h-4 w-4" />}>
        Star — 주목할 항목을 짚어줄 때.
      </SectionNote>
    </div>
  ),
};
