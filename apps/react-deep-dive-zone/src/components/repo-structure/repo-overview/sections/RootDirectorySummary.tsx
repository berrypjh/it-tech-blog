import { cx } from '@berrypjh/react-ui';
import { FlaskConical, Folder, type LucideIcon, Sparkles, TerminalSquare } from 'lucide-react';

import { SectionBadgeHeader } from '../../../shared/section';
import { ToneCardGrid, ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { DirectoryCard, RepoOverviewContent } from '../content';

const cardIcon: Record<DirectoryCard['id'], LucideIcon> = {
  packages: Folder,
  fixtures: FlaskConical,
  scripts: TerminalSquare,
  compiler: Sparkles,
};

type Props = { content: RepoOverviewContent['directory'] };

export const RootDirectorySummary = ({ content }: Props) => {
  return (
    <section id="directory" aria-labelledby="heading-directory" className="space-y-md scroll-mt-xl">
      <SectionBadgeHeader
        id="directory"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<Folder className="h-5 w-5" aria-hidden="true" />}
      />

      <ToneCardGrid>
        {content.cards.map((card) => {
          const Icon = cardIcon[card.id];

          return (
            <ToneCardItem
              key={card.id}
              tone={card.tone}
              icon={<Icon className="h-5 w-5" aria-hidden="true" />}
            >
              <h3
                className={cx(
                  'text-md sm:text-lg font-bold tracking-tight font-mono',
                  toneTokens[card.tone].text,
                )}
              >
                {card.name}
              </h3>

              <p className="text-sm font-bold text-[var(--term-fg)] break-keep">{card.title}</p>

              <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                {card.description}
              </p>
            </ToneCardItem>
          );
        })}
      </ToneCardGrid>
    </section>
  );
};
