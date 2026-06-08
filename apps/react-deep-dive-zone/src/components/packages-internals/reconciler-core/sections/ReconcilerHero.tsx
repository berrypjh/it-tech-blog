import { cn } from '@it-tech-blog/utils';

import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { FiberTreeGraphic } from '../components/FiberTreeGraphic';
import { FieldCard } from '../components/FieldCard';
import { JsxExampleCard } from '../components/JsxExampleCard';
import type { ReconcilerContent } from '../content';

type Props = { content: ReconcilerContent['hero'] };

export const ReconcilerHero = ({ content }: Props) => {
  return (
    <HeroSection
      promptCommand="cat"
      promptPath="packages/react-reconciler/src/ReactFiber.js"
      gridColumns="lg:grid-cols-[minmax(0,_0.85fr)_minmax(0,_1.15fr)]"
      align="center"
    >
      <HeroTextColumn>
        <TerminalBadge size="md" className="w-fit">
          {content.badge}
        </TerminalBadge>

        <HeroTitle>
          <span className="block">{content.title.line1}</span>
          <span className="block">{content.title.line2}</span>
          <span className="block text-[var(--term-accent)]">{content.title.line3}</span>
          <span className="block">{content.title.line4}</span>
        </HeroTitle>

        <HeroDescription>{content.description}</HeroDescription>
      </HeroTextColumn>

      <HeroVisualColumn id="hero-element-fiber">
        <div
          className={cn(
            'relative rounded-2xl border bg-[var(--term-bg)] p-md sm:p-lg',
            'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)] overflow-hidden',
          )}
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(45,212,191,0.14),transparent_55%)]"
          />
          <p className="sr-only">{content.a11yFlow}</p>

          {/* flow header */}
          <div className="relative flex items-center gap-sm mb-md">
            <span
              aria-hidden="true"
              className="flex-1 border-t border-dashed border-[var(--term-border)]"
            />
            <span className="text-[10px] uppercase tracking-wider text-[var(--term-muted)] font-mono px-2 py-1 rounded-full border border-[var(--term-border)] bg-[var(--term-surface)]">
              jsx → element → fiber → tree
            </span>
            <span
              aria-hidden="true"
              className="flex-1 border-t border-dashed border-[var(--term-border)]"
            />
          </div>

          <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-sm items-stretch">
            <JsxExampleCard title="JSX" code={content.jsxCode} />
            <FieldCard
              title="React Element"
              subtitle={content.elementCaption}
              fields={content.elementFields}
              iconName="layers"
              tone="violet"
            />
            <FieldCard
              title="Fiber 노드"
              subtitle={content.fiberCaption}
              fields={content.fiberFields}
              iconName="cube"
              tone="teal"
              emphasized
            />
            <FiberTreeGraphic title={content.treeCaption} description={content.treeDescription} />
          </div>
        </div>
      </HeroVisualColumn>
    </HeroSection>
  );
};
