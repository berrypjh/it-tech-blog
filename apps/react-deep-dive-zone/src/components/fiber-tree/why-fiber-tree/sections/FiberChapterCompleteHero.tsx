import { cn } from '@it-tech-blog/utils';

import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { FiberChapterCompleteHeroDiagram } from '../components/FiberChapterCompleteHeroDiagram';
import type { FiberCentralContent } from '../content';
import { SparklesIcon } from '../icons';

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

      <div
        className={cn(
          'flex items-start gap-sm rounded-2xl border p-md',
          'border-[var(--term-border)] bg-[var(--term-surface)]',
        )}
      >
        <span
          aria-hidden="true"
          className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[var(--term-surface)] text-[var(--term-accent)] shrink-0"
        >
          <SparklesIcon className="h-5 w-5" />
        </span>
        <p className="text-xsm sm:text-sm font-bold leading-snug text-[var(--term-fg)] break-keep">
          {hero.emphasisBox}
        </p>
      </div>
    </HeroTextColumn>

    <HeroVisualColumn id="hero-why-fiber-tree">
      <FiberChapterCompleteHeroDiagram content={hero} groups={groups} />
    </HeroVisualColumn>
  </HeroSection>
);
