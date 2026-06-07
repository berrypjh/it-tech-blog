import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { PackageOverviewCard } from '../components/PackageOverviewCard';
import type { WhySplitContent } from '../content';

type Props = { content: WhySplitContent['hero']; architecture: WhySplitContent['architecture'] };

export const WhySplitHero = ({ content, architecture }: Props) => {
  return (
    <HeroSection
      promptCommand="cat"
      promptPath="packages/README.md"
      gridColumns="lg:grid-cols-[minmax(0,_0.95fr)_minmax(0,_1.05fr)]"
      align="center"
    >
      <HeroTextColumn>
        <TerminalBadge size="md" className="w-fit">
          {content.badge}
        </TerminalBadge>

        <HeroTitle>
          <span className="block">{content.title.line1}</span>
          <span className="block text-[var(--term-accent)]">{content.title.line2}</span>
          <span className="block">{content.title.line3}</span>
        </HeroTitle>

        <HeroDescription>{content.description}</HeroDescription>
      </HeroTextColumn>

      <HeroVisualColumn id="hero-architecture">
        <PackageOverviewCard
          mainFlow={architecture.mainFlow}
          side={architecture.side}
          flowLabel={content.diagramFlowLabel}
          sideLabel={content.diagramSideLabel}
          a11yFlow="사용자 코드 → react → react-reconciler → renderer → DOM 또는 Native. scheduler와 shared는 보조 축으로 모든 단계를 떠받칩니다."
        />
      </HeroVisualColumn>
    </HeroSection>
  );
};
