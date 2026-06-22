import { cn } from '@it-tech-blog/utils';

import {
  HeroDescription,
  HeroSection as HeroShell,
  HeroTextColumn,
  HeroTitle,
  HeroVisualColumn,
} from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/terminal';
import { PackageBoundaryHeroDiagram } from '../components/PackageBoundaryHeroDiagram';
import type { FollowPackageBoundaryContent } from '../content';

type Props = { content: FollowPackageBoundaryContent['hero'] };

export const HeroSection = ({ content }: Props) => (
  <HeroShell
    promptCommand="cat"
    promptPath="source-reading-checklist/follow-package-boundary.md"
    promptSuffix={
      <span className="text-[var(--term-dim)]">{' // a file is a dot — a package is a map'}</span>
    }
    gridColumns="lg:grid-cols-[minmax(0,_0.85fr)_minmax(0,_1.15fr)]"
    align="center"
  >
    <HeroTextColumn>
      <TerminalBadge size="md" className="w-fit">
        {content.badge}
      </TerminalBadge>

      <HeroTitle>
        <span className="block">{content.titleLines[0]}</span>
        <span className="block text-[var(--term-accent)]">{content.titleLines[1]}</span>
      </HeroTitle>

      <HeroDescription>{content.description}</HeroDescription>

      <p className={cn('text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep')}>
        {content.supporting}
      </p>
    </HeroTextColumn>

    <HeroVisualColumn id="hero-follow-package-boundary">
      <PackageBoundaryHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroShell>
);
