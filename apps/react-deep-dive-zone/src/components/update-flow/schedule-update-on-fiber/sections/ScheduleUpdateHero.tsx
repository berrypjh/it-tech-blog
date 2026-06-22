import {
  HeroDescription,
  HeroSection,
  HeroTextColumn,
  HeroTitle,
  HeroVisualColumn,
} from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/terminal';
import { ScheduleUpdateHeroDiagram } from '../components/ScheduleUpdateHeroDiagram';
import type { ScheduleUpdateOnFiberContent } from '../content';

type Props = { content: ScheduleUpdateOnFiberContent['hero'] };

export const ScheduleUpdateHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="grep -n"
    promptPath="scheduleUpdateOnFiber"
    promptSuffix={
      <span className="text-[var(--term-dim)]">
        {' '}
        packages/react-reconciler/src/ReactFiberWorkLoop.js
      </span>
    }
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
        <span className="block">{content.title.line3}</span>
        <span className="block text-[var(--term-accent)]">{content.title.line4}</span>
      </HeroTitle>

      <HeroDescription maxWidth="max-w-[58ch]">{content.description}</HeroDescription>
    </HeroTextColumn>

    <HeroVisualColumn id="hero-schedule-update" className="min-w-0">
      <ScheduleUpdateHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroSection>
);
