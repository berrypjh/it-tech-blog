import {
  HeroDescription,
  HeroSection,
  HeroTextColumn,
  HeroTitle,
  HeroVisualColumn,
} from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/terminal';
import { MetadataHeroDiagram } from '../components/MetadataHeroDiagram';
import type { MetadataResourceContent } from '../content';

import { CodePanel } from './_CodePanel';

type Props = { content: MetadataResourceContent['hero'] };

export const MetadataHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="react-19-changes/metadata-resource-react-dom.md"
    promptSuffix={
      <span className="text-[var(--term-dim)]">
        {' // React Tree → react-dom hoisting → DOM <head>'}
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
        <span className="block text-[var(--term-accent)]">{content.titleLines[1]}</span>
      </HeroTitle>

      <HeroDescription maxWidth="max-w-[60ch]">{content.subtitleLines.join(' ')}</HeroDescription>

      <CodePanel
        code={content.heroCode.code}
        fileName={content.heroCode.fileName}
        langBadge={content.heroCode.langBadge}
      />
    </HeroTextColumn>

    <HeroVisualColumn id="hero-metadata" className="w-full">
      <MetadataHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroSection>
);
