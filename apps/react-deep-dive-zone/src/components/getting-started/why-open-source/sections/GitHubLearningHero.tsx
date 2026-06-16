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

const houseBase = {
  bg: 'bg-[var(--term-surface)]',
  border: 'border-[var(--term-border)]',
  iconBg: 'bg-[var(--term-surface)] border border-[var(--term-border)]',
};

// 소프트 액센트 3색: A amber / B sky / C violet (텍스트 색만)
const A = {
  ...houseBase,
  text: 'text-[var(--term-accent)]',
  iconText: 'text-[var(--term-accent)]',
};
const B = {
  ...houseBase,
  text: 'text-sky-600 dark:text-sky-300',
  iconText: 'text-sky-600 dark:text-sky-300',
};
const C = {
  ...houseBase,
  text: 'text-violet-600 dark:text-violet-300',
  iconText: 'text-violet-600 dark:text-violet-300',
};

// 키 선언 순서대로 [A, B, C, A] 순환
const pillToneClasses: Record<PillTone, typeof A> = {
  blue: A,
  green: B,
  lavender: C,
  teal: A,
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
