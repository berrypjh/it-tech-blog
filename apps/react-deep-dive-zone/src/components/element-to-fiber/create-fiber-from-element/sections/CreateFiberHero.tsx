import {
  HeroDescription,
  HeroSection,
  HeroTextColumn,
  HeroTitle,
  HeroVisualColumn,
} from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/terminal';
import { CreateFiberHeroDiagram } from '../components/CreateFiberHeroDiagram';
import type { CreateFiberFromElementContent } from '../content';

type Props = { content: CreateFiberFromElementContent['hero'] };

export const CreateFiberHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="packages/react-reconciler/src/ReactFiber.js"
    gridColumns="lg:grid-cols-[minmax(0,_0.78fr)_minmax(0,_1.22fr)]"
    align="center"
  >
    <HeroTextColumn>
      <TerminalBadge size="md" className="w-fit">
        {content.badge}
      </TerminalBadge>

      <HeroTitle>
        <span className="block">{content.title.line1}</span>
        <span className="block text-[var(--term-accent)]">{content.title.line2}</span>
      </HeroTitle>

      <HeroDescription>{content.description1}</HeroDescription>
      <HeroDescription>{content.description2}</HeroDescription>
    </HeroTextColumn>

    <HeroVisualColumn id="hero-create-fiber">
      <CreateFiberHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroSection>
);
