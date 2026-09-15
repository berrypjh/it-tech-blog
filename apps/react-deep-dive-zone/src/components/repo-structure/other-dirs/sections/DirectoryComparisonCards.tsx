import { cx } from '@berrypjh/react-ui';
import { Cuboid, FlaskConical, Folder, type LucideIcon, TerminalSquare } from 'lucide-react';

import { SectionBadgeHeader } from '../../../shared/section';
import { ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { SurroundingContent } from '../content';

const dirIcon: Record<'fixtures' | 'scripts' | 'compiler', LucideIcon> = {
  fixtures: FlaskConical,
  scripts: TerminalSquare,
  compiler: Cuboid,
};

type Props = { content: SurroundingContent['comparison'] };

export const DirectoryComparisonCards = ({ content }: Props) => {
  return (
    <section
      id="comparison"
      aria-labelledby="heading-comparison"
      className="space-y-md scroll-mt-xl"
    >
      <SectionBadgeHeader
        descriptionFullWidth
        id="comparison"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<Folder className="h-5 w-5" aria-hidden="true" />}
      />

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-md">
        {content.cards.map((card) => {
          const Icon = dirIcon[card.id];

          return (
            <ToneCardItem
              key={card.id}
              tone={card.tone}
              icon={<Icon className="h-5 w-5" aria-hidden="true" />}
            >
              <h3 className="text-md sm:text-lg font-bold font-mono tracking-tight text-[var(--term-fg)] break-keep leading-snug">
                {card.name}
              </h3>

              <p className={cx('text-xsm font-bold', toneTokens[card.tone].text)}>
                {card.subtitle}
              </p>

              <p className="text-xsm text-[var(--term-muted)] leading-relaxed break-keep flex-1">
                {card.description}
              </p>
            </ToneCardItem>
          );
        })}
      </ul>
    </section>
  );
};
