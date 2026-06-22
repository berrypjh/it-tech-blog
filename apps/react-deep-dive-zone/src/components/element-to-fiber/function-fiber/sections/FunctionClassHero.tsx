import {
  HeroDescription,
  HeroSection,
  HeroTextColumn,
  HeroTitle,
  HeroVisualColumn,
} from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { FunctionClassHeroDiagram } from '../components/FunctionClassHeroDiagram';
import type { FunctionClassComponentFiberContent } from '../content';

type Props = { content: FunctionClassComponentFiberContent['hero'] };

export const FunctionClassHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="packages/react-reconciler/src/ReactFiber.js"
    promptSuffix={<span className="text-[var(--term-muted)]"> # shouldConstruct</span>}
    gridColumns="lg:grid-cols-[minmax(0,_0.78fr)_minmax(0,_1.22fr)]"
    align="center"
  >
    <HeroTextColumn>
      <TerminalBadge size="md" className="w-fit">
        {content.badge}
      </TerminalBadge>

      <HeroTitle>
        <span className="block">
          <code className="font-mono text-[var(--term-accent)]">type</code>이 함수라고 해서
        </span>
        <span className="block">
          항상 <code className="font-mono text-[var(--term-accent)]">Function Component</code>는
          아닙니다.
        </span>
      </HeroTitle>

      <HeroDescription>{content.description}</HeroDescription>
    </HeroTextColumn>

    <HeroVisualColumn id="hero-function-class">
      <FunctionClassHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroSection>
);
