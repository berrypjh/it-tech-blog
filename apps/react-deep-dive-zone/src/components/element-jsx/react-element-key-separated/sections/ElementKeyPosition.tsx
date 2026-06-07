import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/CodePreviewPanel';
import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import { toneTokens } from '../../../shared/tones';
import type { ElementCallout, ReactElementKeySeparatedContent } from '../content';
import { NetworkIcon, SparklesIcon } from '../icons';

type Props = { content: ReactElementKeySeparatedContent['position'] };

export const ElementKeyPosition = ({ content }: Props) => (
  <section id="position" aria-labelledby="heading-position" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="position"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<NetworkIcon className="h-5 w-5" />}
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

    <div
      className={cn(
        'flex items-start gap-sm rounded-2xl px-md py-md',
        'bg-gradient-to-r from-sky-50 via-cyan-50 to-violet-50',
        'dark:from-sky-950/40 dark:via-cyan-950/40 dark:to-violet-950/40',
        'border border-sky-200/70 dark:border-sky-800/60',
      )}
    >
      <span
        aria-hidden="true"
        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-sky-500/15 text-sky-700 dark:text-sky-300 shrink-0"
      >
        <SparklesIcon className="h-5 w-5" />
      </span>
      <p className="text-sm font-bold leading-snug text-sky-900 dark:text-sky-100 break-keep">
        {content.emphasis}
      </p>
    </div>
  </section>
);

const CalloutCard = ({ callout }: { callout: ElementCallout }) => {
  const t = toneTokens[callout.tone];
  return (
    <article
      className={cn(
        'flex items-start gap-md rounded-2xl border p-md',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        t.border,
      )}
    >
      <span
        className={cn(
          'inline-flex items-center justify-center rounded-md border px-2 py-1 text-xsm font-mono font-bold tracking-tight shrink-0',
          t.chip,
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
