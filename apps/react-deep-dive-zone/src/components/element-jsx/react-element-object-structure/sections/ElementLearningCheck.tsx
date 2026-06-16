import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import type { ReactElementObjectStructureContent } from '../content';
import { HelpCircleIcon, LightbulbIcon } from '../icons';

type Props = { content: ReactElementObjectStructureContent['learningCheck'] };

export const ElementLearningCheck = ({ content }: Props) => (
  <section aria-labelledby="heading-check" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="check"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<LightbulbIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'relative flex items-start gap-md overflow-hidden rounded-2xl border py-md pl-lg pr-md',
        'border-[var(--term-border)] bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      {/* 좌측 강조 바 */}
      <span
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-1.5 bg-[var(--term-accent)]"
      />

      <span
        aria-hidden="true"
        className={cn(
          'inline-flex items-center justify-center w-12 h-12 rounded-2xl border shrink-0',
          'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-accent)]',
        )}
      >
        <LightbulbIcon className="h-6 w-6" />
      </span>

      <div className="flex flex-col gap-2 min-w-0">
        {/* 맥락: 질문을 작은 줄로 */}
        <span className="inline-flex items-center gap-1.5 text-xsm text-[var(--term-muted)] break-keep">
          <HelpCircleIcon
            aria-hidden="true"
            className="h-4 w-4 shrink-0 text-[var(--term-accent)]"
          />
          {content.question}
        </span>

        {/* 결론을 한 문장 통찰로 */}
        <p className="text-md sm:text-lg font-bold leading-snug text-[var(--term-fg)] break-keep">
          {content.answer}
        </p>
        <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
          {content.answerNote}
        </p>
      </div>
    </article>
  </section>
);
