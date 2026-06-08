import { cn } from '@it-tech-blog/utils';

import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { GitHubConnectedDiagram } from '../components/GitHubConnectedDiagram';
import type { KeywordPill, WhyOpenSourceContent } from '../content';
import { ChatIcon, CodeIcon, FlaskIcon, GitCommitIcon } from '../icons';

type Props = { content: WhyOpenSourceContent['hero'] };

type PillTone = KeywordPill['tone'];

const pillToneClasses: Record<
  PillTone,
  { bg: string; text: string; border: string; iconBg: string; iconText: string }
> = {
  blue: {
    bg: 'bg-sky-50 dark:bg-sky-950/50',
    text: 'text-sky-700 dark:text-sky-200',
    border: 'border-sky-200 dark:border-sky-800/70',
    iconBg: 'bg-sky-500 dark:bg-sky-400',
    iconText: 'text-white dark:text-slate-900',
  },
  green: {
    bg: 'bg-emerald-50 dark:bg-emerald-950/50',
    text: 'text-emerald-700 dark:text-emerald-200',
    border: 'border-emerald-200 dark:border-emerald-800/70',
    iconBg: 'bg-emerald-500 dark:bg-emerald-400',
    iconText: 'text-white dark:text-slate-900',
  },
  lavender: {
    bg: 'bg-violet-50 dark:bg-violet-950/50',
    text: 'text-violet-700 dark:text-violet-200',
    border: 'border-violet-200 dark:border-violet-800/70',
    iconBg: 'bg-violet-500 dark:bg-violet-400',
    iconText: 'text-white dark:text-slate-900',
  },
  teal: {
    bg: 'bg-teal-50 dark:bg-teal-950/50',
    text: 'text-teal-700 dark:text-teal-200',
    border: 'border-teal-200 dark:border-teal-800/70',
    iconBg: 'bg-teal-500 dark:bg-teal-400',
    iconText: 'text-white dark:text-slate-900',
  },
};

const pillIcon = {
  source: CodeIcon,
  tests: FlaskIcon,
  commits: GitCommitIcon,
  issues: ChatIcon,
} as const;

export const GitHubLearningHero = ({ content }: Props) => {
  return (
    <HeroSection promptCommand="gh repo view" promptPath="facebook/react" align="center">
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

        <HeroDescription maxWidth="max-w-[58ch]">{content.description}</HeroDescription>

        {/* keyword pills */}
        <ul className="flex flex-wrap gap-2 mt-1">
          {content.pills.map((p) => {
            const t = pillToneClasses[p.tone];
            const Icon = pillIcon[p.id];
            return (
              <li key={p.id}>
                <span
                  className={cn(
                    'inline-flex items-center gap-1.5 pl-1 pr-2.5 py-1 rounded-full text-xxsm font-bold border',
                    t.bg,
                    t.text,
                    t.border,
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-flex items-center justify-center w-5 h-5 rounded-full',
                      t.iconBg,
                      t.iconText,
                    )}
                  >
                    <Icon className="h-3 w-3" />
                  </span>
                  {p.label}
                </span>
              </li>
            );
          })}
        </ul>
      </HeroTextColumn>

      <HeroVisualColumn>
        <GitHubConnectedDiagram diagram={content.diagram} />
      </HeroVisualColumn>
    </HeroSection>
  );
};
