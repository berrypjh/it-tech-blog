import { cx } from '@berrypjh/react-ui';
import { Bug, CheckCircle2, Gauge, type LucideIcon, Sparkles } from 'lucide-react';

import { CodePreviewPanel } from '../../../shared/code';
import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { JsxRuntimeFunctionsContent, ModeCard } from '../content';

type Props = { content: JsxRuntimeFunctionsContent['modes'] };

const modeIcon: Record<ModeCard['id'], LucideIcon> = {
  production: Gauge,
  development: Bug,
};

export const RuntimeModeComparison = ({ content }: Props) => (
  <section aria-labelledby="heading-modes" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="modes"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Sparkles className="h-5 w-5" aria-hidden="true" />}
    />

    <ul className="grid grid-cols-1 xl:grid-cols-2 gap-md items-stretch">
      {content.cards.map((card) => (
        <li key={card.id} className="flex min-w-0">
          <ModeCardView card={card} />
        </li>
      ))}
    </ul>
  </section>
);

const ModeCardView = ({ card }: { card: ModeCard }) => {
  const Icon = modeIcon[card.id];
  return (
    <article
      className={cx(
        'group flex min-w-0 flex-1 flex-col sm:flex-row gap-md rounded-2xl border p-md',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)] transition-all hover:-translate-y-0.5',
      )}
    >
      <div className="flex flex-col gap-md min-w-0 flex-1">
        <header className="flex items-center gap-sm">
          <span
            aria-hidden="true"
            className={cx(
              'inline-flex items-center justify-center w-14 h-14 rounded-full border',
              toneTokens[card.tone].chip,
            )}
          >
            <Icon className="h-6 w-6" />
          </span>
          <h3
            className={cx(
              'font-mono text-md font-bold tracking-tight break-keep',
              toneTokens[card.tone].text,
            )}
          >
            {card.title}
          </h3>
        </header>
        <ul className="flex flex-col gap-2">
          {card.checks.map((check) => (
            <li key={check.id} className="flex items-start gap-2">
              <span
                aria-hidden="true"
                className={cx(
                  'inline-flex items-center justify-center w-5 h-5 rounded-full border shrink-0 mt-0.5',
                  toneTokens[card.tone].chip,
                )}
              >
                <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
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
