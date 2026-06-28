import { cn } from '@it-tech-blog/utils';

import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { FiberNodeOverviewContent, QuizNode } from '../content';
import {
  ArrowRightIcon,
  FlagIcon,
  HelpCircleIcon,
  LightbulbIcon,
  LinkIcon,
  RefreshIcon,
  ZapIcon,
} from '../icons';

type Props = { content: FiberNodeOverviewContent['quiz'] };

const nodeIconMap = {
  refresh: RefreshIcon,
  flag: FlagIcon,
  zap: ZapIcon,
  link: LinkIcon,
} as const;

export const FiberMiniQuiz = ({ content }: Props) => (
  <section id="quiz" aria-labelledby="heading-quiz" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="quiz"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<HelpCircleIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'rounded-2xl border bg-[var(--term-bg)] p-md sm:p-lg',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1.3fr)_minmax(0,_1fr)] gap-md lg:gap-lg items-start">
        <div className="flex flex-col gap-md min-w-0">
          <div className="flex items-start gap-sm">
            <LetterBadge tone="sky">Q</LetterBadge>
            <div className="flex flex-col gap-1 min-w-0">
              <span
                className={cn(
                  'text-[10px] uppercase tracking-wider font-mono',
                  toneTokens.sky.text,
                )}
              >
                {content.questionLabel}
              </span>
              <p className="text-sm sm:text-md font-bold leading-snug text-[var(--term-fg)] break-keep">
                {content.question}
              </p>
            </div>
          </div>

          <div
            className={cn(
              'flex items-start gap-sm rounded-xl border p-md bg-[var(--term-surface)]',
              toneTokens.emerald.border,
            )}
          >
            <LetterBadge tone="emerald">A</LetterBadge>
            <div className="flex flex-col gap-1 min-w-0">
              <span
                className={cn(
                  'text-[10px] uppercase tracking-wider font-mono',
                  toneTokens.emerald.text,
                )}
              >
                {content.answerLabel}
              </span>
              <p className="text-sm sm:text-md font-bold leading-snug text-[var(--term-fg)] break-keep">
                {content.answer}
              </p>
            </div>
          </div>

          <SectionNote icon={<LightbulbIcon className="h-4 w-4" />}>
            <span className="font-normal">{content.explanation}</span>
          </SectionNote>
        </div>

        <div className="min-w-0">
          <BeforeAfter content={content} />
        </div>
      </div>
    </article>
  </section>
);

const LetterBadge = ({
  tone,
  children,
}: {
  tone: 'sky' | 'emerald';
  children: React.ReactNode;
}) => (
  <span
    aria-hidden="true"
    className={cn(
      'inline-flex items-center justify-center w-9 h-9 rounded-full border shrink-0 font-mono text-sm font-bold',
      toneTokens[tone].chip,
    )}
  >
    {children}
  </span>
);

const BeforeAfter = ({ content }: { content: FiberNodeOverviewContent['quiz'] }) => (
  <div className="rounded-2xl border border-[var(--term-border)] bg-[var(--term-surface)] p-md sm:p-lg">
    <div className="grid grid-cols-[1fr_auto_1fr] gap-sm items-center">
      <div className="flex flex-col items-center gap-2">
        <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
          {content.beforeLabel}
        </span>
        <ul className="flex flex-col items-center gap-1.5">
          {content.beforeNodes.map((node) => (
            <li
              key={node}
              className="rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] px-3 py-1.5 text-xxsm font-mono text-[var(--term-fg)]"
            >
              {node}
            </li>
          ))}
        </ul>
      </div>

      <span
        aria-hidden="true"
        className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-accent)] shadow-[0_1px_0_var(--term-border)]"
      >
        <ArrowRightIcon className="h-4 w-4" />
      </span>

      <div className="flex flex-col items-center gap-2">
        <span
          className={cn(
            'text-[10px] font-mono font-bold uppercase tracking-wider',
            toneTokens.sky.text,
          )}
        >
          {content.afterLabel}
        </span>
        <ul className="grid grid-cols-1 gap-1.5 w-full max-w-[180px]">
          {content.afterNodes.map((node) => (
            <li key={node.label}>
              <AfterNode node={node} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const AfterNode = ({ node }: { node: QuizNode }) => {
  const Icon = nodeIconMap[node.iconName];
  return (
    <span
      className={cn(
        'flex items-center gap-1.5 rounded-lg border px-2 py-1.5 text-[11px] font-mono',
        toneTokens.sky.chip,
      )}
    >
      <Icon aria-hidden="true" className="h-3.5 w-3.5 shrink-0" />
      <span className="truncate">{node.label}</span>
    </span>
  );
};
