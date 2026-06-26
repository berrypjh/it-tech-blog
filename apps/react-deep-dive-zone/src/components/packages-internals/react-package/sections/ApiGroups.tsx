import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import { ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { ReactPackageContent } from '../content';
import { reactPackageIcon, SparklesIcon } from '../icons';

type Props = { content: ReactPackageContent['groups'] };

export const ApiGroups = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-groups" className="space-y-md scroll-mt-xl">
      <SectionBadgeHeader
        id="groups"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<SparklesIcon className="h-5 w-5" />}
      />

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-md">
        {content.cards.map((card) => {
          const Icon = reactPackageIcon[card.iconName];

          return (
            <ToneCardItem
              key={card.id}
              tone={card.tone}
              icon={<Icon className="h-5 w-5" />}
              topRight={card.number}
            >
              <h3
                className={cn(
                  'text-md font-bold tracking-tight break-keep',
                  toneTokens[card.tone].text,
                )}
              >
                {card.title}
              </h3>

              <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                {card.description}
              </p>

              <ul
                className={cn(
                  'mt-auto flex flex-col gap-1 rounded-lg border px-3 py-2 font-mono',
                  'border-dashed border-[var(--term-border)] bg-[var(--term-surface)]',
                )}
              >
                {card.apis.map((api) => (
                  <li
                    key={api}
                    className={cn(
                      'flex items-center gap-1.5 text-[11px] leading-snug',
                      toneTokens[card.tone].text,
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={cn(
                        'inline-block w-1 h-1 shrink-0 rounded-full',
                        toneTokens[card.tone].dot,
                      )}
                    />
                    <span className="min-w-0 truncate">{api}</span>
                  </li>
                ))}
              </ul>
            </ToneCardItem>
          );
        })}
      </ul>
    </section>
  );
};
