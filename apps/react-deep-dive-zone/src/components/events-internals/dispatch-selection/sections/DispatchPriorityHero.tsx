import { cn } from '@it-tech-blog/utils';

import {
  HeroDescription,
  HeroSection,
  HeroTextColumn,
  HeroTitle,
  HeroVisualColumn,
} from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { DispatchPriorityHeroDiagram } from '../components/DispatchPriorityHeroDiagram';
import type { DispatchSelectionContent } from '../content';
import { CircleIcon, MousePointerClickIcon, WavesIcon } from '../icons';
import { priorityCard, priorityIconBox, priorityText } from '../priorityStyle';

type Props = { content: DispatchSelectionContent['hero'] };

const exampleIcons = [MousePointerClickIcon, WavesIcon, CircleIcon];

export const DispatchPriorityHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="react-dom/events/dispatch-priority.md"
    promptSuffix={
      <span className="text-[var(--term-dim)]">
        {' // Discrete · Continuous · Default → dispatch wrapper'}
      </span>
    }
    gridColumns="lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]"
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

      <HeroDescription maxWidth="max-w-[55ch]">{content.description}</HeroDescription>

      {/* Event mini cards */}
      <ul className="flex flex-col gap-2">
        {content.examples.map((ex, i) => {
          const Icon = exampleIcons[i] ?? MousePointerClickIcon;
          return (
            <li
              key={ex.name}
              className={cn(
                'group flex items-center gap-3 rounded-2xl border-2 px-md py-3 transition-colors',
                'shadow-[0_1px_0_var(--term-border)]',
                priorityCard[ex.tone],
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  'inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl',
                  priorityIconBox[ex.tone],
                )}
              >
                <Icon className="h-5 w-5" />
              </span>
              <code
                className={cn(
                  'font-mono text-md sm:text-lg font-bold break-all',
                  priorityText[ex.tone],
                )}
              >
                {ex.name}
              </code>
              <span className="ml-auto text-[11px] sm:text-xsm font-mono uppercase tracking-wider text-[var(--term-muted)] break-keep">
                {ex.tag}
              </span>
            </li>
          );
        })}
      </ul>
    </HeroTextColumn>

    <HeroVisualColumn id="hero-dispatch-selection">
      <DispatchPriorityHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroSection>
);
