import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import { ToneIconBox } from '../../../shared/ToneIconBox';
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
          'border-teal-300/80 bg-teal-50/70',
          'dark:border-teal-800/70 dark:bg-teal-950/30',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        {/* 글로우 + 큰 전구 장식 */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_88%_12%,rgba(45,212,191,0.22),transparent_55%)]"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-6 -bottom-10 text-teal-200/50 dark:text-teal-800/25"
        >
          <LightbulbIcon className="h-40 w-40" />
        </span>

        <div className="relative flex flex-col gap-md">
          {/* 다루는 질문(주제) */}
          <div className="flex items-center gap-sm">
            <ToneIconBox tone="teal" size="md">
              <LightbulbIcon className="h-5 w-5" aria-hidden="true" />
            </ToneIconBox>
            <span className="min-w-0 text-sm font-bold text-teal-800 dark:text-teal-200 break-keep">
              {content.question}
            </span>
          </div>

          {/* 핵심 답 (헤드라인) */}
          <p className="text-lg sm:text-2xl font-bold leading-snug text-teal-900 dark:text-teal-50 break-keep">
            {content.answer}
          </p>

          {/* 보조 설명 (inset 박스) */}
          <div
            className={cn(
              'rounded-xl border p-md',
              'border-teal-200/70 bg-white/70 text-teal-900',
              'dark:border-teal-800/50 dark:bg-teal-950/40 dark:text-teal-100',
            )}
          >
            <p className="text-xsm sm:text-sm leading-relaxed break-keep">{content.answerDetail}</p>
          </div>
        </div>
      </article>
    </section>
  );
};
