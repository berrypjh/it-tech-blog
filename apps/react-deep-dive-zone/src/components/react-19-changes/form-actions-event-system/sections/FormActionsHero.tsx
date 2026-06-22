import {
  HeroDescription,
  HeroSection,
  HeroTextColumn,
  HeroTitle,
  HeroVisualColumn,
} from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { FormActionsHeroDiagram } from '../components/FormActionsHeroDiagram';
import type { FormActionsEventSystemContent } from '../content';

import { CodePanel } from './_CodePanel';

type Props = { content: FormActionsEventSystemContent['hero'] };

export const FormActionsHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="react-19-changes/form-actions-event-system.md"
    promptSuffix={
      <span className="text-[var(--term-dim)]">
        {' // submit event → plugin → pendingState → transition'}
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

      {/* hero code panel */}
      <CodePanel
        code={content.heroCode.code}
        fileName={content.heroCode.fileName}
        langBadge={content.heroCode.langBadge}
      />
    </HeroTextColumn>

    <HeroVisualColumn id="hero-form-actions" className="w-full">
      <FormActionsHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroSection>
);
