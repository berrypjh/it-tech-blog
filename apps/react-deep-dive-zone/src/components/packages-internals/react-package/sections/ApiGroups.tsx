import { cx } from '@berrypjh/react-ui';
import { Code, GitBranch, Layers, type LucideIcon, Network, Sparkles, User } from 'lucide-react';

import { SectionBadgeHeader } from '../../../shared/section';
import { ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { ApiGroupCard, ReactPackageContent } from '../content';

type Props = { content: ReactPackageContent['groups'] };

const groupIcon: Record<ApiGroupCard['id'], LucideIcon> = {
  element: Code,
  component: User,
  context: Network,
  hooks: GitBranch,
  composition: Layers,
};

export const ApiGroups = ({ content }: Props) => {
  return (
    <section id="groups" aria-labelledby="heading-groups" className="space-y-md scroll-mt-xl">
      <SectionBadgeHeader
        descriptionFullWidth
        id="groups"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<Sparkles className="h-5 w-5" aria-hidden="true" />}
      />

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-md">
        {content.cards.map((card) => {
          const Icon = groupIcon[card.id];

          return (
            <ToneCardItem
              key={card.id}
              tone={card.tone}
              icon={<Icon className="h-5 w-5" aria-hidden="true" />}
              topRight={card.number}
            >
              <h3
                className={cx(
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
                className={cx(
                  'mt-auto flex flex-col gap-1 rounded-lg border px-3 py-2 font-mono',
                  'border-dashed border-[var(--term-border)] bg-[var(--term-surface)]',
                )}
              >
                {card.apis.map((api) => (
                  <li
                    key={api}
                    className={cx(
                      'flex items-center gap-1.5 text-[11px] leading-snug',
                      toneTokens[card.tone].text,
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={cx(
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
