import { cn } from '@it-tech-blog/utils';

import { Braces, Brackets, FileCode2, Flag, type LucideIcon, ShieldCheck } from 'lucide-react';

import { SectionHeader } from '../../../shared/section';
import { ToneCardGrid, ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { RepFile, SharedContent } from '../content';

const fileIcon: Record<RepFile['id'], LucideIcon> = {
  symbols: Brackets,
  types: Braces,
  version: ShieldCheck,
  flags: Flag,
};

type Props = { content: SharedContent['files'] };

export const SharedRepresentativeFiles = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-files" className="space-y-lg">
      <SectionHeader
        id="files"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<FileCode2 className="h-5 w-5" aria-hidden="true" />}
      />

      <ToneCardGrid>
        {content.cards.map((card) => {
          const Icon = fileIcon[card.id];

          return (
            <ToneCardItem
              key={card.id}
              tone={card.tone}
              icon={<Icon className="h-5 w-5" aria-hidden="true" />}
              badge={<code className="font-mono break-all">{card.codeLabel}</code>}
            >
              <header className="flex flex-col gap-0.5">
                <h3
                  className={cn(
                    'text-sm sm:text-md font-bold font-mono tracking-tight break-all',
                    toneTokens[card.tone].text,
                  )}
                >
                  {card.title}
                </h3>
                <p className="text-[11px] uppercase tracking-wider text-[var(--term-muted)] break-keep">
                  {card.subtitle}
                </p>
              </header>

              <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
                {card.description}
              </p>
            </ToneCardItem>
          );
        })}
      </ToneCardGrid>
    </section>
  );
};
