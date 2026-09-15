import { cx } from '@berrypjh/react-ui';
import { Network, Sparkles } from 'lucide-react';

import { CodePreviewPanel } from '../../../shared/code';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { ElementCallout, ReactElementKeySeparatedContent } from '../content';

type Props = { content: ReactElementKeySeparatedContent['position'] };

export const ElementKeyPosition = ({ content }: Props) => (
  <section id="position" aria-labelledby="heading-position" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="position"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Network className="h-5 w-5" aria-hidden="true" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1.1fr)_minmax(0,_0.9fr)] gap-md items-stretch">
      <div className="min-w-0">
        <CodePreviewPanel
          code={content.elementShape}
          language="JS"
          showWindowDots
          caption="React Element shape"
          size="md"
        />
      </div>

      <ul className="flex flex-col gap-md">
        {content.callouts.map((callout) => (
          <li key={callout.id}>
            <CalloutCard callout={callout} />
          </li>
        ))}
      </ul>
    </div>

    <SectionNote icon={<Sparkles className="h-4 w-4" aria-hidden="true" />}>
      {content.emphasis}
    </SectionNote>
  </section>
);

const CalloutCard = ({ callout }: { callout: ElementCallout }) => {
  return (
    <article
      className={cx(
        'flex items-start gap-md rounded-2xl border p-md',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)]',
      )}
    >
      <span
        className={cx(
          'inline-flex items-center justify-center rounded-md border px-2 py-1 text-xsm font-mono font-bold tracking-tight shrink-0',
          toneTokens[callout.tone].chip,
        )}
      >
        {callout.label}
      </span>
      <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-keep">
        {callout.body}
      </p>
    </article>
  );
};
