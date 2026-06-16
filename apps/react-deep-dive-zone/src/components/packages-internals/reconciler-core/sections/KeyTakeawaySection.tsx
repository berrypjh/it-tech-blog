import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import type { ReconcilerContent } from '../content';
import { LightbulbIcon, SparklesIcon } from '../icons';

type Props = { content: ReconcilerContent['concept'] };

/**
 * 개념 점검(Q/A) 대신 같은 내용을 "핵심 정리" 인사이트 카드로 보여준다.
 * 다루는 질문(주제) → 핵심 답(헤드라인) → 보조 설명(inset) 순으로 읽힌다.
 */
export const KeyTakeawaySection = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-takeaway" className="space-y-md">
      <SectionHeader
        id="takeaway"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<SparklesIcon className="h-5 w-5" />}
      />

      <article
        className={cn(
          'relative overflow-hidden rounded-2xl border p-md sm:p-lg',
          'border-[var(--term-border)] bg-[var(--term-surface)]',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        {/* 큰 전구 장식 */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-6 -bottom-10 text-[var(--term-border)]"
        >
          <LightbulbIcon className="h-40 w-40" />
        </span>

        <div className="relative flex flex-col gap-md">
          {/* 다루는 질문(주제) */}
          <div className="flex items-center gap-sm">
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex h-11 w-11 items-center justify-center rounded-md',
                'bg-[var(--term-surface)] border border-[var(--term-border)] text-[var(--term-accent)]',
              )}
            >
              <LightbulbIcon className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="min-w-0 text-sm font-bold text-[var(--term-accent)] break-keep">
              {content.question}
            </span>
          </div>

          {/* 핵심 답 (헤드라인) */}
          <p className="text-lg sm:text-2xl font-bold leading-snug text-[var(--term-fg)] break-keep">
            {content.answer}
          </p>

          {/* 보조 설명 (inset 박스) */}
          <div
            className={cn(
              'rounded-xl border p-md',
              'border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-fg)]',
            )}
          >
            <p className="text-xsm sm:text-sm leading-relaxed break-keep">{content.answerDetail}</p>
          </div>
        </div>
      </article>
    </section>
  );
};
