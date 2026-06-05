import { cn } from '@it-tech-blog/utils';

import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import type { MetadataResourceContent } from '../content';
import { ArrowDownIcon, SparklesIcon } from '../icons';

import { CodePanel } from './_CodePanel';
import { DomMock } from './_DomMock';
import { TreeMock } from './_TreeMock';

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

    <HeroVisualColumn className="w-full">
      {/* React Tree → DOM diagram */}
      <article
        className={cn(
          'relative flex flex-col gap-sm overflow-hidden rounded-2xl border-2 p-md sm:p-lg',
          'border-slate-200 bg-gradient-to-br from-white via-blue-50/30 to-white',
          'dark:border-slate-700 dark:from-[var(--term-bg)] dark:via-blue-950/20 dark:to-[var(--term-bg)]',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-blue-200 bg-blue-100 text-blue-700 dark:border-blue-800/60 dark:bg-blue-950/60 dark:text-blue-200"
          >
            <SparklesIcon className="h-4 w-4" />
          </span>
          <h3 className="text-sm font-bold text-[var(--term-fg)] break-keep">
            {content.diagram.title}
          </h3>
        </header>

        {/* Tree section */}
        <div className="flex flex-col gap-1.5">
          <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
            {content.diagram.leftTitle}
          </p>
          <TreeMock tree={content.diagram.tree} ariaLabel={content.diagram.leftTitle} />
        </div>

        {/* Center: Hoisting label */}
        <div className="flex items-center justify-center gap-2 py-1">
          <span
            aria-hidden="true"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border-2 border-blue-300 bg-blue-50 text-blue-700 dark:border-blue-700/70 dark:bg-blue-950/40 dark:text-blue-200"
          >
            <ArrowDownIcon className="h-4 w-4" />
          </span>
          <div className="flex flex-col">
            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-blue-700 dark:text-blue-200">
              {content.diagram.centerLabel}
            </span>
            <span className="text-[10px] text-[var(--term-muted)] break-keep">
              {content.diagram.centerSubLabel}
            </span>
          </div>
        </div>

        {/* DOM section */}
        <div className="flex flex-col gap-1.5">
          <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-teal-700 dark:text-teal-200">
            {content.diagram.rightTitle}
          </p>
          <DomMock dom={content.diagram.dom} ariaLabel={content.diagram.rightTitle} />
        </div>
      </article>
    </HeroVisualColumn>
  </HeroSection>
);
