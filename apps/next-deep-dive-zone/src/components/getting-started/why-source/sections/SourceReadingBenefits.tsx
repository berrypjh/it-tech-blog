import { cn } from '@it-tech-blog/utils';

import {
  Bug,
  Compass,
  CornerUpRight,
  Cpu,
  Database,
  LoaderCircle,
  type LucideIcon,
  MousePointerClick,
  Route,
  Sparkles,
  Workflow,
} from 'lucide-react';

import { SectionHeader } from '../../../shared/SectionHeader';
import { ToneCard } from '../../../shared/ToneCard';
import { ToneIconBox } from '../../../shared/ToneIconBox';
import { toneTokens } from '../../../shared/tones';
import type { CardIconName, WhyReadNextSourceContent } from '../content';

type Props = { content: WhyReadNextSourceContent['benefits'] };

const cardIcon: Record<CardIconName, LucideIcon> = {
  loading: LoaderCircle,
  cpu: Cpu,
  link: MousePointerClick,
  database: Database,
  redirect: CornerUpRight,
  route: Route,
  bug: Bug,
  workflow: Workflow,
  compass: Compass,
};

export const SourceReadingBenefits = ({ content }: Props) => {
  return (
    <section id="section-benefits" aria-labelledby="heading-benefits" className="space-y-lg">
      <SectionHeader
        id="benefits"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<Sparkles className="h-5 w-5" />}
      />

      <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-md">
        {content.cards.map((card) => {
          const Icon = cardIcon[card.icon];
          const t = toneTokens[card.tone];

          return (
            <li key={card.id} className="flex">
              <ToneCard tone={card.tone}>
                <ToneIconBox tone={card.tone}>
                  <Icon className="h-5 w-5" />
                </ToneIconBox>

                <h3
                  className={cn('text-md sm:text-lg font-bold tracking-tight break-keep', t.text)}
                >
                  {card.title}
                </h3>

                <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                  {card.body}
                </p>

                <div className="mt-auto flex flex-col gap-1.5 pt-sm border-t border-dashed border-[var(--term-border)]">
                  <span className="text-[10px] uppercase tracking-wider text-[var(--term-dim)] font-bold">
                    {content.entryLabel}
                  </span>
                  <ul className="flex flex-wrap gap-1">
                    {card.entries.map((entry) => (
                      <li key={entry}>
                        <code
                          className={cn(
                            'inline-block rounded border px-1.5 py-0.5 font-mono text-[10px] [overflow-wrap:anywhere]',
                            t.chip,
                          )}
                        >
                          {entry}
                        </code>
                      </li>
                    ))}
                  </ul>
                </div>
              </ToneCard>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
