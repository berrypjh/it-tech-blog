import { cn } from '@it-tech-blog/utils';

import { DownArrow } from '../../../shared/DownArrow';
import { HeroDiagramShell } from '../../../shared/hero';
import type { JsxRuntimeFunctionsContent, RuntimeFunctionCard } from '../content';
import { AtomIcon, BoxIcon, BracesIcon, LayersIcon } from '../icons';
import { ToneIconBox, toneText } from '../localTone';

type Props = { content: JsxRuntimeFunctionsContent['hero']; className?: string };

const iconMap = {
  box: BoxIcon,
  layers: LayersIcon,
  braces: BracesIcon,
} as const;

export const JsxRuntimeHeroDiagram = ({ content, className }: Props) => {
  const a11y = `${content.runtimeCards.map((c) => c.name).join(', ')} → ${content.resultTitle}`;

  return (
    <HeroDiagramShell a11yLabel={a11y} className={className}>
      <div className="relative flex flex-col items-stretch gap-sm" aria-hidden="true">
        <ul className="grid grid-cols-1 @xl:grid-cols-3 gap-sm items-stretch">
          {content.runtimeCards.map((card) => (
            <li key={card.id} className="flex min-w-0">
              <RuntimeFnCard card={card} />
            </li>
          ))}
        </ul>

        <DownArrow />

        <ResultCard title={content.resultTitle} body={content.resultBody} />
      </div>
    </HeroDiagramShell>
  );
};

const RuntimeFnCard = ({ card }: { card: RuntimeFunctionCard }) => {
  const Icon = iconMap[card.iconName];
  return (
    <article
      className={cn(
        'group flex flex-1 flex-col items-center gap-1 rounded-xl border p-md text-center',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)] transition-all hover:-translate-y-0.5 hover:border-[var(--term-accent)]',
      )}
    >
      <ToneIconBox tone={card.tone} size="md">
        <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
      </ToneIconBox>
      <span
        className={cn(
          'font-mono text-sm font-bold tracking-tight break-words',
          toneText(card.tone),
        )}
      >
        {card.name}
      </span>
      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">{card.body1}</p>
      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">{card.body2}</p>
    </article>
  );
};

const ResultCard = ({ title, body }: { title: string; body: string }) => (
  <article
    className={cn(
      'flex items-center gap-sm rounded-xl border bg-[var(--term-bg)] p-md',
      'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      'transition-all hover:-translate-y-0.5 hover:border-[var(--term-accent)]',
    )}
  >
    <ToneIconBox tone="amber" size="md">
      <AtomIcon className="h-[18px] w-[18px]" aria-hidden="true" />
    </ToneIconBox>
    <div className="flex min-w-0 flex-col gap-1">
      <span className={cn('font-mono text-sm font-bold tracking-tight', toneText('amber'))}>
        {title}
      </span>
      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">{body}</p>
    </div>
  </article>
);
