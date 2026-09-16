import { cx } from '@berrypjh/react-ui';
import {
  AlertTriangle,
  Lightbulb,
  type LucideIcon,
  RefreshCw,
  Shield,
  SignalHigh,
} from 'lucide-react';

import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { CallbackId, React19ErrorReportingContent } from '../content';

type Props = { content: React19ErrorReportingContent['callbacks'] };

const callbackIcon: Record<CallbackId, LucideIcon> = {
  uncaught: AlertTriangle,
  caught: Shield,
  recoverable: RefreshCw,
};

export const CallbackCards = ({ content }: Props) => (
  <section id="callbacks" aria-labelledby="heading-callbacks" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="callbacks"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<SignalHigh className="h-5 w-5" aria-hidden="true" />}
    />

    <ul className="grid grid-cols-1 md:grid-cols-3 gap-md items-stretch">
      {content.items.map((callback) => {
        const Icon = callbackIcon[callback.id];
        return (
          <ToneCardItem
            key={callback.id}
            tone={callback.tone}
            icon={<Icon className="h-5 w-5" />}
            badge={callback.when}
          >
            <div className="flex flex-col gap-2 min-w-0">
              <code
                className={cx(
                  'font-mono text-xsm font-bold tracking-tight break-all',
                  toneTokens[callback.tone].text,
                )}
              >
                {callback.name}
              </code>
              <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                {callback.description}
              </p>
            </div>
          </ToneCardItem>
        );
      })}
    </ul>

    <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
  </section>
);
