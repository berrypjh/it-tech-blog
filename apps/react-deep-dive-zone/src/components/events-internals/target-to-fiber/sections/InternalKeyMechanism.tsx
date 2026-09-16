import { cx } from '@berrypjh/react-ui';
import { ArrowUpFromLine, KeyRound, Lightbulb, type LucideIcon, Shuffle, Zap } from 'lucide-react';

import { CodePreviewPanel } from '../../../shared/code';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { KeyFactId, TargetToFiberContent } from '../content';

type Props = { content: TargetToFiberContent['internalKey'] };

const factIcon: Record<KeyFactId, LucideIcon> = {
  random: Shuffle,
  closest: ArrowUpFromLine,
  props: Zap,
};

export const InternalKeyMechanism = ({ content }: Props) => (
  <section
    id="internal-key"
    aria-labelledby="heading-internal-key"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      descriptionFullWidth
      id="internal-key"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<KeyRound className="h-5 w-5" aria-hidden="true" />}
    />

    <CodePreviewPanel header={content.codeHeader} badge="main" code={content.code} />

    <ul className="grid grid-cols-1 md:grid-cols-3 gap-md items-stretch">
      {content.facts.map((fact) => {
        const Icon = factIcon[fact.id];
        return (
          <ToneCardItem
            key={fact.id}
            tone={fact.tone}
            icon={<Icon className="h-5 w-5" />}
            badge={fact.role}
          >
            <div className="flex flex-col gap-2 min-w-0">
              <code
                className={cx(
                  'font-mono text-sm font-bold tracking-tight break-all',
                  toneTokens[fact.tone].text,
                )}
              >
                {fact.title}
              </code>
              <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                {fact.description}
              </p>
            </div>
          </ToneCardItem>
        );
      })}
    </ul>

    <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
  </section>
);
