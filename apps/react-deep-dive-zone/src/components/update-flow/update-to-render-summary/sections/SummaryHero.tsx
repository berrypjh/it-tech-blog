import {
  HeroDescription,
  HeroSection,
  HeroTextColumn,
  HeroTitle,
  HeroVisualColumn,
} from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/terminal';
import { SummaryHeroDiagram } from '../components/SummaryHeroDiagram';
import type { FlowStepIconName, UpdateToRenderSummaryContent } from '../content';
import {
  CheckCircleIcon,
  CircleHelpIcon,
  ClockIcon,
  CodeIcon,
  DatabaseIcon,
  FlagIcon,
  GitBranchIcon,
  HourglassIcon,
  MousePointerClickIcon,
  PanelsTopLeftIcon,
  SearchIcon,
  ServerIcon,
  WorkflowIcon,
  ZapIcon,
} from '../icons';

type Props = { content: UpdateToRenderSummaryContent['hero'] };

export const flowIconMap: Record<FlowStepIconName, typeof MousePointerClickIcon> = {
  mousePointer: MousePointerClickIcon,
  code: CodeIcon,
  workflow: WorkflowIcon,
  search: SearchIcon,
  panels: PanelsTopLeftIcon,
  server: ServerIcon,
  circleHelp: CircleHelpIcon,
  database: DatabaseIcon,
  gitBranch: GitBranchIcon,
  flag: FlagIcon,
  zap: ZapIcon,
  checkCircle: CheckCircleIcon,
  clock: ClockIcon,
  hourglass: HourglassIcon,
};

export const SummaryHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="update-request → render-phase.md"
    promptSuffix={<span className="text-[var(--term-dim)]"> {'// summary'}</span>}
    gridColumns="lg:grid-cols-[minmax(0,_0.78fr)_minmax(0,_1.22fr)]"
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
      </HeroTitle>

      <HeroDescription maxWidth="max-w-[58ch]">{content.description}</HeroDescription>
    </HeroTextColumn>

    <HeroVisualColumn id="hero-update-summary" className="min-w-0">
      <SummaryHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroSection>
);
