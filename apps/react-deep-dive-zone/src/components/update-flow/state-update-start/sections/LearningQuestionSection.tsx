import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { StateUpdateStartContent } from '../content';
import { CheckCircleIcon, HelpCircleIcon } from '../icons';

type Props = { content: StateUpdateStartContent['question'] };

const sky = toneTokens.sky;
const emerald = toneTokens.emerald;

export const LearningQuestionSection = ({ content }: Props) => (
  <section id="section-question" aria-labelledby="heading-question" className="space-y-md">
    <SectionHeader
      id="question"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<HelpCircleIcon className="h-5 w-5" />}
    />

    <article className="rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_minmax(0,_1.2fr)] gap-md lg:gap-lg items-stretch">
        {/* 질문 */}
        <div className="flex items-start gap-sm">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border font-mono font-bold text-md',
              sky.chip,
            )}
          >
            Q.
          </span>
          <div className="flex flex-col gap-1 min-w-0">
            <span className={cn('text-[10px] uppercase tracking-wider font-mono', sky.text)}>
              {content.questionLabel}
            </span>
            <p className="text-md sm:text-lg font-bold leading-snug text-[var(--term-fg)] break-keep">
              {content.question}
            </p>
          </div>
        </div>

        {/* 정답 */}
        <div className="flex flex-col gap-sm pt-sm border-t border-dashed border-[var(--term-border)] lg:border-t-0 lg:pt-0 lg:pl-lg lg:border-l">
          <div className="flex items-center gap-sm">
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex h-9 w-9 items-center justify-center rounded-full border font-mono font-bold',
                emerald.chip,
              )}
            >
              A.
            </span>
            <span className={cn('text-[10px] uppercase tracking-wider font-mono', emerald.text)}>
              {content.answerLabel}
            </span>
          </div>

          <div
            className={cn(
              'flex items-start gap-sm rounded-lg border p-md',
              emerald.border,
              emerald.fill.bg,
            )}
          >
            <CheckCircleIcon
              aria-hidden="true"
              className={cn('mt-0.5 h-5 w-5 shrink-0', emerald.text)}
            />
            <div className="flex flex-col gap-1.5 min-w-0">
              <p
                className={cn(
                  'text-sm sm:text-md font-bold leading-snug break-keep',
                  emerald.fill.text,
                )}
              >
                {content.answerTitle}
              </p>
              <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
                {content.answerBody}
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  </section>
);
