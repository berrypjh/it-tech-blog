import {
  HeroDescription,
  HeroSection,
  HeroTextColumn,
  HeroTitle,
  HeroVisualColumn,
} from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/terminal';
import { FiberChapterCompleteHeroDiagram } from '../components/FiberChapterCompleteHeroDiagram';
import type { FiberCentralContent } from '../content';

type Props = {
  hero: FiberCentralContent['hero'];
  groups: FiberCentralContent['summary']['cards'];
};

export const FiberChapterCompleteHero = ({ hero, groups }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="packages/react-reconciler/src/ReactInternalTypes.js"
    gridColumns="lg:grid-cols-[minmax(0,_0.82fr)_minmax(0,_1.18fr)]"
    align="center"
  >
    <HeroTextColumn>
      <TerminalBadge size="md" className="w-fit">
        {hero.badge}
      </TerminalBadge>

      <HeroTitle>
        <span className="block">{hero.title.line1}</span>
        <span className="block">{hero.title.line2}</span>
        <span className="block">
          {hero.title.line3.split(hero.emphasisInTitle).map((part, i, arr) => (
            <span key={i}>
              {part}
              {i < arr.length - 1 && (
                <span className="text-[var(--term-accent)]">{hero.emphasisInTitle}</span>
              )}
            </span>
          ))}
        </span>
      </HeroTitle>

      <HeroDescription maxWidth="max-w-[62ch]">{hero.description}</HeroDescription>
    </HeroTextColumn>

    <HeroVisualColumn id="hero-why-fiber-tree">
      <FiberChapterCompleteHeroDiagram content={hero} groups={groups} />
    </HeroVisualColumn>
  </HeroSection>
);
