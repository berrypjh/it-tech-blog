import {
  HeroDescription,
  HeroSection,
  HeroTextColumn,
  HeroTitle,
  HeroVisualColumn,
} from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/terminal';
import { UseModelHeroDiagram } from '../components/UseModelHeroDiagram';
import type { UseSuspenseErrorModelContent } from '../content';

import { CodePanel } from './_CodePanel';

type Props = { content: UseSuspenseErrorModelContent['hero'] };

export const UseHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="react-19-changes/use-suspense-error-model.md"
    promptSuffix={
      <span className="text-[var(--term-dim)]">
        {' // pending → Suspense · fulfilled → value · rejected → Error Boundary'}
      </span>
    }
    align="center"
  >
    <HeroTextColumn>
      <TerminalBadge size="md" className="w-fit">
        {content.badge}
      </TerminalBadge>

      <HeroTitle>
        <span className="block text-[var(--term-fg)]">{content.titleLines[0]}</span>
        <span className="block text-[var(--term-fg)]">{content.titleLines[1]}</span>
        <span className="block text-[var(--term-accent)]">{content.titleLines[2]}</span>
      </HeroTitle>

      <HeroDescription maxWidth="max-w-[46ch]">{content.subtitleLines.join(' ')}</HeroDescription>

      {/* code panel */}
      <CodePanel
        code={content.heroCode.code}
        fileName={content.heroCode.fileName}
        langBadge={content.heroCode.langBadge}
      />
    </HeroTextColumn>

    <HeroVisualColumn id="hero-use-suspense-error-model" className="w-full">
      <UseModelHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroSection>
);
