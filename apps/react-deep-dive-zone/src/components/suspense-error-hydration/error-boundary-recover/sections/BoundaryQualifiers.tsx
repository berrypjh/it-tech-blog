import { cx } from '@berrypjh/react-ui';
import { Ban, FileWarning, Lightbulb, type LucideIcon, ScrollText, Shield } from 'lucide-react';

import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { ErrorBoundaryRecoverContent, HookId } from '../content';

type Props = { content: ErrorBoundaryRecoverContent['hooks'] };

const hookIcon: Record<HookId, LucideIcon> = {
  'derived-state': FileWarning,
  'did-catch': ScrollText,
  'no-function': Ban,
};

export const BoundaryQualifiers = ({ content }: Props) => (
  <section id="hooks" aria-labelledby="heading-hooks" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="hooks"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Shield className="h-5 w-5" aria-hidden="true" />}
    />

    <ul className="grid grid-cols-1 md:grid-cols-3 gap-md items-stretch">
      {content.items.map((hook) => {
        const Icon = hookIcon[hook.id];
        return (
          <ToneCardItem
            key={hook.id}
            tone={hook.tone}
            icon={<Icon className="h-5 w-5" />}
            badge={hook.role}
          >
            <div className="flex flex-col gap-2 min-w-0">
              <code
                className={cx(
                  'font-mono text-xsm font-bold tracking-tight break-all',
                  toneTokens[hook.tone].text,
                )}
              >
                {hook.name}
              </code>
              <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                {hook.description}
              </p>
            </div>
          </ToneCardItem>
        );
      })}
    </ul>

    <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
  </section>
);
