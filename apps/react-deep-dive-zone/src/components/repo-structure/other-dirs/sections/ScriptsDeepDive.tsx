import { cx } from '@berrypjh/react-ui';
import {
  FileCode2,
  GitBranch,
  Info,
  type LucideIcon,
  Package,
  ShieldCheck,
  TerminalSquare,
} from 'lucide-react';

import { SectionNote } from '../../../shared/note';
import { SectionHeader } from '../../../shared/section';
import { ToneCardGrid, ToneCardItem } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { ScriptCard, SurroundingContent } from '../content';

const cardIcon: Record<ScriptCard['id'], LucideIcon> = {
  release: GitBranch,
  rollup: Package,
  'error-codes': FileCode2,
  eslint: ShieldCheck,
};

type Props = { content: SurroundingContent['scripts'] };

const tone: ToneKey = 'sky';

export const ScriptsDeepDive = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-scripts" className="space-y-lg">
      <SectionHeader
        id="scripts"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<TerminalSquare className="h-5 w-5" aria-hidden="true" />}
      />

      <ToneCardGrid>
        {content.cards.map((card) => {
          const Icon = cardIcon[card.id];

          return (
            <ToneCardItem
              key={card.id}
              tone={tone}
              icon={<Icon className="h-5 w-5" aria-hidden="true" />}
              badge={card.badge}
            >
              <h3
                className={cx(
                  'text-md sm:text-lg font-bold font-mono tracking-tight break-keep',
                  toneTokens[tone].text,
                )}
              >
                {card.name}
              </h3>

              <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                {card.description}
              </p>
            </ToneCardItem>
          );
        })}
      </ToneCardGrid>

      <SectionNote icon={<Info className="h-4 w-4" aria-hidden="true" />}>
        {content.banner}
      </SectionNote>
    </section>
  );
};
