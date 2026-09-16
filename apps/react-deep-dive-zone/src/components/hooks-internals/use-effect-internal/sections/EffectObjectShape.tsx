import { cx } from '@berrypjh/react-ui';
import {
  Box,
  Flag,
  Lightbulb,
  Link2,
  ListChecks,
  type LucideIcon,
  PlayCircle,
  Trash2,
} from 'lucide-react';

import { CodePreviewPanel } from '../../../shared/code';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { EffectFieldId, UseEffectInternalsContent } from '../content';

type Props = { content: UseEffectInternalsContent['effectObject'] };

const fieldIcon: Record<EffectFieldId, LucideIcon> = {
  tag: Flag,
  create: PlayCircle,
  inst: Trash2,
  deps: ListChecks,
  next: Link2,
};

export const EffectObjectShape = ({ content }: Props) => (
  <section
    id="effect-object"
    aria-labelledby="heading-effect-object"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      descriptionFullWidth
      id="effect-object"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Box className="h-5 w-5" aria-hidden="true" />}
    />

    <CodePreviewPanel header={content.codeHeader} badge="main" code={content.code} />

    <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-md items-stretch">
      {content.fields.map((field) => {
        const Icon = fieldIcon[field.id];
        return (
          <ToneCardItem
            key={field.id}
            tone={field.tone}
            icon={<Icon className="h-5 w-5" />}
            badge={field.role}
          >
            <div className="flex flex-col gap-2 min-w-0">
              <code
                className={cx(
                  'font-mono text-sm font-bold tracking-tight break-all',
                  toneTokens[field.tone].text,
                )}
              >
                {field.name}
              </code>
              <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                {field.description}
              </p>
            </div>
          </ToneCardItem>
        );
      })}
    </ul>

    <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
  </section>
);
