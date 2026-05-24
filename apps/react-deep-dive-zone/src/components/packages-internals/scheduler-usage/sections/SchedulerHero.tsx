import { cn } from '@it-tech-blog/utils';

import { HeroDescription } from '../../../start/_shared/HeroDescription';
import { HeroSection } from '../../../start/_shared/HeroSection';
import { HeroTextColumn } from '../../../start/_shared/HeroTextColumn';
import { HeroTitle } from '../../../start/_shared/HeroTitle';
import { HeroVisualColumn } from '../../../start/_shared/HeroVisualColumn';
import { TerminalBadge } from '../../../start/_shared/TerminalBadge';
import { QueueFlowDiagram } from '../components/QueueFlowDiagram';
import type { SchedulerContent } from '../content';
import { ArrowRightIcon, CodeIcon, ListOrderedIcon } from '../icons';

type Props = { content: SchedulerContent['hero'] };

export const SchedulerHero = ({ content }: Props) => {
  return (
    <HeroSection
      promptCommand="cat"
      promptPath="packages/scheduler/src/forks/Scheduler.js"
      gridColumns="lg:grid-cols-[minmax(0,_0.85fr)_minmax(0,_1.15fr)]"
      align="start"
    >
      <HeroTextColumn>
        <TerminalBadge size="md" className="w-fit">
          {content.badge}
        </TerminalBadge>

        <HeroTitle>
          <span className="block">{content.title.line1}</span>
          <span className="block text-[var(--term-accent)]">{content.title.line2}</span>
          {content.title.line3 && <span className="block">{content.title.line3}</span>}
        </HeroTitle>

        <HeroDescription>{content.description}</HeroDescription>

        <div className="flex flex-col sm:flex-row gap-sm pt-xs">
          <a
            href={content.primaryCtaHref}
            className={cn(
              'group inline-flex items-center justify-center gap-2 px-lg py-3 rounded-md',
              'bg-violet-600 text-white text-xsm font-bold tracking-tight',
              'transition-colors hover:bg-violet-700',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
              'dark:bg-violet-500 dark:hover:bg-violet-400 dark:text-slate-950',
            )}
          >
            <ListOrderedIcon className="h-4 w-4" aria-hidden="true" />
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

      <HeroVisualColumn id="hero-queue">
        <QueueFlowDiagram hero={content} />
      </HeroVisualColumn>
    </HeroSection>
  );
};
