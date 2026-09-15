import { cx } from '@berrypjh/react-ui';
import { Braces, Eye, type LucideIcon } from 'lucide-react';

import { CodePreviewPanel } from '../../../shared/code';
import { HeroDiagramShell } from '../../../shared/hero';
import { DownArrow } from '../../../shared/icon';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { HeroExplanationCard, JsxIsNotHtmlContent } from '../content';

type Props = { content: JsxIsNotHtmlContent['hero'] };

export const JsxHeroDiagram = ({ content }: Props) => {
  const a11y = `${content.code} — ${content.explanationCards
    .map((c) => `${c.label}: ${c.title}`)
    .join(', ')}`;

  return (
    <HeroDiagramShell a11yLabel={a11y}>
      <div className="relative flex flex-col items-stretch gap-sm">
        <CodePreviewPanel
          code={content.code}
          showWindowDots
          caption={content.codeCaption}
          size="md"
        />

        <DownArrow />

        <ol className="flex flex-col gap-sm" aria-hidden="true">
          {content.explanationCards.map((card, i) => (
            <li key={card.id} className="flex flex-col gap-sm">
              <FlowCard card={card} />
              {i < content.explanationCards.length - 1 && <DownArrow />}
            </li>
          ))}
        </ol>
      </div>
    </HeroDiagramShell>
  );
};

const cardIcon: Record<HeroExplanationCard['id'], LucideIcon> = {
  appearance: Eye,
  actual: Braces,
};

const FlowCard = ({ card }: { card: HeroExplanationCard }) => {
  const Icon = cardIcon[card.id];
  return (
    <article
      className={cx(
        'group flex items-start gap-sm rounded-xl border bg-[var(--term-bg)] p-md',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
      )}
    >
      <ToneIconBox tone={card.tone} size="md">
        <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
      </ToneIconBox>
      <div className="flex min-w-0 flex-col gap-1">
        <span
          className={cx(
            'inline-flex w-fit items-center rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider',
            toneTokens[card.tone].chip,
          )}
        >
          {card.label}
        </span>
        <h3 className="text-sm font-bold tracking-tight text-[var(--term-fg)]">{card.title}</h3>
        <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">{card.body}</p>
      </div>
    </article>
  );
};
