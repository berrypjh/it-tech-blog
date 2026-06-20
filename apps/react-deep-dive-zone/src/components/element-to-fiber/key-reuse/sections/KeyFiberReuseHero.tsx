import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { KeyFiberReuseHeroDiagram } from '../components/KeyFiberReuseHeroDiagram';
import type { KeyFiberReuseContent } from '../content';

type Props = { content: KeyFiberReuseContent['hero'] };

export const KeyFiberReuseHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="packages/react-reconciler/src/ReactChildFiber.js"
    promptSuffix={<span className="text-[var(--term-muted)]"> # updateSlot — key match</span>}
    gridColumns="lg:grid-cols-[minmax(0,_0.78fr)_minmax(0,_1.22fr)]"
    align="center"
  >
    <HeroTextColumn>
      <TerminalBadge size="md" className="w-fit">
        {content.badge}
      </TerminalBadge>

      <HeroTitle>
        <span className="block">
          <code className="font-mono text-[var(--term-accent)]">key</code>는 Fiber 재사용
        </span>
        <span className="block text-[var(--term-accent)]">판단과 연결됩니다.</span>
      </HeroTitle>

      <HeroDescription>{content.description}</HeroDescription>
    </HeroTextColumn>

    <HeroVisualColumn id="hero-key-reuse">
      <KeyFiberReuseHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroSection>
);
