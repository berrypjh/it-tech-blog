import { CodePreviewPanel } from '../../_shared/CodePreviewPanel';
import { HeroDescription } from '../../_shared/HeroDescription';
import { HeroSection } from '../../_shared/HeroSection';
import { HeroTextColumn } from '../../_shared/HeroTextColumn';
import { HeroTitle } from '../../_shared/HeroTitle';
import { HeroVisualColumn } from '../../_shared/HeroVisualColumn';
import { TerminalBadge } from '../../_shared/TerminalBadge';
import { InternalStackVisual } from '../components/InternalStackVisual';
import type { UsageVsInternalsContent } from '../content';
import { ExpandIcon } from '../icons';

type Props = { content: UsageVsInternalsContent['hero'] };

export const UsageVsInternalsHero = ({ content }: Props) => {
  return (
    <HeroSection
      promptCommand="open"
      promptPath="usage-vs-internals/Counter.js"
      gridColumns="lg:grid-cols-[minmax(0,_0.96fr)_minmax(0,_1.04fr)]"
    >
      <HeroTextColumn>
        <TerminalBadge size="md" className="w-fit">
          {content.stepBadge}
        </TerminalBadge>

        <HeroTitle>
          {content.title.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </HeroTitle>

        <HeroDescription>{content.description}</HeroDescription>

        {/* Counter.js 코드 패널 */}
        <div className="mt-sm">
          <div className="flex items-center justify-between mb-1.5">
            <div className="inline-flex items-center gap-1.5">
              <span className="inline-flex items-center gap-1 px-2 py-1 rounded-t-md border border-b-0 border-slate-800 bg-slate-900 text-slate-200 text-[10px] font-mono">
                <span
                  aria-hidden="true"
                  className="block h-1.5 w-1.5 rounded-full bg-amber-300/80"
                />
                {content.fileTab}
              </span>
            </div>
            <button
              type="button"
              aria-label="expand code preview"
              className="text-[var(--term-dim)] hover:text-[var(--term-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)] rounded p-1"
            >
              <ExpandIcon className="h-3.5 w-3.5" />
            </button>
          </div>
          <CodePreviewPanel code={content.code} language="jsx" />
        </div>
      </HeroTextColumn>

      <HeroVisualColumn>
        <InternalStackVisual layers={content.stackLayers} />
      </HeroVisualColumn>
    </HeroSection>
  );
};
