import { cn } from '@it-tech-blog/utils';

import {
  BookOpen,
  FileCode2,
  GitMerge,
  Info,
  Lightbulb,
  type LucideIcon,
  Sparkles,
} from 'lucide-react';

import { SectionHeader } from '../../../shared/SectionHeader';
import { ToneCard } from '../../../shared/ToneCard';
import { ToneIconBox } from '../../../shared/ToneIconBox';
import { toneTokens } from '../../../shared/tones';
import type { DocsLimitsContent, StrengthCardId } from '../content';

type Props = { content: DocsLimitsContent['strengths'] };

const strengthIcon: Record<StrengthCardId, LucideIcon> = {
  api: BookOpen,
  pattern: Sparkles,
  example: FileCode2,
  migration: GitMerge,
  concept: Lightbulb,
  caution: Info,
};

export const DocsStrengthCards = ({ content }: Props) => {
  return (
    <section id="section-strengths" aria-labelledby="heading-strengths" className="space-y-lg">
      <SectionHeader
        id="strengths"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<BookOpen className="h-5 w-5" />}
      />

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-md">
        {content.cards.map((card) => {
          const Icon = strengthIcon[card.id];
          const t = toneTokens[card.tone];
          return (
            <li key={card.id} className="flex">
              <ToneCard tone={card.tone}>
                <ToneIconBox tone={card.tone}>
                  <Icon className="h-5 w-5" />
                </ToneIconBox>

                <h3 className={cn('text-md sm:text-lg font-bold tracking-tight', t.text)}>
                  {card.title}
                </h3>
                <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                  {card.description}
                </p>

                <div className="mt-auto flex flex-col gap-1 pt-sm border-t border-dashed border-[var(--term-border)]">
                  <span className="text-[10px] uppercase tracking-wider text-[var(--term-dim)] font-bold">
                    {content.gainLabel}
                  </span>
                  <p className="text-[11px] leading-relaxed text-[var(--term-fg)] break-keep">
                    {card.gain}
                  </p>
                </div>
              </ToneCard>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
