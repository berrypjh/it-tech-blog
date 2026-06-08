import { cn } from '@it-tech-blog/utils';

import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { ElementFiberHeroDiagram } from '../components/ElementFiberHeroDiagram';
import type { ElementVsFiberContent } from '../content';

type Props = { content: ElementVsFiberContent['hero'] };

export const ElementFiberHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="packages/react-reconciler/INTRO.md"
    gridColumns="lg:grid-cols-[minmax(0,_0.85fr)_minmax(0,_1.15fr)]"
    align="center"
  >
    <HeroTextColumn>
      <TerminalBadge size="md" className="w-fit">
        {content.badge}
      </TerminalBadge>

      <HeroTitle>
        <span className="block">{content.title.line1}</span>
        <span className="block">{content.title.line2}</span>
      </HeroTitle>

      <HeroDescription>{content.description}</HeroDescription>

      <p
        className={cn(
          'text-3xl sm:text-[2.5rem] lg:text-[2.75rem] font-extrabold leading-[1.1] tracking-tight break-keep',
          'text-[var(--term-accent)]',
        )}
      >
        <span className="block">{content.emphasis.line1}</span>
        <span className="block">{content.emphasis.line2}</span>
      </p>
    </HeroTextColumn>

    <HeroVisualColumn id="hero-element-fiber">
      <ElementFiberHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroSection>
);
