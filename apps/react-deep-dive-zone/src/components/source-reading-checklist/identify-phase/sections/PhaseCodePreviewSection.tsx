import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import type { PhaseDetectionContent } from '../content';
import { FileCodeIcon, SparkIcon } from '../icons';
import { getPhaseClasses, PhaseBadge } from '../PhaseBadge';

type Props = { content: PhaseDetectionContent['codePreview'] };

export const PhaseCodePreviewSection = ({ content }: Props) => {
  return (
    <section
      id="section-code-preview"
      aria-labelledby="heading-code-preview"
      className="space-y-lg"
    >
      <SectionHeader
        id="code-preview"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.intro}
        icon={<FileCodeIcon className="h-5 w-5" />}
      />

      <ul className="grid grid-cols-1 lg:grid-cols-3 gap-md">
        {content.cards.map((card) => {
          const t = getPhaseClasses(card.phase);
          return (
            <li key={card.phase}>
              <article
                className={cn(
                  'group flex h-full flex-col gap-md rounded-2xl border-2 p-md',
                  'bg-white dark:bg-[var(--term-bg)]',
                  t.border,
                  'shadow-[0_2px_0_var(--term-border)]',
                  'transition-all motion-safe:hover:-translate-y-0.5',
                  t.borderHover,
                )}
              >
                <header className="flex items-center justify-between">
                  <PhaseBadge phase={card.phase} size="md" strong />
                </header>

                {/* Code panel (dark) */}
                <pre
                  className={cn(
                    'overflow-x-auto rounded-md border px-3 py-2.5',
                    'border-slate-700 bg-slate-900 text-slate-100',
                    'dark:border-slate-700',
                    'font-mono text-xsm leading-relaxed',
                  )}
                >
                  <code>{card.code}</code>
                </pre>

                {/* Body */}
                <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                  {card.body}
                </p>

                {/* Why this phase */}
                <div
                  className={cn(
                    'mt-auto flex items-start gap-2 rounded-md border-2 p-3',
                    t.border,
                    t.chip,
                  )}
                >
                  <SparkIcon className={cn('mt-0.5 h-4 w-4 shrink-0', t.text)} aria-hidden="true" />
                  <div className="flex flex-col">
                    <span className={cn('text-[10px] font-mono uppercase tracking-wider', t.text)}>
                      {content.whyLabel}
                    </span>
                    <p className={cn('text-xsm font-bold leading-snug break-keep', t.text)}>
                      {card.why}
                    </p>
                  </div>
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
