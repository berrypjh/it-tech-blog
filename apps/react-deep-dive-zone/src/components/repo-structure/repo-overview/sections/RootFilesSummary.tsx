import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../getting-started/_shared/SectionHeader';
import { ToneBadge } from '../../../getting-started/_shared/ToneBadge';
import { ToneCard } from '../../../getting-started/_shared/ToneCard';
import { ToneIconBox } from '../../../getting-started/_shared/ToneIconBox';
import { toneTokens } from '../../../getting-started/_shared/tones';
import type { RepoOverviewContent } from '../content';
import { FileTextIcon, StarIcon } from '../icons';

type Props = { content: RepoOverviewContent['rootFiles'] };

export const RootFilesSummary = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-root-files" className="space-y-md">
      <SectionHeader
        id="root-files"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<FileTextIcon className="h-5 w-5" />}
      />

      <ul className="grid grid-cols-1 md:grid-cols-3 gap-md">
        {content.cards.map((card) => {
          const tone = toneTokens[card.tone];

          return (
            <li key={card.id}>
              <ToneCard tone={card.tone}>
                <header className="flex items-center justify-between gap-sm">
                  <div className="flex items-center gap-sm min-w-0">
                    <ToneIconBox tone={card.tone} size="sm">
                      <FileTextIcon className="h-4 w-4" aria-hidden="true" />
                    </ToneIconBox>
                    <span className={cn('text-sm font-bold font-mono tracking-tight', tone.text)}>
                      {card.name}
                    </span>
                  </div>
                  <ToneBadge tone={card.tone}>{card.badge}</ToneBadge>
                </header>

                <p
                  className={cn(
                    'text-xsm sm:text-sm font-bold leading-snug text-[var(--term-fg)] break-keep',
                  )}
                >
                  {card.shortDescription}
                </p>

                <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep mt-auto">
                  {card.longDescription}
                </p>
              </ToneCard>
            </li>
          );
        })}
      </ul>

      <div
        className={cn(
          'mt-md flex items-start gap-sm rounded-lg border px-md py-md',
          'border-sky-200/80 bg-sky-50/70 text-sky-900',
          'dark:border-sky-800/60 dark:bg-sky-950/30 dark:text-sky-100',
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-8 h-8 rounded shrink-0',
            'bg-sky-500 text-white dark:bg-sky-400 dark:text-slate-950',
          )}
        >
          <StarIcon className="h-4 w-4" />
        </span>
        <p className="text-xsm sm:text-sm leading-snug font-medium break-keep">{content.banner}</p>
      </div>
    </section>
  );
};
