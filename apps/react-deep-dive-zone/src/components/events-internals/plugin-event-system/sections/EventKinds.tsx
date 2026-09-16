import { cx } from '@berrypjh/react-ui';
import { Lightbulb, type LucideIcon, Puzzle, SendHorizontal, Shuffle, Zap } from 'lucide-react';

import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { KindId, PluginEventSystemContent } from '../content';

type Props = { content: PluginEventSystemContent['kinds'] };

const kindIcon: Record<KindId, LucideIcon> = {
  simple: Zap,
  interpreted: Shuffle,
  action: SendHorizontal,
};

export const EventKinds = ({ content }: Props) => (
  <section id="kinds" aria-labelledby="heading-kinds" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="kinds"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Puzzle className="h-5 w-5" aria-hidden="true" />}
    />

    <ul className="grid grid-cols-1 md:grid-cols-3 gap-md items-stretch">
      {content.items.map((kind) => {
        const Icon = kindIcon[kind.id];
        return (
          <ToneCardItem
            key={kind.id}
            tone={kind.tone}
            icon={<Icon className="h-5 w-5" />}
            badge={kind.plugin}
          >
            <div className="flex flex-col gap-2 min-w-0">
              <h3
                className={cx(
                  'text-sm sm:text-md font-bold tracking-tight break-keep',
                  toneTokens[kind.tone].text,
                )}
              >
                {kind.title}
              </h3>
              <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                {kind.description}
              </p>
              <ul className="flex flex-wrap gap-1.5">
                {kind.examples.map((name) => (
                  <li key={name}>
                    <code className="inline-block rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] px-2 py-0.5 font-mono text-[10px] text-[var(--term-fg)]">
                      {name}
                    </code>
                  </li>
                ))}
              </ul>
            </div>
          </ToneCardItem>
        );
      })}
    </ul>

    <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
  </section>
);
