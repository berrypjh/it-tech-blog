import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import { ToneBadge, ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { ActionCompareCard, LaneUpdateObjectContent } from '../content';
import { actionIconByName, ArrowRightIcon, LightbulbIcon, ZapIcon } from '../icons';

type Props = { content: LaneUpdateObjectContent['action'] };

const amber = toneTokens.amber;

export const ActionMeaningSection = ({ content }: Props) => (
  <section id="section-action" aria-labelledby="heading-action" className="space-y-md">
    <SectionHeader
      id="action"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<ZapIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-md lg:gap-lg items-stretch">
      <CompareCard card={content.leftCard} />
      <Connector label={content.connectorLabel} />
      <CompareCard card={content.rightCard} />
    </div>

    <div
      className={cn(
        'flex items-start gap-sm rounded-lg border bg-[var(--term-bg)] p-md shadow-[0_2px_0_var(--term-border)]',
        amber.border,
      )}
    >
      <ToneIconBox tone="amber" size="sm">
        <LightbulbIcon className="h-3.5 w-3.5" />
      </ToneIconBox>
      <p className="text-xsm sm:text-sm font-semibold leading-snug text-[var(--term-fg)] break-keep">
        {content.bottomNote}
      </p>
    </div>
  </section>
);

const CompareCard = ({ card }: { card: ActionCompareCard }) => {
  const Icon = actionIconByName[card.icon];
  const t = toneTokens[card.tone];
  return (
    <article
      className={cn(
        'flex flex-col gap-md rounded-lg border bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]',
        t.border,
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <ToneIconBox tone={card.tone} size="sm">
            <Icon className="h-4 w-4" />
          </ToneIconBox>
          <h3 className={cn('text-xsm sm:text-sm font-bold leading-tight break-keep', t.text)}>
            {card.title}
          </h3>
        </div>
        <ToneBadge tone={card.tone}>{card.badge}</ToneBadge>
      </header>

      <pre className="overflow-x-auto rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] px-md py-3 font-mono text-xsm sm:text-sm leading-[1.7] text-[var(--term-fg)]">
        <code>{card.code}</code>
      </pre>

      <div className={cn('mt-auto rounded-md border px-3 py-2 font-mono', t.chip)}>
        <span className="block text-[10px] uppercase tracking-wider opacity-80">{card.result}</span>
        <span className={cn('block text-xsm sm:text-sm font-bold break-keep', t.text)}>
          {card.resultDetail}
        </span>
      </div>
    </article>
  );
};

const Connector = ({ label }: { label: string }) => (
  <div className="flex lg:flex-col items-center justify-center gap-2 px-1">
    <span
      aria-hidden="true"
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-dashed border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-accent)] shadow-[0_2px_0_var(--term-border)]"
    >
      <ArrowRightIcon className="h-4 w-4 rotate-90 lg:rotate-0" />
    </span>
    <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)] text-center break-keep">
      {label}
    </span>
  </div>
);
