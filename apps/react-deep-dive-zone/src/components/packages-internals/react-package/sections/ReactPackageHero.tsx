import { cn } from '@it-tech-blog/utils';

import { HeroDescription } from '../../../getting-started/_shared/HeroDescription';
import { HeroSection } from '../../../getting-started/_shared/HeroSection';
import { HeroTextColumn } from '../../../getting-started/_shared/HeroTextColumn';
import { HeroTitle } from '../../../getting-started/_shared/HeroTitle';
import { HeroVisualColumn } from '../../../getting-started/_shared/HeroVisualColumn';
import { TerminalBadge } from '../../../getting-started/_shared/TerminalBadge';
import { ApiNetworkDiagram } from '../components/ApiNetworkDiagram';
import type { ReactPackageContent } from '../content';
import { ArrowRightIcon, BookOpenIcon, PlayCircleIcon } from '../icons';

type Props = { content: ReactPackageContent['hero'] };

export const ReactPackageHero = ({ content }: Props) => {
  return (
    <HeroSection
      promptCommand="cat"
      promptPath="packages/react/src/ReactClient.js"
      gridColumns="lg:grid-cols-[minmax(0,_0.92fr)_minmax(0,_1.08fr)]"
      align="center"
    >
      <HeroTextColumn>
        <TerminalBadge size="md" className="w-fit">
          {content.badge}
        </TerminalBadge>

        <HeroTitle>
          <span className="block">{content.title.line1}</span>
          <span className="block text-[var(--term-accent)]">{content.title.line2}</span>
        </HeroTitle>

        <HeroDescription>{content.description}</HeroDescription>

        <div className="flex flex-col sm:flex-row gap-sm pt-xs">
          <a
            href={content.primaryCtaHref}
            className={cn(
              'group inline-flex items-center justify-center gap-2 px-lg py-3 rounded-md',
              'bg-sky-600 text-white text-xsm font-bold tracking-tight',
              'transition-colors hover:bg-sky-700',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
              'dark:bg-sky-500 dark:hover:bg-sky-400 dark:text-slate-950',
            )}
          >
            <BookOpenIcon className="h-4 w-4" aria-hidden="true" />
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
            <PlayCircleIcon className="h-4 w-4" aria-hidden="true" />
            {content.secondaryCta}
            <ArrowRightIcon
              className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
        </div>
      </HeroTextColumn>

      <HeroVisualColumn id="hero-api-network">
        <ApiNetworkDiagram hero={content} />
      </HeroVisualColumn>
    </HeroSection>
  );
};
