import type { Meta, StoryObj } from '@storybook/react-vite';

import { HeroDescription } from './HeroDescription';
import { HeroDiagramShell } from './HeroDiagramShell';
import { HeroSection } from './HeroSection';
import { HeroTextColumn } from './HeroTextColumn';
import { HeroTitle } from './HeroTitle';
import { HeroVisualColumn } from './HeroVisualColumn';

const DiagramPlaceholder = () => (
  <div className="grid h-48 place-items-center rounded-xl border border-dashed border-[var(--term-border)] text-xsm font-mono text-[var(--term-muted)]">
    diagram visual
  </div>
);

const meta: Meta<typeof HeroSection> = {
  title: 'React Deep Dive/HeroSection',
  component: HeroSection,
  parameters: {
    layout: 'padded',
  },
};
export default meta;

type Story = StoryObj<typeof HeroSection>;

export const TextWithVisual: Story = {
  render: () => (
    <HeroSection promptCommand="cat" promptPath="why-read-source.md">
      <HeroTextColumn>
        <HeroTitle>
          <span className="block">소스코드를 읽으면</span>
          <span className="block">React가 다르게 보입니다.</span>
        </HeroTitle>
        <HeroDescription>
          공식 문서는 사용법을 알려주고, 소스코드는 설계 의도를 보여줍니다.
        </HeroDescription>
      </HeroTextColumn>
      <HeroVisualColumn>
        <HeroDiagramShell a11yLabel="히어로 다이어그램 예시">
          <DiagramPlaceholder />
        </HeroDiagramShell>
      </HeroVisualColumn>
    </HeroSection>
  ),
};

export const CenterAligned: Story = {
  render: () => (
    <HeroSection promptCommand="gh repo view" promptPath="facebook/react" align="center">
      <HeroTextColumn>
        <HeroTitle>
          <span className="block">GitHub는</span>
          <span className="block">설계 의도를 보여줍니다.</span>
        </HeroTitle>
        <HeroDescription lines={['문서, 소스코드, 테스트,', '변경 이력을 함께 봅니다.']} />
      </HeroTextColumn>
      <HeroVisualColumn>
        <HeroDiagramShell a11yLabel="중앙 정렬 히어로 다이어그램 예시">
          <DiagramPlaceholder />
        </HeroDiagramShell>
      </HeroVisualColumn>
    </HeroSection>
  ),
};
