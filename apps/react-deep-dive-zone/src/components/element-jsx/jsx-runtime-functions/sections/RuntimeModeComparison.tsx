import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/CodePreviewPanel';
import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import { toneTokens } from '../../../shared/tones';
import type { JsxRuntimeFunctionsContent, ModeCard } from '../content';
import { BugIcon, CheckCircleIcon, GaugeIcon, SparklesIcon } from '../icons';

type Props = { content: JsxRuntimeFunctionsContent['modes'] };

const iconMap = {
  gauge: GaugeIcon,
  bug: BugIcon,
} as const;

export const RuntimeModeComparison = ({ content }: Props) => (
  <section aria-labelledby="heading-modes" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="modes"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<SparklesIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-md items-stretch">
      {content.cards.map((card) => (
        <li key={card.id} className="flex">
          <ModeCardView card={card} />
        </li>
      ))}
    </ul>
  </section>
);

const ModeCardView = ({ card }: { card: ModeCard }) => {
  const t = toneTokens[card.tone];
  const Icon = iconMap[card.iconName];
  return (
    <article
      className={cn(
        'group flex flex-1 flex-col sm:flex-row gap-md rounded-2xl border p-md',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)] transition-all hover:-translate-y-0.5',
        t.borderHover,
      )}
    >
      <div className="flex flex-col gap-md min-w-0 flex-1">
        <header className="flex items-center gap-sm">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex items-center justify-center w-14 h-14 rounded-full border',
              t.chip,
            )}
          >
            <Icon className="h-6 w-6" />
          </span>
          <h3 className={cn('font-mono text-md font-bold tracking-tight break-keep', t.text)}>
            {card.title}
          </h3>
        </header>
        <ul className="flex flex-col gap-2">
          {card.checks.map((check) => (
            <li key={check.id} className="flex items-start gap-2">
              <span
                aria-hidden="true"
                className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 shrink-0 mt-0.5"
              >
                <CheckCircleIcon className="h-3.5 w-3.5" />
              </span>
              <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
                {check.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="sm:w-1/2 min-w-0 sm:self-stretch flex">
        <div className="w-full">
          <CodePreviewPanel
            code={card.miniCode}
            language={card.id === 'production' ? 'JS' : 'DEV'}
          />
        </div>
      </div>
    </article>
  );
};
