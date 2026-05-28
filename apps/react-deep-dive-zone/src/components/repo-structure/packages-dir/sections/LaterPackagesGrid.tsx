import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import { ToneCard } from '../../../shared/ToneCard';
import { ToneIconBox } from '../../../shared/ToneIconBox';
import { toneTokens } from '../../../shared/tones';
import type { PackagesDirectoryContent } from '../content';
import { InfoIcon, packageIconByName, SparklesIcon } from '../icons';

type Props = { content: PackagesDirectoryContent['later'] };

export const LaterPackagesGrid = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-later" className="space-y-md">
      <SectionHeader
        id="later"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<SparklesIcon className="h-5 w-5" />}
      />

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-md">
        {content.cards.map((card) => {
          const tone = toneTokens[card.tone];
          const Icon = packageIconByName[card.icon];

          return (
            <li key={card.id}>
              <ToneCard tone={card.tone}>
                <ToneIconBox tone={card.tone} size="sm">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </ToneIconBox>

                <h3
                  className={cn(
                    'text-sm sm:text-md font-bold font-mono tracking-tight break-keep',
                    tone.text,
                  )}
                >
                  {card.name}
                </h3>

                <p className="text-xsm font-bold text-[var(--term-fg)] leading-snug break-keep">
                  {card.description1}
                </p>

                <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep mt-auto">
                  {card.description2}
                </p>
              </ToneCard>
            </li>
          );
        })}
      </ul>

      <div
        className={cn(
          'flex items-start gap-sm rounded-lg border px-md py-md',
          'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-fg)]',
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-8 h-8 rounded-md shrink-0',
            'bg-[var(--term-accent)] text-[var(--term-bg)]',
          )}
        >
          <InfoIcon className="h-4 w-4" />
        </span>
        <p className="text-xsm sm:text-sm leading-snug font-medium break-keep">{content.banner}</p>
      </div>
    </section>
  );
};
