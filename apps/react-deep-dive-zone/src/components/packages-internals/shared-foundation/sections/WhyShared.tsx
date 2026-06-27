import { cn } from '@it-tech-blog/utils';

import { ContrastCard, StatusPill } from '../../../shared/compare';
import { SectionHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { SharedContent } from '../content';
import { CheckCircleIcon, SparklesIcon, XCircleIcon } from '../icons';

type Props = { content: SharedContent['why'] };

export const WhyShared = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-why" className="space-y-md">
      <SectionHeader
        id="why"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<SparklesIcon className="h-5 w-5" />}
      />

      <ContrastCard
        left={
          <article className="flex flex-col gap-sm p-md sm:p-lg lg:p-xl">
            <StatusPill
              icon={<XCircleIcon className="h-3.5 w-3.5" aria-hidden="true" />}
              tone="text-rose-600 dark:text-rose-300"
            >
              {content.problem.title}
            </StatusPill>

            <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep">
              {content.problem.body}
            </p>
          </article>
        }
        right={
          <article className="flex flex-col gap-sm p-md sm:p-lg lg:p-xl">
            <StatusPill
              icon={<CheckCircleIcon className="h-3.5 w-3.5" aria-hidden="true" />}
              tone="text-[var(--term-accent)]"
            >
              {content.solution.title}
            </StatusPill>

            <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep">
              {content.solution.body}
            </p>
          </article>
        }
        footer={
          <div className="flex flex-col gap-sm border-t border-dashed border-[var(--term-border)] p-md sm:p-lg lg:p-xl">
            <h3 className="text-md font-bold tracking-tight text-[var(--term-fg)] break-keep">
              {content.example.title}
            </h3>
            <ul className="flex flex-wrap gap-1.5">
              {content.example.tags.map((tag) => (
                <li key={tag.id}>
                  <span
                    className={cn(
                      'inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-mono font-bold tracking-tight',
                      'bg-[var(--term-surface)] border border-[var(--term-border)]',
                      toneTokens[tag.tone].text,
                    )}
                  >
                    {tag.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        }
      />
    </section>
  );
};
