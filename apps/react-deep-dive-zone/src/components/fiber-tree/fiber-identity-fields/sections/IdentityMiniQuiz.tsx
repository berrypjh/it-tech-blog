import { cn } from '@it-tech-blog/utils';

import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { FiberIdentityFieldsContent } from '../content';
import { ArrowRightIcon, HelpCircleIcon, LightbulbIcon } from '../icons';

type Props = { content: FiberIdentityFieldsContent['quiz'] };

export const IdentityMiniQuiz = ({ content }: Props) => (
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
            <span className="font-normal">
              <span className="font-bold">{content.explanationLabel}</span> — {content.explanation}
            </span>
          </SectionNote>
        </div>

        <div className="min-w-0">
          <ElementVsFiberDiagram diagram={content.diagram} />
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

const ElementVsFiberDiagram = ({
  diagram,
}: {
  diagram: FiberIdentityFieldsContent['quiz']['diagram'];
}) => (
  <div className="grid grid-cols-[1fr_auto_1fr] gap-2 items-stretch min-w-0">
    <article
      className={cn(
        'flex flex-col gap-1 rounded-xl border bg-[var(--term-surface)] p-sm',
        'border-[var(--term-border)]',
      )}
    >
      <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-[var(--term-muted)]">
        {diagram.elementLabel}
      </span>
      <code className={cn('font-mono text-[11.5px] break-all', toneTokens.amber.text)}>
        {diagram.elementType}
      </code>
    </article>

    <span
      aria-hidden="true"
      className="self-center inline-flex items-center justify-center w-8 h-8 rounded-full border border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-accent)] shadow-[0_1px_0_var(--term-border)]"
    >
      <ArrowRightIcon className="h-4 w-4" />
    </span>

    <article
      className={cn(
        'flex flex-col gap-1 rounded-xl border bg-[var(--term-bg)] p-sm',
        toneTokens.sky.border,
      )}
    >
      <span
        className={cn(
          'text-[10px] font-mono uppercase tracking-wider font-bold',
          toneTokens.sky.text,
        )}
      >
        {diagram.fiberLabel}
      </span>
      <code className={cn('font-mono text-[11.5px] break-all', toneTokens.violet.text)}>
        {diagram.fiberElementType}
      </code>
      <code className={cn('font-mono text-[11.5px] break-all', toneTokens.amber.text)}>
        {diagram.fiberType}
      </code>
    </article>
  </div>
);
