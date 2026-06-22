import {
  HeroDescription,
  HeroSection,
  HeroTextColumn,
  HeroTitle,
  HeroVisualColumn,
} from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { HostComponentHeroDiagram } from '../components/HostComponentHeroDiagram';
import type { HostComponentFiberContent } from '../content';

type Props = { content: HostComponentFiberContent['hero'] };

export const HostComponentHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="packages/react-reconciler/src/ReactFiber.js"
    promptSuffix={
      <span className="text-[var(--term-muted)]">
        {' '}
        # branch: typeof type === &apos;string&apos;
      </span>
    }
    gridColumns="lg:grid-cols-[minmax(0,_0.78fr)_minmax(0,_1.22fr)]"
    align="center"
  >
    <HeroTextColumn>
      <TerminalBadge size="md" className="w-fit">
        {content.badge}
      </TerminalBadge>

      <HeroTitle>
        <span className="block">
          <code className="font-mono text-[var(--term-accent)]">&lt;div /&gt;</code>는
        </span>
        <span className="block text-[var(--term-accent)]">어떤 Fiber가 될까?</span>
      </HeroTitle>

      <HeroDescription>{content.description1}</HeroDescription>
      <HeroDescription>{content.description2}</HeroDescription>
    </HeroTextColumn>

    <HeroVisualColumn id="hero-host-component">
      <HostComponentHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroSection>
);
