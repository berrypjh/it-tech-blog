import { CodePreviewPanel } from '../../_shared/CodePreviewPanel';
import { HeroDescription } from '../../_shared/HeroDescription';
import { HeroSection } from '../../_shared/HeroSection';
import { HeroTextColumn } from '../../_shared/HeroTextColumn';
import { HeroTitle } from '../../_shared/HeroTitle';
import { HeroVisualColumn } from '../../_shared/HeroVisualColumn';
import { TerminalBadge } from '../../_shared/TerminalBadge';
import { InternalStackVisual } from '../components/InternalStackVisual';
import type { UsageVsInternalsContent } from '../content';

type Props = { content: UsageVsInternalsContent['hero'] };

export const UsageVsInternalsHero = ({ content }: Props) => {
  return (
    <HeroSection
      promptCommand="open"
      promptPath="usage-vs-internals/Counter.js"
      gridColumns="xl:grid-cols-[minmax(0,_0.96fr)_minmax(0,_1.04fr)]"
    >
      <HeroTextColumn>
        <TerminalBadge size="md" className="w-fit">
          {content.stepBadge}
        </TerminalBadge>

        <HeroTitle>
          {content.title.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </HeroTitle>

        <HeroDescription>{content.description}</HeroDescription>

        <CodePreviewPanel code={content.code} language="jsx" />
      </HeroTextColumn>

      <HeroVisualColumn>
        <InternalStackVisual layers={content.stackLayers} />
      </HeroVisualColumn>
    </HeroSection>
  );
};
