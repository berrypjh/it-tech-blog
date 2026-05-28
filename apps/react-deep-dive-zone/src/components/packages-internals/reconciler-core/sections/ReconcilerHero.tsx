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
import { ArrowRightIcon, CodeIcon, MapIcon } from '../icons';

type Props = { content: ReconcilerContent['hero'] };

export const ReconcilerHero = ({ content }: Props) => {
  return (
    <HeroSection
      promptCommand="cat"
      promptPath="packages/react-reconciler/src/ReactFiber.js"
      gridColumns="lg:grid-cols-[minmax(0,_0.85fr)_minmax(0,_1.15fr)]"
      align="start"
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

        <div className="flex flex-col sm:flex-row gap-sm pt-xs">
          <a
            href={content.primaryCtaHref}
            className={cn(
              'group inline-flex items-center justify-center gap-2 px-lg py-3 rounded-md',
              'bg-teal-600 text-white text-xsm font-bold tracking-tight',
              'transition-colors hover:bg-teal-700',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
              'dark:bg-teal-500 dark:hover:bg-teal-400 dark:text-slate-950',
            )}
          >
            <MapIcon className="h-4 w-4" aria-hidden="true" />
            {content.primaryCta}
            <ArrowRightIcon
              className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
          <a
            href={content.secondaryCtaHref}
            className={cn(
              'group inline-flex items-center justify-center gap-2 px-lg py-3 rounded-md',
              'border border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-fg)] text-xsm font-bold',
              'transition-colors hover:border-[var(--term-accent)] hover:text-[var(--term-accent)]',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
            )}
          >
            <CodeIcon className="h-4 w-4" aria-hidden="true" />
            {content.secondaryCta}
            <ArrowRightIcon
              className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
        </div>
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
